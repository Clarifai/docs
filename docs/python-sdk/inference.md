# Inference from AI Models

docs.clarifai.com/python-sdk/inference-models

In this comprehensive guide, we illuminate the seamless and robust process of extracting meaningful insights through inference, showcasing the prowess of Clarifai's cutting-edge artificial intelligence models.

During inference, Clarifai's AI models come to life, taking input information and generating precise output predictions or classifications. This dynamic process is rooted in the patterns and knowledge meticulously acquired during the models' training, resulting in a sophisticated understanding of various data domains. Whether you're going into image recognition, mastering natural language processing, or unraveling the complexities of predictive analytics, the Clarifai Python SDK empowers you to harness the full potential of AI inference. Efficiency and accuracy in inference are paramount, especially when deploying Clarifai AI models in real-world scenarios. 

This documentation serves as your gateway to mastering inference, providing you with the tools and insights needed to automate decision-making, extract valuable information, and elevate the overall efficiency of your applications across diverse domains.

Embark on this journey with Clarifai Python SDK, where the realm of AI inference awaits your exploration. Uncover the possibilities, refine your understanding, and unleash the potential of Clarifai's AI models in your projects.

&lt;docs.clarifai.com/python-sdk/inference-models/image>


## Image 


 In the dynamic landscape of modern technology, image recognition stands as a pivotal aspect, unlocking boundless possibilities for developers and businesses alike. Clarifai's Python SDK empowers you to seamlessly integrate advanced image recognition functionalities into your applications, harnessing the potential of artificial intelligence. The Clarifai Python SDK enables you to tap into the rich insights hidden within visual data. Whether you're building applications for content moderation, object detection, or image classification, our SDK offers a robust foundation to turn images into actionable information. Designed for simplicity and efficiency, our Python SDK facilitates the integration of Clarifai's state-of-the-art image recognition models into your projects with ease. From installation to execution, this documentation guides you through every step, ensuring a smooth and intuitive experience.


### Visual Classifier

Harnessing the power of Clarifai's Visual Classifier, you can seamlessly categorize images through the intuitive Predict API for images. This capability enables you to submit input images to a classification model of your choice, providing a straightforward mechanism for obtaining accurate and meaningful predictions. You have the option to supply image data through either URLs or files, enhancing the adaptability of the platform for diverse image classification scenarios.

> ***Note:***You can send up to 128 images in one API call. The file size of each image input should be less than 20MB.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-classifier%22%5D%7D%5D) to view the available models for this use case.



```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = "general-image-recognition"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40"
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, input_type="image"
)

# Get the output
print(model_prediction.outputs[0].data)
```

<details>
<summary> Output </summary>
<br>
concepts {

  id: "ai_HLmqFqBf"

  name: "train"

  value: 0.999604881

  app_id: "main"

}

concepts {

  id: "ai_fvlBqXZR"

  name: "railway"

  value: 0.999297619

  app_id: "main"

}

concepts {

  id: "ai_SHNDcmJ3"

  name: "subway system"

  value: 0.99825567

  app_id: "main"

}

concepts {

  id: "ai_6kTjGfF6"

  name: "station"

  value: 0.998010933

  app_id: "main"

}

concepts {

  id: "ai_RRXLczch"

  name: "locomotive"

  value: 0.997254908

  app_id: "main"

}

concepts {

  id: "ai_Xxjc3MhT"

  name: "transportation system"

  value: 0.996976852

  app_id: "main"

}

concepts {

  id: "ai_VRmbGVWh"

  name: "travel"

  value: 0.988967717

  app_id: "main"

}

concepts {

  id: "ai_jlb9q33b"

  name: "commuter"

  value: 0.98089534

  app_id: "main"

}

concepts {

  id: "ai_2gkfMDsM"

  name: "platform"

  value: 0.980635285

  app_id: "main"

}

concepts {

  id: "ai_n9vjC1jB"

  name: "light"

  value: 0.974186838

  app_id: "main"

}

concepts {

  id: "ai_sQQj52KZ"

  name: "train station"

  value: 0.96878773

  app_id: "main"

}

concepts {

  id: "ai_l4WckcJN"

  name: "blur"

  value: 0.967302203

  app_id: "main"

}

concepts {

  id: "ai_WBQfVV0p"

  name: "city"

  value: 0.96151042

  app_id: "main"

}

