//index.js file

////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the concepts we  
// we want to rank by. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change this to a Clarifai/main concept
const CONCEPT_NAME_1 = 'ai_fvlBqXZR';
// Change this to your own custom concept
const CONCEPT_NAME_2 = 'people';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// Here we search for images which we labeled with "ai_fvlBqXZR" and for which the General prediction model does not find
// a "people" concept
stub.PostSearches(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        query: {
            ands: [
                {
                    input: {  // Setting Input indicates we search for images that have the concept(s)
                        // which we added to the input manually
                        data: {
                            concepts: [
                                {
                                    name: CONCEPT_NAME_1,
                                    value: 1
                                }
                            ]
                        }
                    }
                },
                {
                    output: {  // Setting Output indicates we search for images that have the concept(s)
                        // which were predicted by the General model
                        data: {
                            concepts: [
                                {
                                    name: CONCEPT_NAME_2,
                                    value: 0
                                }
                            ]
                        }
                    }
                }
            ]
        }
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post searches failed, status: " + response.status.description);
        }

        console.log("Found inputs:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for " + hit.input.id);
        }
    }
);
