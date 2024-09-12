"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9279],{54859:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>I,contentTitle:()=>f,default:()=>g,frontMatter:()=>h,metadata:()=>b,toc:()=>A});var a=t(74848),s=t(28453),o=t(11470),r=t(19365),i=t(21432);const u='\x3c!--index.html file--\x3e\n\n<script>\n  //////////////////////////////////////////////////////////////////////////////////\n  // In this section, we set the user authentication, app ID, and the details for\n  // performing task annotations. Change these strings to run your own example.\n  /////////////////////////////////////////////////////////////////////////////////\n\n  const USER_ID = "YOUR_USER_ID_HERE";\n  // Your PAT (Personal Access Token) can be found in the Account\'s Security section\n  const PAT = "YOUR_PAT_HERE";\n  const APP_ID = "YOUR_APP_ID_HERE";\n  // Change these to perform your own task annotations\n  const INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";\n  const CONCEPT_ID_1 = "tree";\n  const CONCEPT_ID_2 = "water";\n  const TASK_ID = "c37aed156e474e03bb5246576d9f48fd";\n\n  ///////////////////////////////////////////////////////////////////////////////////\n  // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n  ///////////////////////////////////////////////////////////////////////////////////\n\n  const raw = JSON.stringify({\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n    annotations: [\n      {\n        input_id: INPUT_ID,\n        data: {\n          concepts: [\n            {\n              id: CONCEPT_ID_1,\n              value: 1,\n            },\n            {\n              id: CONCEPT_ID_2,\n              value: 0,\n            },\n          ],\n        },\n        annotation_info: {\n          task_id: TASK_ID,\n        },\n      },\n    ],\n  });\n\n  const requestOptions = {\n    method: "POST",\n    headers: {\n      Accept: "application/json",\n      Authorization: "Key " + PAT,\n    },\n    body: raw,\n  };\n\n  fetch("https://api.clarifai.com/v2/annotations", requestOptions)\n    .then((response) => response.text())\n    .then((result) => console.log(result))\n    .catch((error) => console.log("error", error));\n<\/script>\n',l='curl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/annotations" \\\n  -H "Authorization: Key YOUR_PAT_HERE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n      "annotations": [\n        {\n          "input_id": "INPUT_ID_HERE",\n          "data": {\n            "concepts": [\n              {\n                "id": "tree",\n                "value": 1\n              },\n              {\n                "id": "water",\n                "value": 0\n              }\n            ]\n          },\n          "annotation_info": {\n            "task_id": "TASK_ID_HERE"\n          }\n        }\n      ]\n    }\'',c="####################################################################################\n# In this section, we set the user authentication, app ID, and the details for\n# performing task annotations. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the Account's Security section\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to perform your own task annotations\nINPUT_ID = 'c99f1b557d1d43d1916b46f8ce4a0487'\nCONCEPT_ID_1 = 'tree'\nCONCEPT_ID_2 = 'water'\nTASK_ID = 'c37aed156e474e03bb5246576d9f48fd'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\nfrom google.protobuf.struct_pb2 import Struct\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nparams = Struct()\nparams['task_id'] = TASK_ID\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_task_annotations_response = stub.PostAnnotations(\n    service_pb2.PostAnnotationsRequest(\n        user_app_id=userDataObject,  # The userDataObject is created in the overview and is required when using a PAT\n        annotations=[\n            resources_pb2.Annotation(\n                input_id=INPUT_ID,\n                data=resources_pb2.Data(\n                    concepts=[\n                        resources_pb2.Concept(id=CONCEPT_ID_1, value=1.),  # 1 means true, this concept is present\n                        resources_pb2.Concept(id=CONCEPT_ID_2, value=0.)  # 0 means false, this concept is not present\n                    ]\n                ),\n                annotation_info=params\n            )\n        ]\n    ),\n    metadata=metadata\n)\n\nif post_task_annotations_response.status.code != status_code_pb2.SUCCESS:\n    print(post_task_annotations_response.status)\n    raise Exception('Post task annotations failed, status: ' + post_task_annotations_response.status.description)\n",p='package com.clarifai.example;\n\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.status.StatusCode;\nimport com.google.protobuf.Struct;\nimport com.google.protobuf.Value;\n\npublic class ClarifaiExample {\n\n    //////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the details for\n    // performing task annotations. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\t\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to perform your own task annotations  \n    static final String INPUT_ID = "c99f1b557d1d43d1916b46f8ce4a0487";\n    static final String CONCEPT_ID_1 = "tree";\n    static final String CONCEPT_ID_2 = "water";\n    static final String TASK_ID = "c37aed156e474e03bb5246576d9f48fd";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\t\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n        \n        Struct.Builder params = Struct.newBuilder()\n                .putFields("task_id", Value.newBuilder().setStringValue(TASK_ID).build());\n\n        MultiAnnotationResponse postAnnotationsResponse = stub.postAnnotations(\n            PostAnnotationsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .addAnnotations(\n                Annotation.newBuilder()\n                .setInputId(INPUT_ID)\n                .setData(\n                    Data.newBuilder().addConcepts(\n                        Concept.newBuilder()\n                        .setId(CONCEPT_ID_1)\n                        .setValue(1f) // 1 means true, this concept is present\n                        .build()\n                    ).addConcepts(\n                        Concept.newBuilder()\n                        .setId(CONCEPT_ID_2)\n                        .setValue(0f) // 0 means false, this concept is not present\n                        .build()\n                    )\n                )\n                .setAnnotationInfo(params)               \n                .build()\n            ).build()\n        );\n\n        if (postAnnotationsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post annotations failed, status: " + postAnnotationsResponse.getStatus());\n        }\n\n    }\n\n}',d='<?php\n\nrequire __DIR__ . "/vendor/autoload.php";\n\n////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and details for \n// performing task annotations. Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////////////////////\n\n$USER_ID = "YOUR_USER_ID_HERE";\n// Your PAT (Personal Access Token) can be found in the Account\'s Security section\n$PAT = "YOUR_PAT_HERE";\n$APP_ID = "YOUR_APP_ID_HERE";\n// Change these to perform your own task annotations\n$INPUT_ID = "62bb672ccbdd4e5da55b41209d1a0e9f";\n$CONCEPT_ID_1 = "tree";\n$CONCEPT_ID_2 = "water";\n$TASK_ID = "d0f2fa2b61234d1cb6b66983ea021b5b";\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nuse Clarifai\\ClarifaiClient;\nuse Clarifai\\Api\\PostAnnotationsRequest;\nuse Clarifai\\Api\\Annotation;\nuse Clarifai\\Api\\Concept;\nuse Clarifai\\Api\\Data;\nuse Clarifai\\Api\\Status\\StatusCode;\nuse Clarifai\\Api\\UserAppIDSet;\nuse Google\\Protobuf\\Struct;\nuse Google\\Protobuf\\Value;\n\n$client = ClarifaiClient::grpc();\n\n$metadata = ["Authorization" => ["Key " . $PAT]];\n\n$userDataObject = new UserAppIDSet([\n    "user_id" => $USER_ID,\n    "app_id" => $APP_ID\n]);\n\n// create Struct instance\n$params = new Struct();\n$params->getFields()->offsetSet("task_id", (new Value())->setStringValue($TASK_ID));\n\n// Let\'s make a RPC call to the Clarifai platform. It uses the opened gRPC client channel to communicate a\n// request and then wait for the response\n[$response, $status] = $client->PostAnnotations(\n    // The request object carries the request along with the request status and other metadata related to the request itself\n    new PostAnnotationsRequest([\n        "user_app_id" => $userDataObject, \n        "annotations" => [\n             new Annotation([\n                "input_id" => $INPUT_ID,\n                "data" => new Data([\n                    "concepts" => [\n                        new Concept(["id" => $CONCEPT_ID_1, "value" => 1.]),\n                        new Concept(["id" => $CONCEPT_ID_2, "value" => 0.])\n                    ]\n                    ]),\n                "annotation_info" => $params\n             ])\n        ]\n    ]),\n    $metadata\n)->wait();\n\n// A response is returned and the first thing we do is check the status of it\n// A successful response will have a status code of 0; otherwise, there is some error\nif ($status->code !== 0) {\n    throw new Exception("Error: {$status->details}");\n}\n// In addition to the RPC response status, there is a Clarifai API status that reports if the operation was a success or failure \n// (not just that the communication was successful)\nif ($response->getStatus()->getCode() != StatusCode::SUCCESS) {\n    print $response->getStatus()->getDetails();\n    throw new Exception("Failure response: " . $response->getStatus()->getDescription());\n}\n\n?>\n',_='//index.js file\n\n////////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the details for\n// performing task annotations. Change these strings to run your own example.\n////////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = "YOUR_USER_ID_HERE";\n// Your PAT (Personal Access Token) can be found in the Account\'s Security section\nconst PAT = "YOUR_PAT_HERE";\nconst APP_ID = "YOUR_APP_ID_HERE";\n// Change these to perform your own task annotations\nconst INPUT_ID = "62bb672ccbdd4e5da55b41209d1a0e9f";\nconst CONCEPT_ID_1 = "tree";\nconst CONCEPT_ID_2 = "water";\nconst TASK_ID = "d0f2fa2b61234d1cb6b66983ea021b5b";\n\n/////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n/////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostAnnotations(\n  {\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n    annotations: [\n      {\n        input_id: INPUT_ID,\n        data: {\n          concepts: [\n            {\n              id: CONCEPT_ID_1,\n              value: 1,\n            },\n            {\n              id: CONCEPT_ID_2,\n              value: 0,\n            },\n          ],\n        },\n        annotation_info: {\n          task_id: TASK_ID,\n        },\n      },\n    ],\n  },\n  metadata,\n  (err, response) => {\n    if (err) {\n      throw new Error(err);\n    }\n\n    if (response.status.code !== 10000) {\n      throw new Error(\n        "Post annotations failed, status: " + response.status.description\n      );\n    }\n  }\n);\n',h={description:"This is a page about performing task annotations with the Clarifai API.",sidebar_position:5},f="Task Annotations",b={id:"api-guide/annotate/task-annotations",title:"Task Annotations",description:"This is a page about performing task annotations with the Clarifai API.",source:"@site/docs/api-guide/annotate/task-annotations.md",sourceDirName:"api-guide/annotate",slug:"/api-guide/annotate/task-annotations",permalink:"/api-guide/annotate/task-annotations",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/annotate/task-annotations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"This is a page about performing task annotations with the Clarifai API.",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tasks : Create, Get, Update, Delete",permalink:"/api-guide/annotate/tasks"},next:{title:"Creating and Training Models",permalink:"/api-guide/model/"}},I={},A=[];function m(n){const e={h1:"h1",p:"p",strong:"strong",...(0,s.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"task-annotations",children:"Task Annotations"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Perform task annotations"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(e.p,{children:"In order to keep track of each user's work assigned to a task, all the annotations of this user related to this task should be linked to the task ID."}),"\n",(0,a.jsx)(e.p,{children:"Therefore, when a user creates an annotation, the task ID should be provided as below:"}),"\n","\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(r.A,{value:"python",label:"Python",children:(0,a.jsx)(i.A,{className:"language-python",children:c})}),(0,a.jsx)(r.A,{value:"js_rest",label:"JavaScript (REST)",children:(0,a.jsx)(i.A,{className:"language-javascript",children:u})}),(0,a.jsx)(r.A,{value:"nodejs",label:"NodeJS",children:(0,a.jsx)(i.A,{className:"language-javascript",children:_})}),(0,a.jsx)(r.A,{value:"java",label:"Java",children:(0,a.jsx)(i.A,{className:"language-java",children:p})}),(0,a.jsx)(r.A,{value:"php",label:"PHP",children:(0,a.jsx)(i.A,{className:"language-php",children:d})}),(0,a.jsx)(r.A,{value:"curl",label:"cURL",children:(0,a.jsx)(i.A,{className:"language-bash",children:l})})]})]})}function g(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(m,{...n})}):m(n)}},19365:(n,e,t)=>{t.d(e,{A:()=>r});t(96540);var a=t(18215);const s={tabItem:"tabItem_Ymn6"};var o=t(74848);function r(n){let{children:e,hidden:t,className:r}=n;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:t,children:e})}},11470:(n,e,t)=>{t.d(e,{A:()=>T});var a=t(96540),s=t(18215),o=t(23104),r=t(56347),i=t(205),u=t(57485),l=t(31682),c=t(70679);function p(n){return a.Children.toArray(n).filter((n=>"\n"!==n)).map((n=>{if(!n||(0,a.isValidElement)(n)&&function(n){const{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(n){const{values:e,children:t}=n;return(0,a.useMemo)((()=>{const n=e??function(n){return p(n).map((n=>{let{props:{value:e,label:t,attributes:a,default:s}}=n;return{value:e,label:t,attributes:a,default:s}}))}(t);return function(n){const e=(0,l.X)(n,((n,e)=>n.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n}),[e,t])}function _(n){let{value:e,tabValues:t}=n;return t.some((n=>n.value===e))}function h(n){let{queryString:e=!1,groupId:t}=n;const s=(0,r.W6)(),o=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t});return[(0,u.aZ)(o),(0,a.useCallback)((n=>{if(!o)return;const e=new URLSearchParams(s.location.search);e.set(o,n),s.replace({...s.location,search:e.toString()})}),[o,s])]}function f(n){const{defaultValue:e,queryString:t=!1,groupId:s}=n,o=d(n),[r,u]=(0,a.useState)((()=>function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!_({value:e,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=t.find((n=>n.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:o}))),[l,p]=h({queryString:t,groupId:s}),[f,b]=function(n){let{groupId:e}=n;const t=function(n){return n?`docusaurus.tab.${n}`:null}(e),[s,o]=(0,c.Dv)(t);return[s,(0,a.useCallback)((n=>{t&&o.set(n)}),[t,o])]}({groupId:s}),I=(()=>{const n=l??f;return _({value:n,tabValues:o})?n:null})();(0,i.A)((()=>{I&&u(I)}),[I]);return{selectedValue:r,selectValue:(0,a.useCallback)((n=>{if(!_({value:n,tabValues:o}))throw new Error(`Can't select invalid tab value=${n}`);u(n),p(n),b(n)}),[p,b,o]),tabValues:o}}var b=t(92303);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=t(74848);function m(n){let{className:e,block:t,selectedValue:a,selectValue:r,tabValues:i}=n;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.a_)(),c=n=>{const e=n.currentTarget,t=u.indexOf(e),s=i[t].value;s!==a&&(l(e),r(s))},p=n=>{let e=null;switch(n.key){case"Enter":c(n);break;case"ArrowRight":{const t=u.indexOf(n.currentTarget)+1;e=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(n.currentTarget)-1;e=u[t]??u[u.length-1];break}}e?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:i.map((n=>{let{value:e,label:t,attributes:o}=n;return(0,A.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:n=>u.push(n),onKeyDown:p,onClick:c,...o,className:(0,s.A)("tabs__item",I.tabItem,o?.className,{"tabs__item--active":a===e}),children:t??e},e)}))})}function g(n){let{lazy:e,children:t,selectedValue:s}=n;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const n=o.find((n=>n.props.value===s));return n?(0,a.cloneElement)(n,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:o.map(((n,e)=>(0,a.cloneElement)(n,{key:e,hidden:n.props.value!==s})))})}function E(n){const e=f(n);return(0,A.jsxs)("div",{className:(0,s.A)("tabs-container",I.tabList),children:[(0,A.jsx)(m,{...e,...n}),(0,A.jsx)(g,{...e,...n})]})}function T(n){const e=(0,b.A)();return(0,A.jsx)(E,{...n,children:p(n.children)},String(e))}}}]);