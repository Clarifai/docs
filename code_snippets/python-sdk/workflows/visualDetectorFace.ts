import { Workflow } from "clarifai-nodejs";


const workflowUrl = "https://clarifai.com/clarifai/main/workflows/Face";
const imageUrl = "https://samples.clarifai.com/face-det.jpg";

// Creating the workflow
const faceSearchWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await faceSearchWorkflow.predictByUrl(imageUrl, "image");
console.log(prediction.resultsList?.[0]?.outputsList?.[0]?.data);
