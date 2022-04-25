//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the input and custom
// metadata we want to add. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////

USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE';
APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever input and custom metadata you want to add
IMAGE_URL = 'https://samples.clarifai.com/puppy.jpeg';
CUSTOM_METADATA = {id: "id001", type: "animal", size: 100};

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
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
        inputs: [{data: {
            image: {url: IMAGE_URL, allow_duplicate_url: true},
            metadata: CUSTOM_METADATA
        }}]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);