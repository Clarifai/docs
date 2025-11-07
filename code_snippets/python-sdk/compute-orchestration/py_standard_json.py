from openai import OpenAI
from pydantic import BaseModel, Field
import os

client = OpenAI(
    base_url="https://api.clarifai.com/v2/ext/openai/v1",
    api_key=os.environ["CLARIFAI_PAT"] # Ensure CLARIFAI_PAT is set as an environment variable
)

# Define the output schema
class PersonInfo(BaseModel):
    name: str = Field(..., description="Full name of the person")
    age: int = Field(..., description="Age of the person in years")
    email: str = Field(..., pattern=r"^[\w\.-]+@[\w\.-]+\.\w+$",
                       description="Email address of the person")


# JSON schema, Use the schema in a chat completion
response = client.chat.completions.create(
    model="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    messages=[
        {
            "role": "user",
            "content": (
                "John Miller is 29 years old and can be reached at john.miller@example.com. "
                "He recently joined our company as a data analyst."
            ),
        },
    ],
    max_tokens=200,
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "PersonInfo",
            "schema": PersonInfo.model_json_schema(),
        },
    },
)

print(response.choices[0].message.content)