concepts {

  id: "ai_TZ3C79C6"

  name: "road"

  value: 0.961382031

  app_id: "main"

}

concepts {

  id: "ai_CpFBRWzD"

  name: "urban"

  value: 0.960375667

  app_id: "main"

}

concepts {

  id: "ai_tr0MBp64"

  name: "traffic"

  value: 0.959969819

  app_id: "main"

}

concepts {

  id: "ai_GjVpxXrs"

  name: "street"

  value: 0.947492182

  app_id: "main"

}

concepts {

  id: "ai_mcSHVRfS"

  name: "public"

  value: 0.934322

  app_id: "main"

}

concepts {

  id: "ai_J6d1kV8t"

  name: "tramway"

  value: 0.931958199

  app_id: "main"

}

concepts {

  id: "ai_6lhccv44"

  name: "business"

  value: 0.929547548

  app_id: "main"

}
</details>






### Visual Detector - Image

Dive into a richer understanding of image content with Clarifai's Predict API Visual Detector. Unlike image classification, where a single label is assigned to the entire image, Visual Detector goes beyond, detecting and outlining multiple objects or regions within an image, associating them with specific classes or labels. Similar to image classification, the Predict API for visual detection accommodates input images through URLs or files.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D) to view the available models for this use case.

```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'general-image-detection'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f'

#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id
# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)


DETECTION_IMAGE_URL = "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg"
model_url = "https://clarifai.com/clarifai/main/models/general-image-detection"
detector_model = Model(
    url=model_url,
    pat="YOUR_PAT",
)



# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

prediction_response = detector_model.predict_by_url(
    DETECTION_IMAGE_URL, input_type="image"
)

# Since we have one input, one output will exist here
regions = prediction_response.outputs[0].data.regions

for region in regions:
    # Accessing and rounding the bounding box values
    top_row = round(region.region_info.bounding_box.top_row, 3)
    left_col = round(region.region_info.bounding_box.left_col, 3)
    bottom_row = round(region.region_info.bounding_box.bottom_row, 3)
    right_col = round(region.region_info.bounding_box.right_col, 3)

    for concept in region.data.concepts:
        # Accessing and rounding the concept value
        name = concept.name
        value = round(concept.value, 4)

        print(
            (f"{name}: {value} BBox: {top_row}, {left_col}, {bottom_row}, {right_col}")
        )

```

Output:

Footwear: 0.9618 BBox: 0.879, 0.305, 0.925, 0.327

Footwear: 0.9593 BBox: 0.882, 0.284, 0.922, 0.305

Footwear: 0.9571 BBox: 0.874, 0.401, 0.923, 0.418

Footwear: 0.9546 BBox: 0.87, 0.712, 0.916, 0.732

Footwear: 0.9518 BBox: 0.882, 0.605, 0.918, 0.623

Footwear: 0.95 BBox: 0.847, 0.587, 0.907, 0.604

Footwear: 0.9349 BBox: 0.878, 0.475, 0.917, 0.492

Tree: 0.9145 BBox: 0.009, 0.019, 0.451, 0.542

Footwear: 0.9127 BBox: 0.858, 0.393, 0.909, 0.407

Footwear: 0.8969 BBox: 0.812, 0.433, 0.844, 0.445

Footwear: 0.8747 BBox: 0.852, 0.49, 0.912, 0.506

Jeans: 0.8699 BBox: 0.511, 0.255, 0.917, 0.336

Footwear: 0.8203 BBox: 0.808, 0.453, 0.833, 0.465

Footwear: 0.8186 BBox: 0.8, 0.378, 0.834, 0.391

Jeans: 0.7921 BBox: 0.715, 0.273, 0.895, 0.326

Tree: 0.7851 BBox: 0.0, 0.512, 0.635, 0.998

Woman: 0.7693 BBox: 0.466, 0.36, 0.915, 0.449

Jeans: 0.7614 BBox: 0.567, 0.567, 0.901, 0.647

Footwear: 0.7287 BBox: 0.847, 0.494, 0.884, 0.51

Tree: 0.7216 BBox: 0.002, 0.005, 0.474, 0.14

Jeans: 0.7098 BBox: 0.493, 0.447, 0.914, 0.528

Footwear: 0.6929 BBox: 0.808, 0.424, 0.839, 0.437

Jeans: 0.6734 BBox: 0.728, 0.464, 0.887, 0.515

Woman: 0.6141 BBox: 0.464, 0.674, 0.922, 0.782

