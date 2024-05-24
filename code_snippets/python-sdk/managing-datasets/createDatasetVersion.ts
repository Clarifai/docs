import { Dataset } from "clarifai-nodejs";


const datset = new Dataset({
  datasetId: "first_dataset",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: "test_app",
  },
});
const datasetVersion = await datset.createVersion({
  id: "1",
  description: "new dataset version description",
});
console.log(datasetVersion);

