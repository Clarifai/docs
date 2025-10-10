import sys
import time
import socket
import os
import json
import subprocess
from typing import List, Iterator

from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.runners.models.model_builder import ModelBuilder
from clarifai.utils.logging import logger

from clarifai.runners.utils.data_utils import Param
from clarifai.runners.utils.data_types import Image
from clarifai.runners.utils.openai_convertor import build_openai_messages

from openai import OpenAI


VERBOSE_LMSTUDIO = True # Set to True to see the output of the lmstudio server in the logs

def _stream_command(cmd: str, verbose: bool = True):
    """
    Run a shell command, streaming its combined stdout/stderr line by line.
    Returns True on exit code 0, else raises RuntimeError.
    """
    logger.info(f"Running: {cmd}")
    # Force line buffering from many tools by setting environment tweaks
    env = os.environ.copy()
    env["PYTHONUNBUFFERED"] = "1"
    # Start process
    process = subprocess.Popen(
        cmd,
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,
        env=env
    )
    if verbose and process.stdout:
        for line in iter(process.stdout.readline, ""):
            if line:  # strip trailing newline for cleaner log
                logger.info(f"[lms logs] {line.rstrip()}")
    ret = process.wait()
    if ret != 0:
        raise RuntimeError(f"Command failed ({ret}): {cmd}")
    return True

def _wait_for_port(port: int, timeout: float = 30.0):
    """
    Wait until something is listening on localhost:port.
    """
    start = time.time()
    while time.time() - start < timeout:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(1)
            try:
                if sock.connect_ex(("127.0.0.1", port)) == 0:
                    return True
            except Exception:
                pass
        time.sleep(0.5)
    raise RuntimeError(f"Server did not start listening on port {port} within {timeout}s")

def run_lms_server(model_name: str = 'LiquidAI/LFM2-1.2B-GGUF', port: int = 11434,
                   context_length: int = 4096) -> None:
    """
    Start the lmstudio server with ordered, real‑time logs.
    """
    from clarifai.runners.utils.model_utils import terminate_process  # keep if needed elsewhere
    try:
        # 1. Pull model
        _stream_command(f"lms get https://huggingface.co/{model_name} --verbose", verbose=VERBOSE_LMSTUDIO)
        logger.info(f"Model {model_name} pulled successfully.")

        # 2. Unload previous models
        _stream_command("lms unload --all", verbose=VERBOSE_LMSTUDIO)
        logger.info("All models unloaded successfully.")

        # 3. Load target model
        _stream_command(f"lms load {model_name} --verbose --context-length {context_length}",
                        verbose=VERBOSE_LMSTUDIO)
        logger.info(f"Model {model_name} loaded (context_length={context_length}).")

        # 4. Start server (run in background so we return)
        logger.info(f"Starting lmstudio server on port {port}...")
        # Start server detached so we can still stream its startup output briefly if verbose.
        server_proc = subprocess.Popen(
            f"lms server start --port {port}",
            shell=True,
            stdout=None if not VERBOSE_LMSTUDIO else sys.stdout,
            stderr=None if not VERBOSE_LMSTUDIO else sys.stderr
        )

        # 5. Wait for port to be open
        _wait_for_port(port)
        logger.info(f"lms server started successfully on port {port} (pid={server_proc.pid}).")

    except Exception as e:
        logger.error(f"Error starting lmstudio server: {e}")
        raise RuntimeError(f"Failed to start lmstudio server: {e}")

# Check if Image has content before building messages
def has_image_content(image: Image) -> bool:
    """Check if Image object has either bytes or URL."""
    return bool(getattr(image, 'url', None) or getattr(image, 'bytes', None))

