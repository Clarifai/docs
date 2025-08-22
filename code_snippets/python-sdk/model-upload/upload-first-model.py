from clarifai.runners.models.model_class import ModelClass
from typing import Iterator


class MyFirstModel(ModelClass):
    """A custom model that generates 'Hello World' outputs in a streaming fashion."""

    @ModelClass.method
    def generate(self, text1: str = "") -> Iterator[str]:
        """
        This method streams multiple outputs instead of returning just one.
        It takes an input string and yields a sequence of outputs.
        """
        for i in range(5):  # number of generated outputs
            output_text = text1 + f" Hello World {i}"
            yield output_text
