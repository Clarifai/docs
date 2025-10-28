import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ['CLARIFAI_PAT'],
)

response = client.embeddings.create(
   input="The food was delicious and the service was excellent.",
   model="https://clarifai.com/openai/embed/models/text-embedding-ada-002"
)

print(response.data[0].embedding)
