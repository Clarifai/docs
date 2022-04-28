//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app and model IDs, and the URL
// of the video we want as an input. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
const MODEL_ID = 'YOUR_MODEL_ID_HERE';
// Change this to whatever video URL you want to process
const VIDEO_URL = 'https://samples.clarifai.com/beer.mp4';
// This is optional.You can specify a model version or the empty string for the default
const MODEL_VERSION_ID = '';


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
        model_id: MODEL_ID,
        version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version.
        inputs: [
            { data: { video: { url: VIDEO_URL, allow_duplicate_url: true } } }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        // A separate prediction is available for each "frame".
        for (const frame of output.data.frames) {
            console.log("Predicted concepts on frame " + frame.frame_info.time + ":");
            for (const concept of frame.data.concepts) {
                console.log("\t" + concept.name + " " + concept.value);
            }
        }
    }

);