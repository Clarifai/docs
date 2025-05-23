from clarifai.runners.models.model_class import ModelClass
from typing import Iterator


class MyModel(ModelClass):
    """A custom runner that adds "Hello World" to the end of the text."""

    def load_model(self):
        """Load the model here."""

    @ModelClass.method
    def predict(self, text1: str = "") -> str:
        output_text = text1 + "Hello World"
        return output_text

    @ModelClass.method
    def generate(self, text1: str = "") -> Iterator[str]:
        """Example yielding a whole batch of streamed stuff back."""

        for i in range(10):  # fake something iterating generating 10 times.
            output_text = text1 + f"Generate Hello World {i}"
            yield output_text

    def test(self):
        res = self.predict("test")
        assert res == "testHello World"

        res = self.generate("test")
        for i, r in enumerate(res):
            assert r == f"testGenerate Hello World {i}"
