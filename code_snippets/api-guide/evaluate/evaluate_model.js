//index.js file

/////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and model evaluation details.
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to evaluate your own model
const MODEL_APP_ID = "YOUR_MODEL_APP_ID_HERE";
const MODEL_USER_ID = "YOUR_MODEL_USER_ID_HERE";
const MODEL_ID = "YOUR_MODEL_ID_HERE";
const MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";
const DATASET_USER_ID = "YOUR_DATASET_USER_ID_HERE";
const DATASET_APP_ID = "YOUR_DATASET_APP_ID_HERE";
const DATASET_ID = "YOUR_DATASET_ID_HERE";
const DATASET_VERSION_ID = "YOUR_DATASET_VERSION_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostEvaluations(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    eval_metrics: [
      {
        model: {
          app_id: MODEL_APP_ID,
          user_id: MODEL_USER_ID,
          id: MODEL_ID,
          model_version: {
            id: MODEL_VERSION_ID
          }
        },
        ground_truth_dataset: {
          user_id: DATASET_USER_ID,
          app_id: DATASET_APP_ID,
          id: DATASET_ID,
          version: {
            id: DATASET_VERSION_ID
          }
        }
      }
    ]

  },

  metadata,

  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      console.error('Post models failed, status:', response.status);
      throw new Error("Evaluate model failed, status: " + response.status.description);
    }

  }
);
