//index.js file

////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the 
// workflow we want to create. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own workflow 
// Note that we've also added as comments the values of most of these variables against their names in the code below

const WORKFLOW_ID = 'auto-annotation-workflow-id';
const NODE_ID_1 = 'general-embed';
const MODEL_ID_1 = 'bbb5f41425b8468d9b7a554ff10f8581';
const MODEL_VERSION_ID_1 = 'bb186755eda04f9cbb6fe32e816be104';

const NODE_ID_2 = 'general-concept';
const MODEL_ID_2 = 'aaa03c23b3724a16a56b629203edc62c';
const MODEL_VERSION_ID_2 = 'aa7f35c01e0642fda5cf400f543e7c40';

const NODE_ID_3 = 'general-cluster';
const MODEL_ID_3 = 'cccbe437d6e54e2bb911c6aa292fb072';
const MODEL_VERSION_ID_3 = 'cc2074cff6dc4c02b6f4e1b8606dcb54';

const NODE_ID_4 = 'mapper';
const SYNONYM_MODEL_ID = 'synonym-model-id';
const SYNONYM_MODEL_VERSION_ID = 'YOUR_SYNONYM_MODEL_VERSION_ID';

const NODE_ID_5 = 'greater-than';
const GREATER_THAN_MODEL_ID = 'greater-than-model-id';
const GREATER_THAN_MODEL_VERSION_ID = 'YOUR_GREATER_THAN_MODEL_VERSION_ID';

const NODE_ID_6 = 'write-success';
const WRITE_SUCCESS_MODEL_ID = 'write-success-model-id';
const WRITE_SUCCESS_MODEL_VERSION_ID = 'YOUR_WRITE_SUCCESS_MODEL_VERSION_ID';

const NODE_ID_7 = 'less-than';
const LESS_THAN_MODEL_ID = 'less-than-model-id';
const LESS_THAN_MODEL_VERSION_ID = 'YOUR_LESS_THAN_MODEL_VERSION_ID';

const NODE_ID_8 = 'write-pending';
const WRITE_PENDING_MODEL_ID = 'write-pending-model-id';
const WRITE_PENDING_MODEL_VERSION_ID = 'YOUR_WRITE_PENDING_MODEL_VERSION_ID';

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
            user_id: USER_ID,
            app_id: APP_ID
        },
        workflows: [
            {
                id: WORKFLOW_ID, // auto-annotation-workflow-id,
                nodes: [
                    {
                        id: NODE_ID_1, // general-embed
                        model: {
                            id: MODEL_ID_1, // bbb5f41425b8468d9b7a554ff10f8581
                            model_version: {
                                id: MODEL_VERSION_ID_1, // bb186755eda04f9cbb6fe32e816be104
                            }
                        }
                    },
                    {
                        id: NODE_ID_2, // general-concept
                        model: {
                            id: MODEL_ID_2, // aaa03c23b3724a16a56b629203edc62c
                            model_version: {
                                id: MODEL_VERSION_ID_2, // aa7f35c01e0642fda5cf400f543e7c40
                            }
                        }
                    },
                    {
                        id: NODE_ID_3, // general-cluster
                        model: {
                            id: MODEL_ID_3, // cccbe437d6e54e2bb911c6aa292fb072
                            model_version: {
                                id: MODEL_VERSION_ID_3, // cc2074cff6dc4c02b6f4e1b8606dcb54
                            }
                        }
                    },
                    {
                        id: NODE_ID_4, // mapper
                        model: {
                            id: SYNONYM_MODEL_ID, // synonym-model-id
                            model_version: {
                                id: SYNONYM_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_2 // general-concept
                            }
                        ]
                    },
                    {
                        id: NODE_ID_5, // greater-than
                        model: {
                            id: GREATER_THAN_MODEL_ID, // greater-than-model-id
                            model_version: {
                                id: GREATER_THAN_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_4 // mapper
                            }
                        ]
                    },
                    {
                        id: NODE_ID_6, // write-success
                        model: {
                            id: WRITE_SUCCESS_MODEL_ID,
                            model_version: {
                                id: WRITE_SUCCESS_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_5 // greater-than
                            }
                        ]
                    },
                    {
                        id: NODE_ID_7, // less-than
                        model: {
                            id: LESS_THAN_MODEL_ID,
                            model_version: {
                                id: LESS_THAN_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_4 // mapper
                            }
                        ]
                    },
                    {
                        id: NODE_ID_8, // write-pending
                        model: {
                            id: WRITE_PENDING_MODEL_ID,
                            model_version: {
                                id: WRITE_PENDING_MODEL_VERSION_ID
                            }
                        },
                        node_inputs: [
                            {
                                node_id: NODE_ID_7 // less-than
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
            console.log(response.status);
            throw new Error("Post workflows failed, status: " + response.status.description);
        }
    }
);

