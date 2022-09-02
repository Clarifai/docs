Predicted concepts:
id: "5f4db88d798e442aa6f8a006efd27ef5"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643367419
  nanos: 631443555
}
model {
  id: "91ff804429654ce25e93e710beea82ea"
  name: "product-review-sentiment-multi"
  created_at {
    seconds: 1617956285
    nanos: 315594000
  }
  app_id: "main"
  output_info {
    output_config {
    }
    message: "Show output_info with: GET /models/{model_id}/output_info"
    fields_map {
      fields {
        key: "concepts"
        value {
          string_value: "softmax"
        }
      }
    }
  }
  model_version {
    id: "79fa197706da4212a6e74afcd919d5a5"
    created_at {
      seconds: 1617956285
      nanos: 327678000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PRIVATE
    }
    app_id: "main"
    user_id: "clarifai"
    metadata {
    }
  }
  user_id: "clarifai"
  input_info {
    fields_map {
      fields {
        key: "text"
        value {
          string_value: "text"
        }
      }
    }
  }
  train_info {
  }
  model_type_id: "text-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1617956285
    nanos: 315594000
  }
  import_info {
  }
}
input {
  id: "ebd63f00c1a540df897427e16005631d"
  data {
    text {
      raw: "I love your product very much"
      url: "https://samples.clarifai.com/placeholder.gif"
    }
  }
}
data {
  concepts {
    id: "ai_372MvFLZ"
    name: "5 stars"
    value: 0.866517961025238
    app_id: "main"
  }
  concepts {
    id: "ai_qbKLQz68"
    name: "4 stars"
    value: 0.11985281109809875
    app_id: "main"
  }
  concepts {
    id: "ai_xhvBFMxc"
    name: "3 stars"
    value: 0.009703087620437145
    app_id: "main"
  }
  concepts {
    id: "ai_1l3VDCQM"
    name: "1 star"
    value: 0.002005926100537181
    app_id: "main"
  }
  concepts {
    id: "ai_dRpwfL86"
    name: "2 stars"
    value: 0.0019201975082978606
    app_id: "main"
  }
}
