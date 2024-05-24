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

// Initialize a search object for the created application, top-K not set for pagination
const search = new Search({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  metric: "euclidean",
});

const response = search.query({
  ranks: [{ textRaw: "Red pineapples on the beach." }],
  perPage: 2,
  page: 1,
});

const hits = (await response.next()).value?.hitsList ?? [];
console.log(hits);
