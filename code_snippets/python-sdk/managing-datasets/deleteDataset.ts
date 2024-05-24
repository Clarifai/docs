import { App } from "clarifai-nodejs";


const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: "test_app",
  },
});

await app.deleteDataset({ datasetId: "first_dataset" });
