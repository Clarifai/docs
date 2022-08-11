id: "519a178f143d44d4a9eb34783f185a01"
status {
  code: SUCCESS
  description: "Ok"
}
created_at {
  seconds: 1660203562
  nanos: 551812802
}
model {
  id: "general-image-recognition"
  name: "Image Recognition"
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
    seconds: 1658798085
    nanos: 654361000
  }
  import_info {
  }
}
input {
  id: "3fc8b48172684bfe9e695d247a6009f2"
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
        value: 0.997753918170929
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.997462272644043
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9957707524299622
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9946278929710388
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9880280494689941
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9861199855804443
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9854915738105774
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9843154549598694
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9839422106742859
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9785923361778259
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9709053039550781
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9638245105743408
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.9530097246170044
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9528887271881104
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9464144706726074
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9452511668205261
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.9401746988296509
        app_id: "main"
      }
      concepts {
        id: "ai_X7ZHcRJc"
        name: "drop"
        value: 0.9362671375274658
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9271894097328186
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9260683655738831
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
        value: 0.9992852807044983
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9983568787574768
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.997733473777771
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9975631237030029
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9974479675292969
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9943854808807373
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9906821250915527
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9859077334403992
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9823503494262695
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9820547699928284
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9812148809432983
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9799168705940247
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9784411191940308
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9745087027549744
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9708448052406311
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9691837430000305
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9684087038040161
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9548789858818054
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9489448666572571
        app_id: "main"
      }
      concepts {
        id: "ai_LMNcLLVR"
        name: "frosty"
        value: 0.9455925822257996
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
        value: 0.9993226528167725
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9975113868713379
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9974460601806641
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9966624975204468
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9954904913902283
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9942731261253357
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9873706102371216
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.986297607421875
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9813623428344727
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9774436354637146
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9760125279426575
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9741607308387756
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9730094075202942
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9695686101913452
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9682390093803406
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.9641352295875549
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9638278484344482
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9572075605392456
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.956136167049408
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9538235068321228
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
        value: 0.9997699856758118
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9992303848266602
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9992130994796753
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9985170960426331
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9972791075706482
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.996057391166687
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9958221912384033
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9914268255233765
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9910215735435486
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9901620149612427
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.989056408405304
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9886349439620972
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9845825433731079
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.983745813369751
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9825948476791382
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.9744146466255188
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9737566709518433
        app_id: "main"
      }
      concepts {
        id: "ai_n1b6R1vv"
        name: "amber"
        value: 0.9714393615722656
        app_id: "main"
      }
      concepts {
        id: "ai_4Dlsldjg"
        name: "brew"
        value: 0.9691905975341797
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.9686384201049805
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
        value: 0.9978876709938049
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.996326744556427
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.984455943107605
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9828509092330933
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9818499684333801
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9799937009811401
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9768438935279846
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9610036015510559
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9601321220397949
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9438531398773193
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9384875297546387
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9253551363945007
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9186211824417114
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9022694230079651
        app_id: "main"
      }
      concepts {
        id: "ai_VXtfX6F5"
        name: "cool"
        value: 0.9019186496734619
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.884354829788208
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.882815957069397
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.874964714050293
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8742404580116272
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.8664778470993042
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
        value: 0.9951942563056946
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9943759441375732
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9925910234451294
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9915691018104553
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9893943667411804
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9805277585983276
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9529010653495789
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9493312239646912
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9443060755729675
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9336271286010742
        app_id: "main"
      }
      concepts {
        id: "ai_bNlklStp"
        name: "thirst"
        value: 0.9140426516532898
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.9111030697822571
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9057613015174866
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8999575972557068
        app_id: "main"
      }
      concepts {
        id: "ai_nMNvWpn8"
        name: "intoxicated"
        value: 0.8991795778274536
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.8813260793685913
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8803942799568176
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.8753432631492615
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8563250303268433
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8491774797439575
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
        value: 0.996720016002655
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9964469075202942
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.982464611530304
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9764775633811951
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.974078357219696
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.9723861217498779
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.970259428024292
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9654913544654846
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9504287838935852
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9249047636985779
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9079272747039795
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.9033960700035095
        app_id: "main"
      }
      concepts {
        id: "ai_12dz73B9"
        name: "bottle"
        value: 0.902218759059906
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.9007232785224915
        app_id: "main"
      }
      concepts {
        id: "ai_X7ZHcRJc"
        name: "drop"
        value: 0.8846867680549622
        app_id: "main"
      }
      concepts {
        id: "ai_7vR9zv7l"
        name: "bubble"
        value: 0.8829047679901123
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.875813901424408
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8671783208847046
        app_id: "main"
      }
      concepts {
        id: "ai_b01mhdxB"
        name: "party"
        value: 0.8658689856529236
        app_id: "main"
      }
      concepts {
        id: "ai_PBPBk7nW"
        name: "champagne"
        value: 0.8577202558517456
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
        value: 0.9836540818214417
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9833090901374817
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9761819839477539
        app_id: "main"
      }
      concepts {
        id: "ai_TBlp0Pt3"
        name: "beer"
        value: 0.9755870699882507
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9633444547653198
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9479299187660217
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.941258430480957
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9155797958374023
        app_id: "main"
      }
      concepts {
        id: "ai_7qwGxLch"
        name: "gold"
        value: 0.9142221212387085
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.907996654510498
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9045435786247253
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8932251334190369
        app_id: "main"
      }
      concepts {
        id: "ai_7Xg5SQRW"
        name: "luxury"
        value: 0.8723647594451904
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.8703675866127014
        app_id: "main"
      }
      concepts {
        id: "ai_mZ2tl6cW"
        name: "health"
        value: 0.8629929423332214
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8388506770133972
        app_id: "main"
      }
      concepts {
        id: "ai_Lq00FggW"
        name: "desktop"
        value: 0.8250543475151062
        app_id: "main"
      }
      concepts {
        id: "ai_8zbKXvD7"
        name: "sparkling"
        value: 0.8216716051101685
        app_id: "main"
      }
      concepts {
        id: "ai_LM64MDHs"
        name: "shining"
        value: 0.8177599906921387
        app_id: "main"
      }
      concepts {
        id: "ai_NTTFwSHB"
        name: "wet"
        value: 0.8106683492660522
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
        value: 0.998095691204071
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9943065047264099
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9866586327552795
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9840677976608276
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9835688471794128
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9805488586425781
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9772351384162903
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9583105444908142
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9570294618606567
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9569440484046936
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.947785496711731
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9425638318061829
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9203127026557922
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9149718284606934
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.912051796913147
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.9069801568984985
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8931369185447693
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8870121836662292
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8857131004333496
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.8823739886283875
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
        value: 0.9971466660499573
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9911620616912842
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9869552254676819
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9821943044662476
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9767174124717712
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9732503294944763
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9611469507217407
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9469265937805176
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.941417932510376
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.940022885799408
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.937943160533905
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9196685552597046
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9179996252059937
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8989689350128174
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8941972255706787
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8905569911003113
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.88238525390625
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8785569667816162
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8634583950042725
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8504428267478943
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
        value: 0.9986340403556824
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9924977421760559
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9886854887008667
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.986160397529602
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9820623993873596
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9777780175209045
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9733004570007324
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9529153108596802
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9495422840118408
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9494291543960571
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9486342072486877
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9413025975227356
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9297009706497192
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.918346643447876
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.9079149961471558
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.906195878982544
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8804572224617004
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8798848986625671
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8680368065834045
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8535978198051453
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
        value: 0.998038113117218
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9920376539230347
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9916306138038635
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9827123880386353
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9750614762306213
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9725252389907837
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9663617014884949
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.942520022392273
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9390248656272888
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9341832995414734
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9330732226371765
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9265549778938293
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9185084104537964
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8948495984077454
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8862652778625488
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8822135925292969
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8681472539901733
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8647196292877197
        app_id: "main"
      }
      concepts {
        id: "ai_ZSKpCCHD"
        name: "vertical"
        value: 0.8547422289848328
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8477557897567749
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
        value: 0.9978912472724915
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9922767281532288
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9886456727981567
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9865738749504089
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9798799157142639
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9784476161003113
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9674688577651978
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.953066885471344
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9486628174781799
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.946937620639801
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9452530741691589
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9348174929618835
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9339045286178589
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9132968783378601
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.899000346660614
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.898864209651947
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8955707550048828
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.866500973701477
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8616964221000671
        app_id: "main"
      }
      concepts {
        id: "ai_74H0z2d2"
        name: "sketch out"
        value: 0.8595026135444641
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
        value: 0.9979944229125977
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9903469681739807
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9898814558982849
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9838077425956726
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9786876440048218
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9770419001579285
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9652636051177979
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9490075707435608
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9474231600761414
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9447771310806274
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9390490651130676
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.931921124458313
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.90717613697052
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9046061038970947
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8927520513534546
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8854517936706543
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8830398321151733
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8566024899482727
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8550928831100464
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8503050804138184
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
        value: 0.9980589747428894
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9907171130180359
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9865360856056213
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9850829839706421
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.9799899458885193
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9790197014808655
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9685344696044922
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9534428119659424
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9531964063644409
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9492233991622925
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9473913908004761
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9311952590942383
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9234644770622253
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.9111457467079163
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.9006906747817993
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.895000159740448
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8880323767662048
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8782278895378113
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8648902177810669
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8568897843360901
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
        value: 0.998155415058136
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9922153353691101
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9919559955596924
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9824689626693726
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.978298008441925
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.975547730922699
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9647846817970276
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9579878449440002
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.946682333946228
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9426839351654053
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9415327906608582
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9382109642028809
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9239164590835571
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.892767071723938
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8825502395629883
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8742321729660034
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8739243149757385
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8685475587844849
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8646178245544434
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.8519124388694763
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
        value: 0.998155415058136
        app_id: "main"
      }
      concepts {
        id: "ai_8XGJjH7R"
        name: "foam"
        value: 0.9922154545783997
        app_id: "main"
      }
      concepts {
        id: "ai_786Zr311"
        name: "no person"
        value: 0.9919559955596924
        app_id: "main"
      }
      concepts {
        id: "ai_mCpQg89c"
        name: "glass"
        value: 0.9824690818786621
        app_id: "main"
      }
      concepts {
        id: "ai_3R5pJ6hB"
        name: "lager"
        value: 0.978298008441925
        app_id: "main"
      }
      concepts {
        id: "ai_zJx6RbxW"
        name: "drink"
        value: 0.9755478501319885
        app_id: "main"
      }
      concepts {
        id: "ai_2LWXN7Bn"
        name: "brewery"
        value: 0.9647848010063171
        app_id: "main"
      }
      concepts {
        id: "ai_2gmKZLxp"
        name: "cold"
        value: 0.9579879641532898
        app_id: "main"
      }
      concepts {
        id: "ai_SsmKLB4z"
        name: "bar"
        value: 0.9466824531555176
        app_id: "main"
      }
      concepts {
        id: "ai_54zxXFGL"
        name: "full"
        value: 0.9426839351654053
        app_id: "main"
      }
      concepts {
        id: "ai_QnpbpDLK"
        name: "pint"
        value: 0.9415329694747925
        app_id: "main"
      }
      concepts {
        id: "ai_drK6ClJR"
        name: "alcohol"
        value: 0.9382111430168152
        app_id: "main"
      }
      concepts {
        id: "ai_F547sXrF"
        name: "foamy"
        value: 0.9239164590835571
        app_id: "main"
      }
      concepts {
        id: "ai_qCKzbr0g"
        name: "ale"
        value: 0.8927672505378723
        app_id: "main"
      }
      concepts {
        id: "ai_XNmzgDnF"
        name: "pub"
        value: 0.8825505971908569
        app_id: "main"
      }
      concepts {
        id: "ai_pkvDRSJ1"
        name: "mug"
        value: 0.8742324113845825
        app_id: "main"
      }
      concepts {
        id: "ai_3l2jRv5s"
        name: "liquor"
        value: 0.8739248514175415
        app_id: "main"
      }
      concepts {
        id: "ai_B3MXt5Ng"
        name: "refreshment"
        value: 0.8685473799705505
        app_id: "main"
      }
      concepts {
        id: "ai_3PlgVmlN"
        name: "food"
        value: 0.8646178245544434
        app_id: "main"
      }
      concepts {
        id: "ai_5VHsZr8N"
        name: "liquid"
        value: 0.851912260055542
        app_id: "main"
      }
    }
    id: "5cff8dcca58754b84ee23e2251eed7fa"
  }
}