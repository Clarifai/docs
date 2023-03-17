"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1603],{85162:(e,n,t)=>{t.d(n,{Z:()=>r});var o=t(67294),a=t(86010);const i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>b});var o=t(87462),a=t(67294),i=t(86010),r=t(12466),s=t(76775),l=t(91980),d=t(67392),u=t(50012);function c(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:a}}=e;return{value:n,label:t,attributes:o,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function _(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,i=p(e),[r,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!_({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:i}))),[l,d]=f({queryString:t,groupId:o}),[c,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,u.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:o}),w=(()=>{const e=l??c;return _({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{w&&s(w)}),[w]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!_({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var w=t(72389);const O="tabList__CuJ",h="tabItem_LNqP";function D(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),o=d[t].value;o!==s&&(c(n),l(o))},_=e=>{var n;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:r}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>u.push(e),onKeyDown:_,onClick:p},r,{className:(0,i.Z)("tabs__item",h,null==r?void 0:r.className,{"tabs__item--active":s===n})}),t??n)})))}function g(e){let{lazy:n,children:t,selectedValue:o}=e;if(t=Array.isArray(t)?t:[t],n){const e=t.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o}))))}function I(e){const n=m(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",O)},a.createElement(D,(0,o.Z)({},e,n)),a.createElement(g,(0,o.Z)({},e,n)))}function b(e){const n=(0,w.Z)();return a.createElement(I,(0,o.Z)({key:String(n)},e))}},41669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=t(87462),a=(t(67294),t(3905)),i=t(74866),r=t(85162),s=t(90814);const l={description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},d="Visual Text Recognition",u={unversionedId:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",id:"api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",title:"Visual Text Recognition",description:"Work with text in images, just like you work with encoded text.",source:"@site/docs/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough.md",sourceDirName:"api-guide/workflows/common-workflows",slug:"/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",permalink:"/api-guide/workflows/common-workflows/visual-text-recognition-walkthrough",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Work with text in images, just like you work with encoded text.",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Custom KNN Face Classifier Workflow",permalink:"/api-guide/workflows/common-workflows/knn-face-classifier-workflow-walkthrough"},next:{title:"Search, Sort, Filter, and Save",permalink:"/api-guide/search/"}},c={},p=[{value:"Building a VTR Workflow",id:"building-a-vtr-workflow",level:2}],_={toc:p};function f(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},_,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"visual-text-recognition"},"Visual Text Recognition"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Work with text in images, just like you work with encoded text")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Visual text recognition (VTR) helps you convert printed text in images and videos into machine-encoded text. You can input a scanned document, a photo of a document, a scene-photo ","(","such as the text on signs and billboards",")",", or text superimposed on an image ","(","such as in a meme",")",", and output the words and individual characters present in the images."),(0,a.kt)("p",null,'VTR lets you "digitize" text so that it can be edited, searched, stored, displayed, and analyzed.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(11553).Z,width:"1000",height:"562"})),(0,a.kt)("admonition",{title:"Note",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The current version of our VTR model is not designed for use with handwritten text or documents with tightly-packed text\u2014like you might see on the page of a novel, for example.\n::::"),(0,a.kt)("h2",{parentName:"admonition",id:"how-vtr-works"},"How VTR Works"),(0,a.kt)("p",{parentName:"admonition"},"VTR works by first detecting the location of text in your photos or video frames, then cropping the region where the text is present, and then finally running a specialized classification model that will extract text from the cropped image. To accomplish these different tasks, you will need to configure a workflow. "),(0,a.kt)("p",{parentName:"admonition"},"You will then add these three models to your workflow:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Visual Text Detection")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1.0 Cropper")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Visual Text Recognition")))),(0,a.kt)("p",null,"The initialization code used in the following example is outlined in detail on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."),"\n:::"),(0,a.kt)("h2",{id:"building-a-vtr-workflow"},"Building a VTR Workflow"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,a.kt)(s.Z,{className:"language-python",mdxType:"CodeBlock"},"###################################################################################\n# In this section, we set the user authentication, app ID, and the details of the \n# VTR Workflow we want to build. Change these strings to run your own example.\n##################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to build your own VTR Workflow\nWORKFLOW_ID = 'visual-text-recognition-id'\n\nWORKFLOWNODE_ID_1 = 'detect-concept'\nMODEL_ID_1 = '2419e2eae04d04f820e5cf3aba42d0c7'\nMODEL_VERSION_ID_1 = '75a5b92a0dec436a891b5ad224ac9170'\n\nWORKFLOWNODE_ID_2 = 'image-crop'\nMODEL_ID_2 = 'ce3f5832af7a4e56ae310d696cbbefd8'\nMODEL_VERSION_ID_2 = 'a78efb13f7774433aa2fd4864f41f0e6'\n\nWORKFLOWNODE_ID_3 = 'image-to-text'\nMODEL_ID_3 = '9fe78b4150a52794f86f237770141b33'\nMODEL_VERSION_ID_3 = 'd94413e582f341f68884cac72dbd2c7b'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\npost_workflows_response = stub.PostWorkflows(\n    service_pb2.PostWorkflowsRequest(\n        user_app_id=userDataObject,  \n        workflows=[\n            resources_pb2.Workflow(\n                id=WORKFLOW_ID,\n                nodes=[\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_1,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_1,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_1\n                            )\n                        )\n                    ),\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_2,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_2,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_2\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_1)\n                            ]\n                        ),\n                    resources_pb2.WorkflowNode(\n                        id=WORKFLOWNODE_ID_3,\n                        model=resources_pb2.Model(\n                            id=MODEL_ID_3,\n                            model_version=resources_pb2.ModelVersion(\n                                id=MODEL_VERSION_ID_3\n                                )\n                            ),\n                            node_inputs=[\n                                resources_pb2.NodeInput(node_id=WORKFLOWNODE_ID_2)\n                            ]\n                        ),\n                ]\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_workflows_response.status.code != status_code_pb2.SUCCESS:\n    raise Exception(\"Post workflows failed, status: \" + post_workflows_response.status.description)\n")),(0,a.kt)(r.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,a.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"//index.js file\n\n/////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the details of the \n// VTR Workflow we want to build. Change these strings to run your own example.\n/////////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = 'YOUR_USER_ID_HERE';\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = 'YOUR_PAT_HERE';\nconst APP_ID = 'YOUR_APP_ID_HERE';\n// Change these to build your own VTR Workflow\nconst WORKFLOW_ID = 'visual-text-recognition-id';\n\nconst WORKFLOWNODE_ID_1 = 'detect-concept';\nconst MODEL_ID_1 = '2419e2eae04d04f820e5cf3aba42d0c7';\nconst MODEL_VERSION_ID_1 = '75a5b92a0dec436a891b5ad224ac9170';\n\nconst WORKFLOWNODE_ID_2 = 'image-crop';\nconst MODEL_ID_2 = 'ce3f5832af7a4e56ae310d696cbbefd8';\nconst MODEL_VERSION_ID_2 = 'a78efb13f7774433aa2fd4864f41f0e6';\n\nconst WORKFLOWNODE_ID_3 = 'image-to-text';\nconst MODEL_ID_3 = '9fe78b4150a52794f86f237770141b33';\nconst MODEL_VERSION_ID_3 = 'd94413e582f341f68884cac72dbd2c7b';\n\n/////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n/////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require(\"clarifai-nodejs-grpc\");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set(\"authorization\", \"Key \" + PAT);\n\nstub.PostWorkflows(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n        workflows: [\n            {\n                id: WORKFLOW_ID,\n                nodes: [\n                    {\n                        id: WORKFLOWNODE_ID_1,\n                        model: {\n                            id: MODEL_ID_1,\n                            model_version: {\n                                id: MODEL_VERSION_ID_1\n                            }\n                        }\n                    },\n                    {\n                        id: WORKFLOWNODE_ID_2,\n                        model: {\n                            id: MODEL_ID_2,\n                            model_version: {\n                                id: MODEL_VERSION_ID_2\n                            }\n                        },\n                        node_inputs: [\n                            {\n                                node_id: WORKFLOWNODE_ID_1\n                            }\n                        ]\n                    },\n                    {\n                        id: WORKFLOWNODE_ID_3,\n                        model: {\n                            id: MODEL_ID_3,\n                            model_version: {\n                                id: MODEL_VERSION_ID_3\n                            }\n                        },\n                        node_inputs: [\n                            {\n                                node_id: WORKFLOWNODE_ID_2\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            console.log(response.status);\n            throw new Error(\"Post workflows failed, status: \" + response.status.description);\n        }\n    }\n);")),(0,a.kt)(r.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,a.kt)(s.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    /////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the details of the \n    // VTR Workflow we want to build. Change these strings to run your own example.\n    /////////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to build your own VTR Workflow\n    static final String WORKFLOW_ID = "visual-text-recognition-id";\n\n    static final String WORKFLOWNODE_ID_1 = "detect-concept";\n    static final String MODEL_ID_1 = "2419e2eae04d04f820e5cf3aba42d0c7";\n    static final String MODEL_VERSION_ID_1 = "75a5b92a0dec436a891b5ad224ac9170";\n\n    static final String WORKFLOWNODE_ID_2 = "image-crop";\n    static final String MODEL_ID_2 = "ce3f5832af7a4e56ae310d696cbbefd8";\n    static final String MODEL_VERSION_ID_2 = "a78efb13f7774433aa2fd4864f41f0e6";\n\n    static final String WORKFLOWNODE_ID_3 = "image-to-text";\n    static final String MODEL_ID_3 = "9fe78b4150a52794f86f237770141b33";\n    static final String MODEL_VERSION_ID_3 = "d94413e582f341f68884cac72dbd2c7b";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        MultiWorkflowResponse postWorkflowsResponse = stub.postWorkflows(\n            PostWorkflowsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .addWorkflows(\n                Workflow.newBuilder()\n                .setId(WORKFLOW_ID)\n                .addNodes(\n                    WorkflowNode.newBuilder()\n                    .setId(WORKFLOWNODE_ID_1)\n                    .setModel(\n                        Model.newBuilder()\n                        .setId(MODEL_ID_1)\n                        .setModelVersion(\n                            ModelVersion.newBuilder()\n                            .setId(MODEL_VERSION_ID_1)\n                        )\n                    )\n                )\n                .addNodes(\n                    WorkflowNode.newBuilder()\n                    .setId(WORKFLOWNODE_ID_2)\n                    .setModel(\n                        Model.newBuilder()\n                        .setId(MODEL_ID_2)\n                        .setModelVersion(\n                            ModelVersion.newBuilder()\n                            .setId(MODEL_VERSION_ID_2)\n                        )\n                    )\n                    .addNodeInputs(NodeInput.newBuilder().setNodeId(WORKFLOWNODE_ID_1))\n                )\n                .addNodes(\n                    WorkflowNode.newBuilder()\n                    .setId(WORKFLOWNODE_ID_3)\n                    .setModel(\n                        Model.newBuilder()\n                        .setId(MODEL_ID_3)\n                        .setModelVersion(\n                            ModelVersion.newBuilder()\n                            .setId(MODEL_VERSION_ID_3)\n                        )\n                    )\n                    .addNodeInputs(NodeInput.newBuilder().setNodeId(WORKFLOWNODE_ID_2))\n                )\n            )\n            .build()\n        );\n\n        if (postWorkflowsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post workflows failed, status: " + postWorkflowsResponse.getStatus());\n        }\n\n    }\n\n}')),(0,a.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,a.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/workflows" \\\n    -H "Authorization: Key YOUR_PAT_HERE" \\\n    -H "Content-Type: application/json" \\\n    --data-raw \'{\n        "workflows": [\n            {\n                "id": "visual-text-recognition-id",\n                "nodes": [\n                    {\n                        "id": "detect-concept",\n                        "model": {\n                            "id": "2419e2eae04d04f820e5cf3aba42d0c7",\n                            "model_version": {\n                                "id": "75a5b92a0dec436a891b5ad224ac9170"\n                            }\n                        }\n                    },\n                    {\n                        "id": "image-crop",\n                        "model": {\n                            "id": "ce3f5832af7a4e56ae310d696cbbefd8",\n                            "model_version": {\n                                "id": "a78efb13f7774433aa2fd4864f41f0e6"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "general-concept"\n                            }\n                        ]\n                    },\n                    {\n                        "id": "image-to-text",\n                        "model": {\n                            "id": "9fe78b4150a52794f86f237770141b33",\n                            "model_version": {\n                                "id": "d94413e582f341f68884cac72dbd2c7b"\n                            }\n                        },\n                        "node_inputs": [\n                            {\n                                "node_id": "image-crop"\n                            }\n                        ]\n                    }\n                ]\n            }\n        ]\n    }\''))))}f.isMDXComponent=!0},11553:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/vtr-7d53fc1ef292e02c58f04d0f9bed3df1.jpg"}}]);