import { Input } from "clarifai-nodejs";


const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
const textBytes = Buffer.from("Write a tweet on future of AI");
const metadata = {
  filename: "tweet.txt",
  split: "train",
};
await input.uploadFromBytes({
  inputId: "text_with_metadata",
  textBytes,
  metadata,
});
