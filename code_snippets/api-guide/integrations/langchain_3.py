#################################################################################################
# In this section, we set the user authentication, user and app ID, model ID, and the text
# we want to use to create embeddings. Change these strings to run your own example.
#################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = 'cohere'
APP_ID = 'embed'
# Change these to whatever model and text you want to use
MODEL_ID = 'cohere-text-to-embeddings'
# Optionally, you can provide a specific model version as the model_version_id arg
# MODEL_VERSION_ID = 'MODEL_VERSION_ID'
RAW_TEXT = 'This is a test document.'

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required modules
from langchain.embeddings import ClarifaiEmbeddings
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain

# Create a prompt template to be used with the LLM Chain
template = """Question: {question}

 Answer: Let's think step by step."""

prompt = PromptTemplate(template=template, input_variables=["question"])

# Initialize a Clarifai embedding model
embeddings = ClarifaiEmbeddings(pat=PAT, user_id=USER_ID, app_id=APP_ID, model_id=MODEL_ID)
text = RAW_TEXT

# Call out to Clarifai’s embedding models
query_result = embeddings.embed_query(text)
doc_result = embeddings.embed_documents([text])

print(doc_result)
