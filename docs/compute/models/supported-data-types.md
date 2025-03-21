---
description: Learn about supported input and output data types along with usage examples
sidebar_position: 3
---

# Supported Data Types

**Learn about supported input and output data types along with usage examples**
<hr />

Clarifai's model framework supports rich data typing for both inputs and outputs, enabling flexible and type-safe model development. 

Note that when [preparing the `model.py` file](https://docs.clarifai.com/compute/models/model-upload#step-3-prepare-the-modelpy-file/) for uploading a model to the Clarifai platform, each parameter in the class methods must be annotated with a type, and the return type must also be specified. 

The supported types are categorized into Core Primitive, Python Primitive & Generic, and Custom Structured types.

## Core Primitive Types

These are fundamental data types supported by Clarifai's framework for handling common data formats.

| Type        | Python Class | Description                                   | Initialization Examples |
|------------|-------------|-----------------------------------------------|-------------------------|
| **Text**    | `Text`      | UTF-8 encoded text                           | `Text("Hello World")` `Text(url="https://example.com/text.txt")` |
| **Image**   | `Image`     | RGB images (PNG/JPG format)                  | `Image(bytes=b"")` `Image(url="https://example.com/image.jpg")` `Image.from_pil(pil_image)` |
| **Audio**   | `Audio`     | Audio data (WAV/MP3 format)                  | `Audio(bytes=b"")` `Audio(url="https://example.com/audio.mp3")` |
| **Video**   | `Video`     | Video data (MP4/AVI format)                  | `Video(bytes=b"")` `Video(url="https://example.com/video.mp4")` |
| **Frame**   | `Frame`     | Video frame with metadata                    | `Frame(time=1.5, image=Image(...))` |
| **Concept** | `Concept`   | Label with confidence score                  | `Concept("cat", 0.97)` `Concept(name="dog", value=0.92)` |
| **Region**  | `Region`    | Bounding box and list of Concepts            | `Region(box=[0.7, 0.3, 0.9, 0.7], [Concept("cat", 0.7), Concept(name="dog", value=0.2)])` |
| **NameFields** | `dict`    | Structured data                              | `{"scores": [0.9, 0.1]}` |

## Python Primitive & Generic Types

Clarifai's framework also supports standard Python primitive and generic types for flexible data handling. These types enable type-safe processing of complex structures while maintaining compatibility with Python's native type system.

### Standard Python Primitive Types

These fundamental data types are supported as both inputs and outputs.

| Type   | Example Inputs                         | Example Outputs       |
|--------|--------------------------------------|----------------------|
| **int**   | `42`, `user_age: int = 30`          | `return 100`         |
| **float** | `0.95`, `temperature: float = 36.6` | `return 3.14159`     |
| **str**   | `"Hello"`, `prompt: str = "Generate..."` | `return "success"` |
| **bool**  | `True`, `flag: bool = False`       | `return is_valid`    |
| **bytes** | `b'raw_data'`, `file_bytes: bytes` | `return processed_bytes` |
| **None**  | `None`                             | `return None`        |

Here is an example of a primitive type usage:

```python
class MyModel(ModelClass):

  @ModelClass.method
  def calculate_bmi(
    self,
    height_cm: float,
    weight_kg: float
  ) -> float:
    """Calculate Body Mass Index"""
    return weight_kg / (height_cm/100) ** 2
``` 

## Generic Container Types

Clarifai supports generic types for handling complex structures while maintaining compatibility with Python’s type system.

### List[T]

This handles homogeneous collections of any supported type, such as a list of images.

Here is an example of using `List[T]` for batch processing:

```python
class MyModel(ModelClass):

  def load_model(self):
    self.model = ...

  @ModelClass.method
  def predict_images(self, images: List[Image]) -> List[str]:
    """Process multiple images simultaneously"""
    return [self.model(img) for img in images]
```

Here is a client usage example:

```python
images = [
  Image(file_path="img1.jpg"),
  Image(url="https://example.com/img2.png")
]
predictions = model.predict_images(images=images)
```
### Dict[K, V]

This supports JSON-like structures with string keys.

Here is an example of using `Dict[K, V]` for handling model configuration:

```python
class MyModel(ModelClass):

  @ModelClass.method
  def configure_model(
    self,
    params: Dict[str, float]
  ) -> Dict[str, str]:
    """Update model parameters"""
    self.threshold = params.get('threshold', 0.5)
    return {"status": "success", "new_threshold": str(self.threshold)}
``` 

### Tuple[T1, T2, ...]

This handles fixed-size heterogeneous data.

Here is an example of using `Tuple[T1, T2, ...]` for multi-output models:

```python
class MyModel(ModelClass):

  @ModelClass.method
  def analyze_document(
    self,
    doc: List[Text]
  ) -> Tuple[List[Text], Dict[str, float]]:
    """Return keywords and sentiment scores"""
    return (doc, {"docs": len(doc)})
```

## Custom Structured Types with NamedFields

The `NamedFields` class enables creation of custom structured data types for handling complex inputs and outputs. This is particularly useful for models requiring multi-field data or producing compound results.

Here is an example of using `NamedFields` to define a custom document metadata type:

```python
DocumentMetadata = NamedFields(
author=str,
title=str,
page_count=int,
keywords=List[str]
)
class MyModel(ModelClass):

  @ModelClass.method
  def process_document(
    self,
    content: Text,
    metadata: DocumentMetadata
  ) -> NamedFields(
    summary=Text,
    sentiment=float,
    topics=List[str]):
...
```

Here is an example of streaming complex structured data using `Stream[NamedFields]`:

```python
class RealTimeAnalytics(ModelClass):
  @ModelClass.method
  def monitor_sensors(
    self,
    sensor_stream: Stream[NamedFields(
    temperature=float,
    pressure=float,
    timestamp=float
  )]) -> Stream[NamedFields(
    status=str,
    anomaly_score=float
  )]:
    for reading in sensor_stream:
      yield self._analyze_reading(reading)
```

Here is a client usage example:

```python
sensor_data = [
  {"temperature": 25.6, "pressure": 1013, "timestamp": 1625097600},
  {"temperature": 26.1, "pressure": 1012, "timestamp": 1625097610},
  {"temperature": 27.5, "pressure": 1011, "timestamp": 1625097620}
]

for status in model.monitor_sensors(iter(sensor_data)):
  if status.anomaly_score > 0.9:
    return True
``` 

