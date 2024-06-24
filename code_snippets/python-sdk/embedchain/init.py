# Import the App class from the embedchain module
from embedchain import App

# Create an instance of the App class using a custom configuration
app = App.from_config(config={
    # Configuration for the large language model (LLM)
    "llm": {
        # Specify the provider for the LLM, in this case, Clarifai
        "provider": "clarifai",
        # Configuration details for the LLM
        "config": {
            # Specify the model URL from Clarifai
            "model": "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct",
            # Additional model parameters
            "model_kwargs": {
                # Temperature parameter for the model, which controls the randomness of the output
                "temperature": 0.5,
                # Maximum number of tokens (words or pieces of words) in the generated response
                "max_tokens": 1000
            }
        }
    },
    # Configuration for the embedder
    "embedder": {
        # Specify the provider for the embedder, in this case, Clarifai
        "provider": "clarifai",
        # Configuration details for the embedder
        "config": {
            # Specify the embedding model URL from Clarifai
            "model": "https://clarifai.com/openai/embed/models/text-embedding-ada",
        }
    }
})
