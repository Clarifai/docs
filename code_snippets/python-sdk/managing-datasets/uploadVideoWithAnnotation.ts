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
  inputId: "video-bbox",
  videoUrl,
});
const bboxPoints = [0.1, 0.1, 0.8, 0.9];
const annotation = Input.getBboxProto({
  inputId: "bbox",
  label: "glass",
  bbox: bboxPoints,
});
await input.uploadAnnotations({
  batchAnnot: [annotation],
});
