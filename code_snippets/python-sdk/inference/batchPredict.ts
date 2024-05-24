import { Input, Model } from "clarifai-nodejs";
import { Input as GrpcInput } from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb";

const modelUrl =
  "https://clarifai.com/clarifai/main/models/general-image-recognition";
const imageUrl = "https://samples.clarifai.com/metro-north.jpg";

// Here is an example of creating an input proto list of size 128
const protoList: GrpcInput[] = [];
for (let i = 0; i < 128; i++) {
  protoList.push(Input.getInputFromUrl({ inputId: `demo_${i}`, imageUrl }));
}


// Pass the input proto as a parameter to the predict function
const model = new Model({
  url: modelUrl,
  authConfig: {
    pat: process.env.CLARIFAI_PAT,
  },
});

const modelPrediction = await model.predict({
  inputs: protoList,
});

// Check the length of predictions to see if all inputs were passed successfully
console.log(modelPrediction.length);
