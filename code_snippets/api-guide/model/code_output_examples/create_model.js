status {
    code: SUCCESS
    description: "Ok"
    req_id: "5e0b4675ea65cc53735c9ffd6d9b8f64"
  }
  model {
    id: "my-pets"
    name: "my-pets"
    created_at {
      seconds: 1646291711
      nanos: 640607856
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
      id: "464bec38d2a2419c8a26e5b2660a0c0b"
      created_at {
        seconds: 1646291711
        nanos: 667255260
      }
      status {
        code: MODEL_UNTRAINED
        description: "Model not yet trained"
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
      params {
      }
    }
    train_info {
      params {
      }
    }
    model_type_id: "embedding-classifier"
    visibility {
      gettable: PRIVATE
    }
    metadata {
    }
    modified_at {
      seconds: 1646291711
      nanos: 640607856
    }
    import_info {
    }
  }
  