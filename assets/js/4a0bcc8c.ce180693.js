"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4105],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>d});var i=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),u=n,d=g["".concat(l,".").concat(u)]||g[u]||m[u]||r;return a?i.createElement(d,p(p({ref:t},c),{},{components:a})):i.createElement(d,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,p=new Array(r);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:n,p[1]=o;for(var s=2;s<r;s++)p[s]=a[s];return i.createElement.apply(null,p)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},29919:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=a(58168),n=(a(96540),a(15680));const r={description:"Create applications faster with pre-built blueprints",sidebar_position:5},p="App Templates",o={unversionedId:"clarifai-basics/app-templates",id:"clarifai-basics/app-templates",title:"App Templates",description:"Create applications faster with pre-built blueprints",source:"@site/docs/clarifai-basics/app-templates.md",sourceDirName:"clarifai-basics",slug:"/clarifai-basics/app-templates",permalink:"/clarifai-basics/app-templates",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/app-templates.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Create applications faster with pre-built blueprints",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"App Collaboration",permalink:"/clarifai-basics/applications/collaboration"},next:{title:"Authentication",permalink:"/clarifai-basics/authentication/"}},l={},s=[{value:"Why Use an App Template?",id:"why-use-an-app-template",level:2},{value:"App Templates Examples",id:"app-templates-examples",level:2},{value:"How to Create an App Using a Template",id:"how-to-create-an-app-using-a-template",level:2},{value:"Via the create-an-app modal",id:"via-the-create-an-app-modal",level:3},{value:"Via an app\u2019s template page",id:"via-an-apps-template-page",level:3}],c={toc:s},g="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(g,(0,i.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"app-templates"},"App Templates"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Create applications faster with pre-built blueprints")),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Clarifai app templates are pre-built blueprints that provide a starting point for creating your own applications. They are apps with their contents grouped by some use case \u2014 enabling you to easily get started building your applications. "),(0,n.yg)("p",null,"When you choose a template to create an app, the configurations and resources available in the template will be preemptively applied to your new application. You can use the pre-built components to quickly apply AI to your specific use case. "),(0,n.yg)("admonition",{type:"info"},(0,n.yg)("p",{parentName:"admonition"},"Apps on the Clarifai platform are like self-contained projects. They store and handle your data, annotations, ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/"},"models"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/setting-up-a-mesh-workflow"},"workflows"),", ",(0,n.yg)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/modules/"},"modules"),", and other resources. ")),(0,n.yg)("h2",{id:"why-use-an-app-template"},"Why Use an App Template?"),(0,n.yg)("p",null,"You might choose an app template over building a custom application from scratch for several reasons."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Time efficiency")," \u2014 App templates provide a head start in your AI development journey. They offer a ready-made foundation to launch your application much faster than starting from scratch. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Leverage pre-existing resources")," \u2014 App templates empower you to leverage pre-existing resources, such as models, workflows, or modules. Instead of starting from scratch, you can begin with a fully equipped application that addresses a particular use case. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Ease of customization")," \u2014 While app templates provide a foundation for AI development, they are often highly customizable. You can easily modify the template to suit your preferences. "))),(0,n.yg)("h2",{id:"app-templates-examples"},"App Templates Examples"),(0,n.yg)("p",null,"We provide a variety of application templates in various categories to help you hit the ground running. "),(0,n.yg)("admonition",{title:"on rapid expansion",type:"warning"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"We're constantly expanding our library of templates, with new additions released on a regular basis. You can check ",(0,n.yg)("a",{parentName:"p",href:"https://clarifai.com/explore/apps?activeToggle=Templates&page=1&perPage=24"},"here")," for them. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"We'll also introduce the ability to build your own app templates soon. ")))),(0,n.yg)("p",null,"Here are some examples:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/chatbot-template"},"Chatbot Template"))," \u2014 It serves as an extensive guide for building AI chatbot assistants swiftly and effectively, utilizing the capabilities of Clarifai's Large Language Models (LLMs). "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/content-generation-template"},"Content Generation"))," \u2014 It empowers you to effortlessly craft a variety of high-quality textual content, from compelling emails and blog posts to engaging social media content and captivating stories. This helps boost your communication skills and spark your creativity."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/document-summarization"},"Document Summarization"))," \u2014 It lets you condense a longer text document into a shorter version that captures the most important points or information. This template provides different methods for summarization that cater to different lengths and complexities of text. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/image-moderation"},"Image Moderation"))," \u2014 It provides diverse AI-powered workflows for automatically filtering and categorizing inappropriate or harmful images based on various criteria."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/rag-template"},"RAG Template"))," \u2014 It streamlines the creation of Retrieval-Augmented Generation (RAG) applications with Clarifai. This lets you enhance LLMs with external knowledge for accurate, up-to-date information generation. "),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/text-moderation"},"Text Moderation"))," \u2014 It explores various text moderation use cases and provides several ready-to-use workflows and models. It leverages different NLP models and LLMs to address diverse scenarios."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},(0,n.yg)("a",{parentName:"strong",href:"https://clarifai.com/clarifai/coding-template"},"Coding Template"))," \u2014 It explores a variety of coding scenarios and includes pre-built workflows tailored to address specific use cases, utilizing specialized models for each unique situation.")),(0,n.yg)("h2",{id:"how-to-create-an-app-using-a-template"},"How to Create an App Using a Template"),(0,n.yg)("p",null,"There are two ways to create an application using a template. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Via the create-an-app modal"),(0,n.yg)("li",{parentName:"ul"},"Via an app\u2019s template page")),(0,n.yg)("h3",{id:"via-the-create-an-app-modal"},"Via the create-an-app modal"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://clarifai.com/login"},"Log in")," to your account and click the ",(0,n.yg)("strong",{parentName:"p"},"Create")," button at the upper-right section of the navigation bar. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(79019).A,width:"1897",height:"912"})),(0,n.yg)("p",null,"On the modal window that pops up, select the ",(0,n.yg)("strong",{parentName:"p"},"Use an App Template")," option. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(25520).A,width:"1901",height:"623"})),(0,n.yg)("p",null,"The ensuing page lets you select a template for creating your application. You can opt for a template provided by the community or select one of your own creations."),(0,n.yg)("p",null,"For this illustration, let\u2019s select the ",(0,n.yg)("strong",{parentName:"p"},"text-moderation")," template, which is provided by the community. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(6073).A,width:"1905",height:"925"})),(0,n.yg)("p",null,"On the template\u2019s individual page, you'll find an overview of its available resources as well as a description of its functionality. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(74979).A,width:"1896",height:"879"})),(0,n.yg)("p",null,"When you click the view link of a resource, a modal will pop up, allowing you to easily view the available resources in the template, including inputs, datasets, models, workflows, and modules."),(0,n.yg)("p",null,"For example, if you click the ",(0,n.yg)("strong",{parentName:"p"},"View models")," link, a modal will appear displaying the models included in the template. You can also browse through the other tabs to explore additional resources present in the template."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(38120).A,width:"1891",height:"860"})),(0,n.yg)("p",null,"Next, click the ",(0,n.yg)("strong",{parentName:"p"},"Select Template")," button at the upper-right corner of the page. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(29350).A,width:"1887",height:"872"})),(0,n.yg)("p",null,"Next, specify the setup of your new application. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Provide an app ID, which serves as a unique identifier for your application. It\u2019s important to choose a unique and memorable ID as it will be used for URLs and redirections. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Optionally, provide a brief description that outlines the purpose or features of your app. "))),(0,n.yg)("p",null,"Lastly, click the ",(0,n.yg)("strong",{parentName:"p"},"Create App")," button at the upper-right corner of the page. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(52015).A,width:"1881",height:"739"})),(0,n.yg)("p",null,"Once the app has been created, you can begin using it immediately. For example, you can use one of its workflows for text moderation tasks. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(8153).A,width:"1876",height:"898"})),(0,n.yg)("h3",{id:"via-an-apps-template-page"},"Via an app\u2019s template page"),(0,n.yg)("p",null,"After logging in to your Clarifai account, select the ",(0,n.yg)("strong",{parentName:"p"},"Community")," option on the navigation bar. "),(0,n.yg)("p",null,"Then, select the ",(0,n.yg)("strong",{parentName:"p"},"Apps / Templates")," option on the menu bar as well as ",(0,n.yg)("strong",{parentName:"p"},"Templates")," on the far-right side. A list of community templates available will be populated on that page. "),(0,n.yg)("p",null,"Select the template you want to use. For this illustration, let\u2019s select the ",(0,n.yg)("strong",{parentName:"p"},"rag-template")," template."),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(33108).A,width:"1887",height:"898"})),(0,n.yg)("p",null,"You\u2019ll be directed to the template\u2019s individual page. "),(0,n.yg)("p",null,(0,n.yg)("img",{src:a(54237).A,width:"1913",height:"897"})),(0,n.yg)("p",null,"Click the ",(0,n.yg)("strong",{parentName:"p"},"Use Template")," button at the upper-right corner of the page. And in the small window that pops up, provide the details for creating your new application \u2013 as mentioned earlier. The pop-up window also displays the types of resources included within the template."),(0,n.yg)("p",null,"Lastly, click the ",(0,n.yg)("strong",{parentName:"p"},"Create App")," button to finalize the creation of your app."))}m.isMDXComponent=!0},79019:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-1-f3051ebbc57407a78fe9308bc2be1aa1.png"},25520:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-2-6c9a94d71a7174f02edde32d1652f7f6.png"},74979:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-3-1-6cdf6214033261aa0384041ae58e0838.png"},38120:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-3-2-a422418c043a4131f4ff37088bcddae3.png"},6073:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-3-d580e275f1406b35e73fa3ff12cc4c13.png"},29350:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-4-01638fc8fa43a150983cf6d1de5ddeb8.png"},8153:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-5-1-85c86cd35bf37eb2ad523da8e6c0da16.png"},52015:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-5-3e0370fa9efd2e0a9abad4973712deb8.png"},33108:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-6-ffb7a095de6092781bd18c11bde8cad1.png"},54237:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/app-template-7-6e1fdc510ce8079876270d1464d058a8.png"}}]);