"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1704],{3905:function(t,e,n){n.d(e,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},l=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return n?a.createElement(f,r(r({ref:e},l),{},{components:n})):a.createElement(f,r({ref:e},l))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43133:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={description:"Learn about positive and negative annotations.",sidebar_position:8},p="Positive and Negative Annotations",c={unversionedId:"portal-guide/annotate/positive-and-negative-annotations",id:"portal-guide/annotate/positive-and-negative-annotations",title:"Positive and Negative Annotations",description:"Learn about positive and negative annotations.",source:"@site/docs/portal-guide/annotate/positive-and-negative-annotations.md",sourceDirName:"portal-guide/annotate",slug:"/portal-guide/annotate/positive-and-negative-annotations",permalink:"/portal-guide/annotate/positive-and-negative-annotations",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Learn about positive and negative annotations.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Training Data",permalink:"/portal-guide/annotate/training-data"},next:{title:"Creating and Training Models",permalink:"/portal-guide/model/"}},l=[],u={toc:l};function d(t){var e=t.components,s=(0,i.Z)(t,r);return(0,o.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"positive-and-negative-annotations"},"Positive and Negative Annotations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn about positive and negative annotations")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"When annotating your data, you have the option of providing both positive and negative labels for your concepts. Here is how your model interprets the labels that you add."),(0,o.kt)("p",null,"(","i",")"," If any concept is tagged with a positive annotation, that is treated as a positive label for that concept."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1846).Z})),(0,o.kt)("p",null,"(","ii",")"," When a concept is tagged with a positive annotation, this also implies a negative label on all other concepts not also tagged as positive."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5013).Z})),(0,o.kt)("p",null,"(","iii",")"," When input image 2 is tagged with a negative annotation, and input image 1 is tagged positive, then both of these actions have the same effect on input image 2: all classes not tagged positive are implicitly negative already from ","(","ii",")","."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4402).Z})),(0,o.kt)("p",null,"(","iv",")"," If there are no positive annotations for any concept, then if any concept is tagged with a negative annotation, this is treated as a negative example for all concepts related to that image."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79393).Z})),(0,o.kt)("p",null,"(","v",")"," If there are no positive or negative annotations, the example is ignored."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(43170).Z})))}d.isMDXComponent=!0},1846:function(t,e,n){e.Z=n.p+"assets/images/annotation_i-a15a00f6a566b808d239bfb702c81b3b.jpg"},5013:function(t,e,n){e.Z=n.p+"assets/images/annotation_ii-b0e933ba329cbb80fbcd52ef4728ee2d.jpg"},4402:function(t,e,n){e.Z=n.p+"assets/images/annotation_iii-3085a769a96cd6632d16fd051331b96c.jpg"},79393:function(t,e,n){e.Z=n.p+"assets/images/annotation_iv-4695574bec0c531993ed6ce7704e745e.jpg"},43170:function(t,e,n){e.Z=n.p+"assets/images/annotation_v-d9d404e82c880332eccea5a621e15506.jpg"}}]);