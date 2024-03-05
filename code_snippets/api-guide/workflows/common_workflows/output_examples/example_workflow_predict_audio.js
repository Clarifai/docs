status {
  code: SUCCESS
  description: "Ok"
}
input {
  id: "c7b258c785614694bc1d9982e847e327"
  data {
    audio {
      url: "https://samples.clarifai.com/negative_sentence_1.wav"
    }
  }
}
outputs {
  id: "b562c938bb4545199a6908eabd8f6295"
  status {
    code: SUCCESS
    description: "Ok"
  }
  created_at {
    seconds: 1700762370
    nanos: 800729365
  }
  model {
    id: "asr-wav2vec2-large-robust-ft-swbd-300h-english"
    name: "wav2vec2-large-robust-ft-swbd-300"
    created_at {
      seconds: 1636021464
      nanos: 884891000
    }
    modified_at {
      seconds: 1659644487
      nanos: 107647000
    }
    app_id: "asr"
    model_version {
      id: "7adce5efc90744ed986fbd0bdc40000f"
      created_at {
        seconds: 1638786626
        nanos: 104602000
      }
      status {
        code: MODEL_TRAINED
        description: "Model is trained and ready"
      }
      visibility {
        gettable: PUBLIC
      }
      app_id: "asr"
      user_id: "facebook"
      metadata {
      }
      license: "Apache-2.0"
    }
    user_id: "facebook"
    model_type_id: "audio-to-text"
    visibility {
      gettable: PUBLIC
    }
    workflow_recommended {
    }
  }
  data {
    text {
      raw: "I AM NOT FLYING TO ENGLAND"
      text_info {
        encoding: "UnknownTextEnc"
      }
    }
  }
}
outputs {
  id: "1a3815e9c46b425e8247a4c491cfa0f2"
  status {
    code: SUCCESS
    description: "Ok"
  }
  created_at {
    seconds: 1700762370
    nanos: 800742640
  }
  model {
    id: "sentiment-analysis-twitter-roberta-base"
    name: "sentiment-analysis-twitter-roberta-base"
    created_at {
      seconds: 1656525158
      nanos: 299847000
    }
    modified_at {
      seconds: 1659564125
      nanos: 82152000
    }
    app_id: "text-classification"
    model_version {
      id: "f7f3df02b79d4080a0233ec1fb6404bd"
      created_at {
        seconds: 1656525158
        nanos: 310142000
      }
      status {
        code: MODEL_TRAINED
        description: "Model is trained and ready"
      }
      visibility {
        gettable: PUBLIC
      }
      app_id: "text-classification"
      user_id: "erfan"
      metadata {
        fields {
          key: "Model version logs zipped"
          value {
            string_value: "https://s3.amazonaws.com/clarifai-temp/prod/f7f3df02b79d4080a0233ec1fb6404bd.zip"
          }
        }
      }
    }
    user_id: "erfan"
    model_type_id: "text-classifier"
    task: "text-classification"
    visibility {
      gettable: PUBLIC
    }
    workflow_recommended {
    }
  }
  data {
    concepts {
      id: "LABEL_0"
      name: "LABEL_0"
      value: 0.91823113
      app_id: "text-classification"
    }
    concepts {
      id: "LABEL_1"
      name: "LABEL_1"
      value: 0.0743510351
      app_id: "text-classification"
    }
    concepts {
      id: "LABEL_2"
      name: "LABEL_2"
      value: 0.00741776684
      app_id: "text-classification"
    }
  }
}