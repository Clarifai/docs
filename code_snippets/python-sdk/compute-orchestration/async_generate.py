import os
import asyncio
from clarifai.client.model import Model

# Set your Personal Access Token (PAT)
os.environ["CLARIFAI_PAT"] = "YOUR_PAT_HERE"

# Async main function
async def main():
    # Initialize the model with the appropriate URL
    model = Model(url="https://clarifai.com/qwen/qwenLM/models/QwQ-32B-AWQ")

    # Generate response asynchronously
    generate_response = await model.async_generate(
        prompt="What is the value of pi?",
        max_tokens=100
    )

    # Iterate over the async generator to receive streamed results
    async for response in await generate_response:
        print(response)

# Entry point
if __name__ == "__main__":
    # Run the main async function
    asyncio.run(main())
