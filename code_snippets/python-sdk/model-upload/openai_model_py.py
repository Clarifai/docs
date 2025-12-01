from typing import List, Iterator
from openai import OpenAI
from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.runners.utils.data_utils import Param
from clarifai.runners.utils.openai_convertor import build_openai_messages

class MyModel(OpenAIModelClass):
    """A custom model implementation using OpenAIModelClass."""

    # TODO: please fill in
    # Configure your OpenAI-compatible client for local model
    client = OpenAI(
        api_key="local-key",  # TODO: please fill in - use your local API key
        base_url="http://localhost:8000/v1",  # TODO: please fill in - your local model server endpoint
    )

    # Automatically get the first available model
    model = client.models.list().data[0].id

    def load_model(self):
        """Optional: Add any additional model loading logic here."""
        # TODO: please fill in (optional)
        # Add any initialization logic if needed
        pass

    @OpenAIModelClass.method
    def predict(
        self,
        prompt: str = "",
        chat_history: List[dict] = None,
        max_tokens: int = Param(default=256, description="The maximum number of tokens to generate. Shorter token lengths will provide faster performance."),
        temperature: float = Param(default=1.0, description="A decimal number that determines the degree of randomness in the response"),
        top_p: float = Param(default=1.0, description="An alternative to sampling with temperature, where the model considers the results of the tokens with top_p probability mass."),
    ) -> str:
        """Run a single prompt completion using the OpenAI client."""
        # TODO: please fill in
        # Implement your prediction logic here
        messages = build_openai_messages(prompt, chat_history)
        response = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            max_completion_tokens=max_tokens,
            temperature=temperature,
            top_p=top_p,
        )
        return response.choices[0].message.content

    @OpenAIModelClass.method
    def generate(
        self,
        prompt: str = "",
        chat_history: List[dict] = None,
        max_tokens: int = Param(default=256, description="The maximum number of tokens to generate. Shorter token lengths will provide faster performance."),
        temperature: float = Param(default=1.0, description="A decimal number that determines the degree of randomness in the response"),
        top_p: float = Param(default=1.0, description="An alternative to sampling with temperature, where the model considers the results of the tokens with top_p probability mass."),
    ) -> Iterator[str]:
        """Stream a completion response using the OpenAI client."""
        # TODO: please fill in
        # Implement your streaming logic here
        messages = build_openai_messages(prompt, chat_history)
        stream = self.client.chat.completions.create(
            model=self.model,
            messages=messages,
            max_completion_tokens=max_tokens,
            temperature=temperature,
            top_p=top_p,
            stream=True,
        )
        for chunk in stream:
            if chunk.choices:
                text = (chunk.choices[0].delta.content
                        if (chunk and chunk.choices[0].delta.content) is not None else '')
                yield text
