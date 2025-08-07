import os
import asyncio
from clarifai.client.model import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Async main function
async def main():
    # Initialize the model with the appropriate URL
    model = Model(url="https://clarifai.com/openai/chat-completion/models/o4-mini")
    
    # Perform async prediction
    model_prediction = await model.async_predict(
        prompt="What is the value of pi?",
        max_tokens=500
    )

    return await model_prediction

# Entry point
if __name__ == "__main__":
    # Run the async main function and print the result
    print(asyncio.run(main()))
