import { RAG } from "clarifai-nodejs";

// Import the RAG module from Clarifai for conversational AI tasks

// Define the URL of the Mistral-7B language model
const llmUrl =
  "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct";

// Define a template string for generating prompts during inference
const ragPromptTemplate =
  "<s>[INST] Context information is below:\n{data.hits}\nGiven the context information and not prior knowledge, answer the query.\nQuery: {data.text.raw}\nAnswer:  [/INST]";

// Setup a RAG object with specified parameters such as user ID, model URL,
// minimum score threshold, and prompt template
const ragObject = await RAG.setup({
  authConfig: {
    userId: process.env.CLARIFAI_USER_ID,
    pat: process.env.CLARIFAI_PAT,
  },
  llmUrl,
  minScore: 0.5,
  maxResults: 2,
  promptTemplate: ragPromptTemplate,
});

console.log(ragObject.promptWorkflow);
