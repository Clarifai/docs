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

// URL of the image to be uploaded for search
const url = "https://samples.clarifai.com/XiJinping.jpg";

// Initialize an Input object to manage input data
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Upload the image from the specified URL with an input ID of 'geo'
await input.uploadFromUrl({ inputId: "geo", imageUrl: url });

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

// Query the application's search with a filter to retrieve inputs with a status code of 30000
const response = search.query({ filters: [{ inputStatusCode: 30000 }] });

// Convert the response to a list and retrieve the URL of the first hit input
let hit;
for await (const r of response) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the hit input
console.log(hit);
