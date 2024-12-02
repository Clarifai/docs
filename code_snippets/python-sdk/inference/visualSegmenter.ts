import { Model } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "clarifai"
    APP_ID = "main"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'image-general-segmentation'
    You can also set a particular model version by specifying the  version ID
    eg: MODEL_VERSION_ID = "1581820110264581908ce024b12b4bfb"
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

const SEGMENT_IMAGE_URL =
  "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg";

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
  "https://clarifai.com/clarifai/main/models/image-general-segmentation";
const segmentorModel = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});


const predictionResponse = await segmentorModel.predictByUrl({
  url: SEGMENT_IMAGE_URL,
  inputType: "image",
});

const regions = predictionResponse?.[0]?.data?.regionsList ?? [];

for (const region of regions) {
  for (const concept of region?.data?.conceptsList ?? []) {
    // Accessing and rounding the concept's percentage of image covered
    const name = concept.name;
    const value = Math.round(concept.value * 10000) / 10000;
    console.log(`${name}: ${value}`);
  }
}
