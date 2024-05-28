import { User } from "clarifai-nodejs";


const client = new User({
  userId: process.env.CLARIFAI_USER_ID,
  pat: process.env.CLARIFAI_PAT,
  appId: "",
});
// list apps method allows pagination
const apps = await client
  .listApps({
    pageNo: 1,
    perPage: 6,
  })
  .next();
if (apps.value)
  for (const app of apps.value) {
    console.log(app);
  }
