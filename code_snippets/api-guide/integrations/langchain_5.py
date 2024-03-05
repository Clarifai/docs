##########################################################################################################
# In this section, we set the user authentication, user and app ID, model ID, and the text
# documents we want to upload to the specified app. Change these strings to run your own example.
##########################################################################################################

# Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
USER_ID = 'YOUR_USER_ID_HERE'
APP_ID = 'YOUR_APP_ID_HERE'
# Specify the URLs of the documents to upload
URLs = ["https://www.understandingwar.org/backgrounder/russian-offensive-campaign-assessment-february-8-2023", "https://www.understandingwar.org/backgrounder/russian-offensive-campaign-assessment-february-9-2023"]
# Specify the text to search for
TEXT_SEARCH = "Texts related to Russia attacks"
#  Optionally, specify the number of documents to return
NUMBER_OF_DOCS = 4

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required modules
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import UnstructuredURLLoader
from langchain.vectorstores import Clarifai

# Load files from remote URLs using the unstructured library
loader = UnstructuredURLLoader(urls=URLs)
documents = loader.load()

# Split text into chunks
text_splitter = CharacterTextSplitter(chunk_size=2000, chunk_overlap=0)
docs = text_splitter.split_documents(documents)

# Create a Clarifai vector store from the documents
clarifai_vector_db = Clarifai.from_documents(
 	user_id=USER_ID,
 	app_id=APP_ID,
 	documents=docs,
 	pat=PAT,
 	number_of_docs=NUMBER_OF_DOCS
 )

# Run similarity search using Clarifai
docs = clarifai_vector_db.similarity_search(TEXT_SEARCH)

print(docs)
