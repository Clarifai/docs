sentence = "Fuel pump is broken"

classify = dspy.Predict('sentence -> sentiment')
print(classify(sentence=sentence).sentiment)