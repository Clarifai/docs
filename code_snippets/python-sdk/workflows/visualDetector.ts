import { User, App, Workflow } from "clarifai-nodejs";
import path from "path";


// Create or load an app
const appId = "test_app";

// Your PAT (Personal Access Token) can be found in the Account's Security section
// Specify the correct userId/appId pairings
// Since you're making inferences outside your app's scope
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

await client.createApp({
  appId,
  baseWorkflow: "Empty",
});

const app = new App({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Create workflow from yaml file
/**
workflow:
  id: demoBytetrack
  nodes:
      - id: objectDetection
          model:
              userId: clarifai
              appId: main
              modelId: personVehicleDetectionYolov5
      - id: track
          model:
              modelId: "byteTracker"
              modelTypeId: "byteTracker"
              outputInfo:
                  params:
                      minVisibleFrames: 1
                      maxDisappeared: 30
                      confidenceThresh: 0.1
          nodeInputs:
              - nodeId: objectDetection
*/

const visualDetectorWorkflow = await app.createWorkflow({
  configFilePath: path.resolve(
    __dirname,
    "../../assets/configs/byte_tracker.yml",
  ),
});

const workflow = new Workflow({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  workflowId: visualDetectorWorkflow.id,
});

const prediction = await workflow.predictByUrl(
  "https://samples.clarifai.com/beer.mp4",
  "video",
);

console.log(
  prediction.resultsList?.[0]?.outputsList?.[
    prediction.resultsList?.[0]?.outputsList?.length - 1
  ].data,
);
