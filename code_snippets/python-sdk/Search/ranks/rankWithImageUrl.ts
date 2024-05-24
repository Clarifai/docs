import { User, Input, Search } from "clarifai-nodejs";

const appId = "test_app"; // Placeholder for application ID

// Initialize a User object with the provided user ID and PAT
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

// Create an application with the provided app ID, using the Universal workflow
await client.createApp({ appId, baseWorkflow: "Universal" });

// URLs of the images to be uploaded and searched
const urls = [
  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
  "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
  "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg",
];

// Initialize an Inputs object to manage input data
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

// Initialize a Search object to perform searches
// Limit the number of returned results to 2 (topK=2)
const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  topK: 2,
  metric: "euclidean",
});

// Perform a search with a specified rank (image URL)
const res = search.query({
  ranks: [
    {
      imageUrl:
        "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
    },
  ],
});

// Extract the URL of the first hit from the search results
let hit;
for await (const r of res) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the hit image
console.log(hit);
