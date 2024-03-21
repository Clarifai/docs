//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and concept IDs.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to import your own model
const MODEL_ID = "zero-shot-text-model";
const CONCEPT_ID_1 = "happy";
const CONCEPT_ID_2 = "sad";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostModelVersions(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID,
        model_versions: [{
            import_info: {
                params: {
                    toolkit : "HuggingFace",
                    pipeline_name :"zero-shot-classification",
                    model_name :"facebook/bart-large-mnli",
                    tokenizer_config : {},
                    use_gpu : true
                }
            },
            output_info: {
                data: {
                    concepts: [
                        {
                            id: CONCEPT_ID_1
                        },
                        {
                            id: CONCEPT_ID_2
                        }
                    ]
                }
            }
        }]


    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.error('Post models failed, status:', response.status);
            throw new Error("Post models failed, status: " + response.status.description);
        }
    }
);