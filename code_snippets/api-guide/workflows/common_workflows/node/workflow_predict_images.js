//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, workflow ID, and
// image URL. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "clarifai";
const APP_ID = "main";
// Change these to make your own predictions
const WORKFLOW_ID = "Face-Sentiment";
const IMAGE_URL = "https://samples.clarifai.com/celebrity.jpeg";
// Or, to use a local text file, assign the location variable
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
// const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostWorkflowResults({
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID,
        },
        workflow_id: WORKFLOW_ID,
        inputs: [{
            data: {
                image: {
                    url: IMAGE_URL,
                    // base64: imageBytes
                }
            }
        }],
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error(
                "Post workflow results failed, status: " + response.status.description
            );
        }

        // We'll get one WorkflowResult for each input we used above. Because of one input, we have here 
        // one WorkflowResult
        const results = response.results[0];

        // Each model we have in the workflow will produce one output.
        for (const output of results.outputs) {
            const model = output.model;

            console.log(`Predicted concepts for the model '${model.id}'`);

            for (const concept of output.data.regions) {
                for (const item of concept.data.concepts) {
                    console.log(`\t${item.name} ${item.value.toFixed(2)}`);
                }
            }
        }
        // Uncomment this line to print the raw output
        // console.log(results);
    }
);