//index.js file

/////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication and app ID.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteWorkflows(
  {
    user_app_id: {
      "user_id": USER_ID,
      "app_id": APP_ID,
    },
    delete_all: true
    //ids: ['workflow_id_1', 'workflow_id_2'] // Specify a list of workflow IDs to be deleted
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error(
        "Delete workflows failed, status: " + response.status.description
      );
    }
  }
);
