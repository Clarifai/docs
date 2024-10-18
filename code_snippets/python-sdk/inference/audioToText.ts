import { Model } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "facebook"
    APP_ID = "asr"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'asr-wav2vec2-base-960h-english'
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

const audioUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav";

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
  "https://clarifai.com/facebook/asr/models/asr-wav2vec2-large-robust-ft-swbd-300h-english";


const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});
const modelPrediction = await model.predictByUrl({
  url: audioUrl,
  inputType: "audio",
});

// Print the output
console.log(modelPrediction?.[0]?.data?.text?.raw);
