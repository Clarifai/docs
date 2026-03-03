# Initialize a vLLM model (auto-selects GPU instance)
clarifai model init --toolkit vllm --model-name Qwen/Qwen3-0.6B

# Initialize an SGLang model
clarifai model init --toolkit sglang --model-name Qwen/Qwen2-7B

# Initialize a HuggingFace model
clarifai model init --toolkit huggingface --model-name google/gemma-2b

# Initialize a blank Python model
clarifai model init my-model
