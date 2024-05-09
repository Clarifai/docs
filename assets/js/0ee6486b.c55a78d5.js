"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4113],{85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(86010);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>b});var a=t(87462),o=t(67294),i=t(86010),r=t(12466),l=t(16550),s=t(91980),u=t(67392),c=t(50012);function d(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function m(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[s,u]=f({queryString:t,groupId:a}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Nk)(t);return[a,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),w=(()=>{const e=s??d;return p({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{w&&l(w)}),[w]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var w=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==l&&(d(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:p,onClick:m},r,{className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":l===n})}),t??n)})))}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function _(e){const n=h(e);return o.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},o.createElement(k,(0,a.Z)({},e,n)),o.createElement(y,(0,a.Z)({},e,n)))}function b(e){const n=(0,w.Z)();return o.createElement(_,(0,a.Z)({key:String(n)},e))}},42390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>V,contentTitle:()=>R,default:()=>G,frontMatter:()=>O,metadata:()=>U,toc:()=>z});var a=t(87462),o=(t(67294),t(3905)),i=t(74866),r=t(85162),l=t(90814);const s='from clarifai.client.workflow import Workflow\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n\n# Initialize the workflow_url\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Text-Moderation"\ntext_classfication_workflow = Workflow(\n    url= workflow_url , pat="YOUR_PAT"\n)\nraw_text = b"I love your product very much"\nresult = text_classfication_workflow.predict_by_bytes(raw_text, input_type="text")\nprint(result.results[0].outputs[0].data)',u='from clarifai.client.workflow import Workflow\n\n\nworkflow_url = "https://clarifai.com/clarifai/Text/workflows/summary"\n# creating the workflow\ntext_summarization_workflow = Workflow(\n    url= workflow_url, pat="YOUR_PAT"\n)\n# initialize the input text (minimum 200 characters)\ntext = b"""The word pollution was derived from the Latin word pollution, which means to make dirty. Pollution is the process of making the environment pollute the water and the air by adding harmful substances. Pollution causes an imbalance in the environment. This imbalance threatened the very survival of all forms of life. It\'s a threat to the whole world. India ranks at the bottom of 125 of the 132 countries in the 2012 Environmental Performance Index. This report is produced by researchers at Yale and Columbia University in association with the World Economic Forum.\n\nPollution of the environment is a serious problem of industrialized societies. Industrial development and the green revolution have had a negative impact on the environment. People have converted the life support system of all living people into their own resources and have greatly disrupted the natural ecological balance. Serious degradation and depletion have been caused due to overuse, abuse and mismanagement of resources to meet human greed."""\n\n\nresult = text_summarization_workflow.predict_by_bytes(text, input_type="text")\nprint(result.results[0].outputs[0].data.text.raw)\n',c='from clarifai.client.workflow import Workflow\n\n\nworkflow_url = "https://clarifai.com/clarifai/Text/workflows/text-generation"\n# Creating the workflow\ntext_generation_workflow = Workflow(\n    url=workflow_url,\n    pat="YOUR_PAT",\n)\n\n# getting the prediction\nresult = text_generation_workflow.predict_by_bytes(\n    b"Good Morning! I think it\'s going to be a great day!", input_type="text"\n)\nprint(result.results[0].outputs[0].data.text.raw)',d='from clarifai.client.workflow import Workflow\n\nimage_url =     "https://cdn-bfgco.nitrocdn.com/PLGJnButkKeCQigeKyiwHwnQLZJDOQZI/assets/images/optimized/rev-96fa12a/delamere.com/wp-content/uploads/2022/02/Picture1-1024x683.jpg"\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Moderation"\n# Creating the workflow\nimage_classifcation_workflow = Workflow(\n    url=workflow_url, pat="YOUR_PAT"\n)\n\n# Getting the predictions\nresult = image_classifcation_workflow.predict_by_url(image_url ,\n    input_type="image",\n)\nprint(result.results[0].outputs[0].data)',m='from clarifai.client.workflow import Workflow\nimport cv2\n\n\nimage_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/general-elephants.jpg"\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Visual-Segmenter"\n# Creating the workflow\nimage_segmentation_workflow = Workflow(\n    url=workflow_url, pat="YOUR_PAT"\n)\n# Getting the predictions\nresult = image_segmentation_workflow.predict_by_url(\nimage_url ,\n    input_type="image",\n)\nim_b = result.results[0].outputs[0].data.regions[0].region_info.mask.image.base64\nimage_np = np.frombuffer(im_b, np.uint8)\nimg_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)\n# Display the image\nplt.axis("off")\nplt.imshow(img_np[..., ::-1])\n',p='from clarifai.client.workflow import Workflow\nfrom clarifai.client.user import User\n\n# Your PAT (Personal Access Token) can be found in the Account\'s Security section\n# Specify the correct user_id/app_id pairings\n# Since you\'re making inferences outside your app\'s scope\nUSER_ID = "user_id"\nAPP_ID = "app_id"\n\napp = User(user_id=USER_ID, pat="YOUR_PAT").create_app(\n    app_id=APP_ID, base_workflow="Empty"\n)\nimage_url =  "https://s3.amazonaws.com/samples.clarifai.com/ocr_img_00417302.jpg"\n# create a yaml file specifying the workflow structure\n# eg:\n"""language_aware_ocr.yml\nworkflow:\n  id: wf-ocr\n  nodes:\n    - id: ocr-workflow\n      model:\n          model_id: language-aware-multilingual-ocr-multiplex\n\n    - id: text-aggregator\n      model:\n          model_id: text-aggregation\n          model_type_id: text-aggregation-operator\n          output_info:\n            params:\n              avg_word_width_window_factor: 2.0\n              avg_word_height_window_factor: 1.0\n\n      node_inputs:\n        - node_id: ocr-workflow\n\n    - id: language-id-operator\n      model:\n          model_id: language-id\n          model_type_id: language-id-operator\n          output_info:\n            params:\n              library: "fasttext"\n              topk: 1\n              threshold:  0.1\n              lowercase: true\n\n      node_inputs:\n        - node_id: text-aggregator\n\n\n"""\n\n\nocr_workflow = app.create_workflow(config_filepath="configs/language_aware_ocr.yml")\nprediction = ocr_workflow.predict_by_url(\n   image_url ,\n    input_type="image",\n)\n\n# Get workflow results\nprint(prediction.results[0].outputs[-1].data)\n',f='from clarifai.client.workflow import Workflow\nimport cv2\n\n\nworkflow_url ="https://clarifai.com/clarifai/Visual/workflows/image-generation"\n# Creating the workflow\nimage_generation_workflow = Workflow(\n    url=workflow_url,\n    pat="YOUR_PAT",\n)\n\n# Getting the predictions\nresult = image_generation_workflow.predict_by_bytes(\n    b"cat with a hat", input_type="text"\n)\n# Extract the base64-encoded image data from the result object\nim_b = result.results[0].outputs[0].data.image.base64\n# Convert the base64-encoded image data to a NumPy array of uint8 values\nimage_np = np.frombuffer(im_b, np.uint8)\n# Decode the NumPy array to obtain the image in OpenCV format (BGR color)\nimg_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)\n\n# Display the image\nplt.axis("off")\nplt.imshow(img_np[..., ::-1])\n',h='from clarifai.client.workflow import Workflow\nimport cv2\n\n\n\nworkflow_url = "https://clarifai.com/clarifai/Visual/workflows/upscale-workflow"\nimage_url = "https://s3.amazonaws.com/samples.clarifai.com/featured-models/image-captioning-statue-of-liberty.jpeg"\n\n# Creating the workflow\nimage_upscale_workflow = Workflow(\n    url=workflow_url,\n    pat="YOUR_PAT",\n)\n\n# Getting the predictions\nresult = image_upscale_workflow.predict_by_url(\n    image_url ,\n    input_type="image",\n)\n\nim_b = result.results[0].outputs[0].data.image.base64\nimage_np = np.frombuffer(im_b, np.uint8)\nimg_np = cv2.imdecode(image_np, cv2.IMREAD_COLOR)\n# Display the image\nplt.axis("off")\nplt.imshow(img_np[..., ::-1])',w='from clarifai.client.workflow import Workflow\n\n\nworkflow_url = "https://clarifai.com/clarifai/Text/workflows/text-to-audio"\n# Creating thr workflow\ntext_to_audio_workflow = Workflow(\n    url=workflow_url,\n    pat="YOUR_PAT",\n)\n\n# Getting the predictions\nresult = text_to_audio_workflow.predict_by_bytes(\n    b"I love your product very much", input_type="text"\n)\n\n# Save the audio file\nwith open("output_audio.wav", mode="bx") as f:\n    f.write(result.results[0].outputs[0].data.audio.base64)',g='from clarifai.client.user import User\n\n\n# Create a new app (replace USER_ID and APP_ID with your own)\napp = User(user_id="user_id", pat="YOUR_PAT").create_app(\n    app_id="APP_ID", base_workflow="Empty"\n)\n# Create ASR-Sentiment workflow\nasr_sentiment_workflow = app.create_workflow(\n    config_filepath="configs/asr_sentiment.yml"\n)\n\naudio_url = "https://s3.amazonaws.com/samples.clarifai.com/GreatPresentation2.wav"\n\n# Infer workflow on an audio input\nprediction = asr_sentiment_workflow.predict_by_url(\n    audio_url,\n    input_type="audio",\n)\n\n# Get workflow results\nprint(prediction.results[0].outputs[-1].data)\n',k='from clarifai.client.workflow import Workflow\n\n\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Face"\nimage_url = "https://samples.clarifai.com/face-det.jpg"\n# creating the workflow\nface_search_workflow = Workflow(\n    url=workflow_url, pat="YOUR_PAT"\n)\n\n# Getting the predictions\nresult = face_search_workflow.predict_by_url(\n    url=image_url, input_type="image"\n)\n',y='from clarifai.client.workflow import Workflow\n\n\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/General-Detection"\nvideo_url = "https://samples.clarifai.com/beer.mp4"\n# Creating the workflows\nobject_search_workflow = Workflow(\n    url=workflow_url, pat="YOUR_PAT"\n)\n# getting the predictions\nresult = object_search_workflow.predict_by_url(\n    url=video_url, input_type="video"\n)\nprint(result.results[0].outputs[-1].data)',_='from clarifai.client.workflow import Workflow\n\n\n# input text\ntext = b"""The word pollution was derived from the Latin word pollution, which means to make dirty. Pollution is the process of making the environment pollute the water and the air by adding harmful substances. Pollution causes an imbalance in the environment. This imbalance threatened the very survival of all forms of life. It\'s a threat to the whole world. India ranks at the bottom of 125 of the 132 countries in the 2012 Environmental Performance Index. This report is produced by researchers at Yale and Columbia University in association with the World Economic Forum.\nPollution of the environment is a serious problem of industrialized societies. Industrial development and the green revolution have had a negative impact on the environment. People have converted the life support system of all living people into their own resources and have greatly disrupted the natural ecological balance. Serious degradation and depletion have been caused due to overuse, abuse and mismanagement of resources to meet human greed."""\n\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Language-Understanding"\n# Creating the workflow\ntext_embedding_workflow = Workflow(\n    url= workflow_url,\n    pat="YOUR_PAT",\n)\n\n\n\n# getting the predictions\nresult = text_embedding_workflow.predict_by_bytes(text, input_type="text")\nprint(result.results[0].outputs[-1].data)',b='from clarifai.client.input import Inputs\nfrom clarifai.client.workflow import Workflow\n\n# setting up input image and prompt\nprompt = "What time of day is it?"\nimage_url = "https://samples.clarifai.com/metro-north.jpg"\n\nworkflow_url = "https://clarifai.com/clarifai/Visual/workflows/multimodal-to-text"\n\nmulti_input = Inputs.get_multimodal_input(input_id="", image_url=image_url, raw_text=prompt)\n\n# Creating the workflow\ntext_embedding_workflow = Workflow(\n    url=workflow_url,\n    pat="YOUR_PAT",\n)\n\n# Getting the predictions\nresult = text_embedding_workflow.predict(\n    inputs=[\n        multi_input\n    ]\n)\nprint(result.results[0].outputs[-1].data)',v='# Create or load an app\n\n\nfrom clarifai.client.user import User\nfrom clarifai.client.app import App\n\n\n# Create or load app (replace USER_ID and APP_ID with your own)\nAPP_ID = "APP_ID"\nUSER_ID="USER_ID"\ntry:\n app = User(user_id=USER_ID).create_app(app_id=APP_ID, base_workflow="Empty")\nexcept Exception as e:\n app = App(app_id=APP_ID, user_id=USER_ID)\n\n\n# # Create workflow from yaml file\n\n\n"""bytetrack.yaml\nworkflow:\n id: demo-bytetrack\n nodes:\n   - id: object-detection\n     model:\n       user_id: clarifai\n       app_id: main\n       model_id: person-vehicle-detection-yolov5\n   - id: track\n     model:\n       model_id: "byte-tracker"\n       model_type_id: "byte-tracker"\n       output_info:\n         params:\n           min_visible_frames: 1\n           max_disappeared: 30\n           confidence_thresh:  0.1\n     node_inputs:\n       - node_id: object-detection\n"""\n\n\nworkflow = app.create_workflow(config_filepath="./bytetrack.yaml")\n\n\nresult = workflow.predict_by_url("https://samples.clarifai.com/beer.mp4", input_type="video")\nprint(result.results[0].outputs[-1].data)\n',x='from clarifai.client.input import Inputs\nfrom clarifai.client.model import Model\nfrom clarifai.client.workflow import Workflow\n\nmodel_url = "https://clarifai.com/clarifai/main/models/general-image-recognition"\nimage_url = "https://samples.clarifai.com/metro-north.jpg"\n\n# here is an example of creating an input proto list of size 32\nproto_list=[]\nfor i in range(0,32):\n    proto_list.append(Inputs.get_input_from_url(input_id = f\'demo_{i}\', image_url=image_url))\n\n\nworkflow_url = "https://clarifai.com/clarifai/main/workflows/Moderation"\n# Creating the workflow\nimage_classifcation_workflow = Workflow(\n    url=workflow_url, pat="YOUR_PAT"\n)\n\n# Getting the predictions\nresult = image_classifcation_workflow.predict(proto_list)\nprint(len(result.results))',T='concepts {\n\n  id: "ai_pkltpBZ7"\n\n  name: "toxic"\n\n  value: 0.996599138\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_PlX1h51x"\n\n  name: "insult"\n\n  value: 0.515220046\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_jf9vs404"\n\n  name: "obscene"\n\n  value: 0.0849464387\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_2Dv0D4Nm"\n\n  name: "identity_hate"\n\n  value: 0.0308352802\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n...\n\n  value: 0.00677669281\n\n  app_id: "main"\n\n}',I='- Pollution, taken from the Latin word meaning "to make dirty", is the act of using harmful substances to dirty the air and water around us, to the point where it threatens all life forms\n\n- India ranks terribly low on the Environmental Performance Index, an evaluation of countries\' environmental statuses, produced by researchers at Yale and Columbia University in collaboration with the World Economic Forum\n\n- While pollution is a problem for all societies, industrialized societies are particularly afflicted due to the further damage industrial development has caused to the environment\n\n- However, the worst impact of pollution may be yet to come, as warns the author, and the best course of action going forward needs to be evaluated. \n\nWould you like help with anything else regarding this summary?',P="Good morning! I'm glad to hear you're starting the day with such a positive attitude. How can I assist you today to make it even better?\n",C='concepts {\n\n  id: "ai_8QQwMjQR"\n\n  name: "drug"\n\n  value: 0.99999994\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_QD1zClSd"\n\n  name: "safe"\n\n  value: 4.93858607e-08\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_V76bvrtj"\n\n  name: "explicit"\n\n  value: 3.21394289e-09\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n  id: "ai_kBBGf7r8"\n\n  name: "gore"\n\n  value: 1.82284843e-09\n\n  app_id: "main"\n\n}\n\nconcepts {\n\n...\n\n  value: 8.18517032e-10\n\n  app_id: "main"\n\n}',E='2024-01-11 09:09:54 INFO     clarifai:  wf-ocr Workflow is still deploying, please wait...           workflow.py:89\n\nINFO:clarifai:wf-ocr Workflow is still deploying, please wait...\n\n2024-01-11 09:10:57 INFO     clarifai:  wf-ocr Workflow is still deploying, please wait...           workflow.py:89\n\nINFO:clarifai:wf-ocr Workflow is still deploying, please wait...\n\ntext {\n\n  raw: "H WerP\\nRADOAS TESTXIT\\nTRRTESTINCEERINCMODEB\\nEPAGSTED\\nONETIMEIISE\\nDITED1YEARWPRRNTY"\n\n  text_info {\n\n    encoding: "UnknownTextEnc"\n\n  }\n\n}',A='concepts {\n\n  id: "LABEL_2"\n\n  name: "LABEL_2"\n\n  value: 0.9802844524383545\n\n  app_id: "text-classification"\n\n}\n\nconcepts {\n\n  id: "LABEL_1"\n\n  name: "LABEL_1"\n\n  value: 0.017947228625416756\n\n  app_id: "text-classification"\n\n}\n\nconcepts {\n\n  id: "LABEL_0"\n\n  name: "LABEL_0"\n\n  value: 0.0017683181213214993\n\n  app_id: "text-classification"\n\n}',Z='regions {\n\n  id: "e2cb37cbc6a0e59f7afc4d74b55ecb91"\n\n  region_info {\n\n    bounding_box {\n\n      top_row: 0.265738964\n\n      left_col: 0.189666823\n\n      bottom_row: 0.519693851\n\n      right_col: 0.326894283\n\n    }\n\n  }\n\n  data {\n\n    clusters {\n\n      id: "428_280"\n\n      projection: -0.032409668\n\n      projection: 0.20954895\n\n    }\n\n  }\n\n}\n\nregions {\n\n  id: "abf63d045dae71ef5c6532e8edfda65f"\n\n  region_info {\n\n    bounding_box {\n\n      top_row: 0.174794614\n\n      left_col: 0.665749371\n\n      bottom_row: 0.395655245\n\n...\n\n      projection: -0.0704193115\n\n      projection: -0.0369262695\n\n    }\n\n  }\n\n}\n',B='frames {\n\n  frame_info {\n\n    time: 500\n\n  }\n\n  data {\n\n  }\n\n  id: "faa9f3d5c8569123d8bea365ea478031"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 1\n\n    time: 1500\n\n  }\n\n  data {\n\n    regions {\n\n      id: "c58812cf4c3066e55fb16532dfde6986"\n\n      region_info {\n\n        bounding_box {\n\n          top_row: 0.0844013914\n\n          bottom_row: 1\n\n          right_col: 0.858514369\n\n        }\n\n      }\n    }\n    \n    \n    }\n}',D='clusters {\n\n  id: "24_21"\n\n  projection: 0.203612357\n\n  projection: -0.0755017698\n\n}',W='\ntext {\n\n  raw: "Based on the lighting and the sky\\\'s color in the image, it appears to be either dawn or dusk. The sky has a mix of light and dark hues, which is typical during twilight hours when the sun is below the horizon and the light is diffused. However, without additional context, it\\\'s not possible to determine with certainty whether it\\\'s morning or evening. The presence of snow on the ground suggests that it might be during the winter months when the days are shorter."\n\n  text_info {\n\n    encoding: "UnknownTextEnc"\n\n  }\n\n}',N='frames {\n\n  frame_info {\n\n    time: 500\n\n  }\n\n  data {\n\n    regions {\n\n      id: "172c80386cbad83149135e715200f5a8"\n\n      region_info {\n\n        bounding_box {\n\n          top_row: 0.6157978773117065\n\n          left_col: 0.45200759172439575\n\n          bottom_row: 0.6784101724624634\n\n          right_col: 0.49515417218208313\n\n        }\n\n      }\n\n      data {\n\n        concepts {\n\n          id: "ai_BPXQSP1m"\n\n          name: "vehicle"\n\n          value: 0.2520264685153961\n\n          app_id: "main"\n\n        }\n\n      }\n\n      value: 0.2520264685153961\n\n    }\n\n  }\n\n  id: "faa9f3d5c8569123d8bea365ea478031"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 1\n\n    time: 1500\n\n  }\n\n  data {\n\n  }\n\n  id: "8e5f8672bdda2f2682d59ccc019d48c0"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 2\n\n    time: 2500\n\n  }\n\n  data {\n\n  }\n\n  id: "3f4cd8b6cbe2361de2d3a3f84906723c"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 3\n\n    time: 3500\n\n  }\n\n  data {\n\n  }\n\n  id: "049f7331f17764126fa433ccc7eb27a6"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 4\n\n    time: 4500\n\n  }\n\n  data {\n\n  }\n\n  id: "a815862119825cfb037834ec5dc24619"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 5\n\n    time: 5500\n\n  }\n\n  data {\n\n  }\n\n  id: "14572f138018d23fcd39a87f0c51880e"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 6\n\n    time: 6500\n\n  }\n\n  data {\n\n  }\n\n  id: "7790d9923639183be7213e8330736ea5"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 7\n\n    time: 7500\n\n  }\n\n  data {\n\n  }\n\n  id: "32224efe9c43139c9f3070930bae4e6c"\n\n}\n\nframes {\n\n  frame_info {\n\n    index: 8\n\n    time: 8500\n\n  }\n\n  data {\n\n  }\n\n  id: "0c4dd5d602afa6754bcfd441998412af"\n\n}\n\ntracks {\n\n  id: "1"\n\n  time_info {\n\n  }\n\n}',S="32",O={},R="Inference from Workflows",U={unversionedId:"python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/README",id:"python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/README",title:"Inference from Workflows",description:"Learn how to perform predictions with workflows using  Clarifai Python SDK",source:"@site/docs/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/README.mdx",sourceDirName:"python-sdk/Building-Workflow-Graphs/Inference-from-Workflows",slug:"/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/",permalink:"/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building Workflow Graphs",permalink:"/python-sdk/Building-Workflow-Graphs/"},next:{title:"Model Training Tutorial",permalink:"/python-sdk/Model-Training-Tutorial/"}},V={},z=[{value:"Text Classifier",id:"text-classifier",level:2},{value:"Text to Text - Summarization",id:"text-to-text---summarization",level:2},{value:"Text to Text - Generation",id:"text-to-text---generation",level:2},{value:"Visual Classifier",id:"visual-classifier",level:2},{value:"Visual Segmenter",id:"visual-segmenter",level:2},{value:"Image to Text",id:"image-to-text",level:2},{value:"Text to Image",id:"text-to-image",level:2},{value:"Image to Image",id:"image-to-image",level:2},{value:"Text to Audio",id:"text-to-audio",level:2},{value:"Audio to Text",id:"audio-to-text",level:2},{value:"Visual Detector - Face search",id:"visual-detector---face-search",level:2},{value:"Visual Detector - Object Search",id:"visual-detector---object-search",level:2},{value:"Text to Embedding",id:"text-to-embedding",level:2},{value:"Multimodal",id:"multimodal",level:2},{value:"Visual Detector",id:"visual-detector",level:2},{value:"Batch Predict - Workflows",id:"batch-predict---workflows",level:2}],L={toc:z},j="wrapper";function G(e){let{components:n,...t}=e;return(0,o.kt)(j,(0,a.Z)({},L,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"inference-from-workflows"},"Inference from Workflows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn how to perform predictions with workflows using  Clarifai Python SDK")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Experience streamlined and powerful inference capabilities through Clarifai's Python SDK when working with workflows. Unleash the full potential of your models by seamlessly integrating them into your workflows to obtain insightful predictions and enhance your data processing pipelines.By effortlessly integrating your models into workflows, you gain access to a streamlined process that delivers insightful predictions with minimal friction. Clarifai's Python SDK ensures a smooth experience, allowing you to effortlessly embed models into your applications. This not only enhances the predictive capabilities of your models but also optimizes the overall efficiency of your data processing pipelines."),(0,o.kt)("p",null,"The below inference examples are reference implementation that can be extended or reused for respective task based on model types."),(0,o.kt)("h2",{id:"text-classifier"},"Text Classifier"),(0,o.kt)("p",null,"The Predict API in the Clarifai Python SDK empowers users to seamlessly perform text classification through a pre-built workflow tailored specifically for classification tasks. Use the capabilities of the Predict API to effortlessly categorize and analyze text, leveraging a robust and efficient classification model for enhanced accuracy and ease of use."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},s))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},T)),(0,o.kt)("h2",{id:"text-to-text---summarization"},"Text to Text - Summarization"),(0,o.kt)("p",null,"Through the Predict API, you can seamlessly integrate a text summarization model into your workflow, enabling efficient extraction of key insights from extensive textual content. Streamline the summarization process and enhance the effectiveness of your applications with the powerful capabilities of Clarifai's Text Summarization model."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},u))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},I)),(0,o.kt)("h2",{id:"text-to-text---generation"},"Text to Text - Generation"),(0,o.kt)("p",null,"With our Predict API, you can seamlessly generate textual content by providing a prompt as input to a workflow that incorporates a powerful text generation model. This feature allows you to use the capabilities of state-of-the-art language models, enabling you to dynamically generate text for a variety of applications, from creative writing to automated content creation."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},c))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},P)),(0,o.kt)("h2",{id:"visual-classifier"},"Visual Classifier"),(0,o.kt)("p",null,"Effortlessly conduct image classification through the Predict API by seamlessly integrating with a workflow designed around powerful classification models. This streamlined process empowers users to harness the capabilities of classification models, enabling accurate and efficient categorization of images."),(0,o.kt)("p",null,"Visit this ",(0,o.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/models?page=1&perPage=24&filterData=%5B%7B%22field%22%3A%22model_type_id%22%2C%22value%22%3A%5B%22visual-classifier%22%5D%7D%5D"},"link")," to view the available models for this use case."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},d))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},C)),(0,o.kt)("h2",{id:"visual-segmenter"},"Visual Segmenter"),(0,o.kt)("p",null,"By leveraging the Predict API, you can seamlessly integrate image segmentation models into your workflow. This powerful functionality allows you to precisely categorize different regions within an image, unlocking enhanced capabilities for object identification, analysis, and understanding."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},m))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Image Output"),(0,o.kt)("img",{src:"/img/python-sdk/visual_seg.png",width:"500",height:"500"})),(0,o.kt)("h2",{id:"image-to-text"},"Image to Text"),(0,o.kt)("p",null,"By leveraging the Predict  API, you can effortlessly integrate OCR capabilities into your applications through a streamlined workflow that involves an OCR model. This functionality allows you to extract and interpret text from images, empowering your applications to recognize and process textual information efficiently."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},p))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},E)),(0,o.kt)("h2",{id:"text-to-image"},"Text to Image"),(0,o.kt)("p",null,"Create captivating visuals effortlessly with the help of Predict API. The Image Generation feature empowers developers to seamlessly generate images based on textual prompts through a streamlined workflow utilizing the powerful text-to-image model."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},f))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Image Output"),(0,o.kt)("img",{src:"/img/python-sdk/TI.png",width:"500",height:"500"})),(0,o.kt)("h2",{id:"image-to-image"},"Image to Image"),(0,o.kt)("p",null,"By leveraging our Predict  API, you can seamlessly enhance the quality of any image through a streamlined workflow featuring our state-of-the-art upscaling model. Empower your applications with higher-resolution visuals, delivering a superior visual experience to your users."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},h))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Image Output"),(0,o.kt)("img",{src:"/img/python-sdk/II.png",width:"500",height:"500"})),(0,o.kt)("h2",{id:"text-to-audio"},"Text to Audio"),(0,o.kt)("p",null,"Leverage the power of the Predict API to seamlessly transform text into audio. This process involves submitting the text as input to a dedicated workflow that incorporates a state-of-the-art text-to-speech model. By integrating this feature, you can effortlessly generate high-quality audio outputs, expanding the scope of your applications and enhancing the overall user experience."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},w))),(0,o.kt)("h2",{id:"audio-to-text"},"Audio to Text"),(0,o.kt)("p",null,"With the Clarifai Predict API, seamlessly convert audio to text by incorporating it as input to a dedicated speech-to-text model within a workflow. Effortlessly use the capabilities of Clarifai's advanced technology to transcribe audio content, enabling a wide range of applications such as transcription services, voice command recognition, and more."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},g))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},A)),(0,o.kt)("h2",{id:"visual-detector---face-search"},"Visual Detector - Face search"),(0,o.kt)("p",null,"This workflow seamlessly integrates detection, recognition, and embedding processes to yield precise face landmarks. This comprehensive approach not only identifies faces but also extracts meaningful embeddings, empowering users to conduct efficient visual searches based on the unique characteristics captured within the detected faces."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},k))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},Z)),(0,o.kt)("h2",{id:"visual-detector---object-search"},"Visual Detector - Object Search"),(0,o.kt)("p",null,"Leverage the Predict API to detect a wide array of common objects within images, and use the potential of general embeddings to enable efficient and accurate visual search on identified regions."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},y))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},B)),(0,o.kt)("h2",{id:"text-to-embedding"},"Text to Embedding"),(0,o.kt)("p",null,"Incorporate the power of embeddings and clustering for comprehensive text processing by seamlessly integrating the respective nodes within your workflow. This dynamic combination allows you to enhance the understanding and organization of diverse textual data, unlocking a lot of possibilities for advanced language analysis and categorization."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},_))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},D)),(0,o.kt)("h2",{id:"multimodal"},"Multimodal"),(0,o.kt)("p",null,"Seamlessly leverage the power of multimodal inputs within your workflows using the Clarifai Predict API. With this capability, you can effortlessly transmit data in various modalities, such as text, images, or a combination of both, to a workflow equipped with a compatible model."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},b))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},W)),(0,o.kt)("h2",{id:"visual-detector"},"Visual Detector"),(0,o.kt)("p",null,"This workflow enables you to seamlessly detect a diverse range of common objects within a video, providing precise information about their location. The Predict API  processes the video frames and generates regions of interest, outlining areas within each frame that potentially contain the identified objects."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},v))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},N)),(0,o.kt)("h2",{id:"batch-predict---workflows"},"Batch Predict - Workflows"),(0,o.kt)("p",null,"Efficiently process multiple inputs in a single request by leveraging the Predict API's batch prediction feature in workflows. This allows you to streamline the prediction process, saving time and resources. Simply submit a batch of inputs to the model, and receive comprehensive predictions in return."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The batch size should not exceed 32.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},x))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)(l.Z,{className:"language-text",mdxType:"CodeBlock"},S)))}G.isMDXComponent=!0}}]);