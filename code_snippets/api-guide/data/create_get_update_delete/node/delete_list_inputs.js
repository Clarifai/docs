//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the IDs of the 
// inputs we want to delete. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the inputs you want to delete
const INPUT_ID_1 = 'd4319bb362d9487e812970a3ed9ba028';
const INPUT_ID_2 = 'fc449e98ce3847c788954e3fec871d02';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        ids: [INPUT_ID_1, INPUT_ID_2]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete inputs failed, status: " + response.status.description);
        }
    }
);