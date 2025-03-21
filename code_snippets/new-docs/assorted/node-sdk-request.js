import { Model } from "clarifai-nodejs";

const prompt = "What is the future of AI?";

const modelUrl = "https://clarifai.com/meta/Llama-3/models/Llama-3_2-3B-Instruct";

// Model Predict
// Set PAT as an environment variable
const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const modelPrediction = await model.predictByBytes({
  inputBytes: Buffer.from(prompt),
  inputType: "text",
});

console.log(modelPrediction?.[0]?.data?.text?.raw);