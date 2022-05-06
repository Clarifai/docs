//index.js file

///////////////////////////////////////////////////////////////////////////
//  In this section, we set the user authentication, app ID, input IDs, 
// and annotation IDs. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the annotations you want to bulk delete 
const INPUT_ID_1 = 'c99f1b557d1d43d1916b46f8ce4a0487';
const INPUT_ID_2 = '7c5f489bcafe43fe8a71c68091cb64ce';
const ANNOTATION_ID_1 = '9bcbdbc381c34a6da64bb3d635e82833';
const ANNOTATION_ID_2 = 'e5f8310fbd824354b657050132311e64';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteAnnotations(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        input_ids: [INPUT_ID_1, INPUT_ID_2],
        annotation_ids: [ANNOTATION_ID_1, ANNOTATION_ID_2]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete annotations failed, status: " + response.status.description);
        }
    }
);