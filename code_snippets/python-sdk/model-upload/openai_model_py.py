from typing import List, Iterator
from openai import OpenAI
from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.runners.utils.data_utils import Param
from clarifai.runners.utils.openai_convertor import build_openai_messages

class MyModel(OpenAIModelClass):
    """Wraps an OpenAI-compatible API endpoint."""

    client = OpenAI(
        api_key="local-key",
        base_url="http://localhost:8000/v1",
    )

    model = client.models.list().data[0].id

    def load_model(self):
        """Optional initialization logic."""
        pass

    @OpenAIModelClass.method
    def predict(
        self,
        prompt: str = "",
        chat_history: List[dict] = None,
        max_tokens: int = Param(default=256, description="The maximum number of tokens to generate."),
        temperature: float = Param(default=1.0, description="Sampling temperature (higher = more random)."),
        top_p: float = Param(default=1.0, description="Nucleus sampling threshold."),
    ) -> str:
        """Run a single prompt completion."""
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
        max_tokens: int = Param(default=256, description="The maximum number of tokens to generate."),
        temperature: float = Param(default=1.0, description="Sampling temperature (higher = more random)."),
        top_p: float = Param(default=1.0, description="Nucleus sampling threshold."),
    ) -> Iterator[str]:
        """Stream a completion response."""
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
