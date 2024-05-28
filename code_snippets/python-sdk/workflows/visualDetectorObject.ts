import { Workflow } from "clarifai-nodejs";


const workflowUrl =
  "https://clarifai.com/clarifai/main/workflows/General-Detection";
const videoUrl = "https://samples.clarifai.com/beer.mp4";

// Creating the workflows
const objectSearchWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await objectSearchWorkflow.predictByUrl(videoUrl, "video");

console.log(
  prediction.resultsList?.[0]?.outputsList?.[
    prediction.resultsList?.[0]?.outputsList?.length - 1
  ].data,
);
