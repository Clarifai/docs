def test_text_input(self):
  text: list = ["Tell me about Clarifai", "How deploy model to Clarifai"]
  outputs = self.model.predict(text, temperature=0.9) # In term of inference parameters for the above example, it will PASSED
  outputs = self.model.predict(text, top_k=10) # And this one will FAILED since `top_k` param is not defined when init self.model