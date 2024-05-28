import { Workflow } from "clarifai-nodejs";
import fs from "fs";


const workflowUrl =
  "https://clarifai.com/clarifai/Text/workflows/text-to-audio";

// Creating the workflow
const textToAudioWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const prediction = await textToAudioWorkflow.predictByBytes(
  Buffer.from("I love your product very much"),
  "text",
);

const imgB =
  prediction.resultsList?.[0]?.outputsList?.[0]?.data?.audio?.base64 ?? "";

// Save the audio file
fs.writeFileSync("audio.wav", imgB, "base64");
