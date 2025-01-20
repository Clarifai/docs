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
const { Timestamp } = require("google-protobuf/google/protobuf/timestamp_pb");

const stub = ClarifaiStub.grpc();

// This will be used by every Clarifai endpoint call
const metadata = new grpc.Metadata();
metadata.set("authorization", "Key " + PAT);

// Convert the ISO date strings to `Timestamp` objects
function isoDateToTimestamp(isoDate) {
  const date = new Date(isoDate);
  const timestamp = new Timestamp();
  timestamp.setSeconds(Math.floor(date.getTime() / 1000));
  timestamp.setNanos((date.getTime() % 1000) * 1e6);
  return timestamp;
}

// Create `timestamp_from` and `timestamp_to` as `google.protobuf.Timestamp` objects
const timestampFrom = isoDateToTimestamp("2024-05-01T00:00:00Z");
const timestampTo = isoDateToTimestamp("2024-05-31T23:59:59Z");

stub.PostAuditLogSearches(
  {
    user_app_id: {
      user_id: USER_ID,
    },
    query: {
      timestamp_from: timestampFrom,
      timestamp_to: timestampTo,
    },
    pagination: {
      page: 2,
      per_page: 20,
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
