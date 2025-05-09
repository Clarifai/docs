from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Text
from typing import Iterator


class MyModel(ModelClass):
  """A custom runner that adds "Hello World" to the end of the text."""

  def load_model(self):
    """Load the model here."""

  @ModelClass.method
  def predict(self, text1: Text = "") -> Text:
    """This is the method that will be called when the runner is run. It takes in an input and
    returns an output.
    """

    output_text = text1.text + " Hello World!"

    return Text(output_text)

  @ModelClass.method
  def generate(self, text1: Text = Text("")) -> Iterator[Text]:
    """Example yielding a whole batch of streamed stuff back."""

    for i in range(10):  # fake something iterating generating 10 times.
      output_text = text1.text + f"Generate Hello World {i}"
      yield Text(output_text)

  @ModelClass.method
  def stream(self, input_iterator: Iterator[Text]) -> Iterator[Text]:
    """Example yielding a whole batch of streamed stuff back."""

    for i, input in enumerate(input_iterator):
      output_text = input.text + f"Stream Hello World {i}"
      yield Text(output_text)