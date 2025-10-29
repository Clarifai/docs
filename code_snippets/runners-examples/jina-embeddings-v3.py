from typing import List, Iterator
import os
from clarifai.runners.models.openai_class import OpenAIModelClass
from clarifai.runners.models.model_builder import ModelBuilder

import onnxruntime
import numpy as np
from transformers import AutoTokenizer, PretrainedConfig

from clarifai.utils.logging import logger

#Helper function Mean pool function
def mean_pooling(model_output: np.ndarray, attention_mask: np.ndarray):
            token_embeddings = model_output
            input_mask_expanded = np.expand_dims(attention_mask, axis=-1)
            input_mask_expanded = np.broadcast_to(input_mask_expanded, token_embeddings.shape)
            sum_embeddings = np.sum(token_embeddings * input_mask_expanded, axis=1)
            sum_mask = np.clip(np.sum(input_mask_expanded, axis=1), a_min=1e-9, a_max=None)
            return sum_embeddings / sum_mask
        
class Jinaai_embedding_v2(OpenAIModelClass):
    """
    A custom runner that integrates with the Clarifai platform and uses Jinaai embedding v2 model to process inputs, including text and images.
    """
    client = True
    model = "jinaai-embedding-v3"
    
    def load_model(self):
        """Load the model here and start the server."""
        
        # Load checkpoints
        model_path = os.path.dirname(os.path.dirname(__file__))
        builder = ModelBuilder(model_path, download_validation_only=True)
        logger.info(f"\nDownloading Jinaai {self.model} model checkpoints...\n")
        self.checkpoints =  builder.download_checkpoints(stage='runtime')
        logger.info(f"Checkpoints downloaded to {self.checkpoints}")
        
        #logger.info("Loading Jinaai embedding v3 model...")
        self.tokenizer = AutoTokenizer.from_pretrained(self.checkpoints)
        self.config = PretrainedConfig.from_pretrained(self.checkpoints)
        
        #logger.info(f"Tokenizer and config loaded from 'jinaai/jinaai-embeddings-v3'")
        self.session = onnxruntime.InferenceSession(self.checkpoints + '/onnx/model.onnx')
        
        # log that system is ready
        logger.info(f"Jinaai {self.model} model loaded successfully!")
    
    def tokenize_and_embed(self, input: str):
        """
        Tokenize the input text and return the embedding vector.
        
        Args:
            input (str): The input text to be tokenized and embedded.
        
        Returns:
            np.ndarray: The embedding vector for the input text.
        """
        # Tokenize input
        input_text = self.tokenizer(input, return_tensors='np')
           # Prepare inputs for ONNX model
        task_type = 'text-matching'
        task_id = np.array(self.config.lora_adaptations.index(task_type), dtype=np.int64)
        inputs = {
            'input_ids': input_text['input_ids'],
            'attention_mask': input_text['attention_mask'],
            'task_id': task_id
        }

        # Run model
        outputs = self.session.run(None, inputs)[0]
        return outputs, input_text

    @OpenAIModelClass.method
    def predict(self,
                input: str,) -> List[float]:
        """
        Predict method to process the input text and return the embedding vector.
        
        Args:
            input (str): The input text to be processed.
        
        Returns:
            List[float]: The embedding vector for the input text.
       """
        # Tokenize and embed the input text
        outputs, input_text = self.tokenize_and_embed(input)
        
        # Apply mean pooling and normalization to the model outputs
        embeddings = mean_pooling(outputs, input_text["attention_mask"])
        embeddings = embeddings / np.linalg.norm(embeddings, ord=2, axis=1, keepdims=True)
        
        return embeddings[0].tolist()