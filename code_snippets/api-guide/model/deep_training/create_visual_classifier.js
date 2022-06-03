//index.js file

////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, model ID, and
// concept IDs. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to create your own visual classifier
const MODEL_ID = 'lawrence-1591638385';
const CONCEPT_ID_1 = 'ferrari23';
const CONCEPT_ID_2 = 'outdoors23';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostModels(
  {
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID
    },
    models: [
      {
        id: MODEL_ID,
        model_type_id: "visual-classifier",
        train_info: {
          params: {
            num_epoch: 2,
            template: "classification_cifar10_v1"
          }
        },
        output_info: {
          data: {
            concepts: [
              { id: CONCEPT_ID_1 },
              { id: CONCEPT_ID_2 }
            ]
          },
          output_config: {
            closed_environment: true
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
      throw new Error("Received status: " + response.status.description + "\n" + response.status.details);
    }
  }
);