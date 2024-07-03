"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7981],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),y=a,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return t?n.createElement(g,i(i({ref:r},u),{},{components:t})):n.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},80273:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(58168),a=(t(96540),t(15680));const o={description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},i="Search Overview",s={unversionedId:"api-guide/search/rank-filter-combine-or-negate",id:"api-guide/search/rank-filter-combine-or-negate",title:"Search Overview",description:"Search helps you sort, save, organize and filter your datasets.",source:"@site/docs/api-guide/search/rank-filter-combine-or-negate.md",sourceDirName:"api-guide/search",slug:"/api-guide/search/rank-filter-combine-or-negate",permalink:"/api-guide/search/rank-filter-combine-or-negate",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/api-guide/search/rank-filter-combine-or-negate.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Search helps you sort, save, organize and filter your datasets.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Search, Sort, Filter, and Save",permalink:"/api-guide/search/"},next:{title:"Combine or Negate",permalink:"/api-guide/search/combine-or-negate"}},c={},l=[{value:"Rank",id:"rank",level:2},{value:"Filter",id:"filter",level:2},{value:"&#39;AND&#39;",id:"and",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...o}=e;return(0,a.yg)(p,(0,n.A)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"search-overview"},"Search Overview"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Search helps you sort, save, organize, and filter your datasets")),(0,a.yg)("hr",null),(0,a.yg)("p",null,"You can send inputs ","(","as a url or bytes",")"," and once indexed, you can search for images by concept, image, or many advanced search parameters. When you ",(0,a.yg)("inlineCode",{parentName:"p"},"POST /inputs"),", your base workflow is used to index your inputs, and this index enables search over the outputs of the models in your workflow."),(0,a.yg)("h2",{id:"rank"},"Rank"),(0,a.yg)("p",null,"Your model can identify concepts in your data and rank your search results by how confident it is that a given concept is present. You can even rank search results by how similar one input is to another input."),(0,a.yg)("h2",{id:"filter"},"Filter"),(0,a.yg)("p",null,"Trim down the amount of data returned in search. For example, you may only want to see inputs that one of your collaborators has labeled with the word \u201cdog\u201d. Or, perhaps you want only those inputs that were captured in a certain geographical region."),(0,a.yg)("h2",{id:"and"},"'AND'"),(0,a.yg)("p",null,'Combine multiple search parameters. For example, you can find all the inputs within a geographical region with a "weapon" in them, or all annotations assigned to user "Joe", or visually similar product images that are assigned the word "XL" in metadata.'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Image illustrating how to search by images using Clarifai&#39;s concepts",src:t(92886).A,width:"700",height:"440"})))}d.isMDXComponent=!0},92886:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/illustration-search-a58627abea1da262a22cba6a8efc372c.png"}}]);