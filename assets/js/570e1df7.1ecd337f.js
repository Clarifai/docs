"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[9118],{85162:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(67294),s=a(86010);const r="tabItem_Ymn6";function u(e){let{children:t,hidden:a,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,u),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(87462),s=a(67294),r=a(86010),u=a(12466),l=a(76775),i=a(91980),o=a(67392),d=a(50012);function c(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function p(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[u,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,o]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),E=(()=>{const e=i??c;return m({value:e,tabValues:r})?e:null})();(0,s.useLayoutEffect)((()=>{E&&l(E)}),[E]);return{selectedValue:u,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),h(e)}),[o,h,r]),tabValues:r}}var E=a(72389);const f="tabList__CuJ",_="tabItem_LNqP";function v(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=o[a].value;n!==l&&(c(t),i(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;a=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;a=d[t]??d[d.length-1];break}}null==(t=a)||t.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},o.map((e=>{let{value:t,label:a,attributes:u}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},u,{className:(0,r.Z)("tabs__item",_,null==u?void 0:u.className,{"tabs__item--active":l===t})}),a??t)})))}function T(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function g(e){const t=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",f)},s.createElement(v,(0,n.Z)({},e,t)),s.createElement(T,(0,n.Z)({},e,t)))}function y(e){const t=(0,E.Z)();return s.createElement(g,(0,n.Z)({key:String(t)},e))}},15800:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(87462),s=(a(67294),a(3905)),r=a(74866),u=a(85162),l=a(90814);const i={description:"Create, explore and modify datasets",sidebar_position:3},o="Dataset Inputs",d={unversionedId:"api-guide/data/datasets/dataset-inputs",id:"api-guide/data/datasets/dataset-inputs",title:"Dataset Inputs",description:"Create, explore and modify datasets",source:"@site/docs/api-guide/data/datasets/dataset-inputs.md",sourceDirName:"api-guide/data/datasets",slug:"/api-guide/data/datasets/dataset-inputs",permalink:"/api-guide/data/datasets/dataset-inputs",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Create, explore and modify datasets",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dataset Annotation Filters",permalink:"/api-guide/data/datasets/dataset-filters"},next:{title:"Dataset Versions",permalink:"/api-guide/data/datasets/dataset-versions"}},c={},p=[{value:"Add Inputs to a Dataset",id:"add-inputs-to-a-dataset",level:2},{value:"List Inputs in Datasets",id:"list-inputs-in-datasets",level:2},{value:"Get a Dataset Input",id:"get-a-dataset-input",level:2},{value:"Delete Inputs",id:"delete-inputs",level:2}],m={toc:p};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"dataset-inputs"},"Dataset Inputs"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Create, explore, and modify datasets")),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"add-inputs-to-a-dataset"},"Add Inputs to a Dataset"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request POST "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "dataset_inputs": [\n        {\n            "input": {\n                "id": "YOUR_INPUT_ID_HERE"\n            }\n        }\n    ]\n}\''))),(0,s.kt)("h2",{id:"list-inputs-in-datasets"},"List Inputs in Datasets"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs?page=1&per_page=100" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,s.kt)("h2",{id:"get-a-dataset-input"},"Get a Dataset Input"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request GET "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs/YOUR_INPUT_ID_HERE" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json"'))),(0,s.kt)("h2",{id:"delete-inputs"},"Delete Inputs"),(0,s.kt)(r.Z,{mdxType:"Tabs"},(0,s.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(l.Z,{className:"language-bash",mdxType:"CodeBlock"},'curl --location -g --request DELETE "https://api.clarifai.com/v2/users/YOUR_USER_ID_HERE/apps/YOUR_APP_ID_HERE/datasets/YOUR_DATASET_ID_HERE/inputs/" \\\n--header "Authorization: Key YOUR_PAT_HERE" \\\n--header "Content-Type: application/json" \\\n--data-raw \'{\n    "input_ids": ["YOUR_INPUT_ID_HERE"]\n}\''))))}b.isMDXComponent=!0}}]);