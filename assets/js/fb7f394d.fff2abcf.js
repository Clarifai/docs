"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[492],{60509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var n=r(74848),a=r(28453),s=r(3514),i=r(84142);const o={description:"Use vector search to find, sort, and filter what you need in your unstructured data",pagination_prev:null},c="Smart Search on Input-Manager",l={id:"portal-guide/psearch/README",title:"Smart Search on Input-Manager",description:"Use vector search to find, sort, and filter what you need in your unstructured data",source:"@site/docs/portal-guide/psearch/README.mdx",sourceDirName:"portal-guide/psearch",slug:"/portal-guide/psearch/",permalink:"/portal-guide/psearch/",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/portal-guide/psearch/README.mdx",tags:[],version:"current",frontMatter:{description:"Use vector search to find, sort, and filter what you need in your unstructured data",pagination_prev:null},sidebar:"tutorialSidebar",next:{title:"Smart Image Search",permalink:"/portal-guide/psearch/visual-search"}},d={},h=[{value:"Fully-Managed Vector Search Engine",id:"fully-managed-vector-search-engine",level:2},{value:"Powered by a Vector Database",id:"powered-by-a-vector-database",level:2},{value:"Simplifies Smart Search Integration",id:"simplifies-smart-search-integration",level:2},{value:"Types of Smart Search",id:"types-of-smart-search",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"smart-search-on-input-manager",children:"Smart Search on Input-Manager"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Use vector search to find, sort, and filter what you need in your data"})}),"\n",(0,n.jsx)("hr",{}),"\n",(0,n.jsx)(t.p,{children:"The Clarifai\u2019s Smart Search feature on the Input-Manager screen allows you to harness the power of AI to search through unstructured or structured data with ease."}),"\n",(0,n.jsx)(t.p,{children:"Whether you're searching for images, videos, or text data, Smart Search empowers you to quickly find the content you need based on visual, semantic and/or conceptual understanding."}),"\n",(0,n.jsxs)(t.p,{children:["With Smart Search, you can unlock the full potential of your data assets, making it easier than ever to locate and retrieve the data of interest. For example, you can use the search results within your app to accelerate ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/annotate/create-get-update-delete",children:"data labeling"})," for custom model training tasks."]}),"\n",(0,n.jsx)("figure",{style:{display:"flex",justifyContent:"center"},children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(12987).A+"",width:"221",height:"278"})})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The Input-Manager screen is the main page showcasing all the inputs in your app. You can access it by clicking the ",(0,n.jsx)(t.strong,{children:"Inputs"})," option in your app's collapsible left sidebar. The screen has ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/data/explorer/#input-manager",children:"two modes"}),": Input Mode (default) and Object Mode."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(20108).A+"",width:"1885",height:"915"})}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["When performing a Smart Search with custom concepts, ensure that these concepts are first trained using an embedding-classifier model (",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/model/model-types/transfer-learning/",children:"transfer-learning"})," model). Without this training, the search query may not work. In the Input-Manager screen, concepts that have already been trained with a model are marked with a blue circle, while untrained concepts are marked with a grey circle."]}),"\n",(0,n.jsxs)(t.li,{children:["When you upload inputs to our platform, we use your app\u2019s ",(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/workflows/base-workflows/",children:"base workflow"})," to index them. This immediately makes them searchable by concept, annotation, or other advanced parameters. You can update the search index by clicking the ",(0,n.jsx)(t.strong,{children:"Update"})," button in the search bar, then clicking the reindex button in menu that drops down."]}),"\n"]})}),"\n",(0,n.jsx)(t.h2,{id:"fully-managed-vector-search-engine",children:"Fully-Managed Vector Search Engine"}),"\n",(0,n.jsxs)(t.p,{children:["Our Smart Search feature leverages vector search capabilities to power the search experience. ",(0,n.jsx)(t.a,{href:"https://www.clarifai.com/blog/finding-what-you-need-a-comprehensive-guide-to-vector-search",children:"Vector search"})," is a type of search engine that uses vectors to search and retrieve text, images, and videos."]}),"\n",(0,n.jsx)(t.p,{children:"Vector embeddings are numerical \u201crepresentations\u201d of unstructured data, which enable their meaning to be encoded and processed mathematically. By converting the data into vectors, which is a language native to computers, we can efficiently perform search operations on them."}),"\n",(0,n.jsx)(t.p,{children:"Instead of traditional keyword-based search, where exact matches are sought, vector search allows for searching based on visual and/or semantic similarity by calculating distances between vector embedding representations of the data."}),"\n",(0,n.jsx)(t.h2,{id:"powered-by-a-vector-database",children:"Powered by a Vector Database"}),"\n",(0,n.jsx)(t.p,{children:"Our vector search engine uses deep learning embedding models to first analyze the visual features of each input, such as color, shape, and texture. This process, known as feature extraction, generates a corresponding vector representation for each piece of unstructured data."}),"\n",(0,n.jsxs)(t.p,{children:["The embedding models then index these vector representations and store them in our ",(0,n.jsx)(t.a,{href:"https://www.clarifai.com/blog/using-clarifais-native-vector-database",children:"vector database"})," (also called a vector store or a semantic search engine)."]}),"\n",(0,n.jsx)(t.p,{children:"When a user performs a search, their query is also converted into a vector representation. The vector DB then searches for the vector representations that are most similar to the query vector representation. The results are then displayed to the user."}),"\n",(0,n.jsx)(t.p,{children:"By using our vector search as a service, you can get more relevant search results, faster search times, and scalable performance."}),"\n",(0,n.jsx)(t.h2,{id:"simplifies-smart-search-integration",children:"Simplifies Smart Search Integration"}),"\n",(0,n.jsx)(t.p,{children:"Choosing Clarifai's turnkey smart search solution is better than building your own from scratch."}),"\n",(0,n.jsx)(t.p,{children:"Without Clarifai, you would need to do the following in order to build smart search features into your own solutions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Set up your own vector database instance. This involves choosing a database platform, installing the software, and configuring the database."}),"\n",(0,n.jsx)(t.li,{children:"Build out the entire pipeline for turning images/text into embeddings. This involves using a computer vision or natural language processing (NLP) library to extract features from images or text, and then converting those features into a vector representation."}),"\n",(0,n.jsx)(t.li,{children:"Insert or query the vector database. This involves using the database's API to add new data or search for existing data."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This process can be very time-consuming and complex, especially for developers who are not familiar with vector databases or machine learning."}),"\n",(0,n.jsx)(t.p,{children:"Clarifai eliminates the need for developers to do all of this work by providing an out of the box solution for building state-of-the-art smart search capabilities."}),"\n",(0,n.jsx)(t.h2,{id:"types-of-smart-search",children:"Types of Smart Search"}),"\n",(0,n.jsx)(t.p,{children:"We offer the following types of Smart Search options in our platform."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/psearch/visual-search",children:(0,n.jsx)(t.strong,{children:"Smart Image Search"})})," \u2014 Allows you to retrieve images sorted by their visual relevance to a query in the form of:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Image"})," \u2014 Provide a reference image of interest to compare inputs against."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Concept"})," \u2014 Provide a trained concept to compare input predictions against."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Caption"})," \u2014 Provide a full-text description to compare inputs against."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/psearch/prank",children:(0,n.jsx)(t.strong,{children:"Smart Object Search"})})," \u2014 Allows you to retrieve annotated objects (bounding boxes within images) sorted by their visual relevance to a query in the form of:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Image"})," \u2014 Provide a reference image of interest to compare inputs against."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Concept"})," \u2014 Provide a trained concept to compare input predictions against."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Caption"})," \u2014 Provide a full-text description to compare inputs against."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://docs.clarifai.com/portal-guide/psearch/text-search",children:(0,n.jsx)(t.strong,{children:"Smart Text Search"})})," \u2014 Allows you to retrieve text data sorted by their content and semantic similarity to a query in the form of:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Text"})," \u2014 Provide a text description to compare input predictions against."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Concept"})," \u2014 Provide a trained concept to compare input predictions against."]}),"\n"]}),"\n"]}),"\n"]}),"\n","\n",(0,n.jsx)(s.A,{items:(0,i.$S)().items})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},3514:(e,t,r)=>{r.d(t,{A:()=>j});r(96540);var n=r(18215),a=r(84142),s=r(28774),i=r(53465),o=r(16654),c=r(21312),l=r(51107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var h=r(74848);function u(e){let{href:t,children:r}=e;return(0,h.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:r})}function p(e){let{href:t,icon:r,title:a,description:s}=e;return(0,h.jsxs)(u,{href:t,children:[(0,h.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:a,children:[r," ",a]}),s&&(0,h.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const r=(0,a.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,h.jsx)(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function g(e){let{item:t}=e;const r=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.cC)(t.docId??void 0);return(0,h.jsx)(p,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,h.jsx)(g,{item:t});case"category":return(0,h.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,a.$S)();return(0,h.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,h.jsx)(x,{...e});const s=(0,a.d1)(t);return(0,h.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,h.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,h.jsx)(f,{item:e})},t)))})}},53465:(e,t,r)=>{r.d(t,{W:()=>l});var n=r(96540),a=r(44586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function l(){const e=c();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const a=r.select(t),s=r.pluralForms.indexOf(a);return n[Math.min(s,n.length-1)]}(r,t,e)}}},20108:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/input-manager-15cc357852ad53ee90568b96b6e3fae7.png"},12987:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/spacetime-bfa0d6ae24419bc14d4f3595c7fe6da6.svg"},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);