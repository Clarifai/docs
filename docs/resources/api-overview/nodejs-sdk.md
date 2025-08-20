---
description: Discover the power of the Node.js SDK
sidebar_position: 2
---

# Node.js SDK

**Discover the power of the Node.js SDK**
<hr />

[The Clarifai Node.js SDK](https://github.com/Clarifai/clarifai-nodejs) is your gateway for effortlessly integrating AI capabilities into your JavaScript and Node.js applications. Built using TypeScript, this SDK empowers you to easily interact with the Clarifai API using an intuitive and object-oriented approach. 

With TypeScript's strong typing and modern features, you can automate your AI workflows with minimal code. It’s the ideal tool to bring AI-powered features to your Node.js projects.

## Installation

You can install the latest stable version of the Clarifai Node.js SDK by running:

```sh
npm install clarifai-nodejs
```

## Authentication

Clarifai uses [Personal Access Tokens](https://docs.clarifai.com/control/authentication/pat) (PATs) to authenticate API requests. You can obtain one from your personal settings page by navigating to the **Security** section.

You can export your PAT as an environment variable. Then, import and initialize the API client.

Here is how to set your PAT as an environment variable through the terminal:

```cmd
export CLARIFAI_PAT=YOUR_PAT_HERE
```

Alternatively, use [dotenv](https://www.npmjs.com/package/dotenv) to load environment variables from a `.env` file. This is useful for managing secrets in Node.js applications.

## How to Use Node.js SDK in Next.js Server Components

To integrate the Clarifai Node.js SDK in a Next.js App Directory project with server components, you need to explicitly add the [clarifai-nodejs-grpc](https://github.com/Clarifai/clarifai-nodejs-grpc) package to the [serverComponentsExternalPackages](https://nextjs.org/docs/app/api-reference/next-config-js/serverComponentsExternalPackages) configuration in your `next.config.js` file.

This ensures that Next.js properly handles the gRPC dependencies required by the Clarifai SDK, allowing you to use AI-powered inference in your server-side components.

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['clarifai-nodejs-grpc'],
  },
}

module.exports = nextConfig
```

## Minimum System Requirements

The Clarifai Node.js package is lightweight and designed to run on any modern system.

You’ll need Node.js version 18 or higher to run it.

> **Note**: The package supports all major operating systems (Windows, macOS — including Intel and Apple Silicon — and Linux) as long as Node.js 18+ is installed.

<!--### Using Models

Using the celebrity face recognition model to predict the celebrity in a given picture. For list of all available models visit [clarifai models page](https://clarifai.com/explore/models).

```ts
import { Input, Model } from "clarifai-nodejs";

const input = Input.getInputFromUrl({
  inputId: "test-image",
  imageUrl:
    "https://samples.clarifai.com/celebrity.jpeg",
});

const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!
  },
  modelId: "celebrity-face-recognition",
});

model
  .predict({
    inputs: [input],
  })
  .then((response) => {
    const result = response?.[0].data?.conceptsList[0].name ?? "unrecognized";
    console.log(result);
  })
  .catch(console.error);
```

### Using Workflows

Using a custom workflow built on [clarifai.com](https://docs.clarifai.com/portal-guide/workflows/) to analyze sentiment of a given image. For list of all available workflows visit [clarifai workflows page](https://clarifai.com/explore/workflows)

```ts
import { Input, Workflow } from "clarifai-nodejs";

const input = Input.getInputFromUrl({
  inputId: "test-image",
  imageUrl:
    "https://samples.clarifai.com/celebrity.jpeg",
});

const workflow = new Workflow({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!
  },
  workflowId: "workflow-238a93",
});

workflow
  .predict({
    inputs: [input],
  })
  .then((response) => {
    const result =
      response.resultsList[0].outputsList[0].data?.regionsList[0].data
        ?.conceptsList[0].name ?? "unrecognized";
    console.log(result);
  })
  .catch(console.error);
```

### Listing available apps in an user account

On Clarifai, apps act as a central repository for models, datasets, inputs and other resources and information. Checkout how to create apps on [clarifai portal](https://docs.clarifai.com/clarifai-basics/applications/create-an-application/).

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});

const list = await user
  .listApps({
    pageNo: 1,
    perPage: 20,
    params: {
      sortAscending: true,
    },
  })
  .next();

const apps = list.value;
console.log(apps);
```

For full usage details, checkout our [API Reference docs](https://docs.clarifai.com/nodejs-sdk/installation-guide/modules)

--> 