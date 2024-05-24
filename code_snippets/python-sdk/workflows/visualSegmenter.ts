import { Workflow } from "clarifai-nodejs";
import fs from "fs";


const imageUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg";
const workflowUrl =
  "https://clarifai.com/clarifai/main/workflows/Visual-Segmenter";

// Creating the workflow
const imageSegmentationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await imageSegmentationWorkflow.predictByUrl(
  imageUrl,
  "image",
);

const imB =
  prediction.resultsList?.[0]?.outputsList?.[0]?.data?.regionsList?.[0]
    ?.regionInfo?.mask?.image?.base64 ?? "";

// Write the output to a file
fs.writeFileSync("image.png", imB, "base64");
