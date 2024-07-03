"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8650],{15680:(a,t,e)=>{e.d(t,{xA:()=>p,yg:()=>y});var r=e(96540);function n(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function i(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function o(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){n(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function s(a,t){if(null==a)return{};var e,r,n=function(a,t){if(null==a)return{};var e,r,n={},i=Object.keys(a);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||(n[e]=a[e]);return n}(a,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)e=i[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var l=r.createContext({}),c=function(a){var t=r.useContext(l),e=t;return a&&(e="function"==typeof a?a(t):o(o({},t),a)),e},p=function(a){var t=c(a.components);return r.createElement(l.Provider,{value:t},a.children)},u="mdxType",d={inlineCode:"code",wrapper:function(a){var t=a.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(a,t){var e=a.components,n=a.mdxType,i=a.originalType,l=a.parentName,p=s(a,["components","mdxType","originalType","parentName"]),u=c(e),g=n,y=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return e?r.createElement(y,o(o({ref:t},p),{},{components:e})):r.createElement(y,o({ref:t},p))}));function y(a,t){var e=arguments,n=t&&t.mdxType;if("string"==typeof a||n){var i=e.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=a,s[u]="string"==typeof a?a:n,o[1]=s;for(var c=2;c<i;c++)o[c]=e[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}g.displayName="MDXCreateElement"},18203:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=e(58168),n=(e(96540),e(15680));const i={description:"Improve your data processing and analytics capabilities"},o="Integrating Clarifai With Databricks",s={unversionedId:"integrations/databricks/README",id:"integrations/databricks/README",title:"Integrating Clarifai With Databricks",description:"Improve your data processing and analytics capabilities",source:"@site/docs/integrations/databricks/README.mdx",sourceDirName:"integrations/databricks",slug:"/integrations/databricks/",permalink:"/integrations/databricks/",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/integrations/databricks/README.mdx",tags:[],version:"current",frontMatter:{description:"Improve your data processing and analytics capabilities"},sidebar:"tutorialSidebar",previous:{title:"Text Embeddings",permalink:"/integrations/llamaindex/text-embeddings"},next:{title:"Upload Data",permalink:"/integrations/databricks/upload-data"}},l={},c=[],p={toc:c},u="wrapper";function d(a){let{components:t,...e}=a;return(0,n.yg)(u,(0,r.A)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"integrating-clarifai-with-databricks"},"Integrating Clarifai With Databricks"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Improve your data processing and analytics capabilities ")),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://docs.databricks.com/en/introduction/index.html"},"Databricks")," is a cloud-based data platform for big data analytics and machine learning. You can use its unified interface and tools to process, store, clean, share, analyze, model, and monetize your datasets and AI solutions at scale. "),(0,n.yg)("p",null,"Databricks is built on top of ",(0,n.yg)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark"),", an open-source, fast, and general-purpose cluster-computing framework. Spark allows for distributed data processing, making it suitable for handling large-scale data and complex analytics tasks."),(0,n.yg)("p",null,"Databricks provides a wide range of features that make it easy to use Spark, including:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Managed clusters"),": Databricks automatically manages Spark clusters for you, so you don't have to worry about the hassle of setting them up and maintaining them."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Interactive notebooks"),": Databricks supports interactive notebooks, similar to Jupyter notebooks, which allow you to create and share documents that contain live code, equations, visualizations, and narrative text."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Collaboration tools"),": Databricks provides collaboration tools that make it easy for your teams to work together in a shared workspace. ")),(0,n.yg)("p",null,"Integrating Clarifai with Databricks allows you to streamline and manage your machine learning journey. By combining Clarifai's capabilities with Databricks, you can gain advanced analytical insights from both structured and unstructured data. "),(0,n.yg)("p",null,"Integrating Clarifai into the Databricks environment allows you to:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Upload your datasets into a Clarifai application. This simplifies transferring data from Databricks into Clarifai. "),(0,n.yg)("li",{parentName:"ul"},"Fetch datasets from a Clarifai application to Databricks. This facilitates further data exploration and analysis within Databricks. "),(0,n.yg)("li",{parentName:"ul"},"Fetch annotations from a Clarifai application to Databricks. This enriches your training data, improving the accuracy and performance of your machine learning models.")))}d.isMDXComponent=!0}}]);