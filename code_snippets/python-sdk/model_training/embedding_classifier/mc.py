MODEL_ID = "model_text_embedder"
MODEL_TYPE_ID = "embedding-classifier"

# Create a model by passing the model name and model type as parameter
model = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)
