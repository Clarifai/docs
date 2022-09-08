id: "778a108718564b3cb1b0afe01c538f39"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1643812243
  nanos: 518818153
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
    id: "aa7f35c01e0642fda5cf400f543e7c40"
    created_at {
      seconds: 1520370624
      nanos: 454834000
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
  display_name: "general-visual-classifier"
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
  description: "Image recognition model for identifying different concepts in images and video including objects, themes, moods, and more."
  metadata {
  }
  notes: "**General Information**\n\n- Purpose: Classifier for a variety of concepts, common objects, etc. This model is a great all-purpose solution for most visual recognition needs with industry-leading performance.\n\n- Architecture: Customized InceptionV2\n\n- Intended Use: image indexing by tags, filtering, cascade routing\n\n- Limitations: works well when content is prevalent in the image\n\n\n\n **\nTraining/Test Data**\n\nThe model was trained and tested on an internal dataset with approximately 10,000 concepts and 20M images, with multiple concepts per image. The class distributions on train and validation sets are long-tailed. The validation set was annotated using a combination of originally curated labels 
with incomplete annotations, where were further completed by adding additional labels proposed a newer version of this model (aa7f35c01e0642fda5cf400f543e7c40) at a low threshold and verified by human annotators. "
  modified_at {
    seconds: 1634831222
    nanos: 80260000
  }
  import_info {
  }
}
input {
  id: "9d3583dff67a41b9825edff444f93fcd"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "\351\223\201\350\267\257\345\210\227\350\275\246"
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "\351\223\201\350\267\257"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "\345\234\260\351\223\201"
    value: 0.9982514977455139
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "\347\253\231"
    value: 0.9980105757713318
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "\347\201\253\350\275\246"
    value: 0.9972571730613708
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "\350\277\220\350\276\223\347\263\273\347\273\237"
    value: 0.9969801306724548
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "\346\227\205\346\270\270"
    value: 0.988979697227478
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "\351\200\232\345\213\244"
    value: 0.9808752536773682
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "\345\271\263\345\217\260"
    value: 0.9806439876556396
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "\345\205\211"
    value: 0.9742040634155273
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "\351\223\201\350\267\257\350\275\246\347\253\231"
    value: 0.9687402844429016
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "\346\250\241\347\205\263"
    value: 0.9672204256057739
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "\345\237\216\345\270\202"
    value: 0.9614799618721008
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "\351\251\254\350\267\257"
    value: 0.9613829851150513
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "\345\237\216\345\270\202\347\232\204"
    value: 0.9603424668312073
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "\344\272\244\351\200\232"
    value: 0.9599347710609436
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "\350\241\227\351\201\223"
    value: 0.9474143981933594
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "\345\205\254\345\205\261"
    value: 0.9343124032020569
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "\346\234\211\350\275\250\347\224\265\350\275\246\357\274\210\345\267\245\344\270\232\357\274\211"
    value: 0.931897759437561
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "\345\225\206\344\270\232"
    value: 0.9294139742851257
    app_id: "main"
  }
}