//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the location
// of the text we want as a prompt. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'meta';    
const APP_ID = 'Llama-2';
// Change these to whatever model and text you want to use
const MODEL_ID = 'llama2-7b-chat';
const MODEL_VERSION_ID = 'e52af5d6bc22445aa7a6761f327f7129';   
const TEXT_FILE_LOCATION = 'YOUR_TEXT_FILE_LOCATION_HERE';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const fileBytes = fs.readFileSync(TEXT_FILE_LOCATION);

stub.PostModelOutputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID,
        version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version.
        inputs: [
            { data: { text: { raw: fileBytes } } }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            console.log(response)
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log("Completion:\n");
        console.log(output.data.text.raw);
    }

);
