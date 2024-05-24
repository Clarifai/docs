import { User } from "clarifai-nodejs";


const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId: "",
});
// Provide the app id as parameter to delete_app function
await client.deleteApp({
  appId: "test_app",
});
