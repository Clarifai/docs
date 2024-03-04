############################################################################################################################
# In this section, we set the user authentication, model URL, and prompt text. Alternatively, set the user and app ID,
# and model name. Change these strings to run your own example.
###########################################################################################################################

PAT = "YOUR_PAT_HERE"

MODEL_URL = "https://clarifai.com/cohere/embed/models/cohere-text-to-embeddings"
PROMPT = "Hello World!"

# Alternatively, you can specify user ID, app ID, and model name
#USER_ID = "cohere"
#APP_ID = "embed"
#MODEL_NAME = "cohere-text-to-embeddings"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required packages
import os
from llama_index.embeddings.clarifai import ClarifaiEmbedding

# Set Clarifai PAT as environment variable
os.environ["CLARIFAI_PAT"] = PAT

# Initialize the LLM class
embed_model = ClarifaiEmbedding(model_url=MODEL_URL)

# Alternatively
# embed_model = ClarifaiEmbedding(
# user_id=USER_ID,
# app_id=APP_ID,
# model_name=MODEL_NAME
# )

embeddings = embed_model.get_text_embedding(PROMPT)
print(len(embeddings))
# Print the first five elements of embeddings list
print(embeddings[:5])
