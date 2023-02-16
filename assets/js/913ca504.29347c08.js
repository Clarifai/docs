"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[7258],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),o=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,p=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),N=o(a),f=n,g=N["".concat(p,".").concat(f)]||N[f]||k[f]||l;return a?r.createElement(g,i(i({ref:e},m),{},{components:a})):r.createElement(g,i({ref:e},m))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},86488:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={description:"Understand Clarifai error codes.",sidebar_position:1},i="Status Codes",d={unversionedId:"api-guide/advanced-topics/status-codes",id:"api-guide/advanced-topics/status-codes",title:"Status Codes",description:"Understand Clarifai error codes.",source:"@site/docs/api-guide/advanced-topics/status-codes.md",sourceDirName:"api-guide/advanced-topics",slug:"/api-guide/advanced-topics/status-codes",permalink:"/api-guide/advanced-topics/status-codes",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Understand Clarifai error codes.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Topics",permalink:"/api-guide/advanced-topics/"},next:{title:"Patching",permalink:"/api-guide/advanced-topics/patching"}},p={},o=[],m={toc:o};function k(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"status-codes"},"Status Codes"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Understand Clarifai's error codes")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"All our API endpoints return a status code and a description that gives details of the status. A full list of those status codes is shown below. If a status comes back that you do not see below, please reach out to ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@clarifai.com"},"support@clarifai.com"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"CODE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"DESCRIPTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ok")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Mixed Success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10020"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Failure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Account or plan issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid authentication token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid credentials")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Hourly request limit exceeded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Monthly request limit exceeded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11005"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Making too many requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Account limits exceeded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11007"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API key has insufficient scopes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11008"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid API key or Invalid API key/application pair")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API key not found")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11100"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bad request format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11101"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11102"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11103"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Method not allowed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"11104"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No GDPR Consent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21100"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model trained successfully")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21101"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model is training")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21102"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model not yet trained")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21103"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom model is currently in queue for training, waiting on inputs to process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21110"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model training had no data.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21111"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model training had no positive examples.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21112"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model training was with concepts","_","mutually","_","exclusive but with a single class. Try adding more concepts or setting concepts","_","mutually","_","exclusive = false.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21113"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Training took longer than expected, contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com")," if this continues to happen when creating new versions of your model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21114"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Training got error waiting on your inputs to process, please contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21115"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unknown error in training, please contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21116"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Training request was unexpectedly redelivered, contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com")," if this continues to happen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21150"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model modification success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21151"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model modification pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model modification failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21201"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model permission denied")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21202"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid model argument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21203"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid model request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21300"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model was successfully evaluated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21301"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model is evaluating.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21302"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model is not yet evaluated.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21303"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model is queued for evaluation.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21310"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model evaluation timed out.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21311"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model evaluation timed out waiting on inputs to process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21312"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model evaluation unknown internal error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21313"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model prediction failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21315"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model evaluation failed because there are not enough annotated inputs. Please ensure there are at least 2 concepts in your model before evaluating.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"21316"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Model evaluation failed because there are not enough labeled inputs. Please ensure there are at least 5 labeled inputs per concept before evaluating.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow does not have specified input model.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"New model in workflow needs to be trained.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22100"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Duplicate URL in your application. Check the documentation to allow duplications.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22101"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow format unsupported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22102"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22103"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow permission denied")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22104"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow invalid argument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22106"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Template workflow is invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22107"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow graph is invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22150"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow modification success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22151"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow modification pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Workflow modification failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"22999"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24150"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24151"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation failed; check URL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24153"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation in progress")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24155"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation invalid argument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24156"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Permission to annotation denied")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24250"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation modification success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24251"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation modification pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"24252"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Annotation modification failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"25000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom Trainer unknown internal error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"25004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Custom Trainer failed to retrieve data or train")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download complete")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download failed or we could not process it. Check URL or bytes you send in the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download in progress")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30100"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Duplicate URL in your application. Check the documentation to allow duplications.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30101"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image format unsupported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30102"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30103"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input permission denied")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30104"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input invalid argument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30105"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image is larger than the allowed limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30106"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image URL invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image modification success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30201"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image modification pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30203"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image modification failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"30300"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input image decoding failed. Check URLs and bytes sent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download complete")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Download failed or we could not process it. Check URL or bytes you sent in the request.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31100"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Duplicate URL in your application. Check the documentation to allow duplications.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31101"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video format unsupported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31102"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input does not exist")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31103"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input permission denied")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31104"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input invalid argument")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31105"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video is larger the allowed limit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31106"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video URL invalid")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31200"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video modification success")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31201"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video modification pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31203"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video modification failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"31300"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input video decoding failed. Check URLs and bytes sent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"39996"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Connection attempts to the input URL failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"39997"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sorry, this type of request has been disabled for maintenance. Please try again in a few hours.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"39998"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input writes are disabled for maintenance. Please try again in a few hours.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"39999"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid input request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid search request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Invalid request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object has a duplicate ID; another object with same ID already exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40017"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Object violates a constraint. Try again with different values for the fields.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40019"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The requested operation is currently processing for this app")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40030"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sorry, the server is too busy at the moment. Please try again later.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40031"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sorry, the server is unavailable at the moment. Please try again later.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40032"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sorry, your request has timed out. Please try your request again.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"40033"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Sorry, the request sent is larger than the allowed limit. Please contact ",(0,n.kt)("a",{parentName:"td",href:"mailto:support@clarifai.com"},"support@clarifai.com"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"41000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Servers are busy. Please try again later.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Visualization succeeded")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Visualization is pending")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Visualization failed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Visualization invalid request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Missing application visualization")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42005"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Too many URLs to visualize")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"42006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"There is not inputs in app")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"43001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search internal issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"43002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search projection failure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"43003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search prediction failure")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"43004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Can only search by a fully indexed input")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"46002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Signup not permitted")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"46003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Filetype not supported")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"License is active.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60001"),(0,n.kt)("td",{parentName:"tr",align:"left"},"License does not exist.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60002"),(0,n.kt)("td",{parentName:"tr",align:"left"},"License needs update.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60003"),(0,n.kt)("td",{parentName:"tr",align:"left"},"License has expired.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60004"),(0,n.kt)("td",{parentName:"tr",align:"left"},"License has been revoked.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"60006"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Exceeded volume limit on license")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"99009"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal error")))))}k.isMDXComponent=!0}}]);