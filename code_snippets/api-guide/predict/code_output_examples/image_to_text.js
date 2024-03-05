id: "d13769d2c8da461d9c806246ed925047"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1700936312
  nanos: 267440491
}
model {
  id: "general-english-image-caption-blip"
  name: "Image Captioner"
  created_at {
    seconds: 1650312092
    nanos: 67938000
  }
  modified_at {
    seconds: 1660226508
    nanos: 93093000
  }
  app_id: "blip"
  model_version {
    id: "cdb690f13e62470ea6723642044f95e4"
    created_at {
      seconds: 1681249232
      nanos: 444463000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "blip"
    user_id: "salesforce"
    metadata {
    }
  }
  user_id: "salesforce"
  model_type_id: "image-to-text"
  visibility {
    gettable: PUBLIC
  }
  workflow_recommended {
  }
}
input {
  id: "361e341bdc2541339fcf8b5c7c9e1452"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  text {
    raw: "a photograph of a train station with a train on the tracks"
    text_info {
      encoding: "UnknownTextEnc"
    }
  }
}