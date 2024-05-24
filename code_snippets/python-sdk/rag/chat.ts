import { RAG } from "clarifai-nodejs";
import path from "path";

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

const filePath = path.resolve(__dirname, "../../assets/ragInput.txt");
await ragObject.upload({
  filePath,
  chunkSize: 1024,
});

// Initiating a conversation with the RAG (Retrieval Augmented Generation) model object (`ragObject`).
// Sending a message containing the query "How to change brake fluid" to the model and awaiting a response.
const result = await ragObject.chat({
  messages: [{ role: "human", content: "How to change brake fluid" }],
});

// Extracting the content of the response from the result.
const answer = result[1].content;

// Printing out the response
console.log(answer);

const result2 = await ragObject.chat({
  messages: [
    { role: "human", content: "procedure after following the above steps" },
  ],
});

const answer2 = result2[1].content;

// Printing out the response
console.log(answer2);
