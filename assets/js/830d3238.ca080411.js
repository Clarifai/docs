"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[798],{45069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>T,contentTitle:()=>y,default:()=>k,frontMatter:()=>x,metadata:()=>j,toc:()=>w});var n=a(74848),r=a(28453),i=a(11470),l=a(19365),s=a(21432);const o='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nmodule_path = os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/image_classification/food-101')\n\n\n# Load the dataloader module using the provided function from your module\nfood101_dataloader = load_module_dataloader(module_path)\n\n# Create a Clarifai dataset with the specified dataset_id\ndataset = app.create_dataset(dataset_id=\"image_dataset\")\n\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_dataset(dataloader=food101_dataloader,get_upload_status=True)\n",c="print(app.list_trainable_model_types())",u='MODEL_ID = "model_visual_embedder"\nMODEL_TYPE_ID = "visual-embedder"\n\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)\n',h="print(model.list_training_templates())",p="# Get the params for the selected template\nmodel_params = model.get_params(template='Clarifai_ResNext')\n# list the concepts to add in the params\nconcepts = [concept.id for concept in app.list_concepts()]\nmodel.update_params(dataset_id = 'image_dataset',concepts = concepts)\nprint(model.training_params)",m='import time\n#Starting the training\nmodel_version_id = model.train()\n\n#Checking the status of training\nwhile True:\n    status = model.training_status(version_id=model_version_id,training_logs=False)\n    if status.code == 21106: #MODEL_TRAINING_FAILED\n        print(status)\n        break\n    elif status.code == 21100: #MODEL_TRAINED\n        print(status)\n        break\n    else:\n        print("Current Status:",status)\n        print("Waiting---")\n        time.sleep(120)',g="IMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_classification/food-101/images/hamburger/139558.jpg')\nmodel_prediction = model.predict_by_filepath(IMAGE_PATH, input_type=\"image\")\n\n# Get the output\nprint(model_prediction.outputs[0].data.embeddings)",f="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",v="['classification_angular_margin_embed',\n 'classification_basemodel_v1_embed',\n 'Clarifai_ResNet_AngularMargin',\n 'Clarifai_InceptionBatchNorm',\n 'Clarifai_ResNext']",b="{'dataset_id': 'image_dataset',\n 'dataset_version_id': '',\n 'concepts': ['id-hamburger', 'id-ramen', 'id-prime_rib', 'id-beignets'],\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'Clarifai_ResNext',\n  'logreg': 1.0,\n  'image_size': 256.0,\n  'batch_size': 64.0,\n  'init_epochs': 25.0,\n  'step_epochs': 7.0,\n  'num_epochs': 65.0,\n  'per_item_lrate': 7.8125e-05,\n  'num_items_per_epoch': 0.0}}",_="embeddings {\n\n  vector: 0.021010370925068855\n\n  vector: 0.011909130029380322\n\n  vector: 2.2577569325221702e-07\n\n  vector: 0.001307532424107194\n\n  vector: 0.04247743636369705\n\n  vector: 0.01022490207105875\n\n  vector: 0.0006444881437346339\n\n  vector: 0.027988344430923462\n\n  vector: 0.028407510370016098\n\n  vector: 5.129506917000981e-06\n\n  vector: 0.03279731422662735\n\n  vector: 0.016899824142456055\n\n  vector: 0.003125722287222743\n\n  vector: 0.0\n\n  vector: 0.024156155064702034\n\n  vector: 0.04975743591785431\n\n  vector: 0.010608416981995106\n\n  vector: 0.0006941271130926907\n\n  vector: 0.00018513976829126477\n\n  vector: 2.714529364311602e-05\n\n  vector: 0.0014789806446060538\n\n\u2026\u2026..\n\n}\n",x={},y="Visual Embedder",j={id:"sdk/Model-Training-Tutorial/visual_embedder",title:"Visual Embedder",description:"Learn how to train a visual embedding model using Clarifai SDKs",source:"@site/docs/sdk/Model-Training-Tutorial/visual_embedder.md",sourceDirName:"sdk/Model-Training-Tutorial",slug:"/sdk/Model-Training-Tutorial/visual_embedder",permalink:"/sdk/Model-Training-Tutorial/visual_embedder",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Model-Training-Tutorial/visual_embedder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Visual Detector",permalink:"/sdk/Model-Training-Tutorial/visual_detector"},next:{title:"Visual Segmenter",permalink:"/sdk/Model-Training-Tutorial/visual_segmenter"}},T={},w=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choose The Model Type",id:"choose-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:3},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2}];function A(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,r.R)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"visual-embedder",children:"Visual Embedder"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Learn how to train a visual embedding model using Clarifai SDKs"})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(t.p,{children:["Visual embedder models are neural network architectures specifically designed to transform high-dimensional visual data, such as images or videos, into low-dimensional representations, called embeddings. You can learn more about Visual Embedder ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-embedder",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"app-creation",children:"App Creation"}),"\n",(0,n.jsx)(t.p,{children:"The first part of model training includes the creation of an app under which the training process takes place. Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:o})})}),"\n",(0,n.jsx)(t.h2,{id:"dataset-upload",children:"Dataset Upload"}),"\n",(0,n.jsx)(t.p,{children:"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned."}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:d})})}),"\n",(0,n.jsx)(t.p,{children:"If you have followed the steps correctly you should receive an output that looks like this,"}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/ve_du.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"choose-the-model-type",children:"Choose The Model Type"}),"\n",(0,n.jsx)(t.p,{children:"First let's list the all available trainable model types in the platform,"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:c})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:f})]}),"\n",(0,n.jsxs)(t.p,{children:["Click ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/",children:"here"})," to know more about Clarifai Model Types."]}),"\n",(0,n.jsx)(t.h2,{id:"model-creation",children:"Model Creation"}),"\n",(0,n.jsx)(t.p,{children:"From the above list of model types we are going to choose visual-embedder as it is similar to our use case. Now let's create a model with the above model type."}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:u})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/ve_mc.png"})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/sdk/Model-Training-Tutorial/clusterer#patch-model",children:"Click here"})," to learn how to patch your model."]})}),"\n",(0,n.jsx)(t.h2,{id:"template-selection",children:"Template Selection"}),"\n",(0,n.jsxs)(t.p,{children:["Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the ",(0,n.jsx)(t.code,{children:"'Clarifai_ResNext' "}),"template for training our model."]}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:h})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:v})]}),"\n",(0,n.jsx)(t.h3,{id:"setup-model-parameters",children:"Setup Model Parameters"}),"\n",(0,n.jsx)(t.p,{children:"You can update the model params to your need before initiating training."}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:p})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:b})]}),"\n",(0,n.jsx)(t.h2,{id:"initiate-model-training",children:"Initiate Model Training"}),"\n",(0,n.jsx)(t.p,{children:"We can initiate the model training by calling the model.train() method. The Clarifai SDKs also offers features like showing training status and saving training logs in a local file."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"If the status code is 'MODEL-TRAINED', then the user can know the Model is Trained and ready to use."})}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:m})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/ve_imt.png"})]}),"\n",(0,n.jsx)(t.h2,{id:"model-prediction",children:"Model Prediction"}),"\n",(0,n.jsx)(t.p,{children:"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(s.A,{className:"language-python",children:g})})}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(s.A,{className:"language-text",children:_})]})]})}function k(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function l(e){let{children:t,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,l),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(18215),i=a(23104),l=a(56347),s=a(205),o=a(57485),d=a(31682),c=a(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,u]=m({queryString:a,groupId:r}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=d??g;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(74848);function _(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=o.indexOf(t),r=s[a].value;r!==n&&(d(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:u,onClick:c,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,b.jsx)(_,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(t))}}}]);