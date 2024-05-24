import { Model } from "clarifai-nodejs";

const prompt = `Classes: ['positive', 'negative', 'neutral']
Text: Sunny weather makes me happy.

Classify the text into one of the above classes.`;

// Model Predict
const model = new Model({
  url: "https://clarifai.com/openai/chat-completion/models/GPT-4",
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});


const modelPrediction = await model.predictByBytes({
  inputBytes: Buffer.from(prompt),
  inputType: "text",
});

console.log(modelPrediction?.[0]?.data?.text?.raw);
