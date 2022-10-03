status {
    code: SUCCESS
    description: "Ok"
  }
  input {
    id: "c4e45044f96a4fc9b1a4a1ddbd24ee26"
    data {
      audio {
        url: "https://samples.clarifai.com/placeholder.gif"
        base64: "true"
      }
    }
  }
  outputs {
    id: "557b489f3031436bbe5501f92d03461f"
    status {
      code: SUCCESS
      description: "Ok"
    }
    created_at {
      seconds: 1664805906
      nanos: 332458633
    }
    model {
      id: "asr-wav2vec2-base-960h-english"
      name: "facebook/wav2vec2-base-960h"
      created_at {
        seconds: 1634677145
        nanos: 661061000
      }
      app_id: "asr"
      output_info {
        output_config {
        }
        message: "Show output_info with: GET /models/{model_id}/output_info"
        fields_map {
          fields {
            key: "text"
            value {
              string_value: "text"
            }
          }
        }
      }
      model_version {
        id: "f4deae70a473492a8e2f9b7bb1dbee85"
        created_at {
          seconds: 1634677145
          nanos: 668993000
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
      input_info {
        fields_map {
          fields {
            key: "audio"
            value {
              string_value: "audio"
            }
          }
        }
      }
      train_info {
      }
      model_type_id: "audio-to-text"
      visibility {
        gettable: PUBLIC
      }
      modified_at {
        seconds: 1658884251
        nanos: 743015000
      }
      import_info {
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
    id: "e7d1bf12c487435bb005504dd402642e"
    status {
      code: SUCCESS
      description: "Ok"
    }
    created_at {
      seconds: 1664805906
      nanos: 336852253
    }
    model {
      id: "sentiment-analysis-distilbert-english"
      name: "sentiment-analysis-distilbert-english"
      created_at {
        seconds: 1656524917
        nanos: 269700000
      }
      app_id: "text-classification"
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
        id: "c0b09e606db94d9bae7eb40c626192fc"
        created_at {
          seconds: 1656524917
          nanos: 276685000
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
              string_value: "https://s3.amazonaws.com/clarifai-temp/prod/c0b09e606db94d9bae7eb40c626192fc.zip"
            }
          }
        }
      }
      user_id: "erfan"
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
        params {
          fields {
            key: "model_config"
            value {
              struct_value {
                fields {
                  key: "_name_or_path"
                  value {
                    string_value: "distilbert-base-uncased-finetuned-sst-2-english"
                  }
                }
                fields {
                  key: "activation"
                  value {
                    string_value: "gelu"
                  }
                }
                fields {
                  key: "architectures"
                  value {
                    list_value {
                      values {
                        string_value: "DistilBertForSequenceClassification"
                      }
                    }
                  }
                }
                fields {
                  key: "attention_dropout"
                  value {
                    number_value: 0.1
                  }
                }
                fields {
                  key: "dim"
                  value {
                    number_value: 768.0
                  }
                }
                fields {
                  key: "dropout"
                  value {
                    number_value: 0.1
                  }
                }
                fields {
                  key: "finetuning_task"
                  value {
                    string_value: "sst-2"
                  }
                }
                fields {
                  key: "hidden_dim"
                  value {
                    number_value: 3072.0
                  }
                }
                fields {
                  key: "id2label"
                  value {
                    struct_value {
                      fields {
                        key: "0"
                        value {
                          string_value: "NEGATIVE"
                        }
                      }
                      fields {
                        key: "1"
                        value {
                          string_value: "POSITIVE"
                        }
                      }
                    }
                  }
                }
                fields {
                  key: "initializer_range"
                  value {
                    number_value: 0.02
                  }
                }
                fields {
                  key: "label2id"
                  value {
                    struct_value {
                      fields {
                        key: "NEGATIVE"
                        value {
                          number_value: 0.0
                        }
                      }
                      fields {
                        key: "POSITIVE"
                        value {
                          number_value: 1.0
                        }
                      }
                    }
                  }
                }
                fields {
                  key: "max_position_embeddings"
                  value {
                    number_value: 512.0
                  }
                }
                fields {
                  key: "model_type"
                  value {
                    string_value: "distilbert"
                  }
                }
                fields {
                  key: "n_heads"
                  value {
                    number_value: 12.0
                  }
                }
                fields {
                  key: "n_layers"
                  value {
                    number_value: 6.0
                  }
                }
                fields {
                  key: "output_past"
                  value {
                    bool_value: true
                  }
                }
                fields {
                  key: "pad_token_id"
                  value {
                    number_value: 0.0
                  }
                }
                fields {
                  key: "qa_dropout"
                  value {
                    number_value: 0.1
                  }
                }
                fields {
                  key: "seq_classif_dropout"
                  value {
                    number_value: 0.2
                  }
                }
                fields {
                  key: "sinusoidal_pos_embds"
                  value {
                    bool_value: false
                  }
                }
                fields {
                  key: "tie_weights_"
                  value {
                    bool_value: true
                  }
                }
                fields {
                  key: "torch_dtype"
                  value {
                    string_value: "float32"
                  }
                }
                fields {
                  key: "transformers_version"
                  value {
                    string_value: "4.20.0"
                  }
                }
                fields {
                  key: "vocab_size"
                  value {
                    number_value: 30522.0
                  }
                }
              }
            }
          }
          fields {
            key: "tokenizer_config"
            value {
              struct_value {
                fields {
                  key: "cls_token"
                  value {
                    string_value: "[CLS]"
                  }
                }
                fields {
                  key: "do_basic_tokenize"
                  value {
                    bool_value: true
                  }
                }
                fields {
                  key: "do_lower_case"
                  value {
                    bool_value: true
                  }
                }
                fields {
                  key: "mask_token"
                  value {
                    string_value: "[MASK]"
                  }
                }
                fields {
                  key: "model_max_length"
                  value {
                    number_value: 512.0
                  }
                }
                fields {
                  key: "name_or_path"
                  value {
                    string_value: "distilbert-base-uncased-finetuned-sst-2-english"
                  }
                }
                fields {
                  key: "never_split"
                  value {
                    null_value: NULL_VALUE
                  }
                }
                fields {
                  key: "pad_token"
                  value {
                    string_value: "[PAD]"
                  }
                }
                fields {
                  key: "sep_token"
                  value {
                    string_value: "[SEP]"
                  }
                }
                fields {
                  key: "special_tokens_map_file"
                  value {
                    null_value: NULL_VALUE
                  }
                }
                fields {
                  key: "strip_accents"
                  value {
                    null_value: NULL_VALUE
                  }
                }
                fields {
                  key: "tokenize_chinese_chars"
                  value {
                    bool_value: true
                  }
                }
                fields {
                  key: "tokenizer_class"
                  value {
                    string_value: "DistilBertTokenizer"
                  }
                }
                fields {
                  key: "unk_token"
                  value {
                    string_value: "[UNK]"
                  }
                }
              }
            }
          }
        }
      }
      model_type_id: "text-classifier"
      visibility {
        gettable: PUBLIC
      }
      modified_at {
        seconds: 1656525047
        nanos: 842099000
      }
      import_info {
        params {
          fields {
            key: "model_name"
            value {
              string_value: "distilbert-base-uncased-finetuned-sst-2-english"
            }
          }
          fields {
            key: "pipeline_name"
            value {
              string_value: "text-classification"
            }
          }
          fields {
            key: "tokenizer_name"
            value {
              string_value: "distilbert-base-uncased-finetuned-sst-2-english"
            }
          }
          fields {
            key: "toolkit"
            value {
              string_value: "HuggingFace"
            }
          }
        }
      }
    }
    data {
      concepts {
        id: "NEGATIVE"
        name: "NEGATIVE"
        value: 0.9991872906684875
        app_id: "c4660162651d490285bcbfc5aff50bf0"
      }
      concepts {
        id: "POSITIVE"
        name: "POSITIVE"
        value: 0.0008126832544803619
        app_id: "c4660162651d490285bcbfc5aff50bf0"
      }
    }
  }