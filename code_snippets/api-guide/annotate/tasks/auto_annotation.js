//index.js file

/////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and auto-annotation details.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own auto-annotation task
const MODEL_ID = "MODEL_ID_HERE";
const MODEL_VERSION_ID = "MODEL_VERSION_ID_HERE";
const CONCEPT_ID = "CONCEPT_ID_HERE";
const DATASET_ID = "DATASET_ID_HERE";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostTasks(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID
    },
    tasks: [
      {
        type: "TYPE_NOT_SET",
        name: "Auto-Annotate " + CONCEPT_ID,
        worker: {
          strategy: "FULL",
          workers: [
            {
              model: {
                id: MODEL_ID,
                model_version: {
                  id: MODEL_VERSION_ID
                },
              },
            },
          ],
        },
        concepts: [
          {
            concept: {
              id: CONCEPT_ID
            },
            auto_annotation_config: {
              annotation_data_types: 1,
              threshold_range: {
                is_lower_inclusive: true,
                is_upper_inclusive: true,
                lower: 0.7,
                upper: 0.999
              },
              status_code: 24150
            },
          },
        ],
        input_source: {
          type: "DATASET",
          id: DATASET_ID
        },
        sample_ms: 1000,
        review: {
          strategy: "NONE"
        },
      },
    ],
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      console.error("Post tasks failed, status:", response.status);
      throw new Error("Post tasks failed, status: " + response.status.description);
    }
  }
);
