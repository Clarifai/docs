"use strict";(self.webpackChunkdocs_new=self.webpackChunkdocs_new||[]).push([[1909],{56620:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=t(74848),a=t(28453),r=t(47242);const o={description:"How to Add AI to a Node.js web",pagination_prev:null,sidebar_position:2},i="Add AI to a Node.js Web App",c={id:"tutorials/node-js-tutorial",title:"Add AI to a Node.js Web App",description:"How to Add AI to a Node.js web",source:"@site/docs/tutorials/node-js-tutorial.mdx",sourceDirName:"tutorials",slug:"/tutorials/node-js-tutorial",permalink:"/tutorials/node-js-tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/Clarifai/docs/blob/main/docs/tutorials/node-js-tutorial.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"How to Add AI to a Node.js web",pagination_prev:null,sidebar_position:2},sidebar:"tutorialSidebar",next:{title:"How to Evaluate An Image Classification Model",permalink:"/tutorials/how-to-evaluate-an-image-classification-model"}},l={},d=[{value:"Background &amp; Project Setup",id:"background--project-setup",level:2},{value:"Camera Preview and Taking a Photo",id:"camera-preview-and-taking-a-photo",level:2},{value:"Create a Personal Access Token",id:"create-a-personal-access-token",level:2},{value:"Create an API Handler",id:"create-an-api-handler",level:2},{value:"Calling our API",id:"calling-our-api",level:2},{value:"Calling an AI model",id:"calling-an-ai-model",level:2},{value:"Extracting Image Data from Request",id:"extracting-image-data-from-request",level:2},{value:"Summary",id:"summary",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"add-ai-to-a-nodejs-web-app",children:"Add AI to a Node.js Web App"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A step-by-step guide by Alexandros Katechis"})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.p,{children:"Clarifai makes it easy to train and deploy a model at scale in production, without having to think about provisioning GPUs or moving data around for training. In this blog post, we\u2019ll walk through how to bootstrap a new Javascript/Typescript web app, capture a photo of ourselves, and then use Clarifai\u2019s celebrity model to tell us which celebrity the user looks like."}),"\n",(0,s.jsxs)(n.p,{children:["There are many different web frameworks you could use (",(0,s.jsx)(n.a,{href:"https://expressjs.com/",children:"express"}),", ",(0,s.jsx)(n.a,{href:"https://koajs.com/",children:"koa"}),", ",(0,s.jsx)(n.a,{href:"https://nextjs.org/",children:"next"}),", ",(0,s.jsx)(n.a,{href:"https://remix.run/",children:"remix"}),"), and just as many UI libraries (",(0,s.jsx)(n.a,{href:"https://reactjs.org/",children:"react"}),", ",(0,s.jsx)(n.a,{href:"https://angular.io/",children:"angular"}),", ",(0,s.jsx)(n.a,{href:"https://vuejs.org/",children:"vue"}),", ",(0,s.jsx)(n.a,{href:"https://svelte.dev/",children:"svelte"}),"). In this blog post, we\u2019re going to go with next JS, which is the framework we use at Clarifai to build our web applications, but you could just as easily follow along with any other node.js framework you prefer, substituting your framework\u2019s conventions as we go along."]}),"\n",(0,s.jsx)(n.p,{children:"The final version of this project is available on Github, so if you run into any issues, feel free to clone the project repo, or open an issue. With that out of the way, let\u2019s get started!"}),"\n",(0,s.jsx)(n.h2,{id:"background--project-setup",children:"Background & Project Setup"}),"\n",(0,s.jsx)(n.p,{children:"We\u2019ll start with bootstrapping a new node.js web app. We\u2019re going to assume you already have node.js and git installed, if not, pause here and get those installed. Now that we\u2019re ready, start by running create-next-app to bootstrap a new project."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"npx create-next-app\n"})}),"\n",(0,s.jsx)(n.p,{children:"The CLI will ask us a few questions about what technology we want to use, we\u2019ll use the defaults, which will set us up with Typescript and ESLint in addition to a default homepage, a server for creating custom API handlers to run code on our server, and everything needed to build and deploy our app."}),"\n",(0,s.jsx)(n.p,{children:"Try it out with yarn dev (or npm, if you prefer). You should see the following in your terminal."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"> yarn dev\nyarn run v1.22.15\n$ next dev\nready - started server on 0.0.0.0:3000, url: http://localhost:3000\nevent - compiled client and server successfully in 2.3s (165 modules)\nwait  - compiling / (client and server)...\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Opening ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," in your browser, should render the following page."]}),"\n",(0,s.jsx)(r.A,{caption:"Default Next.js app homepage",src:"/img/nodejs-tutorial/nextjs-homepage.jpeg"}),"\n",(0,s.jsx)(n.p,{children:"Great! Let\u2019s get started building our AI-powered celebrity app."}),"\n",(0,s.jsx)(n.h2,{id:"camera-preview-and-taking-a-photo",children:"Camera Preview and Taking a Photo"}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"pages/index.tsx"})," where you will find all the React code for rendering the home page of our new app. You should see a bunch of markup for rendering next.js promotional content. Let\u2019s start by deleting it, and inserting some basic markup with a title, some instructions on how to use the app, and a ",(0,s.jsx)(n.code,{children:"<video>"})," element that we\u2019ll use to render a preview of our webcam."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="pages/index.tsx"',children:'<>\n  <Head>\n    <title>Which Celebrity Am I?</title>\n    <meta name="description" content="Use the power of AI to figure out which celebrity you look like!" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="icon" href="/favicon.ico" />\n  </Head>\n  <main className={styles.main}>\n    <div className={styles.description}>\n      <h1>Which Celebrity Do you look like?</h1>\n      <a onClick={beginCapture}>Click to take a photo of yourself!</a>\n    </div>\n    <video className={styles.video} ref={cameraPreviewEl} />\n  </main>\n</>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And the following CSS in ",(0,s.jsx)(n.code,{children:"pages/index.tsx"})," will help us add some basic styling"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="pages/index.tsx"',children:".main {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6rem;\n  min-height: 100vh;\n}\n\n.description {\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  width: 100%;\n  justify-content: center;\n  text-align: center;\n}\n\n.description h1 {\n  font-size: 82px;\n  margin-bottom: 30px;\n}\n\n.description a {\n  font-size: 30px;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.video {\n  width: 800px;\n  height: 600px;\n  border: 1px dashed #fff;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Finally, let\u2019s add an element ref and a click handler to request the user\u2019s permission to open their webcam, and render a preview in the page."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const cameraPreviewEl = useRef<HTMLVideoElement>(null);\n\nconst beginCapture = useCallback(\n  async () => {\n    if (!cameraPreviewEl.current) {\n      return;\n    }\n    const stream = await navigator.mediaDevices.getUserMedia({ video: true });\n    cameraPreviewEl.current.srcObject = stream;\n    cameraPreviewEl.current.play();\n  },\n  [cameraPreviewEl]\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["What this callback does is first, make sure we have a reference to the video element. Line 8 requests access to a media device that can produce a video stream, represented by a ",(0,s.jsx)(n.code,{children:"MediaStream"})," object. Line 9 connects the video element to the media stream, and line 9 begins playback."]}),"\n",(0,s.jsx)(n.p,{children:"Once you save everything, the development server will automatically re-render the react components in your browser, without even refreshing the page, and the result should be something like the following."}),"\n",(0,s.jsx)(r.A,{caption:"Our Celebrity App\u2019s initial render result",src:"/img/nodejs-tutorial/celeb-initial.jpeg"}),"\n",(0,s.jsx)(n.p,{children:"After clicking the link to open the user\u2019s webcam, and granting permission, we should see the following (your face may be different than mine)."}),"\n",(0,s.jsx)(r.A,{caption:"Our Celebrity App\u2019s initial render result",src:"/img/nodejs-tutorial/celeb-result.jpeg"}),"\n",(0,s.jsx)(n.p,{children:"Great! Now that we have a webcam stream, we\u2019ll add a button that the user can click in order to take a snapshot. We only want to show the button when the camera is capturing, so let\u2019s add a bit of state to our component to represent that."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const [capturing, setCapturing] = useState(false);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s update our click handler to set the flag to true once the video element has begun playback from the camera."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"setCapturing(true);\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that the flag is correctly being updated, let\u2019s add the conditional markup to render the button with some styling associated with it. For brevity, we\u2019ll just use an emoji of a camera with a flash, but you can use whatever icon component you may have handy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/* in our component */\n{capturing &&\n  (\n    <button className={styles.snapshot}>\n      \ud83d\udcf8\n    </button>\n  )}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",children:"/* in our css */\n.snapshot {\n  font-size: 65px;\n  background: none;\n  padding: 10px;\n  border: 1px solid #fff;\n  cursor: pointer;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, let\u2019s attach a click handler to the button to take a snapshot by drawing to an off-screen canvas element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const takeSnapshot = useCallback(\n  () => {\n    if (!cameraPreviewEl.current) {\n      return;\n    }\n    const canvas = document.createElement('canvas');\n    canvas.width = 800;\n    canvas.height = 600;\n\n    const ctx = canvas.getContext('2d');\n    if (!ctx) {\n      return;\n    }\n\n    ctx.drawImage(cameraPreviewEl.current, 0, 0, canvas.width, canvas.height);\n    // const dataUrl = canvas.toDataURL('image/jpeg');\n    // document.getElementById('frame').src = dataUrl;\n    // console.log(dataUrl);\n  },\n  []\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This code should be pretty straight forward. We start by ensuring we have a reference to the video element, and creating a ",(0,s.jsx)(n.code,{children:"canvas"})," element in memory. We set it\u2019s dimensions to ",(0,s.jsx)(n.code,{children:"800x600"})," which will match the ",(0,s.jsx)(n.code,{children:"<video>"})," preview element we created earlier. To draw to a canvas element, we need to get a ",(0,s.jsx)(n.code,{children:"CanvasRenderingContext2D"})," object, which we acquire on line 10. If that succeeds, line 15 renders the video element\u2019s video track (don\u2019t forget, it also has an audio track which we don\u2019t care about for this app)."]}),"\n",(0,s.jsxs)(n.p,{children:["Lines 16-18 are commented out, but if you want to preview what the snapshot looks like, you could uncomment them (and also add an ",(0,s.jsx)(n.code,{children:'<img id="frame" width={800} height={600} />'})," element to the markup), to see what your camera captured when you clicked the snapshot button."]}),"\n",(0,s.jsx)(n.p,{children:"For now, we\u2019ll leave the client side code as is, and turn our attention to the server side code."}),"\n",(0,s.jsx)(n.h2,{id:"create-a-personal-access-token",children:"Create a Personal Access Token"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to Clarifai\u2019s docs site for ",(0,s.jsx)(n.a,{href:"https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens",children:"instructions on creating a personal access token"}),". A PAT is similar to an API key, insomuch that it can be used in the same way as an App key. The main advantage is that a PAT is allowed to access resources in all of our apps, as well as the clarifai/main app, which is where the Celebrity model we\u2019re interested in exists."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Your PAT can be used to call the Clarifai API on your behalf. For this reason, you should never include a PAT in your client-side code, like react components. Any user with dev tools open would be able to steal it and call the Clarifai API on your behalf.\nx\nFor this reason, we\u2019ll introduce an API handler that will call the Clarifai model from our server, and simply send a response to the client containing the result data we\u2019re interested in."})}),"\n",(0,s.jsx)(n.h2,{id:"create-an-api-handler",children:"Create an API Handler"}),"\n",(0,s.jsxs)(n.p,{children:["You may have noticed earlier, that all the react code we were working with, was in ",(0,s.jsx)(n.code,{children:"pages/index.tsx"})," and it rendered on the path ",(0,s.jsx)(n.code,{children:"/"}),". If we were to create a react component at ",(0,s.jsx)(n.code,{children:"pages/hello.tsx"})," it would render on the path ",(0,s.jsx)(n.code,{children:"/hello"}),". This is ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/basic-features/pages",children:"NextJS's convention of filesystem-based routing"}),". NextJS has a similar convention for creating ",(0,s.jsx)(n.a,{href:"https://nextjs.org/docs/api-routes/introduction",children:"API handlers"}),", under the ",(0,s.jsx)(n.code,{children:"pages/api"})," directory. We\u2019re going to create our handler under ",(0,s.jsx)(n.code,{children:"pages/api/which-celebrity.ts"})," which means we\u2019ll be able to call it by making a request to ",(0,s.jsx)(n.code,{children:"/api/which-celebrity"}),". We already have a sample API handler in ",(0,s.jsx)(n.code,{children:"hello.ts"}),", thanks to ",(0,s.jsx)(n.code,{children:"create-next-app"})," so we\u2019ll just rename it to ",(0,s.jsx)(n.code,{children:"which-celebrity"})," and we\u2019ll be good to go."]}),"\n",(0,s.jsx)(r.A,{caption:"NextJS is even nice enough to tell us we look like \u201cJohn Doe\u201d",src:"/img/nodejs-tutorial/nextjs.jpeg"}),"\n",(0,s.jsxs)(n.p,{children:["Next, let\u2019s create a typescript declaration file where we\u2019ll define an interface for our API\u2019s response. We\u2019ll create ",(0,s.jsx)(n.code,{children:"types.ts"})," in our project\u2019s root, and insert the following type declaration"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * If Clarifai can match us with a celebrity, return the name and score.\n * Otherwise, just return `false`.\n */\ntype WhichCelebrityResponse = {\n  recognized: typeof true;\n  name: string;\n  score: number;\n} | {\n  recognized: typeof false;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In a more complex project, you might even want to organize types in a more sophisticated way. In the case of this API response, the Clarifai model either recognizes us or not. If it does recognize us, we\u2019ll return a name and score alongside the flag. Now we can update our handler\u2019s response type to match this type, and we\u2019ll add some randomization to see both kinds of responses."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { WhichCelebrityResponse } from '@/types';\nimport type { NextApiRequest, NextApiResponse } from 'next'\n\nexport default function handler(\n  req: NextApiRequest,\n  res: NextApiResponse<WhichCelebrityResponse>\n) {\n  if (req.method !== 'POST') {\n    console.warn(`Method ${req.method} not allowed for endpoint /which-celebrity!`);\n    return res.status(405).end();\n  }\n  const score = Math.random();\n  const response: WhichCelebrityResponse = score > 0.7\n    ? { name: 'John Doe', score, recognized: true }\n    : { recognized: false };\n\n  res.status(200).json(response);\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By specifying the generic type parameter on line 6, the ",(0,s.jsx)(n.code,{children:"json"})," method restricts the kind of data that we can return. We start by checking to see that the method is ",(0,s.jsx)(n.code,{children:"POST"}),", since this handler will need to receive the image data. Therefore, we start by checking to ensure we didn\u2019t incorrectly send a ",(0,s.jsx)(n.code,{children:"GET"})," request to ",(0,s.jsx)(n.code,{children:"/api/which-celebrity"}),". On lines 12-17, we create a pseudo-random score, and if it\u2019s greater than ",(0,s.jsx)(n.code,{children:"0.7"}),", we return the recognized response, otherwise, we return the unrecognized response."]}),"\n",(0,s.jsx)(n.p,{children:"Now that we have a mock API handler created, we can update our client side code to send the snapshot to the backend and receive a mock response. Once we have this set up, we\u2019ll be able to test our server side handler code directly by using our UI."}),"\n",(0,s.jsx)(n.h2,{id:"calling-our-api",children:"Calling our API"}),"\n",(0,s.jsx)(n.p,{children:"Since our React component is becoming a bit complex, let\u2019s create a separate module where we\u2019ll write an async function to call our API endpoint."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { WhichCelebrityResponse } from \"@/types\";\n\nexport async function postWhichCelebrity(snapshot: Blob): Promise<WhichCelebrityResponse> {\n  const formdata = new FormData();\n  formdata.set('snapshot', snapshot);\n\n  const request: RequestInit = {\n    method: 'POST',\n    body: formdata,\n  };\n\n  const resp = await fetch('/api/which-celebrity', request);\n  const json: WhichCelebrityResponse = await resp.json();\n  return json;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This function is pretty simple. It receives our snapshot as a ",(0,s.jsx)(n.code,{children:"Blob"})," object, which in ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Blob",children:"the web platform"}),", represents any kind of immutable raw binary data, and puts it into a ",(0,s.jsx)(n.code,{children:"FormData"})," object which will be used as the body of our request. We set the method to ",(0,s.jsx)(n.code,{children:"POST"})," and send it off to our API using the ",(0,s.jsx)(n.code,{children:"fetch"})," function. After ",(0,s.jsx)(n.code,{children:"await"}),"ing the response, we parse it as JSON, and cast it to our ",(0,s.jsx)(n.code,{children:"WhichCelebrityResponse"})," type so that the caller of this function can access the data."]}),"\n",(0,s.jsxs)(n.p,{children:["Let\u2019s add some state to the react component to store the blob and response, and update the ",(0,s.jsx)(n.code,{children:"takeSnapshot"})," handler to send a Blob from the canvas' buffer to our API handler:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// in our react component\nimport { WhichCelebrityResponse } from "@/types";\n\n// ...\n\nconst [response, setResponse] = useState<WhichCelebrityResponse>();\n\n// in takeSnapshot handler\ncanvas.toBlob(async (blob) => {\n  if (!blob) {\n    return null;\n  }\n  const resp = await postWhichCelebrity(blob);\n  setResponse(resp);\n  // console.log(resp);\n});\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After calling ",(0,s.jsx)(n.code,{children:"drawImage"}),", we call ",(0,s.jsx)(n.code,{children:"toBlob"}),", and pass it a callback which sends the blob to the ",(0,s.jsx)(n.code,{children:"postWhichCelebrity"})," function we wrote earlier. The response that comes back gets saved to the react component\u2019s state, so that it can re-render itself with the response. If we uncomment line 15, and click the snapshot button a few times, we should eventually see both kinds of responses."]}),"\n",(0,s.jsx)(r.A,{caption:"",src:"/img/nodejs-tutorial/nextjs2.jpeg"}),"\n",(0,s.jsx)(n.p,{children:"Now we\u2019d like to render the snapshot that we sent to our API, alongside the response. Let\u2019s create a new react component to encapsulate this as our Homepage component is already quite complex."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="components/CelebrityResult.tsx"',children:'// components/CelebrityResult.tsx\nimport Image from "next/image";\nimport { WhichCelebrityResponse } from \'@/types\';\nimport styles from \'styles/CelebrityResult.module.css\';\n\nexport interface CelebrityResultProps {\n  snapshot: string;\n  response?: WhichCelebrityResponse;\n}\n\nexport default function CelebrityResult(props: CelebrityResultProps): JSX.Element {\n  const thinking = !props.response;\n\n  let output = null;\n  if (props.response) {\n    output = !props.response.recognized\n      ? <p className={`${styles.output} ${styles.message}`}>Sorry, we have no idea who you are!</p>\n      : <p className={`${styles.output} ${styles.message}`}>There&apos;s a {(props.response.score * 100).toFixed(1)}% chance you&apos;re {props.response.name}!</p>;\n  }\n\n  return (\n    <div className={styles.result}>\n      <Image src={props.snapshot} alt="Preview" id="frame" width={800} height={600} />\n      { thinking && \n        <p className={`${styles.output} ${styles.thinking}`}>\ud83e\udde0</p>}\n      { output }\n    </div>\n  );\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-css",metastring:'title="styles/CelebrityResult.module.css"',children:"// styles/CelebrityResult.module.css\n.result {\n  position: relative;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.result img {\n  border: 1px solid #fff;\n}\n\n.output {\n  position: absolute;\n  font-size: 30px;\n  padding: 15px;\n  top: 235px;\n  left: 335px;\n  background: rgba(255, 255, 255, 0.4);\n  border: 1px solid #fff;\n}\n\n.thinking {\n  font-size: 65px;\n  border-radius: 65px;\n  animation-name: spin;\n  animation-duration: 1000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes spin {\n  0% {\n      transform:scale(100%);\n  }\n  50% {\n      transform:scale(200%);\n  }\n  100% {\n    transform:scale(100%);\n  }\n}\n\n.message {\n  top: 235px;\n  left: 0;\n  width: 800px;\n  text-align: center;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This component receives a snapshot as a ",(0,s.jsx)(n.code,{children:"string"})," and an optional API response object. If it receives no response, it will assume it\u2019s pending, and render a brain emoji with an animation to show the user that something is happening. Once the response comes back, it will tell the user whether there\u2019s a celebrity name or not, and what the score was as a percentage."]}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s now create some state to store the snapshot in the parent component, and convert the Blob to an object URL which can be rendered in an image."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// add the following state to the Homepage component\nconst [snapshot, setSnapshot] = useState<string>();\n\n// update the callback for toBlob()\nif (!blob) {\n  return null;\n}\n\nif (snapshot) {\n  URL.revokeObjectURL(snapshot);\n}\nsetSnapshot(URL.createObjectURL(blob));\n\nconst resp = await postWhichCelebrity(blob);\nsetResponse(resp);\n\n// update the render block to include the new component when the blob URL exists\n{ snapshot && <CelebrityResult snapshot={snapshot} response={response} />}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"calling-an-ai-model",children:"Calling an AI model"}),"\n",(0,s.jsxs)(n.p,{children:["With all the pieces in place, we are finally ready to add AI to our application! Let\u2019s add our PAT to our application using an environment variable. NextJS uses ",(0,s.jsx)(n.code,{children:"dotenv"})," to load ",(0,s.jsx)(n.code,{children:".env.local"})," files when they\u2019re present. When we deploy this application to a production server, we instead specify the PAT in our server (or if we\u2019re using something more sophisticated like Kubernetes, we might have a Helm template that specifies these secrets."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# substitute your real PAT in the .env.local file below. \nCLARIFAI_TOKEN=abc123\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Next, let\u2019s install the ",(0,s.jsx)(n.code,{children:"clarifai-nodejs-grpc"})," client which will let us call models, and ",(0,s.jsx)(n.code,{children:"busboy"})," which will let us parse the body of the request to access the image data in the request body. Since busboy doesn\u2019t have type definitions included, we\u2019ll have to install them separately from ",(0,s.jsx)(n.code,{children:"@types/busboy"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"yarn add clarifai-nodejs-grpc busboy @types/busboy\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/clarifai-nodejs-grpc",children:"here."})]}),"\n",(0,s.jsx)(n.h2,{id:"extracting-image-data-from-request",children:"Extracting Image Data from Request"}),"\n",(0,s.jsxs)(n.p,{children:["First, we need to tell next.js not to parse the body of our request, using a page config object, since we\u2019ll parse it using the ",(0,s.jsx)(n.code,{children:"busboy"})," library."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// pages/api/which-celebrity.ts\nexport const config = {\n  api: {\n    bodyParser: false,\n  }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"We\u2019ll create another utility function for extracting the binary data of the snapshot image."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="utils/getSnapshotFileFromRequestBody.ts"',children:"// utils/getSnapshotFileFromRequestBody.ts\nimport busboy from 'busboy';\nimport type { NextApiRequest } from 'next';\n\nexport async function getSnapshotFileFromRequestBody(req: NextApiRequest): Promise<Buffer> {\n  return new Promise((resolve, reject) => {\n    const bb = busboy({\n      headers: req.headers,\n    });\n    bb.on('file', (_name, stream, _info) => {\n      const dataParts: Buffer[] = [];\n      stream.on('data', (buf) => {\n        dataParts.push(buf);\n      });\n      stream.on('end', () => {\n        resolve(Buffer.concat(dataParts));\n      });\n      stream.on('error', (e) => {\n        reject(e);\n      })\n    });\n    req.pipe(bb);\n  });\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This function creates a new ",(0,s.jsx)(n.code,{children:"busboy"})," instance, and for each file it encounters in the request we pipe into it, it creates a new array to assemble all the parts of the file. Once it\u2019s done receiving these individual buffers, it concatenates them all into a single ",(0,s.jsx)(n.code,{children:"Buffer"})," that contains all of the image data."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, we\u2019ll create a separate module to contain all our Clarifai code. We\u2019ll create a static client object, and write a function that receives a ",(0,s.jsx)(n.code,{children:"Buffer"})," and returns a ",(0,s.jsx)(n.code,{children:"WhichCelebrityResponse"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="utils/predictWhichCelebrity.ts"',children:"// utils/predictWhichCelebrity.ts\nimport { WhichCelebrityResponse } from '@/types';\nimport { grpc } from 'clarifai-nodejs-grpc';\nimport { V2Client } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_grpc_pb';\nimport { PostModelOutputsRequest } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_pb';\nimport { Data, Input, UserAppIDSet, Image } from 'clarifai-nodejs-grpc/proto/clarifai/api/resources_pb';\n\nconst client = new V2Client('api.clarifai.com', grpc.ChannelCredentials.createSsl());\nconst MODEL_ID = 'celebrity-face-recognition';\n\nexport async function predictWhichCelebrity(file: Buffer): Promise<WhichCelebrityResponse> {\n  const req = new PostModelOutputsRequest();\n\n  const userAppIdSet = new UserAppIDSet();\n  userAppIdSet.setUserId('clarifai');\n  userAppIdSet.setAppId('main');\n\n  req.setUserAppId(userAppIdSet);\n  req.setModelId(MODEL_ID);\n\n  const input = fileToImage(file);\n  req.setInputsList([input]);\n\n  const metadata = new grpc.Metadata();\n  metadata.set('Authorization', `Key ${process.env.CLARIFAI_TOKEN}`);\n\n  return new Promise((resolve, reject) => {\n    client.postModelOutputs(req, metadata, (error, resp) => {\n      if (error) {\n        return reject(error);\n      }\n\n      const output = resp.getOutputsList()[0];\n\n      const concepts = output.getData()?.getConceptsList();\n      if (!concepts || concepts.length === 0) {\n        return resolve({ recognized: false });\n      }\n\n      const mostLikely = concepts[0];\n      if (mostLikely.getValue() > 0.7) {\n        const response: WhichCelebrityResponse = {\n          recognized: true,\n          name: concepts[0].getName(),\n          score: concepts[0].getValue(),\n        };\n        return resolve(response);\n      } else {\n        const response: WhichCelebrityResponse = {\n          recognized: false,\n        };\n        return resolve(response);\n      }\n    });\n  });\n}\n\nfunction fileToImage(file: Buffer): Input {\n  const input = new Input();\n  const data = new Data();\n  const img = new Image();\n  img.setBase64(file);\n  data.setImage(img);\n  input.setData(data);\n  return input;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This code is quite verbose, but also very straightforward. Our ",(0,s.jsx)(n.code,{children:"predictWhichCelebrity"})," function creates a new ",(0,s.jsx)(n.code,{children:"PostModelOutputsRequest"})," and we set the User ID and App ID and Model ID that we want to call. Remember, all of Clarifai\u2019s publicly available models live in the ",(0,s.jsx)(n.a,{href:"https://clarifai.com/clarifai/main",children:"clarifai/main"})," app. Next, we take the ",(0,s.jsx)(n.code,{children:"Buffer"})," parameter and package it into an ",(0,s.jsx)(n.code,{children:"Input"})," object which contains an Image data object. Finally, we create a ",(0,s.jsx)(n.code,{children:"grpc.Metadata"})," for passing our authentication information, before sending the request to Clarifai. Once the response comes back, we check for errors, and ensure that we got some ",(0,s.jsx)(n.code,{children:"Concept"})," back. In the Celebrity model, each \u201cconcept\u201d is a celebrity name, and the first concept is always the one with the highest value. If that concept\u2019s value is greater than ",(0,s.jsx)(n.code,{children:"0.7"})," we return the value and name of that celebrity, otherwise, we return ",(0,s.jsx)(n.code,{children:"false"})," for the ",(0,s.jsx)(n.code,{children:"recognized"})," property."]}),"\n",(0,s.jsx)(n.p,{children:"With these two functions, we can replace the mock implementation of our API handler, by simply calling these two functions."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="pages/api/which-celebrity.ts"',children:"// pages/api/which-celebrity.ts\nconst file = await getSnapshotFileFromRequestBody(req);\nconst resp = await predictWhichCelebrity(file);\n\nres.status(200).json(resp);\n"})}),"\n",(0,s.jsx)(r.A,{caption:"",src:"/img/nodejs-tutorial/final-result.jpeg"}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["In this tutorial, we went from zero to AI hero using Clarifai\u2019s world-class models. We created a new web application with Next.js, learned how to access a user\u2019s webcam, and call an AI model to see if we look like any celebrities. For the full project, see the ",(0,s.jsx)(n.a,{href:"https://github.com/Clarifai/which-celebrity-app",children:"Github repo"}),", or try it out live on Vercel, and if you encountered any trouble while following along, feel free to open an issue on the repo so we can fix it."]}),"\n",(0,s.jsx)(n.p,{children:"We look forward to seeing what our community builds with Clarifai!"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},47242:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(86025),a=t(74848);function r(e){let{src:n,caption:t}=e;return(0,a.jsxs)("figure",{style:{border:"1px dashed rgba(0, 0, 0, .1)",padding:20,borderRadius:"15px"},children:[(0,a.jsx)("img",{src:(0,s.Ay)(n),alt:t}),(0,a.jsx)("hr",{style:{margin:"5px",backgroundColor:"rgba(0, 0, 0, .2)"}}),(0,a.jsx)("figcaption",{style:{marginTop:"0px"},children:`${t}`})]})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},r=s.createContext(a);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);