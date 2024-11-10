import { Model } from "clarifai-nodejs";
import { OutputConfig } from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb";

// Your PAT (Personal Access Token) can be found in the portal under Authentification
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "clarifai";
const APP_ID = "main";

// Change these to whatever model and video URL you want to use
const MODEL_ID = "general-image-recognition";
// You can also set a particular model version by specifying the version ID
// eg: const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';

const VIDEO_URL = "https://samples.clarifai.com/beer.mp4";
// Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
// The number must range between 100 and 60000.
// FPS = 1000/sample_ms

const SAMPLE_MS = 2000;

// Model class objects can be initialized by providing its URL or also by defining respective user_id, app_id, and model_id
// eg: const model = new Model("https://clarifai.com/clarifai/main/models/general-image-recognition");

/*
        The predict API gives flexibility to generate predictions for data provided through URL, Filepath and bytes format.

        Example for prediction through Bytes:
        const modelPrediction = await model.predictByBytes({
                                    inputBytes: Bytes,
                                    inputType: "video"
                                });

        Example for prediction through Filepath:
        const modelPrediction = await model.predictByFilepath({
                                    filepath,
                                    inputType: "video",
                                });
*/

const model = new Model({
  authConfig: {
    userId: USER_ID,
    appId: APP_ID,
    pat: process.env.CLARIFAI_PAT,
  },
  modelId: MODEL_ID,
});

const outputConfig = new OutputConfig().setSampleMs(SAMPLE_MS); // Run inference every 2 seconds


const modelPrediction = await model.predictByUrl({
  url: VIDEO_URL,
  inputType: "video",
  outputConfig,
});

// Print the frame info and the first concept name in each frame
for (const frame of modelPrediction?.[0].data?.framesList ?? []) {
  console.log(
    `Frame Info: ${JSON.stringify(frame.frameInfo, null, 2)} Concept: ${frame?.data?.conceptsList?.[0]?.name}\n`,
  );
}
