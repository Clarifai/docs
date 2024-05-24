import { Input, Workflow } from "clarifai-nodejs";


// Setting up input image and prompt
const prompt = "What time of day is it?";
const imageUrl = "https://samples.clarifai.com/metro-north.jpg";

const workflowUrl =
  "https://clarifai.com/clarifai/Visual/workflows/multimodal-to-text";

const multiInput = Input.getMultimodalInput({
  inputId: "multi-modal-input",
  imageUrl,
  rawText: prompt,
});

// Creating the workflow
const textEmbeddingWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const result = await textEmbeddingWorkflow.predict({
  inputs: [multiInput],
});

console.log(
  result.resultsList?.[0]?.outputsList?.[
    result?.resultsList?.[0]?.outputsList?.length - 1
  ]?.data,
);
