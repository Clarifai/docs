while True:
    # Prompt the user to enter a question
    question = input("Enter question: ")
    
    # Check if the user wants to quit the loop
    if question in ['q', 'exit', 'quit']:
        # If the input is 'q', 'exit', or 'quit', break the loop and end the program
        break
    
    # Use the app to query the entered question and get an answer
    answer = app.query(question)
    
    # Print the answer returned by the app
    print(answer)