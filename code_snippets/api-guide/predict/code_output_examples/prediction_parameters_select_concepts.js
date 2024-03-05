id: "81acc269d03e4ea7bc0299f4f8287d58"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701798941
  nanos: 10825132
}
model {
  id: "general-image-recognition"
  name: "Image Recognition"
  created_at {
    seconds: 1457543499
    nanos: 608845000
  }
  app_id: "main"
  model_version {
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  user_id: "clarifai"
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  modified_at {
    seconds: 1694180313
    nanos: 148401000
  }
  workflow_recommended {
  }
}
input {
  id: "509694bf26544b03b1b3d30d72688aaa"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980133771896362
    app_id: "main"
  }
}
