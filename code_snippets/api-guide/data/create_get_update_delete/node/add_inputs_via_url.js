//index.js file

////////////////////////////////////////////////////////////////////////////////////
//In this section, we set the user authentication, app ID, and input URL. 
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE';
APP_ID = 'YOUR_APP_ID_HERE';
// Change this to whatever image input you want to add
IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

///////////////////////////////////////////////////////////////////////////////////
//YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        inputs: [
            { data: { image: { url: IMAGE_URL, allow_duplicate_url: true } } }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response.status);
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }

);