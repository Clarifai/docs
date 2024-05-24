import { Input } from "clarifai-nodejs";


const textUrl =
  "https://samples.clarifai.com/featured-models/Llama2_Conversational-agent.txt";
const concepts = ["mobile", "camera"];
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
await input.uploadFromUrl({
  inputId: "text1",
  textUrl,
  labels: concepts,
});
