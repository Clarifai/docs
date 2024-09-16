import { Inputs } from 'clarifai-client';
import { Model } from 'clarifai-client';

const modelUrl: string = "https://clarifai.com/openai/chat-completion/models/gpt-4o-mini";
const prompt: string = "What's the future of AI?";

// here is an example of creating an input proto list of size 16
const protoList: any[] = [];
for (let i = 0; i < 16; i++) {
    protoList.push(Inputs.getInputFromBytes({ inputId: `demo_${i}`, textBytes: Buffer.from(prompt) }));
}

// passthe input proto as parameter to the predict function
const modelPrediction = new Model({ url: modelUrl }).predict(protoList);

// Check the length of predictions to see if all inputs were passed successfully
console.log(modelPrediction.outputs.length);