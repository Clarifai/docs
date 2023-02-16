"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9339],{85162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(67294),n=t(86010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,l),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>E});var r=t(87462),n=t(67294),s=t(86010),l=t(12466),u=t(76775),o=t(91980),i=t(67392),c=t(50012);function d(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:r,default:n}}=e;return{value:a,label:t,attributes:r,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,i.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const r=(0,u.k6)(),s=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const a=new URLSearchParams(r.location.search);a.set(s,e),r.replace({...r.location,search:a.toString()})}),[s,r])]}function v(e){const{defaultValue:a,queryString:t=!1,groupId:r}=e,s=p(e),[l,u]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:a,tabValues:s}))),[o,i]=m({queryString:t,groupId:r}),[d,v]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[r,s]=(0,c.Nk)(t);return[r,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=o??d;return h({value:e,tabValues:s})?e:null})();(0,n.useLayoutEffect)((()=>{b&&u(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),v(e)}),[i,v,s]),tabValues:s}}var b=t(72389);const y="tabList__CuJ",f="tabItem_LNqP";function g(e){let{className:a,block:t,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),r=i[t].value;r!==u&&(d(a),o(r))},h=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}null==(a=t)||a.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},a)},i.map((e=>{let{value:a,label:t,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===a?0:-1,"aria-selected":u===a,key:a,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,s.Z)("tabs__item",f,null==l?void 0:l.className,{"tabs__item--active":u===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:r}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==r}))))}function _(e){const a=v(e);return n.createElement("div",{className:(0,s.Z)("tabs-container",y)},n.createElement(g,(0,r.Z)({},e,a)),n.createElement(k,(0,r.Z)({},e,a)))}function E(e){const a=(0,b.Z)();return n.createElement(_,(0,r.Z)({key:String(a)},e))}},84430:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(87462),n=(t(67294),t(3905)),s=t(74866),l=t(85162),u=t(90814);const o={description:"Save your searches",sidebar_position:4},i="Saved Searches",c={unversionedId:"api-guide/search/legacy-search/saved_searches",id:"api-guide/search/legacy-search/saved_searches",title:"Saved Searches",description:"Save your searches",source:"@site/docs/api-guide/search/legacy-search/saved_searches.md",sourceDirName:"api-guide/search/legacy-search",slug:"/api-guide/search/legacy-search/saved_searches",permalink:"/api-guide/search/legacy-search/saved_searches",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Save your searches",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rank",permalink:"/api-guide/search/legacy-search/rank"},next:{title:"Advanced Topics",permalink:"/api-guide/advanced-topics/"}},d={},p=[{value:"Create a Saved Search",id:"create-a-saved-search",level:2},{value:"List Saved Searches in an App",id:"list-saved-searches-in-an-app",level:2},{value:"Search by Search ID",id:"search-by-search-id",level:2}],h={toc:p};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"saved-searches"},"Saved Searches"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Save your searches")),(0,n.kt)("hr",null),(0,n.kt)("p",null,"With saved searches, you can capture your search results at any given point in time, and record the inputs, annotations, search parameters, and models that you are running through the platform. "),(0,n.kt)("p",null,"Saved searches help you to:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save a search so that you can return to those same results later;"),(0,n.kt)("li",{parentName:"ul"},"Share a search with a collaborator in your app;"),(0,n.kt)("li",{parentName:"ul"},'Carve out data that you want to evaluate your models on as a "golden set";'),(0,n.kt)("li",{parentName:"ul"},"Split your data into training sets and test tests.")),(0,n.kt)("h2",{id:"create-a-saved-search"},"Create a Saved Search"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n    "searches": [{\n        "query": {\n            "ands": [{\n                "annotation":{\n                    "annotation_info": {\n                        "asset_set": ["set1", "set2"]\n                    }\n                }\n            }]\n        },\n        "save": true,\n        "id": "dataset-1589318146",\n        "name": "Dataset #1589318146"\n    }]\n}\''))),(0,n.kt)("h2",{id:"list-saved-searches-in-an-app"},"List Saved Searches in an App"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE"'))),(0,n.kt)("h2",{id:"search-by-search-id"},"Search by Search ID"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/searches/YOUR_SEARCH_ID_HERE" \\\n--header "Content-Type: application/json" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--data-raw \'{\n  "pagination": {\n    "page": 1,\n    "per_page": 5\n  }\n}\''))),(0,n.kt)("admonition",{title:"note",type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Saved searches are extremely helpful when testing out multiple versions of a model, or collaborating with a team. Just save your search, and refer to it at any time.")))}m.isMDXComponent=!0}}]);