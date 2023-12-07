id: "7601649459f6458e80eb6e44f6d3dfe0" 
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701799352
  nanos: 145163726
}
model {
  id: "general-image-recognition"
  name: "Image Recognition"
  created_at {
    seconds: 1457543499
    nanos: 608845000
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
  modified_at {
    seconds: 1694180313
    nanos: 148401000
  }
  workflow_recommended {
  }
}
input {
  id: "256fa5839e9d425db43553ce9ff38d03"
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
    value: 0.9996053576469421
    app_id: "main"
  }
  concepts {
    id: "ai_fvlBqXZR"
    name: "railway"
    value: 0.9992986917495728
    app_id: "main"
  }
  concepts {
    id: "ai_SHNDcmJ3"
    name: "subway system"
    value: 0.9982585310935974
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "station"
    value: 0.9980133771896362
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "locomotive"
    value: 0.9972604513168335
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "transportation system"
    value: 0.9969792366027832
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "travel"
    value: 0.9889689683914185
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "commuter"
    value: 0.9809139370918274
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "platform"
    value: 0.9806650876998901
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "light"
    value: 0.9741945266723633
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "train station"
    value: 0.9688410758972168
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "blur"
    value: 0.9673133492469788
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "city"
    value: 0.9615091681480408
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "road"
    value: 0.9613693356513977
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "urban"
    value: 0.960391640663147
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "traffic"
    value: 0.9599775075912476
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "street"
    value: 0.9475197196006775
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "public"
    value: 0.934360921382904
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "tramway"
    value: 0.9320586323738098
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "business"
    value: 0.9294787645339966
    app_id: "main"
  }
}

