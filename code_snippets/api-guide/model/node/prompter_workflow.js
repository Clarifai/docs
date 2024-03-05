//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the new
// custom workflow. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own custom workflow
const WORKFLOW_ID = "my-custom-prompter-workflow";

const NODE_ID_1 = "prompter-model";
const PROMPTER_MODEL_ID = "my-prompter-model";
const PROMPTER_MODEL_USER_ID = "YOUR_USER_ID_HERE";
const PROMPTER_MODEL_APP_ID = "my-custom-app";
const PROMPTER_MODEL_VERSION_ID = "e851fb99a3b14df788ce11accee45c19";

const NODE_ID_2 = "text-to-text";
const LLM_MODEL_ID = "GPT-4";
const LLM_MODEL_USER_ID = "openai";
const LLM_MODEL_APP_ID = "chat-completion";
const LLM_MODEL_VERSION = "5d7a50b44aec4a01a9c492c5a5fcf387";

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
                            id: PROMPTER_MODEL_ID,
                            user_id: PROMPTER_MODEL_USER_ID,
                            app_id: PROMPTER_MODEL_APP_ID,
                            model_version: {
                                id: PROMPTER_MODEL_VERSION_ID
                            }
                        }
                    },
                    {
                        id: NODE_ID_2,
                        model: {
                            id: LLM_MODEL_ID,
                            user_id: LLM_MODEL_USER_ID,
                            app_id: LLM_MODEL_APP_ID,
                            model_version: {
                                id: LLM_MODEL_VERSION
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

        console.log(response);
    }
);