Human leg: 0.6032 BBox: 0.681, 0.577, 0.897, 0.634

...

Footwear: 0.3527 BBox: 0.844, 0.5, 0.875, 0.515

Footwear: 0.3395 BBox: 0.863, 0.396, 0.914, 0.413

Human hair: 0.3358 BBox: 0.443, 0.586, 0.505, 0.622

Tree: 0.3306 BBox: 0.6, 0.759, 0.805, 0.929


### Visual Detector - Video

Enhance your capabilities with Clarifai's Predict API, which provides predictions for every frame when processing a video as input. The video Predict API is highly configurable, allowing users to fine-tune requests, including the number of frames processed per second for more control over analysis speed. Choose the most suitable model for your visual detection task.

> ***Note:*** Video length should be at most 10mins in length or 100 MB in size when uploaded through URL.

Visit this [link](https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-detector%22%5D%7D%5D&page=2&perPage=24) to view the available  models for this use case.



```python

from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under # Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
USER_ID = "clarifai"
APP_ID = "main"
# Change these to whatever model and video URL you want to use
MODEL_ID = "general-image-recognition"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'

VIDEO_URL = "https://samples.clarifai.com/beer.mp4"
# Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
# The number must range betweeen 100 and 60000.
# FPS = 1000/sample_ms

SAMPLE_MS = 2000

# Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id
# eg: model = Model("https://clarifai.com/clarifai/main/models/general-image-recognition")


model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID, pat="YOUR_PAT")
output_config = {"sample_ms": SAMPLE_MS}  # Run inference every 2 seconds
model_prediction = model.predict_by_url(
    BEER_VIDEO_URL, input_type="video", output_config=output_config
)

# The predict API gives flexibility to generate predictions for data provided through filepath, URL and bytes format.

# Example for prediction through Filepath:
# model_prediction = model.predict_by_filepath(video_file_path, input_type="video", output_config=output_config)

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_video_bytes, input_type="video", output_config=output_config)


# Print the frame info and the first concept name in each frame
for frame in model_prediction.outputs[0].data.frames:
    print(f"Frame Info: {frame.frame_info} Concept: {frame.data.concepts[0].name}\n")

```

**Output**

Frame Info: time: 1000

 Concept: beer

Frame Info: index: 1

time: 3000

 Concept: beer

Frame Info: index: 2

time: 5000

 Concept: beer

Frame Info: index: 3

time: 7000

 Concept: beer

Frame Info: index: 4

time: 9000

 Concept: beer


### Visual Segmenter

The Clarifai Predict API offers a powerful capability to generate segmentation masks by providing an image as input to a segmentation model. This functionality allows for the detailed analysis of images, where distinct regions are identified and associated with specific concepts.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-segmenter%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'image-general-segmentation'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '1581820110264581908ce024b12b4bfb'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

SEGMENT_IMAGE_URL = "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="image")

model_url = "https://clarifai.com/clarifai/main/models/image-general-segmentation"
segmentor_model = Model(
    url=model_url,
    pat="YOUR_PAT",
)

prediction_response = segmentor_model.predict_by_url(
    SEGMENT_IMAGE_URL, input_type="image"
)

regions = prediction_response.outputs[0].data.regions

for region in regions:
    for concept in region.data.concepts:
        # Accessing and rounding the concept's percentage of image covered
        name = concept.name
        value = round(concept.value, 4)
        print((f"{name}: {value}"))



```


Output:

tree: 0.4965

person: 0.151

house: 0.0872

pavement: 0.0694

bush: 0.0588

road: 0.0519

sky-other: 0.0401

grass: 0.0296

building-other: 0.0096

unlabeled: 0.0035

roof: 0.0017

teddy bear: 0.0006


### Image To Text

Enhance your application by producing descriptive captions for images using the Clarifai Predict API. By providing an image as input to a state-of-the-art image-to-text model, you can extract meaningful textual descriptions effortlessly.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-text%22%5D%7D%5D) to view the available models for this use case.

```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "salesforce"
#APP_ID = "blip"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = "general-english-image-caption-blip"
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4"
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = (
    "https://clarifai.com/salesforce/blip/models/general-english-image-caption-blip"
)
image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg"

# The Predict API also accepts data through URL, Filepath & Bytes.
# Example for predict by filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

