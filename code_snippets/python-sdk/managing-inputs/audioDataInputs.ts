import { Input } from "clarifai-nodejs";


const audioUrl =
  "https://s3.amazonaws.com/samples.clarifai.com/GoodMorning.wav";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
input.uploadFromUrl({
  inputId: "audio_data",
  audioUrl,
});
