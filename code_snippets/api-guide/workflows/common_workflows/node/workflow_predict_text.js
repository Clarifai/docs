//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, workflow ID, and the text 
// we want as an input. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const USER_ID = "clarifai";
const APP_ID = "main";
// Change these to make your own predictions
const WORKFLOW_ID = "Language-Understanding";
const RAW_TEXT = "This is a test text for testing";
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

stub.PostWorkflowResults({
    user_app_id: {
        "user_id": USER_ID,
        "app_id": APP_ID,
    },
    workflow_id: WORKFLOW_ID,
    inputs: [{
        data: {
            text: {
                raw: RAW_TEXT
                // url: TEXT_FILE_URL,
                // raw: fileBytes
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
            console.log(output.data);

        }
        // Uncomment this line to print the full Response JSON
        // console.log(results);
    }
);