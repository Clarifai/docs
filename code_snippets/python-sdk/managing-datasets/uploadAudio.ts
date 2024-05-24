import { Dataset } from "clarifai-nodejs";
import path from "path";


const dataset = new Dataset({
  datasetId: "first_dataset",
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
    userId: process.env.CLARIFAI_USER_ID,
    appId: "test_app",
  },
});

await dataset.uploadFromCSV({
  csvPath: path.resolve(__dirname, "../../assets/audio.csv"),
  csvType: "file",
  labels: true,
  inputType: "audio",
});
