//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and input details.
// Change these values to run your own example.
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "openai";
const APP_ID = "chat-completion";
// Change these to whatever model and inputs you want to use
const MODEL_ID = "openai-gpt-4-vision";
const MODEL_VERSION_ID = "266df29bc09843e0aee9b7bf723c03c2";
const RAW_TEXT = "Write a caption for the image";
// To use a hosted text file, assign the URL variable
// const TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt";
// Or, to use a local text file, assign the location variable
// TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE";
const IMAGE_URL = "https://samples.clarifai.com/metro-north.jpg";
// To use a local file, assign the location variable;
// const IMAGE_FILE_LOCATION = "YOUR_IMAGE_FILE_LOCATION_HERE";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// To use a local text file, uncomment the following lines
// const fs = require("fs");
// const fileBytes = fs.readFileSync(TEXT_FILE_LOCATION);

// To use a local image file, uncomment the following lines
// const fs = require("fs");
// const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostModelOutputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        model_id: MODEL_ID,
        version_id: MODEL_VERSION_ID,  // This is optional. Defaults to the latest model version
        inputs: [
            {
                "data": {
                    "text": {
                        "raw": RAW_TEXT,
                        // url: TEXT_FILE_URL,
                        // raw: fileBytes
                    },
                    "image": {
                        "url": IMAGE_URL,
                        // base64: imageBytes                      
                    }
                }
            }
        ],
        model: {
            "model_version": {
                "output_info": {
                    "params": {
                        "temperature": 0.5,
                        "max_tokens": 2048,
                        "top_p": 0.95
                        // "api_key": "ADD_THIRD_PARTY_KEY_HERE"
                    }
                }
            }
        }
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post models failed, status: " + response.status.description);
        }
        // Since we have one input, one output will exist here.
        const output = response.outputs[0];

        console.log(output.data.text.raw);
    }
);
