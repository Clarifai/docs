import { Model } from "clarifai-nodejs";
import fs from "fs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "eleven-labs"
    APP_ID = "audio-generation"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'speech-synthesis'
    You can also set a particular model version by specifying the  version ID
    eg: MODEL_VERSION_ID = "f588d92c044d4487a38c8f3d7a3b0eb2"
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

const inputText = Buffer.from("Hello, How are you doing today!");

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

const modelUrl =
  "https://clarifai.com/eleven-labs/audio-generation/models/speech-synthesis";


const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});
const modelPrediction = await model.predictByBytes({
  inputType: "text",
  inputBytes: inputText,
});

// Save the audio file
// Note: The following code assumes you have the necessary logic to write the audio data to a file in TypeScript.
// You may need to modify this part based on your specific requirements.
const outputBase64 = modelPrediction?.[0]?.data?.audio?.base64 ?? "";

fs.writeFileSync("audio.wav", outputBase64, "base64");
