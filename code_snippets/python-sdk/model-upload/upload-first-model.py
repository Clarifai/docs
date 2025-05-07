from clarifai.runners.models.model_class import ModelClass
from clarifai.runners.utils.data_types import Text


class MyFirstModel(ModelClass):
    """A custom model that adds 'Hello World' to the end of a text."""

    @ModelClass.method
    def predict(self, text1: Text = "") -> Text:
        """
        This is the method that will be called when the model is run.
        It takes in an input and returns an output.
        """
        output_text = text1.text + " Hello World"
        return Text(output_text)
