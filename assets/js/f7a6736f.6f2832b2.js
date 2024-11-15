"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1333],{65457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453),o=n(3514),s=n(84142);const a={description:"Learn how to use LiteLLM along with Clarifai SDKs",pagination_prev:null},l="LiteLLM Clarifai Integration",c={id:"integrations/LiteLLM/README",title:"LiteLLM Clarifai Integration",description:"Learn how to use LiteLLM along with Clarifai SDKs",source:"@site/docs/integrations/LiteLLM/README.mdx",sourceDirName:"integrations/LiteLLM",slug:"/integrations/LiteLLM/",permalink:"/integrations/LiteLLM/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/LiteLLM/README.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to use LiteLLM along with Clarifai SDKs",pagination_prev:null},sidebar:"tutorialSidebar",next:{title:"Using Clarifai Models In LiteLLM",permalink:"/integrations/LiteLLM/clarifai-litellm"}},u={},d=[];function f(e){const t={a:"a",h1:"h1",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"litellm-clarifai-integration",children:"LiteLLM Clarifai Integration"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Learn how to use LiteLLM along with Clarifai SDKs"})}),"\n",(0,i.jsx)("hr",{}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://www.litellm.ai/",children:"LiteLLM"})," takes complex large language models and makes them easier to use for everyone. LiteLLM works with many different language models, so you can find the perfect one for your task. LiteLLM offers functionalities like load balancing, fallback mechanisms, and cost tracking, making it a user-friendly and efficient solution for developers working with LLMs. It also runs efficiently, so you don't need a supercomputer to use it. Basically, it gives you the power of these advanced language models without all the hassle. By integrating Clarifai into LiteLLM, users gain access to Clarifai's various ready-to-use community LLM models."]}),"\n","\n",(0,i.jsx)(o.A,{items:(0,s.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(96540);var i=n(18215),r=n(84142),o=n(28774),s=n(53465),a=n(16654),l=n(21312),c=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function f(e){let{href:t,children:n}=e;return(0,d.jsx)(o.A,{href:t,className:(0,i.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:o}=e;return(0,d.jsxs)(f,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),o&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function L(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(L,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(p,{...e});const o=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var i=n(96540),r=n(44586);const o=["zero","one","two","few","many","other"];function s(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),o=n.pluralForms.indexOf(r);return i[Math.min(o,i.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);