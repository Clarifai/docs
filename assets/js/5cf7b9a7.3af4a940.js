"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4349],{50822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var s=r(74848),i=r(28453);const n={description:"Learn about our algorithmic predict operators",sidebar_position:7},o="Algorithmic Predict",a={id:"portal-guide/agent-system-operators/algorithmic-predict",title:"Algorithmic Predict",description:"Learn about our algorithmic predict operators",source:"@site/docs/portal-guide/agent-system-operators/algorithmic-predict.md",sourceDirName:"portal-guide/agent-system-operators",slug:"/portal-guide/agent-system-operators/algorithmic-predict",permalink:"/portal-guide/agent-system-operators/algorithmic-predict",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/agent-system-operators/algorithmic-predict.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Learn about our algorithmic predict operators",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"ML Predict",permalink:"/portal-guide/agent-system-operators/ml-predict"},next:{title:"Tracker",permalink:"/portal-guide/agent-system-operators/tracker"}},c={},d=[{value:"Regex-Based Classifier",id:"regex-based-classifier",level:2},{value:"KNN Classifier",id:"knn-classifier",level:2},{value:"Language Identification Operator",id:"language-identification-operator",level:2},{value:"Cross-App Input Searcher",id:"cross-app-input-searcher",level:2},{value:"Isolation Operator",id:"isolation-operator",level:2},{value:"Barcode Operator",id:"barcode-operator",level:2},{value:"Custom Code Operator",id:"custom-code-operator",level:2},{value:"AWS Lambda",id:"aws-lambda",level:2},{value:"Input Searcher",id:"input-searcher",level:2},{value:"Image Color Recognizer",id:"image-color-recognizer",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"algorithmic-predict",children:"Algorithmic Predict"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Learn about our algorithmic predict operators"})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(t.p,{children:'Prediction models are the "intelligent" part of your AI workflows. Predictions help you to understand, classify, and organize your data. Predictions can be used to drive behaviors in other nodes in your workflow.'}),"\n",(0,s.jsx)(t.p,{children:"Predictions take specific input types and then return predictions about things like the concepts, regions, poses, characters, words, and the abstract visual characteristics of your inputs."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:['Since the algorithmic predict operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows ',(0,s.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow",children:"here"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"regex-based-classifier",children:"Regex-Based Classifier"}),"\n",(0,s.jsx)(t.p,{children:"This operator allows you to classify text using regular expressions. When the specified regex pattern matches the text, the text is assigned to one of the predefined concepts."}),"\n",(0,s.jsxs)(t.p,{children:["Let's demonstrate how you can use the Regex-Based Classifier, alongside ",(0,s.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/agent-system-operators/prompter",children:"a Prompter template"}),", to efficiently classify text."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"1"}),". Go to the workflow builder. Then, search for the ",(0,s.jsx)(t.strong,{children:"prompter"})," template option in the left-hand sidebar and drag it onto the empty workspace."]}),"\n",(0,s.jsx)(t.p,{children:"Use the pop-up that appears on the right-hand sidebar to set up the template text. For this example, let's use this template text:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:'<s>[INST]<<SYS>>Classify the following description into one of the following classes: ["cat", "dog", "cheetah", "lion"]. Respond only with one of the provided classes.<</SYS>>[/INST]\\n{data.text.raw} \n'})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Since we'll use the ",(0,s.jsx)(t.a,{href:"https://clarifai.com/meta/Llama-2/models/llama2-13b-chat",children:"llama2-13b-chat"})," model to help with the classification, we format the prompt text using the special tokens it requires for the specific structure of its prompts. We also include the ",(0,s.jsx)(t.code,{children:"{data.text.raw}"})," placeholder to meet the requirements of the ",(0,s.jsx)(t.strong,{children:"Prompter"})," template."]})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"2"}),". Search for the ",(0,s.jsx)(t.strong,{children:"text-to-text"})," option in the left-hand sidebar and drag it onto the workspace. Then, search for the ",(0,s.jsx)(t.strong,{children:"llama2-13b-chat"})," model on the right-hand sidebar and connect it to the prompter model."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"3"}),". Search for the ",(0,s.jsx)(t.strong,{children:"regex-based classifier"})," option in the left-hand sidebar and drag it onto the workspace. On the right-hand sidebar, click the ",(0,s.jsx)(t.strong,{children:"SELECT CONCEPTS"})," button and use the pop-up that appears to select the relevant ",(0,s.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/concepts/create-get-update-delete",children:"concepts"})," already existing in your application. For this example, we select the following concepts: ",(0,s.jsx)(t.code,{children:"cat, dog, cheetah, lion"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["In the ",(0,s.jsx)(t.strong,{children:"regex"})," field, provide the regex pattern that will be used to classify the text. If the pattern matches, the text will be classified as the selected concept. For this example, we provide ",(0,s.jsx)(t.code,{children:"\\bcat\\b"}),', which would match the word "cat" in instances where it appears as a whole word, surrounded by word boundaries.']}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"4"}),". Connect the ",(0,s.jsx)(t.strong,{children:"text-to-text"})," model with the ",(0,s.jsx)(t.strong,{children:"regex-based classifier"})," and save your workflow."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(53868).A+"",width:"1920",height:"849"})}),"\n",(0,s.jsxs)(t.p,{children:["To observe it in action, navigate to the workflow's individual page and click the ",(0,s.jsx)(t.strong,{children:"+"})," button to input your text."]}),"\n",(0,s.jsx)(t.p,{children:"For this example, let's provide the following input:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"A small, four-legged mammal with soft fur, typically characterized by its whiskers, sharp retractable claws, and acute senses. Known for its independent and curious nature, it often displays a variety of behaviors such as grooming itself, purring, and occasionally hunting. What is this animal?\n"})}),"\n",(0,s.jsx)(t.p,{children:"This is the prompt text we get for the model:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"<s>[INST]<<SYS>>Classify the following description into one of the following classes: [''cat'', ''dog'', ''cheetah'', ''lion'']. Respond only with one of the provided classes.<</SYS>>[/INST]\\nA small, four-legged mammal with soft fur, typically characterized by its whiskers, sharp retractable claws, and acute senses. Known for its independent and curious nature, it often displays a variety of behaviors such as grooming itself, purring, and occasionally hunting. What is this animal?[/INST]\n"})}),"\n",(0,s.jsx)(t.p,{children:"The model will process the input and classify the description into one of the provided classes."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:r(20903).A+"",width:"2861",height:"1669"})}),"\n",(0,s.jsxs)(t.p,{children:["Then, the Regex-Based Classifier will categorize the response into one of the provided concepts, which you can feed into other downstream tasks, such as an ",(0,s.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/agent-system-operators/push#annotation-writer",children:"Annotation Writer"})," to create annotations for inputs."]}),"\n",(0,s.jsx)(t.h2,{id:"knn-classifier",children:"KNN Classifier"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Concepts"]}),"\n",(0,s.jsx)(t.p,{children:"Use k-nearest neighbors (KNN) search and plurality voting amongst the nearest neighbors to classify new instances. Recommended when you only have a small dataset, like one image per concept."}),"\n",(0,s.jsx)(t.h2,{id:"language-identification-operator",children:"Language Identification Operator"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Concepts"]}),"\n",(0,s.jsx)(t.p,{children:"Operator for language identification using the langdetect library."}),"\n",(0,s.jsx)(t.h2,{id:"cross-app-input-searcher",children:"Cross-App Input Searcher"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Hits"]}),"\n",(0,s.jsx)(t.p,{children:"Triggers a visual search in another app based on the model config, if concept(s) are found in images and returns the matched search hits as regions."}),"\n",(0,s.jsx)(t.h2,{id:"isolation-operator",children:"Isolation Operator"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Regions"]}),"\n",(0,s.jsx)(t.p,{children:"This is an operator that computes the distance between detections and assigns an isolation label."}),"\n",(0,s.jsx)(t.h2,{id:"barcode-operator",children:"Barcode Operator"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Regions"]}),"\n",(0,s.jsx)(t.p,{children:"This is an operator that detects and recognizes barcodes from an image. It assigns regions with barcode text for each detected barcode. Supports EAN/UPC, Code 128, Code 39, Interleaved 2 of 5, and QR Code."}),"\n",(0,s.jsx)(t.h2,{id:"custom-code-operator",children:"Custom Code Operator"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Any"]}),"\n",(0,s.jsxs)(t.p,{children:["This model expects a Python 3.9 driver function with the following signature: ",(0,s.jsx)(t.code,{children:"def main(req):"}),'. Here, "req" is a dictionary with a single key "inputs" that holds a list of "Input" objects from ',(0,s.jsx)(t.code,{children:"clarifai_grpc.grpc.api.service_pb2"})," \u2014these inputs are normally sent in API prediction requests."]}),"\n",(0,s.jsxs)(t.p,{children:["The available libraries for importing are: NumPy, SciPy, PIL, and Clarifai gRPC. The response should be a Python dictionary whose nested structure mirrors that of ",(0,s.jsx)(t.code,{children:"MultiOutputResponse"})," in ",(0,s.jsx)(t.code,{children:"clarifai_grpc.grpc.api.service_pb2"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["IDs in inputs should be forwarded to outputs 1-to-1. You can also provide helpers to reference in your main implementation. All the code must be passed in via ",(0,s.jsx)(t.code,{children:"output_info.params.operator_code"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Each execution can last up to 50 seconds and consume 256 MBs of memory."}),"\n",(0,s.jsx)(t.h2,{id:"aws-lambda",children:"AWS Lambda"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Output"}),": Any"]}),"\n",(0,s.jsxs)(t.p,{children:["This model sends data to an AWS lambda function so you can implement any arbitrary logic to be handled within a model prediction or workflow.\nThe request our API sends is a ",(0,s.jsx)(t.code,{children:"PostModelOutputsRequest"})," in the 'request' field, and the response we expect is a ",(0,s.jsx)(t.code,{children:"MultiOutputResponse"})," response in the ",(0,s.jsx)(t.code,{children:"response"})," field."]}),"\n",(0,s.jsx)(t.h2,{id:"input-searcher",children:"Input Searcher"}),"\n",(0,s.jsx)(t.h2,{id:"image-color-recognizer",children:"Image Color Recognizer"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},53868:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/regex_1-19814ee60bb168392214e78316f92dbf.png"},20903:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/regex_2-7e4751d520f49e8daebbc3a53882e57d.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);