//index.js file

/////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and image
// file location. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change this to the image file location you want to search by
const IMAGE_FILE_LOCATION = 'YOUR_IMAGE_FILE_LOCATION';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

const fs = require("fs");
const imageBytes = fs.readFileSync(IMAGE_FILE_LOCATION);

stub.PostInputsSearches(
    {
        user_app_id: {
            user_id: USER_ID,
            app_id: APP_ID
        },
        searches: [
            {
                query: {
                    ranks: [
                        {
                            input: {
                                data: {
                                    image: {
                                        base64: imageBytes
                                    }
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
            throw new Error("Post inputs searches failed, status: " + response.status.description);
        }

        console.log("Search result:");
        for (const hit of response.hits) {
            console.log("\tScore " + hit.score + " for input: " + hit.input.id);
        }
    }
);