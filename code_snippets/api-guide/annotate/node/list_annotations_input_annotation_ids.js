//index.js file

///////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, input IDs, and
// annotation IDs. Change these strings to run your own example.
///////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to list your own annotations
const INPUT_ID_1 = 'c9cbb1c90cf24bc98bfd2e529e744ca9';
const INPUT_ID_2 = '1be923b967f148dbb4e588cf4a723da1';
const ANNOTATION_ID_1 = '55ccf4250ba34592ac48fd2b839652fe';
const ANNOTATION_ID_2 = '5a6dafa3864a4d768a4c32e514dd8da1';

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.ListAnnotations(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        input_ids: [INPUT_ID_1, INPUT_ID_2],
        ids: [ANNOTATION_ID_1, ANNOTATION_ID_2],
        page: 1,
        per_page: 10
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("List annotations failed, status: " + response.status.description);
        }

        for (const annotation of response.annotations) {
            console.log(JSON.stringify(annotation, null, 2));
        }
    }
);