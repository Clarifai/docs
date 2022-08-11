//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model details, location of the video
// we want as an input, and sample_ms. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to whatever model and video input you want to use
const MODEL_ID = "general-image-recognition";
const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
const VIDEO_FILE_LOCATION = "YOUR_VIDEO_FILE_LOCATION_HERE";
// Change this to configure the FPS rate (If it's not configured, it defaults to 1 FPS)
const SAMPLE_MS = 500;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const videoBytes = fs.readFileSync(VIDEO_FILE_LOCATION);

stub.PostModelOutputs(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    model_id: MODEL_ID,
    version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version.
    inputs: [
      {
        data: {
          video: {
            base64: videoBytes,
          },
        },
      },
    ],
    model: {
      output_info: {
        output_config: {
          sample_ms: SAMPLE_MS,
        },
      },
    },
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Post model outputs failed, status: " + response.status.description
      );
    }

    // Since we have one input, one output will exist here.
    const output = response.outputs[0];

    // A separate prediction is available for each "frame".
    for (const frame of output.data.frames) {
      console.log("Predicted concepts on frame " + frame.frame_info.time + ":");
      for (const concept of frame.data.concepts) {
        console.log("\t" + concept.name + " " + concept.value);
      }
    }
  }
);
