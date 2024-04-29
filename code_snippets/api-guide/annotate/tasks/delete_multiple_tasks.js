//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and task IDs.
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to delete your own tasks
const TASK_ID_1 = "ccb05c3b73344a87bfa2ad18f04d793e";
const TASK_ID_2 = "584d8ef6fe184b0a91197c0590d50953";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteTasks(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    ids: [TASK_ID_1, TASK_ID_2],
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Delete tasks failed, status: " + response.status.description
      );
    }
  }
);
