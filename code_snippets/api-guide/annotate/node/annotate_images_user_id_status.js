//index.js file

////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, 
// and another user ID. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to post your own annotations
const INPUT_ID = 'c9cbb1c90cf24bc98bfd2e529e744ca9';
const ANOTHER_USER_ID = 'ANOTHER_USER_ID_HERE';

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
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        annotations: [
            {
                input_id: INPUT_ID,
                user_id: ANOTHER_USER_ID,  // If empty, it is the user who posts this annotation
                status: {
                    code: 24151    // annotation pending status. By default success.
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
            throw new Error("Post annotations failed, status: " + response.status.description);
        }
    }
);