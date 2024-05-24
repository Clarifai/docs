import { Input } from "clarifai-nodejs";


const imageUrl = "https://samples.clarifai.com/BarackObama.jpg";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
await input.uploadFromUrl({
  inputId: "bbox",
  imageUrl,
});
const bboxPoints = [0.1, 0.1, 0.8, 0.9];
const annotation = Input.getBboxProto({
  inputId: "bbox",
  label: "face",
  bbox: bboxPoints,
});
await input.uploadAnnotations({
  batchAnnot: [annotation],
});
