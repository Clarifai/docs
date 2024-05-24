import { Input } from "clarifai-nodejs";


const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
const metadata = {
  filename: "XiJinping.jpg",
  split: "train",
};
const imageUrl = "https://samples.clarifai.com/XiJinping.jpg";
await input.uploadFromUrl({
  inputId: "image_with_metadata",
  imageUrl,
  metadata,
});
