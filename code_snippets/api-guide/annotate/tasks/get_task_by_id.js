//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and task ID.
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change this to get a task by its ID
const TASK_ID = "21980d42ddc4483fa9e59e6678d6af71";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.GetTask(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    task_id: TASK_ID,
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Get tasks failed, status: " + response.status.description
      );
    }
    console.log(response);
  }
);
