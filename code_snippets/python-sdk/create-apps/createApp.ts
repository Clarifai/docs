import { User } from "clarifai-nodejs";


const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId: "",
});
// You can create an app by providing the app id
const app = await client.createApp({
  appId: "test_app",
});
console.log(app);