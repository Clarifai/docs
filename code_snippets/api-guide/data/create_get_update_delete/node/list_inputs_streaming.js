//index.js file

//////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication and app ID. 
// Change these strings to run your own example.
//////////////////////////////////////////////////////////////////////

const USER_ID = 'YOUR_USER_ID_HERE';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = 'YOUR_PAT_HERE';
const APP_ID = 'YOUR_APP_ID_HERE';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.StreamInputs(
    {
        user_app_id: {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        per_page: 10
    },
    metadata,
    (err, firstResponse) => {
        if (err) {
            done(err);
            return;
        }

        if (firstResponse.status.code !== 10000) {
            done(new Error("Received status: " + firstResponse.status.description + "\n" + firstResponse.status.details));
            return;
        }

        console.log("First response (starting from the first input):");
        for (const input of firstResponse.inputs) {
            console.log("\t" + input.id);
        }

        const lastId = firstResponse.inputs[firstResponse.inputs.length - 1].id;
        stub.StreamInputs(
            {
                last_id: lastId,
                per_page: 10
            },
            metadata,
            (err, secondResponse) => {
                if (err) {
                    done(err);
                    return;
                }

                if (secondResponse.status.code !== 10000) {
                    done(new Error("Received status: " + secondResponse.status.description + "\n" + secondResponse.status.details));
                    return;
                }

                console.log("Second response (first input is the one following input ID " + lastId + ")");
                for (const input of secondResponse.inputs) {
                    console.log("\t" + input.id);
                }

                done();
            }
        );
    }
);