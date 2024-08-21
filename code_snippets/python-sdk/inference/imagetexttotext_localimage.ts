import { Model } from 'clarifai';
import { Inputs } from 'clarifai';

const IMAGE_FILE_LOCATION = 'LOCAL IMAGE PATH';
const fs = require('fs');

const file_bytes = fs.readFileSync(IMAGE_FILE_LOCATION);

const prompt = "What time of day is it?";
const inference_params = { temperature: 0.2, max_tokens: 100 };

const model = new Model("https://clarifai.com/openai/chat-completion/models/openai-gpt-4-vision");
model.predict({
    inputs: [
        Inputs.getMultimodalInput({
            input_id: "",
            image_bytes: file_bytes,
            raw_text: prompt
        })
    ],
    inference_params: inference_params
}).then((model_prediction) => {
    console.log(model_prediction.outputs[0].data.text.raw);
});

