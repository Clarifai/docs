import functools
import hashlib
import pickle
import os
from typing import Any, Callable

def cache_predictions(cache_dir: str = ".cache"):
    """Decorator to cache model predictions"""
    os.makedirs(cache_dir, exist_ok=True)
    
    def decorator(func: Callable) -> Callable:
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Create cache key from function arguments
            cache_key = hashlib.md5(
                str(args).encode() + str(kwargs).encode()
            ).hexdigest()
            
            cache_file = os.path.join(cache_dir, f"{func.__name__}_{cache_key}.pkl")
            
            # Try to load from cache
            if os.path.exists(cache_file):
                try:
                    with open(cache_file, 'rb') as f:
                        return pickle.load(f)
                except Exception:
                    pass  # Cache corrupted, will regenerate
            
            # Generate new result
            result = func(*args, **kwargs)
            
            # Save to cache
            try:
                with open(cache_file, 'wb') as f:
                    pickle.dump(result, f)
            except Exception:
                pass  # Failed to cache, continue anyway
            
            return result
        return wrapper
    return decorator

# Usage example
@cache_predictions()
def expensive_prediction(model_url: str, input_text: str):
    model = Model(url=model_url, pat=os.environ.get("CLARIFAI_PAT"))
    return model.predict_by_bytes(input_text.encode(), input_type="text")