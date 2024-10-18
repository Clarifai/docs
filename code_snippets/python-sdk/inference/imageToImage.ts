import { Model } from "clarifai-nodejs";
import fs from "fs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "stability-ai"
    APP_ID = "Upscale"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = "stabilityai-upscale"
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

const inferenceParams = { width: 1024 };

/*
        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.

        Example for prediction through Bytes:
        const modelPrediction = await model.predictByBytes({
                                    inputBytes: Bytes,
                                    inputType: "Text"
                                });

        Example for prediction through Filepath:
        const modelPrediction = await model.predictByFilepath({
                                    filepath,
                                    inputType: "Text",
                                });

    */

const modelUrl =
  "https://clarifai.com/stability-ai/Upscale/models/stabilityai-upscale";

const imageUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg";


const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});
const prediction = await model.predictByUrl({
  url: imageUrl,
  inputType: "image",
  inferenceParams,
});

// Get the output
const outputBase64 = prediction?.[0]?.data?.image?.base64 ?? "";

// const imageInfo = prediction?.[0]?.data?.image?.imageInfo;

// Write the output to a file
fs.writeFileSync("image.png", outputBase64, "base64");
