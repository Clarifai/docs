status {
  code: SUCCESS
  description: "Ok"
  req_id: "7ff42b88ef477bb9b9ecab0b61d051ca"
}
inputs {
  id: "7b708ee204284ed0a914dc37a7def8be"
  data {
    image {
      url: "https://samples.clarifai.com/puppy.jpeg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
    concepts {
      id: "charlie"
      name: "charlie"
      value: 1.0
      app_id: "test-app"
    }
    concepts {
      id: "our_wedding"
      name: "our_wedding"
      app_id: "test-app"
    }
  }
  created_at {
    seconds: 1646288847
    nanos: 89138802
  }
  modified_at {
    seconds: 1646288847
    nanos: 89138802
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}
inputs {
  id: "5571376e9d42447dafb76711669f6731"
  data {
    image {
      url: "https://samples.clarifai.com/wedding.jpg"
      image_info {
        format: "UnknownImageFormat"
        color_mode: "UnknownColorMode"
      }
    }
    concepts {
      id: "our_wedding"
      name: "our_wedding"
      value: 1.0
      app_id: "test-app"
    }
    concepts {
      id: "charlie"
      name: "charlie"
      app_id: "test-app"
    }
    concepts {
      id: "cat"
      name: "cat"
      app_id: "test-app"
    }
  }
  created_at {
    seconds: 1646288847
    nanos: 89138802
  }
  modified_at {
    seconds: 1646288847
    nanos: 89138802
  }
  status {
    code: INPUT_DOWNLOAD_PENDING
    description: "Download pending"
  }
}
