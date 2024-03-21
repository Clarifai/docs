//index.js file

///////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the URL
// of the image we want as an input. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "salesforce";
const APP_ID = "blip";
// Change these to whatever model and image URL you want to use
const MODEL_ID = "general-english-image-caption-blip";
const MODEL_VERSION_ID = "cdb690f13e62470ea6723642044f95e4";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
// To use a local file, assign the location variable
// const IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE"

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// To use a local text file, uncomment the following lines
// const fs = require("fs");
// const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostModelOutputs({
    user_app_id: {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    model_id: MODEL_ID,
    version_id: MODEL_VERSION_ID, // This is optional. Defaults to the latest model version
    inputs: [{
        data: {
            image: {
                url: IMAGE_URL,
                // base64: imageBytes,
                allow_duplicate_url: true
            }
        }
    }]
},
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post model outputs failed, status: " + response.status.description);
        }

        // Since we have one input, one output will exist here
        const output = response.outputs[0];

        console.log("Image caption::");
        console.log(output.data.text.raw);

    }

);
