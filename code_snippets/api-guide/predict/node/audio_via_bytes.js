//index.js file

////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model ID, and
// audio file location. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE"
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "facebook"
const APP_ID = "asr"
// Change these to make your own predictions
const MODEL_ID = "asr-wav2vec2-base-960h-english"
const AUDIO_FILE_LOCATION = "YOUR_AUDIO_FILE_LOCATION_HERE"

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const audioBytes = fs.readFileSync(AUDIO_FILE_LOCATION);

stub.PostModelOutputs(
  {
    user_app_id: {
      "user_id": USER_ID,
      "app_id": APP_ID,
    },
    model_id: MODEL_ID,
    inputs: [{ data: { audio: { base64: audioBytes } } }],
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Post workflow results failed, status: " + response.status.description
      );
    }

    // Since we have one input, one output will exist here
    const output = response.outputs[0];

    // Print the output
    console.log(output.data.text.raw)

  }
);
