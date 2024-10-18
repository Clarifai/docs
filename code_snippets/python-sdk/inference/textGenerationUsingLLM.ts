import { Model } from "clarifai-nodejs";

// Your PAT (Personal Access Token) can be found in the Account's Security section
const prompt = "What’s the future of AI?";
// You can set the model using model URL or model ID.
const modelUrl = "https://clarifai.com/openai/chat-completion/models/GPT-4";

/*
        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.

        Example for prediction through Filepath:
        const modelPrediction = await model.predictByFilepath({
                                    filepath,
                                    inputType: "Text",
                                });

        Example for prediction through URL:
        const modelPrediction = await model.predictByURL({
                                    url: URL,
                                    inputType: "Text",
                                });
*/

// Model Predict
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
