---
description: Use AI to index your images based on semantic similarity.
sidebar_position: 5
---

# Index Images for Search

**Use AI to index your images based on semantic similarity**
<hr />

To get started with search, you must first add images to the search index. You can add one or more images to the index at a time. You can supply an image either with a publicly accessible URL or by directly sending image bytes. You can send up to 128 images in one API call.

:::info
The initialization code used in the following example is outlined in detail on the [client installation page.](../api-overview/api-clients#client-installation-instructions)
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from "@theme/CodeBlock";
import PythonIndexImages from "!!raw-loader!../../../code_snippets/api-guide/search/index_images_for_search.py";

<Tabs>

<TabItem value="python" label="Python">
    <CodeBlock className="language-python">{PythonIndexImages}</CodeBlock>
</TabItem>

<TabItem value="java" label="Java">

```java
import com.clarifai.grpc.api.*;
import com.clarifai.grpc.api.status.*;

// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

MultiInputResponse postInputsResponse = stub.postInputs(
    PostInputsRequest.newBuilder()
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setUrl("https://samples.clarifai.com/metro-north.jpg")
                            .setAllowDuplicateUrl(true)
                    )
                )
        )
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setUrl("https://samples.clarifai.com/wedding.jpg")
                            .setAllowDuplicateUrl(true)
                    )
                )
        )
        .addInputs(
            Input.newBuilder()
                .setData(
                    Data.newBuilder().setImage(
                        Image.newBuilder()
                            .setBase64(ByteString.copyFrom(Files.readAllBytes(
                                new File("{YOUR_IMAGE_FILE_LOCATION}").toPath()
                            )))
                    )
                )
        )
        .build()
);

if (postInputsResponse.getStatus().getCode() != StatusCode.SUCCESS) {
    for (Input input : postInputsResponse.getInputsList()) {
        System.out.println("Input " + input.getId() + " status: ");
        System.out.println(input.getStatus() + "\n");
    }

    throw new RuntimeException("Post inputs failed, status: " + postInputsResponse.getStatus());
}
```
</TabItem>

<TabItem value="nodejs" label="NodeJS">

```javascript
// Insert here the initialization code as outlined on this page:
// https://docs.clarifai.com/api-guide/api-overview/api-clients#client-installation-instructions

const fs = require("fs");
const imageBytes = fs.readFileSync("{YOUR_IMAGE_FILE_LOCATION}");

stub.PostInputs(
    {
        inputs: [
            {
                data: {image: {url: "https://samples.clarifai.com/metro-north.jpg", allow_duplicate_url: true}}
            },
            {
                data: {image: {url: "https://samples.clarifai.com/puppy.jpeg", allow_duplicate_url: true}}
            },
            {
                data: {image: {base64: imageBytes}}
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            for (const input of response.inputs) {
                console.log("Input " + input.id + " status: ");
                console.log(JSON.stringify(input.status, null, 2) + "\n");
            }

            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);
```
</TabItem>

<TabItem value="curl" label="cURL">

```bash
curl -X POST \
  -H "Authorization: Key YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '
  {
    "inputs": [
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/metro-north.jpg",
            "allow_duplicate_url": true
          }
        }
      },
      {
        "data": {
          "image": {
            "url": "https://samples.clarifai.com/wedding.jpg",
            "allow_duplicate_url": true
          }
        }
      }
    ]
  }'\
  https://api.clarifai.com/v2/inputs

# Use image's "base64" field to upload image from your local machine.
```
</TabItem>

<TabItem value="js_rest" label="Javascript (REST)">

```javascript
const raw = JSON.stringify({
  "user_app_id": {
		"user_id": "{YOUR_USER_ID}",
		"app_id": "{YOUR_APP_ID}"
	},
  "inputs": [
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/metro-north.jpg",
          "allow_duplicate_url": true
        }
      }
    },
    {
      "data": {
        "image": {
          "url": "https://samples.clarifai.com/wedding.jpg",
          "allow_duplicate_url": true
        }
      }
    }
  ]
});

// # Use image's "base64" field to upload image from your local machine.

const requestOptions = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Key {YOUR_PERSONAL_TOKEN}'
  },
	body: raw
};

fetch(`https://api.clarifai.com/v2/inputs`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
</TabItem>

</Tabs>

<details>
  <summary>JSON Output Example</summary>

```javascript
status {
  code: SUCCESS
  description: "Ok"
  req_id: "6d324034e6f6944f6b4f553c0173ba94"
}
inputs {
  id: "b319f06f2b2749248504e1fa8593e84e"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
  }
  created_at {
    seconds: 1649236360
    nanos: 11398455
  }
  modified_at {
    seconds: 1649236360
    nanos: 11398455
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}
inputs {
  id: "f787d1446583484dabb8d3173e63c057"
  data {
    image {
      url: "https://samples.clarifai.com/wedding.jpg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
  }
  created_at {
    seconds: 1649236360
    nanos: 11398455
  }
  modified_at {
    seconds: 1649236360
    nanos: 11398455
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}
inputs {
  id: "6812891f981040bdb1de4a24c4f31c74"
  data {
    image {
      url: "https://s3.amazonaws.com/clarifai-api/img3/prod/orig/e12ce254f2824b0ab2aef1b10784ff23/140c856dc82565d2c4d6ea720fceff78"
      hosted {
        prefix: "https://s3.amazonaws.com/clarifai-api/img3/prod"
        suffix: "e12ce254f2824b0ab2aef1b10784ff23/140c856dc82565d2c4d6ea720fceff78"
        sizes: "orig"
      }
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
  }
  created_at {
    seconds: 1649236360
    nanos: 11398455
  }
  modified_at {
    seconds: 1649236360
    nanos: 11398455
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
} 
```

</details>
