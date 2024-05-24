import { Input } from "clarifai-nodejs";


const inputText = "Write a tweet on future of AI";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
input.uploadText({
  inputId: "text_data",
  rawText: inputText,
});