# Example for predict by bytes:
# model_prediction = Model(model_url).predict_by_bytes(image_bytes, input_type="text")

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, input_type="image"
)

# Get the output
print(model_prediction.outputs[0].data.text.raw)

```

Output:

a photograph of a statue of liberty in front of a blue sky


### Image To Image

Elevate the resolution of your images using the Clarifai Predict API, specifically designed for image upscaling. This functionality allows you to enhance the quality of an image using an upscaling model.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22image-to-image%22%5D%7D%5D) to view the available models for this use case.

```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "stability-ai"
#APP_ID = "Upscale"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'stabilityai-upscale'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)


inference_params = dict(width=1024)

# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(image_bytes, input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="image")

model_url = "https://clarifai.com/stability-ai/Upscale/models/stabilityai-upscale"


image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg"
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, input_type="image", inference_params=inference_params
)

# Get the output
output_base64 = model_prediction.outputs[0].data.image.base64

image_info = model_prediction.outputs[0].data.image.image_info

with open("image.png", "wb") as f:
    f.write(output_base64)

```

Output:

—--


### Visual Embedder

The Predict API empowers you to leverage image embeddings through an embedding model. Image embeddings are vector representations that encapsulate the semantic content of an image, offering a powerful tool for various applications such as similarity search, recommendation systems, and more.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-embedder%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "clarifai"
#APP_ID = "main"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'image-embedder-clip'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

image_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg"


# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_url(input_bytes ,input_type="image")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="image")


model_url = "https://clarifai.com/clarifai/main/models/image-embedder-clip"

# Model Predict
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    image_url, "image"
)
# print(model_prediction.outputs[0].data.text.raw)

embeddings = model_prediction.outputs[0].data.embeddings[0].vector

num_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions

embeddings[:10]

```

Outputs:

[-0.016209319233894348,

 -0.03517452999949455,

 0.0031261674594134092,

 0.03941042721271515,

 0.01166260801255703,

 -0.02489173412322998,

 0.04667072370648384,

 0.006998186931014061,

 0.05729646235704422,

 0.0077746850438416]


## &lt;docs.clarifai.com/python-sdk/inference-models/text>


## Text 

Unlock the potential of Clarifai's state-of-the-art text-based AI features, allowing you to elevate your applications with unparalleled accuracy and efficiency. Dive into a comprehensive suite of tools designed to simplify the integration of Clarifai's AI capabilities, empowering developers to unleash the potential of text-driven applications across various domains. Discover a robust and developer-friendly SDK that streamlines the incorporation of advanced text-based AI models, making it easier than ever to implement powerful natural language processing solutions.


### Text Classifier 

Empower your applications with text classification using Clarifai's Predict API for Text. By providing input text to your preferred classification model, you can gain valuable insights into the content's nature. This API offers flexibility, allowing you to provide data through URLs or files for seamless text classification.

> ***Note:*** The file size of each text input should be less than 20MB.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-classifier%22%5D%7D%5D) to view the available  models for this use case.

```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "nlptownres"
#APP_ID = "text-classification"

# Text sentiment analysis with 3 classes positive, negative, neutral.
# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'sentiment-analysis-twitter-roberta-base'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id


# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

model_url = "https://clarifai.com/erfan/text-classification/models/sentiment-analysis-twitter-roberta-base"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(input_bytes, input_type="text")


# Example for prediction through URL:
# model_prediction = Model(model_url).predict_by_url(URL, input_type="text")


file_path = "datasets/upload/data/text_files/positive/0_9.txt"
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_filepath(
    file_path, input_type="text"
)

# Get the output
print(model_prediction.outputs[-1].data.concepts)
```

Output:

[id: "LABEL_0"

name: "LABEL_0"

value: 0.6046636700630188

app_id: "text-classification"

, id: "LABEL_1"

name: "LABEL_1"

value: 0.3062974512577057

app_id: "text-classification"

, id: "LABEL_2"

name: "LABEL_2"

value: 0.08903887867927551

app_id: "text-classification"

]


### Text Generation Using LLM

Empower your applications with dynamic text creation using the robust capabilities of the Clarifai Predict API. This API leverages cutting-edge text generation models to generate textual content dynamically based on user-defined prompts, providing a versatile and powerful tool for various applications.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
prompt = "What’s the futuree of AI?"
# You can set the model using model URL or model ID.
model_url="https://clarifai.com/openai/chat-completion/models/GPT-4"


