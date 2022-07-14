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
const NODE_ID_1 = "travel-concepts";
const MODEL_ID_1 = "ccc28c313d69466f836ab83287a54ed9";
const MODEL_VERSION_ID_1 = "cce28c313d69466f836ab83287a54ed9";

const NODE_ID_2 = "nsfw-concepts";
const MODEL_ID_2 = "ccc76d86d2004ed1a38ba0cf39ecb4b1";
const MODEL_VERSION_ID_2 = "cc76a92beaeb4d8495a58ba197998158";

const NODE_ID_3 = "wedding-concepts";
const MODEL_ID_3 = "c386b7a870114f4a87477c0824499348";
const MODEL_VERSION_ID_3 = "787cc9a002164250800598d36b072384";

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
              },
            },
          },
          {
            id: NODE_ID_2,
            model: {
              id: MODEL_ID_2,
              model_version: {
                id: MODEL_VERSION_ID_2,
              },
            },
          },
          {
            id: NODE_ID_3,
            model: {
              id: MODEL_ID_3,
              model_version: {
                id: MODEL_VERSION_ID_3,
              },
            },
          },
        ],
      },
    ],
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
