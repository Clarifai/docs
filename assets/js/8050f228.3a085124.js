"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7278],{32820:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>D,contentTitle:()=>k,default:()=>V,frontMatter:()=>I,metadata:()=>E,toc:()=>P});var n=t(74848),i=t(28453),s=t(11470),l=t(19365),r=t(21432);const o='from clarifai.client.user import User\n#replace your "user_id"\nclient = User(user_id="user_id")\napp = client.create_app(app_id="demo_train", base_workflow="Universal")',d="#importing load_module_dataloader for calling the dataloader object in dataset.py in the local data folder\nfrom clarifai.datasets.upload.utils import load_module_dataloader\n\n\n# Construct the path to the dataset folder\nmodule_path = os.path.join(os.getcwd().split('/models/model_train')[0], 'datasets/upload/image_classification/food-101')\n\n# Load the dataloader module using the provided function from your module\nfood101_dataloader = load_module_dataloader(module_path)\n\n# Create a Clarifai dataset with the specified dataset_id (\"image_dataset\")\ndataset = app.create_dataset(dataset_id=\"image_dataset\")\n\n# Upload the dataset using the provided dataloader and get the upload status\ndataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)\n",c="print(app.list_trainable_model_types())",u='MODEL_ID = "model_classifier"\nMODEL_TYPE_ID = "visual-classifier"\n# Create a model by passing the model name and model type as parameter\nmodel = app.create_model(model_id=MODEL_ID, model_type_id=MODEL_TYPE_ID)',m="print(model.list_training_templates())",h="import yaml\nYAML_FILE = 'mmclassification_efficientnet.yaml'\nmodel_params = model.get_params(template='MMClassification_EfficientNet', save_to=YAML_FILE)\n# Preview YAML content\nfile = open(YAML_FILE)\ndata = yaml.safe_load(file)\nprint(data)\n",p="file = open('models/model_train/saved_mmclassification_efficientnet.yaml')\ndata = yaml.safe_load(file)\nprint(data)\n",f="#Starting the training\nmodel_version_id = model.train(yaml_file='models/model_train/saved_mmclassification_efficientnet.yaml')\n#Checking the status of training\n#To store training logs in a file, fix training_logs param as True\nstatus = model.training_status(version_id=model_version_id,training_logs=False)\n",_="import cv2\nimport matplotlib.pyplot as plt\n\nIMAGE_PATH = os.path.join(os.getcwd().split('/models')[0],'datasets/upload/image_classification/food-101/images/hamburger/139558.jpg')\nmodel_prediction = model.predict_by_filepath(IMAGE_PATH, input_type=\"image\")\n\n#Display the model predictions\nimg = plt.imread(IMAGE_PATH)\nplt.axis('off')\nplt.imshow(img)\nfor concept in model_prediction.outputs[0].data.concepts:\n    print(concept.id,':',round(concept.value,2))",g="# Evaluate the model using the specified dataset ID and evaluation ID.\nmodel.evaluate(dataset_id='image_dataset', eval_id='one')\n\n\n# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.\nresult = model.get_eval_by_id(eval_id=\"one\")\n\n# Print a summary of the evaluation results stored in the variable 'result'.\nprint(result.summary)\n",v="# Load the dataloader module using the provided function from your module\nPATH=os.path.join(os.getcwd().split('/models/model_train')[0],'datasets/upload/data/images_test')\nfood101_dataloader = load_module_dataloader(PATH)\n\n# Create a Clarifai dataset with the specified dataset_id (\"image_dataset\")\ntest_dataset = app.create_dataset(dataset_id=\"image_dataset2\")\n\n# Upload the dataset using the provided dataloader and get the upload status\ntest_dataset.upload_dataset(dataloader=food101_dataloader, get_upload_status=True)\n\n# Evaluate the model using the specified dataset ID and evaluation ID.\nmodel.evaluate(dataset_id='image_dataset2',eval_id='two')\n\n\n# Retrieve the evaluation results using the specified evaluation ID and store it in the variable 'result'.\nresult=model.get_eval_by_id(\"two\")\n\nprint(result.summary)",x="from clarifai.utils.evaluation import EvalResultCompare\n\n# Initializing an object of the EvalResultCompare class\n# with specified models and datasets\neval_result = EvalResultCompare(models=[model], datasets=[dataset, test_dataset])\n\nprint(eval_result.detailed_summary())",y="['visual-classifier',\n 'visual-detector',\n 'visual-segmenter',\n 'visual-anomaly-heatmap',\n 'visual-embedder',\n 'clusterer',\n 'text-classifier',\n 'embedding-classifier',\n 'text-to-text']",b="['classification_inception_general_v1_3_transfer_embednorm',\n 'classification_basemodel_v1',\n 'classification_cifar10_v1',\n 'Clarifai_InceptionTransferEmbedNorm',\n 'Clarifai_ResNext',\n 'Clarifai_InceptionV2',\n 'Clarifai_InceptionBatchNorm',\n 'MMClassification',\n 'MMClassification_EfficientNet',\n 'MMClassification_ResNet_50_RSB_A1',\n 'MMClassification_ResNet_50']",j="{'dataset_id': '',\n 'dataset_version_id': '',\n 'concepts': [],\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'MMClassification_EfficientNet',\n  'seed': -1.0,\n  'num_gpus': 1.0,\n  'image_size': 336.0,\n  'batch_size': 4.0,\n  'num_epochs': 30.0,\n  'per_item_lrate': 0.000390625,\n  'weight_decay': 0.0001,\n  'momentum': 0.9,\n  'pretrained_weights': 'ImageNet-1k',\n  'flip_probability': 0.5,\n  'flip_direction': 'horizontal',\n  'concepts_mutually_exclusive': False},\n 'inference_params': {'select_concepts': []}}\n",A="{'dataset_id': 'image_dataset',\n 'dataset_version_id': '',\n 'concepts': ['id-ramen', 'id-prime_rib', 'id-hamburger', 'id-beignets'],\n 'train_params': {'invalid_data_tolerance_percent': 5.0,\n  'template': 'MMClassification_EfficientNet',\n  'seed': -1.0,\n  'num_gpus': 1.0,\n  'image_size': 336.0,\n  'batch_size': 4.0,\n  'num_epochs': 10.0,\n  'per_item_lrate': 0.000390625,\n  'weight_decay': 0.0001,\n  'momentum': 0.9,\n  'pretrained_weights': 'ImageNet-1k',\n  'flip_probability': 0.5,\n  'flip_direction': 'horizontal',\n  'concepts_mutually_exclusive': False},\n 'inference_params': {'select_concepts': []}}",T='code: MODEL_TRAINED\ndescription: "Model is trained and ready"',w="id-hamburger : 0.64\n\nid-ramen : 0.45\n\nid-prime_rib : 0.44\n\nid-beignets : 0.42",C="macro_avg_roc_auc: 0.9200000166893005\nmacro_std_roc_auc: 0.03399345278739929\nmacro_avg_f1_score: 0.6682435274124146\nmacro_std_f1_score: 0.08137183636426926\nmacro_avg_precision: 0.53125\nmacro_avg_recall: 0.949999988079071",M="macro_avg_roc_auc: 1.0\nmacro_avg_f1_score: 0.7916666865348816\nmacro_std_f1_score: 0.21650634706020355\nmacro_avg_precision: 0.7083333134651184\nmacro_avg_recall: 1.0",N="INFO:clarifai.utils.evaluation.helpers:Model visual_classifier_eval2/model_classifier/48ed4: retrieving {'binary_metrics': True} metrics of dataset: image_dataset2\n(        Concept  Accuracy (ROC AUC)  Total Labeled  Total Predicted  \\\n 0      id-ramen               0.933              5               12   \n 0  id-prime_rib               0.960              5                5   \n 0  id-hamburger               0.920              5                8   \n 0   id-beignets               0.867              5               12   \n 0      id-ramen               1.000              1                3   \n 0  id-prime_rib               1.000              1                1   \n 0  id-hamburger               1.000              1                1   \n 0   id-beignets               1.000              1                1   \n \n    True Positives  False Negatives  False Positives  Recall  Precision  \\\n 0               5                0                7     1.0     0.4167   \n 0               4                1                1     0.8     0.6667   \n 0               5                0                3     1.0     0.6250   \n 0               5                0                7     1.0     0.4167   \n 0               1                0                2     1.0     0.3333   \n 0               1                0                0     1.0     1.0000   \n 0               1                0                0     1.0     1.0000   \n 0               1                0                0     1.0     0.5000   \n \n          F1         Dataset  \n 0  0.588269  image_dataset3  \n 0  0.727293  image_dataset3  \n 0  0.769231  image_dataset3  \n 0  0.588269  image_dataset3  \n 0  0.499962  image_dataset2  \n 0  1.000000  image_dataset2  \n 0  1.000000  image_dataset2  \n 0  0.666667  image_dataset2  ,\n             Total Concept  Accuracy (ROC AUC)  Total Labeled  Total Predicted  \\\n 0  Dataset:image_dataset3                0.92             20               37   \n 0  Dataset:image_dataset2                1.00              4                6   \n \n    True Positives  False Negatives  False Positives  Recall  Precision  \\\n 0              19                1               18    0.95   0.531275   \n 0               4                0                2    1.00   0.708325   \n \n          F1  \n 0  0.681455  \n 0  0.829263  )",I={},k="Visual Classifier",E={id:"sdk/Model-Training-Tutorial/visual_classifier",title:"Visual Classifier",description:"Learn how to train a visual classifier using Clarifai SDKs",source:"@site/docs/sdk/Model-Training-Tutorial/visual_classifier.md",sourceDirName:"sdk/Model-Training-Tutorial",slug:"/sdk/Model-Training-Tutorial/visual_classifier",permalink:"/sdk/Model-Training-Tutorial/visual_classifier",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/Model-Training-Tutorial/visual_classifier.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text To Text",permalink:"/sdk/Model-Training-Tutorial/text_to_text"},next:{title:"Visual Detector",permalink:"/sdk/Model-Training-Tutorial/visual_detector"}},D={},P=[{value:"App Creation",id:"app-creation",level:2},{value:"Dataset Upload",id:"dataset-upload",level:2},{value:"Choosing The Model Type",id:"choosing-the-model-type",level:2},{value:"Model Creation",id:"model-creation",level:2},{value:"Template Selection",id:"template-selection",level:2},{value:"Setup Model Parameters",id:"setup-model-parameters",level:2},{value:"Initiate Model Training",id:"initiate-model-training",level:2},{value:"Model Prediction",id:"model-prediction",level:2},{value:"Model Evaluation",id:"model-evaluation",level:2}];function L(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components},{Details:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"visual-classifier",children:"Visual Classifier"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Learn how to train a visual classifier using Clarifai SDKs"})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(a.p,{children:["The Visual Classifier is a powerful component of the Clarifai platform designed for efficient and accurate image recognition. Leveraging advanced machine learning algorithms, the Visual Classifier allows users to train custom models tailored to specific visual recognition tasks. You can learn more about Visual Classifier ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/visual-classifier",children:"here"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"app-creation",children:"App Creation"}),"\n",(0,n.jsx)(a.p,{children:"The first part of model training includes the creation of an app under which the training process takes place."}),"\n",(0,n.jsx)(a.p,{children:"Here we are creating an app with the app id as \u201cdemo_train\u201d and the base workflow is set as \u201cUniversal\u201d. You can change the base workflows to Empty, Universal, Language Understanding, and General according to your use case."}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:o})})}),"\n",(0,n.jsx)(a.h2,{id:"dataset-upload",children:"Dataset Upload"}),"\n",(0,n.jsx)(a.p,{children:"The next step involves dataset upload. You can upload the dataset to your app so that the model accepts the data directly from the platform. The  data used for training in this tutorial is available in the examples repository you have cloned."}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:d})})}),"\n",(0,n.jsx)(a.p,{children:"If you have followed the steps correctly you should receive an output that looks like this,"}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)("img",{src:"/img/python-sdk/vc_du.png"})]}),"\n",(0,n.jsx)(a.h2,{id:"choosing-the-model-type",children:"Choosing The Model Type"}),"\n",(0,n.jsx)(a.p,{children:"Now let's list the all available trainable model types in the platform that you can use for your tasks,"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:c})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:y})]}),"\n",(0,n.jsxs)(a.p,{children:["Click ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/",children:"here"})," to know more about Clarifai Model Types."]}),"\n",(0,n.jsx)(a.h2,{id:"model-creation",children:"Model Creation"}),"\n",(0,n.jsx)(a.p,{children:"From the above list of model types we are going to choose visual-classifier as it is similar to our use case. Now let's create a model with the above model type."}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:u})})}),"\n",(0,n.jsx)(a.h2,{id:"template-selection",children:"Template Selection"}),"\n",(0,n.jsxs)(a.p,{children:["Inside the Clarifiai platform there is a template feature. Templates give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns. We are going to choose the ",(0,n.jsx)(a.code,{children:"'MMClassification_EfficientNet' "}),"template for training our model."]}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:m})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:b})]}),"\n",(0,n.jsx)(a.h2,{id:"setup-model-parameters",children:"Setup Model Parameters"}),"\n",(0,n.jsx)(a.p,{children:"You can save the model parameters into a YAML file so that it can passed on to the model while initiating training."}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:h})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:j})]}),"\n",(0,n.jsx)(a.p,{children:"You can edit the YAML file according to our needs and then load the files again for model training. Below is an example of the edits made to the YAML file,"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:p})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:A})]}),"\n",(0,n.jsx)(a.h2,{id:"initiate-model-training",children:"Initiate Model Training"}),"\n",(0,n.jsx)(a.p,{children:"We can initiate the model training by passing the YAML configuration file as parameter to the model.train(). The Clarifai SDKs also offers features like showing training status and saving training logs in a local file."}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsx)(a.p,{children:'If the status code is "MODEL-TRAINED", then the user can know the model is Trained and ready to use.'})}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:f})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:T})]}),"\n",(0,n.jsx)(a.h2,{id:"model-prediction",children:"Model Prediction"}),"\n",(0,n.jsx)(a.p,{children:"Since the model is trained and ready let\u2019s run some predictions to view the model performance,"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:_})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:w}),(0,n.jsx)("img",{src:"/img/python-sdk/vc_mp.png"})]}),"\n",(0,n.jsx)(a.h2,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,n.jsx)(a.p,{children:"Now let's evaluate the model using train and test datasets. First let's see the evaluation metrics for the training dataset,"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:g})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:C})]}),"\n",(0,n.jsx)(a.p,{children:"Before evaluating with a test dataset, we have to first upload the dataset using the data loader and then perform model evaluation,"}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:v})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:M})]}),"\n",(0,n.jsxs)(a.p,{children:["Finally let's compare the results from  multiple datasets using ",(0,n.jsx)(a.code,{children:"EvalResultCompare"})," feature from Clarifai SDKs to get a better understanding of the model's performance."]}),"\n",(0,n.jsx)(s.A,{children:(0,n.jsx)(l.A,{value:"python",label:"Python",children:(0,n.jsx)(r.A,{className:"language-python",children:x})})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Output"}),(0,n.jsx)(r.A,{className:"language-text",children:N})]})]})}function V(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(L,{...e})}):L(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>l});t(96540);var n=t(18215);const i={tabItem:"tabItem_Ymn6"};var s=t(74848);function l(e){let{children:a,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(i.tabItem,l),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>j});var n=t(96540),i=t(18215),s=t(23104),l=t(56347),r=t(205),o=t(57485),d=t(31682),c=t(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:i}}=e;return{value:a,label:t,attributes:n,default:i}}))}(t);return function(e){const a=(0,d.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function p(e){let{queryString:a=!1,groupId:t}=e;const i=(0,l.W6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(i.location.search);a.set(s,e),i.replace({...i.location,search:a.toString()})}),[s,i])]}function f(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,s=m(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:s}))),[d,u]=p({queryString:t,groupId:i}),[f,_]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,s]=(0,c.Dv)(t);return[i,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),g=(()=>{const e=d??f;return h({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),_(e)}),[u,_,s]),tabValues:s}}var _=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function x(e){let{className:a,block:t,selectedValue:n,selectValue:l,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const a=e.currentTarget,t=o.indexOf(a),i=r[t].value;i!==n&&(d(a),l(i))},u=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;a=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;a=o[t]??o[o.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:r.map((e=>{let{value:a,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function y(e){let{lazy:a,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function b(e){const a=f(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...a,...e}),(0,v.jsx)(y,{...a,...e})]})}function j(e){const a=(0,_.A)();return(0,v.jsx)(b,{...e,children:u(e.children)},String(a))}}}]);