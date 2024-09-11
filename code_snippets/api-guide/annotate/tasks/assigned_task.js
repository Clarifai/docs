//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details for
// assigning a task. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to assign your own task 
const CONCEPT_ID = "water";
const WORKER_USER_ID = "WORKER_USER_ID_HERE";
const REVIEWER_USER_ID = "REVIEWER_USER_ID_HERE"; // User who will review this task
const DATASET_ID = "DATASET_ID_HERE";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostTasks({
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        tasks: [{
            type: "CONCEPTS_CLASSIFICATION",
            name: "Annotate " + CONCEPT_ID,
            worker: {
                strategy: "DYNAMIC",
                workers: [{
                    user: {
                        id: WORKER_USER_ID
                    }
                }]
            },
            concepts: [{
                concept: {
                    id: CONCEPT_ID
                }
            }],
            input_source: {
                type: "DATASET",
                id: DATASET_ID

            },
            sample_ms: 1000,
            review: {
                strategy: "MANUAL",
                manual_strategy_info: {
                    sample_percentage: 0.5
                },
                users: [{
                    id: REVIEWER_USER_ID
                }]
            }
        }]

    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.error('Post tasks failed, status:', response.status);
            throw new Error("Post tasks failed, status: " + response.status.description);
        }
    }
);
