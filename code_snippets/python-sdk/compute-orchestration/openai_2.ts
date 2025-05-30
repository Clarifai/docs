import OpenAI from "openai";
import type { ChatCompletionTool } from "openai/resources";

const client = new OpenAI({
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const tools: ChatCompletionTool[] = [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "Get current temperature for a given location.",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "City and country e.g. Bogotá, Colombia",
          },
        },
        required: ["location"],
        additionalProperties: false,
      },
      strict: true,
    },
  },
];

const toolCompletion = await client.chat.completions.create({
  model: "https://clarifai.com/anthropic/completion/models/claude-sonnet-4",
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: "What is the weather in New York?" },
  ],
  tools,
});

console.log(toolCompletion.choices?.[0]?.message.tool_calls);
