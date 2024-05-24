import { App } from "clarifai-nodejs";


const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: "test_app",
  },
});
const list = await app
  .listConcepts({
    pageNo: 1,
    perPage: 6,
  })
  .next();
const concepts = list.value;
console.log(concepts);
