"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3048],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||h[d]||c;return r?a.createElement(y,i(i({ref:t},p),{},{components:r})):a.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const c={description:"Search your text inputs based on similarity or concepts",sidebar_position:6},i="Text Search",o={unversionedId:"legacy-portal-guide/psearch/text-search",id:"legacy-portal-guide/psearch/text-search",title:"Text Search",description:"Search your text inputs based on similarity or concepts",source:"@site/docs/legacy-portal-guide/psearch/text-search.md",sourceDirName:"legacy-portal-guide/psearch",slug:"/legacy-portal-guide/psearch/text-search",permalink:"/legacy-portal-guide/psearch/text-search",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{description:"Search your text inputs based on similarity or concepts",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Visual Search",permalink:"/legacy-portal-guide/psearch/visual-search"},next:{title:"Advanced Topics",permalink:"/legacy-portal-guide/advanced-topics"}},s={},l=[{value:"Text similarity search",id:"text-similarity-search",level:2},{value:"Search text by concept",id:"search-text-by-concept",level:2}],p={toc:l},u="wrapper";function h(e){let{components:t,...c}=e;return(0,n.kt)(u,(0,a.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"text-search"},"Text Search"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search your text inputs based on similarity or concepts")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"text-similarity-search"},"Text similarity search"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Search for similar text inputs",src:r(38129).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,"Much like an image-to-image search, Clarifai allows you to use text inputs as parameters for search. Just hover over the text input that you would like to use, and click the magnifying glass icon. Searching by an input will display a search tag that will have a popup button to view a larger preview if the text length is above 15 characters. The popover preview within the search tag displays up to 100 characters."),(0,n.kt)("h2",{id:"search-text-by-concept"},"Search text by concept"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Search text inputs by concepts",src:r(76870).Z,width:"1000",height:"562"})),(0,n.kt)("p",null,"You can search based on concepts by simply clicking on the name of the concept in the lefthand sidebar. You will see the concept added to the search bar and search results will be ranked based on inputs with the highest predicted values for a given concept."))}h.isMDXComponent=!0},38129:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-by-text-input-5607e283d82df93453b6e36fa869c448.jpg"},76870:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/search-text-by-concept-cdb18a7cb5c2bf0d894620b9993f617f.jpg"}}]);