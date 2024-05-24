import { User, Input, Search } from "clarifai-nodejs"; // Importing the User class from the Clarifai client library for user-related functionalities


const appId = "test_app"; // Placeholder for application ID

// Initialize the User object with user ID and PAT
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

// Create a new application with specified ID and base workflow
await client.createApp({ appId, baseWorkflow: "Universal" });

// List of image URLs to be uploaded
const urls = [
  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
  "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
  "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg",
];

// Initialize Inputs object to manage input data
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Upload images from URLs to the application
for (let i = 0; i < urls.length; i++) {
  await input.uploadFromUrl({ inputId: `input${i}`, imageUrl: urls[i] });
}

// Initialize the search functionality for the application with topK parameter set to 1
const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  topK: 1,
  metric: "euclidean",
});

// Perform a search query with a specified text rank
const response = search.query({
  ranks: [{ textRaw: "Red pineapples on the beach." }],
});

// Extract the URL of the first hit from the search response
let hit;
for await (const r of response) {
  hit = r?.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the hit image
console.log(hit);
