"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5187],{46482:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=t(74848),i=t(28453);const a={description:"Learn about our visual segmenter model type",sidebar_position:4,keywords:["visual segmenter","image segmentation","visual segmentation models","AI image segmentation","machine learning image segmenter","computer vision image segmentation","visual segmentation AI","AI model for image segmentation","deep learning image segmentation"]},o="Visual Segmenter",r={id:"portal-guide/model/model-types/visual-segmenter",title:"Visual Segmenter",description:"Learn about our visual segmenter model type",source:"@site/docs/portal-guide/model/model-types/visual-segmenter.md",sourceDirName:"portal-guide/model/model-types",slug:"/portal-guide/model/model-types/visual-segmenter",permalink:"/portal-guide/model/model-types/visual-segmenter",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/model/model-types/visual-segmenter.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about our visual segmenter model type",sidebar_position:4,keywords:["visual segmenter","image segmentation","visual segmentation models","AI image segmentation","machine learning image segmenter","computer vision image segmentation","visual segmentation AI","AI model for image segmentation","deep learning image segmentation"]},sidebar:"tutorialSidebar",previous:{title:"Visual Detector",permalink:"/portal-guide/model/model-types/visual-detector"},next:{title:"Visual Anomaly",permalink:"/portal-guide/model/model-types/visual-anomaly"}},l={},d=[{value:"Example use case",id:"example-use-case",level:2}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"visual-segmenter",children:"Visual Segmenter"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Learn about our visual segmenter model type"})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Input"}),": Images and videos"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Output"}),": Regions"]}),"\n",(0,s.jsx)(n.p,{children:"Visual segmenter, also known as semantic segmentation, is a type of deep fine-tuned model used in image analysis and understanding tasks."}),"\n",(0,s.jsx)(n.p,{children:"It aims to achieve a fine-grained understanding of the content within an image by associating each pixel with a particular class label. This is more detailed than traditional object detection, which typically identifies bounding boxes around objects."}),"\n",(0,s.jsx)(n.p,{children:"The primary task of a visual segmenter model is twofold:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Semantic segmentation"}),": The model segments an input image into per-pixel masks, where each mask corresponds to a particular object or region of interest. Each pixel in the image is assigned a label that indicates the class of the object it belongs to. This process effectively divides the image into segments based on the objects or regions present in it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Object classification or labeling"}),": Once the semantic segmentation is done, the model can then classify the segmented objects or regions into specific categories, descriptive words, or topics. This classification step involves assigning labels or tags to the segmented areas, indicating what each segment represents."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The visual segmenter model type also comes with various ",(0,s.jsx)(n.a,{href:"https://docs.clarifai.com/portal-guide/model/deep-training/visual-segmenter-templates",children:"templates"})," that give you the control to choose the specific architecture used by your neural network, as well as define a set of hyperparameters you can use to fine-tune the way your model learns."]})}),"\n",(0,s.jsx)(n.p,{children:"Visual Segmenter models are used in a wide variety of applications, including:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Self-driving cars"}),": Visual Segmenter models can be used to identify objects in the road and surroundings, such as other cars, pedestrians, and traffic signs. This information can be used to help self-driving cars navigate safely."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Robotics"}),": Visual Segmenter models can be used to help robots interact with the physical world. For example, a robot could use a Visual Segmenter model to identify objects in its environment and then plan a path to avoid those objects."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Image editing"}),": Visual segmenter models can assist in automatic background removal, object manipulation, and other image editing tasks."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Augmented reality"}),": In AR applications, semantic segmentation helps in understanding the scene and integrating virtual objects more realistically."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You may choose a visual segmenter model type in cases where:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Your application requires high accuracy, and you're willing to sacrifice speed and ease of use. These models tend to be computationally intensive due to their per-pixel processing."}),"\n",(0,s.jsxs)(n.li,{children:['You need a segmentation model to learn new features not recognized by the existing Clarifai models, especially if your application requires a detailed understanding of the content within an image at a per-pixel level. In that case, you may need to "deep fine-tune" your custom segmenter model and integrate it directly within your ',(0,s.jsx)(n.a,{href:"https://docs.clarifai.com/portal-guide/workflows/",children:"workflows"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"You have a custom-tailored dataset, accurate labels, and the expertise and time to fine-tune models."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-use-case",children:"Example use case"}),"\n",(0,s.jsx)(n.p,{children:'Given an image of a street scene, a visual segmenter model could segment the image into per-pixel masks representing cars, pedestrians, buildings, roads, and other objects. Then, for each segmented area, the model could classify the objects into categories like "sedan," "person," "skyscraper," and "asphalt road.\u201d'})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);