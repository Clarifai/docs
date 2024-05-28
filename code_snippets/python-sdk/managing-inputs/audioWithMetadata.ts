import { Input } from "clarifai-nodejs";


const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
const metadata = {
  filename: "goodmorning.wav",
  split: "test",
};
const audioUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav";
await input.uploadFromUrl({
  inputId: "audio_data_metadata",
  audioUrl,
  metadata,
});
