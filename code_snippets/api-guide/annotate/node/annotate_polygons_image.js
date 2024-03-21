//index.js file

//////////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to annotate
// a polygon. Change these strings to run your own example.
/////////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the polygon you want to annotate
const INPUT_ID = "c9cbb1c90cf24bc98bfd2e529e744ca9";
const CONCEPT_ID_1 = "tree";
const CONCEPT_ID_2 = "water";
const CONCEPT_ID_3 = "bike";

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
            {                     // label a region in this image
                input_id: INPUT_ID,
                data: {
                    regions: [
                        {
                            region_info: {
                                polygon: {        // draw a polygon
                                    points: [
                                        {
                                            row: 0.30  // row location of the point, with a [0.0-1.0] range
                                        },
                                        {
                                            col: 0.50  // column location of the point, with a [0.0-1.0] range
                                        },
                                        {
                                            z: 0.50  // depth, if applicable, of the point
                                        }
                                    ]
                                }
                            },
                            // 1 means true, this concept is present
                            // 0 means false, this concept is not present
                            data: {
                                concepts: [
                                    { id: CONCEPT_ID_1, value: 1 },
                                    { id: CONCEPT_ID_2, value: 0 }
                                ]
                            },
                        }
                    ]
                }
                
            }, {                     // label another region in this image
                input_id: INPUT_ID,
                data: {
                    regions: [
                        {
                            region_info: {
                                polygon: {        // draw another polygon
                                    points: [
                                        {
                                            row: 0.60
                                        },
                                        {
                                            col: 0.80
                                        },
                                        {
                                            z: 0.50
                                        }

                                    ]
                                }
                            },
                            // 1 means true, this concept is present
                            // 0 means false, this concept is not present
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