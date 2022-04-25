//index.js file

/////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and input ID
// Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////

USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE';
APP_ID = 'YOUR_APP_ID_HERE';
// Change this ID to whatever input you want its details
INPUT_ID = 'ff79664eefe94db1878f51931f9d6fd9';

////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.GetInput(
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
            throw new Error("Get input failed, status: " + response.status.description);
        }

        const input = response.input;
        console.log(JSON.stringify(input, null, 2));
    }
);
