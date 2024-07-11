import { Input, Polygon } from "clarifai-nodejs";


const imageUrl = "https://samples.clarifai.com/BarackObama.jpg";
const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: process.env.CLARIFAI_APP_ID,
  },
});
await input.uploadFromUrl({
  inputId: "mask",
  imageUrl,
});
const maskPoints:Polygon[] = [[[0.87, 0.66],[0.45 , 1.0], [0.82 ,0.42]]];
const annotation = Input.getMaskProto({
  inputId: "mask",
  label: "obama",
  polygons: maskPoints,
});
await input.uploadAnnotations({
  batchAnnot: [annotation],
});