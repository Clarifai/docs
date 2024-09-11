//index.js file

//////////////////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, user and app ID, workflow ID, and the video 
// we want as an input. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "YOUR_PAT_HERE";
const USER_ID = "YOUR_USER_ID_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change these to make your own predictions
const WORKFLOW_ID = "YOUR_WORKFLOW_ID_HERE";
const VIDEO_URL = "https://samples.clarifai.com/beer.mp4";
// Or, to use a local video file, assign the location variable
// const VIDEO_FILE_LOCATION = "YOUR_VIDEO_FILE_LOCATION_HERE"

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
// const videoBytes = fs.readFileSync(VIDEO_FILE_LOCATION);

stub.PostWorkflowResults({
    user_app_id: {
        "user_id": USER_ID,
        "app_id": APP_ID,
    },
    workflow_id: WORKFLOW_ID,
    inputs: [{
        data: {
            video: {
                url: VIDEO_URL,
                // base64: videoBytes
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

        // Uncomment this line to print the raw output
        console.log(results);
    }
);
