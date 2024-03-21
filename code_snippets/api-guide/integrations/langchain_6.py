####################################################################################################
# In this section, we set the user authentication, user, and ID of the app already existing on
# Clarifai. Change these strings to run your own example.
###################################################################################################

# Your PAT (Personal Access Token) can be found in the Account's Security section
PAT = 'YOUR_PAT_HERE'
# Specify the correct user_id/app_id pairings
USER_ID = 'YOUR_USER_ID_HERE'
APP_ID = 'YOUR_APP_ID_HERE'

# Optionally, specify the number of documents to return
NUMBER_OF_DOCS = 4

# Specify the text to search for
TEXT_SEARCH = "Texts related to criminals and violence"

############################################################################
# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
############################################################################

# Import the required modules
from langchain.vectorstores import Clarifai
clarifai_vector_db = Clarifai(
 	user_id=USER_ID,
 	app_id=APP_ID,  
 	pat=PAT,
     number_of_docs=NUMBER_OF_DOCS,
 )

# Perform the search
docs = clarifai_vector_db.similarity_search(TEXT_SEARCH)

print(docs)