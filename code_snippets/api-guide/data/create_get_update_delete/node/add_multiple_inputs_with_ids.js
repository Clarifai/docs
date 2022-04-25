//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the URLs and IDs 
// of the images we want as inputs. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
PAT = 'YOUR_PAT_HERE';
APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever inputs you want to add
IMAGE_URL_1 = 'https://samples.clarifai.com/metro-north.jpg';
IMAGE_URL_2 = 'https://samples.clarifai.com/puppy.jpeg';
INPUT_ID_1 = 'train1';
INPUT_ID_2 = 'puppy1';

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

        inputs: [
            {
                id: INPUT_ID_1,
                data: {image: {url: IMAGE_URL_1, allow_duplicate_url: true}}
            },
            {
                id: INPUT_ID_2,
                data: {image: {url: IMAGE_URL_2, allow_duplicate_url: true}}
            },
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