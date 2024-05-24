import { Input, Workflow } from "clarifai-nodejs";
import { Input as GrpcInput } from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb";


const imageUrl = "https://samples.clarifai.com/metro-north.jpg";

// Here is an example of creating an input proto list of size 32
const protoList: GrpcInput[] = [];
for (let i = 0; i < 32; i++) {
  protoList.push(Input.getInputFromUrl({ inputId: `demo_${i}`, imageUrl }));
}

const workflowUrl = "https://clarifai.com/clarifai/main/workflows/Moderation";
// Creating the workflow
const imageClassificationWorkflow = new Workflow({
  url: workflowUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

// Getting the predictions
const result = await imageClassificationWorkflow.predict({
  inputs: protoList,
});
console.log(result.resultsList.length);
