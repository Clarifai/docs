//index.js file

///////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication, app ID, and model type ID. 
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////////////////////

const USER_ID = "YOUR_USER_ID_HERE";
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = "YOUR_PAT_HERE";
const APP_ID = "YOUR_APP_ID_HERE";
// Change this to list the template types of your preferred model 
const MODEL_TYPE = "visual-classifier";

/////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
/////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.ListModelTypes(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        page: 1,
        per_page: 500
    },
    metadata,
    (err, response) => {
        if (err) {
            throw new Error(err);
        }

        if (response.status.code !== 10000) {
            throw new Error("Received status: " + response.status.description + "\n" + response.status.details);
        }

        response.model_types.forEach((modelType) => {
            if (modelType.id === MODEL_TYPE) {
                modelType.model_type_fields.forEach((modelTypeField) => {
                    if (modelTypeField.path.split('.').pop() === 'template') {
                        modelTypeField.model_type_enum_options.forEach((template) => {
                            console.log(template);
                        });
                    }
                });
            }
        });

    }
);