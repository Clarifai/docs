"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3823],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=i.createContext({}),r=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=r(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=r(a),h=o,g=d["".concat(p,".").concat(h)]||d[h]||u[h]||n;return a?i.createElement(g,l(l({ref:t},c),{},{components:a})):i.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var r=2;r<n;r++)l[r]=a[r];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},44914:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>r});var i=a(87462),o=(a(67294),a(3905));const n={description:"How to change the settings of an application",sidebar_position:2},l="Application Settings",s={unversionedId:"clarifai-basics/applications/application-settings",id:"clarifai-basics/applications/application-settings",title:"Application Settings",description:"How to change the settings of an application",source:"@site/docs/clarifai-basics/applications/application-settings.md",sourceDirName:"clarifai-basics/applications",slug:"/clarifai-basics/applications/application-settings",permalink:"/clarifai-basics/applications/application-settings",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/applications/application-settings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"How to change the settings of an application",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create an Application",permalink:"/clarifai-basics/applications/create-an-application"},next:{title:"Collaboration",permalink:"/clarifai-basics/applications/collaboration"}},p={},r=[{value:"API Keys",id:"api-keys",level:2},{value:"Create API Keys",id:"create-api-keys",level:3},{value:"Copy an API Key",id:"copy-an-api-key",level:3},{value:"Show an API Key",id:"show-an-api-key",level:3},{value:"Edit an API Key",id:"edit-an-api-key",level:3},{value:"Delete an API Key",id:"delete-an-api-key",level:3},{value:"Collaborators",id:"collaborators",level:2},{value:"Add Collaborators",id:"add-collaborators",level:3},{value:"Delete a Collaborator",id:"delete-a-collaborator",level:3},{value:"Base Workflow",id:"base-workflow",level:2},{value:"Update Visibility",id:"update-visibility",level:2},{value:"Delete Application",id:"delete-application",level:2},{value:"Delete all Models",id:"delete-all-models",level:2},{value:"Transfer Application",id:"transfer-application",level:2}],c={toc:r},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"application-settings"},"Application Settings"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to change an application's settings")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can change the settings of an application at any time. To do so, go to the application's individual page and select the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," option on the collapsible left sidebar."),(0,o.kt)("p",null,"You'll be redirected to the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page, where you can change the application's settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app settings",src:a(42488).Z,width:"1889",height:"901"})),(0,o.kt)("p",null,"Let's talk about the changes you can make on the page."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This page has intuitive elements that let you search for specific items and sort displayed items based on your preferences. ")),(0,o.kt)("h2",{id:"api-keys"},"API Keys"),(0,o.kt)("h3",{id:"create-api-keys"},"Create API Keys"),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Create API Key")," button to add a new API key to your app. Then, use the form that pops up to generate a new API key\u2014provide a short description, select the scopes, and click the ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"api keys",src:a(22554).Z,width:"1586",height:"811"})),(0,o.kt)("p",null,"The new ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/app-specific-api-keys"},"app-specific key")," will be listed in the ",(0,o.kt)("strong",{parentName:"p"},"API Keys")," section, where you can carry out various management tasks on it. "),(0,o.kt)("h3",{id:"copy-an-api-key"},"Copy an API Key"),(0,o.kt)("p",null,"You can copy an API key to the clipboard by clicking the copy button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"copy an api key",src:a(17211).Z,width:"1797",height:"397"})),(0,o.kt)("h3",{id:"show-an-api-key"},"Show an API Key"),(0,o.kt)("p",null,"You can reveal an API key by clicking the show button. You can also hide it by clicking the same button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"show api key",src:a(46194).Z,width:"1796",height:"382"})),(0,o.kt)("h3",{id:"edit-an-api-key"},"Edit an API Key"),(0,o.kt)("p",null,"You can edit an API key by clicking the edit button. A form will pop up that allows you to update the description and scopes of your API key. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"edit an api key",src:a(53641).Z,width:"1803",height:"790"})),(0,o.kt)("h3",{id:"delete-an-api-key"},"Delete an API Key"),(0,o.kt)("p",null,"You can delete an API key by clicking the delete button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete an api key",src:a(93987).Z,width:"1785",height:"359"})),(0,o.kt)("h2",{id:"collaborators"},"Collaborators"),(0,o.kt)("h3",{id:"add-collaborators"},"Add Collaborators"),(0,o.kt)("p",null,"To add a collaborator to your app, click the ",(0,o.kt)("strong",{parentName:"p"},"Add Collaborators")," button. Then, use the form that pops up to invite a collaborator\u2014provide an email address associated with their Clarifai account, select the scopes, and click the ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," button. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The collaborator you want to invite must have a registered account on the Clarifai portal. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add a collaborator",src:a(98603).Z,width:"1811",height:"705"})),(0,o.kt)("h3",{id:"delete-a-collaborator"},"Delete a Collaborator"),(0,o.kt)("p",null,"You can remove a collaborator by clicking the delete button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete a collaborator",src:a(6590).Z,width:"1819",height:"313"})),(0,o.kt)("h2",{id:"base-workflow"},"Base Workflow"),(0,o.kt)("p",null,"A Base Workflow is the workflow you choose as the default knowledge base when creating an application. It optimizes your custom model performance."),(0,o.kt)("p",null,"You can change your app's base workflow by selecting another one from the list that drops down when you click the workflows search box. You can choose public workflows or workflows you've created in your app. "),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Updating the base workflow will re-index your app, processing all inputs through the new base workflow. This may take some time, and could incur costs. You could avoid the costs by deleting all your inputs before updating the base workflow.")),(0,o.kt)("p",null,"After selecting your preferred Base Workflow, click the ",(0,o.kt)("strong",{parentName:"p"},"Change Base Workflow")," button. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"change base workflow",src:a(96373).Z,width:"1804",height:"546"})," "),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Performing any of the actions below is dangerous. So, you need to proceed with caution. ")),(0,o.kt)("h2",{id:"update-visibility"},"Update Visibility"),(0,o.kt)("p",null,"You can easily toggle your app's visibility between private and public modes by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Update Visibility")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"update visibility",src:a(436).Z,width:"1894",height:"628"})," "),(0,o.kt)("h2",{id:"delete-application"},"Delete Application"),(0,o.kt)("p",null,"You can delete the application by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Delete App")," button. A small window will pop up, prompting you to confirm the action. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete app",src:a(87247).Z,width:"1917",height:"720"})),(0,o.kt)("p",null,"Remember that once you delete an application, we cannot recover it. You will also lose all images, concepts, models, and other resources associated with that application. "),(0,o.kt)("h2",{id:"delete-all-models"},"Delete all Models"),(0,o.kt)("p",null,"You can delete all models by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Delete all Models")," button. A small window will pop up, prompting you to confirm the action. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"delete all models",src:a(91446).Z,width:"1915",height:"637"})),(0,o.kt)("h2",{id:"transfer-application"},"Transfer Application"),(0,o.kt)("p",null,"You can transfer your application to an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/clarifai-organizations/"},"organization")," you belong to and have permission to create apps. This would greatly enhance collaboration and boost your productivity."),(0,o.kt)("p",null,"To do so, click the ",(0,o.kt)("strong",{parentName:"p"},"Transfer")," button. On the small window that pops up, select the app\u2019s destination organization and give it a new name, if you want to."),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Confirm")," button to finalize the transfer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"transfer application",src:a(4916).Z,width:"1915",height:"739"})," "),(0,o.kt)("p",null,"The app will be successfully moved to the organization you selected, and it will no longer appear under your listed apps."))}u.isMDXComponent=!0},22554:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_1-6fa19a201e9ed15d67527fe60ae0db08.png"},91446:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_10-264f4086e2fdbb8cee8102e1d8d2d493.png"},87247:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_11-29d8baf7007761402d86fbc3b1b9291d.png"},17211:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_2-42a3757326bfc07952409fd4ac99b9f7.png"},46194:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_3-c15924727672dfd6c0c211c1d8646680.png"},53641:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_4-7de4ea33cee8f52cd99eb9f6914de352.png"},93987:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_5-90fcab9939cf53213a26f511f227b9b7.png"},98603:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_6-a37ac901fc1d2bd282ef7d692978b79c.png"},6590:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_7-e7497589ffe79fe8311abc8cac0f4644.png"},96373:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_8-2871515b163057962ce1fd5f7c338cd7.png"},4916:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_9-12553452f65fbe19d4902731d1d2620e.png"},436:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/application_settings_update_visibility-8432c943edb1593e7a73aefbf59f51a7.png"},42488:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/edit_application-dff01bd6d24b31df3bbd999a2f1cb595.jpg"}}]);