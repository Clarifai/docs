status {
    code: SUCCESS
    description: "Ok"
  }
  input {
    id: "0a799c6f1dd94588afd392b8f8cae1a0"
    data {
      image {
        url: "https://samples.clarifai.com/metro-north.jpg"
      }
    }
  }
  outputs {
    id: "74620e2daafa4fa1a890f13e22ad4080"
    status {
      code: SUCCESS
      description: "Ok"
    }
    created_at {
      seconds: 1648216884
      nanos: 284812988
    }
    model {
      id: "food-item-v1-recognition"
      name: "food-items-v1.0"
      created_at {
        seconds: 1474150739
        nanos: 955626000
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
        id: "dfebc169854e429086aceb8368662641"
        created_at {
          seconds: 1474150739
          nanos: 955626000
        }
        status {
          code: MODEL_TRAINED
          description: "Model is trained and ready"
        }
        visibility {
          gettable: PUBLIC
        }
        app_id: "main"
        user_id: "clarifai"
        metadata {
        }
      }
      display_name: "food-items-v1-visual-classifier"
      user_id: "clarifai"
      input_info {
        fields_map {
          fields {
            key: "image"
            value {
              string_value: "images"
            }
          }
        }
      }
      train_info {
      }
      model_type_id: "visual-classifier"
      visibility {
        gettable: PUBLIC
      }
      modified_at {
        seconds: 1634712785
        nanos: 568020000
      }
      import_info {
      }
    }
    data {
      concepts {
        id: "ai_kTsPMX36"
        name: "wine"
        value: 0.9537787437438965
        app_id: "main"
      }
      concepts {
        id: "ai_r2Fbdv8L"
        name: "beer"
        value: 0.9002427458763123
        app_id: "main"
      }
      concepts {
        id: "ai_fZsLlGwm"
        name: "pizza"
        value: 0.8410654067993164
        app_id: "main"
      }
      concepts {
        id: "ai_f1zKlGnc"
        name: "coffee"
        value: 0.6570742726325989
        app_id: "main"
      }
      concepts {
        id: "ai_KWmFf1fn"
        name: "meat"
        value: 0.6265882849693298
        app_id: "main"
      }
      concepts {
        id: "ai_7f0n1q5Q"
        name: "barbecue"
        value: 0.6149417161941528
        app_id: "main"
      }
      concepts {
        id: "ai_XVpwLB09"
        name: "beef"
        value: 0.5626139640808105
        app_id: "main"
      }
      concepts {
        id: "ai_69JKJjSz"
        name: "fish"
        value: 0.561673104763031
        app_id: "main"
      }
      concepts {
        id: "ai_hmjcV7cH"
        name: "steak"
        value: 0.5533789396286011
        app_id: "main"
      }
      concepts {
        id: "ai_05mwq5v5"
        name: "gastronomy"
        value: 0.5272657871246338
        app_id: "main"
      }
      concepts {
        id: "ai_jvVxlhLh"
        name: "chicken"
        value: 0.49488314986228943
        app_id: "main"
      }
      concepts {
        id: "ai_G58V132Z"
        name: "water"
        value: 0.46317076683044434
        app_id: "main"
      }
      concepts {
        id: "ai_jsmJGj7n"
        name: "lobster"
        value: 0.45476287603378296
        app_id: "main"
      }
      concepts {
        id: "ai_dHhR5NW4"
        name: "oil"
        value: 0.42813917994499207
        app_id: "main"
      }
      concepts {
        id: "ai_CFS37srh"
        name: "tea"
        value: 0.4275510907173157
        app_id: "main"
      }
      concepts {
        id: "ai_TRbv6FWL"
        name: "pork"
        value: 0.4154187738895416
        app_id: "main"
      }
      concepts {
        id: "ai_FnZCSVMH"
        name: "cheese"
        value: 0.38525062799453735
        app_id: "main"
      }
      concepts {
        id: "ai_5sLb6bK5"
        name: "tuna"
        value: 0.3674249053001404
        app_id: "main"
      }
      concepts {
        id: "ai_61Tqv85G"
        name: "olive"
        value: 0.3656860589981079
        app_id: "main"
      }
      concepts {
        id: "ai_b4b4hLRV"
        name: "turkey"
        value: 0.3539673686027527
        app_id: "main"
      }
    }
  }
  outputs {
    id: "cbea4f2cb08f4bf59a1295d5b0ddabfa"
    status {
      code: SUCCESS
      description: "Ok"
    }
    created_at {
      seconds: 1648216884
      nanos: 291465486
    }
    model {
      id: "general-image-recognition"
      name: "general"
      created_at {
        seconds: 1457543499
        nanos: 608845000
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
        id: "aa9ca48295b37401f8af92ad1af0d91d"
        created_at {
          seconds: 1468372752
          nanos: 147644000
        }
        status {
          code: MODEL_TRAINED
          description: "Model is trained and ready"
        }
        visibility {
          gettable: PUBLIC
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
            key: "image"
            value {
              string_value: "images"
            }
          }
        }
      }
      train_info {
      }
      model_type_id: "visual-classifier"
      visibility {
        gettable: PUBLIC
      }
      modified_at {
        seconds: 1648153319
        nanos: 760183000
      }
      import_info {
      }
    }
    data {
      concepts {
        id: "ai_HLmqFqBf"
        name: "train"
        value: 0.9987074136734009
        app_id: "main"
      }
      concepts {
        id: "ai_fvlBqXZR"
        name: "railway"
        value: 0.9971307516098022
        app_id: "main"
      }
      concepts {
        id: "ai_Xxjc3MhT"
        name: "transportation system"
        value: 0.9954404830932617
        app_id: "main"
      }
      concepts {
        id: "ai_RRXLczch"
        name: "locomotive"
        value: 0.9914677143096924
        app_id: "main"
      }
      concepts {
        id: "ai_6kTjGfF6"
        name: "station"
        value: 0.9910657405853271
        app_id: "main"
      }
      concepts {
        id: "ai_VRmbGVWh"
        name: "travel"
        value: 0.9873164296150208
        app_id: "main"
      }
      concepts {
        id: "ai_SHNDcmJ3"
        name: "subway system"
        value: 0.9797887802124023
        app_id: "main"
      }
      concepts {
        id: "ai_jlb9q33b"
        name: "commuter"
        value: 0.967644214630127
        app_id: "main"
      }
      concepts {
        id: "ai_tr0MBp64"
        name: "traffic"
        value: 0.9670584201812744
        app_id: "main"
      }
      concepts {
        id: "ai_l4WckcJN"
        name: "blur"
        value: 0.9639896154403687
        app_id: "main"
      }
      concepts {
        id: "ai_CpFBRWzD"
        name: "urban"
        value: 0.958390474319458
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.957963764667511
        app_id: "main"
      }
      concepts {
        id: "ai_2gkfMDsM"
        name: "platform"
        value: 0.9577903747558594
        app_id: "main"
      }
      concepts {
        id: "ai_6lhccv44"
        name: "business"
        value: 0.9567283987998962
        app_id: "main"
      }
      concepts {
        id: "ai_971KsJkn"
        name: "track"
        value: 0.9446062445640564
        app_id: "main"
      }
      concepts {
        id: "ai_WBQfVV0p"
        name: "city"
        value: 0.9392585158348083
        app_id: "main"
      }
      concepts {
        id: "ai_dSCKh8xv"
        name: "fast"
        value: 0.9364041686058044
        app_id: "main"
      }
      concepts {
        id: "ai_TZ3C79C6"
        name: "road"
        value: 0.930669903755188
        app_id: "main"
      }
      concepts {
        id: "ai_VSVscs9k"
        name: "terminal"
        value: 0.9190886616706848
        app_id: "main"
      }
      concepts {
        id: "ai_mcSHVRfS"
        name: "public"
        value: 0.9154675006866455
        app_id: "main"
      }
    }
  }
    