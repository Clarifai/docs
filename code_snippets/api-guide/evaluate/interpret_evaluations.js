//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the model evaluation ID.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change this to get your model evaluation results
const EVALUATION_ID = "YOUR_EVALUATION_ID_HERE";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.GetEvaluation(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },

    evaluation_id: EVALUATION_ID, // returned after starting an evaluation
    fields: {
      confusion_matrix: true,
      cooccurrence_matrix: true,
      label_counts: true,
      binary_metrics: true,
      test_set: true,
      metrics_by_area: true,
      metrics_by_class: true
    }
  
  },

  metadata,

  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      throw new Error("Get model metrics failed, status: " + response.status.description);
    }  

    console.log(response);

  }

);
