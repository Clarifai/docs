import asyncio
import os
from deepeval.models.base_model import DeepEvalBaseLLM
from deepeval.test_case import LLMTestCase, LLMTestCaseParams
from deepeval.metrics import GEval
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

# Initialize Clarifai as the judge model
clarifai_llm = ClarifaiLLM(
    model_url="https://clarifai.com/openai/chat-completion/models/gpt-oss-120b",
    pat=os.environ["CLARIFAI_PAT"]
)

# Define a correctness metric
metric = GEval(
    model=clarifai_llm,
    name="Correctness",
    criteria="Determine whether the actual output is factually correct.",
    evaluation_steps=[
        "Check whether facts in 'actual output' contradict 'expected output'",
        "Penalize omission of important details",
    ],
    evaluation_params=[
        LLMTestCaseParams.INPUT,
        LLMTestCaseParams.ACTUAL_OUTPUT,
        LLMTestCaseParams.EXPECTED_OUTPUT,
    ],
)

# Create a test case
test_case = LLMTestCase(
    input="Who ran up the tree?",
    actual_output="The cat ran up the tree.",
    expected_output="The cat."
)

# Run the evaluation
metric.measure(test_case)
print(f"Score: {metric.score}")
print(f"Reason: {metric.reason}")
