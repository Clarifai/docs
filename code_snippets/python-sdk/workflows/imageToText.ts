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

const imageUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/ocr_img_00417302.jpg";
// create a yaml file specifying the workflow structure
// eg:
/* languageAwareOcr.yml
workflow:
  id: wfOcr
  nodes:
      - id: ocrWorkflow
          model:
                  modelId: languageAwareMultilingualOcrMultiplex

      - id: textAggregator
          model:
                  modelId: textAggregation
                  modelTypeId: textAggregationOperator
                  outputInfo:
                      params:
                          avgWordWidthWindowFactor: 2.0
                          avgWordHeightWindowFactor: 1.0

          nodeInputs:
              - nodeId: ocrWorkflow

      - id: languageIdOperator
          model:
                  modelId: languageId
                  modelTypeId: languageIdOperator
                  outputInfo:
                      params:
                          library: "fasttext"
                          topk: 1
                          threshold: 0.1
                          lowercase: true

          nodeInputs:
              - nodeId: textAggregator
*/

const ocrWorkflow = await app.createWorkflow({
  configFilePath: path.resolve(
    __dirname,
    "../../assets/configs/language_aware_ocr.yml",
  ),
});

const workflow = new Workflow({
  workflowId: ocrWorkflow.id,
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId,
  },
});

const prediction = await workflow.predictByUrl(imageUrl, "image");

// Get workflow results
console.log(
  prediction.resultsList?.[0]?.outputsList?.[
    prediction?.resultsList?.[0]?.outputsList?.length - 1
  ].data,
);
