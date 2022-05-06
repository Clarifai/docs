//index.js file

//////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the images and 
// concepts we want to add. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to add your own images with concepts
const IMAGE_URL_1 = 'https://samples.clarifai.com/puppy.jpeg';
const IMAGE_URL_2 = 'https://samples.clarifai.com/wedding.jpg';
const CONCEPT_ID_1 = 'charlie';
const CONCEPT_ID_2 = 'our_wedding';
const CONCEPT_ID_3 = 'our_wedding';
const CONCEPT_ID_4 = 'charlie';
const CONCEPT_ID_5 = 'cat';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

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
                data: {
                    image: { url: IMAGE_URL_1, allow_duplicate_url: true },
                    concepts: [{ id: CONCEPT_ID_1, value: 1 }, { id: CONCEPT_ID_2, value: 0 }]
                }
            },
            {
                data: {
                    image: { url: IMAGE_URL_2, allow_duplicate_url: true },
                    concepts: [{ id: CONCEPT_ID_3, value: 1 }, { id: CONCEPT_ID_4, value: 0 }, { id: CONCEPT_ID_5, value: 0 }]
                }
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