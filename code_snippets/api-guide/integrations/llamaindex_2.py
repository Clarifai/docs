##########################################################################################################################
# In this section, we set the user authentication, model URL, and prompt text. Alternatively, set the user and app ID,
# and model name. Change these strings to run your own example.
##########################################################################################################################

PAT = "YOUR_PAT_HERE"

MODEL_URL = "https://clarifai.com/meta/Llama-2/models/llama2-7b-chat"
PROMPT = "Write about climate change in 5 lines"

# Alternatively, you can specify user ID, app ID, and model name
#USER_ID = 'meta'
#APP_ID = 'Llama-2'
#MODEL_NAME = 'llama2-70b-chat'

###########################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
##########################################################################

# Import the required packages
import os
from llama_index.llms.clarifai import Clarifai
from llama_index.llms import ChatMessage

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

messages = [ChatMessage(role="user", content=PROMPT)]

# Call chat function
Response = llm_model.chat(messages)

print(Response)
