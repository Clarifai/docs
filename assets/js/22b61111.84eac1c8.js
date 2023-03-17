"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34836:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={description:"(Beta) Train the entire graph for your custom model",sidebar_position:5},r="Deep Training",l={unversionedId:"community/model/deep-training",id:"community/model/deep-training",title:"Deep Training",description:"(Beta) Train the entire graph for your custom model",source:"@site/docs/community/model/deep-training.md",sourceDirName:"community/model",slug:"/community/model/deep-training",permalink:"/community/model/deep-training",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"(Beta) Train the entire graph for your custom model",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Model Types",permalink:"/community/model/model-types"},next:{title:"Model Training and Evaluation FAQs",permalink:"/community/model/training-evaluation-faqs"}},s={},p=[{value:"Template Types",id:"template-types",level:2},{value:"Visual Classifier",id:"visual-classifier",level:3},{value:"Visual Detector",id:"visual-detector",level:3},{value:"Visual Embedder",id:"visual-embedder",level:3},{value:"Hyperparameters",id:"hyperparameters",level:2},{value:"Create your Deep Trained Model",id:"create-your-deep-trained-model",level:2},{value:"Create App and Upload Inputs",id:"create-app-and-upload-inputs",level:4},{value:"Create Concepts and Label Inputs",id:"create-concepts-and-label-inputs",level:4},{value:"Model Mode",id:"model-mode",level:4},{value:"Create the Custom Model you Need",id:"create-the-custom-model-you-need",level:4},{value:"Configure Your Model",id:"configure-your-model",level:4},{value:"Train Your Model",id:"train-your-model",level:4},{value:"Job Cancellation",id:"job-cancellation",level:4}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deep-training"},"Deep Training"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"(Beta) Train the entire graph for your custom model")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Clarifai offers a variety of pre-built models that are designed to help you create AI solutions quickly and efficiently."),(0,o.kt)("p",null,"Clarifai models are the recommended starting point for many users because they offer incredibly fast training times, especially when you customize them using the Context-Based Classifier model type for transfer learning."),(0,o.kt)("p",null,"But there are many cases where accuracy and the ability to carefully target solutions takes priority over speed and ease of use. Additionally, you may need a model to learn new features not recognized by existing Clarifai Models. "),(0,o.kt)("p",null,'For such cases, it is possible to "deep train" your custom models and integrate them directly within your workflows.'),(0,o.kt)("p",null,"You might consider deep training if you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A custom tailored dataset")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accurate labels")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Expertise and time to fine tune models"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Deep training is in early access preview. To request access, ",(0,o.kt)("a",{parentName:"p",href:"https://www.clarifai.com/contact"},"contact us"),".")),(0,o.kt)("h2",{id:"template-types"},"Template Types"),(0,o.kt)("p",null,"You can take advantage of a variety of templates when building your deep trained models. Templates give you the control to choose the specific architecture used by your neural network, and also define a set of hyperparameters that you can use to fine-tune the way that your model learns."),(0,o.kt)("h3",{id:"visual-classifier"},"Visual Classifier"),(0,o.kt)("p",null,"Classification templates let you classify what is in your images or videos."),(0,o.kt)("h3",{id:"visual-detector"},"Visual Detector"),(0,o.kt)("p",null,"Detection templates make it easy to build models that can identify objects within a region of your images or videos. Detection models return concepts and bounding boxes."),(0,o.kt)("h3",{id:"visual-embedder"},"Visual Embedder"),(0,o.kt)("p",null,"Embedding models can be useful in their own right ","(","for applications like clustering and visual search",")",', or as an input to a machine learning model for a supervised task. In effect, embedding templates enable you to create your own "base models" that you can then use in your workflows.'),(0,o.kt)("h2",{id:"hyperparameters"},"Hyperparameters"),(0,o.kt)("p",null,"Deep training gives you the power to tune the hyperparameters that affect \u201chow\u201d your model learns. The model mode dynamically changes the available hyperparameters based on the template selected."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"average","_","horizontal","_","flips"),"\u2014Provides basic data augmentation for your dataset. If set to true, there is a 0.5 probability that current image and associated ground truth will flip horizontally."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"base","_","gradient","_","multiplier"),"\u2014This sets the learning rate of the pre-initialized base ","(",'also sometimes called "backbone"',")"," model that generates embeddings. Learning rate controls how the weights of our network are adjusted with respect to the loss gradient. The lower the value, the slower the trip along the downward slope. A low learning rate can help ensure that local minima are not missed, but can take a long time to converge, especially if the model gets stuck on a plateau region."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"batch","_","size"),"\u2014The number of images used to make updates to the model. Increased batch size allows for a better approximation of gradient over those samples. Batches allow for stochastic gradient descent, by choosing a random set of X images for each training update. You may want to increase batch size if the model is large and taking a long time to train. You also may want to increase the batch size if your total number of model concepts is larger than the batch size ","(","you may want to increase to around 2x the category count",")","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"detection","_","score","_","threshold"),"\u2014Only bounding boxes with a detection score above this threshold will be returned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"image","_","size"),"\u2014The size of images used for training. Images are scaled for efficient processing, and a lower number will take up less memory and run faster. A higher number will have more pixel information to train on and will increase accuracy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"init","_","epochs"),"\u2014The initial number of epochs before the first step/change in the ",(0,o.kt)("strong",{parentName:"li"},"lrate"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"logreg"),'\u2014Choose either "Logistic Regression" or "Softmax" as the activation function of the output layer. The default setting, 1, corresponds to Logistic Regression and will allow for multiple True concepts ',"(","i.e. P ",">"," 0.5",")",' to be predicted for a given input. Conversely, specify a value of 0 to implement Softmax if your concepts should be treated as "mutually exclusive" ',"(","i.e. only one concept could be correctly assigned to a given input",")",". This will result in each prediction output representing a discrete probability distribution ","(","i.e. all predicted values sum to 1",")","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lrate"),"\u2014The learning rate is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"num","_","epochs"),"\u2014An epoch is defined as one-pass over the entire dataset. If you increase it, it will take longer to train but it could make the model more robust."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"num","_","items","_","per","_","epoch"),'\u2014The number of training examples per "epoch". An epoch would be defined as one-pass over this amount of examples.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"per","_","128","_","lrate"),"\u2014Total change in ",(0,o.kt)("strong",{parentName:"li"},"lrate")," after 128 images processed. This is calculated as lrate = per","_","128","_","lrate ","*"," ","(","batch","_","size / 128",")","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"per","_","item","_","lrate"),"\u2014The rate that model weights are changed per item."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"step","_","epochs"),"\u2014The number of epochs between applications of the step/change in ",(0,o.kt)("strong",{parentName:"li"},"lrate")," scheduler."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"test","_","freq"),"\u2014The number of epochs should you run before evaluation of the test set. Increased frequency can allow for more granular testing but will extend processing time."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"use","_","perclass","_","regression"),"\u2014Enables box coordinate local regression on a per-class basis. When set to True there will be ",(0,o.kt)("inlineCode",{parentName:"li"},"num_classes")," sets of regressors for each anchor location, when set to False, there will be one coordinate regressor for each anchor location.")),(0,o.kt)("h2",{id:"create-your-deep-trained-model"},"Create your Deep Trained Model"),(0,o.kt)("p",null,"Creating and working with deep trained models is very similar to working with Clarifai models."),(0,o.kt)("p",null,"Let's demonstrate how you can create a deep trained model. "),(0,o.kt)("h4",{id:"create-app-and-upload-inputs"},"Create App and Upload Inputs"),(0,o.kt)("p",null,"Get started by creating your app and uploading inputs."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In general, deep trained models need more data than the ones trained on top of Clarifai models. For most applications, you\u2019ll need at least 1000 training inputs, but it could be much more than this depending on your specific use case.")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create an App")," button and provide the information required to create a new application."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create an app",src:a(15961).Z,width:"1889",height:"935"})),(0,o.kt)("p",null,"To upload inputs into your app, select the ",(0,o.kt)("strong",{parentName:"p"},"Inputs")," option on the collapsible left sidebar. Next, click the ",(0,o.kt)("strong",{parentName:"p"},"Upload Inputs")," button and upload the inputs you want to add to the app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload inputs",src:a(1452).Z,width:"1917",height:"863"})),(0,o.kt)("p",null,"The small window that pops up allows you to upload inputs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"upload inputs window",src:a(36244).Z,width:"1301",height:"805"})),(0,o.kt)("h4",{id:"create-concepts-and-label-inputs"},"Create Concepts and Label Inputs"),(0,o.kt)("p",null,"The process of creating concepts and labeling inputs is the same for deep trained models as for other Clarifai models."),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("strong",{parentName:"p"},"Show Upload Settings")," button on the small window that pops up when uploading inputs exposes a section that lets you create concepts and label inputs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Show Upload Settings",src:a(24595).Z,width:"1235",height:"691"})),(0,o.kt)("p",null,"The section allows you to add the following to your inputs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Datasets"),"\u2014A dataset is a set of data input examples for actions like training and evaluation. You can select a previously created dataset or create a new one. For this example, you may not provide it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Concepts"),"\u2014Adding concepts help in training your model. You can select a previously created concept or create a new one. For this example, create new concepts and label your image inputs with them."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Metadata"),"\u2014You can also add inputs with custom metadata, which can be searched or filtered. Metadata can be any arbitrary JSON. For this example, you may not provide it.")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Upload inputs")," button at the button of the pop-up window to finalize uploading your inputs."),(0,o.kt)("h4",{id:"model-mode"},"Model Mode"),(0,o.kt)("p",null,"Next, select the ",(0,o.kt)("strong",{parentName:"p"},"App Models")," option on the collapsible left sidebar to enter the model mode."),(0,o.kt)("h4",{id:"create-the-custom-model-you-need"},"Create the Custom Model you Need"),(0,o.kt)("p",null,"On the ensuing page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Model")," button on the top-right corner of the page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"create app models",src:a(95532).Z,width:"1883",height:"593"})),(0,o.kt)("p",null,"Next, on the page for choosing the type of model you want to create, select a ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Classifier"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Embedder"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Detector"),"."),(0,o.kt)("p",null,"For this example, let\u2019s choose a ",(0,o.kt)("inlineCode",{parentName:"p"},"Visual Classifier"),", which would classify images into set of concepts."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"choose visual classifier",src:a(26853).Z,width:"1539",height:"913"})),(0,o.kt)("h4",{id:"configure-your-model"},"Configure Your Model"),(0,o.kt)("p",null,"On the ensuing page, provide the details required to create the deep trained model."),(0,o.kt)("p",null,"For this example, let's provide the model id, select the concepts we created previously, and select a template name. You can also fill the other fields if you want to."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"configure model",src:a(31417).Z,width:"1471",height:"915"})),(0,o.kt)("p",null,"The pre-configured model template is essential for training with on your data. When you choose your deep training template, you will see the hyperparameters that are available within that template populated with default values. You can adjust these values as desired."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"template configuration",src:a(23421).Z,width:"1499",height:"885"})),(0,o.kt)("p",null,"After configuring the model, click the ",(0,o.kt)("strong",{parentName:"p"},"Create Model")," button at the bottom of the page."),(0,o.kt)("h4",{id:"train-your-model"},"Train Your Model"),(0,o.kt)("p",null,"Next, train your model by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Train Model")," button on the upper right-hand corner of the created model's page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"train model",src:a(72101).Z,width:"1889",height:"563"})),(0,o.kt)("p",null,"Deep training can take much longer time than custom training a model. Many hours are required to deep train models with large numbers of inputs and complex taxonomies. You can check the progress in the model details view and monitor the training as it continues."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"model training progress",src:a(16780).Z,width:"1570",height:"452"})),(0,o.kt)("p",null,"Once you've created and trained your new model, you can put it to work, such as by adding it to a workflow and using it in your app."),(0,o.kt)("h4",{id:"job-cancellation"},"Job Cancellation"),(0,o.kt)("p",null,"You can cancel a deep training job at any time by deleting the model version that you are training. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete model version",src:a(15037).Z,width:"1541",height:"309"})),(0,o.kt)("p",null,"Deep training is billed at an hourly rate and for cancelled jobs, you will be charged for the time that you've used to train your model. You can learn more about deep training pricing ",(0,o.kt)("a",{parentName:"p",href:"https://www.clarifai.com/pricing"},"here"),"."))}u.isMDXComponent=!0},26853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose_visual_classifier-a97c936e4afbf27ec4a2745fa986e1fa.png"},95532:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_create_model-5e2cf374cb72e96f06006713444b62d9.png"},15961:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_create_new_app-2cb7644e0c0ab6a0a29d4ca8545902c9.png"},24595:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_show_upload_settings-a983621643bece404140bf3be2152e94.png"},1452:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_model_upload_inputs-c396077c3018aecdcdffb645c2a110f1.png"},36244:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/custom_models_upload_inputs_window-94431637f720d8794b43cb98ef5a5426.png"},31417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deep_training_create_model-f37b65bdfd9831d71d61907325c16db1.png"},72101:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/deep_training_train_model-7854028c8cacc492c419b777129f8746.png"},15037:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete_model_version-966b342d63d90ab0474fd7cee4407f36.png"},16780:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/model_training_progress-660cca43282cbd594cc50fe4ef02d3b1.png"},23421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/template_configuration-32839484a23610f58485c45a6077a84c.png"}}]);