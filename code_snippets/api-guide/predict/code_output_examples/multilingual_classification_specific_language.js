id: "1b2bda0911ed4a58a70198f495aaf8bc"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701799513
  nanos: 885844210
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
  id: "d89a929f60584d5a84854ec60f2243ab"
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
    value: 0.9982585310935974
    app_id: "main"
  }
  concepts {
    id: "ai_6kTjGfF6"
    name: "\347\253\231"
    value: 0.9980133771896362
    app_id: "main"
  }
  concepts {
    id: "ai_RRXLczch"
    name: "\347\201\253\350\275\246"
    value: 0.9972604513168335
    app_id: "main"
  }
  concepts {
    id: "ai_Xxjc3MhT"
    name: "\350\277\220\350\276\223\347\263\273\347\273\237"
    value: 0.9969792366027832
    app_id: "main"
  }
  concepts {
    id: "ai_VRmbGVWh"
    name: "\346\227\205\346\270\270"
    value: 0.9889689683914185
    app_id: "main"
  }
  concepts {
    id: "ai_jlb9q33b"
    name: "\351\200\232\345\213\244"
    value: 0.9809139370918274
    app_id: "main"
  }
  concepts {
    id: "ai_2gkfMDsM"
    name: "\345\271\263\345\217\260"
    value: 0.9806650876998901
    app_id: "main"
  }
  concepts {
    id: "ai_n9vjC1jB"
    name: "\345\205\211"
    value: 0.9741945266723633
    app_id: "main"
  }
  concepts {
    id: "ai_sQQj52KZ"
    name: "\351\223\201\350\267\257\350\275\246\347\253\231"
    value: 0.9688410758972168
    app_id: "main"
  }
  concepts {
    id: "ai_l4WckcJN"
    name: "\346\250\241\347\205\263"
    value: 0.9673133492469788
    app_id: "main"
  }
  concepts {
    id: "ai_WBQfVV0p"
    name: "\345\237\216\345\270\202"
    value: 0.9615091681480408
    app_id: "main"
  }
  concepts {
    id: "ai_TZ3C79C6"
    name: "\351\251\254\350\267\257"
    value: 0.9613693356513977
    app_id: "main"
  }
  concepts {
    id: "ai_CpFBRWzD"
    name: "\345\237\216\345\270\202\347\232\204"
    value: 0.960391640663147
    app_id: "main"
  }
  concepts {
    id: "ai_tr0MBp64"
    name: "\344\272\244\351\200\232"
    value: 0.9599775075912476
    app_id: "main"
  }
  concepts {
    id: "ai_GjVpxXrs"
    name: "\350\241\227\351\201\223"
    value: 0.9475197196006775
    app_id: "main"
  }
  concepts {
    id: "ai_mcSHVRfS"
    name: "\345\205\254\345\205\261"
    value: 0.934360921382904
    app_id: "main"
  }
  concepts {
    id: "ai_J6d1kV8t"
    name: "\346\234\211\350\275\250\347\224\265\350\275\246\357\274\210\345\267\245\344\270\232\357\274\211"
    value: 0.9320586323738098
    app_id: "main"
  }
  concepts {
    id: "ai_6lhccv44"
    name: "\345\225\206\344\270\232"
    value: 0.9294787645339966
    app_id: "main"
  }
}
