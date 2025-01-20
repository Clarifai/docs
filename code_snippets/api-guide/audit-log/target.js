// index.js file

////////////////////////////////////////////////////////////////////////////////////
// In this section, we set the user authentication and user ID. 
// Change these strings to run your own example.
////////////////////////////////////////////////////////////////////////////////////

// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = 'YOUR_PAT_HERE';
const USER_ID = 'YOUR_USER_ID_HERE';

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////

const { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

stub.PostAuditLogSearches(
  {
    user_app_id: {
      user_id: USER_ID,
    },
    query: {
      targets: [
        {
          user: {
            id: "USER_ID_HERE",
          },
        },
      ],
    },
  },
  metadata,
  (err, response) => {
    if (err) {
      throw new Error(err);
    }

    if (response.status.code !== 10000) {
      console.log(response.status);
      throw new Error(
        "Post audit log searches failed, status: " + response.status.description
      );
    }

    console.log(response);
  }
);
