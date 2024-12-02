import { Model } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "clarifai"
    APP_ID = "main"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = "image-embedder-clip"
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

const imageUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg";

/*
        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.

        Example for prediction through Bytes:
        const modelPrediction = await model.predictByBytes({
                                    inputBytes: Bytes,
                                    inputType: "image"
                                });

        Example for prediction through Filepath:
        const modelPrediction = await model.predictByFilepath({
                                    filepath,
                                    inputType: "image",
                                });
*/

const modelUrl =
  "https://clarifai.com/clarifai/main/models/image-embedder-clip";


const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Model Predict
const modelPrediction = await model.predictByUrl({
  url: imageUrl,
  inputType: "image",
});

// console.log(modelPrediction?.[0]?.data?.text?.raw);

const embeddings =
  modelPrediction?.[0]?.data?.embeddingsList?.[0]?.vectorList ?? [];

// const numDimensions =
//   modelPrediction?.[0]?.data?.embeddingsList?.[0]?.numDimensions ?? 0;

console.log(embeddings.slice(0, 10));
