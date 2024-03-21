//index.js file

///////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the concepts we  
// we want to search by. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to search by your own concepts
const CONCEPT_ID_1 = 'cat';
const CONCEPT_ID_2 = 'dog';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// Here we search for images which we labeled with "cat" and for which the General prediction model does not find
// a "dog" concept.
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
                                            id: CONCEPT_ID_1,  // You could search by concept Name as well
                                            value: 1  // Value of 0 will search for images that don't have the concept
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                    ranks: [
                        {
                            annotation: {
                                data: {
                                    concepts: [  // You can search by multiple concepts
                                        {
                                            id: CONCEPT_ID_2,  // You could search by concept Name as well
                                            value: 0  // Value of 0 will search for images that don't have the concept
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
        console.log(response.status)

        if (response.status.code !== 10000) {
            throw new Error("Post annotations searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for annotation: " + hit.annotation.id + " of input: ", hit.input.id);
        }
    }
);