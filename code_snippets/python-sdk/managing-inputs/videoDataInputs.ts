import { Input } from "clarifai-nodejs";


const videoUrl = "https://samples.clarifai.com/beer.mp4";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
await input.uploadFromUrl({
  inputId: "video_data",
  videoUrl,
});
