//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and how we want to 
// annotate the image. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these based on the image you want to annotate with multiple concepts
const INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";
const CONCEPT_IDS_LIST = ['one', 'two', 'three', 'four', 'five', 'six'];

// We use a map function to iterate through the list of concepts
const myFunction = () => {
    return CONCEPT_IDS_LIST.map((concept)=>({"id":concept,"value":1}));
 }

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
            {
                input_id: INPUT_ID,
                // 1 means true, this concept is present
                // 0 means false, this concept is not present
                data: {
                    concepts: myFunction()
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