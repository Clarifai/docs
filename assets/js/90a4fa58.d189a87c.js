"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9391],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>f});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(o),u=a,f=m["".concat(p,".").concat(u)]||m[u]||c[u]||n;return o?r.createElement(f,i(i({ref:t},d),{},{components:o})):r.createElement(f,i({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},40533:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=o(87462),a=(o(67294),o(3905));const n={description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},i="Model Types",l={unversionedId:"api-guide/model/model-types",id:"api-guide/model/model-types",title:"Model Types",description:"Learn about some of the most important model types on the Clarifai platform.",source:"@site/docs/api-guide/model/model-types.md",sourceDirName:"api-guide/model",slug:"/api-guide/model/model-types",permalink:"/api-guide/model/model-types",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about some of the most important model types on the Clarifai platform.",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clarifai Models",permalink:"/api-guide/model/clarifai-models"},next:{title:"Custom Models",permalink:"/api-guide/model/custom-model-walkthrough"}},p={},s=[],d={toc:s},m="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"model-types"},"Model Types"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about some of the most important model types on the Clarifai platform")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Clarifai offers a wide variety of ",(0,a.kt)("a",{parentName:"p",href:"https://clarifai.com/explore"},"models")," that can be used as standalone solutions, or as building blocks for your own custom business solutions."),(0,a.kt)("p",null,"This page describes some important model types that you should know when working with the Clarifai platform. Please keep in mind that this is an overview of the general categories of models available to you and that new models are created frequently. "),(0,a.kt)("p",null,"For a listing of the models available to you:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make a ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," call to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#list-model-types"},(0,a.kt)("inlineCode",{parentName:"a"},"/models/types"))," API method or the ",(0,a.kt)("inlineCode",{parentName:"li"},"ListModelTypes")," gRPC API method. The method responds with all the available model types."),(0,a.kt)("li",{parentName:"ul"},"If you want to create a model with your preferred model type, you can make a ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," request to the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.clarifai.com/api-guide/model/create-get-update-and-delete/#create-a-model"},(0,a.kt)("inlineCode",{parentName:"a"},"/models"))," API method or the ",(0,a.kt)("inlineCode",{parentName:"li"},"PostModels")," gRPC API method with the ",(0,a.kt)("inlineCode",{parentName:"li"},"model_type_id")," parameter specified in the request. ")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/model-types/"},"Click here")," to learn more about the model types we offer.")))}c.isMDXComponent=!0}}]);