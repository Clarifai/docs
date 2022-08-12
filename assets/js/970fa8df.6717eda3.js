"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3958],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(87462),r=a(67294),i=a(72389),o=a(79443);var s=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=a(63616),l=a(86010),u="tabItem_vU9c";function p(e){var t,a,i,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,c.lx)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=s(),w=g.tabGroupChoices,N=g.setTabGroupChoices,P=(0,r.useState)(b),A=P[0],E=P[1],O=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var I=w[f];null!=I&&I!==A&&y.some((function(e){return e.value===I}))&&E(I)}var x=function(e){var t=e.currentTarget,a=O.indexOf(t),n=y[a].value;n!==A&&(T(t),E(n),null!=f&&N(f,n))},C=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;a=O[r]||O[O.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},h)},y.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return O.push(e)},onKeyDown:C,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function d(e){var t=(0,i.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},25206:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=a(26396),s=a(58215),c=["components"],l={sidebar_position:2},u="App-Specific API Keys",p={unversionedId:"clarifai-basics/authentication/app-specific-api-keys",id:"clarifai-basics/authentication/app-specific-api-keys",title:"App-Specific API Keys",description:"Authenticate access to Clarifai apps",source:"@site/docs/clarifai-basics/authentication/app-specific-api-keys.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/app-specific-api-keys",permalink:"/clarifai-basics/authentication/app-specific-api-keys",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Personal Access Tokens",permalink:"/clarifai-basics/authentication/personal-access-tokens"},next:{title:"Authorize",permalink:"/clarifai-basics/authentication/authorize"}},d=[{value:"Create API Keys in the Portal",id:"create-api-keys-in-the-portal",children:[],level:2},{value:"Create API Keys Programmatically",id:"create-api-keys-programmatically",children:[],level:2}],m={toc:d};function f(e){var t=e.components,l=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"app-specific-api-keys"},"App-Specific API Keys"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Authenticate access to Clarifai apps")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"App-specific API Keys are used to authorize access to your Clarifai applications. A key is automatically generated when you create a new application."),(0,i.kt)("p",null,"You can also go to the ",(0,i.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/"},"Application's List")," on the Portal, select an app of your choice, and create a new key in the app details page. "),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Each API Key is tied to a specific user and a specific app"))),(0,i.kt)("p",null,"An API Key allows you to have fine-grained control over the data exposed through your app. You can control the scope of your API Key through a simple checkbox interface displayed when you create a new key or edit a key. "),(0,i.kt)("h2",{id:"create-api-keys-in-the-portal"},"Create API Keys in the Portal"),(0,i.kt)("p",null,'Just navigate to your app\'s management page and click the "Create new API key" button. Then, use the form that pops up to generate a new API Key for your application. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(54276).Z})),(0,i.kt)("h2",{id:"create-api-keys-programmatically"},"Create API Keys Programmatically"),(0,i.kt)("p",null,"For enterprise customers, it is also possible to generate keys programmatically. "),(0,i.kt)("p",null,"If you are managing the work of multiple users, who's data, models, and concepts that need to be segregated, we recommend you create keys this way. This ensures that each individual user only has access to their own private resources."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You need to use a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens"},"Personal Access Token (PAT)")," to create an API Key. "))),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"cURL",label:"cURL",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/keys" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "keys": [\n        {\n            "description": "All permissions",\n            "scopes": [\n                "All"\n            ],\n            "apps": [\n                {\n                    "id": "YOUR_APP_ID_HERE",\n                    "user_id": "YOUR_USER_ID_HERE"\n                }\n            ]\n        }\n    ]\n}\'\n')))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"API Keys do not expire. In case your API Key gets compromised, you should delete that key, and create a new one with the same scopes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We recommend that you do ",(0,i.kt)("strong",{parentName:"p"},"not")," share your API Key with other users."))))))}f.isMDXComponent=!0},54276:function(e,t,a){t.Z=a.p+"assets/images/apikey-screen-8f8010af338f2765d4e43ad932d4d601.png"}}]);