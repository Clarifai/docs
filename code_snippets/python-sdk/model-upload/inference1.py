class InferenceModel(TextToText):
  """User model inference class."""

  def __init__(self) -> None:
    """
    Load inference time artifacts that are called frequently .e.g. models, tokenizers, etc.
    in this method so they are loaded only once for faster inference.
    """
    # current directory
    self.base_path: Path = os.path.dirname(__file__)

  def predict(self, input_data: list,
              inference_parameters: Dict[str, Union[str, float, int, bool]]) -> list:
    """ Custom prediction function for `text-to-text` (also called as `text generation`) model.

    Args:
      input_data (List[str]): List of text
      inference_parameters (Dict[str, Union[str, float, int, bool]]): your inference parameters

    Returns:
      list of TextOutput

    """

    raise NotImplementedError()
