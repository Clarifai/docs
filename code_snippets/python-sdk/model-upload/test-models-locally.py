from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Text


class MyModel(ModelClass):
  """A custom runner that adds "Hello World" to the end of the text."""

  def load_model(self):
    """Load the model here."""

  @ModelClass.method
  def predict(self, text1: Text = "") -> Text:
    output_text = text1.text + "Hello World"

    return Text(output_text)

  @ModelClass.method
  def generate(self, text1: Text = Text("")) -> Iterator[Text]:
    """Example yielding a whole batch of streamed stuff back."""

    for i in range(10):  # fake something iterating generating 10 times.
      output_text = text1.text + f"Generate Hello World {i}"
      yield Text(output_text)

  def test(self):
    res = self.predict(Text("test"))
    assert res.text == "testHello World"

    res = self.generate(Text("test"))
    for i, r in enumerate(res):
      assert r.text == f"testGenerate Hello World {i}"