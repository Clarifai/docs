import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { generateText } from 'ai';

const clarifai = createOpenAICompatible({
  name: 'clarifai',
  baseURL: 'https://api.clarifai.com/v2/ext/openai/v1',
  apiKey: process.env.CLARIFAI_PAT,
});

const model = clarifai.chatModel(
  'https://clarifai.com/openai/chat-completion/models/gpt-oss-120b',
);

const { text, usage, finishReason } = await generateText({
  model,
  prompt: 'Give one fun fact about photosynthesis',
});

console.log(text);
console.log('Token usage:', usage);
console.log('Finish reason:', finishReason);