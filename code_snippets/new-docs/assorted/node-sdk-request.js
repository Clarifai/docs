import { Model } from "clarifai-nodejs";

const model = new Model({
  url: "https://clarifai.com/openai/chat-completion/models/gpt-4_1",
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const response = await model.predict({
  // see available methodNames using model.availableMethods()
  methodName: "predict",
  prompt: "What is the future of AI?",
});

console.log(JSON.stringify(response));

// get response data from the response object
Model.getOutputDataFromModelResponse(response);