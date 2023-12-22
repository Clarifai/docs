//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the model evaluation details.
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to get your model evaluation results
const MODEL_ID = "YOUR_MODEL_ID_HERE";
const MODEL_VERSION_ID = "YOUR_MODEL_VERSION_ID_HERE";
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

    model_id: MODEL_ID,
    model_version_id: MODEL_VERSION_ID,
    evaluation_id: EVALUATION_ID   
    
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
