id: "e79ecf27e849441fa65f4aae88d4b6d7"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1701797920
  nanos: 263533709
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
  id: "dbce4ca63ce04cd69e320756bb788e47"
  data {
    video {
      url: "https://samples.clarifai.com/beer.mp4"
    }
  }
}
data {
  frames {
    frame_info {
      time: 250
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.997752845287323
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9974687099456787
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9957486987113953
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9945681095123291
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9880152344703674
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9860077500343323
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9854641556739807
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9843018054962158
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9839773774147034
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9785130023956299
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9709655046463013
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9635231494903564
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.9529380798339844
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9526541829109192
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9462572932243347
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9450616240501404
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.9400553107261658
        app_id: "main"
      }
      concepts {
        id: "ai_X7ZHcRJc"
        name: "drop"
        value: 0.9364319443702698
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9268391728401184
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9255530834197998
        app_id: "main"
      }
    }
    id: "b901632da9b4f622c9b9242f06750179"
  }
  frames {
    frame_info {
      index: 1
      time: 750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9992836117744446
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9983626008033752
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9977523684501648
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9975612163543701
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9974485039710999
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9943865537643433
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9906740784645081
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9859762191772461
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9823463559150696
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.982078492641449
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9813329577445984
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9799479246139526
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9784696102142334
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9744656682014465
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9708114266395569
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9692652821540833
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9684587717056274
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9549676775932312
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9492547512054443
        app_id: "main"
      }
      concepts {
        id: "ai_LMNcLLVR"
        name: "frosty"
        value: 0.9456380009651184
        app_id: "main"
      }
    }
    id: "9bbb898f7fea3a615d40ecb8a0e73dad"
  }
  frames {
    frame_info {
      index: 2
      time: 1250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9993199110031128
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9975032210350037
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9974441528320312
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9966486096382141
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9955034852027893
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9942675232887268
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9873117208480835
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9862891435623169
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9813107252120972
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9773374795913696
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9758992195129395
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9741887450218201
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9729149341583252
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9695841073989868
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9682382345199585
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9640994668006897
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9638546109199524
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9570770263671875
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.9560476541519165
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9537928104400635
        app_id: "main"
      }
    }
    id: "27a296946ca616da7d1871edab7f2f33"
  }
  frames {
    frame_info {
      index: 3
      time: 1750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9997701048851013
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9992296695709229
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9992121458053589
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9985218644142151
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9972805976867676
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9960547685623169
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9958301186561584
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9914194345474243
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9910222291946411
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9901933073997498
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9890332221984863
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9886132478713989
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9845917820930481
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9837354421615601
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9826065301895142
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.9744114875793457
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9737584590911865
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9714255928993225
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9692292213439941
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.9686199426651001
        app_id: "main"
      }
    }
    id: "ee44ec25044c1e34f2b37cff1b83481a"
  }
  frames {
    frame_info {
      index: 4
      time: 2250
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9978996515274048
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9963474869728088
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9844813346862793
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9828689098358154
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9818728566169739
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.980105459690094
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9770163893699646
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9610904455184937
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9601907134056091
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9437422752380371
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.938518226146698
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9255437850952148
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9187645316123962
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9028059840202332
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9019685387611389
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.88445645570755
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.8831674456596375
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.8748971223831177
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8741576075553894
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.8668125867843628
        app_id: "main"
      }
    }
    id: "3b2e9aad828e918c42c0b82da5aa551f"
  }
  frames {
    frame_info {
      index: 5
      time: 2750
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9951979517936707
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9943813681602478
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9926243424415588
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9915958046913147
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.989373505115509
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9805072546005249
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9529444575309753
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9495193958282471
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9444553256034851
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9341009855270386
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9140894412994385
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9109359383583069
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9057071208953857
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8998499512672424
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.899374783039093
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.8809621334075928
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8807708621025085
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.8758730888366699
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8561508655548096
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8491345643997192
        app_id: "main"
      }
    }
    id: "c27eb44117febb03ac7596aa84245864"
  }
  frames {
    frame_info {
      index: 6
      time: 3250
    }
    data {
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9967485666275024
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9964845180511475
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9826822280883789
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.97678542137146
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9737922549247742
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9726471304893494
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9703800082206726
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9660417437553406
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9504242539405823
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9254412651062012
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9096206426620483
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.9041298627853394
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.9024790525436401
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.9007976651191711
        app_id: "main"
      }
      concepts {
        id: "ai_X7ZHcRJc"
        name: "drop"
        value: 0.885306715965271
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8843998908996582
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8743909001350403
        app_id: "main"
      }
      concepts {
        id: "ai_b01mhdxB"
        name: "party"
        value: 0.8670044541358948
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8667541742324829
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.8590472340583801
        app_id: "main"
      }
    }
    id: "cf0c6da93c074504bf89043cfb688ba9"
  }
  frames {
    frame_info {
      index: 7
      time: 3750
    }
    data {
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9836993217468262
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9833121299743652
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9763009548187256
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9756914973258972
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9632844924926758
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9484147429466248
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9415270686149597
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9156915545463562
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.9146540760993958
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.907713770866394
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9049137830734253
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.893317699432373
        app_id: "main"
      }
      concepts {
        id: "ai_7Xg5SQRW"
        name: "luxury"
        value: 0.8726363778114319
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8704315423965454
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8628416061401367
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8384964466094971
        app_id: "main"
      }
      concepts {
        id: "ai_Lq00FggW"
        name: "desktop"
        value: 0.8253465890884399
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.8222783803939819
        app_id: "main"
      }
      concepts {
        id: "ai_LM64MDHs"
        name: "shining"
        value: 0.8182401061058044
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.8113693594932556
        app_id: "main"
      }
    }
    id: "f56e9f0effce9a65d032e42897f16f85"
  }
  frames {
    frame_info {
      index: 8
      time: 4250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9981098175048828
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9943045973777771
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.986625075340271
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9841647744178772
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9836443066596985
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9806402921676636
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9774118661880493
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9584411978721619
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9572823643684387
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9571645259857178
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.948240339756012
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9426732659339905
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9204767346382141
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9151816368103027
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9126847386360168
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9070448279380798
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8936917185783386
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8870030045509338
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8859925270080566
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.8832399845123291
        app_id: "main"
      }
    }
    id: "7d964ce474936eea31353bd4e12269dc"
  }
  frames {
    frame_info {
      index: 9
      time: 4750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9971795082092285
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9912267327308655
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9869438409805298
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9823363423347473
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9769037365913391
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9734747409820557
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9614617824554443
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9470586776733398
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9416798949241638
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9404584169387817
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9382282495498657
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9202271699905396
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9182870984077454
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8989039063453674
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8948805928230286
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.89061439037323
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8829759359359741
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8793352842330933
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8641029000282288
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8511436581611633
        app_id: "main"
      }
    }
    id: "9f592d67f699747905c8e01645213fa5"
  }
  frames {
    frame_info {
      index: 10
      time: 5250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9986419081687927
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9925092458724976
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9887336492538452
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9862042665481567
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9821165204048157
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9777782559394836
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9734096527099609
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9529599547386169
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9496700167655945
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9495285153388977
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9483970403671265
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9416258931159973
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9300329685211182
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9184643030166626
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9080654978752136
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9059904217720032
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.880144476890564
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8800289034843445
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8680859804153442
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8533608317375183
        app_id: "main"
      }
    }
    id: "d65713604602d96e4588f41d25e1c1ee"
  }
  frames {
    frame_info {
      index: 11
      time: 5750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9980437755584717
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9920185208320618
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9916218519210815
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9827982783317566
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9750837087631226
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9725251197814941
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9665043354034424
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9424052238464355
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.938936173915863
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9341326951980591
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9333233833312988
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9265391826629639
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9188488125801086
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8950655460357666
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8863833546638489
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8820033669471741
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8681637644767761
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.864867091178894
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8552114367485046
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8477041125297546
        app_id: "main"
      }
    }
    id: "a942d32afbf2354fbe8d428c93975678"
  }
  frames {
    frame_info {
      index: 12
      time: 6250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9979068040847778
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9922707080841064
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9887047410011292
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9865961670875549
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9800080060958862
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.978450357913971
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9677263498306274
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9533515572547913
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9488505125045776
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9467635154724121
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9454187750816345
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9349735379219055
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9340612292289734
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9136492013931274
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8990769386291504
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8988648653030396
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8952221274375916
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8666876554489136
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8616843819618225
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.8601076006889343
        app_id: "main"
      }
    }
    id: "3274f2b42af98e8e26ee12e6cdf20f05"
  }
  frames {
    frame_info {
      index: 13
      time: 6750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9980113506317139
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9903795719146729
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9898717999458313
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.983867883682251
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9787655472755432
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9771478176116943
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9654712677001953
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9490832686424255
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.947539210319519
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9449847340583801
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9394712448120117
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9320743680000305
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9074251055717468
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9049415588378906
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8930882215499878
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8860717415809631
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8830485343933105
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8568456768989563
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8551452159881592
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8507459759712219
        app_id: "main"
      }
    }
    id: "3c34556deba5210ceae49a045adb5c5f"
  }
  frames {
    frame_info {
      index: 14
      time: 7250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9980582594871521
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9907283782958984
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9865866899490356
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9851380586624146
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9799703359603882
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9790413975715637
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9685026407241821
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9532870054244995
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9532597064971924
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9493443369865417
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9472265243530273
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9311469793319702
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9236065745353699
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9110153913497925
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9004049301147461
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8953641057014465
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8878188729286194
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8782486915588379
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8650981187820435
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.857020378112793
        app_id: "main"
      }
    }
    id: "7b438860ea079c42d4e7b2b3f7fa7bdd"
  }
  frames {
    frame_info {
      index: 15
      time: 7750
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9981558918952942
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.992191731929779
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9919082522392273
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9825376868247986
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.978348433971405
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9756084084510803
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9648955464363098
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9580070972442627
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9467634558677673
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9425504803657532
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9415781497955322
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9384997487068176
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9242134690284729
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8930195569992065
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8825927376747131
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8744949698448181
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8740363121032715
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8686992526054382
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.864471435546875
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8527519702911377
        app_id: "main"
      }
    }
    id: "06d040abf00bb2329b3089932a4cd242"
  }
  frames {
    frame_info {
      index: 16
      time: 8250
    }
    data {
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9981369972229004
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9921506643295288
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9919553399085999
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9824104309082031
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.978097140789032
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9754322171211243
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.964467465877533
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9578704833984375
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9463430643081665
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9427977204322815
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9410056471824646
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9379966259002686
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9235425591468811
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8916416168212891
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8816885352134705
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8735255002975464
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8731899261474609
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8683214783668518
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.864808976650238
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8516526818275452
        app_id: "main"
      }
    }
    id: "5cff8dcca58754b84ee23e2251eed7fa"
  }
}