# Model Predict
model_prediction = Model(url=model_url,par="YOUR_PAT").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)
```

Output

The future of AI is vast and holds immense potential. Here are a few possibilities:

1. Enhanced Personalization: AI will be able to understand and predict user preferences with increasing accuracy. This will allow for highly personalized experiences, from product recommendations to personalized healthcare.

2. Automation: AI will continue to automate routine tasks, freeing up time for individuals to focus on more complex problems. This could be in any field, from manufacturing to customer service.

3. Advanced Data Analysis: AI will be able to analyze and interpret large amounts of data more efficiently. This could lead to significant breakthroughs in fields like climate science, medicine, and economics.

4. AI in Healthcare: AI is expected to revolutionize healthcare, from predicting diseases before symptoms appear, to assisting in surgeries, to personalized treatment plans.

5. Improved AI Ethics: As AI becomes more integral to our lives, there will be an increased focus on ensuring it is used ethically and responsibly. This could lead to advancements in AI that are more transparent, fair, and accountable.

6. General AI: Perhaps the most exciting (and daunting) prospect is the development of Artificial General Intelligence (AGI) - AI systems that possess the ability to understand, learn, adapt, and implement knowledge across a wide array of tasks, much like a human brain.

Remember, while AI holds great promise, it's also important to consider the challenges and implications it brings, such as job displacement due to automation, privacy concerns, and ethical considerations.


### Text Classifier Using LLM

Dive into the realm of text classification with Clarifai's Predict API, where you can leverage Language Models (LLM) to categorize text based on carefully constructed prompts.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-text%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

prompt = """Classes: [`positive`, `negative`, `neutral`]
Text: Sunny weather makes me happy.

Classify the text into one of the above classes."""



# Model Predict
model_prediction = Model("https://clarifai.com/openai/chat-completion/models/GPT-4").predict_by_bytes(prompt.encode(), input_type="text")

print(model_prediction.outputs[0].data.text.raw)

```

Output

`positive`


### Text  to image

Leverage the power of the Predict API to seamlessly transform textual input into vibrant and expressive images. With the Text to Image feature, you can effortlessly generate visually compelling content by providing text as input.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-to-image%22%5D%7D%5D) to view the available models for this use case.

```python
from clarifai.client.model import Model
import numpy as np
import cv2
import matplotlib.pyplot as plt

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "stability-ai"
#APP_ID = "stable-diffusion-2"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'stable-diffusion-xl'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = '0c919cc1edfc455dbc96207753f178d7'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

input_text = b"floor plan for 2 bedroom kitchen house"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and Bytes format.


# Example for prediction through URL:
# model_prediction = model.predict_by_url(url, input_type="text")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

# Image Generation using Stable Diffusion XL
model_url = "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(
    input_text, input_type="text"
)


# Base64 image to numpy array
im_b = model_prediction.outputs[0].data.image.base64
image_np = np.frombuffer(im_b, np.uint8)
img_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)
# Display the image
plt.axis("off")
plt.imshow(img_np[..., ::-1])
```

Output:

![Alt text](image.png)



### Text to Audio

The Text to Audio feature, powered by our Predict API, seamlessly transforms provided textual content into an audio file using advanced speech synthesis models. This capability allows users to effortlessly convert written text into a natural and expressive audio experience.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22input_fields%22%2C%22value%22%3A%5B%22text%22%5D%7D%2C%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22speech-synthesis%22%2C%22text-to-speech%22%5D%7D%5D) to view the available models for this use case.



```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "eleven-labs"
#APP_ID = "audio-generation"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'speech-synthesis'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'f588d92c044d4487a38c8f3d7a3b0eb2'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)


input_text = "Hello, How are you doing today!"

# The predict API gives flexibility to generate predictions for data provided through URL,Filepath and bytes format.


# Example for prediction through URL:
# model_prediction = model.predict_by_url(url, input_type="text")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(filepath, input_type="text")

model_url = "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(
    input_text, "text"
)

# Save the audio file
with open("output_audio.wav", mode="bx") as f:
    f.write(model_prediction.outputs[0].data.audio.base64)

```


Output:

- - -  - - - - - - - - - -


### Text Embedder

The Predict API offers a versatile set of capabilities, including the conversion of text into embedding vectors through the Text Embedder model. This powerful functionality serves various purposes, making it an invaluable tool for applications such as Semantic Similarity Analysis, Content Recommendation Systems, Anomaly Detection, and Document Clustering.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22text-embedder%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "cohere"
#APP_ID = "embed"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'cohere-embed-english-v3_0'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

