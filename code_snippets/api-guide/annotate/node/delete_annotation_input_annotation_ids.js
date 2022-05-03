//index.js file

///////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, 
// and annotation ID. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the annotation you want to delete 
const INPUT_ID = 'c99f1b557d1d43d1916b46f8ce4a0487';
const ANNOTATION_ID = 'b65d2a9106ba448382a0cee540f7c582';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteAnnotation(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        input_id: INPUT_ID,
        annotation_id: ANNOTATION_ID
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete annotation failed, status: " + response.status.description);
        }
    }
);