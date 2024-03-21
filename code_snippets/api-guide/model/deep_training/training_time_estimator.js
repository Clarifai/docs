//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and estimated input count.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to get your training time estimate
const MODEL_ID = "YOUR_CUSTOM_MODEL_ID_HERE";
const ESTIMATED_INPUT_COUNT = 100;

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostModelVersionsTrainingTimeEstimate(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    model_id: MODEL_ID,
    model_versions: [{
      train_info: {
        params: {
          template: "MMDetection_FasterRCNN"
        }
      },

    }],
    estimated_input_count: ESTIMATED_INPUT_COUNT

  },

  metadata,

  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      console.error("Request failed, status: ", response.status);
      throw new Error("Request failed, status: " + response.status.description);
    }

    console.log(response);

  }
);