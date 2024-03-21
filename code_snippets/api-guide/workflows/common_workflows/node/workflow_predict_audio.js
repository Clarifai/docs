
//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, workflow ID, and
// audio URL. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const USER_ID = "clarifai";
const APP_ID = "main";
// Change these to make your own predictions
const WORKFLOW_ID = "asr-sentiment";
const AUDIO_URL = "https://samples.clarifai.com/negative_sentence_1.wav";
// Or, to use a local audio file, assign the location variable
// const AUDIO_FILE_LOCATION = "YOUR_AUDIO_FILE_LOCATION_HERE";

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
// const audioBytes = fs.readFileSync(AUDIO_FILE_LOCATION);

stub.PostWorkflowResults(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID,
        },
        workflow_id: WORKFLOW_ID,
        inputs: [{
            data: {
                audio: {
                    url: AUDIO_URL,
                    // base64: audioBytes
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

        // Each model we have in the workflow will produce its output   
        for (const output of results.outputs) {
            const model = output.model;
            console.log("Output for the model: `" + model.id + "`");
            for (const concept of output.data.concepts) {
                console.log("\t" + concept.name + " " + concept.value);
            }
            if (output.data.text) {
                console.log(output.data.text.raw);
            }
        }
    }
);
