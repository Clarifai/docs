import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const response = await client.chat.completions.create({
  model: "https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "Who are you?" },
  ],
});

console.log(response.choices?.[0]?.message.content);