import { Workflow } from "clarifai-nodejs";
import fs from "fs";


const workflowUrl =
  "https://clarifai.com/clarifai/Visual/workflows/image-generation";

// Creating the workflow
const imageGenerationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await imageGenerationWorkflow.predictByBytes(
  Buffer.from("cat with a hat"),
  "text",
);
// Extract the base64-encoded image data from the result object
const imB =
  prediction.resultsList?.[0]?.outputsList?.[0]?.data?.image?.base64 ?? "";

// Write the output to a file
fs.writeFileSync("image.png", imB, "base64");
