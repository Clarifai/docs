import { Input } from "clarifai-nodejs";


const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
const metadata = {
  filename: "beer.mp4",
  split: "train",
};
const videoUrl = "https://samples.clarifai.com/beer.mp4";
await input.uploadFromUrl({
  inputId: "video_data_metadata",
  videoUrl,
  metadata,
});
