"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6114],{88636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(74848),o=n(28453),s=n(3514),i=n(84142);const a={},c="Advanced Model Operations",l={id:"sdk/advance-model-operations/README",title:"Advanced Model Operations",description:"Learn how to perform advanced model operations using Clarifai SDKs",source:"@site/docs/sdk/advance-model-operations/README.mdx",sourceDirName:"sdk/advance-model-operations",slug:"/sdk/advance-model-operations/",permalink:"/sdk/advance-model-operations/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/sdk/advance-model-operations/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advance Search Operations",permalink:"/sdk/Search/Advance-Search"},next:{title:"Model Upload",permalink:"/sdk/advance-model-operations/model-upload"}},d={},u=[];function m(e){const t={h1:"h1",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"advanced-model-operations",children:"Advanced Model Operations"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Learn how to perform advanced model operations using Clarifai SDKs"})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(t.p,{children:"The Clarifai SDKs offer a powerful set of tools for advanced model operations, which are tailored to support a wide range of use cases. A standout feature is the ability to upload external or custom-built models, which allows users to effortlessly integrate them into our platform."}),"\n",(0,r.jsx)(t.p,{children:"The model upload functionality provides greater flexibility by enabling custom models to be embedded into applications or pipelines, giving users more control and ensuring compatibility with specific hardware requirements."}),"\n",(0,r.jsx)(t.p,{children:"These capabilities empower users to create a robust, end-to-end machine learning workflows entirely within the Clarifai ecosystem."}),"\n","\n",(0,r.jsx)(s.A,{items:(0,i.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>v});n(96540);var r=n(18215),o=n(84142),s=n(28774),i=n(53465),a=n(16654),c=n(21312),l=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(96540),o=n(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var r=n(96540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);