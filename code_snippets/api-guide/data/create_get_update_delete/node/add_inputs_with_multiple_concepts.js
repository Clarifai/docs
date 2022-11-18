//index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and the input to add
// with concepts. Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';
// Change these to whatever input and concepts you want to add
const IMAGE_URL = 'https://samples.clarifai.com/puppy.jpeg';
const CONCEPT_IDS_LIST = ['one', 'two', 'three', 'four', 'five', 'six'];

// We use a map function to iterate through the list of concepts
const myFunction = () => {
    return CONCEPT_IDS_LIST.map((concept) => ({"id":concept,"value":1}));
 }

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        inputs: [{
            data: {
                image: { url: IMAGE_URL, allow_duplicate_url: true },
                concepts: myFunction()
            }
        }]
    },
    metadata,    
    (err, response) => {
        if (err) {
            throw new Error(err);
        }        
        if (response.status.code !== 10000) {
            throw new Error("Post inputs failed, status: " + response.status.description);
        }
    }    
);