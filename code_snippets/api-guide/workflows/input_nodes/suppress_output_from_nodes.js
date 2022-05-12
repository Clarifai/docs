//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// nodes to suppress their outputs. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to suppress the outputs of your own nodes
const WORKFLOW_ID = 'predict-cluster-only';
const NODE_ID_1 = 'general-embed';
const MODEL_ID_1 = 'bbb5f41425b8468d9b7a554ff10f8581';
const MODEL_VERSION_ID_1 = 'bb186755eda04f9cbb6fe32e816be104';

const NODE_ID_2 = 'general-cluster';
const MODEL_ID_2 = 'cccbe437d6e54e2bb911c6aa292fb072';
const MODEL_VERSION_ID_2 = 'cc2074cff6dc4c02b6f4e1b8606dcb54';

const NODE_ID_3 = 'mapper';

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
                        },
                        suppress_output: true
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
                                node_id: NODE_ID_3
                            }
                        ]
                    },
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
            console.log(response.status);
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);