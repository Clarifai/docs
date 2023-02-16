"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[3625],{85162:(e,a,t)=>{t.d(a,{Z:()=>o});var s=t(67294),n=t(86010);const r="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return s.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,o),hidden:t},a)}},74866:(e,a,t)=>{t.d(a,{Z:()=>R});var s=t(87462),n=t(67294),r=t(86010),o=t(12466),i=t(76775),l=t(91980),u=t(67392),d=t(50012);function c(e){return function(e){return n.Children.map(e,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:a,label:t,attributes:s,default:n}}=e;return{value:a,label:t,attributes:s,default:n}}))}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function m(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:t}=e;const s=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function E(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,r=p(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[l,u]=v({queryString:t,groupId:s}),[c,E]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[s,r]=(0,d.Nk)(t);return[s,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),_=(()=>{const e=l??c;return m({value:e,tabValues:r})?e:null})();(0,n.useLayoutEffect)((()=>{_&&i(_)}),[_]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),E(e)}),[u,E,r]),tabValues:r}}var _=t(72389);const h="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:a,block:t,selectedValue:i,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const a=e.currentTarget,t=d.indexOf(a),s=u[t].value;s!==i&&(c(a),l(s))},m=e=>{var a;let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}null==(a=t)||a.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:o}=e;return n.createElement("li",(0,s.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>d.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",b,null==o?void 0:o.className,{"tabs__item--active":i===a})}),t??a)})))}function T(e){let{lazy:a,children:t,selectedValue:s}=e;if(t=Array.isArray(t)?t:[t],a){const e=t.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},t.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s}))))}function g(e){const a=E(e);return n.createElement("div",{className:(0,r.Z)("tabs-container",h)},n.createElement(f,(0,s.Z)({},e,a)),n.createElement(T,(0,s.Z)({},e,a)))}function R(e){const a=(0,_.Z)();return n.createElement(g,(0,s.Z)({key:String(a)},e))}},51253:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var s=t(87462),n=(t(67294),t(3905)),r=t(74866),o=t(85162),i=t(90814);const l={description:"Manage dataset versions so you can track the performance of and iterate on your datasets",sidebar_position:4},u="Dataset Versions",d={unversionedId:"api-guide/data/datasets/dataset-versions",id:"api-guide/data/datasets/dataset-versions",title:"Dataset Versions",description:"Manage dataset versions so you can track the performance of and iterate on your datasets",source:"@site/docs/api-guide/data/datasets/dataset-versions.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-versions",permalink:"/api-guide/data/datasets/dataset-versions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Manage dataset versions so you can track the performance of and iterate on your datasets",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Dataset Inputs",permalink:"/api-guide/data/datasets/dataset-inputs"},next:{title:"Supported Formats",permalink:"/api-guide/data/supported-formats"}},c={},p=[{value:"Add a Dataset Version",id:"add-a-dataset-version",level:2},{value:"List Dataset Versions",id:"list-dataset-versions",level:2},{value:"Get a Dataset Versions",id:"get-a-dataset-versions",level:2},{value:"Change a Dataset Version",id:"change-a-dataset-version",level:2},{value:"Delete a Dataset Version",id:"delete-a-dataset-version",level:2}],m={toc:p};function v(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dataset-versions"},"Dataset Versions"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Manage dataset versions so you can track the performance of your datasets and iterate over them")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"add-a-dataset-version"},"Add a Dataset Version"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_versions": [\n        {\n            "id": "dataset-version-1633032673",            \n            "dataset_filter": {\n                "id": "YOUR_DATASET_FILTER_ID_HERE"\n            }\n        }\n    ]\n}\''))),(0,n.kt)("h2",{id:"list-dataset-versions"},"List Dataset Versions"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions?page=1&per_page=100" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,n.kt)("h2",{id:"get-a-dataset-versions"},"Get a Dataset Versions"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions/YOUR_DATASET_VERSION_ID_HERE" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,n.kt)("h2",{id:"change-a-dataset-version"},"Change a Dataset Version"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request PATCH "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_versions": [\n        {\n            "id": "YOUR_DATASET_VERSION_ID_HERE",\n            "name": "dataset version updated name"\n        }\n    ],\n    "action": "overwrite"\n}\''))),(0,n.kt)("h2",{id:"delete-a-dataset-version"},"Delete a Dataset Version"),(0,n.kt)(r.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,n.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/versions" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_version_ids": ["YOUR_DATASET_VERSION_ID_HERE"]\n}\''))))}v.isMDXComponent=!0}}]);