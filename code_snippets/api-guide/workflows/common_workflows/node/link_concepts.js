//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the details of the
// concepts we want to link. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to link your own concepts
// Run this code three times; once for each concept you want to link
const MODEL_CONCEPT_ID = 'YOUR_MODEL_CONCEPT_ID';
const GENERAL_MODEL_CONCEPT_ID = 'GENERAL_MODEL_CONCEPT_ID';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostConceptRelations(
  {
      user_app_id: {
        user_id: USER_ID,
        app_id: APP_ID
      },
      concept_id: MODEL_CONCEPT_ID,
      concept_relations: [
          {
              object_concept: {
                  id: GENERAL_MODEL_CONCEPT_ID,
                  app_id: "main"
              },
              predicate: "synonym"
          }
      ]
  },
  metadata,
  (err, response) => {
      if (err) {
          throw new Error(err);
      }

      if (response.status.code !== 10000) {
          throw new Error("Post concept relations failed, status: " + response.status.description);
      }
  }
);
