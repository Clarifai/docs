//index.js file

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, URL of the video
// we want as an input, and sample_ms. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "clarifai";
const APP_ID = "main";
// Change these to whatever model and video URL you want to use
const MODEL_ID = "general-image-recognition";
const MODEL_VERSION_ID = "aa7f35c01e0642fda5cf400f543e7c40";
const VIDEO_URL = "https://samples.clarifai.com/beer.mp4";
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

stub.PostModelOutputs(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    model_id: MODEL_ID,
    version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
    inputs: [
      {
        data: {
          video: {
            url: VIDEO_URL,
            allow_duplicate_url: true,
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

    // Since we have one input, one output will exist here
    const output = response.outputs[0];

    // A separate prediction is available for each "frame"
    for (const frame of output.data.frames) {
      console.log("Predicted concepts on frame " + frame.frame_info.time + ":");
      for (const concept of frame.data.concepts) {
        console.log("\t" + concept.name + " " + concept.value);
      }
    }
  }
);
