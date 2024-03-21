//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and IDs of the collectors
// we want to delete. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to delete your own collectors
const COLLECTOR_ID_1 = 'YOUR_COLLECTOR_ID_HERE';
const COLLECTOR_ID_2 = 'YOUR_COLLECTOR_ID_HERE';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.DeleteCollectors(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        ids: [COLLECTOR_ID_1, COLLECTOR_ID_2],
        //delete_all: true //Uncomment to delete all your collectors
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response.status);
            throw new Error("Delete collectors failed, status: " + response.status.description);
        }

        console.log(response.collector);
    }
);