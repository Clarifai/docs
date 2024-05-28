import { App, User, Workflow } from "clarifai-nodejs";
import path from "path";


const appId = "test_app"; // Placeholder for application ID
// Your PAT (Personal Access Token) can be found in the Account's Security section
// Specify the correct userId/appId pairings
// Since you're making inferences outside your app's scope
const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId,
});

await client.createApp({
  appId,
  baseWorkflow: "Empty",
});

const app = new App({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Create ASR-Sentiment workflow
const asrSentimentWorkflow = await app.createWorkflow({
  configFilePath: path.resolve(
    __dirname,
    "../../assets/configs/asr_sentiment.yml",
  ),
});

const audioUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/GreatPresentation2.wav";

const workflow = new Workflow({
  workflowId: asrSentimentWorkflow.id,
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

// Infer workflow on an audio input
const prediction = await workflow.predictByUrl(audioUrl, "audio");

// Get workflow results
console.log(
  prediction.resultsList?.[0]?.outputsList?.[
    prediction.resultsList?.[0]?.outputsList.length - 1
  ].data,
);
