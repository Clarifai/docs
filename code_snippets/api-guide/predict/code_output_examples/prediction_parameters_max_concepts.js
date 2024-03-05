id: "51ba22c23b0e4724bfbe7600370e4072"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701799066
  nanos: 783913374
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
  id: "7fd5d408a38a4a15964d9ff7b191ea0a"
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
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982585310935974
    app_id: "main"
  }
}

