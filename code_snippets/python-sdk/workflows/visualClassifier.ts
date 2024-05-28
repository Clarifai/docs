import { Workflow } from "clarifai-nodejs";


const imageUrl =
  "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg";
const workflowUrl = "https://clarifai.com/clarifai/main/workflows/Moderation";

// Creating the workflow
const imageClassificationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await imageClassificationWorkflow.predictByUrl(
  imageUrl,
  "image",
);
console.log(prediction.resultsList?.[0]?.outputsList?.[0]?.data);
