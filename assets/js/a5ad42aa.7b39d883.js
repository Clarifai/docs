"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2299],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2740:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(83117),i=(r(67294),r(3905));const a={description:"The Clarifai API helps you incorporate powerful AI technology in your application."},o="Clarifai API Basics",l={unversionedId:"api-guide/api-overview/README",id:"api-guide/api-overview/README",title:"Clarifai API Basics",description:"The Clarifai API helps you incorporate powerful AI technology in your application.",source:"@site/docs/api-guide/api-overview/README.mdx",sourceDirName:"api-guide/api-overview",slug:"/api-guide/api-overview/",permalink:"/api-guide/api-overview/",draft:!1,tags:[],version:"current",frontMatter:{description:"The Clarifai API helps you incorporate powerful AI technology in your application."},sidebar:"tutorialSidebar",previous:{title:"Get Started With Clarifai Community",permalink:"/clarifai-basics/community"},next:{title:"Clarifai API Clients",permalink:"/api-guide/api-overview/api-clients/"}},c={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"clarifai-api-basics"},"Clarifai API Basics"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Clarifai API helps you incorporate powerful AI technology into your application")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The Clarifai API ","(","Application Programming Interface",")"," is the interface that allows clients and servers to \u201ctalk\u201d to each other. This is for \u201csoftware to software\u201d communication, and it is useful for programmatically implementing Clarifai's AI technology within your own products and tools. "),(0,i.kt)("p",null,"The Clarifai API acts as a sort of \u201cgatekeeper\u201d to our software that translates clients like Python, Node, and Java. These clients are used to make requests, which the API translates to commands that the software can understand."),(0,i.kt)("p",null,"Clarifai\u2019s API allows users to access the Clarifai platform through four request types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"POST")," - Upload inputs and information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PATCH")," - Update or modify existing information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"GET")," - Request information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DELETE")," - Delete existing information")),(0,i.kt)("p",null,"You can access Clarifai's API over HTTPS via ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.clarifai.com"),"."),(0,i.kt)("admonition",{title:"important",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We recommend using a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"api-clients/"},"client library"))," to access our API. We offer official clients in a variety of programming languages.")),(0,i.kt)("p",null,"To access the Clarifai API in other languages, use the REST API directly. For REST documentation, see the cURL examples."))}u.isMDXComponent=!0}}]);