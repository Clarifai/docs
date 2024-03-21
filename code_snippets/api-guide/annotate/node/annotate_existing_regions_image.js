//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to annotate
// existing regions in an image. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the existing regions you want to annotate
const INPUT_ID = "c9cbb1c90cf24bc98bfd2e529e744ca9";
const CONCEPT_ID_1 = "tree";
const CONCEPT_ID_2 = "water";
const CONCEPT_ID_3 = "bike";
const REGION_ID_1 = "361d6a9253be9152968012660258a4bf";
const REGION_ID_2 = "dcfa961b753f3b197d0bf7b242718ab1";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostAnnotations(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        annotations: [
            {                // label a region in this image
                input_id: INPUT_ID,
                data: {
                    regions: [
                        {
                            id: REGION_ID_1, // this should be a region id  returned from list annotations call
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    { id: CONCEPT_ID_1, value: 1 },
                                    { id: CONCEPT_ID_2, value: 0 }
                                ]
                            },
                        }
                    ]
                }
                
            }, {                // label another region in this image
                input_id: INPUT_ID,
                data: {
                    regions: [
                        {
                            id: REGION_ID_2, // this should be a region id  returned from list annotations call
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    { id: CONCEPT_ID_3, value: 1 },
                                ]
                            },
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
            throw new Error("Post annotations failed, status: " + response.status.description);
        }
    }
);