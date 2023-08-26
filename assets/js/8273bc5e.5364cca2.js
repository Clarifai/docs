"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3180],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(g,l(l({ref:t},c),{},{components:o})):a.createElement(g,l({ref:t},c))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},51457:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=o(87462),n=(o(67294),o(3905));const r={description:"Learn how to create your own custom model",sidebar_position:2},l="Custom Models",i={unversionedId:"portal-guide/model/pcustom-model-walkthrough",id:"portal-guide/model/pcustom-model-walkthrough",title:"Custom Models",description:"Learn how to create your own custom model",source:"@site/docs/portal-guide/model/pcustom-model-walkthrough.md",sourceDirName:"portal-guide/model",slug:"/portal-guide/model/pcustom-model-walkthrough",permalink:"/portal-guide/model/pcustom-model-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to create your own custom model",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clarifai Models",permalink:"/portal-guide/model/clarifai-models"},next:{title:"Training Basics",permalink:"/portal-guide/model/training-basics"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"custom-models"},"Custom Models"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Create your own custom model")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"You can create your own custom model on the Community platform and make predictions with it. "),(0,n.kt)("p",null,"To start with, log in to your account and click the ",(0,n.kt)("strong",{parentName:"p"},"Create an App")," button at the top-right section of the navigation bar. And on the small window that pops up, provide the information required to create a new application. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create an app",src:o(15961).Z,width:"1889",height:"935"})),(0,n.kt)("p",null,"Next, you need to upload data, such as images, to the app you've created. The input data, labeled with concepts, is what will be used for training your model. Training helps your model to \u201clearn\u201d from the annotated concepts on your inputs so that it can be able to recognize them. "),(0,n.kt)("p",null,"You do not need many images to get started. We recommend starting with 10 and adding more as needed."),(0,n.kt)("p",null,(0,n.kt)("img",{src:o(90059).Z,width:"700",height:"440"})),(0,n.kt)("p",null,"To upload inputs, select the ",(0,n.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar. Next, click the ",(0,n.kt)("strong",{parentName:"p"},"Upload Inputs")," button and upload the inputs you want to add to the app."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"upload inputs",src:o(1452).Z,width:"1917",height:"863"})),(0,n.kt)("p",null,"The small window that pops up allows you to upload inputs. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"upload inputs window",src:o(36244).Z,width:"1301",height:"805"})),(0,n.kt)("p",null,"If you click the ",(0,n.kt)("strong",{parentName:"p"},"Show Upload Settings")," button, you'll expose a section that allows you to add the following items to your inputs:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Show Upload Settings",src:o(24595).Z,width:"1235",height:"691"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Datasets"),"\u2014A dataset is a set of data input examples for actions like training and evaluation. You can select a previously created dataset or create a new one. For this example, you may not provide it. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Concepts"),"\u2014Adding concepts help in training your model. You can select a previously created concept or create a new one. For this example, create new concepts and label your image inputs with them."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Metadata"),"\u2014You can also add inputs with custom metadata, which can be searched or filtered. Metadata can be any arbitrary JSON. For this example, you may not provide it. ")),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Upload inputs")," button at the bottom of the pop-up window to finalize uploading your inputs. "),(0,n.kt)("p",null,"Next, after adding images that already contain the concepts you want your model to see, you can now proceed to create your own custom model."),(0,n.kt)("p",null,"Select the ",(0,n.kt)("strong",{parentName:"p"},"App Models")," option on the collapsible left sidebar. And on the ensuing page, click the ",(0,n.kt)("strong",{parentName:"p"},"Create Model")," button on the top-right corner of the page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create app models",src:o(95532).Z,width:"1883",height:"593"})),(0,n.kt)("p",null,"Next, choose the type of model you want to create. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create app models",src:o(66279).Z,width:"1533",height:"931"})),(0,n.kt)("p",null,"You can filter results by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Input Type"),"\u2014Several options are available, including embeddings, audio, image, text, concepts, regions, and frames. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Output Type"),"\u2014Several options are available, including concepts, embeddings, regions, image, text, clusters, colors, and audio."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trainable"),'\u2014You can choose "Trainable" ',"(","machine learning",")",' or "Not-Trainable" ',"(","fixed-function",")"," models.")),(0,n.kt)("p",null,"For this example, let\u2019s choose a ",(0,n.kt)("strong",{parentName:"p"},"Transfer Learning Classifier"),". "),(0,n.kt)("p",null,"On the ensuing page, provide the details required to create the custom model. For this example, let's provide the model id, select the concepts we created previously, and set the ",(0,n.kt)("strong",{parentName:"p"},"Concepts mutually_exclusive")," button to true. "),(0,n.kt)("p",null,"You can also fill the other fields if you want to. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create model page",src:o(32097).Z,width:"1498",height:"932"})),(0,n.kt)("p",null,"After configuring the model, click the ",(0,n.kt)("strong",{parentName:"p"},"Create Model")," button at the bottom of the page."),(0,n.kt)("p",null,"You'll be redirected to the created model's page."),(0,n.kt)("p",null,"Finally, click the ",(0,n.kt)("strong",{parentName:"p"},"Train Model")," button on the upper right-hand corner of the page. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create model page",src:o(98557).Z,width:"1899",height:"479"})),(0,n.kt)("p",null,"Once the model is trained, you can put it to work, such as by adding it to a workflow. "),(0,n.kt)("p",null,"That's it!"))}d.isMDXComponent=!0},95532:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_create_model-5e2cf374cb72e96f06006713444b62d9.png"},32097:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_create_model_page-c5b85c567570303bbce61c3630ae88d1.png"},15961:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_create_new_app-2cb7644e0c0ab6a0a29d4ca8545902c9.png"},66279:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_create_new_model-fae8c588e72a3e78f489aa0eb06dbb84.png"},98557:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_created_model_page-a8b1f8f739041bfcd17a0f1d62e2c4d8.png"},24595:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_show_upload_settings-a983621643bece404140bf3be2152e94.png"},1452:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_model_upload_inputs-c396077c3018aecdcdffb645c2a110f1.png"},36244:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/custom_models_upload_inputs_window-94431637f720d8794b43cb98ef5a5426.png"},90059:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/illustration-training-22112a4ec017ebaf5f8c40832742148d.png"}}]);