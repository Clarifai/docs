status {
    code: SUCCESS
    description: "Ok"
    req_id: "db4cf89c13303aa9889a89f2ae0a91f4"
  }
  outputs {
    id: "20ed3f59dc5b4b1e9082a7e91ff29f48"
    status {
      code: SUCCESS
      description: "Ok"
    }
    created_at {
      seconds: 1646333543
      nanos: 352417324
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
          nanos: 537080000
        }
        status {
          code: MODEL_TRAINED
          description: "Model is trained and ready"
        }
        total_input_count: 14
        completed_at {
          seconds: 1646330068
          nanos: 100250000
        }
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
      modified_at {
        seconds: 1646291711
        nanos: 640607000
      }
      import_info {
      }
    }
    input {
      id: "f1ce5584c5e54653b722ac3ef163a077"
      data {
        image {
          url: "https://samples.clarifai.com/puppy.jpeg"
        }
      }
    }
    data {
      concepts {
        id: "charlie"
        name: "charlie"
        value: 0.9998574256896973
        app_id: "test-app"
      }
    }
  }
  