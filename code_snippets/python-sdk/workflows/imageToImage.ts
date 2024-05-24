import { Workflow } from "clarifai-nodejs";
import fs from "fs";


const workflowUrl =
  "https://clarifai.com/clarifai/Visual/workflows/upscale-workflow";
const imageUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg";

// Creating the workflow
const imageUpscaleWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const result = await imageUpscaleWorkflow.predictByUrl(imageUrl, "image");

const imB =
  result.resultsList?.[0]?.outputsList?.[0]?.data?.image?.base64 ?? "";

console.log(imB);

// Write the output to a file
fs.writeFileSync("image.png", imB, "base64");
