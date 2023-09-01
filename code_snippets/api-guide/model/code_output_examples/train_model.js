status {
  code: SUCCESS
  description: "Ok"
  req_id: "c2b73a383ff73d57ce10eb92d4ceeca3"
}
model {
  id: "my-pets"
  name: "my-pets"
  created_at {
    seconds: 1693501169
    nanos: 811818000
  }
  app_id: "items-app"
  model_version {
    id: "adbd648acc8146f788520dad0376411e"
    created_at {
      seconds: 1693558909
      nanos: 61554817
    }
    status {
      code: MODEL_QUEUED_FOR_TRAINING
      description: "Model is currently in queue for training."
    }
    active_concept_count: 2
    visibility {
      gettable: PRIVATE
    }
    app_id: "items-app"
    user_id: "alfrick"
    metadata {
    }
    output_info {
      output_config {
      }
      message: "Show output_info with: GET /models/{model_id}/output_info"
      params {
        fields {
          key: "max_concepts"
          value {
            number_value: 20.0
          }
        }
        fields {
          key: "min_value"
          value {
            number_value: 0.0
          }
        }
        fields {
          key: "select_concepts"
          value {
            list_value {
            }
          }
        }
      }
    }
    input_info {
      params {
      }
      base_embed_model {
        id: "general-image-embedding"
        app_id: "main"
        model_version {
          id: "bb186755eda04f9cbb6fe32e816be104"
        }
        user_id: "clarifai"
        model_type_id: "visual-embedder"
      }
    }
    train_info {
      params {
        fields {
          key: "dataset_id"
          value {
            string_value: ""
          }
        }
        fields {
          key: "dataset_version_id"
          value {
            string_value: ""
          }
        }
        fields {
          key: "enrich_dataset"
          value {
            string_value: "Automatic"
          }
        }
      }
    }
    import_info {
    }
  }
  user_id: "alfrick"
  model_type_id: "embedding-classifier"
  visibility {
    gettable: PRIVATE
  }
  metadata {
  }
  modified_at {
    seconds: 1693501169
    nanos: 811818000
  }
  presets {
  }
  workflow_recommended {
  }
}