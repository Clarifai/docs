//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and details for
// creating a task. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to create your own task with partitioned worker strategy
const CONCEPT_ID = "water";
const USER_ID_1 = "USER_ID_1_HERE";
const USER_ID_2 = "USER_ID_2_HERE";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const params = {
    [USER_ID_1]: 90,
    [USER_ID_2]: 10
};

stub.PostTasks({
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        tasks: [
            {
              type: "CONCEPTS_CLASSIFICATION",
              name: "Annotate " + CONCEPT_ID,
              worker: {
                strategy: "PARTITIONED",
                users: [{ id: USER_ID_1 }, { id: USER_ID_2 }],
                partitioned_strategy_info: {
                  type: "WEIGHTED",
                  workers_per_input: 1,
                  weights: params
                },
              },
              concepts: [
                {
                  concept: {
                    id: CONCEPT_ID
                  },
                },
              ],
              input_source: {
                type: "ALL_INPUTS"
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
            console.error('Post tasks failed, status:', response.status);
            throw new Error("Post tasks failed, status: " + response.status.description);
        }
    }
);
