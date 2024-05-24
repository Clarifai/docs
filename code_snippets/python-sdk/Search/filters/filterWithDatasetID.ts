import { App, Dataset, Search, User } from "clarifai-nodejs";
import fs from "fs";
import { format } from "@fast-csv/format";


const appId = "test_app"; // Placeholder for application ID

// Initialize a User object with your credentials
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

// Create an application with the specified app ID and base workflow
await client.createApp({ appId, baseWorkflow: "Universal" });

// Initialize a app object with the specified app ID

const app = new App({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

const datasetId = "demoDataset";

// Create a dataset within the application
await app.createDataset({ datasetId });

// Define a list of image URLs
const urls = [
  "https://images.pexels.com/photos/139257/pexels-photo-139257.jpeg",
  "https://images.pexels.com/photos/1879386/pexels-photo-1879386.jpeg",
  "https://images.pexels.com/photos/1071882/pexels-photo-1071882.jpeg",
];

// Explicitly create the file
const filePath = "images.csv";
fs.openSync(filePath, "w");

// Create a writable stream
const ws = fs.createWriteStream("images.csv");

// Use fast-csv to write the URLs to the CSV file
const csvStream = format({ headers: ["input"] });
csvStream.pipe(ws).on("end", () => {
  console.log("CSV file written successfully");
  process.exit();
});
urls.forEach((url) => {
  csvStream.write({ input: url });
});
csvStream.end();

// Initialize a dataset object with the dataset ID
const dataset = new Dataset({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
  datasetId,
});
// Upload images to the dataset from the CSV file
await dataset.uploadFromCSV({
  csvPath: "images.csv",
  inputType: "image",
  csvType: "url",
  labels: false,
});

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

// Query the search with filters based on the dataset
const response = search.query({
  filters: [{ inputDatasetIds: [datasetId] }],
});

// Retrieve and display the first image hit from the search response
let hit;
for await (const r of response) {
  hit = r.hitsList?.[0]?.input?.data?.image?.url;
  break;
}

// Print the URL of the hit input
console.log(hit);
