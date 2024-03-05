#######################################################################################################
# In this section, we set the user authentication, user and app ID, model ID, and the question
# we want the model to answer. Change these strings to run your own example.
#######################################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = 'meta'
APP_ID = 'Llama-2'
# Change these to whatever model and text you want to use
MODEL_ID = 'llama2-70b-chat'
# Optionally, you can provide a specific model version as the model_version_id arg
# MODEL_VERSION_ID = 'MODEL_VERSION_ID'
RAW_TEXT = 'What NFL team won the Super Bowl in the year Justin Beiber was born?'

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required modules
from langchain.llms import Clarifai

# Initialize a Clarifai LLM
clarifai_llm = Clarifai(pat=PAT, user_id=USER_ID, app_id=APP_ID, model_id=MODEL_ID)

print(clarifai_llm(RAW_TEXT))
