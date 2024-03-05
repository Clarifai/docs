id: "479d7bb7e0e4415da8a265ceb10d4c7c"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701798270
  nanos: 281180166
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
  workflow_recommended {
  }
}
input {
  id: "b188010be5b84bafa330092327f4f4c0"
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
    value: 0.2539905309677124
    app_id: "text-classification"
  }
  concepts {
    id: "2-stars"
    name: "2-stars"
    value: 0.23382391035556793
    app_id: "text-classification"
  }
  concepts {
    id: "1-star"
    name: "1-star"
    value: 0.20093071460723877
    app_id: "text-classification"
  }
  concepts {
    id: "4-stars"
    name: "4-stars"
    value: 0.17351166903972626
    app_id: "text-classification"
  }
  concepts {
    id: "5-stars"
    name: "5-stars"
    value: 0.13774323463439941
    app_id: "text-classification"
  }
}
