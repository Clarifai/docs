//index.js file

//////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input ID, annotation ID, 
// concept ID, and region ID. Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the annotation you want to update
const INPUT_ID = 'c9cbb1c90cf24bc98bfd2e529e744ca9';
const ANNOTATION_ID = '08d3b9b81432477fb5522d3fb1d1a6f4';
const CONCEPT_ID = 'apple';
const REGION_ID = '361d6a9253be9152968012660258a4bf';

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
        action: "merge",  // Supported actions: overwrite, merge, remove.
        annotations: [
            {
                input_id: INPUT_ID,
                id: ANNOTATION_ID,
                data: {
                    regions: [
                        {
                            id: REGION_ID, // this should be the region id of this annotation before patch
                            // 1 means true, this concept is present.
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