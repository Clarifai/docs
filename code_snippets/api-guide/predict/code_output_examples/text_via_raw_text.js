Predicted concepts:
id: "9b7efc5d5e3d4d8da20faad4dc35dd8a"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1676382425
  nanos: 572796576
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
  id: "09633b75b0864a2792e635c5aa098614"
  data {
    text {
      raw: "I love your product very much"
      url: "https://samples.clarifai.com/placeholder.gif"
    }
  }
}
data {
  concepts {
    id: "5-stars"
    name: "5-stars"
    value: 0.866517961025238
    app_id: "text-classification"
  }
  concepts {
    id: "4-stars"
    name: "4-stars"
    value: 0.11985278874635696
    app_id: "text-classification"
  }
  concepts {
    id: "3-stars"
    name: "3-stars"
    value: 0.009703087620437145
    app_id: "text-classification"
  }
  concepts {
    id: "1-star"
    name: "1-star"
    value: 0.0020059270318597555
    app_id: "text-classification"
  }
  concepts {
    id: "2-stars"
    name: "2-stars"
    value: 0.001920199254527688
    app_id: "text-classification"
  }
}
