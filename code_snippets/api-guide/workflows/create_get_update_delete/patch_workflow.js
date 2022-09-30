//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the
// workflow we want to update. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to update your own workflow
const WORKFLOW_ID = "my-custom-workflow";
const NODE_ID_1 = "audio-to-text";
const MODEL_ID_1 = "asr-wav2vec2-base-960h-english";
const MODEL_VERSION_ID_1 = "f4deae70a473492a8e2f9b7bb1dbee85";

const NODE_ID_2 = "text-summarization";
const MODEL_ID_2 = "text-summarization-english-distilbart-cnn-12-6";
const MODEL_VERSION_ID_2 = "8279cec2221a4b1d9db774470940aebd";

const NODE_ID_3 = "english-to-french";
const MODEL_ID_3 = "translation-english-to-french-text";
const MODEL_VERSION_ID_3 = "c65a4a51c2b646fca5f0e4bf1ff200d7";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchWorkflows(
  {
    user_app_id: {
      "user_id": USER_ID,
      "app_id": APP_ID,
    },
    action: "overwrite",
    workflows: [
      {
        id: WORKFLOW_ID,
        nodes: [
          {
            id: NODE_ID_1,
            model: {
              id: MODEL_ID_1,
              model_version: {
                id: MODEL_VERSION_ID_1,
              }
            }
          },
          {
            id: NODE_ID_2,
            model: {
              id: MODEL_ID_2,
              model_version: {
                id: MODEL_VERSION_ID_2
              }
            },
            node_inputs: [
                {
                    node_id: NODE_ID_1 
                }
            ]
          },
          {
            id: NODE_ID_3,
            model: {
              id: MODEL_ID_3,
              model_version: {
                id: MODEL_VERSION_ID_3
              }
            },
            node_inputs: [
                {
                    node_id: NODE_ID_2
                }
            ]
          }
        ]
      }
    ]
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Patch workflows failed, status: " + response.status.description
      );
    }
  }
);
