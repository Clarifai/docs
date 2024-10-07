import { Model, Input } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "openai"
    APP_ID = "chat-completion"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'openai-gpt-4-vision'
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

const prompt = "What time of day is it?";
const imageUrl = "https://samples.clarifai.com/metro-north.jpg";
const modelUrl =
  "https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision";
const inferenceParams = { temperature: 0.2, maxTokens: 100 };
const multiInputs = Input.getMultimodalInput({
  inputId: "",
  imageUrl,
  rawText: prompt,
});

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


const model = new Model({
  url: modelUrl,
  authConfig: { pat: process.env.CLARIFAI_PAT },
});

const modelPrediction = await model.predict({
  inputs: [multiInputs],
  inferenceParams,
});

console.log(modelPrediction?.[0]?.data?.text?.raw);
