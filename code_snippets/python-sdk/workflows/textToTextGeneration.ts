import { Workflow } from "clarifai-nodejs";


const workflowUrl =
  "https://clarifai.com/clarifai/Text/workflows/text-generation";
// Creating the workflow
const textGenerationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the prediction
const prediction = await textGenerationWorkflow.predictByBytes(
  Buffer.from("Good Morning! I think it's going to be a great day!"),
  "text",
);
console.log(prediction.resultsList?.[0]?.outputsList?.[0]?.data?.text?.raw);
