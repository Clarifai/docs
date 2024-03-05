##########################################################################################################################
# In this section, we set the user authentication, model URL, and prompt text. Alternatively, set the user and app ID,
# and model name. Change these strings to run your own example.
#########################################################################################################################

PAT = "YOUR_PAT_HERE"

MODEL_URL = "https://clarifai.com/openai/chat-completion/models/GPT-4"
PROMPT = "Write a 5 line rhyming poem about science"

# Alternatively, you can specify user ID, app ID, and model name
#USER_ID = 'openai'
#APP_ID = 'chat-completion'
#MODEL_NAME = 'GPT-4'

###############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##############################################################################

# Import the required packages
import os
from llama_index.llms.clarifai import Clarifai

# Set Clarifai PAT as environment variable
os.environ["CLARIFAI_PAT"] = PAT

# Initialize the LLM class
llm_model = Clarifai(model_url=MODEL_URL)

# Alternatively
# llm_model = Clarifai(
# user_id=USER_ID,
# app_id=APP_ID,
# model_name=MODEL_NAME
# )

# Call complete function
llm_response = llm_model.complete(prompt=PROMPT)

print(llm_response)
