//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the concept we  
// we want to filter by. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change this to filter by your own concept
const CONCEPT_ID = 'people';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostAnnotationsSearches(
    {

        user_app_id: {  
            user_id: USER_ID,          
            app_id: APP_ID
        },
        searches: [
            {
                query: {
                    filters: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts
                                        {
                                            id: CONCEPT_ID,  // You could search by concept Name as well
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);