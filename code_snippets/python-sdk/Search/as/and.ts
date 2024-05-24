import { Input, Search, User } from "clarifai-nodejs";


const appId = "test_app"; // Placeholder for application ID

const dogImgUrl = "https://samples.clarifai.com/dog.tiff";

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

// Define metadata for the image
const metadata = { Breed: "Saint Bernard" };

// Get input from URL and upload it
const inputProto = Input.getInputFromUrl({
  inputId: "dogTiff",
  imageUrl: dogImgUrl,
  labels: ["dog"],
  geoInfo: { longitude: -30.0, latitude: 40.0 }, // longitude, latitude
  metadata,
});
await input.uploadInputs({ inputs: [inputProto] });

// Define andFilter
const andFilter = [
  {
    // AND
    concepts: [
      {
        name: "dog",
        value: 1,
      },
    ],
  },
  {
    concepts: [
      {
        name: "deer",
        value: 1,
      },
    ],
  },
];

// Perform search with OR filter
const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  topK: 2,
  metric: "euclidean",
});
const res = search.query({
  ranks: [{ imageUrl: "https://samples.clarifai.com/dog.tiff" }],
  filters: andFilter, // Filter for images only
});

let hit;
// Process search results
for await (const r of res) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Display the image
console.log(hit);
