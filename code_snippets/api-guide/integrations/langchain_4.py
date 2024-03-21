######################################################################################################
# In this section, we set the user authentication, user and app ID, and the text data we want to
# upload to the specified app. Change these strings to run your own example.
#####################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
USER_ID = 'YOUR_USER_ID_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Specify the texts to upload
texts = [
 	"I really enjoy spending time with you",
 	"I hate spending time with my dog",
 	"I want to go for a run",
 	"I went to the movies yesterday",
 	"I love playing soccer with my friends",
 ]
# Optionally, specify the number of documents to return
NUMBER_OF_DOCS = 4

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required modules
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import TextLoader
from langchain.vectorstores import Clarifai

# Specify list of metadatas
metadatas = [{"id": i, "text": text, "source": "book 1", "category": ["books", "modern"]} for i, text in enumerate(texts)]

# Create a Clarifai vector store from a list of texts
clarifai_vector_db = Clarifai.from_texts(
 	user_id=USER_ID,
 	app_id=APP_ID,
 	texts=texts,
 	pat=PAT,
 	number_of_docs=NUMBER_OF_DOCS,
 	metadatas=metadatas
 )

# Run similarity search using Clarifai
docs = clarifai_vector_db.similarity_search("I would love to see you")

print(docs)
 