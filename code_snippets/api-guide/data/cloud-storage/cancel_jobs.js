//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the inputs extraction job ID.
// Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change this ID to whatever inputs you want to cancel their upload process
const INPUTS_EXTRACTION_JOB_ID = "2a6f1f69cced42029986a72009e7d4da";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();

metadata.set("authorization", "Key " + PAT);

stub.CancelInputsExtractionJobs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        ids: [INPUTS_EXTRACTION_JOB_ID]

    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response.status);
            throw new Error("List inputs failed, status: " + response.status.description);
        }

        console.log(response);
    }

);