class LMstudioModelClass(OpenAIModelClass):

    client =  True
    model = True

    def load_model(self):
        """
        Load the lmstudio model.
        """
        model_path = os.path.dirname(os.path.dirname(__file__))
        builder = ModelBuilder(model_path, download_validation_only=True)
        self.model = builder.config['toolkit']['model']
        self.port = builder.config['toolkit']['port']
        self.context_length = builder.config['toolkit']['context_length']
        
        #start lmstudio server
        run_lms_server(model_name=self.model, port=self.port, context_length=self.context_length)

        self.client = OpenAI(
                api_key="notset",
                base_url= f"http://localhost:{self.port}/v1")

        logger.info(f"LMstudio model loaded successfully: {self.model}")


    @OpenAIModelClass.method
    def predict(self,
                prompt: str,
                image: Image = None,
                images: List[Image] = None,
                chat_history: List[dict] = None,
                tools: List[dict] = None,
                tool_choice: str = None,
                max_tokens: int = Param(default=2048, description="The maximum number of tokens to generate. Shorter token lengths will provide faster performance.", ),
                temperature: float = Param(default=0.7, description="A decimal number that determines the degree of randomness in the response", ),
                top_p: float = Param(default=0.95, description="An alternative to sampling with temperature, where the model considers the results of the tokens with top_p probability mass."),
                ) -> str:
      """
      This method is used to predict the response for the given prompt and chat history using the model and tools.
      """
      if tools is not None and tool_choice is None:
          tool_choice = "auto"

      img_content = image if has_image_content(image) else None

      messages = build_openai_messages(prompt=prompt, image=img_content, images=images, messages=chat_history)
      response = self.client.chat.completions.create(
          model=self.model,
          messages=messages,
          tools=tools,
          tool_choice=tool_choice,
          max_completion_tokens=max_tokens,
          temperature=temperature,
          top_p=top_p)

      if response.usage is not None:
            self.set_output_context(prompt_tokens=response.usage.prompt_tokens,
                                    completion_tokens=response.usage.completion_tokens)
            if len(response.choices) == 0:
                # still need to send the usage back.
                return ""

      if response.choices[0] and response.choices[0].message.tool_calls:
        # If the response contains tool calls, return as a string
        tool_calls = response.choices[0].message.tool_calls
        tool_calls_json = json.dumps([tc.to_dict() for tc in tool_calls], indent=2)
        return tool_calls_json
      else:
        # Otherwise, return the content of the first choice
        return response.choices[0].message.content


    @OpenAIModelClass.method
    def generate(self,
                prompt: str,
                image: Image = None,
                images: List[Image] = None,
                chat_history: List[dict] = None,
                tools: List[dict] = None,
                tool_choice: str = None,
                max_tokens: int = Param(default=2048, description="The maximum number of tokens to generate. Shorter token lengths will provide faster performance.", ),
                temperature: float = Param(default=0.7, description="A decimal number that determines the degree of randomness in the response", ),
                top_p: float = Param(default=0.95, description="An alternative to sampling with temperature, where the model considers the results of the tokens with top_p probability mass.")) -> Iterator[str]:
      """
      This method is used to stream generated text tokens from a prompt + optional chat history and tools.
      """
      if tools is not None and tool_choice is None:
          tool_choice = "auto"

      img_content = image if has_image_content(image) else None

      messages = build_openai_messages(prompt=prompt, image=img_content, images=images, messages=chat_history)
      for chunk in self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            tools=tools,
            tool_choice=tool_choice,
            max_completion_tokens=max_tokens,
            temperature=temperature,
            top_p=top_p,
            stream=True,
            stream_options={"include_usage": True}
            ):
            if chunk.usage is not None:
                if chunk.usage.prompt_tokens or chunk.usage.completion_tokens:
                    self.set_output_context(prompt_tokens=chunk.usage.prompt_tokens, completion_tokens=chunk.usage.completion_tokens)
                if len(chunk.choices) == 0: # still need to send the usage back.
                    yield ""

            if chunk.choices:
                if chunk.choices[0].delta.tool_calls:
                # If the response contains tool calls, return the first one as a string
                    import json
                    tool_calls = chunk.choices[0].delta.tool_calls
                    tool_calls_json = [tc.to_dict() for tc in tool_calls]
                    # Convert to JSON string
                    json_string = json.dumps(tool_calls_json, indent=2)
                    # Yield the JSON string
                    yield json_string
                else:
                    # Otherwise, return the content of the first choice
                    text = (chunk.choices[0].delta.content
                            if (chunk and chunk.choices[0].delta.content) is not None else '')
                    yield text
