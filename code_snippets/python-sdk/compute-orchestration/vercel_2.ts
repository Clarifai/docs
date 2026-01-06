import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText } from 'ai';

const clarifai = createOpenAICompatible({
  name: 'clarifai',
  baseURL: 'https://api.clarifai.com/v2/ext/openai/v1',
  apiKey: process.env.CLARIFAI_PAT,
});

const model = clarifai.chatModel(
  'https://clarifai.com/openai/chat-completion/models/gpt-oss-120b',
);

const result = streamText({
  model,
  prompt: 'Give one fun fact about photosynthesis',
});

for await (const message of result.textStream) {
  console.log(message);
}