"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8496],{19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>k});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),l=n(56347),s=n(57485),u=n(31682),p=n(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var f=n(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==l&&(c(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function A(e){const t=h(e);return r.createElement("div",{className:(0,o.A)("tabs-container",y.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(w,(0,a.A)({},e,t)))}function k(e){const t=(0,f.A)();return r.createElement(A,(0,a.A)({key:String(t)},e))}},51304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>R,contentTitle:()=>T,default:()=>N,frontMatter:()=>v,metadata:()=>I,toc:()=>_});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),i=n(19365),l=n(77964);const s="# Import the RAG module from Clarifai for conversational AI tasks\nfrom clarifai.rag import RAG\n\n# Set the user ID for authentication\nUSER_ID = 'USER_ID'\n\n# Define the URL of the Mistral-7B language model\nLLM_URL = 'https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct'\n\n# Define a template string for generating prompts during inference\nRAG_PROMPT_TEMPLATE = \"<s>[INST] Context information is below:\\n{data.hits}\\nGiven the context information and not prior knowledge, answer the query.\\nQuery: {data.text.raw}\\nAnswer:  [/INST]\"\n\n# Setup a RAG object with specified parameters such as user ID, model URL,\n# minimum score threshold, and prompt template\nrag_object = RAG.setup(user_id=USER_ID, llm_url=LLM_URL, min_score=0.5, max_results = 2, prompt_template=RAG_PROMPT_TEMPLATE)",u='import { RAG } from "clarifai-nodejs";\n\n// Import the RAG module from Clarifai for conversational AI tasks\n\n// Define the URL of the Mistral-7B language model\nconst llmUrl =\n  "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct";\n\n// Define a template string for generating prompts during inference\nconst ragPromptTemplate =\n  "<s>[INST] Context information is below:\\n{data.hits}\\nGiven the context information and not prior knowledge, answer the query.\\nQuery: {data.text.raw}\\nAnswer:  [/INST]";\n\n// Setup a RAG object with specified parameters such as user ID, model URL,\n// minimum score threshold, and prompt template\nconst ragObject = await RAG.setup({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n  },\n  llmUrl,\n  minScore: 0.5,\n  maxResults: 2,\n  promptTemplate: ragPromptTemplate,\n});\n\nconsole.log(ragObject.promptWorkflow);\n',p='FILE_PATH="RAG/data/Crawfords_Auto_Repair_Guide.txt"\nrag_object.upload(file_path=FILE_PATH,chunk_size= 1024) #parameters to split the document into chunks',c='import { RAG } from "clarifai-nodejs";\nimport path from "path";\n\n// Import the RAG module from Clarifai for conversational AI tasks\n\n// Define the URL of the Mistral-7B language model\nconst llmUrl =\n  "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct";\n\n// Define a template string for generating prompts during inference\nconst ragPromptTemplate =\n  "<s>[INST] Context information is below:\\n{data.hits}\\nGiven the context information and not prior knowledge, answer the query.\\nQuery: {data.text.raw}\\nAnswer:  [/INST]";\n\n// Setup a RAG object with specified parameters such as user ID, model URL,\n// minimum score threshold, and prompt template\nconst ragObject = await RAG.setup({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n  },\n  llmUrl,\n  minScore: 0.5,\n  maxResults: 2,\n  promptTemplate: ragPromptTemplate,\n});\n\nconst filePath = path.resolve(__dirname, "../../assets/ragInput.txt");\nawait ragObject.upload({\n  filePath,\n  chunkSize: 1024,\n});\n',d='# Initiating a conversation with the RAG (Retrieval Augmented Generation) model object (`rag_object_gpt`).\n# Sending a message containing the query "How to change brake fluid" to the model and awaiting a response.\nresult = rag_object.chat(messages=[{"role": "human", "content": "How to change brake fluid"}])\n\n# Extracting the content of the response from the result.\nanswer = result[0]["content"]\n\n# Printing out the response\nprint(answer)',m='import { RAG } from "clarifai-nodejs";\nimport path from "path";\n\n// Import the RAG module from Clarifai for conversational AI tasks\n\n// Define the URL of the Mistral-7B language model\nconst llmUrl =\n  "https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct";\n\n// Define a template string for generating prompts during inference\nconst ragPromptTemplate =\n  "<s>[INST] Context information is below:\\n{data.hits}\\nGiven the context information and not prior knowledge, answer the query.\\nQuery: {data.text.raw}\\nAnswer:  [/INST]";\n\n// Setup a RAG object with specified parameters such as user ID, model URL,\n// minimum score threshold, and prompt template\nconst ragObject = await RAG.setup({\n  authConfig: {\n    userId: process.env.CLARIFAI_USER_ID,\n    pat: process.env.CLARIFAI_PAT,\n  },\n  llmUrl,\n  minScore: 0.5,\n  maxResults: 2,\n  promptTemplate: ragPromptTemplate,\n});\n\nconst filePath = path.resolve(__dirname, "../../assets/ragInput.txt");\nawait ragObject.upload({\n  filePath,\n  chunkSize: 1024,\n});\n\n// Initiating a conversation with the RAG (Retrieval Augmented Generation) model object (`ragObject`).\n// Sending a message containing the query "How to change brake fluid" to the model and awaiting a response.\nconst result = await ragObject.chat({\n  messages: [{ role: "human", content: "How to change brake fluid" }],\n});\n\n// Extracting the content of the response from the result.\nconst answer = result[1].content;\n\n// Printing out the response\nconsole.log(answer);\n\nconst result2 = await ragObject.chat({\n  messages: [\n    { role: "human", content: "procedure after following the above steps" },\n  ],\n});\n\nconst answer2 = result2[1].content;\n\n// Printing out the response\nconsole.log(answer2);\n',g='result=rag_object.chat(messages=[{"role":"human", "content":"procedure after following the above steps"}])\n\nanswer=result[0]["content"]\n\nprint(answer)',h="#initialize  RAG using workflow URL\nWORKFLOW_URL = 'workflow_URL'\nrag_object_from_url = RAG(workflow_url = WORKFLOW_URL)",f="#initialize  RAG using workflow ID\nUSER_ID = 'user_id'\nLLM_URL = 'https://clarifai.com/openai/chat-completion/models/GPT-4'\nRAG_PROMPT_TEMPLATE = \"Context information is below:\\n{data.hits}\\nGiven the context information and not prior knowledge, answer the query.\\nQuery: {data.text.raw}\\nAnswer: \"\nrag_object_gpt = RAG.setup(user_id=USER_ID,llm_url=LLM_URL, min_score=0.5, prompt_template=RAG_PROMPT_TEMPLATE,workflow_id=\"workflow_id\")",y='2024-03-20 10:34:02 INFO     clarifai.client.input:                                                    input.py:674\n\n                             Inputs Uploaded                                                                       \n\n                             code: SUCCESS                                                                         \n\n                             description: "Ok"                                                                     \n\n                             details: "All inputs successfully added"                                              \n\n                             req_id: "848c5233f9d67f1904da10c33a214ff9"                                            \n\n                                                                                                                   \n\nINFO:clarifai.client.input:\n\nInputs Uploaded\n\ncode: SUCCESS\n\ndescription: "Ok"\n\ndetails: "All inputs successfully added"\n\nreq_id: "848c5233f9d67f1904da10c33a214ff9"',b="To change the brake fluid, you will need to follow these steps: \n\n \n\n1. Locate the brake fluid reservoir in your vehicle. It is usually a clear plastic container with MAX and MIN markings on it. \n\n \n\n2. Use a turkey baster or a brake fluid pump to remove the old brake fluid from the reservoir. Be careful not to spill any brake fluid on the car's paint as it can damage the finish. \n\n \n\n3. Once the old fluid is removed, clean the reservoir with a lint-free cloth to ensure there is no contamination. \n\n \n\n4. Refill the reservoir with new brake fluid that is recommended for your specific vehicle. Make sure to use the type of brake fluid specified in your owner's manual. \n\n \n\n5. Slowly pour the new brake fluid into the reservoir up to the MAX marking. Avoid overfilling. \n\n \n\n6. After filling the reservoir, you may need to bleed the brake system to remove any air bubbles. This process may vary depending on your vehicle, so it's best to consult your owner's manual or a professional mechanic for guidance. \n\n \n\n7. Once the brake fluid is changed and the system is bled, check for any leaks or issues before driving the vehicle. \n\n \n\nRemember, if you are not comfortable or experienced with changing brake fluid, it is recommended to have this task done by a professional mechanic. Brake fluid is a critical component of your vehicle's braking system, and proper maintenance is essential for your safety on the road. ",w=" After following the steps to drain, flush, and pressure test the cooling system as described in the text, the next procedure would be to check for any leaks in the cooling system. This can be done by inspecting the entire cooling system, including the radiator, hoses, water pump, and heater core, for any signs of leaks. If there is less pressure on the gauge after the pressure test, there is probably a leak. Additionally, the engine should be started and the temperature gauge should be monitored to ensure that the cooling system is functioning properly. If the engine overheats or the temperature gauge reads high, further diagnosis and repair may be necessary.",A="2024-05-08 12:21:25 INFO     clarifai.rag.rag:                                                            rag.py:43\n                             workflow_url:https://clarifai.com/8tzpjy1a841y/unst-clf/workflows/rag                 \nINFO:clarifai.rag.rag:workflow_url:https://clarifai.com/8tzpjy1a841y/unst-clf/workflows/rag",k='2024-05-08 12:28:09 INFO     clarifai.client.app:                                                        app.py:431\n                             Workflow created                                                                      \n                             code: SUCCESS                                                                         \n                             description: "Ok"                                                                     \n                             req_id: "73cd1b5a80ba9e7280542b6b176213fe"                                            \n                                                                                                                   \nINFO:clarifai.client.app:\nWorkflow created\ncode: SUCCESS\ndescription: "Ok"\nreq_id: "73cd1b5a80ba9e7280542b6b176213fe"\n\n Input\n\u255a\u2550\u2550                                Node: rag-prompter                               \n    \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n    \u2503 id                       \u2503 model_type_id \u2503 app_id             \u2503 user_id      \u2503\n    \u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n    \u2502 prompter-rag3-def6cc6378 \u2502 rag-prompter  \u2502 rag_app_def6cc6378 \u2502 8tzpjy1a841y \u2502\n    \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n    \u255a\u2550\u2550                       Node: llm                      \n        \u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n        \u2503 id    \u2503 model_type_id \u2503 app_id          \u2503 user_id \u2503\n        \u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n        \u2502 GPT-4 \u2502 text-to-text  \u2502 chat-completion \u2502 openai  \u2502\n        \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518',v={sidebar_position:9},T="Building RAG Applications",I={unversionedId:"sdk/rag",id:"sdk/rag",title:"Building RAG Applications",description:"Learn how to build a RAG application using Clarifai SDKs",source:"@site/docs/sdk/rag.md",sourceDirName:"sdk",slug:"/sdk/rag",permalink:"/sdk/rag",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/rag.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Model Export",permalink:"/sdk/advance-model-operations/model-export"},next:{title:"Python SDK Notebook Examples",permalink:"/sdk/notebook-examples"}},R={},_=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initialising RAG",id:"initialising-rag",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Chat",id:"chat",level:2}],x={toc:_},C="wrapper";function N(e){let{components:t,...n}=e;return(0,r.yg)(C,(0,a.A)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"building-rag-applications"},"Building RAG Applications"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Learn how to build a RAG application using Clarifai SDKs")),(0,r.yg)("hr",null),(0,r.yg)("p",null,"In the realm of text generation, Retrieval Augmented Generation (RAG) steps up the game for Large Language Models (LLMs) by fusing information retrieval capabilities with text generation skills, tackling key drawbacks of LLMs. When presented with a query, RAG fetches relevant information from an external knowledge base, which increases precision and contextual appropriateness through the integration of this retrieved data into the input. The Clarifai SDKs allows you to create RAG-based applications with ease by reducing the number of steps in the process."),(0,r.yg)("p",null,"Click ",(0,r.yg)("a",{parentName:"p",href:"https://www.clarifai.com/blog/what-is-rag-retrieval-augmented-generation"},"here")," to learn more about RAG."),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Setting up the Clarifai SDKs along with PAT. Refer to the installation and configuration with the PAT token ",(0,r.yg)("a",{parentName:"li",href:"https://docs.clarifai.com/python-sdk/sdk-overview/"},"here"),".")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Guide to get your ",(0,r.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT"))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Clone the Clarifai Examples repository to get the data files required for the building RAG.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"!git clone https://github.com/Clarifai/examples.git\n%cd /content/examples/\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"To run on a local system use: cd examples/ ")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before you proceed install ",(0,r.yg)("inlineCode",{parentName:"p"},"llama_index")," using ",(0,r.yg)("inlineCode",{parentName:"p"},"pip install llama-index-core==0.10.24"))),(0,r.yg)("h2",{id:"initialising-rag"},"Initialising RAG"),(0,r.yg)("p",null,"The first part of creating a RAG-based application includes setting up the RAG object. Just by setting up the RAG object, Clarifai SDKs will automatically create the app along with a prompter model and workflow containing the RAG prompter and the LLM Model."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can set a specific version of LLM by using ",(0,r.yg)("inlineCode",{parentName:"p"},"https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct/model_version/version_id"),".")),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},s),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Image Output"),(0,r.yg)("img",{src:"/img/python-sdk/rag_init.png",width:"700",height:"700"}))),(0,r.yg)(i.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-typescript",mdxType:"CodeBlock"},u))),(0,r.yg)("p",null,"Here we are opting for Mistral-7B-Instruct as the LLM Model. You can choose different LLM Models for the RAG agent from Clarifai Community ",(0,r.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/models?filterData=%5B%7B%22field%22%3A%22use_cases%22%2C%22value%22%3A%5B%22llm%22%5D%7D%5D&page=1&perPage=24"},"Models"),". The Clarifai SDKs also allows you to set parameters like min_score,max_results and prompt_template  for retrieving relevant data."),(0,r.yg)("p",null,"The Clarifai SDKs also enables users to initialize RAG using a workflow you have created in the portal which should contain a RAG prompter.\nThere are two ways you can set up RAG using workflows.\nIn the first method, you can provide the workflow URL as a parameter,"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"You should only use ",(0,r.yg)("inlineCode",{parentName:"p"},"RAG(workflow_url)")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"RAG(workflow)")," when a rag workflow already exists in your app.")),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},h))),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},A)),(0,r.yg)("p",null,"The next option is to pass ",(0,r.yg)("inlineCode",{parentName:"p"},"workflow_id")," parameter in ",(0,r.yg)("inlineCode",{parentName:"p"},"RAG.setup()"),", this will create a new workflow in your app with the defined parameters."),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},f))),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},k)),(0,r.yg)("h2",{id:"dataset-upload"},"Dataset Upload"),(0,r.yg)("p",null,"The next step involves uploading the dataset. In this example, we are using a Vehicle Repair Manual as data for the RAG. You can use the RAG object we created earlier for the data upload process. Now comes the perks of using Clarifai SDKs. When you upload the data the Clarifai platform will automatically generate embeddings for the inputs and store them in the vector database which makes it ready for retrieval seconds after uploading data."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Supported formats for upload are Doc, PDF, Text, Folder Containing PDF, Doc and URL of PDF,Doc, Text files.")),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},p),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},y))),(0,r.yg)(i.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-typescript",mdxType:"CodeBlock"},c))),(0,r.yg)("h2",{id:"chat"},"Chat"),(0,r.yg)("p",null,"In the final step, we are going to perform information retrieval using RAG based on the data we provided."),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},d),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},b))),(0,r.yg)(i.A,{value:"typescript",label:"Typescript",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-typescript",mdxType:"CodeBlock"},m))),(0,r.yg)("p",null,"Now let's ask questions that are related to the answer we received before so that we can be sure the RAG has understood the context properly."),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},g))),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Output"),(0,r.yg)(l.A,{className:"language-python",mdxType:"CodeBlock"},w)))}N.isMDXComponent=!0}}]);