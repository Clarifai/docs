Predicted concepts:
id: "f021a57a5dd24038ae3453ad1a5baa67"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1676381113
  nanos: 815547169
}
model {
  id: "multilingual-uncased-sentiment"
  name: "multilingual-uncased-sentiment"
  created_at {
    seconds: 1656469244
    nanos: 44961000
  }
  app_id: "text-classification"
  model_version {
    id: "29d5fef0229a4936a607380d7ef775dd"
    created_at {
      seconds: 1656469244
      nanos: 60443000
    }
    status {
      code: MODEL_TRAINED
      description: "Model is trained and ready"
    }
    visibility {
      gettable: PUBLIC
    }
    app_id: "text-classification"
    user_id: "nlptownres"
    metadata {
      fields {
        key: "Model version logs zipped"
        value {
          string_value: "https://s3.amazonaws.com/clarifai-temp/prod/29d5fef0229a4936a607380d7ef775dd.zip"
        }
      }
    }
  }
  user_id: "nlptownres"
  model_type_id: "text-classifier"
  visibility {
    gettable: PUBLIC
  }
  modified_at {
    seconds: 1661364520
    nanos: 417454000
  }
  task: "text-classification"
  presets {
  }
  workflow_recommended {
  }
}
input {
  id: "709cca36ea0b4545b8d1dd53a2e97e5f"
  data {
    text {
      url: "https://samples.clarifai.com/negative_sentence_12.txt"
    }
  }
}
data {
  concepts {
    id: "3-stars"
    name: "3-stars"
    value: 0.25399050116539
    app_id: "text-classification"
  }
  concepts {
    id: "2-stars"
    name: "2-stars"
    value: 0.23382413387298584
    app_id: "text-classification"
  }
  concepts {
    id: "1-star"
    name: "1-star"
    value: 0.20093096792697906
    app_id: "text-classification"
  }
  concepts {
    id: "4-stars"
    name: "4-stars"
    value: 0.17351143062114716
    app_id: "text-classification"
  }
  concepts {
    id: "5-stars"
    name: "5-stars"
    value: 0.1377429962158203
    app_id: "text-classification"
  }
}