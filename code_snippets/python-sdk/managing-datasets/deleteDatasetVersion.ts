import { Dataset } from "clarifai-nodejs";


const dataset = new Dataset({
  datasetId: "first_dataset",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: "test_app",
  },
});
await dataset.deleteVersion("1");
