//index.js file

/////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and images to 
// add to the index. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to add your own images to the search index
const IMAGE_FILE_LOCATION = 'YOUR_IMAGE_FILE_LOCATION';
const IMAGE_URL_1 = 'https://samples.clarifai.com/metro-north.jpg';
const IMAGE_URL_2 = 'https://samples.clarifai.com/wedding.jpg';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostInputs(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        inputs: [
            {
                data: { image: { url: IMAGE_URL_1, allow_duplicate_url: true } }
            },
            {
                data: { image: { url: IMAGE_URL_2, allow_duplicate_url: true } }
            },
            {
                data: { image: { base64: imageBytes } }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            for (const input of response.inputs) {
                console.log("Input " + input.id + " status: ");
                console.log(JSON.stringify(input.status, null, 2) + "\n");
            }

            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }
);