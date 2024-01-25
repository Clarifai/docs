"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),p=a,f=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),l=r(13919),c=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function m(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},37096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905)),i=r(52991),o=r(53438);const l={description:"Clarifai makes it unbelievably easy to train new models. If you are using a could-deployed instance of the Clarifai platform, once your model is trained, it is already deployed and ready to use."},c="Creating and Training Models",s={unversionedId:"api-guide/model/README",id:"api-guide/model/README",title:"Creating and Training Models",description:"Clarifai makes it unbelievably easy to train new models. If you are using a could-deployed instance of the Clarifai platform, once your model is trained, it is already deployed and ready to use.",source:"@site/docs/api-guide/model/README.mdx",sourceDirName:"api-guide/model",slug:"/api-guide/model/",permalink:"/api-guide/model/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/model/README.mdx",tags:[],version:"current",frontMatter:{description:"Clarifai makes it unbelievably easy to train new models. If you are using a could-deployed instance of the Clarifai platform, once your model is trained, it is already deployed and ready to use."},sidebar:"tutorialSidebar",previous:{title:"Task Annotations",permalink:"/api-guide/annotate/task-annotations"},next:{title:"Clarifai Models",permalink:"/api-guide/model/clarifai-models"}},d={},u=[],m={toc:u},p="wrapper";function f(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-and-training-models"},"Creating and Training Models"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Easily create and train models")),(0,a.kt)("hr",null),(0,a.kt)("admonition",{title:"note",type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Clarifai makes it unbelievably easy to train new models. If you are using a cloud-deployed instance of the Clarifai platform, once your model is trained, it is already deployed and ready to use.")),(0,a.kt)("p",null,"The Clarifai platform makes it easy for you to use AI models to power your business solution. You can create your own custom models, or get started right away by using one of our pre-optimized Clarifai Models."),(0,a.kt)("p",null,'When you are ready to train a model, just click the "Train" button in Explorer or the "Versions" tab in the Portal. Your model will be trained on all inputs that have been processed. You can also choose to train your model based on the results of a specific search query. '),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(61699).Z,width:"271",height:"294"})),(0,a.kt)(i.Z,{items:(0,o.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0},61699:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enlight-007484a47c7d0ce73a1cf6d4866ed349.svg"}}]);