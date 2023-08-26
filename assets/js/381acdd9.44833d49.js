"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[8450],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,g=u["".concat(l,".").concat(c)]||u[c]||d[c]||n;return r?o.createElement(g,i(i({ref:t},m),{},{components:r})):o.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29321:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={description:"Learn about our transform operators",sidebar_position:2},i="Transform",p={unversionedId:"portal-guide/model/agent-system-operators/transform",id:"portal-guide/model/agent-system-operators/transform",title:"Transform",description:"Learn about our transform operators",source:"@site/docs/portal-guide/model/agent-system-operators/transform.md",sourceDirName:"portal-guide/model/agent-system-operators",slug:"/portal-guide/model/agent-system-operators/transform",permalink:"/portal-guide/model/agent-system-operators/transform",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about our transform operators",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Filter",permalink:"/portal-guide/model/agent-system-operators/filter"},next:{title:"Push",permalink:"/portal-guide/model/agent-system-operators/push"}},l={},s=[{value:"Prompter",id:"prompter",level:2},{value:"Image Cropper",id:"image-cropper",level:2},{value:"Image Align",id:"image-align",level:2},{value:"Image Tiling Operator",id:"image-tiling-operator",level:2},{value:"Image-to-Image",id:"image-to-image",level:2}],m={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transform"},"Transform"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Learn about our transform operators")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Transform operators are a specific type of agent system operators that are specialized for data transformation tasks. These operators are responsible for modifying or transforming data as it passes through the workflow."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'Since the transform operators can be "chained" together with models to automate tasks in a workflow, you can learn how to create workflows ',(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/workflows/input-nodes#create-your-workflow"},"here"),". ")),(0,a.kt)("h2",{id:"prompter"},"Prompter"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Text"),(0,a.kt)("p",null,"A prompt template serves as a pre-configured piece of text used to instruct a text-to-text model. It acts as a structured query or input that guides the model in generating the desired response."),(0,a.kt)("p",null,"Your prompt template should include at least one instance of the placeholder ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}"),". When you input your text data at inference time, all occurrences of  ",(0,a.kt)("inlineCode",{parentName:"p"},"{data.text.raw}")," within the template will be replaced with the provided text."),(0,a.kt)("p",null,"To create a prompter model on the workflow builder:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1"),". Search for the ",(0,a.kt)("strong",{parentName:"p"},"prompter")," template option in the left-hand sidebar of the workflow builder and drag it onto the empty workspace."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2"),". Use the pop-up that appears on the right-hand sidebar to define the template text. For instance, you might use a template like ",(0,a.kt)("inlineCode",{parentName:"p"},"Explain {data.text.raw}:"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(71150).Z,width:"1918",height:"855"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3"),". You can then connect the prompter model with a text-to-text model like ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt4-1692119087"),". "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4"),". Save your workflow."),(0,a.kt)("p",null,"To observe it in action, navigate to the workflow's individual page and click the ",(0,a.kt)("strong",{parentName:"p"},"+")," button to input your text. For example, you could input ",(0,a.kt)("inlineCode",{parentName:"p"},"the worth of $5")," as your text and click the ",(0,a.kt)("strong",{parentName:"p"},"Submit")," button."),(0,a.kt)("p",null,"Once the model has completed processing your input, you'll see the results, starting with the earlier template text, now adapted to your input. In this case, the prompter text becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"Explain the worth of $5:"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(88196).Z,width:"1918",height:"926"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can learn how to use the prompter template with the regex-based classifier ",(0,a.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/portal-guide/model/agent-system-operators/algorithmic-predict#regex-based-classifier"},"here"),". ")),(0,a.kt)("h2",{id:"image-cropper"},"Image Cropper"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Regions"),(0,a.kt)("p",null,"Allows you to crop the input image according to each input region that is present in the input. When used in a workflow, this model can look back along the graph of the workflow to find the input image if the preceding model does not output an image itself so that you can do ",(0,a.kt)("inlineCode",{parentName:"p"},"image->detector->cropper")," type of workflow easily."),(0,a.kt)("h2",{id:"image-align"},"Image Align"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Image"),(0,a.kt)("p",null,"Allows you to align images using key points."),(0,a.kt)("h2",{id:"image-tiling-operator"},"Image Tiling Operator"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Output"),": Regions"),(0,a.kt)("p",null,"This is an operator for tiling images into a fixed number of equal-sized images. "),(0,a.kt)("h2",{id:"image-to-image"},"Image-to-Image"))}d.isMDXComponent=!0},71150:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prompter_1-adbca661a3fb9da92d286683b4784ba1.png"},88196:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/prompter_2-a3861b56f2f24f2fd3a5d8748c1a717f.png"}}]);