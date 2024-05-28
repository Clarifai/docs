import { Workflow } from "clarifai-nodejs";


const workflowUrl =
  "https://clarifai.com/clarifai/main/workflows/Text-Moderation";

const textClassificationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const rawText = Buffer.from("I love your product very much");
const prediction = await textClassificationWorkflow.predictByBytes(
  rawText,
  "text",
);
console.log(prediction.resultsList?.[0]?.outputsList?.[0]?.data);
