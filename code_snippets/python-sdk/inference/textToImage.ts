import { Model } from "clarifai-nodejs";
import fs from "fs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "stability-ai"
    APP_ID = "stable-diffusion-2"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = "stable-diffusion-xl"
    You can also set a particular model version by specifying the  version ID
    eg: MODEL_VERSION_ID = "0c919cc1edfc455dbc96207753f178d7"
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

const inputText: Buffer = Buffer.from("floor plan for 2 bedroom kitchen house");

/**
        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.


        Example for prediction through Bytes:
        const modelPrediction = await model.predictByBytes({
                                    inputBytes,
                                    inputType
                                });


        Example for prediction through Filepath:
        const modelPrediction = await model.predictByFilepath({
                                    filepath, 
                                    inputType
                                });
    */

// Image Generation using Stable Diffusion XL
const modelUrl =
  "https://clarifai.com/stability-ai/stable-diffusion-2/models/stable-diffusion-xl";


const model = new Model({
  url: modelUrl,
  authConfig: { pat: process.env.CLARIFAI_PAT },
});

const modelPrediction = await model.predictByBytes({
  inputBytes: inputText,
  inputType: "text",
});

// Base64 image to numpy array
const outputBase64 = modelPrediction?.[0]?.data?.image?.base64 ?? "";

fs.writeFileSync("image.png", outputBase64, "base64");
