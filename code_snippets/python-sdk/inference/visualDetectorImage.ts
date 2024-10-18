import { Model } from "clarifai-nodejs";

/**
    Your PAT (Personal Access Token) can be found in the Account's Security section
    Specify the correct userId/appId pairings
    Since you're making inferences outside your app's scope
    USER_ID = "clarifai"
    APP_ID = "main"

    You can set the model using model URL or model ID.
    Change these to whatever model you want to use
    eg : MODEL_ID = 'general-image-detection'
    You can also set a particular model version by specifying the  version ID
    eg: MODEL_VERSION_ID = '1580bb1932594c93b7e2e04456af7c6f'

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


const DETECTION_IMAGE_URL =
  "https://s3.amazonaws.com/samples.clarifai.com/people_walking2.jpeg";
const modelUrl =
  "https://clarifai.com/clarifai/main/models/general-image-detection";
const detectorModel = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
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

const detectorModelPrediction = await detectorModel.predictByUrl({
  url: DETECTION_IMAGE_URL,
  inputType: "image",
});

// Since we have one input, one output will exist here
const regions = detectorModelPrediction?.[0]?.data?.regionsList;

if (regions) {
  for (const region of regions) {
    // Accessing and rounding the bounding box values
    const top_row =
      Math.round(region.regionInfo?.boundingBox?.topRow ?? 0 * 1000) / 1000;
    const left_col =
      Math.round(region.regionInfo?.boundingBox?.leftCol ?? 0 * 1000) / 1000;
    const bottom_row =
      Math.round(region.regionInfo?.boundingBox?.bottomRow ?? 0 * 1000) /
      1000;
    const right_col =
      Math.round(region.regionInfo?.boundingBox?.rightCol ?? 0 * 1000) / 1000;

    for (const concept of region.data?.conceptsList ?? []) {
      // Accessing and rounding the concept value
      const name = concept.name;
      const value = Math.round(concept.value * 10000) / 10000;

      console.log(
        `${name}: ${value} BBox: ${top_row}, ${left_col}, ${bottom_row}, ${right_col}`,
      );
    }
  }
}
