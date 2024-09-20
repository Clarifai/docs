import { Model } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "cohere"
    APP_ID = "embed"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'cohere-embed-english-v3_0'
    You can also set a particular model version by specifying the  version ID
    eg: MODEL_VERSION_ID = "model_version"
    Model class objects can be initialised by providing its URL or also by defining respective userId, appId and modelId

    eg : 
    const model = new Model({
        authConfig: {
            userId: "clarifai",
            appId: "main",
            pat: process.env.CLARIFAI_PAT,
        },
        modelId: MODEL_ID,
    });

*/

const inputText = Buffer.from(
  `In India Green Revolution commenced in the early 1960s that led to an increase in food grain production, especially in Punjab, Haryana, and Uttar Pradesh. Major milestones in this undertaking were the development of high-yielding varieties of wheat. The Green revolution is revolutionary in character due to the introduction of new technology, new ideas, the new application of inputs like HYV seeds, fertilizers, irrigation water, pesticides, etc. As all these were brought suddenly and spread quickly to attain dramatic results thus it is termed as a revolution in green agriculture.`,
);

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

const modelUrl =
  "https://clarifai.com/cohere/embed/models/cohere-embed-english-v3_0";


const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const modelPrediction = await model.predictByBytes({
  inputBytes: inputText,
  inputType: "text",
});

const embeddings =
  modelPrediction?.[0]?.data?.embeddingsList?.[0]?.vectorList ?? [];

// const numDimensions =
//   modelPrediction?.[0]?.data?.embeddingsList?.[0]?.numDimensions;

console.log(embeddings.slice(0, 10));
