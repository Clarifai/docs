# Defining a class named GenerateAnswer which inherits from dspy.Signature
class GenerateAnswer(dspy.Signature):
    """Think and Answer questions based on the context provided."""

    # Defining input fields with descriptions
    context = dspy.InputField(desc="May contain relevant facts about user query")
    question = dspy.InputField(desc="User query")
    
    # Defining output field with description
    answer = dspy.OutputField(desc="Answer in one or two lines")
