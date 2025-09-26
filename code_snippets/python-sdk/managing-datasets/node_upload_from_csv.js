const { Dataset } = require("clarifai-nodejs");
const path = require("path");

(async () => {
  const dataset = new Dataset({
    datasetId: "YOUR_DATASET_ID",
    authConfig: {
      pat: process.env.CLARIFAI_PAT,
      userId: "YOUR_USER_ID",
      appId: "YOUR_APP_ID",
    },
  });

  await dataset.uploadFromCSV({
    csvPath: path.resolve(__dirname, "/path/to/your/folder"),
    inputType: "image", 
    csvType: "file", // can also be "url" or "raw"
    labels: true      
  });
})();
