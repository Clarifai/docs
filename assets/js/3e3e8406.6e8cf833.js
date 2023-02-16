"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[5149],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),u=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(a),p=n,g=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return a?o.createElement(g,i(i({ref:t},d),{},{components:a})):o.createElement(g,i({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},58258:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=a(87462),n=(a(67294),a(3905));const r={description:"Get measurable insights into your utilization of the Clarifai Community platform",sidebar_position:1},i="Community Usage Dashboard",s={unversionedId:"community/guides/usage-dashboard",id:"community/guides/usage-dashboard",title:"Community Usage Dashboard",description:"Get measurable insights into your utilization of the Clarifai Community platform",source:"@site/docs/community/guides/usage-dashboard.md",sourceDirName:"community/guides",slug:"/community/guides/usage-dashboard",permalink:"/community/guides/usage-dashboard",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get measurable insights into your utilization of the Clarifai Community platform",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Importing Data with CSV and TSV Files",permalink:"/portal-guide/advanced-topics/csv-and-tsv"},next:{title:"Clarifai Organizations",permalink:"/community/guides/clarifai-organizations"}},l={},u=[{value:"How to Access the Usage Dashboard",id:"how-to-access-the-usage-dashboard",level:2},{value:"Elements of the Usage Dashboard",id:"elements-of-the-usage-dashboard",level:2},{value:"Date ranges",id:"date-ranges",level:3},{value:"Usage highlights",id:"usage-highlights",level:3},{value:"Ops Count",id:"ops-count",level:3},{value:"Training Hours",id:"training-hours",level:3},{value:"Stored Inputs",id:"stored-inputs",level:3},{value:"Model Usage",id:"model-usage",level:3}],d={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"community-usage-dashboard"},"Community Usage Dashboard"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Get insights into your utilization of the Clarifai Community platform")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The Usage dashboard provides measurable insights into your utilization of the Clarifai Community platform during the selected period."),(0,n.kt)("p",null,"With the dashboard, you can monitor your consumption of Clarifai\u2019s resources, better understand how you interact with the Clarifai platform, and optimize your configurations accordingly. "),(0,n.kt)("p",null,"You can view graphical representations of the following items:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ops count"),(0,n.kt)("li",{parentName:"ul"},"Training hours"),(0,n.kt)("li",{parentName:"ul"},"Stored inputs"),(0,n.kt)("li",{parentName:"ul"},"Model usage")),(0,n.kt)("h2",{id:"how-to-access-the-usage-dashboard"},"How to Access the Usage Dashboard"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Sign in to the ",(0,n.kt)("a",{parentName:"li",href:"https://clarifai.com/explore"},"Clarifai Community Portal"),"."),(0,n.kt)("li",{parentName:"ol"},"Click your profile icon at the top-left corner of the page and select the ",(0,n.kt)("strong",{parentName:"li"},"Account")," option on the drop-down list.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Access the usage dashboard",src:a(97047).Z,width:"1884",height:"794"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"In the left menu, select ",(0,n.kt)("strong",{parentName:"li"},"Usage"),". You\u2019ll then be redirected to the Usage dashboard page. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Usage dashboard page",src:a(6765).Z,width:"1075",height:"451"})),(0,n.kt)("h2",{id:"elements-of-the-usage-dashboard"},"Elements of the Usage Dashboard"),(0,n.kt)("p",null,"Let\u2019s describe how to use the Usage dashboard and make the most of its data. "),(0,n.kt)("h3",{id:"date-ranges"},"Date ranges"),(0,n.kt)("p",null,"You can find the date range selection at the top-right corner of the page. By default, the Usage dashboard is filtered based on your current month-to-month billing cycle. "),(0,n.kt)("p",null,"Not that if you are a free user, you can still use this dashboard to track your metrics for a given billing cycle, and have the option of upgrading to a paid plan if you need more."),(0,n.kt)("p",null,"You can choose any of your two previous billing cycles as a criterion to view the output of the Usage dashboard. "),(0,n.kt)("p",null,"You can also customize the output by selecting your preferred date range\u2014last 7 days, 30 days, 90 days, or 6 months. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Date range",src:a(99004).Z,width:"641",height:"366"})),(0,n.kt)("h3",{id:"usage-highlights"},"Usage highlights"),(0,n.kt)("p",null,"The Usage highlights section gives a quick overview of how you used the platform during the selected period."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Usage highlights",src:a(66532).Z,width:"1531",height:"405"})),(0,n.kt)("p",null,"It tells you the number of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ops count\u2014the number of operations you undertook;"),(0,n.kt)("li",{parentName:"ul"},"Training hours\u2014the number of hours you trained your models;"),(0,n.kt)("li",{parentName:"ul"},"Stored inputs\u2014the number of inputs you added to the platform.")),(0,n.kt)("h3",{id:"ops-count"},"Ops Count"),(0,n.kt)("p",null,"The Ops Count section illustrates the operations you undertook during the selected period."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Ops count",src:a(69540).Z,width:"1495",height:"699"})),(0,n.kt)("p",null,"It displays the number of operations for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Model Predict"),(0,n.kt)("li",{parentName:"ul"},"Search")),(0,n.kt)("h3",{id:"training-hours"},"Training Hours"),(0,n.kt)("p",null,"The Training Hours section showcases the number of hours you trained your models during the selected period."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Training hours",src:a(23430).Z,width:"1480",height:"628"})),(0,n.kt)("h3",{id:"stored-inputs"},"Stored Inputs"),(0,n.kt)("p",null,"The Stored Inputs section has a chart that illustrates the number of inputs you added to the Clarifai platform during the selected period."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Stored inputs",src:a(38253).Z,width:"1485",height:"661"})),(0,n.kt)("h3",{id:"model-usage"},"Model Usage"),(0,n.kt)("p",null,"The Model Usage section displays the extent of usage of your most active models. It shows a model\u2019s name against its Ops Count."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Model usage",src:a(63778).Z,width:"1494",height:"651"})))}c.isMDXComponent=!0},97047:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/access_usage_dashboard-079311df9a87e1a88467f0b72230b4f6.png"},99004:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/date_range-75f86582f4306fdce0b5cbc3af6e277e.png"},63778:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/model_usage-68808cdb6a058da7b4f2827171d7afc9.png"},69540:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/ops_count-1e60fa33042deeb62dd4ce9b0193a162.png"},38253:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/stored_inputs-e8848515c476e87a5044c8f1cf7c3054.png"},23430:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/training_hours-22f525ecaf70174d3953d7071bf51d28.png"},6765:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/usage_dashboard_page-90cc4a26ecc464151114ac2f7af6b72a.png"},66532:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/usage_highlights-a97f8afd75adb08fb74a66358cecd211.png"}}]);