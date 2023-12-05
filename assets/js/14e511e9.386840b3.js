"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var o=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=o.createContext({}),u=function(e){var t=o.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=l,h=p["".concat(i,".").concat(m)]||p[m]||c[m]||n;return a?o.createElement(h,r(r({ref:t},d),{},{components:a})):o.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,r[1]=s;for(var u=2;u<n;u++)r[u]=a[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46121:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var o=a(87462),l=(a(67294),a(3905));const n={description:"Learn how to manage your modules",sidebar_position:2},r="Manage Your Modules",s={unversionedId:"portal-guide/modules/manage",id:"portal-guide/modules/manage",title:"Manage Your Modules",description:"Learn how to manage your modules",source:"@site/docs/portal-guide/modules/manage.md",sourceDirName:"portal-guide/modules",slug:"/portal-guide/modules/manage",permalink:"/portal-guide/modules/manage",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/modules/manage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn how to manage your modules",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create and Install Modules",permalink:"/portal-guide/modules/create-install"},next:{title:"Environment Variables and Secrets",permalink:"/portal-guide/modules/secrets-management"}},i={},u=[{value:"Access Your modules",id:"access-your-modules",level:2},{value:"a) Install a module",id:"a-install-a-module",level:3},{value:"b) Create a module version",id:"b-create-a-module-version",level:3},{value:"c) Manage module versions",id:"c-manage-module-versions",level:3},{value:"d) Delete a module",id:"d-delete-a-module",level:3},{value:"Start Using Installed Modules",id:"start-using-installed-modules",level:2},{value:"Manage Installed Modules",id:"manage-installed-modules",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"manage-your-modules"},"Manage Your Modules"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Learn how to manage your modules")),(0,l.kt)("hr",null),(0,l.kt)("p",null,"After creating and installing your modules, you can now carry out various management tasks on them."),(0,l.kt)("h2",{id:"access-your-modules"},"Access Your modules"),(0,l.kt)("p",null,"To access the modules you\u2019ve created, go to the individual page of your application. Then, select the ",(0,l.kt)("strong",{parentName:"p"},"Modules")," option on the collapsible left sidebar. "),(0,l.kt)("p",null,"You'll be redirected to the ",(0,l.kt)("strong",{parentName:"p"},"Modules")," manager page, where you can view the already created ones."),(0,l.kt)("p",null,"You can also click the delete button to remove a module you no longer need."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"listed modules page",src:a(40552).Z,width:"1881",height:"913"})),(0,l.kt)("p",null,"If you click a listed module, you\u2019ll be redirected to the individual page of the module, where you can accomplish various tasks, such as installing the module to your app, creating a version for it, managing its versions, or deleting it. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"module manager page",src:a(85466).Z,width:"1887",height:"858"})),(0,l.kt)("p",null,"Let's talk about how you can carry out the tasks. "),(0,l.kt)("h3",{id:"a-install-a-module"},"a) Install a module"),(0,l.kt)("p",null,"To install a module, click the ",(0,l.kt)("strong",{parentName:"p"},"Install Module")," button. A small window will pop up that allows you to select the app where you want to install the module. After selecting the destination app, click the ",(0,l.kt)("strong",{parentName:"p"},"Confirm")," button. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"install a module",src:a(97731).Z,width:"1889",height:"858"})),(0,l.kt)("p",null,"You\u2019ll then be redirected to a page that allows you to install the module on your selected app."),(0,l.kt)("p",null,"You may refer to ",(0,l.kt)("a",{parentName:"p",href:"/portal-guide/modules/create-install/#install-the-module-into-destination-app"},"the previous page")," on how to install a module to a destination app. "),(0,l.kt)("h3",{id:"b-create-a-module-version"},"b) Create a module version"),(0,l.kt)("p",null,"To create a module version, click the ",(0,l.kt)("strong",{parentName:"p"},"Create Module Version")," button. You\u2019ll then be redirected to a page that allows you to provide the GitHub URL for the specific branch or commit you would like to deploy as the module version."),(0,l.kt)("p",null,"You may refer to ",(0,l.kt)("a",{parentName:"p",href:"./create-install/#create-a-module-version"},"the previous page")," on how to create a module version. "),(0,l.kt)("h3",{id:"c-manage-module-versions"},"c) Manage module versions"),(0,l.kt)("p",null,"If you click the vertical ellipsis on the upper rightmost part of the module\u2019s page, a dropdown box will appear. Click the ",(0,l.kt)("strong",{parentName:"p"},"Manage Module Versions")," option. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage module versions",src:a(53739).Z,width:"1877",height:"718"})),(0,l.kt)("p",null,"On the ensuing page, you can see all the versions created for the module listed in a table. All the details about each module version are also provided in that table. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage module versions",src:a(14342).Z,width:"1872",height:"786"})),(0,l.kt)("p",null,"The page allows you to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Create a new module version by clicking the ",(0,l.kt)("strong",{parentName:"p"},"Create New Version")," button. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Delete a module version by first selecting it in the table and clicking the activated ",(0,l.kt)("strong",{parentName:"p"},"Delete Module Version")," button. "))),(0,l.kt)("h3",{id:"d-delete-a-module"},"d) Delete a module"),(0,l.kt)("p",null,"If you click the vertical ellipsis on the upper rightmost part of the module\u2019s page, a dropdown box will appear. Click the ",(0,l.kt)("strong",{parentName:"p"},"Delete Module")," option. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"listed module versions",src:a(90146).Z,width:"1896",height:"765"})),(0,l.kt)("p",null,"On the ensuing page, confirm if you still want to delete the module. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"delete a module",src:a(49553).Z,width:"1876",height:"485"})),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This action deletes the module as well as all its created and installed versions. If another user installed any version of the module, they will no longer be able to use them. So, you need to proceed with caution. ")),(0,l.kt)("h2",{id:"start-using-installed-modules"},"Start Using Installed Modules"),(0,l.kt)("p",null,"To start using a module you\u2019ve installed on your app, navigate to the ",(0,l.kt)("strong",{parentName:"p"},"Installed Modules")," category on the collapsible left sidebar, and expand the section of the module you want to use. "),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You can also click the ",(0,l.kt)("strong",{parentName:"p"},"Uninstall Module")," button to delete the installed module. ")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"installed modules category",src:a(59970).Z,width:"1496",height:"918"})),(0,l.kt)("p",null,"Click a sub-item listed under the name of an installed module. For this example, the sub-item is called ",(0,l.kt)("strong",{parentName:"p"},"First Page"),". "),(0,l.kt)("p",null,"A small window will pop up requiring you to authorize the module to access data on your behalf. You will see the permissions the module requires. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"authorize module permissions",src:a(41875).Z,width:"1748",height:"820"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Authorizing will create a new personal access token in your account with all scopes. The level of permissions the module will have to access data in your app will be determined by your relationship with the app (owner, collaborator, teammate, or public user)."),(0,l.kt)("p",{parentName:"admonition"},"You may delete that personal access token in your ",(0,l.kt)("a",{parentName:"p",href:"https://clarifai.com/settings/security"},"security settings")," at any time to revoke the access the module has to your data. If you do not trust the author of the module, we recommend you review the source code before authorizing access. Uninstalling an installed module will also automatically delete the personal access token for you.")),(0,l.kt)("p",null,"Click the ",(0,l.kt)("strong",{parentName:"p"},"Authorize")," button."),(0,l.kt)("p",null,"You\u2019ll be redirected to the UI of your installed module, where you can start using it."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"installed module UI",src:a(57103).Z,width:"1804",height:"811"})),(0,l.kt)("p",null,"That\u2019s it\u2014you\u2019ve successfully deployed a Streamlit app on the Clarifai platform!"),(0,l.kt)("h2",{id:"manage-installed-modules"},"Manage Installed Modules"),(0,l.kt)("p",null,"If you click the ",(0,l.kt)("strong",{parentName:"p"},"Manage Installed Modules")," button, you\u2019ll be redirected to a page that lets you carry out various management tasks on your installed modules. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"manage installed modules",src:a(89018).Z,width:"1805",height:"831"})),(0,l.kt)("p",null,"You can see a list of all the module versions installed on your app. To uninstall any of them, select it in the table and click the ",(0,l.kt)("strong",{parentName:"p"},"Uninstall")," button that appears. "),(0,l.kt)("p",null,"You can also install a module you\u2019ve found on the ",(0,l.kt)("a",{parentName:"p",href:"https://clarifai.com/explore/modules"},"Clarifai Community"),". Just copy and paste the module URL into the ",(0,l.kt)("strong",{parentName:"p"},"Module URL")," input field."),(0,l.kt)("p",null,"After pressing the enter button, you can follow the ensuing prompts to complete installing the module on your app."))}c.isMDXComponent=!0},40552:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_16-13776c8dbb290e06bbe956f8d894abd1.png"},85466:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_17-e3335e7f703821de27484dc286056f62.png"},97731:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_18-6080e2e667357df848b8ecdfcbcb60f6.png"},53739:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_19-0e2f6dd0e9d703110fe52e4b9cf69c43.png"},14342:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_20-32d467a9ac31457e975286984d503712.png"},90146:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_21-e3759660e83ce3dfdfcb72b9b60cec34.png"},49553:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_22-4e718784d24a26cc1f64b81eeff95cde.png"},59970:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_23-162992a8d962700de8aae0b5f3709302.png"},41875:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_24-9642c943fa5226a3c4c55ac56188a6b3.png"},57103:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_25-c034bc6bf8a71632643405dd8ca3d40b.png"},89018:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/module_26-39fc081714b938ae8b26d426345b88a4.png"}}]);