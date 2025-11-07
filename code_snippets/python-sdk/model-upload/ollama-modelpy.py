from typing import Any, Dict, List, Iterator
import os
import json
import subprocess
from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.utils.logging import logger
from clarifai.runners.utils.data_utils import Param
from clarifai.runners.utils.data_types import Image
from clarifai.runners.utils.openai_convertor import build_openai_messages

from openai import OpenAI

# Set default host
if not os.environ.get('OLLAMA_HOST'):
  PORT = '23333'  # Default port for Ollama server
  os.environ["OLLAMA_HOST"] = f'127.0.0.1:{PORT}' # Change host name if you want to run of different host.
OLLAMA_HOST = os.environ.get('OLLAMA_HOST')

if not os.environ.get('OLLAMA_CONTEXT_LENGTH'):
    # Set default context length if not set
    context_length = '8192'
    os.environ["OLLAMA_CONTEXT_LENGTH"] = context_length  # Default context length for Llama 3.2, You can change this for larger context.
OLLAMA_CONTEXT_LENGTH = os.environ.get('OLLAMA_CONTEXT_LENGTH')

VERBOSE_OLLAMA = False

def run_ollama_server(model_name: str = 'llama3.2'):
    """
    start the Ollama server.
    """
    from clarifai.runners.utils.model_utils import execute_shell_command, terminate_process

    try:
        logger.info(f"Starting Ollama server in the host: {OLLAMA_HOST}")
        start_process = execute_shell_command("ollama serve",
                                                  stdout=None if VERBOSE_OLLAMA else subprocess.DEVNULL,
                                                  stderr=subprocess.STDOUT if VERBOSE_OLLAMA else subprocess.DEVNULL)
        if start_process:
            pull_model=execute_shell_command(f"ollama pull {model_name}",
                                             stdout=None if VERBOSE_OLLAMA else subprocess.DEVNULL,
                                             stderr=subprocess.STDOUT if VERBOSE_OLLAMA else subprocess.DEVNULL)
            logger.info(f"Model {model_name} pulled successfully.")
            logger.info(f"Ollama server started successfully on {OLLAMA_HOST}")

    except Exception as e:
        logger.error(f"Error starting Ollama server: {e}")
        if 'start_process' in locals():
            terminate_process(start_process)
        raise RuntimeError(f"Failed to start Ollama server: {e}")

# Check if Image has content before building messages
def has_image_content(image: Image) -> bool:
    """Check if Image object has either bytes or URL."""
    return bool(getattr(image, 'url', None) or getattr(image, 'bytes', None))


class OllamaModelClass(OpenAIModelClass):

    client =  True
    model = True

    def load_model(self):
        """
        Load the Ollama model.
        """
        #set the model name here or via OLLAMA_MODEL_NAME
        self.model = os.environ.get("OLLAMA_MODEL_NAME", 'llama3.2') #You can change any model name here which is supported by ollama.

        #start ollama server
        run_ollama_server(model_name=self.model)

        self.client = OpenAI(
                api_key="notset",
                base_url= f"http://{OLLAMA_HOST}/v1")

        logger.info(f"Ollama model loaded successfully: {self.model}")


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
