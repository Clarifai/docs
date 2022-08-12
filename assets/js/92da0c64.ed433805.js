"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7104],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,a(a({ref:r},u),{},{components:t})):n.createElement(m,a({ref:r},u))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},45360:function(e,r,t){t.d(r,{Z:function(){return b}});var n=t(67294),i=t(39960),o=t(63616),a=t(86010),c="cardContainer_w8bb",l="cardContainerLink_AhGd",s="cardTitle_t-cI",u="cardDescription_aEbl",d=t(13919);function p(e){var r=e.href,t=e.children,o=(0,a.Z)("card margin-bottom--lg padding--lg",c,r&&l);return r?n.createElement(i.Z,{href:r,className:o},t):n.createElement("div",{className:o},t)}function f(e){var r=e.href,t=e.icon,i=e.title,o=e.description;return n.createElement(p,{href:r},n.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},t," ",i),n.createElement("div",{className:(0,a.Z)("text--truncate",u),title:o},o))}function m(e){var r=e.item,t=(0,o.Wl)(r);return n.createElement(f,{href:t,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.items.length+" items"})}function g(e){var r,t=e.item,i=(0,d.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(r=t.docId)?r:void 0);return n.createElement(f,{href:t.href,icon:i,title:t.label,description:null==a?void 0:a.description})}function h(e){var r=e.item;switch(r.type){case"link":return n.createElement(g,{item:r});case"category":return n.createElement(m,{item:r});default:throw new Error("unknown item type "+JSON.stringify(r))}}function b(e){var r=e.items;return n.createElement("div",{className:"row"},r.map((function(e,r){return n.createElement("article",{key:r,className:"col col--6"},n.createElement(h,{item:e}))})))}},75739:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),a=t(45360),c=t(63616),l=["components"],s={description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."},u="Creating Workflows",d={unversionedId:"api-guide/workflows/README",id:"api-guide/workflows/README",title:"Creating Workflows",description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic.",source:"@site/docs/api-guide/workflows/README.mdx",sourceDirName:"api-guide/workflows",slug:"/api-guide/workflows/",permalink:"/api-guide/workflows/",tags:[],version:"current",frontMatter:{description:"Mesh provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."},sidebar:"tutorialSidebar",previous:{title:"Improving Your Model",permalink:"/api-guide/evaluate/improving-your-model"},next:{title:"Base Workflows",permalink:"/api-guide/workflows/base-workflows"}},p=[],f={toc:p};function m(e){var r=e.components,s=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-workflows"},"Creating Workflows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand Mesh Workflows")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Mesh Workflows provides a modular architecture for your inference pipeline. Mesh provides the building blocks for advanced machine learning ensemble modeling and business logic."),(0,o.kt)("p",null,"Use Mesh Workflows to process complex logic, gain insights, and build targeted solutions. With Mesh Workflows, you can work with your machine learning models like they are nodes in a graph. "),(0,o.kt)("p",null,"Clarifai makes it easy to connect together models of different kinds so that you can perform complex operations on your data, and build solutions that target your specific business needs."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(24618).Z})),(0,o.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}m.isMDXComponent=!0},24618:function(e,r,t){r.Z=t.p+"assets/images/mesh-234e605274fafc22e6752c491543ad4f.svg"}}]);