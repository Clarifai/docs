import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText, tool } from "ai";
import { z } from "zod";

const clarifai = createOpenAICompatible({
  baseURL: "https://api.clarifai.com/v2/ext/openai/v1",
  apiKey: process.env.CLARIFAI_PAT,
});

const model = clarifai(
  "https://clarifai.com/openai/chat-completion/models/gpt-oss-120b"
);

const result = await generateText({
  model,
  tools: {
    weather: tool({
      description: "Get the current weather in a specific location",
      parameters: z.object({
        location: z.string().describe("The city and state, e.g. San Francisco, CA"),
      }),
      execute: async ({ location }) => ({
        location,
        temperature: 72,
      }),
    }),
    cityAttractions: tool({
      description: "Get popular tourist attractions for a specific city",
      parameters: z.object({ 
        city: z.string().describe("The name of the city") 
      }),
      execute: async ({ city }) => ({
        city,
        attractions: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf"],
      }),
    }),
  },
  prompt: "What is the weather in San Francisco and what attractions should I visit?",
});

console.log(JSON.stringify(result.toolResults, null, 2));