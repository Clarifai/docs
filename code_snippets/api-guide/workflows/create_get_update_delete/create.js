//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the new
// custom workflow we want to create. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own custom workflow
const WORKFLOW_ID = 'my-custom-workflow';
const NODE_ID_1 = 'optical-character-recognizer';
const MODEL_ID_1 = 'ocr-scene-english-paddleocr';
const MODEL_VERSION_ID_1 = '40dbb2c9cde44a27af226782e7157006';

const NODE_ID_2 = 'text-to-text';
const MODEL_ID_2 = 'text-translation-english-spanish';
const MODEL_VERSION_ID_2 = '643f30558de34013aff72b0e21f244f5';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostWorkflows(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        workflows: [
            {
                id: WORKFLOW_ID,
                nodes: [
                    {
                        id: NODE_ID_1,
                        model: {
                            id: MODEL_ID_1,
                            model_version: {
                                id: MODEL_VERSION_ID_1
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
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);