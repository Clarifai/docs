"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3691],{25726:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=t(74848),r=t(28453),i=t(11470),s=t(19365);const o={description:"Learn how to create a Clarifai App",sidebar_position:1},l="Create an Application",c={id:"clarifai-basics/applications/create-an-application",title:"Create an Application",description:"Learn how to create a Clarifai App",source:"@site/docs/clarifai-basics/applications/create-an-application.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/create-an-application",permalink:"/clarifai-basics/applications/create-an-application",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/applications/create-an-application.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn how to create a Clarifai App",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Applications",permalink:"/clarifai-basics/applications/"},next:{title:"App Overview and Settings",permalink:"/clarifai-basics/applications/application-settings"}},p={},u=[{value:"Create an App on the Portal",id:"create-an-app-on-the-portal",level:2},{value:"Copy (Duplicate) Apps",id:"copy-duplicate-apps",level:2},{value:"Create Apps Programmatically",id:"create-apps-programmatically",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"create-an-application",children:"Create an Application"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Learn how to create a Clarifai application"})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsxs)(a.p,{children:["As mentioned previously, ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/clarifai-basics/applications/",children:"apps"})," on the Clarifai platform act as a central repository for models, datasets, inputs, and other resources."]}),"\n",(0,n.jsx)(a.h2,{id:"create-an-app-on-the-portal",children:"Create an App on the Portal"}),"\n",(0,n.jsxs)(a.p,{children:["To create an app, ",(0,n.jsx)(a.a,{href:"https://clarifai.com/login",children:"log in"})," to your account and click the ",(0,n.jsx)(a.strong,{children:"Create"})," button at the upper-right section of the navigation bar."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"create app portal",src:t(4889).A+"",width:"1886",height:"790"})}),"\n",(0,n.jsxs)(a.p,{children:["And on the window that pops up, select the ",(0,n.jsx)(a.strong,{children:"Start with a Blank App"})," option to create a new application from scratch."]}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["You can also select the ",(0,n.jsx)(a.strong,{children:"Use an App Template"})," option to ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/clarifai-basics/app-templates",children:"use a template"})," to create a new application."]})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"application creation window",src:t(93239).A+"",width:"1918",height:"749"})}),"\n",(0,n.jsx)(a.p,{children:"Next, on the window that appears, provide the information required to create a new application."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(56706).A+"",width:"1910",height:"795"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"App ID"})," \u2014 This serves as a unique identifier for your application. It\u2019s important to choose a unique and memorable ID as it will be used for URLs and redirections."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Short Description"})," \u2014 Optionally, provide a brief description that outlines the purpose or features of your app."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Primary Input Type"})," \u2014 Select the primary type of inputs that will be available in your app: either images/videos or texts/documents."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Advanced Settings"})," \u2014 This collapsible field allows you to choose the ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/",children:"base workflow"})," for your app. Base workflows index your data and furnish your app with a default knowledge base. While a base workflow is automatically selected based on your primary input type, you can choose another one that best suits your specific use case."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(a.admonition,{title:"ID Validation",type:"note",children:[(0,n.jsx)(a.p,{children:"Application names and other names in the Portal must follow a few rules:"}),(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Names must be 1 to 32 letters or numbers in length, with hyphens or underscores as separators."}),"\n",(0,n.jsx)(a.li,{children:"Spaces, periods, etc., are not allowed as separators."}),"\n"]})]}),"\n",(0,n.jsxs)(a.p,{children:["Lastly, click the ",(0,n.jsx)(a.strong,{children:"Create App"})," button at the upper-right corner of the page."]}),"\n",(0,n.jsx)(a.h2,{id:"copy-duplicate-apps",children:"Copy (Duplicate) Apps"}),"\n",(0,n.jsx)(a.p,{children:"You can also create an app by cloning an existing application. Cloning an existing application can be a great way to start a new project, or branch an existing one. We\u2019ve made cloning easy with a simple interface in the Portal."}),"\n",(0,n.jsxs)(a.p,{children:["After logging in to your Clarifai account, select the ",(0,n.jsx)(a.strong,{children:"My Apps"})," option on the navigation bar. Then, select the ",(0,n.jsx)(a.strong,{children:"Apps / Templates"})," option on the menu bar, and a list of your apps will populate that page."]}),"\n",(0,n.jsxs)(a.p,{children:["Click the series of dots at the bottom-right corner of the app you want to copy its contents. Then, select the ",(0,n.jsx)(a.strong,{children:"Duplicate"})," option on the list that drops down."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(20621).A+"",width:"1888",height:"898"})}),"\n",(0,n.jsx)(a.p,{children:"The small window that pops up lets you select the destination user or organization, along with the destination app. You can copy the app as a new one or select an existing app. Additionally, you can specify particular resources you wish to duplicate."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(40007).A+"",width:"1815",height:"885"})}),"\n",(0,n.jsxs)(a.p,{children:["Lastly, click the ",(0,n.jsx)(a.strong,{children:"Confirm"})," button, and the copied app will be automatically created for you."]}),"\n",(0,n.jsx)(a.h2,{id:"create-apps-programmatically",children:"Create Apps Programmatically"}),"\n",(0,n.jsx)(a.p,{children:"For enterprise customers, it is also possible to generate applications programmatically."}),"\n",(0,n.jsx)(a.p,{children:"If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create apps this way. This ensures that each individual user only has access to their own private resources."}),"\n",(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["You need to use a ",(0,n.jsx)(a.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"Personal Access Token (PAT)"})," to create an application."]})}),"\n","\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(s.A,{value:"curl",label:"cURL",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "apps": [\n        {\n            "id": "test-application"\n        }\n    ]\n}\'\n'})})})})]})}function h(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},19365:(e,a,t)=>{t.d(a,{A:()=>s});t(96540);var n=t(18215);const r={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:a,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:t,children:a})}},11470:(e,a,t)=>{t.d(a,{A:()=>v});var n=t(96540),r=t(18215),i=t(23104),s=t(56347),o=t(205),l=t(57485),c=t(31682),p=t(70679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return u(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(r.location.search);a.set(i,e),r.replace({...r.location,search:a.toString()})}),[i,r])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,i=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,u]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,i]=(0,p.Dv)(t);return[r,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(74848);function w(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),p=e=>{const a=e.currentTarget,t=l.indexOf(a),r=o[t].value;r!==n&&(c(a),s(r))},u=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:u,onClick:p,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function j(e){let{lazy:a,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r})))})}function y(e){const a=m(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(w,{...a,...e}),(0,x.jsx)(j,{...a,...e})]})}function v(e){const a=(0,b.A)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(a))}},20621:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/app_duplication-4a054c1e50f5daf4a99b0fce71e997fa.png"},93239:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-new-app-new-7cbf2db984b3a40538c5dbec7ed09773.png"},40007:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/app_duplication-1-9542ca68ac3d19657618ce21ede0a5d9.png"},4889:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-new-app-new-1-3e85b1008a2ebd173847c428454e0aad.png"},56706:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/create-new-app-new-2-30c0aef22091433e3e721aea37d962b0.png"},28453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var n=t(96540);const r={},i=n.createContext(r);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);