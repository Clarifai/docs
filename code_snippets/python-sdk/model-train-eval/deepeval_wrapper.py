import asyncio
import os
from deepeval.models.base_model import DeepEvalBaseLLM
from openai import OpenAI

class ClarifaiLLM(DeepEvalBaseLLM):
    def __init__(self, model_url, pat):
        self.model_url = model_url
        self.client = OpenAI(
            base_url="https://api.clarifai.com/v2/ext/openai/v1",
            api_key=pat
        )

    def load_model(self):
        return self.client

    def generate(self, prompt: str) -> str:
        response = self.client.chat.completions.create(
            model=self.model_url,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=1024
        )
        return response.choices[0].message.content

    def generate_raw_response(self, prompt: str, **kwargs):
        return self.generate(prompt), 0

    async def a_generate(self, prompt: str) -> str:
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, self.generate, prompt)

    async def a_generate_raw_response(self, prompt: str, **kwargs):
        result = await self.a_generate(prompt)
        return result, 0

    def get_model_name(self):
        return f"Clarifai: {self.model_url}"
