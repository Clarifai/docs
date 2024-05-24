import { Input } from "clarifai-nodejs";


const imageUrl =
  "https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg";

const input = new Input({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
    appId: "test_app",
  },
});
await input.uploadFromUrl({
  imageUrl,
  inputId: "demo2",
  labels: ["train"],
});
