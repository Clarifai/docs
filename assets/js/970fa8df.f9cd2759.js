"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7736],{19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),o=a(20053);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>w});var n=a(58168),o=a(96540),s=a(20053),i=a(23104),r=a(56347),l=a(57485),c=a(31682),p=a(89466);function u(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function d(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function y(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,r.W6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=d(e),[i,r]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!y({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,c]=h({queryString:a,groupId:n}),[u,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,p.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=l??u;return y({value:e,tabValues:s})?e:null})();(0,o.useLayoutEffect)((()=>{g&&r(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!y({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);r(e),c(e),m(e)}),[c,m,s]),tabValues:s}}var g=a(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),d=e=>{const t=e.currentTarget,a=p.indexOf(t),n=c[a].value;n!==r&&(u(t),l(n))},y=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=p.indexOf(e.currentTarget)+1;t=p[a]??p[0];break}case"ArrowLeft":{const a=p.indexOf(e.currentTarget)-1;t=p[a]??p[p.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:i}=e;return o.createElement("li",(0,n.A)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>p.push(e),onKeyDown:y,onClick:d},i,{className:(0,s.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===t})}),a??t)})))}function _(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function A(e){const t=m(e);return o.createElement("div",{className:(0,s.A)("tabs-container",f.tabList)},o.createElement(b,(0,n.A)({},e,t)),o.createElement(_,(0,n.A)({},e,t)))}function w(e){const t=(0,g.A)();return o.createElement(A,(0,n.A)({key:String(t)},e))}},29643:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=a(58168),o=(a(96540),a(15680)),s=a(11470),i=a(19365),r=a(77964);const l="###################################################################################\n# In this section, we set the user authentication, model details, and the URL\n# of the image we want as an input. Change these strings to run your own example.\n###################################################################################\n\n# Your API Key can be found in the portal under your App's settings\nKEY = 'YOUR_APP_KEY_HERE'\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\n# This is optional. You can specify a model version or the empty string for the default\nMODEL_VERSION_ID = ''\nIMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg'\n\n############################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n############################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + KEY),)\n\npost_model_outputs_response = stub.PostModelOutputs(\n    service_pb2.PostModelOutputsRequest(\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID,  \n        inputs=[\n            resources_pb2.Input(\n                data=resources_pb2.Data(\n                    image=resources_pb2.Image(\n                        url=IMAGE_URL\n                    )\n                )\n            )\n        ]\n    ),\n    metadata=metadata\n)\nif post_model_outputs_response.status.code != status_code_pb2.SUCCESS:\n    print(post_model_outputs_response.status)\n    raise Exception(\"Post model outputs failed, status: \" + post_model_outputs_response.status.description)\n\n# Since we have one input, one output will exist here\noutput = post_model_outputs_response.outputs[0]\n\nprint(\"Predicted concepts:\")\nfor concept in output.data.concepts:\n    print(\"%s %.2f\" % (concept.name, concept.value))\n\n# Uncomment this line to print the full Response JSON\n#print(output)",c='curl -X POST "https://api.clarifai.com/v2/models/YOUR_MODEL_ID_HERE/versions/YOUR_MODEL_VERSION_HERE/outputs" \\\n    -H "Authorization: Key YOUR_API_KEY_HERE" \\\n    -H "Content-Type: application/json" \\\n    -d \'{\n      "inputs": [\n        {\n          "data": {\n            "image": {\n              "url": "https://samples.clarifai.com/metro-north.jpg"\n            }\n          }\n        }\n      ]\n    }\'\n   ',p={description:"Authenticate access to your own Clarifai apps",sidebar_position:2},u="App-Specific API Keys",d={unversionedId:"clarifai-basics/authentication/app-specific-api-keys",id:"clarifai-basics/authentication/app-specific-api-keys",title:"App-Specific API Keys",description:"Authenticate access to your own Clarifai apps",source:"@site/docs/clarifai-basics/authentication/app-specific-api-keys.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/app-specific-api-keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/authentication/app-specific-api-keys.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Authenticate access to your own Clarifai apps",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"},next:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"}},y={},h=[{value:"How to Create API Keys on the Portal",id:"how-to-create-api-keys-on-the-portal",level:2},{value:"How to Create API Keys Programmatically",id:"how-to-create-api-keys-programmatically",level:2},{value:"How to Use an API Key Example",id:"how-to-use-an-api-key-example",level:2}],m={toc:h},g="wrapper";function f(e){let{components:t,...p}=e;return(0,o.yg)(g,(0,n.A)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"app-specific-api-keys"},"App-Specific API Keys"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Authenticate access to resources within the scope defined by the key")),(0,o.yg)("hr",null),(0,o.yg)("p",null,"App-specific API Keys are used to authorize access to your Clarifai applications. You can use an API Key to access the resources within the scope of the app defined by that key."),(0,o.yg)("p",null,"A key is automatically generated when you create a new application. You can also go to the ",(0,o.yg)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"Application's List")," on the Portal, select an app of your choice, and create a new key on the app details page. "),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Each API Key is associated with a specific user and a specific app. It ties in ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"app_id"),", causing only resources in that app to be usable.")),(0,o.yg)("p",null,"When using an app-specific API Key to make a request, you do not need to specify either the user ID or the application ID, as they are already part of the API Key."),(0,o.yg)("p",null,"An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your API Key through a simple checkbox interface displayed when you create a new key or edit a key. "),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You cannot use an API key to access models, model versions, workflows, and other resources that are not part of the app that the API key is associated with. You need a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"PAT")," to do so. For example, to access any of Clarifai's resources, you need to use a PAT while specifying Clarifai's ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id")," and the ",(0,o.yg)("inlineCode",{parentName:"p"},"app_id")," to which the resource belongs. ")),(0,o.yg)("h2",{id:"how-to-create-api-keys-on-the-portal"},"How to Create API Keys on the Portal"),(0,o.yg)("p",null,"Navigate to your application's individual page and select the ",(0,o.yg)("strong",{parentName:"p"},"Settings")," option on the collapsible left sidebar."),(0,o.yg)("p",null,"You'll be redirected to the ",(0,o.yg)("strong",{parentName:"p"},"App Settings")," page."),(0,o.yg)("p",null,"Within the ",(0,o.yg)("strong",{parentName:"p"},"API Keys")," section, click the ",(0,o.yg)("strong",{parentName:"p"},"Create API Key")," button. "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"App settings create key",src:a(66182).A,width:"1891",height:"923"})),(0,o.yg)("p",null,"Then, use the form that pops up to generate a new API key for your application\u2014provide a short description, select the scopes, and click the ",(0,o.yg)("strong",{parentName:"p"},"Confirm")," button. "),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"App key create form",src:a(67145).A,width:"1473",height:"831"})),(0,o.yg)("p",null,"The new key will be listed in the ",(0,o.yg)("strong",{parentName:"p"},"API Keys")," section, where you can copy it to the clipboard, edit it, or delete it."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"copy, edit, delete api key",src:a(84681).A,width:"1531",height:"485"})),(0,o.yg)("h2",{id:"how-to-create-api-keys-programmatically"},"How to Create API Keys Programmatically"),(0,o.yg)("p",null,"For enterprise users, it is also possible to generate keys programmatically. "),(0,o.yg)("p",null,"If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"You need to use a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"Personal Access Token (PAT)")," to create an API Key. ")),(0,o.yg)(s.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"cURL",label:"cURL",default:!0,mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/keys" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "keys": [\n        {\n            "description": "All permissions",\n            "scopes": [\n                "All"\n            ],\n            "apps": [\n                {\n                    "id": "YOUR_APP_ID_HERE",\n                    "user_id": "YOUR_USER_ID_HERE"\n                }\n            ]\n        }\n    ]\n}\'\n')))),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("ul",{parentName:"admonition"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"API Keys do not expire. In case your API Key gets compromised, you should delete that key, and create a new one with the same scopes.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"We recommend that you do ",(0,o.yg)("strong",{parentName:"p"},"not")," share your API Key with other users.")))),(0,o.yg)("h2",{id:"how-to-use-an-api-key-example"},"How to Use an API Key Example"),(0,o.yg)("p",null,"Here is an example of how to use an API Key to make a prediction request from your own model. Note that your ",(0,o.yg)("inlineCode",{parentName:"p"},"user_id")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"app_id")," are already tied to the key, so no need to specify them."),(0,o.yg)(s.A,{mdxType:"Tabs"},(0,o.yg)(i.A,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-python",mdxType:"CodeBlock"},l)),(0,o.yg)(i.A,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.yg)(r.A,{className:"language-bash",mdxType:"CodeBlock"},c))))}f.isMDXComponent=!0},66182:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_api_key_community-ef0b06cf6810664af0e0c144b9d9346a.png"},84681:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_api_key_community_2-27720f0608c87ff52037814c69b9502c.png"},67145:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_api_key_community_form-fc36901b7dc91718f5bcdf4d52956a58.png"}}]);