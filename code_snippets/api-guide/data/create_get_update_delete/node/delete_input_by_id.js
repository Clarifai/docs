//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the ID of the 
// input we want to delete. Change these strings to run your own example
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change this based on the input you want to delete
const INPUT_ID = 'ff79664eefe94db1878f51931f9d6fd9';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call+
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteInput(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        input_id: INPUT_ID
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Delete input failed, status: " + response.status.description);
        }
    }
);