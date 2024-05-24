import { Input } from "clarifai-nodejs";


const prompt = "What time of day is it?";
const imageUrl = "https://samples.clarifai.com/metro-north.jpg";
const multimodalInput = Input.getMultimodalInput({
  inputId: "multimodal_data",
  imageUrl,
  rawText: prompt,
});
console.log(multimodalInput);
