status {
    code: SUCCESS
    description: "Ok"
    req_id: "d707b6c108847ccd9891e7ad98f91f98"
  }
  model {
    id: "my-pets"
    name: "my-pets"
    created_at {
      seconds: 1646291711
      nanos: 640607000
    }
    app_id: "test-app"
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
    model_version {
      id: "8eb21f63ba9d40c7b84ecfd664ac603d"
      created_at {
        seconds: 1646330065
        nanos: 537080027
      }
      status {
        code: MODEL_QUEUED_FOR_TRAINING
        description: "Model is currently in queue for training."
      }
      active_concept_count: 1
      visibility {
        gettable: PRIVATE
      }
      app_id: "test-app"
      user_id: "ei2leoz3s3iy"
      metadata {
      }
    }
    user_id: "ei2leoz3s3iy"
    input_info {
    }
    train_info {
    }
    model_type_id: "embedding-classifier"
    visibility {
      gettable: PRIVATE
    }
    metadata {
    }
    modified_at {
      seconds: 1646291711
      nanos: 640607000
    }
    import_info {
    }
  }
  