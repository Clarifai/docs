//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, annotation ID,
// and concept ID. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the annotation you want to update 
const INPUT_ID = '3232a6fd32544c6a902c2cb0103034ff';
const ANNOTATION_ID = '3377446a88714ba78654f2cf811c2211';
const CONCEPT_ID = 'bike';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PatchAnnotations(
    {

        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        action: "overwrite",
        annotations: [
            {
                input_id: INPUT_ID,
                id: ANNOTATION_ID,
                data: {
                    regions: [
                        {
                            region_info: {
                                bounding_box: {        // move bounding box to a new coordiates
                                    top_row: 0.5,
                                    left_col: 0.5,
                                    bottom_row: 0.8,
                                    right_col: 0.8
                                }
                            },
                            // 1 means true, this concept is present.
                            // 0 means false, this concept is not present.
                            data: {
                                concepts: [
                                    { id: CONCEPT_ID, value: 1 },
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
            throw new Error("Patch annotations failed, status: " + response.status.description);
        }
    }
);