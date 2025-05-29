import { Model } from "clarifai-nodejs";

const model = new Model({
  url: "https://clarifai.com/alfrick/docs-demos/models/my-first-model",
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const response = await model.predict({
  // see available methodNames using model.availableMethods()
  methodName: "predict",
  text1: "Yes, I uploaded it!",
});

console.log(JSON.stringify(response));

// get response data from the response object
Model.getOutputDataFromModelResponse(response);