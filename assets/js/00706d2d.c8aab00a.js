"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5448],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=o,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(m,n(n({ref:t},d),{},{components:a})):i.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,n[1]=s;for(var c=2;c<r;c++)n[c]=a[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6255:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));const r={description:"Learn to interpret model evaluations.",sidebar_position:1},n="Interpreting Evaluations",s={unversionedId:"portal-guide/evaluate/interpreting-evaluations",id:"portal-guide/evaluate/interpreting-evaluations",title:"Interpreting Evaluations",description:"Learn to interpret model evaluations.",source:"@site/docs/portal-guide/evaluate/interpreting-evaluations.md",sourceDirName:"portal-guide/evaluate",slug:"/portal-guide/evaluate/interpreting-evaluations",permalink:"/portal-guide/evaluate/interpreting-evaluations",draft:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/evaluate/interpreting-evaluations.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Learn to interpret model evaluations.",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Evaluating Models",permalink:"/portal-guide/evaluate/"},next:{title:"LLM Evaluation",permalink:"/portal-guide/evaluate/llms"}},l={},c=[{value:"Interpreting Results",id:"interpreting-results",level:2},{value:"Model Analysis",id:"model-analysis",level:2},{value:"Model Accuracy Score",id:"model-accuracy-score",level:3},{value:"Concept Analysis",id:"concept-analysis",level:2},{value:"Prediction Threshold",id:"prediction-threshold",level:3},{value:"Choosing a Prediction Threshold",id:"choosing-a-prediction-threshold",level:4},{value:"Evaluation Summary",id:"evaluation-summary",level:3},{value:"ROC AUC (Concept Accuracy Score)",id:"roc-auc-concept-accuracy-score",level:4},{value:"Total Labeled",id:"total-labeled",level:4},{value:"Total Predicted",id:"total-predicted",level:4},{value:"True Positives (TP)",id:"true-positives-tp",level:4},{value:"False Negatives (FN)",id:"false-negatives-fn",level:4},{value:"False Positives (FP)",id:"false-positives-fp",level:4},{value:"Recall Rate",id:"recall-rate",level:4},{value:"Precision Rate",id:"precision-rate",level:4},{value:"F1 Score",id:"f1-score",level:4},{value:"Confusion Matrix",id:"confusion-matrix",level:3},{value:"Input Analysis",id:"input-analysis",level:2},{value:"Selection Details",id:"selection-details",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interpreting-evaluations"},"Interpreting Evaluations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Learn to interpret model evaluations")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"interpreting-results"},"Interpreting Results"),(0,o.kt)("p",null,"As mentioned in the previous ",(0,o.kt)("a",{parentName:"p",href:"./"},"Evaluating Models")," section, once the evaluation process is complete, the ",(0,o.kt)("strong",{parentName:"p"},"Calculate")," button will become a ",(0,o.kt)("strong",{parentName:"p"},"View Results")," button. "),(0,o.kt)("p",null,"You can click the ",(0,o.kt)("strong",{parentName:"p"},"View Results")," button to see the evaluation results."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(12156).Z,width:"1525",height:"517"})),(0,o.kt)("p",null,"You'll then be redirected to the following page:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(80321).Z,width:"1439",height:"817"})," "),(0,o.kt)("p",null,"We suggest that you start by looking at the ",(0,o.kt)("strong",{parentName:"p"},"Evaluation highlights")," section, especially the ",(0,o.kt)("strong",{parentName:"p"},"Evaluation Summary")," table, to get a sense of the overall model prediction performance and identify the high-performing and low-performing concepts. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(74203).Z,width:"1419",height:"421"})," "),(0,o.kt)("p",null,"Afterward, hone in on the Selection Details of the False Positives and False Negatives to identify any biases, if any, in how the model is predicting, and to correct any inputs that are mislabeled"),(0,o.kt)("p",null,"Generally, you\u2019ll be looking at results that represent either:"),(0,o.kt)("p",null,"a",")"," the average across K-splits; or,"),(0,o.kt)("p",null,"b",")"," the test set of a single split, which is about 1/K of your original training set."),(0,o.kt)("p",null,"Note that a single split will be capped at 1,000 inputs."),(0,o.kt)("p",null,"If you want to evaluate how a model performs against a test dataset, select it under the ",(0,o.kt)("strong",{parentName:"p"},"Holdout Dataset")," section and click the ",(0,o.kt)("strong",{parentName:"p"},"Evaluate?")," button. Once the evaluation process is complete, the results will be populated on the page. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(55189).Z,width:"1357",height:"377"})," "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can click ",(0,o.kt)("a",{parentName:"p",href:"https://docs.clarifai.com/tutorials/how-to-evaluate-an-image-classification-model"},"here")," to learn more about how to evaluate a model. ")),(0,o.kt)("h2",{id:"model-analysis"},"Model Analysis"),(0,o.kt)("h3",{id:"model-accuracy-score"},"Model Accuracy Score"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(63394).Z,width:"1388",height:"250"})," "),(0,o.kt)("p",null,"Model Accuracy Score is the highest level metric for your model\u2019s prediction performance. It is defined as the macro average of the areas under the receiver operating characteristic curve for every concept. This metric does not depend on the Prediction Threshold. This metric is an average across K-splits."),(0,o.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a worthless model. As a general rule of thumb, a score above .9 is considered good."),(0,o.kt)("admonition",{title:"Note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"We discourage users from making a final assessment of the model accuracy based on the Model Accuracy Score only.")),(0,o.kt)("h2",{id:"concept-analysis"},"Concept Analysis"),(0,o.kt)("h3",{id:"prediction-threshold"},"Prediction Threshold"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(59410).Z,width:"1385",height:"437"})," "),(0,o.kt)("p",null,"The probability threshold determines the model\u2019s predictions. The default threshold is .5. The input is predicted ","(","i.e. \u201ccounts\u201d ",")"," as a concept, such as \u201cdog\u201d, only if the prediction probability for \u201cdog\u201d is higher than the set threshold; for example, 0.5. You can adjust the threshold slider depending on how \u2018strict\u2019 you want your classification to be."),(0,o.kt)("p",null,"All binary prediction metrics\u2014such as True Positives, False Negatives, False Positives, Total Predicted, Recall Rate, and Precision Rate\u2014depend on this threshold. If the threshold is adjusted, the values of those metrics also change. "),(0,o.kt)("h4",{id:"choosing-a-prediction-threshold"},"Choosing a Prediction Threshold"),(0,o.kt)("p",null,"A threshold is the \u201csweet spot\u201d numerical score that is dependent on the objective of your prediction for ",(0,o.kt)("em",{parentName:"p"},"recall")," and/or ",(0,o.kt)("em",{parentName:"p"},"precision"),". In practice, there are multiple ways to define \u201caccuracy\u201d when it comes to machine learning, and the threshold is the number we use to gauge our preferences."),(0,o.kt)("p",null,"You might be wondering how you should set your classification threshold once you are ready to use it to predict out-of-sample data. This is more of a business decision; in that, you have to decide whether you would rather minimize the False Positive Rate or maximize the True Positive Rate."),(0,o.kt)("p",null,"If our model is used to predict concepts that lead to a high-stakes decision, like a diagnosis of a disease or moderation for safety, we might consider a few false positives as forgivable ","(","better to be safe than sorry!",")",". In this case, we might want high precision."),(0,o.kt)("p",null,"If our model is used to predict concepts that lead to a suggestion or flexible outcome, we might want a high recall rate so that the model can allow for exploration."),(0,o.kt)("p",null,"In either scenario, we will want to make sure our model is trained and tested with data that best reflects its use case."),(0,o.kt)("p",null,"Once we have determined the goal of our model ","(","high precision or high recall",")",", we can use test data that our model has never seen before to evaluate how well our model predicts according to the standards we have set."),(0,o.kt)("h3",{id:"evaluation-summary"},"Evaluation Summary"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(18119).Z,width:"1347",height:"599"})," "),(0,o.kt)("p",null,"The table above summarizes the numerical evaluation results for every concept. "),(0,o.kt)("p",null,"For every concept, it calculates:"),(0,o.kt)("h4",{id:"roc-auc-concept-accuracy-score"},"ROC AUC ","(","Concept Accuracy Score",")"),(0,o.kt)("p",null,"The concept\u2019s prediction performance score is defined by the area under the Receiver Operating Characteristic curve. This score gives us an idea of how well we have separated our different classes or concepts."),(0,o.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a poor model. As a general rule of thumb, a score above .9 is considered good. "),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13756).Z,width:"1347",height:"599"})," "),(0,o.kt)("admonition",{title:"note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"ROC AUC is not dependent on the prediction threshold.")),(0,o.kt)("p",null,"ROC AUC is generated by plotting the True Positive Rate ","(","y-axis",")"," against the False Positive Rate ","(","x-axis",")"," as you vary the threshold for assigning observations to a given class. The AUC, or Area Under the Curve, of these points is ","(","arguably",")"," the best way to summarize a model\u2019s performance in a single number."),(0,o.kt)("p",null,"You can think of AUC as representing the probability that a classifier will rank a randomly chosen positive observation higher than a randomly chosen negative observation, and thus it is a useful metric even for datasets with highly unbalanced classes. "),(0,o.kt)("p",null,"A score of 1 represents a perfect model; a score of .5 represents a model that would be no better than random guessing, and this wouldn\u2019t be suitable for predictions, and should be re-trained. "),(0,o.kt)("h4",{id:"total-labeled"},"Total Labeled"),(0,o.kt)("p",null,"The total number of inputs that were originally labeled as the concept in the test set. Total Labeled is the sum of True Positives ","(","correct",")"," and False Negatives ","(","incorrect",")",". Note that the Total Labeled is not dependent on the prediction threshold."),(0,o.kt)("h4",{id:"total-predicted"},"Total Predicted"),(0,o.kt)("p",null,"The total number of inputs that were predicted as the concept in the test set. This means these inputs were predicted as a concept with a probability greater than the prediction threshold value. Total Predicted is the sum of True Positives ","(","correct",")"," and False Positives ","(","incorrect",")","."),(0,o.kt)("h4",{id:"true-positives-tp"},"True Positives ","(","TP",")"),(0,o.kt)("p",null,"The number of inputs that were correctly predicted as the concept they were actually labeled. Also known as \u201chits.\u201d For example, these are the images that were labeled as \u201cdog\u201d and were predicted as \u201cdog.\u201d"),(0,o.kt)("h4",{id:"false-negatives-fn"},"False Negatives ","(","FN",")"),(0,o.kt)("p",null,"The number of inputs that were not predicted as the concept they were actually labeled. Also known as \u201cmisses\u201d. For example, these are the images that were labeled as \u201cdog\u201d but were not predicted as \u201cdog.\u201d "),(0,o.kt)("h4",{id:"false-positives-fp"},"False Positives ","(","FP",")"),(0,o.kt)("p",null,"The number of inputs that were predicted as the concept but they were not labeled as the concept. Also known as \u201cfalse alarms.\u201d For example, these are the images that were predicted as \u201cdog\u201d but were not labeled as \u201cdog.\u201d"),(0,o.kt)("h4",{id:"recall-rate"},"Recall Rate"),(0,o.kt)("p",null,"The proportion of the images labeled as the concept that was predicted as the concept. It is calculated as True Positives divided by Total Labeled. Also known as \u201csensitivity\u201d or \u201ctrue positive rate.\u201d"),(0,o.kt)("h4",{id:"precision-rate"},"Precision Rate"),(0,o.kt)("p",null,"The proportion of the images predicted as a concept that had been actually labeled as the concept. It is calculated as True Positives divided by Total Predicted. Also known as \u201cpositive predictive value.\u201d"),(0,o.kt)("h4",{id:"f1-score"},"F1 Score"),(0,o.kt)("p",null,"The F1 score is another metric for assessing the performance of models. It represents the harmonic mean of the precision and recall rates. "),(0,o.kt)("p",null,"The F1 score is defined as 2 ","*"," (precision ","*"," recall) / (precision + recall). It combines both precision and recall rates into a single metric that balances their importance."),(0,o.kt)("p",null,"The score ranges from 0 to 1, with 1 being the best possible score. A high F1 score implies that the model has both high precision and high recall, and is able to correctly identify most of the positive instances in the dataset while avoiding false positives."),(0,o.kt)("h3",{id:"confusion-matrix"},"Confusion Matrix"),(0,o.kt)("p",null,"A confusion matrix is a table that is used to visualize the performance of a model. It summarizes the predictions made by a model on a set of data, by comparing the actual labels of the data with the predicted labels."),(0,o.kt)("p",null,"It allows you to review where you see true positives, or correctly predicted inputs ","(","the diagonal row",")",". Simply put, this is an excellent feature for telling you where your model gets things right or wrong."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(61457).Z,width:"1349",height:"723"})," "),(0,o.kt)("p",null,"It is usually presented in a tabular format with the Y-axis representing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Actual Concepts")," while the X-axis representing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Predicted Concepts"),". The cells display the average prediction probabilities for a certain concept, and for a group of images that were labeled as a certain concept."),(0,o.kt)("p",null,"The diagonal cells are the average probability for true positives, and any cells off the horizontal cells contain the average probability for non-true positives."),(0,o.kt)("p",null,"Each row represents a subset of the test set that was actually labeled as a concept, e.g. \u201cdog.\u201d As you go across the row, each cell represents the average prediction probability for each concept, noted by the column name, for all inputs in that subset, across all K-splits (i.e. \u201cprobabilities\u201d)."),(0,o.kt)("p",null,"The confusion matrix can help you to assess the effectiveness of a model for a particular task. It helps you to understand:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Accuracy"),": Overall, how often is the model correct?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Misclassification Rate"),": Overall, how often is it wrong?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"True Positive Rate"),": When it's actually yes, how often does it predict yes?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"False Positive Rate"),": When it's actually no, how often does it predict yes?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Specificity"),": When it's actually no, how often does it predict no?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Precision"),": When it predicts yes, how often is it correct?"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Prevalence"),": How often does the yes condition actually occur in our sample?")),(0,o.kt)("h2",{id:"input-analysis"},"Input Analysis"),(0,o.kt)("h3",{id:"selection-details"},"Selection Details"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(62591).Z,width:"1363",height:"789"})," "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Selection Details")," table shows the input-level details of the selection you made on the ",(0,o.kt)("strong",{parentName:"p"},"Evaluation Summary")," table. It shows the image input and prediction probabilities for each specific concept."),(0,o.kt)("admonition",{title:"Note",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"The prediction probabilities in this table may seem different from your actual model\u2019s probabilities. The reason is that all the evaluation results are based on the new model that was built for evaluation purposes during the cross-validation process.")))}u.isMDXComponent=!0},13756:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_10-a46373ac026d4295bac6b0dd2eca14c2.png"},61457:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_11-edbfe324882740f6d73ade96c543dba5.png"},62591:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_12-5dd8ba20b8109f5393c95324b148f3ef.png"},12156:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_3-30ba62aa63b997e634fc19f7ee6f81e7.png"},80321:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_4-f5763a028e3a3c6317befc16d4f67a4b.png"},74203:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_5-610836234f88b651830b3bd25c98d91b.png"},55189:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_6-5044b2768758d7e9da613520ca7e8985.png"},63394:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_7-b0ccaab22a3fd344be553c129d08b8a3.png"},59410:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_8-b278956df077d551e4d1822919bf91fd.png"},18119:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/evaluate_9-b89ea339c4626da98e8e30c30b02196d.png"}}]);