import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText } from "ai";

const clarifai = createOpenAICompatible({
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const model = clarifai(
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
