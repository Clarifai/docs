import { Input, Search, User } from "clarifai-nodejs";


const appId = "test_app"; // Placeholder for application ID

// Initialize a User object with your credentials
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

// Create an application within Clarifai with the specified ID and base workflow
// The 'Universal' workflow is a general-purpose workflow that can handle various types of data
await client.createApp({
  appId,
  baseWorkflow: "Universal",
});

// Initialize an Input object to manage input data
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Prepare an input protobuf message from the provided image URL
const inputProto = Input.getInputFromUrl({
  inputId: "dogTiff",
  imageUrl: "https://samples.clarifai.com/dog.tiff",
  labels: ["dog"],
  geoInfo: {
    longitude: -30.0,
    latitude: 40.0,
  },
});

// Upload the prepared input protobuf message to the clarifai application
input.uploadInputs({ inputs: [inputProto] });

// Initialize a search object for the created application with top-k results set to 2
const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  topK: 2,
  metric: "euclidean",
});

// Perform a search query with specified ranks and filters
const response = search.query({
  ranks: [{ imageUrl: "https://samples.clarifai.com/dog.tiff" }],
  filters: [{ concepts: [{ name: "dog", value: 1 }] }],
});

// Process the response to extract the URL of the first matching image
let hit;
for await (const r of response) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the matched image
console.log(hit);
