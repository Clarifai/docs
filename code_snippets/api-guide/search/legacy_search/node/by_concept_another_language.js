//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, concept name, and 
// language ID. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to what you want to search by
const CONCEPT_NAME = '犬';
const LANGUAGE_ID = 'ja'; // Japanese

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostSearches(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        query: {
            ands: [
                {
                    output: {  // Setting Output indicates we search for images that have the concept(s)
                        // which were predicted by the General model
                        data: {
                            concepts: [  // You can search by multiple concepts
                                {
                                    name: CONCEPT_NAME,  // You could search by concept ID as well
                                    language: LANGUAGE_ID, 
                                    value: 1  // Value of 0 will search for images that don't have the concept
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
