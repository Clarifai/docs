import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const openai = createOpenAI({
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const model = openai(
  "https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
);

const stream = streamText({
  model,
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is photosynthesis?" },
  ],
});

for await (const part of stream.textStream) {
  console.log(part);
}
