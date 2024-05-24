import { Input, Search, User } from "clarifai-nodejs";

const appId = "test_app"; // Placeholder for application ID

// Initialize a User object with your credentials
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});
// Creating an app with specified settings
// (Example Workflows: 'Universal', 'General')
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

// URL of the image and raw text to be uploaded
const imageUrl =
  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg";
const rawText = "This is earth.";

// Uploading the image and raw text as inputs
await input.uploadFromUrl({ inputId: "imgInput", imageUrl });
await input.uploadText({ inputId: "txtInput", rawText });

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

// Querying the search with filters to retrieve results
const response = (
  await search
    .query({
      filters: [{ inputTypes: ["image", "text"] }],
    })
    .next()
).value;

// Extracting text and image URL from the search results
let textHit;
let imageHit;

if (response && response.hitsList.length > 0) {
  const firstHit = response.hitsList[0];
  textHit = firstHit?.input?.data?.text;
  imageHit = firstHit?.input?.data?.image?.url;
}

// Printing the extracted text and image URL
console.log(textHit);
console.log(imageHit);