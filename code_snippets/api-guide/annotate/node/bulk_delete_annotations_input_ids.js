//index.js file

////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and input IDs. 
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the annotations you want to bulk delete 
const INPUT_ID_1 = 'b5585a6869d34c04bbcaf631e7cd5816';
const INPUT_ID_2 = 'a8748df4938447e4844b2f505c8eaaef';

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
        input_ids: [INPUT_ID_1, INPUT_ID_2]
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