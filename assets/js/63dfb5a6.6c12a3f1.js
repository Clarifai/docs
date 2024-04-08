"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52991:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),i=a(86010),o=a(53438),r=a(39960),l=a(13919),s=a(95999);const p={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:a}=e;return n.createElement(r.Z,{href:t,className:(0,i.Z)("card padding--lg",p.cardContainer)},a)}function c(e){let{href:t,icon:a,title:o,description:r}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",p.cardTitle),title:o},a," ",o),r&&n.createElement("p",{className:(0,i.Z)("text--truncate",p.cardDescription),title:r},r))}function u(e){let{item:t}=e;const a=(0,o.Wl)(t);return a?n.createElement(c,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return n.createElement(c,{href:t.href,icon:a,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const a=(0,o.jA)();return n.createElement(f,{items:a.items,className:t})}function f(e){const{items:t,className:a}=e;if(!t)return n.createElement(g,e);const r=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},60582:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),i=(a(67294),a(3905)),o=a(52991),r=a(53438);const l={description:"Train the entire graph of your custom model"},s="Deep Fine-Tuning",p={unversionedId:"portal-guide/model/deep-training/README",id:"portal-guide/model/deep-training/README",title:"Deep Fine-Tuning",description:"Train the entire graph of your custom model",source:"@site/docs/portal-guide/model/deep-training/README.mdx",sourceDirName:"portal-guide/model/deep-training",slug:"/portal-guide/model/deep-training/",permalink:"/portal-guide/model/deep-training/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/deep-training/README.mdx",tags:[],version:"current",frontMatter:{description:"Train the entire graph of your custom model"},sidebar:"tutorialSidebar",previous:{title:"Text Generation",permalink:"/portal-guide/model/model-types/text-to-text"},next:{title:"Visual Classification Templates",permalink:"/portal-guide/model/deep-training/visual-classification-templates"}},d={},c=[{value:"Why Choose Deep Fine-Tuning?",id:"why-choose-deep-fine-tuning",level:2},{value:"Template Types",id:"template-types",level:2},{value:"How to Fine-Tune a Model",id:"how-to-fine-tune-a-model",level:2},{value:"Step 1: Choose a Model Type",id:"step-1-choose-a-model-type",level:3},{value:"Step 2: Prepare Training Data",id:"step-2-prepare-training-data",level:3},{value:"Step 3: Create an App",id:"step-3-create-an-app",level:3},{value:"Step 4: Add and Annotate Inputs",id:"step-4-add-and-annotate-inputs",level:3},{value:"Step 5: Choose a Model Type",id:"step-5-choose-a-model-type",level:3},{value:"Step 6: Create the Model",id:"step-6-create-the-model",level:3},{value:"Step 7: Train the Model\u200b",id:"step-7-train-the-model",level:3}],u={toc:c},m="wrapper";function h(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deep-fine-tuning"},"Deep Fine-Tuning"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Learn how to fine-tune pre-trained models")),(0,i.kt)("hr",null),(0,i.kt)("p",null,'Fine-tuning is a deep learning technique that refers to taking a pre-trained model and further training it on a new dataset or task. The term "fine-tuning" implies making small adjustments or refinements to the already learned representations in the pre-trained model rather than training from scratch. '),(0,i.kt)("p",null,"Fine-tuning leverages the power of pre-trained models to improve their performance on a new, related task. It involves taking a pre-trained model, which was previously trained on a vast dataset for a general-purpose task, and tailoring it to a more specific task. "),(0,i.kt)("h2",{id:"why-choose-deep-fine-tuning"},"Why Choose Deep Fine-Tuning?"),(0,i.kt)("p",null,"Clarifai offers a variety of pre-built models that are designed to help you create AI solutions quickly and efficiently. Clarifai models are the recommended starting point for many users because they offer incredibly fast training times, especially when you customize them using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning"},"transfer learning")," model type."),(0,i.kt)("p",null,"But there are some cases where accuracy and the ability to carefully target solutions takes priority over speed and ease of use. Additionally, you may need a model to learn new features not recognized by existing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/clarifai-models#clarifai-models-1"},"Clarifai models"),". "),(0,i.kt)("p",null,'For such cases, it is possible to "deep fine-tune" your custom models and integrate them directly within your ',(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/workflow-builder"},"workflows"),"."),(0,i.kt)("p",null,"You might consider deep fine-tuning if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a custom tailored dataset. This will help you to tailor the model to a specific application or domain, such as customizing it with proprietary data from a private company."),(0,i.kt)("li",{parentName:"ul"},"You have accurate labels. This provides a strong foundation for training your models, resulting in improved performance, reduced errors, and better alignment with the desired task or domain."),(0,i.kt)("li",{parentName:"ul"},"You have the expertise and time to fine-tune models. So, you can modify the model's behavior to eliminate unwanted traits and instill desired ones."),(0,i.kt)("li",{parentName:"ul"},"You want to reduce hallucinations, especially when presenting the model with questions or prompts it hasn't encountered during its initial training.")),(0,i.kt)("h2",{id:"template-types"},"Template Types"),(0,i.kt)("p",null,"You can take advantage of a variety of pre-configured templates when building your deep fine-tuned models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way that your model learns."),(0,i.kt)("p",null,"Here are the template types we offer:"),(0,i.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}),(0,i.kt)("h2",{id:"how-to-fine-tune-a-model"},"How to Fine-Tune a Model"),(0,i.kt)("p",null,"Let's demonstrate how you can create and fine-tune a deep learning model. "),(0,i.kt)("h3",{id:"step-1-choose-a-model-type"},"Step 1: Choose a Model Type"),(0,i.kt)("p",null,"Before diving into fine-tuning, it's crucial to decide on the appropriate deep learning model architecture. Different model types excel at various tasks and generate distinct outputs based on your inputs and desired AI functionality."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"Click here")," to learn more about the model types available on the Clarifai platform. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To illustrate how fine-tuning works, let's opt for a visual classifier model. This type of model excels at categorizing images into predefined classes or concepts.\nOur goal here is to create a fine-tuned visual classifier that can distinguish between images of cats and dogs.")),(0,i.kt)("h3",{id:"step-2-prepare-training-data"},"Step 2: Prepare Training Data"),(0,i.kt)("p",null,"Preparing data for fine-tuning ensures that the custom model learns effectively from the new task or domain, generalizes well to unseen data, and produces reliable predictions."),(0,i.kt)("p",null,"Ensure that you collect high-quality, well-prepared data that will help achieve optimized performance in your model. "),(0,i.kt)("p",null,"You can prepare your data using your preferred spreadsheet software.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/advanced-topics/csv-and-tsv"},"Click here")," to download a CSV template you can use to prepare your data."),(0,i.kt)("p",null,"To illustrate how fine-tuning works, we'll prepare the following simple dataset consisting of images of dogs and cats. Note that for your model to perform well, you need to provide it with enough diverse data to learn meaningful patterns. ",(0,i.kt)("a",{parentName:"p",href:"https://www.clarifai.com/blog/using-ai-to-create-applications-downloading-images-easily"},"Click here")," to learn how you can get images to enrich your dataset. "),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Sample Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://samples.clarifai.com/dog1.jpeg\nhttps://samples.clarifai.com/dog2.jpeg\nhttps://samples.clarifai.com/dog3.jpeg\nhttps://samples.clarifai.com/dog2_tiny.jpeg\nhttps://samples.clarifai.com/dog.tiff\nhttps://samples.clarifai.com/cat1.jpeg\nhttps://samples.clarifai.com/cat2.jpeg\nhttps://samples.clarifai.com/cat3.jpeg\nhttps://samples.clarifai.com/featured-models/blip-flying-cat.jpg\nhttps://samples.clarifai.com/featured-models/social-media-cat-laying-down.jpg\n"))),(0,i.kt)("admonition",{title:"Number of Inputs",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"In general, deep fine-tuned models need more data than those trained using the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/"},"transfer learning technique"),". For most use cases, you\u2019ll need at least 1000 training inputs, but it could be much more than this depending on your specific scenario.")),(0,i.kt)("h3",{id:"step-3-create-an-app"},"Step 3: Create an App"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/applications/create-an-application/#create-an-application-on-the-portal"},"Click here")," to learn how to create an application on the Clarifai portal. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When creating the application, go with the default Image/Video option as the primary input type. And in the collapsible ",(0,i.kt)("strong",{parentName:"p"},"Advanced Settings")," field, also go with the default ",(0,i.kt)("strong",{parentName:"p"},"Universal")," as the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/"},"base workflow"),". ")),(0,i.kt)("h3",{id:"step-4-add-and-annotate-inputs"},"Step 4: Add and Annotate Inputs"),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Inputs")," option on your app\u2019s collapsible left sidebar. Next, use the inputs uploader pop-up window to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#add-inputs"},"upload")," the images of dogs you prepared to a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete"},"dataset")," within your application.  "),(0,i.kt)("p",null,"Also, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete"},"label"),' the images with the "dog" concept. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(64114).Z,width:"1905",height:"889"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Upload inputs")," button to add the annotated images of dogs to your app. "),(0,i.kt)("p",null,"Similarly, use the inputs uploader pop-up window to upload the images of cats you prepared to the same dataset."),(0,i.kt)("p",null,'Also, label the images with the "cat" concept.'),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(32870).Z,width:"1911",height:"906"})),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Upload inputs")," button to add the annotated images of cats to your app."),(0,i.kt)("h3",{id:"step-5-choose-a-model-type"},"Step 5: Choose a Model Type"),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Models")," option on your app\u2019s collapsible left sidebar. "),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},"Add Model")," button on the upper-right corner of the page. On the window that pops up, select the ",(0,i.kt)("strong",{parentName:"p"},"Build a Custom Model")," option and click the ",(0,i.kt)("strong",{parentName:"p"},"Continue")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(72275).Z,width:"1897",height:"862"})),(0,i.kt)("p",null,"You\u2019ll be redirected to a page where you can choose the type of model you want to create and fine-tune."),(0,i.kt)("p",null,"Select the ",(0,i.kt)("strong",{parentName:"p"},"Visual Classifier")," option."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(35356).Z,width:"1804",height:"836"})),(0,i.kt)("h3",{id:"step-6-create-the-model"},"Step 6: Create the Model"),(0,i.kt)("p",null,"The ensuing page allows you to create and fine-tune a visual classifier model that categorizes images into a set of predefined concepts."),(0,i.kt)("p",null,"Provide a unique ID and click the ",(0,i.kt)("strong",{parentName:"p"},"Continue to Configure model")," button to create your model. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(79949).Z,width:"1840",height:"742"})),(0,i.kt)("p",null,"After creating the model, set it up for training. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(37290).Z,width:"1723",height:"896"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Dataset")," \u2014 Select the dataset you previously created that has the images of the dogs and cats. You can also select ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/datasets/create-get-update-delete#update-a-dataset-version"},"a specific version")," for it. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Concepts"),' \u2014 Select the list of concepts you want the model to predict from the existing concepts in your app. For this example, let\'s select "cat" and "dog."'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Invalid Data Tolerance Percent")," \u2014 Optionally, you can set a tolerance threshold (0 to 100) for the percentage of invalid inputs during training, and if this threshold is exceeded, training is stopped with an error."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Template")," \u2014 Select a pre-configured model template you want to use to fine-tune your model. When you choose a deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired. For this example, we\u2019ll go with the recommended template: ",(0,i.kt)("inlineCode",{parentName:"li"},"MMClassification_ResNet_50_RSB_A1"),". ",(0,i.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/portal-guide/model/deep-training/visual-classification-templates"},"Click here")," to learn more about the visual classification templates. ")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Notice that the estimated duration for the training process is displayed for you. This ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/training-basics#training-time-estimator"},"Training Time Estimator")," feature offers transparency in expected training costs.")),(0,i.kt)("h3",{id:"step-7-train-the-model"},"Step 7: Train the Model\u200b"),(0,i.kt)("p",null,"After configuring the training settings, click the ",(0,i.kt)("strong",{parentName:"p"},"Train Model")," button to initiate training your model. "),(0,i.kt)("p",null,"You'll be redirected to the individual page of your model. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(44562).Z,width:"1790",height:"736"})),(0,i.kt)("p",null,"If you check the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model-versions/#model-versions-table"},"model's versions table"),", you\u2019ll notice that the model is still being trained. Many hours may be required to deep train models with large numbers of inputs and complex taxonomies. "),(0,i.kt)("p",null,"You can check the training progress by clicking the ",(0,i.kt)("strong",{parentName:"p"},"View Training Log")," button. You can also cancel a deep fine-tuning job at any time by clicking the ",(0,i.kt)("strong",{parentName:"p"},"Cancel training")," button. "),(0,i.kt)("p",null,"After the model has been trained, the status will change to ",(0,i.kt)("strong",{parentName:"p"},"Model Trained"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(85395).Z,width:"1829",height:"631"})),(0,i.kt)("p",null,"Once you've created and trained your new model, you can put it to work. It will be ready to be ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/"},"evaluated"),", combined with other models and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/agent-system-operators/"},"agent operators")," in a workflow, or used to serve ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/ppredict"},"inference")," requests as it is."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Deep fine-tuning is billed at an hourly rate, and for canceled jobs, you will be charged for the time you've used to train your model. You can learn more about deep fine-tuning pricing ",(0,i.kt)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"here"),".")),(0,i.kt)("p",null,"That's it!"))}h.isMDXComponent=!0},64114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-1-c153237957e0db7deb8527ad4621f587.png"},32870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-2-dc1bf180fa3345138283225ab311578b.png"},72275:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-3-c6220d9888e4f30a8cb1dcfcdfc7d546.png"},35356:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-4-7da8da64158aa1030e5fe5ce9a4e6f97.png"},79949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-5-44e09c1379347bba587c82caf293ee35.png"},37290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-6-599040ca59c7f997c2db49ebfe2e2812.png"},44562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-7-87fbe351c3e1c454c2ff189a42bcaeb6.png"},85395:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my-deep-training-8-1ea5999435dc2943dae8278fb9a75b9f.png"}}]);