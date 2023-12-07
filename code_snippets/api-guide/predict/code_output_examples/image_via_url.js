id: "ca9767e3dab44da2b7fa811ce6e382f0"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701796564
  nanos: 495388804
}
model {
  id: "general-image-recognition"
  name: "Image Recognition"
  created_at {
    seconds: 1457543499
    nanos: 608845000
  }
  modified_at {
    seconds: 1694180313
    nanos: 148401000
  }
  app_id: "main"
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
  user_id: "clarifai"
  model_type_id: "visual-classifier"
  visibility {
    gettable: PUBLIC
  }
  workflow_recommended {
  }
}
input {
  id: "855b331a54554660adb83d56088da511"
  data {
    image {
      url: "https://samples.clarifai.com/metro-north.jpg"
    }
  }
}
data {
  concepts {
    id: "ai_HLmqFqBf"
    name: "train"
    value: 0.999605358
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.999298692
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.998257935
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.998012304
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "locomotive"
    value: 0.99726069
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "transportation system"
    value: 0.996979594
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "travel"
    value: 0.988970637
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "commuter"
    value: 0.980911732
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "platform"
    value: 0.980664492
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "light"
    value: 0.974198043
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "train station"
    value: 0.968836844
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "blur"
    value: 0.967306197
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "city"
    value: 0.961521745
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "road"
    value: 0.961392581
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "urban"
    value: 0.960395515
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "traffic"
    value: 0.959996164
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "street"
    value: 0.947550297
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "public"
    value: 0.934354544
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "tramway"
    value: 0.932101309
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "business"
    value: 0.929465771
    app_id: "main"
  }
}