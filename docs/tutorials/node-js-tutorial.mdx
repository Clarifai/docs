---
description: How to Add AI to a Node.js web app
sidebar_position: 2
---

import Figure from '@site/src/components/figure'

# Add AI to a Node.js Web App

**A step-by-step guide by Alexandros Katechis**
<hr />

Clarifai makes it easy to train and deploy a model at scale in production, without having to think about provisioning GPUs or moving data around for training. In this blog post, we’ll walk through how to bootstrap a new Javascript/Typescript web app, capture a photo of ourselves, and then use Clarifai’s celebrity model to tell us which celebrity the user looks like.

There are many different web frameworks you could use ([express](https://expressjs.com/), [koa](https://koajs.com/), [next](https://nextjs.org/), [remix](https://remix.run/)), and just as many UI libraries ([react](https://reactjs.org/), [angular](https://angular.io/), [vue](https://vuejs.org/), [svelte](https://svelte.dev/)). In this blog post, we’re going to go with next JS, which is the framework we use at Clarifai to build our web applications, but you could just as easily follow along with any other node.js framework you prefer, substituting your framework’s conventions as we go along.

The final version of this project is available on Github, so if you run into any issues, feel free to clone the project repo, or open an issue. With that out of the way, let’s get started!

## Background & Project Setup

We’ll start with bootstrapping a new node.js web app. We’re going to assume you already have node.js and git installed, if not, pause here and get those installed. Now that we’re ready, start by running create-next-app to bootstrap a new project.

```
npx create-next-app
```

The CLI will ask us a few questions about what technology we want to use, we’ll use the defaults, which will set us up with Typescript and ESLint in addition to a default homepage, a server for creating custom API handlers to run code on our server, and everything needed to build and deploy our app.

Try it out with yarn dev (or npm, if you prefer). You should see the following in your terminal.

```
> yarn dev
yarn run v1.22.15
$ next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 2.3s (165 modules)
wait  - compiling / (client and server)...
```

Opening [http://localhost:3000](http://localhost:3000) in your browser, should render the following page.

<Figure caption="Default Next.js app homepage" src="/img/nodejs-tutorial/nextjs-homepage.jpeg" />

Great! Let’s get started building our AI-powered celebrity app.

## Camera Preview and Taking a Photo

Open `pages/index.tsx` where you will find all the React code for rendering the home page of our new app. You should see a bunch of markup for rendering next.js promotional content. Let’s start by deleting it, and inserting some basic markup with a title, some instructions on how to use the app, and a `<video>` element that we’ll use to render a preview of our webcam.

```html title="pages/index.tsx"
<>
  <Head>
    <title>Which Celebrity Am I?</title>
    <meta name="description" content="Use the power of AI to figure out which celebrity you look like!" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <main className={styles.main}>
    <div className={styles.description}>
      <h1>Which Celebrity Do you look like?</h1>
      <a onClick={beginCapture}>Click to take a photo of yourself!</a>
    </div>
    <video className={styles.video} ref={cameraPreviewEl} />
  </main>
</>
```

And the following CSS in `pages/index.tsx` will help us add some basic styling

```css title="pages/index.tsx"
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
  min-height: 100vh;
}

.description {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.description h1 {
  font-size: 82px;
  margin-bottom: 30px;
}

.description a {
  font-size: 30px;
  cursor: pointer;
  text-decoration: underline;
}

.video {
  width: 800px;
  height: 600px;
  border: 1px dashed #fff;
}
```
Finally, let’s add an element ref and a click handler to request the user’s permission to open their webcam, and render a preview in the page.

```js
const cameraPreviewEl = useRef<HTMLVideoElement>(null);

const beginCapture = useCallback(
  async () => {
    if (!cameraPreviewEl.current) {
      return;
    }
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    cameraPreviewEl.current.srcObject = stream;
    cameraPreviewEl.current.play();
  },
  [cameraPreviewEl]
);
```

What this callback does is first, make sure we have a reference to the video element. Line 8 requests access to a media device that can produce a video stream, represented by a `MediaStream` object. Line 9 connects the video element to the media stream, and line 9 begins playback.

Once you save everything, the development server will automatically re-render the react components in your browser, without even refreshing the page, and the result should be something like the following.

<Figure caption="Our Celebrity App’s initial render result" src="/img/nodejs-tutorial/celeb-initial.jpeg" />

After clicking the link to open the user’s webcam, and granting permission, we should see the following (your face may be different than mine).

<Figure caption="Our Celebrity App’s initial render result" src="/img/nodejs-tutorial/celeb-result.jpeg" />

Great! Now that we have a webcam stream, we’ll add a button that the user can click in order to take a snapshot. We only want to show the button when the camera is capturing, so let’s add a bit of state to our component to represent that.

```js
const [capturing, setCapturing] = useState(false);
```

Next, let’s update our click handler to set the flag to true once the video element has begun playback from the camera.

```js
setCapturing(true);
```

Now that the flag is correctly being updated, let’s add the conditional markup to render the button with some styling associated with it. For brevity, we’ll just use an emoji of a camera with a flash, but you can use whatever icon component you may have handy.

```js
/* in our component */
{capturing &&
  (
    <button className={styles.snapshot}>
      📸
    </button>
  )}
```
```css
/* in our css */
.snapshot {
  font-size: 65px;
  background: none;
  padding: 10px;
  border: 1px solid #fff;
  cursor: pointer;
}
```

Next, let’s attach a click handler to the button to take a snapshot by drawing to an off-screen canvas element.

```js
const takeSnapshot = useCallback(
  () => {
    if (!cameraPreviewEl.current) {
      return;
    }
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.drawImage(cameraPreviewEl.current, 0, 0, canvas.width, canvas.height);
    // const dataUrl = canvas.toDataURL('image/jpeg');
    // document.getElementById('frame').src = dataUrl;
    // console.log(dataUrl);
  },
  []
);
```
This code should be pretty straight forward. We start by ensuring we have a reference to the video element, and creating a `canvas` element in memory. We set it’s dimensions to `800x600` which will match the `<video>` preview element we created earlier. To draw to a canvas element, we need to get a `CanvasRenderingContext2D` object, which we acquire on line 10. If that succeeds, line 15 renders the video element’s video track (don’t forget, it also has an audio track which we don’t care about for this app).

Lines 16-18 are commented out, but if you want to preview what the snapshot looks like, you could uncomment them (and also add an `<img id="frame" width={800} height={600} />` element to the markup), to see what your camera captured when you clicked the snapshot button.

For now, we’ll leave the client side code as is, and turn our attention to the server side code.

## Create a Personal Access Token

Refer to Clarifai’s docs site for [instructions on creating a personal access token](https://docs.clarifai.com/clarifai-basics/authentication/personal-access-tokens). A PAT is similar to an API key, insomuch that it can be used in the same way as an App key. The main advantage is that a PAT is allowed to access resources in all of our apps, as well as the clarifai/main app, which is where the Celebrity model we’re interested in exists.

:::caution

Your PAT can be used to call the Clarifai API on your behalf. For this reason, you should never include a PAT in your client-side code, like react components. Any user with dev tools open would be able to steal it and call the Clarifai API on your behalf.
x
For this reason, we’ll introduce an API handler that will call the Clarifai model from our server, and simply send a response to the client containing the result data we’re interested in.
:::

## Create an API Handler

You may have noticed earlier, that all the react code we were working with, was in `pages/index.tsx` and it rendered on the path `/`. If we were to create a react component at `pages/hello.tsx` it would render on the path `/hello`. This is [NextJS's convention of filesystem-based routing](https://nextjs.org/docs/basic-features/pages). NextJS has a similar convention for creating [API handlers](https://nextjs.org/docs/api-routes/introduction), under the `pages/api` directory. We’re going to create our handler under `pages/api/which-celebrity.ts` which means we’ll be able to call it by making a request to `/api/which-celebrity`. We already have a sample API handler in `hello.ts`, thanks to `create-next-app` so we’ll just rename it to `which-celebrity` and we’ll be good to go.

<Figure caption="NextJS is even nice enough to tell us we look like “John Doe”" src="/img/nodejs-tutorial/nextjs.jpeg" />

Next, let’s create a typescript declaration file where we’ll define an interface for our API’s response. We’ll create `types.ts` in our project’s root, and insert the following type declaration

```js
/**
 * If Clarifai can match us with a celebrity, return the name and score.
 * Otherwise, just return `false`.
 */
type WhichCelebrityResponse = {
  recognized: typeof true;
  name: string;
  score: number;
} | {
  recognized: typeof false;
}
```

In a more complex project, you might even want to organize types in a more sophisticated way. In the case of this API response, the Clarifai model either recognizes us or not. If it does recognize us, we’ll return a name and score alongside the flag. Now we can update our handler’s response type to match this type, and we’ll add some randomization to see both kinds of responses.

```js
import { WhichCelebrityResponse } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WhichCelebrityResponse>
) {
  if (req.method !== 'POST') {
    console.warn(`Method ${req.method} not allowed for endpoint /which-celebrity!`);
    return res.status(405).end();
  }
  const score = Math.random();
  const response: WhichCelebrityResponse = score > 0.7
    ? { name: 'John Doe', score, recognized: true }
    : { recognized: false };

  res.status(200).json(response);
}
```
By specifying the generic type parameter on line 6, the `json` method restricts the kind of data that we can return. We start by checking to see that the method is `POST`, since this handler will need to receive the image data. Therefore, we start by checking to ensure we didn’t incorrectly send a `GET` request to `/api/which-celebrity`. On lines 12-17, we create a pseudo-random score, and if it’s greater than `0.7`, we return the recognized response, otherwise, we return the unrecognized response.

Now that we have a mock API handler created, we can update our client side code to send the snapshot to the backend and receive a mock response. Once we have this set up, we’ll be able to test our server side handler code directly by using our UI.

## Calling our API

Since our React component is becoming a bit complex, let’s create a separate module where we’ll write an async function to call our API endpoint.

```ts
import { WhichCelebrityResponse } from "@/types";

export async function postWhichCelebrity(snapshot: Blob): Promise<WhichCelebrityResponse> {
  const formdata = new FormData();
  formdata.set('snapshot', snapshot);

  const request: RequestInit = {
    method: 'POST',
    body: formdata,
  };

  const resp = await fetch('/api/which-celebrity', request);
  const json: WhichCelebrityResponse = await resp.json();
  return json;
}
```

This function is pretty simple. It receives our snapshot as a `Blob` object, which in [the web platform](https://developer.mozilla.org/en-US/docs/Web/API/Blob), represents any kind of immutable raw binary data, and puts it into a `FormData` object which will be used as the body of our request. We set the method to `POST` and send it off to our API using the `fetch` function. After `await`ing the response, we parse it as JSON, and cast it to our `WhichCelebrityResponse` type so that the caller of this function can access the data.

Let’s add some state to the react component to store the blob and response, and update the `takeSnapshot` handler to send a Blob from the canvas' buffer to our API handler:

```ts
// in our react component
import { WhichCelebrityResponse } from "@/types";

// ...

const [response, setResponse] = useState<WhichCelebrityResponse>();

// in takeSnapshot handler
canvas.toBlob(async (blob) => {
  if (!blob) {
    return null;
  }
  const resp = await postWhichCelebrity(blob);
  setResponse(resp);
  // console.log(resp);
});
```
After calling `drawImage`, we call `toBlob`, and pass it a callback which sends the blob to the `postWhichCelebrity` function we wrote earlier. The response that comes back gets saved to the react component’s state, so that it can re-render itself with the response. If we uncomment line 15, and click the snapshot button a few times, we should eventually see both kinds of responses.

<Figure caption="" src="/img/nodejs-tutorial/nextjs2.jpeg" />

Now we’d like to render the snapshot that we sent to our API, alongside the response. Let’s create a new react component to encapsulate this as our Homepage component is already quite complex.

```ts title="components/CelebrityResult.tsx"
// components/CelebrityResult.tsx
import Image from "next/image";
import { WhichCelebrityResponse } from '@/types';
import styles from 'styles/CelebrityResult.module.css';

export interface CelebrityResultProps {
  snapshot: string;
  response?: WhichCelebrityResponse;
}

export default function CelebrityResult(props: CelebrityResultProps): JSX.Element {
  const thinking = !props.response;

  let output = null;
  if (props.response) {
    output = !props.response.recognized
      ? <p className={`${styles.output} ${styles.message}`}>Sorry, we have no idea who you are!</p>
      : <p className={`${styles.output} ${styles.message}`}>There&apos;s a {(props.response.score * 100).toFixed(1)}% chance you&apos;re {props.response.name}!</p>;
  }

  return (
    <div className={styles.result}>
      <Image src={props.snapshot} alt="Preview" id="frame" width={800} height={600} />
      { thinking && 
        <p className={`${styles.output} ${styles.thinking}`}>🧠</p>}
      { output }
    </div>
  );
}
```
```css title="styles/CelebrityResult.module.css"
// styles/CelebrityResult.module.css
.result {
  position: relative;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

.result img {
  border: 1px solid #fff;
}

.output {
  position: absolute;
  font-size: 30px;
  padding: 15px;
  top: 235px;
  left: 335px;
  background: rgba(255, 255, 255, 0.4);
  border: 1px solid #fff;
}

.thinking {
  font-size: 65px;
  border-radius: 65px;
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  0% {
      transform:scale(100%);
  }
  50% {
      transform:scale(200%);
  }
  100% {
    transform:scale(100%);
  }
}

.message {
  top: 235px;
  left: 0;
  width: 800px;
  text-align: center;
}
```

This component receives a snapshot as a `string` and an optional API response object. If it receives no response, it will assume it’s pending, and render a brain emoji with an animation to show the user that something is happening. Once the response comes back, it will tell the user whether there’s a celebrity name or not, and what the score was as a percentage.

Let’s now create some state to store the snapshot in the parent component, and convert the Blob to an object URL which can be rendered in an image.

```ts
// add the following state to the Homepage component
const [snapshot, setSnapshot] = useState<string>();

// update the callback for toBlob()
if (!blob) {
  return null;
}

if (snapshot) {
  URL.revokeObjectURL(snapshot);
}
setSnapshot(URL.createObjectURL(blob));

const resp = await postWhichCelebrity(blob);
setResponse(resp);

// update the render block to include the new component when the blob URL exists
{ snapshot && <CelebrityResult snapshot={snapshot} response={response} />}
```

## Calling an AI model

With all the pieces in place, we are finally ready to add AI to our application! Let’s add our PAT to our application using an environment variable. NextJS uses `dotenv` to load `.env.local` files when they’re present. When we deploy this application to a production server, we instead specify the PAT in our server (or if we’re using something more sophisticated like Kubernetes, we might have a Helm template that specifies these secrets.

```
# substitute your real PAT in the .env.local file below. 
CLARIFAI_TOKEN=abc123
```

Next, let’s install the `clarifai-nodejs-grpc` client which will let us call models, and `busboy` which will let us parse the body of the request to access the image data in the request body. Since busboy doesn’t have type definitions included, we’ll have to install them separately from `@types/busboy`.

```
yarn add clarifai-nodejs-grpc busboy @types/busboy
```

For more information, see [here.](https://www.npmjs.com/package/clarifai-nodejs-grpc)

## Extracting Image Data from Request

First, we need to tell next.js not to parse the body of our request, using a page config object, since we’ll parse it using the `busboy` library.

```ts
// pages/api/which-celebrity.ts
export const config = {
  api: {
    bodyParser: false,
  }
};
```

We’ll create another utility function for extracting the binary data of the snapshot image.

```ts title="utils/getSnapshotFileFromRequestBody.ts"
// utils/getSnapshotFileFromRequestBody.ts
import busboy from 'busboy';
import type { NextApiRequest } from 'next';

export async function getSnapshotFileFromRequestBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const bb = busboy({
      headers: req.headers,
    });
    bb.on('file', (_name, stream, _info) => {
      const dataParts: Buffer[] = [];
      stream.on('data', (buf) => {
        dataParts.push(buf);
      });
      stream.on('end', () => {
        resolve(Buffer.concat(dataParts));
      });
      stream.on('error', (e) => {
        reject(e);
      })
    });
    req.pipe(bb);
  });
}
```

This function creates a new `busboy` instance, and for each file it encounters in the request we pipe into it, it creates a new array to assemble all the parts of the file. Once it’s done receiving these individual buffers, it concatenates them all into a single `Buffer` that contains all of the image data.

Next, we’ll create a separate module to contain all our Clarifai code. We’ll create a static client object, and write a function that receives a `Buffer` and returns a `WhichCelebrityResponse`.

```ts title="utils/predictWhichCelebrity.ts"
// utils/predictWhichCelebrity.ts
import { WhichCelebrityResponse } from '@/types';
import { grpc } from 'clarifai-nodejs-grpc';
import { V2Client } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_grpc_pb';
import { PostModelOutputsRequest } from 'clarifai-nodejs-grpc/proto/clarifai/api/service_pb';
import { Data, Input, UserAppIDSet, Image } from 'clarifai-nodejs-grpc/proto/clarifai/api/resources_pb';

const client = new V2Client('api.clarifai.com', grpc.ChannelCredentials.createSsl());
const MODEL_ID = 'celebrity-face-recognition';

export async function predictWhichCelebrity(file: Buffer): Promise<WhichCelebrityResponse> {
  const req = new PostModelOutputsRequest();

  const userAppIdSet = new UserAppIDSet();
  userAppIdSet.setUserId('clarifai');
  userAppIdSet.setAppId('main');

  req.setUserAppId(userAppIdSet);
  req.setModelId(MODEL_ID);

  const input = fileToImage(file);
  req.setInputsList([input]);

  const metadata = new grpc.Metadata();
  metadata.set('Authorization', `Key ${process.env.CLARIFAI_TOKEN}`);

  return new Promise((resolve, reject) => {
    client.postModelOutputs(req, metadata, (error, resp) => {
      if (error) {
        return reject(error);
      }

      const output = resp.getOutputsList()[0];

      const concepts = output.getData()?.getConceptsList();
      if (!concepts || concepts.length === 0) {
        return resolve({ recognized: false });
      }

      const mostLikely = concepts[0];
      if (mostLikely.getValue() > 0.7) {
        const response: WhichCelebrityResponse = {
          recognized: true,
          name: concepts[0].getName(),
          score: concepts[0].getValue(),
        };
        return resolve(response);
      } else {
        const response: WhichCelebrityResponse = {
          recognized: false,
        };
        return resolve(response);
      }
    });
  });
}

function fileToImage(file: Buffer): Input {
  const input = new Input();
  const data = new Data();
  const img = new Image();
  img.setBase64(file);
  data.setImage(img);
  input.setData(data);
  return input;
}
```

This code is quite verbose, but also very straightforward. Our `predictWhichCelebrity` function creates a new `PostModelOutputsRequest` and we set the User ID and App ID and Model ID that we want to call. Remember, all of Clarifai’s publicly available models live in the [clarifai/main](https://clarifai.com/clarifai/main) app. Next, we take the `Buffer` parameter and package it into an `Input` object which contains an Image data object. Finally, we create a `grpc.Metadata` for passing our authentication information, before sending the request to Clarifai. Once the response comes back, we check for errors, and ensure that we got some `Concept` back. In the Celebrity model, each “concept” is a celebrity name, and the first concept is always the one with the highest value. If that concept’s value is greater than `0.7` we return the value and name of that celebrity, otherwise, we return `false` for the `recognized` property.

With these two functions, we can replace the mock implementation of our API handler, by simply calling these two functions.

```ts title="pages/api/which-celebrity.ts"
// pages/api/which-celebrity.ts
const file = await getSnapshotFileFromRequestBody(req);
const resp = await predictWhichCelebrity(file);

res.status(200).json(resp);
```

<Figure caption="" src="/img/nodejs-tutorial/final-result.jpeg" />

## Summary

In this tutorial, we went from zero to AI hero using Clarifai’s world-class models. We created a new web application with Next.js, learned how to access a user’s webcam, and call an AI model to see if we look like any celebrities. For the full project, see the [Github repo](https://github.com/Clarifai/which-celebrity-app), or try it out live on Vercel, and if you encountered any trouble while following along, feel free to open an issue on the repo so we can fix it.

We look forward to seeing what our community builds with Clarifai!


