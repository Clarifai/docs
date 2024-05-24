import { Input, Search, User } from "clarifai-nodejs";


const appId = "test_app"; // Placeholder for application ID

// Initialize a User object with your credentials
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

// Create an application with the specified app ID and base workflow
await client.createApp({ appId, baseWorkflow: "Universal" });

// Initialize an Input object to manage input data
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Define metadata for the image
const metadata = {
  filname: "XiJinping.jpg",
  split: "train",
};

// Specify the URL of the image to be uploaded
const imageUrl = "https://samples.clarifai.com/XiJinping.jpg";

// Upload the image from the URL with associated metadata
await input.uploadFromUrl({
  inputId: "metadata",
  imageUrl,
  metadata,
});

// Define metadata filter for the search query
const metadataFilter = { filename: "XiJinping.jpg" };

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

// Execute the search query with the specified metadata filter
const response = search.query({
  filters: [{ metadata: metadataFilter }],
});

let hit;
// Retrieve and process the search results
for await (const r of response) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  console.log(hit);
  break;
}

// Print the URL of the found image
console.log(hit);
