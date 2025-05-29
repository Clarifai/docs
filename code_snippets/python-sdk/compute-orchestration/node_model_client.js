import { Model } from "clarifai-nodejs";

const model = new Model({
    modelId: "model_id",
    modelUserAppId: {
      userId: "model_user_id",
      appId: "model_app_id",
    },
    authConfig: {
      pat: "pat",
    },
  });