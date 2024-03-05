//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the extraction job.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to make your own extraction
const INPUTS_JOB_ID = "";
const CLOUD_STORAGE_URL = "s3://samples.clarifai.com/storage/";
const CUSTOM_METADATA = { "id": "id001" };
const DATASET_ID_1 = "dataset-1";
const CONCEPT_ID_1 = "lamborghini23_A";
const CONCEPT_ID_2 = "spiderman_a";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostInputsDataSources(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "app_pat": PAT,
        "data_sources": [
            {
                "inputs_add_job_id": INPUTS_JOB_ID,
                "url": {
                    "url": CLOUD_STORAGE_URL
                },
                "input_template": {
                    "dataset_ids": [DATASET_ID_1],
                    "data": {
                        "metadata": CUSTOM_METADATA,
                        "concepts": [
                            {
                                "id": CONCEPT_ID_1,
                                "value": 1
                            },
                            {
                                "id": CONCEPT_ID_2,
                                "value": 1
                            }
                        ]
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
            console.log(response.status);
            throw new Error("Post inputs failed, status: " + response.status.description);
        }

        console.log(response);
    }

);
