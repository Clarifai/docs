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

// URLs of images to be uploaded
const urls = [
  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
  "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
  "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg",
];

// Initialize an Input object to manage input data
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Upload each image from the provided URLs
for (let i = 0; i < urls.length; i++) {
  await input.uploadFromUrl({ inputId: `input${i}`, imageUrl: urls[i] });
}

const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  topK: 2,
  metric: "euclidean",
});

// Perform a search query to find images (filters for images only)
const res = search.query({ filters: [{ inputTypes: ["image"] }] });

// Retrieve the URL of the first image from the search results
let hit;
for await (const r of res) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the found image
console.log(hit);
