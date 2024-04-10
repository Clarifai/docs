# Define a class named RAG inheriting from dspy.Module
class RAG(dspy.Module):
    # Initialize the RAG class
    def __init__(self):
        # Call the superclass's constructor
        super().__init__()

        # Initialize the retrieve module
        self.retrieve = dspy.Retrieve()
        
        # Initialize the generate_answer module using ChainOfThought with GenerateAnswer
        self.generate_answer = dspy.ChainOfThought(GenerateAnswer)
    
    # Define the forward method
    def forward(self, question):
        # Retrieve relevant context passages based on the input question
        context = self.retrieve(question).passages
        
        # Generate an answer based on the retrieved context and the input question
        prediction = self.generate_answer(context=context, question=question)
        
        # Return the prediction as a dspy.Prediction object containing context and answer
        return dspy.Prediction(context=context, answer=prediction.answer)