input_text = """In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.
"""
# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through URL:
# model_prediction = model.predict_by_url(URL ,input_type="text")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="text")


model_url = "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_bytes(
    input_text, "text"
)

embeddings = model_prediction.outputs[0].data.embeddings[0].vector

num_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions

print(embeddings[:10])
```

Output:

[-0.02596100978553295,

 0.023946398869156837,

 -0.07173235714435577,

 0.032294824719429016,

 0.020313993096351624,

 -0.026998838409781456,

 0.008684193715453148,

 -0.016651064157485962,

 -0.012316598556935787,

 0.00042328768176957965]


## Audio

The Clarifai Python SDK for Audio Processing provides a comprehensive set of tools and functionalities, enabling you to process audio inputs with unparalleled ease and efficiency. Whether you're working on applications related to voice recognition, sound classification, or speech-to-text conversion, our SDK streamlines the development process, allowing you to focus on building cutting-edge functionalities.


### Audio to text

Harness the power of the Predict API to seamlessly transform audio files into text-based formats using our advanced Automatic Speech Recognition (ASR) model. With this functionality, you can effortlessly transcribe spoken words from audio, opening up possibilities for diverse applications such as transcription services, voice command processing, and more.

Visit this [link](https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22audio-to-text%22%5D%7D%5D) to view the available models for this use case.


```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "facebook"
#APP_ID = "asr"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'asr-wav2vec2-base-960h-english'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

audio_url = "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav"

# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through Bytes:
# model_prediction = model.predict_by_bytes(audio_bytes, input_type="audio")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(audio_filepath, input_type="audio")

model_url = "https://clarifai.com/facebook/asr/models/asr-wav2vec2-large-robust-ft-swbd-300h-english"

model_prediction = Model(url=model_url, pat="YOUR_PAT").predict_by_url(
    audio_url, "audio"
)

# Print the output
print(model_prediction.outputs[0].data.text.raw)
```

Output:

GOOD MORNING I THINK THIS IS GOING TO BE A GREAT PRESENTATION


## MultiModal 


### [Image,Text] to Text

Leverage the power of the Predict API to seamlessly process multimodal inputs and obtain accurate predictions. In this example, we demonstrate the capability to send both image and text inputs to a model, showcasing the versatility of the Predict API in handling diverse data types.

Visit this [link](https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision) to view the available models for this use case.

```python
from clarifai.client.model import Model
from clarifai.client.input import Inputs


# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "openai"
#APP_ID = "chat-completion"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'openai-gpt-4-vision'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

prompt = "What time of day is it?"
image_url = "https://samples.clarifai.com/metro-north.jpg"
model_url = "https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision"
inference_params = dict(temperature=0.2, max_tokens=100)
multi_inputs = Inputs.get_multimodal_input(input_id="", image_url=image_url, raw_text=prompt)
# Predicts the model based on the given inputs.
model_prediction = Model(url=model_url, pat="YOUR_PAT").predict(
    inputs=[
        multi_inputs
    ],
    inference_params=inference_params,
)

print(model_prediction.outputs[0].data.text.raw)


```

Output:

The time of day in the image appears to be either dawn or dusk, given the light in the sky. It's not possible to determine the exact time without additional context, but the sky has a mix of light and dark hues, which typically occurs during sunrise or sunset. The presence of snow and the lighting at the train station suggest that it might be winter, and depending on the location, this could influence whether it's morning or evening.


## Batch Predict

Efficiently process multiple inputs in a single request by leveraging the Predict API's batch prediction feature. This allows you to streamline the prediction process, saving time and resources. Simply submit a batch of inputs to the model, and receive comprehensive predictions in return.

> ***Note:*** The batch size should not exceed 128.

```python
from clarifai.client.input import Inputs
from clarifai.client.model import Model

model_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"
image_url = "https://samples.clarifai.com/metro-north.jpg"

# here is an example of creating an input proto list of size 128
proto_list=[]
for i in range(0,128):
    proto_list.append(Inputs.get_input_from_url(input_id = f'demo_{i}', image_url=image_url))

# passthe input proto as paramater to the predict function
model_prediction = Model(url=model_url).predict(
    proto_list
)

# Check the length of predictions to see if all inputs were passed successfully

