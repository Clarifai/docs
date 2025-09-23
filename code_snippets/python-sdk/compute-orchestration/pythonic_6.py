from clarifai.client import Model

# Set PAT as an environment variable
#   export CLARIFAI_PAT=YOUR_PAT_HERE # Unix-Like Systems
#   set CLARIFAI_PAT=YOUR_PAT_HERE  # Windows

# Initialize with model URL
model = Model(
    url="https://clarifai.com/openai/chat-completion/models/o4-mini",
    # deployment_id="DEPLOYMENT_ID_HERE"
)

response_stream = model.generate(
    prompt="Explain quantum computing in simple terms"  
)

for text_chunk in response_stream:
    print(text_chunk, end="", flush=True)

"""
# --- Load prompt text from URL ---

prompt_from_url = requests.get("https://samples.clarifai.com/featured-models/redpajama-economic.txt") # Remember to import requests
prompt_text = prompt_from_url.text.strip()

response_stream = model.generate(
    prompt=prompt_text
)

for text_chunk in response_stream:
    print(text_chunk, end="", flush=True)

"""