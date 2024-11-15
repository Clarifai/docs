"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[6664],{15319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=n(74848),s=n(28453),r=n(3514),i=n(84142);const o={description:"Manage the datasets for training, testing, and evaluating your models",pagination_prev:null},l="Datasets",c={id:"portal-guide/datasets/README",title:"Datasets",description:"Manage the datasets for training, testing, and evaluating your models",source:"@site/docs/portal-guide/datasets/README.mdx",sourceDirName:"portal-guide/datasets",slug:"/portal-guide/datasets/",permalink:"/portal-guide/datasets/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/datasets/README.mdx",tags:[],version:"current",frontMatter:{description:"Manage the datasets for training, testing, and evaluating your models",pagination_prev:null},sidebar:"tutorialSidebar",next:{title:"Create, Get, Update, Merge, and Delete",permalink:"/portal-guide/datasets/create-get-update-delete"}},d={},u=[];function h(e){const t={h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"datasets",children:"Datasets"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Manage the datasets for training, testing, and evaluating your models"})}),"\n",(0,a.jsx)("hr",{}),"\n",(0,a.jsx)(t.p,{children:"A dataset is a collection of data examples you can use to train, test, and evaluate your machine learning model. With Clarifai datasets, you can manage the data you want to use for visual search, model training, and evaluation."}),"\n",(0,a.jsx)(t.p,{children:"Datasets are stored as convenient snapshots in datasets tables, and they play a critical role in determining the performance of your models."}),"\n",(0,a.jsx)(t.p,{children:"The quality and quantity of the data in the dataset can significantly impact the accuracy and robustness of the resulting machine learning model. Therefore, it is essential to select a relevant and sufficient dataset for the task you have at hand."}),"\n",(0,a.jsx)(t.p,{children:"You can add different types of datasets on the Clarifai platform, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Training dataset"})," \u2014 This is the data you can use to initially train a model. It comprises a set of annotated examples, where the annotations are the output values the model is expected to predict."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Validation dataset"})," \u2014 This is the data you can use to fine-tune your model's hyperparameters and assess its performance during training. It comprises a set of annotated examples that are not used for training, but are used to gauge the model's performance."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Testing dataset"})," \u2014 This is the data you can use to assess the final performance of your trained model. It comprises a set of annotated examples that are not used for training or validation."]}),"\n"]}),"\n","\n",(0,a.jsx)(r.A,{items:(0,i.$S)().items})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>y});n(96540);var a=n(18215),s=n(84142),r=n(28774),i=n(53465),o=n(16654),l=n(21312),c=n(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(74848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(r.A,{href:t,className:(0,a.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:s,description:r}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,a.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),r&&(0,u.jsx)("p",{className:(0,a.A)("text--truncate",d.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),a=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??a(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??a?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const r=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,a.A)("row",n),children:r.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},53465:(e,t,n)=>{n.d(t,{W:()=>c});var a=n(96540),s=n(44586);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const s=n.select(t),r=n.pluralForms.indexOf(s);return a[Math.min(r,a.length-1)]}(n,t,e)}}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);