len(model_prediction.outputs)


```

Output:

128


## Different Base_URL

Harness the flexibility of the Predict API to obtain model predictions by tailoring the base_url. Customize your endpoint to seamlessly integrate with different environments, ensuring a versatile and adaptable approach to accessing model predictions.

```python
from clarifai.client.model import Model

# Your PAT (Personal Access Token) can be found in the portal under Authentification
# Specify the correct user_id/app_id pairings
# Since you're making inferences outside your app's scope
#USER_ID = "cohere"
#APP_ID = "embed"

# You can set the model using model URL or model ID.
# Change these to whatever model you want to use
# eg : MODEL_ID = 'cohere-embed-english-v3_0'
# You can also set a particular model version by specifying the  version ID
# eg: MODEL_VERSION_ID = 'model_version'
#  Model class objects can be inititalised by providing its URL or also by defining respective user_id, app_id and model_id

# eg : model = Model(user_id="clarifai", app_id="main", model_id=MODEL_ID)

input_text = """In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.
"""
# The predict API gives the flexibility to generate predictions for data provided through URL, Filepath and bytes format.

# Example for prediction through URL:
# model_prediction = model.predict_by_url(URL ,input_type="text")


# Example for prediction through Filepath:
# model_prediction = Model(model_url).predict_by_filepath(image_filepath, input_type="text")


model_url = "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0"

# You can pass the new base url as paramater while initializing the Model object
model_prediction = Model(url=model_url, pat="YOUR_PAT",base_url="New Base URL").predict_by_bytes(
    input_text, "text"
)

embeddings = model_prediction.outputs[0].data.embeddings[0].vector

num_dimensions = model_prediction.outputs[0].data.embeddings[0].num_dimensions

print(embeddings[:10])

```



## Prediction Paramaters

This section outlines the parameters associated with making predictions using Clarifai's powerful Predict API. These parameters play a crucial role in configuring and customizing your prediction requests, ensuring accurate and tailored results based on your specific use case. Understanding and appropriately setting these prediction parameters will enhance your experience and enable you to extract meaningful insights from the Clarifai platform.


<table>
  <tr>
   <td>Param Name
   </td>
   <td>Param Desc
   </td>
   <td>Usage example
   </td>
  </tr>
  <tr>
   <td>temperature
   </td>
   <td>Temperature is a parameter of OpenAI ChatGPT, GPT-3 and GPT-4 models that governs the randomness and thus the creativity of the responses.
<p>
It is always a number between 0 and 1.
<p>
A temperature of 0 means the responses will be very straightforward, almost deterministic (meaning you almost always get the same response to a given prompt)
<p>
A temperature of 1 means the responses can vary wildly.
   </td>
   <td><code>inference_params</code> <code>=</code> <code>dict(temperature=0.2)</code>
<p>
<code>Model(model_url).predict(inputs,inference_params=inference_params)</code>
   </td>
  </tr>
  <tr>
   <td>max_tokens
   </td>
   <td>Max_tokens is a parameter for GPT models. This parameter shows the maximum number of tokens that can be processed inorder to get the response to your needs. 
<p>
Higher token limit means longer the conversation and more complex tasks but heavy on computational resources.
   </td>
   <td><code>inference_params</code> <code>=</code> <code>dict(max_tokens=100)</code>
<p>
<code>Model(model_url).predict(inputs,inference_params=inference_params)</code>
   </td>
  </tr>
  <tr>
   <td>min_value
   </td>
   <td>The minimum value of the prediction confidence to filter.
   </td>
   <td><code>output_config</code> <code>=</code> <code>dict(min_value=0.6)</code>
<p>
<code>Model(model_url).predict(inputs,output_config=output_config)</code>
   </td>
  </tr>
  <tr>
   <td>max_concepts
   </td>
   <td>The maximum number of concepts to return.
   </td>
   <td><code>output_config</code> <code>=</code> <code>dict(max_concepts=3)</code>
<p>
<code>Model(model_url).predict(inputs,output_config=output_config)</code>
   </td>
  </tr>
  <tr>
   <td>select_concepts
   </td>
   <td>The concepts to select.
   </td>
   <td><code>output_config</code> <code>=</code> <code>dict(select_concepts=["concept_name"])</code>
<p>
<code>Model(model_url).predict(inputs,output_config=output_config)</code>
   </td>
  </tr>
</table>
