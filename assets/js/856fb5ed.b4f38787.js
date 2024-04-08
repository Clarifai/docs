"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5245],{85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var a=t(87462),r=t(67294),s=t(86010),o=t(12466),i=t(16550),c=t(91980),u=t(67392),l=t(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=m({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,l.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??p;return h({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,s]),tabValues:s}}var b=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function _(e){let{className:n,block:t,selectedValue:i,selectValue:c,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=u[t].value;a!==i&&(p(n),c(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>l.push(e),onKeyDown:h,onClick:d},o,{className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function E(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=g(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",f.tabList)},r.createElement(_,(0,a.Z)({},e,n)),r.createElement(E,(0,a.Z)({},e,n)))}function C(e){const n=(0,b.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}},18393:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>h,default:()=>E,frontMatter:()=>d,metadata:()=>m,toc:()=>b});var a=t(87462),r=(t(67294),t(3905)),s=t(74866),o=t(85162),i=t(90814);const c="################################################################################\n# In this section, we set the user authentication, app ID, and the concepts we  \n# we want to search by. Change these strings to run your own example.\n################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the Account's Security section\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to search by your own concepts\nCONCEPT_NAME_1 = 'cat'\nCONCEPT_NAME_2 = 'dog'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID) # The userDataObject is required when using a PAT\n\n# Here we search for images which we labeled with \"cat\" and for which the General prediction model does not find\n# a \"dog\" concept.\npost_searches_response = stub.PostSearches(\n    service_pb2.PostSearchesRequest(\n        user_app_id=userDataObject,\n        query=resources_pb2.Query(\n            ands=[\n                resources_pb2.And(\n                    input=resources_pb2.Input(  # Setting Input indicates we search for images that have the concept(s)\n                                                # which we added to the input manually.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_NAME_1,\n                                    value=1\n                                )\n                            ]\n                        )\n                    )\n                ),\n                resources_pb2.And(\n                    output=resources_pb2.Output(  # Setting Output indicates we search for images that have the concept(s)\n                                                  # which were predicted by the General model.\n                        data=resources_pb2.Data(\n                            concepts=[\n                                resources_pb2.Concept(\n                                    name=CONCEPT_NAME_2,\n                                    value=0\n                                )\n                            ]\n                        )\n                    )\n                )\n            ]\n        )\n    ),\n    metadata=metadata\n)\n\nif post_searches_response.status.code != status_code_pb2.SUCCESS:\n    print(post_searches_response.status)\n    raise Exception(\"Post searches failed, status: \" + post_searches_response.status.description)\n\nprint(\"Found inputs:\")\nfor hit in post_searches_response.hits:\n    print(\"\\tScore %.2f for %s\" % (hit.score, hit.input.id))",u='//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the concepts we  \n// we want to search by. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = \'YOUR_USER_ID_HERE\';\n// Your PAT (Personal Access Token) can be found in the Account\'s Security section\nconst PAT = \'YOUR_PAT_HERE\';\nconst APP_ID = \'YOUR_APP_ID_HERE\';\n// Change these to search by your own concepts\nconst CONCEPT_NAME_1 = \'cat\';\nconst CONCEPT_NAME_2 = \'dog\';\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\n// Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n// a "dog" concept\n\nstub.PostSearches(\n    {\n        user_app_id: {\n            user_id: USER_ID,\n            app_id: APP_ID\n        },\n        query: {\n            ands: [\n                {\n                    input: {  // Setting Input indicates we search for images that have the concept(s)\n                        // which we added to the input manually\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_NAME_1,\n                                    value: 1\n                                }\n                            ]\n                        }\n                    }\n                },\n                {\n                    output: {  // Setting Output indicates we search for images that have the concept(s)\n                        // which were predicted by the General model\n                        data: {\n                            concepts: [\n                                {\n                                    name: CONCEPT_NAME_2,\n                                    value: 0\n                                }\n                            ]\n                        }\n                    }\n                }\n            ]\n        }\n    },\n    metadata,\n    (err, response) => {\n        if (err) {\n            throw new Error(err);\n        }\n\n        if (response.status.code !== 10000) {\n            throw new Error("Post searches failed, status: " + response.status.description);\n        }\n\n        console.log("Found inputs:");\n        for (const hit of response.hits) {\n            console.log("\\tScore " + hit.score + " for " + hit.input.id);\n        }\n    }\n);',l='package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the concepts we  \n    // we want to search by. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to search by your own concepts\n    static final String CONCEPT_NAME_1 = "cat";\n    static final String CONCEPT_NAME_2 = "dog";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        // Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n        // a "dog" concept.\n        MultiSearchResponse postSearchesResponse = stub.postSearches(\n            PostSearchesRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setQuery(\n                Query.newBuilder()\n                .addAnds(\n                    And.newBuilder().setInput( // Setting Input indicates we search for images that have the concept(s)\n                        // which we added to the input manually.\n                        Input.newBuilder().setData(\n                            Data.newBuilder().addConcepts(\n                                Concept.newBuilder()\n                                .setName(CONCEPT_NAME_1)\n                                .setValue(1f)\n                            )\n                        )\n                    )\n                )\n                .addAnds(\n                    And.newBuilder().setOutput( // Setting Output indicates we search for images that have the concept(s)\n                        // which were predicted by the General model.\n                        Output.newBuilder().setData(\n                            Data.newBuilder().addConcepts(\n                                Concept.newBuilder()\n                                .setName(CONCEPT_NAME_2)\n                                .setValue(0f)\n                            )\n                        )\n                    )\n                )\n            )\n            .build()\n        );\n\n        if (postSearchesResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Post searches failed, status: " + postSearchesResponse.getStatus());\n        }\n\n        System.out.println("Found inputs " + postSearchesResponse.getHitsCount() + ":");\n        for (Hit hit : postSearchesResponse.getHitsList()) {\n            System.out.printf("\\tScore %.2f for %s\\n", hit.getScore(), hit.getInput().getId());\n        }\n\n    }\n\n}',p='# Here we search for images which we labeled with "cat" and for which the General prediction model does not find\n# a "dog" concept\n\ncurl -X POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \\\n  -H "Authorization: Key YOUR_PAT_HERE" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "query": {\n        "ands": [\n            {\n                "input":{\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "cat",\n                                "value": 1\n                            }\n                        ]\n                    }\n                }\n            },\n            {\n                "output": {\n                    "data": {\n                        "concepts": [\n                            {\n                                "name": "dog",\n                                "value": 0\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\'',d={description:"Group or separate items in your dataset.",sidebar_position:1},h="Combine or Negate",m={unversionedId:"api-guide/search/legacy-search/combine-or-negate",id:"api-guide/search/legacy-search/combine-or-negate",title:"Combine or Negate",description:"Group or separate items in your dataset.",source:"@site/docs/api-guide/search/legacy-search/combine-or-negate.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/combine-or-negate",permalink:"/api-guide/search/legacy-search/combine-or-negate",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/search/legacy-search/combine-or-negate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Group or separate items in your dataset.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Legacy Search",permalink:"/api-guide/search/legacy-search/"},next:{title:"Filter",permalink:"/api-guide/search/legacy-search/filter"}},g={},b=[],f={toc:b},_="wrapper";function E(e){let{components:n,...t}=e;return(0,r.kt)(_,(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"combine-or-negate"},"Combine or Negate"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Group or separate items in your dataset")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You can also combine searches using AND."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The initialization code used in the following example is outlined in detail on the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page."))),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"grpc_python",label:"gRPC Python",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-python",mdxType:"CodeBlock"},c)),(0,r.kt)(o.Z,{value:"grpc_nodejs",label:"gRPC NodeJS",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-javascript",mdxType:"CodeBlock"},u)),(0,r.kt)(o.Z,{value:"grpc_java",label:"gRPC Java",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-java",mdxType:"CodeBlock"},l)),(0,r.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,r.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},p))))}E.isMDXComponent=!0}}]);