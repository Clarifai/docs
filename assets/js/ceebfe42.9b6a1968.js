"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[2715],{80384:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=o(74848),i=o(28453);const r={description:"Iterate upon and improve your models.",sidebar_position:8},l="Improving Your Model",s={id:"portal-guide/evaluate/improving-your-model",title:"Improving Your Model",description:"Iterate upon and improve your models.",source:"@site/docs/portal-guide/evaluate/improving-your-model.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/improving-your-model",permalink:"/portal-guide/evaluate/improving-your-model",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/improving-your-model.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{description:"Iterate upon and improve your models.",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Evaluation Leaderboard",permalink:"/portal-guide/evaluate/leaderboard"},next:{title:"Model Evaluation FAQs",permalink:"/portal-guide/evaluate/evaluation-faqs"}},a={},d=[{value:"Possible Areas of Improvement",id:"possible-areas-of-improvement",level:2},{value:"Tips",id:"tips",level:2}];function c(e){const n={h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"improving-your-model",children:"Improving Your Model"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Iterate upon and improve your models"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.p,{children:"The evaluation metrics are meant to help you diagnose the quality of your model. Your model may belong to one or more of many categories, including, but not limited to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Good model with all great concepts."}),"\n",(0,t.jsx)(n.li,{children:"OK model with a few bad concepts."}),"\n",(0,t.jsx)(n.li,{children:"Bad model with all bad concepts."}),"\n",(0,t.jsx)(n.li,{children:"Biased model: the model is consistently picking up certain visual cues other than what you\u2019d like to pick up."}),"\n",(0,t.jsx)(n.li,{children:"Model with variance: there is no consistency in the way the model is predicting on inputs."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"possible-areas-of-improvement",children:"Possible Areas of Improvement"}),"\n",(0,t.jsx)(n.p,{children:"The performance of your model depends on the performance of each concept, which is trained on a set of inputs. We\u2019d recommend that you look at both inputs and concepts when diagnosing areas of improvement."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Inputs"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Diversity: try to include all perspectives of the concept, e.g. include all angles of a \u201cdog\u201d, if you\u2019re building a \u201cdog\u201d concept."}),"\n",(0,t.jsx)(n.li,{children:"Strong positives: Images that are the true representation of your concept."}),"\n",(0,t.jsx)(n.li,{children:"Training data should be representative of the real world data -- avoid making models where the data is too \u2018easy\u2019, i.e. unrealistic set of data."}),"\n",(0,t.jsx)(n.li,{children:"Number: minimum 50 inputs per concept; more inputs the better."}),"\n",(0,t.jsx)(n.li,{children:"File dimensions: minimum 512px x 512px."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Concepts"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Concepts: avoid concepts that do not rely on visual cues within the image. Also, current custom training does not perform well on training to identify faces."}),"\n",(0,t.jsx)(n.li,{children:"Labels: check to see if any inputs are labeled with wrong concepts."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,t.jsx)(n.p,{children:"When improving your model, there is no one-size-fits-all answer. Here are some tips to keep in mind:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Although we use ROC AUC as a general top-level \u2018score\u2019 for both concept and model, we do not recommend that you rely on 1 metric only to draw your final conclusion on your model performance."}),"\n",(0,t.jsx)(n.li,{children:"Refer to both Concepts by Concepts Results as well as Selection Details to get a better grasp of your model."}),"\n",(0,t.jsx)(n.li,{children:"When interpreting the evaluation results, keep in mind the nature of your model. Specifically, pay attention to whether or not you have labeled the inputs with more than 1 concept (i.e. non-mutually exclusive concepts environment), vs. only 1 concept per image."}),"\n",(0,t.jsx)(n.li,{children:"Remember, the rule of diminishing returns may also apply to training models. After a certain point, the changes may not make a big difference in the model quality."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>s});var t=o(96540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);