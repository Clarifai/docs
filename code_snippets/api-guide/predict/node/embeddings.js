//index.js file

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, model details, and the text we want
// to provide as an input. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "cohere";
const APP_ID = "embed";
// Change these to whatever model and text you want to use
const MODEL_ID = "cohere-embed-english-v3_0";
const MODEL_VERSION_ID = "e2dd848faf454fbda85c26cf89c4926e";
const RAW_TEXT = "Give me an exotic yet tasty recipe for some noodle dish";
// To use a hosted text file, assign the URL variable
// const TEXT_FILE_URL = "https://samples.clarifai.com/negative_sentence_12.txt"
// Or, to use a local text file, assign the location variable
// TEXT_FILE_LOCATION = "YOUR_TEXT_FILE_LOCATION_HERE"

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
                        "raw": RAW_TEXT
                        // url: TEXT_FILE_URL
                        // raw: fileBytes
                    }
                }
            }
        ],
        "model": {
            "model_version": {
                "output_info": {
                    "params": {
                        "input_type": "search_query"   
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
        const output = response.outputs[0].data.embeddings;

        console.log(output);

    }
);