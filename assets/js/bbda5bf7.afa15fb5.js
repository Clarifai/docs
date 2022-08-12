"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5412],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},26396:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(87462),o=t(67294),i=t(72389),r=t(79443);var s=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(63616),u=t(86010),c="tabItem_vU9c";function d(e){var n,t,i,r=e.lazy,d=e.block,p=e.defaultValue,m=e.values,h=e.groupId,v=e.className,E=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=m?m:E.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),f=(0,l.lx)(_,(function(e,n){return e.value===n.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(n=null!=p?p:null==(t=E.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=E[0])?void 0:i.props.value;if(null!==g&&!_.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var I=s(),D=I.tabGroupChoices,N=I.setTabGroupChoices,O=(0,o.useState)(g),b=O[0],k=O[1],R=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var w=D[h];null!=w&&w!==b&&_.some((function(e){return e.value===w}))&&k(w)}var S=function(e){var n=e.currentTarget,t=R.indexOf(n),a=_[t].value;a!==b&&(T(n),k(a),null!=h&&N(h,a))},A=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=R.indexOf(e.currentTarget)+1;t=R[a]||R[0];break;case"ArrowLeft":var o=R.indexOf(e.currentTarget)-1;t=R[o]||R[R.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},v)},_.map((function(e){var n=e.value,t=e.label,i=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:function(e){return R.push(e)},onKeyDown:A,onFocus:S,onClick:S},i,{className:(0,u.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":b===n})}),null!=t?t:n)}))),r?(0,o.cloneElement)(E.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},E.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}function p(e){var n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},98828:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var a=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(26396),s=t(58215),l=t(19055),u=["components"],c={description:"Learn about model evaluation tools."},d="Evaluating Models",p={unversionedId:"api-guide/evaluate/README",id:"api-guide/evaluate/README",title:"Evaluating Models",description:"Learn about model evaluation tools.",source:"@site/docs/api-guide/evaluate/README.mdx",sourceDirName:"api-guide/evaluate",slug:"/api-guide/evaluate/",permalink:"/api-guide/evaluate/",tags:[],version:"current",frontMatter:{description:"Learn about model evaluation tools."},sidebar:"tutorialSidebar",previous:{title:"Deep Training",permalink:"/api-guide/model/deep-training"},next:{title:"Interpreting Evaluations",permalink:"/api-guide/evaluate/interpreting-evaluations"}},m=[{value:"How It Works",id:"how-it-works",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Running Evaluation",id:"running-evaluation",children:[],level:2}],h={toc:m};function v(e){var n=e.components,c=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},h,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evaluating-models"},"Evaluating Models"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Evaluate a model's performance")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Now that you've successfully trained the model, you may want to test its performance before using it in a production environment.\nThe Model Evaluation tool allows you to perform a cross validation on a specified model version. Once the evaluation is complete, you can view the various metrics that inform the model\u2019s performance."),(0,i.kt)("h2",{id:"how-it-works"},"How It Works"),(0,i.kt)("p",null,"Model Evaluation performs a K-split cross validation on data you used to train your custom model."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cross validation",src:t(21191).Z})),(0,i.kt)("p",null,"In the cross validation process, it will: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set aside a random 1/K subset of the training data and designate as a test set; "),(0,i.kt)("li",{parentName:"ol"},"Train a new model with the remaining training data; "),(0,i.kt)("li",{parentName:"ol"},"Pass the test set data through this new model to make predictions; "),(0,i.kt)("li",{parentName:"ol"},"Compare the predictions against the test set\u2019s actual labels; and,"),(0,i.kt)("li",{parentName:"ol"},"Repeat steps 1",")"," through 4",")"," across K splits to average out the evaluation results.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To run the evaluation on your custom model, it should meet the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It should be a custom trained model version with:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"At least 2 concepts."),(0,i.kt)("li",{parentName:"ol"},"At least 10 training inputs per concept ","(","at least 50 inputs per concept is recommended",")",".")))),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The evaluation may result in an error if the model version doesn\u2019t satisfy the requirements above."))),(0,i.kt)("h2",{id:"running-evaluation"},"Running Evaluation"),(0,i.kt)("p",null,"Below is an example of how you would run an evaluation on a specific version of a custom model. "),(0,i.kt)("p",null,"Note that the initialization code used here is outlined in detail on the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/api-guide/api-overview/api-clients/#client-installation-instructions"},"client installation page.")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-python",mdxType:"CodeBlock"},"####################################################################################\n# In this section, we set the user authentication, app ID, and the model's  \n# details. Change these strings to run your own example.\n###################################################################################\n\nUSER_ID = 'YOUR_USER_ID_HERE'\n# Your PAT (Personal Access Token) can be found in the portal under Authentification\nPAT = 'YOUR_PAT_HERE'\nAPP_ID = 'YOUR_APP_ID_HERE'\n# Change these to evaluate your own model\nMODEL_ID = 'YOUR_MODEL_ID_HERE'\nMODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE'\n\n##########################################################################\n# YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n##########################################################################\n\nfrom clarifai_grpc.channel.clarifai_channel import ClarifaiChannel\nfrom clarifai_grpc.grpc.api import resources_pb2, service_pb2, service_pb2_grpc\nfrom clarifai_grpc.grpc.api.status import status_code_pb2\n\nchannel = ClarifaiChannel.get_grpc_channel()\nstub = service_pb2_grpc.V2Stub(channel)\n\nmetadata = (('authorization', 'Key ' + PAT),)\n\nuserDataObject = resources_pb2.UserAppIDSet(user_id=USER_ID, app_id=APP_ID)\n\npost_model_version_metrics = stub.PostModelVersionMetrics(\n    service_pb2.PostModelVersionMetricsRequest(\n        user_app_id=userDataObject,\n        model_id=MODEL_ID,\n        version_id=MODEL_VERSION_ID      \n    ),\n    metadata=metadata\n)\n\nif post_model_version_metrics.status.code != status_code_pb2.SUCCESS:\n    print(post_model_version_metrics.status)\n    raise Exception(\"Evaluate model failed, status: \" + post_model_version_metrics.status.description)\n")),(0,i.kt)(s.Z,{value:"js_rest",label:"JavaScript (REST)",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},"\x3c!--index.html file--\x3e\n\n<script>\n    ////////////////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model's  \n    // details. Change these strings to run your own example.\n    ///////////////////////////////////////////////////////////////////////////////////////////\n\n    const USER_ID = 'YOUR_USER_ID_HERE';\n    // Your PAT (Personal Access Token) can be found in the portal under Authentification\n    const PAT = 'YOUR_PAT_HERE';\n    const APP_ID = 'YOUR_APP_ID_HERE';\n    // Change these to evaluate your own model\n    const MODEL_ID = 'YOUR_MODEL_ID_HERE';\n    const MODEL_VERSION_ID = 'YOUR_MODEL_VERSION_HERE';\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    const raw = JSON.stringify({\n        \"user_app_id\": {\n            \"user_id\": USER_ID,\n            \"app_id\": APP_ID\n        }\n    });\n\n    const requestOptions = {\n        method: 'POST',\n        headers: {\n            'Accept': 'application/json',\n            'Authorization': 'Key ' + PAT\n        },\n        body: raw\n    };\n\n    fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION_ID}/metrics`, requestOptions)\n        .then(response => response.text())\n        .then(result => console.log(result))\n        .catch(error => console.log('error', error));\n\n<\/script>")),(0,i.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-javascript",mdxType:"CodeBlock"},'//index.js file\n\n///////////////////////////////////////////////////////////////////////////////////\n// In this section, we set the user authentication, app ID, and the model\'s\n// details. Change these strings to run your own example.\n//////////////////////////////////////////////////////////////////////////////////\n\nconst USER_ID = "YOUR_USER_ID_HERE";\n// Your PAT (Personal Access Token) can be found in the portal under Authentification\nconst PAT = "YOUR_PAT_HERE";\nconst APP_ID = "YOUR_APP_ID_HERE";\n// Change these to evaluate your own model\nconst MODEL_ID = "YOUR_MODEL_ID_HERE";\nconst MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n///////////////////////////////////////////////////////////////////////////////////\n// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n///////////////////////////////////////////////////////////////////////////////////\n\nconst { ClarifaiStub, grpc } = require("clarifai-nodejs-grpc");\n\nconst stub = ClarifaiStub.grpc();\n\n// This will be used by every Clarifai endpoint call\nconst metadata = new grpc.Metadata();\nmetadata.set("authorization", "Key " + PAT);\n\nstub.PostModelVersionMetrics(\n  {\n    user_app_id: {\n      user_id: USER_ID,\n      app_id: APP_ID,\n    },\n\n    model_id: MODEL_ID,\n    model_version: MODEL_VERSION_ID,\n  },\n\n  metadata,\n\n  (err, response) => {\n    if (err) {\n      throw new Error(err);\n    }\n\n    if (response.status.code !== 10000) {\n      throw new Error("Evaluate model failed, status: " + response.status.description);\n    }  \n\n  }\n);\n')),(0,i.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(l.Z,{className:"language-java",mdxType:"CodeBlock"},'package com.clarifai.example;\n\nimport com.clarifai.channel.ClarifaiChannel;\nimport com.clarifai.credentials.ClarifaiCallCredentials;\nimport com.clarifai.grpc.api.*;\nimport com.clarifai.grpc.api.status.StatusCode;\n\npublic class ClarifaiExample {\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // In this section, we set the user authentication, app ID, and the model\'s\n    // details. Change these strings to run your own example.\n    //////////////////////////////////////////////////////////////////////////////////\n\n    static final String USER_ID = "YOUR_USER_ID_HERE";\n    //Your PAT (Personal Access Token) can be found in the portal under Authentication\n    static final String PAT = "YOUR_PAT_HERE";\n    static final String APP_ID = "YOUR_APP_ID_HERE";\n    // Change these to evaluate your own model\n    static final String MODEL_ID = "YOUR_MODEL_ID_HERE";\n    static final String MODEL_VERSION_ID = "YOUR_MODEL_VERSION_HERE";\n\n    ///////////////////////////////////////////////////////////////////////////////////\n    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE\n    ///////////////////////////////////////////////////////////////////////////////////\n\n    public static void main(String[] args) {\n\n        V2Grpc.V2BlockingStub stub = V2Grpc.newBlockingStub(ClarifaiChannel.INSTANCE.getGrpcChannel())\n            .withCallCredentials(new ClarifaiCallCredentials(PAT));\n\n        SingleModelVersionResponse postModelVersionMetricsResponse = stub.postModelVersionMetrics(\n            PostModelVersionMetricsRequest.newBuilder()\n            .setUserAppId(UserAppIDSet.newBuilder().setUserId(USER_ID).setAppId(APP_ID))\n            .setModelId(MODEL_ID)\n            .setVersionId(MODEL_VERSION_ID)\n            .build()\n        );\n\n        if (postModelVersionMetricsResponse.getStatus().getCode() != StatusCode.SUCCESS) {\n            throw new RuntimeException("Evaluate model failed, status: " + postModelVersionMetricsResponse.getStatus());\n        }\n\n    }\n\n}'))),(0,i.kt)("p",null,"Once the evaluation is complete, you can retrieve the results and analyze the performance of your custom model."),(0,i.kt)("p",null,"We'll talk about how to interpret a model's evaluation results in the next section. "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also learn how to perform evaluation on the Portal ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/evaluate/"},"here"),". "))))}v.isMDXComponent=!0},21191:function(e,n,t){n.Z=t.p+"assets/images/cross_validation-cfadf56b2e40cbff4a4709169d1b5640.jpg"}}]);