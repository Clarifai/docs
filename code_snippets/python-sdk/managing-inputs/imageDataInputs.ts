import { Input } from "clarifai-nodejs";


const imageUrl = "https://samples.clarifai.com/metro-north.jpg";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
await input.uploadFromUrl({
  inputId: "demo",
  imageUrl,
});
