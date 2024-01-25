"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[4171],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,f=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return a?i.createElement(f,n(n({ref:t},u),{},{components:a})):i.createElement(f,n({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<o;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62287:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));const o={description:"Provide an additional layer of security to your account",sidebar_position:5},n="2FA",s={unversionedId:"clarifai-basics/authentication/factor-authentication",id:"clarifai-basics/authentication/factor-authentication",title:"2FA",description:"Provide an additional layer of security to your account",source:"@site/docs/clarifai-basics/authentication/2-factor-authentication.md",sourceDirName:"clarifai-basics/authentication",slug:"/clarifai-basics/authentication/factor-authentication",permalink:"/clarifai-basics/authentication/factor-authentication",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/clarifai-basics/authentication/2-factor-authentication.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Provide an additional layer of security to your account",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Scopes",permalink:"/clarifai-basics/authentication/scopes"},next:{title:"Role-Based Access Control",permalink:"/clarifai-basics/authentication/rbac"}},l={},c=[{value:"Why 2FA?",id:"why-2fa",level:2},{value:"Who needs 2FA?",id:"who-needs-2fa",level:3},{value:"How does 2FA work on the Clarifai Platform",id:"how-does-2fa-work-on-the-clarifai-platform",level:3},{value:"2FA Setup",id:"2fa-setup",level:2},{value:"2FA Sign-In",id:"2fa-sign-in",level:3},{value:"2FA Disable",id:"2fa-disable",level:3},{value:"2FA Recovery",id:"2fa-recovery",level:2},{value:"Self-serve",id:"self-serve",level:3},{value:"Last-resort",id:"last-resort",level:3}],u={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,i.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2fa"},"2FA"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add an extra layer of security to your account")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Two-factor authentication is an optional sign-in security feature that provides an additional layer of security to your account."),(0,r.kt)("h2",{id:"why-2fa"},"Why 2FA?"),(0,r.kt)("p",null,"Passwords have been the main form of authentication since the start of the digital revolution. However, this security measure is far from infallible. Here are some concerns about the password-based authentication:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"90% of passwords can be cracked in less than six hours."),(0,r.kt)("li",{parentName:"ul"},"2/3 of people use the same password everywhere."),(0,r.kt)("li",{parentName:"ul"},"Sophisticated cyber attackers have the power to test billions of passwords every second."),(0,r.kt)("li",{parentName:"ul"},"The vulnerability of passwords is the main reason for requiring and using 2FA.")),(0,r.kt)("h3",{id:"who-needs-2fa"},"Who needs 2FA?"),(0,r.kt)("p",null,"As a security best-practice, you should enable 2FA to minimize the risk of cybersecurity attack on your account. Despite the interruption at the sign-in process, the additional security benefit is significant."),(0,r.kt)("p",null,"For enterprise users, 2FA might fall under the security-related controls for compliance reasons. Organizations might want to enforce 2FA for their users to ensure account and data safety."),(0,r.kt)("h3",{id:"how-does-2fa-work-on-the-clarifai-platform"},"How does 2FA work on the Clarifai Platform"),(0,r.kt)("p",null,"Two-factor Authentication ","(","2FA",")"," works together with the sign-in process. 2FA will ask you to provide a code at sign-in. It works as the extra layer of security after basic authentication. It affects the user flow of Sign-in when the 2FA is enabled. The 2FA recovery is added into the sign-in process when the 2FA device is lost. Also, 2FA setup and disable are added into the user security settings."),(0,r.kt)("p",null,"You are able to enable and disable the 2FA for the sign-in process. Also, you are able to recover the 2FA if you lose the 2FA authenticator."),(0,r.kt)("h2",{id:"2fa-setup"},"2FA Setup"),(0,r.kt)("p",null,"To enable the 2FA, you have to sign-in to the platform first. Once you sign into the platform, you can go to Security settings page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(99698).Z,width:"426",height:"662"})),(0,r.kt)("p",null,"On the Security page, user can toggle the \u201cEnable\u201d to setup the 2FA."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(73957).Z,width:"1042",height:"194"})),(0,r.kt)("p",null,"Once the enable is toggled:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(38153).Z,width:"1068",height:"1076"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(21310).Z,width:"1058",height:"696"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62191).Z,width:"1056",height:"330"})),(0,r.kt)("h3",{id:"2fa-sign-in"},"2FA Sign-In"),(0,r.kt)("p",null,"When you sign in to the Clarifai platform with correct username and password, 2FA kicks in."),(0,r.kt)("p",null,"A box will show up on the screen asking for the authentication code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26989).Z,width:"734",height:"618"})),(0,r.kt)("p",null,"If the correct code is entered, you will be taken to Portal."),(0,r.kt)("h3",{id:"2fa-disable"},"2FA Disable"),(0,r.kt)("p",null,"To disable the 2FA, go to the Security page."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62191).Z,width:"1056",height:"330"})),(0,r.kt)("p",null,"Click the toggle, you will be prompted to enter the code from the authenticator application."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(18739).Z,width:"1072",height:"532"})),(0,r.kt)("p",null,"Once entered with the correct code, 2FA will be successfully disabled."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(62162).Z,width:"1044",height:"204"})),(0,r.kt)("h2",{id:"2fa-recovery"},"2FA Recovery"),(0,r.kt)("h3",{id:"self-serve"},"Self-serve"),(0,r.kt)("p",null,"If the authentication app is somehow lost, you will not be able to sign in with 2FA."),(0,r.kt)("p",null,"In order to recover access to the Clarifai platform, you need to go through the recovery process."),(0,r.kt)("p",null,"Go to the sign-in page ",(0,r.kt)("a",{parentName:"p",href:"https://portal.clarifai.com/login"},"https://portal.clarifai.com/login")),(0,r.kt)("p",null,"Enter the correct username and password."),(0,r.kt)("p",null,"With the prompt of the 2FA code, click \u201cEnter a recovery code\u201d link."),(0,r.kt)("p",null,"A box below will be prompted asking for recovery code."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(26989).Z,width:"734",height:"618"})),(0,r.kt)("p",null,"After entering the recovery code and click \u201cVERIFY\u201d, an email will be sent to the account email address to confirm the TOTP reset."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(36090).Z,width:"1868",height:"944"})),(0,r.kt)("p",null,"Click the link, a page to the Clarifai portal will be opened. Your 2FA will be confirmed to be reset from there."),(0,r.kt)("h3",{id:"last-resort"},"Last-resort"),(0,r.kt)("p",null,"If you lose the recovery code, there is no self-serve way to recover access to the Clarifai platform. You will have to reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@clarifai.com"},"support@clarifai.com")," to recover access."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(17115).Z,width:"952",height:"552"})))}h.isMDXComponent=!0},62162:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/2fa-disabled-63892070ab4bfdb936e557ae473128b9.png"},62191:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/2fa-success-1724556278d47df767a64125fcf702fb.png"},73957:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/enable-f11770beb2d732dbcf4017ebedad4713.png"},18739:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/enter-code-2935205c6675525e02b1c6790dbdf59a.png"},21310:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/recovery-code-10a4b90c03726560f9b2825ace8cf94e.png"},38153:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/scan-369edf2fbf5c12cc54f1376be4e54a63.png"},99698:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/signed-in-as-c10f9794587374a04d0457067896152c.png"},17115:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/two-factor-reset-c1e5be8083e61419bf6c409abcf3c4ce.png"},26989:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/verify-2fa-29177cd12f41d0a915e979017b174730.png"},36090:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/verify-email-a14cb83becd17368825987b2a2761479.png"}}]);