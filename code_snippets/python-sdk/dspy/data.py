# Import necessary modules from LangChain for text splitting, document loading, and Clarifai vector storage
from langchain.text_splitter import CharacterTextSplitter
from langchain.document_loaders import TextLoader
from langchain.vectorstores import Clarifai as clarifaivectorstore

# Initialize a TextLoader object with the path to the text file containing documents to ingest
loader = TextLoader("/content/examples/RAG/data/Crawfords_Auto_Repair_Guide.txt") # Replace with your file path

# Load documents using the loader
documents = loader.load()

# Set up a CharacterTextSplitter to split documents into smaller chunks for efficient processing
text_splitter = CharacterTextSplitter(chunk_size=1024, chunk_overlap=200)

# Split documents into smaller chunks
docs = text_splitter.split_documents(documents)

# Create a vector database using the Clarifai vector store
clarifai_vector_db = clarifaivectorstore.from_documents(
    user_id=USER_ID,  # User ID for authentication
    app_id=APP_ID,    # App ID for authentication
    documents=docs,   # Split documents
    pat=PAT           # Personal Access Token (PAT) for authentication
)