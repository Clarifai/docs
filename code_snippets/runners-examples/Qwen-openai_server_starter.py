import os
import signal
import subprocess
import sys
import threading
from typing import List

import psutil
from clarifai.utils.logging import logger

PYTHON_EXEC = sys.executable


def kill_process_tree(parent_pid, include_parent: bool = True, skip_pid: int = None):
  """Kill the process and all its child processes."""
  if parent_pid is None:
    parent_pid = os.getpid()
    include_parent = False

  try:
    itself = psutil.Process(parent_pid)
  except psutil.NoSuchProcess:
    return

  children = itself.children(recursive=True)
  for child in children:
    if child.pid == skip_pid:
      continue
    try:
      child.kill()
    except psutil.NoSuchProcess:
      pass

  if include_parent:
    try:
      itself.kill()

      # Sometime processes cannot be killed with SIGKILL (e.g, PID=1 launched by kubernetes),
      # so we send an additional signal to kill them.
      itself.send_signal(signal.SIGQUIT)
    except psutil.NoSuchProcess:
      pass


class OpenAI_APIServer:

  def __init__(self, **kwargs):
    self.server_started_event = threading.Event()
    self.process = None
    self.backend = None
    self.server_thread = None

  def __del__(self, *exc):
    # This is important
    # close the server when exit the program
    self.close()

  def close(self):
    if self.process:
      try:
        kill_process_tree(self.process.pid)
      except:
        self.process.terminate()
    if self.server_thread:
      self.server_thread.join()

  def wait_for_startup(self):
    self.server_started_event.wait()

  def validate_if_server_start(self, line: str):
    line_lower = line.lower()
    if self.backend in ["vllm", "sglang", "lmdeploy"]:
      if self.backend == "vllm":
        return "application startup complete" in line_lower or "vllm api server on" in line_lower
      else:
        return f" running on http://{self.host}:" in line.strip()
    elif self.backend == "llamacpp":
      return "waiting for new tasks" in line_lower
    elif self.backend == "tgi":
      return "Connected" in line.strip()

  def _start_server(self, cmds):
    try:
      env = os.environ.copy()
      env["VLLM_USAGE_SOURCE"] = "production-docker-image"
      self.process = subprocess.Popen(
          cmds,
          stdout=subprocess.PIPE,
          stderr=subprocess.STDOUT,
          text=True,
      )
      for line in self.process.stdout:
        logger.info("Server Log:  " + line.strip())
        if self.validate_if_server_start(line):
          self.server_started_event.set()
          # break
    except Exception as e:
      if self.process:
        self.process.terminate()
      raise RuntimeError(f"Failed to start Server server: {e}")

  def start_server_thread(self, cmds: str):
    try:
      # Start the  server in a separate thread
      self.server_thread = threading.Thread(target=self._start_server, args=(cmds,), daemon=None)
      self.server_thread.start()

      # Wait for the server to start
      self.wait_for_startup()
    except Exception as e:
      raise Exception(e)

  @classmethod
  def from_vllm_backend(cls,
                        checkpoints,
                        limit_mm_per_prompt: str = '',
                        max_model_len: float = None,
                        gpu_memory_utilization: float = 0.9,
                        dtype="auto",
                        task="auto",
                        kv_cache_dtype: str = "auto",
                        tensor_parallel_size=1,
                        chat_template: str = None,
                        cpu_offload_gb: float = 0.,
                        quantization: str = None,
                        port=23333,
                        host="localhost",
                        additional_list_args: List[str] = []):
    """Run VLLM OpenAI compatible server

    Args:
      checkpoints (str): model id or path
      limit_mm_per_prompt (str, optional): For each multimodal plugin, limit how many input instances to allow for each prompt. Expects a comma-separated list of items, e.g.: image=16,video=2 allows a maximum of 16 images and 2 videos per prompt. Defaults to 1 for each modality.
      max_model_len (float, optional):Model context length. If unspecified, will be automatically derived from the model config. Defaults to None.
      gpu_memory_utilization (float, optional): The fraction of GPU memory to be used for the model executor, which can range from 0 to 1. For example, a value of 0.5 would imply 50% GPU memory utilization. If unspecified, will use the default value of 0.9. This is a per-instance limit, and only applies to the current vLLM instance.It does not matter if you have another vLLM instance running on the same GPU. For example, if you have two vLLM instances running on the same GPU, you can set the GPU memory utilization to 0.5 for each instance. Defaults to 0.9.
      dtype (str, optional): dtype. Defaults to "float16".
      task (str, optional): The task to use the model for. Each vLLM instance only supports one task, even if the same model can be used for multiple tasks. When the model only supports one task, "auto" can be used to select it; otherwise, you must specify explicitly which task to use. Choices {auto, generate, embedding, embed, classify, score, reward, transcription}. Defaults to "auto".
      kv_cache_dtype (str, optional): Data type for kv cache storage. If “auto”, will use model data type. CUDA 11.8+ supports fp8 (=fp8_e4m3) and fp8_e5m2. ROCm (AMD GPU) supports fp8 (=fp8_e4m3). Defaults to "auto".
      tensor_parallel_size (int, optional): n gpus. Defaults to 1.
      chat_template (str, optional): The file path to the chat template, or the template in single-line form for the specified model. Defaults to None.
      cpu_offload_gb (float, optional): The space in GiB to offload to CPU, per GPU. Default is 0, which means no offloading. Intuitively, this argument can be seen as a virtual way to increase the GPU memory size. For example, if you have one 24 GB GPU and set this to 10, virtually you can think of it as a 34 GB GPU. Then you can load a 13B model with BF16 weight, which requires at least 26GB GPU memory. Note that this requires fast CPU-GPU interconnect, as part of the model is loaded from CPU memory to GPU memory on the fly in each model forward pass. Defaults to 0.
      quantization (str, optional): quantization format {aqlm,awq,deepspeedfp,tpu_int8,fp8,fbgemm_fp8,modelopt,marlin,gguf,gptq_marlin_24,gptq_marlin,awq_marlin,gptq,compressed-tensors,bitsandbytes,qqq,hqq,experts_int8,neuron_quant,ipex,quark,moe_wna16,None}. Defaults to None.
      port (int, optional): port. Defaults to 23333.
      host (str, optional): host name. Defaults to "localhost".
      additional_list_args (List[str], optional): additional args to run subprocess cmd e.g. ["--arg-name", "arg value"]. See more at [this document](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html#vllm-serve). Defaults to [].

    """
    cmds = [
        PYTHON_EXEC, '-m', 'vllm.entrypoints.openai.api_server', '--model', checkpoints, '--dtype',
        str(dtype), '--task',
        str(task), '--kv-cache-dtype',
        str(kv_cache_dtype), '--tensor-parallel-size',
        str(tensor_parallel_size), '--gpu-memory-utilization',
        str(gpu_memory_utilization), '--cpu-offload-gb',
        str(cpu_offload_gb), '--port',
        str(port), '--host',
        str(host), "--trust-remote-code"
    ]

    if quantization:
      cmds += [
          '--quantization',
          str(quantization),
      ]
    if chat_template:
      cmds += [
          '--chat-template',
          str(chat_template),
      ]
    if max_model_len:
      cmds += [
          '--max-model-len',
          str(max_model_len),
      ]
    if limit_mm_per_prompt:
      cmds += [
          '--limit-mm-per-prompt',
          str(limit_mm_per_prompt),
      ]

    if additional_list_args != []:
      cmds += additional_list_args

    print("CMDS to run vllm server: ", cmds)

    _self = cls()

    _self.host = host
    _self.port = port
    _self.backend = "vllm"
    _self.start_server_thread(cmds)
    import time
    time.sleep(5)

    return _self