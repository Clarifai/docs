//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details for
// performing task annotations. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to perform your own task annotations
const INPUT_ID = "62bb672ccbdd4e5da55b41209d1a0e9f";
const CONCEPT_ID_1 = "tree";
const CONCEPT_ID_2 = "water";
const TASK_ID = "d0f2fa2b61234d1cb6b66983ea021b5b";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostAnnotations(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    annotations: [
      {
        input_id: INPUT_ID,
        data: {
          concepts: [
            {
              id: CONCEPT_ID_1,
              value: 1,
            },
            {
              id: CONCEPT_ID_2,
              value: 0,
            },
          ],
        },
        annotation_info: {
          task_id: TASK_ID,
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
      throw new Error(
        "Post annotations failed, status: " + response.status.description
      );
    }
  }
);
