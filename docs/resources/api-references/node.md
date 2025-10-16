---
description: Clarifai Node.js API Reference
sidebar_position: 3
toc_max_heading_level: 4
---

# Node.js API Reference

**Clarifai Node.js API Reference**
<hr />

<!--

We are using Typedoc version 0.25.12 to generate docs in single page

Clone: https://github.com/Clarifai/clarifai-nodejs

Run npm install

Run npm run generate-docs

The docs will be created inside the /docs directory of the project

Then, merge them into a single page as appropriate
-->

This is the API Reference documentation extracted from the [source code](https://github.com/Clarifai/clarifai-nodejs/tree/main/src/client).

## App

App is a class that provides access to Clarifai API endpoints related to App information.

This is its hierarchy:

- `Lister`

  ↳ **`App`**

### Constructor

• **new App**(`config`): `App`

Initializes an App object.

**Example**

```ts
import { App } from "clarifai-nodejs";

export const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`AppConfig`](#appconfig) | The configuration object for the App. |

**Returns**

`App`

**Overrides**

Lister.constructor

**Defined in**

[src/client/app.ts:102](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L102)

### Properties

#### appInfo

• `Private` **appInfo**: `App`

**Defined in**

[src/client/app.ts:86](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L86)


#### info

• **info**: `AsObject`

**Defined in**

[src/client/app.ts:87](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L87)

### Methods

#### createDataset

▸ **createDataset**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a dataset for the app.

**Example**

```ts
import { Input, App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const dataset = await app.createDataset({
  datasetId: "dog-image-collection",
});

// Dataset is created, now let's build an image input that uses the new dataset id
const inputProto = Input.getInputFromUrl({
  datasetId: dataset.id,
  inputId: "dog-tiff",
  imageUrl: "https://samples.clarifai.com/dog.tiff",
  labels: ["dog"],
  geoInfo: {
    latitude: 40,
    longitude: -30,
  },
  metadata: { Breed: "Saint Bernard" },
});

const input = new Input({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

// upload the input by using instance of the Input class
// this input will be stored under the newly created dataset
const inputJobId = await input.uploadInputs({
  inputs: [inputProto],
});

console.log(inputJobId); // job id of the input upload
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `datasetId` | `string` |
| › `params?` | [`CreateDatasetParam`](#createdatasetparam) |

**Returns**

`Promise`\<`AsObject`\>

A Dataset object for the specified dataset ID.

**Defined in**

[src/client/app.ts:429](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L429)



#### createModel

▸ **createModel**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a model for the app.

**Example**

```ts
import { Model, App } from "clarifai-nodejs";
import {
  ModelVersion,
  OutputInfo,
} from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb.js";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

// Creating a new image crop model
const newModelObject = await app.createModel({
  modelId: "margin-100-image-cropper",
  params: {
    modelTypeId: "image-crop",
    description: "Custom crop model with 100px margin",
  },
});

// Initializing the newly created model
const model = new Model({
  modelId: newModelObject.id,
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

// Creating a GRPC compatible outputInfo object with custom margin parameters
const outputInfo = new OutputInfo().setParams(
  Struct.fromJavaScript({ margin: 1.5 }),
);
// GRPC compatible ModelVersion object with previously created output info config
const modelVersion = new ModelVersion()
  .setDescription("Setting output info margin parameters to 1.5")
  .setOutputInfo(outputInfo);

// Creating a new version of the model with previously created output info config
const modelObjectWithVersion = await model.createVersion(modelVersion);

console.log(modelObjectWithVersion);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modelId` | `string` |
| › `params?` | [`CreateModelParam`](#createmodelparam) |

**Returns**

`Promise`\<`AsObject`\>

A Model object for the specified model ID.

**Defined in**

[src/client/app.ts:473](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L473)


#### createModule

▸ **createModule**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a module for the app.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const module = await app.createModule({
  moduleId: "new-module",
  description: "New module",
});

console.log(module);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `moduleId` | `string` |

**Returns**

`Promise`\<`AsObject`\>

A Module object for the specified module ID.

**Defined in**

[src/client/app.ts:514](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L514)


#### createWorkflow

▸ **createWorkflow**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a workflow for the app.

**Example**

```ts
import { App } from "clarifai-nodejs";
import path from "path";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const workflowFile = path.resolve(__dirname, "workflow/moderation.yml");
const workflow = await app.createWorkflow({ configFilePath: workflowFile });
console.log(workflow);

/**
 * Workflow config file in the path `workflow/moderation.yml`:
 */
/*
workflow:
  id: test-mbmn
  nodes:
    - id: detector
      model:
          modelId: face-detection
          modelVersionId: 45fb9a671625463fa646c3523a3087d5
    - id: cropper
      model:
          modelId: margin-110-image-crop
          modelVersionId: b9987421b40a46649566826ef9325303
      nodeInputs:
        - nodeId: detector
    - id: face-sentiment
      model:
          modelId: face-sentiment-recognition
          modelVersionId: a5d7776f0c064a41b48c3ce039049f65
      nodeInputs:
        - nodeId: cropper
    - id: moderation
      model:
          modelId: moderation-recognition
          modelVersionId: 7cde8e92896340b0998b8260d47f1502
*/
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `configFilePath` | `string` | `undefined` |
| › `display?` | `boolean` | `true` |
| › `generateNewId?` | `boolean` | `false` |

**Returns**

`Promise`\<`AsObject`\>

A Workflow object for the specified workflow config.

**Defined in**

[src/client/app.ts:552](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L552)


#### dataset

▸ **dataset**(`dataset_id`): `Promise`\<`undefined` \| `AsObject`\>

Returns a Dataset object for the existing dataset ID.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const dataset = await app.dataset({
  datasetId: "dataset-id",
});
console.log(dataset);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `dataset_id` | `Object` | The dataset ID for the dataset to interact with. |
| `dataset_id.datasetId` | `string` | - |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

A Dataset object for the existing dataset ID.

**Defined in**

[src/client/app.ts:771](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L771)



#### deleteDataset

▸ **deleteDataset**(`datasetId`): `Promise`\<`void`\>

Deletes a dataset for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

await app.deleteDataset({ datasetId: "dataset-id" });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `datasetId` | `Object` | The dataset ID for the app to delete. |
| `datasetId.datasetId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/app.ts:800](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L800)


#### deleteModel

▸ **deleteModel**(`modelId`): `Promise`\<`void`\>

Deletes a model for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

await app.deleteModel({ modelId: "modelId" });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelId` | `Object` | The model ID for the model to delete. |
| `modelId.modelId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/app.ts:825](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L825)


#### deleteModule

▸ **deleteModule**(`moduleId`): `Promise`\<`void`\>

Deletes a module for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

await app.deleteModule({ moduleId: "moduleId" });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleId` | `Object` | The module ID for the module to delete. |
| `moduleId.moduleId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/app.ts:875](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L875)


#### deleteWorkflow

▸ **deleteWorkflow**(`workflowId`): `Promise`\<`void`\>

Deletes a workflow for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

await app.deleteWorkflow({ workflowId: "workflowId" });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowId` | `Object` | The workflow ID for the workflow to delete. |
| `workflowId.workflowId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/app.ts:850](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L850)


#### listConcepts

▸ **listConcepts**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the concepts for the app.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listConcepts().next();
const concepts = list.value;
console.log(concepts);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

Concepts in the app.

**Defined in**

[src/client/app.ts:391](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L391)


#### listDataSets

▸ **listDataSets**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the datasets for the app.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listDataSets().next();
const datasets = list.value;
console.log(datasets);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListDatasetsParam`](#listdatasetsparam) |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

Dataset - Dataset objects for the datasets in the app.

**Notes**

Defaults to 16 per page

**Defined in**

[src/client/app.ts:136](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L136)


#### listInstalledModuleVersions

▸ **listInstalledModuleVersions**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all installed module versions in the app.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listInstalledModuleVersions().next();
const moduleVersions = list.value;
console.log(moduleVersions);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListInstalledModuleVersionsParam`](#listinstalledmoduleversionsparam) |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

Module - Module objects for the installed module versions in the app.

**Notes**

Defaults to 16 per page

**Defined in**

[src/client/app.ts:342](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L342)



#### listModels

▸ **listModels**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the available models for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listModels().next();
const models = list.value;
console.log(models);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `onlyInApp?` | `boolean` | `true` |
| › `pageNo?` | `number` | `undefined` |
| › `params?` | [`ListModelsParam`](#listmodelsparam) | `{}` |
| › `perPage?` | `number` | `undefined` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Notes**

Defaults to 16 per page

**Defined in**

[src/client/app.ts:180](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L180)



#### listModules

▸ **listModules**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the available modules for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listModules().next();
const modules = list.value;
console.log(modules);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onlyInApp?` | `boolean` |
| › `pageNo?` | `number` |
| › `params?` | [`ListModulesParam`](#listmodulesparam) |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

Module - Module objects for the modules in the app.

**Notes**

Defaults to 16 per page

**Defined in**

[src/client/app.ts:291](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L291)


#### listTrainableModelTypes

▸ **listTrainableModelTypes**(): `string`[]

**Returns**

`string`[]

**Defined in**

[src/client/app.ts:415](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L415)


#### listWorkflows

▸ **listWorkflows**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the available workflows for the user.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const list = await app.listWorkflows().next();
const workflows = list.value;
console.log(workflows);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `onlyInApp?` | `boolean` | `true` |
| › `pageNo?` | `number` | `undefined` |
| › `params?` | [`ListWorkflowsParam`](#listworkflowsparam) | `{}` |
| › `perPage?` | `number` | `undefined` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

Workflow - Workflow objects for the workflows in the app.

**Notes**

Defaults to 16 per page

**Defined in**

[src/client/app.ts:238](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L238)


#### model

▸ **model**(`«destructured»`): `Promise`\<`undefined` \| `AsObject`\>

Returns a Model object for the existing model ID.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
const model = await app.model({
  modelId: "custom-crop-model",
  modelVersionId: "0.0.1",
});
console.log(model);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modelId` | `string` |
| › `modelUserAppId?` | `Object` |
| › `modelUserAppId.appId` | `string` |
| › `modelUserAppId.userId` | `string` |
| › `modelVersionId?` | `string` |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

A model object for the specified model ID.

**Defined in**

[src/client/app.ts:693](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L693)



#### workflow

▸ **workflow**(`workflowId`): `Promise`\<`undefined` \| `AsObject`\>

Returns a Workflow object for the existing workflow ID.

**Example**

```ts
import { App } from "clarifai-nodejs";

const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const workflow = await app.workflow({ workflowId: "workflowId" });
console.log(workflow);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `workflowId` | `Object` | The workflow ID for a existing workflow. |
| `workflowId.workflowId` | `string` | - |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

A workflow object for the specified workflow ID.

**Defined in**

[src/client/app.ts:741](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L741)

## Dataset

Dataset is a class that provides access to Clarifai API endpoints related to Dataset information.

This is its hierarchy:

- `Lister`

  ↳ **`Dataset`**

### Constructor

• **new Dataset**(`«destructured»`): `Dataset`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `DatasetConfig` |

**Returns**

`Dataset`

**Overrides**

Lister.constructor

**Defined in**

[src/client/dataset.ts:39](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L39)

### Properties

#### STUB

• `Protected` **STUB**: `V2Stub`

**Inherited from**

Lister.STUB

**Defined in**

[src/client/base.ts:27](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L27)


#### authHelper

• `Protected` **authHelper**: `ClarifaiAuthHelper`

**Inherited from**

Lister.authHelper

**Defined in**

[src/client/base.ts:26](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L26)


#### base

• `Protected` **base**: `string`

**Inherited from**

Lister.base

**Defined in**

[src/client/base.ts:31](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L31)

#### batchSize

• `Private` **batchSize**: `number` = `128`

**Defined in**

[src/client/dataset.ts:36](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L36)


#### defaultPageSize

• **defaultPageSize**: `number`

**Inherited from**

Lister.defaultPageSize

**Defined in**

[src/client/lister.ts:10](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/lister.ts#L10)


#### info

• `Private` **info**: `Dataset`

**Defined in**

[src/client/dataset.ts:35](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L35)


#### input

• `Private` **input**: `Input`

**Defined in**

[src/client/dataset.ts:37](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L37)


#### metadata

• `Protected` **metadata**: [`string`, `string`][]

**Inherited from**

Lister.metadata

**Defined in**

[src/client/base.ts:28](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L28)


#### pat

• `Protected` **pat**: `string`

**Inherited from**

Lister.pat

**Defined in**

[src/client/base.ts:29](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L29)


#### rootCertificatesPath

• `Protected` **rootCertificatesPath**: `string`

**Inherited from**

Lister.rootCertificatesPath

**Defined in**

[src/client/base.ts:32](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L32)


#### userAppId

• `Protected` **userAppId**: `UserAppIDSet`

**Inherited from**

Lister.userAppId

**Defined in**

[src/client/base.ts:30](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L30)

### Methods

#### convertStringToTimestamp

▸ **convertStringToTimestamp**(`dateStr`): `Timestamp`

Converts a string to a Timestamp object.

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateStr` | `string` | The string to convert. |

**Returns**

`Timestamp`

A Timestamp object representing the given date string.

**Inherited from**

Lister.convertStringToTimestamp

**Defined in**

[src/client/base.ts:100](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L100)


#### createVersion

▸ **createVersion**(`«destructured»`): `Promise`\<`AsObject`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `id` | `string` |
| › `metadata?` | `Record`\<`string`, `JavaScriptValue`\> |

**Returns**

`Promise`\<`AsObject`\>

**Defined in**

[src/client/dataset.ts:58](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L58)


#### deleteVersion

▸ **deleteVersion**(`versionId`): `Promise`\<`void`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `versionId` | `string` |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/dataset.ts:93](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L93)


#### grpcRequest

▸ **grpcRequest**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`): `Promise`\<`TResponse`\>

Makes a gRPC request to the API.

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

**Parameters**

| Name | Type |
| :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> |
| `requestData` | `TRequest` |

**Returns**

`Promise`\<`TResponse`\>

A Promise resolving to the result of the gRPC method call.

**Inherited from**

Lister.grpcRequest

**Defined in**

[src/client/base.ts:77](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/base.ts#L77)


#### listPagesData

▸ **listPagesData**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`, `pageNo?`, `perPage?`): `Promise`\<`TResponse`\>

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> | `undefined` |
| `requestData` | `TRequest` | `undefined` |
| `pageNo` | `number` | `1` |
| `perPage` | `number` | `undefined` |

**Returns**

`Promise`\<`TResponse`\>

**Inherited from**

Lister.listPagesData

**Defined in**

[src/client/lister.ts:92](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/lister.ts#L92)



#### listPagesGenerator

▸ **listPagesGenerator**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`, `pageNo?`, `perPage?`): `AsyncGenerator`\<`TResponse`, `void`, `unknown`\>

**Type parameters**

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> | `undefined` |
| `requestData` | `TRequest` | `undefined` |
| `pageNo` | `number` | `1` |
| `perPage` | `number` | `undefined` |

**Returns**

`AsyncGenerator`\<`TResponse`, `void`, `unknown`\>

**Inherited from**

Lister.listPagesGenerator

**Defined in**

[src/client/lister.ts:23](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/lister.ts#L23)


#### listVersions

▸ **listVersions**(`pageNo?`, `perPage?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `pageNo?` | `number` |
| `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Defined in**

[src/client/dataset.ts:113](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L113)


#### uploadFromCSV

▸ **uploadFromCSV**(`«destructured»`): `Promise`\<`void`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchSize?` | `number` | `128` |
| › `csvPath` | `string` | `undefined` |
| › `csvType` | ``"url"`` \| ``"raw"`` \| ``"file"`` | `undefined` |
| › `inputType?` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` | `"text"` |
| › `labels?` | `boolean` | `true` |
| › `uploadProgressEmitter?` | [`InputBulkUpload`](#inputbulkupload) | `undefined` |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/dataset.ts:176](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L176)


#### uploadFromFolder

▸ **uploadFromFolder**(`«destructured»`): `Promise`\<`void`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchSize?` | `number` | `undefined` |
| › `folderPath` | `string` | `undefined` |
| › `inputType` | ``"image"`` \| ``"text"`` | `undefined` |
| › `labels?` | `boolean` | `false` |
| › `uploadProgressEmitter?` | [`InputBulkUpload`](#inputbulkupload) | `undefined` |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/dataset.ts:138](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/dataset.ts#L138)

## Input

Input is a class that provides access to Clarifai API endpoints related to Input information.

This is its hierarchy:

- `Lister`

  ↳ **`Input`**

### Constructor

• **new Input**(`params`): `Input`

Initializes an input object.

**Example**

```ts
import { Input } from "clarifai-nodejs";

export const input = new Input({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the Input object. |
| `params.authConfig?` | `AuthConfig` | - |

**Returns**

`Input`

**Overrides**

Lister.constructor

**Defined in**

[src/client/input.ts:101](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L101)

### Properties

#### numOfWorkers

• `Private` **numOfWorkers**: `number`

**Defined in**

[src/client/input.ts:87](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L87)

### Methods

#### bulkUpload

▸ **bulkUpload**(`«destructured»`): `Promise`\<`void`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchSize?` | `number` | `128` |
| › `inputs` | `Input`[] | `undefined` |
| › `uploadProgressEmitter?` | [`InputBulkUpload`](#inputbulkupload) | `undefined` |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/input.ts:1038](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1038)


#### deleteFailedInputs

▸ **deleteFailedInputs**(`«destructured»`): `Promise`\<`Input`[]\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputs` | `Input`[] |

**Returns**

`Promise`\<`Input`[]\>

**Defined in**

[src/client/input.ts:1165](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1165)



#### patchInputs

▸ **patchInputs**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `action?` | `string` | `"merge"` |
| › `inputs` | `Input`[] | `undefined` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:970](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L970)



#### retryUploads

▸ **retryUploads**(`«destructured»`): `Promise`\<`void`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `failedInputs` | `Input`[] |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/input.ts:1209](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1209)



#### uploadAnnotations

▸ **uploadAnnotations**(`«destructured»`): `Promise`\<`Annotation`[]\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchAnnot` | `Annotation`[] | `undefined` |
| › `showLog?` | `boolean` | `true` |

**Returns**

`Promise`\<`Annotation`[]\>

**Defined in**

[src/client/input.ts:1006](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1006)



#### uploadBatch

▸ **uploadBatch**(`«destructured»`): `Promise`\<`Input`[]\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputs` | `Input`[] |

**Returns**

`Promise`\<`Input`[]\>

**Defined in**

[src/client/input.ts:1090](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1090)



#### uploadFromBytes

▸ **uploadFromBytes**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `videoBytes?` | ``null`` \| `Uint8Array` | `null` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:918](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L918)



#### uploadFromFile

▸ **uploadFromFile**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioFile?` | ``null`` \| `string` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageFile?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textFile?` | ``null`` \| `string` | `null` |
| › `videoFile?` | ``null`` \| `string` | `null` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:883](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L883)



#### uploadFromUrl

▸ **uploadFromUrl**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioUrl?` | ``null`` \| `string` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageUrl?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textUrl?` | ``null`` \| `string` | `null` |
| › `videoUrl?` | ``null`` \| `string` | `null` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:848](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L848)


#### uploadInputs

▸ **uploadInputs**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `inputs` | `Input`[] | `undefined` |
| › `showLog?` | `boolean` | `true` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:804](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L804)



#### uploadText

▸ **uploadText**(`«destructured»`): `Promise`\<`string`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `rawText` | `string` | `undefined` |

**Returns**

`Promise`\<`string`\>

**Defined in**

[src/client/input.ts:953](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L953)



#### waitForInputs

▸ **waitForInputs**(`«destructured»`): `Promise`\<`boolean`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputJobId` | `string` |

**Returns**

`Promise`\<`boolean`\>

**Defined in**

[src/client/input.ts:1101](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L1101)



#### getBboxProto

▸ **getBboxProto**(`«destructured»`): `Annotation`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bbox` | `number`[] |
| › `inputId` | `string` |
| › `label` | `string` |

**Returns**

`Annotation`

**Defined in**

[src/client/input.ts:719](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L719)



#### getImageInputsFromFolder

▸ **getImageInputsFromFolder**(`«destructured»`): `Input`[]

Upload image inputs from folder.

**Example**

```ts
import { Input, Model } from "clarifai-nodejs";
import path from "path";

// Generate a new GRPC compatible Input object from buffer
const imageInputs = Input.getImageInputsFromFolder({
  // Ensure the directory contains a list of images
  folderPath: path.resolve(__dirname, "path/to/imageFolder"),
});

// The input can now be used as an input for a model prediction methods
const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
  modelId: "multimodal-clip-embed",
});
const prediction = await model.predict({
  inputs: imageInputs,
});
console.log(prediction);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `folderPath` | `string` | `undefined` |
| › `labels?` | `boolean` | `false` |

**Returns**

`Input`[]

**Defined in**

[src/client/input.ts:433](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L433)


#### getInputFromBytes

▸ **getInputFromBytes**(`«destructured»`): `Input`

Creates an input proto from bytes.

**Example**

```ts
import { Input, Model } from "clarifai-nodejs";
import * as fs from "fs";

const imageBuffer = fs.readFileSync("path/to/image.jpg");

// Generate a new GRPC compatible Input object from buffer
const imageInput = Input.getInputFromBytes({
  inputId: "demo",
  imageBytes: imageBuffer,
});

// The input can now be used as an input for a model prediction methods
const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
  modelId: "multimodal-clip-embed",
});
const prediction = await model.predict({
  inputs: [imageInput],
});
console.log(prediction);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `videoBytes?` | ``null`` \| `Uint8Array` | `null` |

**Returns**

`Input`

An `Input` object for the specified input ID.

**Defined in**

[src/client/input.ts:231](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L231)


#### getInputFromFile

▸ **getInputFromFile**(`«destructured»`): `Input`

Create input proto from files.

**Example**

```ts
import { Input, Model } from "clarifai-nodejs";
import path from "path";

// Generate a new GRPC compatible Input object from buffer
const imageInput = Input.getInputFromFile({
  inputId: "demo",
  imageFile: path.resolve(__dirname, "path/to/image.jpg"),
});

// The input can now be used as an input for a model prediction methods
const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
  modelId: "multimodal-clip-embed",
});
const prediction = await model.predict({
  inputs: [imageInput],
});
console.log(prediction);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioFile?` | ``null`` \| `string` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageFile?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textFile?` | ``null`` \| `string` | `null` |
| › `videoFile?` | ``null`` \| `string` | `null` |

**Returns**

`Input`

- An Input object for the specified input ID.

**Defined in**

[src/client/input.ts:295](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L295)


#### getInputFromUrl

▸ **getInputFromUrl**(`«destructured»`): `Input`

Upload input from URL.

**Example**

```ts
import { Input, Model } from "clarifai-nodejs";

// Generate a new GRPC compatible Input object from buffer
const imageInput = Input.getInputFromUrl({
  inputId: "demo",
  imageUrl: "https://samples.clarifai.com/dog2.jpeg",
});

// The input can now be used as an input for a model prediction methods
const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
  modelId: "multimodal-clip-embed",
});
const prediction = await model.predict({
  inputs: [imageInput],
});
console.log(prediction);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioUrl?` | ``null`` \| `string` | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imageUrl?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textUrl?` | ``null`` \| `string` | `null` |
| › `videoUrl?` | ``null`` \| `string` | `null` |

**Returns**

`Input`

- Job ID for the upload request.

**Defined in**

[src/client/input.ts:359](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L359)



#### getInputsFromCsv

▸ **getInputsFromCsv**(`«destructured»`): `Promise`\<`Input`[]\>

Create Input proto from CSV File. Supported columns are:
'inputid', 'input', 'concepts', 'metadata', 'geopoints'

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `csvPath` | `string` | `undefined` |
| › `csvType` | ``"url"`` \| ``"raw"`` \| ``"file"`` | `"raw"` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` | `"text"` |
| › `labels` | `boolean` | `true` |

**Returns**

`Promise`\<`Input`[]\>

- An array of Input objects for the specified input ID.

**Defined in**

[src/client/input.ts:573](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L573)


#### getMaskProto

▸ **getMaskProto**(`«destructured»`): `Annotation`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputId` | `string` |
| › `label` | `string` |
| › `polygons` | `Polygon`[] |

**Returns**

`Annotation`

**Defined in**

[src/client/input.ts:760](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L760)


#### getMultimodalInput

▸ **getMultimodalInput**(`«destructured»`): `Input`

Create input proto for text and image from bytes or url

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `imageBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `imageUrl?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `rawText?` | ``null`` \| `string` | `null` |
| › `textBytes?` | ``null`` \| `Uint8Array` | `null` |

**Returns**

`Input`

- An Input object for the specified input ID.

**Defined in**

[src/client/input.ts:513](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L513)



#### getProto

▸ **getProto**(`«destructured»`): `Input`

Create input proto for image data type.

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `audioPb?` | ``null`` \| \{ `base64`: `string`  } | `null` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `imagePb?` | ``null`` \| \{ `base64`: `string` ; `url?`: `undefined`  } \| \{ `base64?`: `undefined` ; `url`: `string`  } | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `textPb?` | ``null`` \| \{ `raw`: `string`  } | `null` |
| › `videoPb?` | ``null`` \| \{ `base64`: `string`  } | `null` |

**Returns**

`Input`

- An Input object for the specified input ID.

**Defined in**

[src/client/input.ts:119](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L119)



#### getTextInput

▸ **getTextInput**(`«destructured»`): `Input`

Create input proto for text data type from raw text.

**Example**

```ts
import { Input, Model } from "clarifai-nodejs";

// Generate a new GRPC compatible Input object from buffer
const textInput = Input.getTextInput({
  inputId: "demo",
  rawText: "Sample text for input generation",
});

// The input can now be used as an input for a model prediction methods
const model = new Model({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
  modelId: "multimodal-clip-embed",
});
const prediction = await model.predict({
  inputs: [textInput],
});
console.log(prediction);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `rawText` | `string` | `undefined` |

**Returns**

`Input`

- An Input object for the specified input ID.

**Defined in**

[src/client/input.ts:476](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L476)


#### getTextInputsFromFolder

▸ **getTextInputsFromFolder**(`«destructured»`): `Input`[]

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId` | ``null`` \| `string` | `null` |
| › `folderPath` | `string` | `undefined` |
| › `labels` | `boolean` | `false` |

**Returns**

`Input`[]

**Defined in**

[src/client/input.ts:688](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L688)


## Model

Model is a class that provides access to Clarifai API endpoints related to Model information.

This is its hierarchy:

- `Lister`

  ↳ **`Model`**

### Constructor

• **new Model**(`config`): `Model`

Initializes a Model object.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `config` | `ModelConfig` |

**Returns**

`Model`

**Overrides**

Lister.constructor

**Defined in**

[src/client/model.ts:132](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L132)

### Properties

#### appId

• `Private` **appId**: `string`

**Defined in**

[src/client/model.ts:111](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L111)



#### id

• `Private` **id**: `string`

**Defined in**

[src/client/model.ts:112](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L112)


#### modelInfo

• **modelInfo**: `Model`

**Defined in**

[src/client/model.ts:115](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L115)


#### modelUserAppId

• `Private` **modelUserAppId**: `undefined` \| `UserAppIDSet`

**Defined in**

[src/client/model.ts:113](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L113)


#### modelVersion

• `Private` **modelVersion**: `undefined` \| \{ `id`: `string`  }

**Defined in**

[src/client/model.ts:114](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L114)


#### runner

• `Private` **runner**: `undefined` \| `RunnerSelector`

**Defined in**

[src/client/model.ts:117](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L117)



#### trainingParams

• `Private` **trainingParams**: `Record`\<`string`, `unknown`\>

**Defined in**

[src/client/model.ts:116](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L116)

### Methods

#### availableMethods

▸ **availableMethods**(): `Promise`\<`string`[]\>

**Returns**

`Promise`\<`string`[]\>

**Defined in**

[src/client/model.ts:647](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L647)


#### constructRequestWithMethodSignature

▸ **constructRequestWithMethodSignature**(`request`, `config`): `Promise`\<`PostModelOutputsRequest`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `request` | `PostModelOutputsRequest` |
| `config` | `TextModelPredictConfig` |

**Returns**

`Promise`\<`PostModelOutputsRequest`\>

**Defined in**

[src/client/model.ts:663](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L663)


#### createVersion

▸ **createVersion**(`modelVersion`): `Promise`\<`undefined` \| `AsObject`\>

Creates a model version for the Model.

**Example**

```ts
import { Model } from "clarifai-nodejs";
import {
  ModelVersion,
  OutputInfo,
} from "clarifai-nodejs-grpc/proto/clarifai/api/resources_pb";
import { Struct } from "google-protobuf/google/protobuf/struct_pb.js";

export const model = new Model({
  modelId: "margin-100-image-cropper",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

// Creating a GRPC compatible outputInfo object with custom margin parameters
const outputInfo = new OutputInfo().setParams(
  Struct.fromJavaScript({ margin: 1.5 }),
);
// GRPC compatible ModelVersion object with previously created output info config
const modelVersion = new ModelVersion()
  .setDescription("Setting output info margin parameters to 1.5")
  .setOutputInfo(outputInfo);

// Creating a new version of the model with previously created output info config
const modelObjectWithVersion = await model.createVersion(modelVersion);

console.log(modelObjectWithVersion);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `modelVersion` | `ModelVersion` |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

**Defined in**

[src/client/model.ts:545](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L545)


#### deleteVersion

▸ **deleteVersion**(`versionId`): `Promise`\<`void`\>

Deletes a model version for the Model.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

model.deleteVersion("version_id");
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `versionId` | `string` | The version ID to delete. |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/model.ts:514](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L514)



#### generate

▸ **generate**(`«destructured»`): `AsyncGenerator`\<`AsObject`[], `any`, `unknown`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `TextModelPredictConfig` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `any`, `unknown`\>

**Defined in**

[src/client/model.ts:1120](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1120)


#### generateGrpc

▸ **generateGrpc**(`«destructured»`): `AsyncGenerator`\<`AsObject` \| [``"deploying"``, `AsObject`], `any`, `unknown`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `TextModelPredictConfig` |

**Returns**

`AsyncGenerator`\<`AsObject` \| [``"deploying"``, `AsObject`], `any`, `unknown`\>

**Defined in**

[src/client/model.ts:848](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L848)


#### getParamInfo

▸ **getParamInfo**(`param`): `Promise`\<`Record`\<`string`, `any`\>\>

Returns the param info for the model.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

model.getParamInfo("template");
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `param` | `string` |

**Returns**

`Promise`\<`Record`\<`string`, `any`\>\>

**Defined in**

[src/client/model.ts:446](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L446)


#### getParams

▸ **getParams**(`template?`, `saveTo?`): `Promise`\<`Record`\<`string`, `any`\>\>

Returns the model params for the model type as object & also writes to a yaml file

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const modelParams = await model.getParams("face-detection", "params.yml");
console.log(modelParams);
```

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `template` | ``null`` \| `string` | `null` | The training template to use for the model type. |
| `saveTo` | `string` | `"params.yaml"` | The file path to save the yaml file. |

**Returns**

`Promise`\<`Record`\<`string`, `any`\>\>

- A promise that resolves to the model params for the model type.

**Defined in**

[src/client/model.ts:336](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L336)


#### getRunner

▸ **getRunner**(): `undefined` \| `AsObject`

Returns the runner for the model.

**Returns**

`undefined` \| `AsObject`

- The runner for the model.

**Defined in**

[src/client/model.ts:230](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L230)


#### listTrainingTemplates

▸ **listTrainingTemplates**(): `Promise`\<`string`[]\>

Lists all the training templates for the model type.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const trainingTemplates = await model.listTrainingTemplates();
console.log(trainingTemplates);
```

**Returns**

`Promise`\<`string`[]\>

- A promise that resolves to a list of training templates for the model type.

**Defined in**

[src/client/model.ts:289](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L289)


#### listVersions

▸ **listVersions**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `void`\>

Lists all the versions for the model.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "lvm-dummy-test",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const versions = await model.listVersions().next();

console.log(versions);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `void`\>

**Notes**

Defaults to 16 per page if pageNo is not specified

**Defined in**

[src/client/model.ts:589](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L589)



#### loadInfo

▸ **loadInfo**(): `Promise`\<`void`\>

Loads the current model info.
Usually called internally by other methods, to ensure the model info is loaded with latest data.

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/model.ts:238](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L238)



#### methodSignatures

▸ **methodSignatures**(): `Promise`\<`AsObject`[]\>

**Returns**

`Promise`\<`AsObject`[]\>

**Defined in**

[src/client/model.ts:625](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L625)


#### overrideModelVersion

▸ **overrideModelVersion**(`«destructured»`): `void`

Overrides the model version.

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `outputConfig?` | `OutputConfig` |

**Returns**

`void`

**Defined in**

[src/client/model.ts:1314](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1314)


#### predict

▸ **predict**(`predictArgs`): `Promise`\<`AsObject`[]\>

Predicts the model based on the given inputs.
Useful for chat / text based llms

**Parameters**

| Name | Type |
| :------ | :------ |
| `predictArgs` | `TextModelPredictConfig` |

**Returns**

`Promise`\<`AsObject`[]\>

**Defined in**

[src/client/model.ts:740](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L740)

▸ **predict**(`«destructured»`): `Promise`\<`AsObject`[]\>

Predicts the model based on the given inputs.
Use the `Input` module to create the input objects.

**Example**

```ts
import { Model, Input } from "clarifai-nodejs";

export const model = new Model({
  modelId: "multimodal-clip-embed",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

const input = Input.getInputFromBytes({
  inputId: "intro-text",
  textBytes: Buffer.from("Hi my name is Jim."),
});

const textPrediction = await model.predict({
  inputs: [input],
});

console.log(textPrediction);

const imageInput = Input.getInputFromUrl({
  inputId: "test-image",
  imageUrl:
    "https://goldenglobes.com/wp-content/uploads/2023/10/17-tomcruiseag.jpg",
});

const imagePrediction = await model.predict({
  inputs: [imageInput],
});

console.log(imagePrediction);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `GeneralModelPredictConfig` |

**Returns**

`Promise`\<`AsObject`[]\>

- A promise that resolves to the model prediction.

**Defined in**

[src/client/model.ts:758](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L758)



#### predictByBytes

▸ **predictByBytes**(`«destructured»`): `Promise`\<`AsObject`[]\>

Predicts the model based on the given inputs.
Inputs can be provided as a Buffer.

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputBytes` | `Buffer` |
| › `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |

**Returns**

`Promise`\<`AsObject`[]\>

- A promise that resolves to the model prediction.

**Defined in**

[src/client/model.ts:1255](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1255)


#### predictByFilepath

▸ **predictByFilepath**(`«destructured»`): `Promise`\<`AsObject`[]\>

Predicts the model based on the given inputs.
Inputs can be provided as a filepath which can be read.

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filepath` | `string` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |

**Returns**

`Promise`\<`AsObject`[]\>

- A promise that resolves to the model prediction.

**Defined in**

[src/client/model.ts:1221](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1221)


#### predictByUrl

▸ **predictByUrl**(`«destructured»`): `Promise`\<`AsObject`[]\>

Predicts the model based on the given inputs.
Inputs can be provided as a URL.

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |
| › `url` | `string` |

**Returns**

`Promise`\<`AsObject`[]\>

- A promise that resolves to the model prediction.

**Defined in**

[src/client/model.ts:1179](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1179)



#### setRunner

▸ **setRunner**(`runner`): `void`

Sets the runner for the model.

**Parameters**

| Name | Type |
| :------ | :------ |
| `runner` | `Subset`\<`AsObject`\> |

**Returns**

`void`

**Defined in**

[src/client/model.ts:202](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L202)



#### stream

▸ **stream**(`config`): `Promise`\<\{ `end`: () => `void` ; `iterator`: `AsyncGenerator`\<`AsObject`[], `any`, `unknown`\> ; `send`: (`request`: `PostModelOutputsRequest`) => `void`  }\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `config` | `TextModelPredictConfig` |

**Returns**

`Promise`\<\{ `end`: () => `void` ; `iterator`: `AsyncGenerator`\<`AsObject`[], `any`, `unknown`\> ; `send`: (`request`: `PostModelOutputsRequest`) => `void`  }\>

**Defined in**

[src/client/model.ts:1034](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L1034)


#### streamWithControl

▸ **streamWithControl**(`«destructured»`): `Object`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `TextModelPredictConfig` |

**Returns**

`Object`

| Name | Type |
| :------ | :------ |
| `end` | () => `void` |
| `iterator` | `AsyncGenerator`\<`AsObject` \| [``"deploying"``, `AsObject`], `any`, `unknown`\> |
| `send` | (`request`: `PostModelOutputsRequest`) => `void` |

**Defined in**

[src/client/model.ts:931](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L931)



#### updateParams

▸ **updateParams**(`modelParams`): `void`

Updates the model params for the model.

**Example**

```ts
import { Model } from "clarifai-nodejs";

export const model = new Model({
  modelId: "face-detection",
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

model.updateParams({
  batchSize: 8,
  datasetVersion: "version_id",
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelParams` | `Record`\<`string`, `unknown`\> | The model params to update. |

**Returns**

`void`

**Defined in**

[src/client/model.ts:415](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L415)



#### getOutputDataFromModelResponse

▸ **getOutputDataFromModelResponse**(`outputs`): `undefined` \| `AsObject`

**Parameters**

| Name | Type |
| :------ | :------ |
| `outputs` | `AsObject`[] |

**Returns**

`undefined` \| `AsObject`

**Defined in**

[src/client/model.ts:641](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/model.ts#L641)

## RAG

RAG is a class that provides access to Clarifai API endpoints related to RAG information.

### Constructor

• **new RAG**(`«destructured»`): `RAG`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `RAGConfig` |

**Returns**

`RAG`

**Defined in**

[src/client/rag.ts:67](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L67)

### Properties

#### app

• **app**: `App`

**Defined in**

[src/client/rag.ts:65](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L65)


#### authConfig

• `Private` **authConfig**: `AuthConfig`

**Defined in**

[src/client/rag.ts:61](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L61)


#### promptWorkflow

• **promptWorkflow**: `Workflow`

**Defined in**

[src/client/rag.ts:63](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L63)

### Methods

#### chat

▸ **chat**(`«destructured»`): `Promise`\<`Message`[]\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `clientManageState?` | `boolean` | `true` |
| › `messages` | `Message`[] | `undefined` |

**Returns**

`Promise`\<`Message`[]\>

**Defined in**

[src/client/rag.ts:405](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L405)

#### upload

▸ **upload**(`«destructured»`): `Promise`\<`void`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchSize?` | `number` | `128` |
| › `chunkOverlap?` | `number` | `200` |
| › `chunkSize?` | `number` | `1024` |
| › `datasetId?` | `string` | `undefined` |
| › `filePath?` | `string` | `undefined` |
| › `folderPath?` | `string` | `undefined` |
| › `metadata?` | `Record`\<`string`, `JavaScriptValue`\> | `undefined` |
| › `url?` | `string` | `undefined` |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/rag.ts:283](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L283)



#### validateInputs

▸ **validateInputs**(`workflowUrl?`, `workflow?`, `authConfig?`): `void`

**Parameters**

| Name | Type |
| :------ | :------ |
| `workflowUrl?` | `string` |
| `workflow?` | [`Workflow`](#workflow) |
| `authConfig?` | `AuthConfig` \| `UrlAuthConfig` |

**Returns**

`void`

**Defined in**

[src/client/rag.ts:89](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L89)


**setup**

▸ **setup**(`«destructured»`): `Promise`\<`RAG`\>

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `appUrl?` | `$\{string}://$\{string}/$\{string}/$\{string}\` | `undefined` |
| › `authConfig?` | [`AuthAppConfig`](#authappconfig) \| `Omit`\<`AuthConfig`, ``"appId"``\> & \{ `appId?`: `undefined`  } | `undefined` |
| › `baseWorkflow?` | `string` | `"Text"` |
| › `llmUrl?` | `ClarifaiUrl` | [`mistral-7B-Instruct`](https://clarifai.com/mistralai/completion/models/mistral-7B-Instruct) |
| › `maxResults?` | `number` | `5` |
| › `minScore?` | `number` | `0.95` |
| › `promptTemplate?` | `string` | `DEFAULT_RAG_PROMPT_TEMPLATE` |
| › `workflowId?` | `string` | `undefined` |
| › `workflowYamlFilename?` | `string` | `"prompter_wf.yaml"` |


**Returns**

`Promise`\<`RAG`\>

**Defined in**

[src/client/rag.ts:109](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/rag.ts#L109)



## Search

Search is a class that provides access to Clarifai API endpoints related to Search information.

This is its hierarchy:

- `Lister`

  ↳ **`Search`**

### Constructor

• **new Search**(`«destructured»`): `Search`

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `algorithm?` | `SupportedAlgorithm` | `DEFAULT_SEARCH_ALGORITHM` |
| › `authConfig?` | `AuthConfig` | `undefined` |
| › `metric?` | `SupportedMetric` | `DEFAULT_SEARCH_METRIC` |
| › `topK?` | `number` | `DEFAULT_TOP_K` |

**Returns**

`Search`

**Overrides**

Lister.constructor

**Defined in**

[src/client/search.ts:59](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L59)

### Properties

#### algorithm

• `Private` **algorithm**: `SupportedAlgorithm`

**Defined in**

[src/client/search.ts:57](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L57)

#### dataProto

• `Private` **dataProto**: `Data`

**Defined in**

[src/client/search.ts:55](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L55)


#### inputProto

• `Private` **inputProto**: [`Input`](#input)

**Defined in**

[src/client/search.ts:56](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L56)


#### metricDistance

• `Private` **metricDistance**: ``"COSINE_DISTANCE"`` \| ``"EUCLIDEAN_DISTANCE"``

**Defined in**

[src/client/search.ts:54](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L54)



#### topK

• `Private` **topK**: `number`

**Defined in**

[src/client/search.ts:53](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L53)

### Methods

#### getAnnotProto

▸ **getAnnotProto**(`args`): `Annotation`

**Parameters**

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.concepts?` | \{ `id?`: `string` ; `language?`: `string` ; `name?`: `string` ; `value?`: `number`  }[] |
| `args.geoPoint?` | `Object` |
| `args.geoPoint.geoLimit` | `number` |
| `args.geoPoint.latitude` | `number` |
| `args.geoPoint.longitude` | `number` |
| `args.imageBytes?` | `unknown` |
| `args.imageUrl?` | `string` |
| `args.inputDatasetIds?` | `string`[] |
| `args.inputStatusCode?` | `number` |
| `args.inputTypes?` | (``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"``)[] |
| `args.metadata?` | `Record`\<`string`, `unknown`\> |
| `args.textRaw?` | `string` |

**Returns**

`Annotation`

**Defined in**

[src/client/search.ts:94](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L94)


#### getGeoPointProto

▸ **getGeoPointProto**(`longitude`, `latitude`, `geoLimit`): `Geo`

**Parameters**

| Name | Type |
| :------ | :------ |
| `longitude` | `number` |
| `latitude` | `number` |
| `geoLimit` | `number` |

**Returns**

`Geo`

**Defined in**

[src/client/search.ts:204](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L204)


#### getInputProto

▸ **getInputProto**(`args`): `Input`

**Parameters**

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.concepts?` | \{ `id?`: `string` ; `language?`: `string` ; `name?`: `string` ; `value?`: `number`  }[] |
| `args.geoPoint?` | `Object` |
| `args.geoPoint.geoLimit` | `number` |
| `args.geoPoint.latitude` | `number` |
| `args.geoPoint.longitude` | `number` |
| `args.imageBytes?` | `unknown` |
| `args.imageUrl?` | `string` |
| `args.inputDatasetIds?` | `string`[] |
| `args.inputStatusCode?` | `number` |
| `args.inputTypes?` | (``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"``)[] |
| `args.metadata?` | `Record`\<`string`, `unknown`\> |
| `args.textRaw?` | `string` |

**Returns**

`Input`

**Defined in**

[src/client/search.ts:168](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L168)


#### listAllPagesGenerator

▸ **listAllPagesGenerator**\<`T`\>(`«destructured»`): `AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Type parameters**

| Name | Type |
| :------ | :------ |
| `T` | extends `PostAnnotationsSearchesRequest` \| `PostInputsSearchesRequest` |

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `endpoint` | (`request`: `T`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`MultiSearchResponse`\> | `undefined` |
| › `page?` | `number` | `1` |
| › `perPage?` | `number` | `undefined` |
| › `requestData` | `T` | `undefined` |

**Returns**

`AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Defined in**

[src/client/search.ts:221](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L221)



#### query

▸ **query**(`«destructured»`): `AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filters?` | \{ `concepts?`: \{ `id?`: `string` ; `language?`: `string` ; `name?`: `string` ; `value?`: `number`  }[] ; `geoPoint?`: \{ `geoLimit`: `number` ; `latitude`: `number` ; `longitude`: `number`  } ; `imageBytes?`: `unknown` ; `imageUrl?`: `string` ; `inputDatasetIds?`: `string`[] ; `inputStatusCode?`: `number` ; `inputTypes?`: (``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"``)[] ; `metadata?`: `Record`\<`string`, `unknown`\> ; `textRaw?`: `string`  }[] |
| › `page?` | `number` |
| › `perPage?` | `number` |
| › `ranks?` | \{ `concepts?`: \{ `id?`: `string` ; `language?`: `string` ; `name?`: `string` ; `value?`: `number`  }[] ; `geoPoint?`: \{ `geoLimit`: `number` ; `latitude`: `number` ; `longitude`: `number`  } ; `imageBytes?`: `unknown` ; `imageUrl?`: `string` ; `inputDatasetIds?`: `string`[] ; `inputStatusCode?`: `number` ; `inputTypes?`: (``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"``)[] ; `metadata?`: `Record`\<`string`, `unknown`\> ; `textRaw?`: `string`  }[] |

**Returns**

`AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Defined in**

[src/client/search.ts:290](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/search.ts#L290)

## User

User is a class that provides access to Clarifai API endpoints related to user information.

This is its hierarchy:

- `Lister`

  ↳ **`User`**

### Constructor

• **new User**(`authConfig?`): `User`

Initializes a User object with the specified authentication configuration.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `authConfig` | `AuthConfig` | An object containing the authentication configuration. Defaults to an empty object. |

**Returns**

`User`

**Overrides**

Lister.constructor

**Defined in**

[src/client/user.ts:45](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L45)

### Methods

#### app

▸ **app**(`appId`): `Promise`\<`undefined` \| `AsObject`\>

Returns an App object for the specified app ID.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
const app = await user.app({
  appId: "app_id",
});
console.log(app);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `Object` | The app ID for the app to interact with. |
| `appId.appId` | `string` | - |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

An App object for the specified app ID.

**Defined in**

[src/client/user.ts:240](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L240)


#### createApp

▸ **createApp**(`«destructured»`): `Promise`\<`AsObject`\>

Creates an app for the user.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
const app = await user.createApp({
  appId: "app_id",
  baseWorkflow: "Universal",
});
console.log(app);
```

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `appId` | `string` | `undefined` |
| › `baseWorkflow?` | `string` | `"Empty"` |

**Returns**

`Promise`\<`AsObject`\>

An App object for the specified app ID.

**Defined in**

[src/client/user.ts:141](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L141)

#### createRunner

▸ **createRunner**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a runner for the user.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
const runner = await user.createRunner({
  runnerId: "runner_id",
  labels: ["label to link runner"],
  description: "laptop runner",
});
console.log(runner);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `labels` | `string`[] |
| › `runnerId` | `string` |

**Returns**

`Promise`\<`AsObject`\>

A runner object for the specified Runner ID.

**Defined in**

[src/client/user.ts:192](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L192)


#### deleteApp

▸ **deleteApp**(`appId`): `Promise`\<`void`\>

Deletes an app for the user.

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `Object` | The app ID for the app to delete. |
| `appId.appId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Example**

```ts
examples/user/deleteApp.ts
```

**Defined in**

[src/client/user.ts:304](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L304)


#### deleteRunner

▸ **deleteRunner**(`runnerId`): `Promise`\<`void`\>

Deletes a runner for the user.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
await user.deleteRunner({ runnerId: "runner_id" });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `runnerId` | `Object` | The runner ID to delete. |
| `runnerId.runnerId` | `string` | - |

**Returns**

`Promise`\<`void`\>

**Defined in**

[src/client/user.ts:331](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L331)


#### listApps

▸ **listApps**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the apps for the user.

**Example**

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

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListAppsRequestParams`](#listappsrequestparams) |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**Yields**

App objects for the user.

**Note**

Defaults to 16 per page if pageNo is specified and perPage is not specified.
If both pageNo and perPage are None, then lists all the resources.

**Defined in**

[src/client/user.ts:62](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L62)


#### listRunners

▸ **listRunners**(`«destructured»?`): `AsyncGenerator`\<`AsObject`, `void`, `unknown`\>

Lists all the runners for the user.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
const list = await user.listRunners().next();
const runners = list.value;
console.log(runners);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListRunnersRequestParams`](#listrunnersrequestparams) |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`, `void`, `unknown`\>

**Yields**

Runner objects for the user.

**Note**

Defaults to 16 per page if perPage is not specified.

**Defined in**

[src/client/user.ts:103](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L103)



#### runner

▸ **runner**(`runnerId`): `Promise`\<`undefined` \| `AsObject`\>

Returns a Runner object if exists.

**Example**

```ts
import { User } from "clarifai-nodejs";

export const user = new User({
  pat: process.env.CLARIFAI_PAT!,
  userId: process.env.CLARIFAI_USER_ID!,
  appId: process.env.CLARIFAI_APP_ID!,
});
const runner = await user.runner({ runnerId: "runner_id" });
console.log(runner);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `runnerId` | `Object` | The runner ID to interact with. |
| `runnerId.runnerId` | `string` | - |

**Returns**

`Promise`\<`undefined` \| `AsObject`\>

A Runner object for the existing runner ID.

**Defined in**

[src/client/user.ts:272](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L272)

## Workflow

Workflow is a class that provides access to Clarifai API endpoints related to workflow information.

This is its hierarchy:

- `Lister`

  ↳ **`Workflow`**

### Constructor

• **new Workflow**(`«destructured»`): `Workflow`

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `WorkflowConfig` |

**Returns**

`Workflow`

**Overrides**

Lister.constructor

**Defined in**

[src/client/workflow.ts:55](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L55)

### Properties

#### appId

• **appId**: `string`

**Defined in**

[src/client/workflow.ts:52](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L52)



#### id

• **id**: `string`

**Defined in**

[src/client/workflow.ts:51](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L51)



#### outputConfig

• `Private` **outputConfig**: `OutputConfig`

**Defined in**

[src/client/workflow.ts:53](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L53)


#### versionId

• `Private` **versionId**: `string`

**Defined in**

[src/client/workflow.ts:50](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L50)

### Methods

#### exportWorkflow

▸ **exportWorkflow**(`outPath`): `Promise`\<`void`\>

Exports the workflow to a yaml file.

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `outPath` | `string` | The path to save the yaml file to. |

**Returns**

`Promise`\<`void`\>

**Example**

```typescript
import { Workflow } from "./workflow";

const workflow = new Workflow("https://clarifai.com/clarifai/main/workflows/Demographics");
await workflow.export("out_path.yml");
```

**Defined in**

[src/client/workflow.ts:267](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L267)


#### listVersions

▸ **listVersions**(`«destructured»`): `AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `perPage?` | `number` |

**Returns**

`AsyncGenerator`\<`AsObject`, `void`, `void`\>

**Defined in**

[src/client/workflow.ts:221](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L221)


#### predict

▸ **predict**(`«destructured»`): `Promise`\<`AsObject`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inputs` | `Input`[] |
| › `workflowStateId?` | `string` |

**Returns**

`Promise`\<`AsObject`\>

**Defined in**

[src/client/workflow.ts:84](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L84)


#### predictByBytes

▸ **predictByBytes**(`inputBytes`, `inputType`): `Promise`\<`AsObject`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `inputBytes` | `Buffer` |
| `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` |

**Returns**

`Promise`\<`AsObject`\>

**Defined in**

[src/client/workflow.ts:160](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L160)


#### predictByUrl

▸ **predictByUrl**(`url`, `inputType`): `Promise`\<`AsObject`\>

**Parameters**

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `inputType` | ``"image"`` \| ``"text"`` \| ``"video"`` \| ``"audio"`` |

**Returns**

`Promise`\<`AsObject`\>

**Defined in**

[src/client/workflow.ts:199](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/workflow.ts#L199)

## Type Aliases

### AppConfig

Ƭ **AppConfig**: \{ `authConfig`: [`AuthAppConfig`](#authappconfig) ; `url`: `ClarifaiAppUrl`  } \| \{ `authConfig`: `AuthConfig` ; `url?`: `undefined`  }

**Defined in**

[src/client/app.ts:55](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L55)


### AuthAppConfig

Ƭ **AuthAppConfig**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `appId?` | `undefined` |
| `base` | `undefined` \| `string` |
| `pat` | `string` |
| `rootCertificatesPath` | `undefined` \| `string` |
| `token` | `undefined` \| `string` |
| `ui` | `undefined` \| `string` |
| `userId?` | `undefined` |

**Defined in**

[src/client/app.ts:50](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L50)



### CreateDatasetParam

Ƭ **CreateDatasetParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `appId` | `undefined` \| `string` |
| `bookmarkOrigin` | `undefined` \| `AsObject` |
| `createdAt` | `undefined` \| `AsObject` |
| `defaultAnnotationFilter` | `undefined` \| `AsObject` |
| `defaultProcessingInfo` | `undefined` \| `AsObject` |
| `description` | `undefined` \| `string` |
| `image` | `undefined` \| `AsObject` |
| `isStarred` | `undefined` \| `boolean` |
| `metadata` | `undefined` \| `AsObject` |
| `modifiedAt` | `undefined` \| `AsObject` |
| `notes` | `undefined` \| `string` |
| `starCount` | `undefined` \| `number` |
| `userId` | `undefined` \| `string` |
| `version` | `undefined` \| `AsObject` |
| `visibility` | `undefined` \| `AsObject` |

**Defined in**

[src/client/app.ts:75](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L75)



### CreateModelParam

Ƭ **CreateModelParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `appId` | `undefined` \| `string` |
| `billingType` | `undefined` \| `BillingType` |
| `bookmarkOrigin` | `undefined` \| `AsObject` |
| `checkConsentsList` | `undefined` \| `string`[] |
| `createdAt` | `undefined` \| `AsObject` |
| `creator` | `undefined` \| `string` |
| `defaultEvalInfo` | `undefined` \| `AsObject` |
| `deployRestriction` | `undefined` \| `DeployRestriction` |
| `description` | `undefined` \| `string` |
| `displayName` | `undefined` \| `string` |
| `featuredOrder` | `undefined` \| `AsObject` |
| `image` | `undefined` \| `AsObject` |
| `isStarred` | `undefined` \| `boolean` |
| `languagesFullList` | `undefined` \| `AsObject`[] |
| `languagesList` | `undefined` \| `string`[] |
| `licenseType` | `undefined` \| `LicenseType` |
| `metadata` | `undefined` \| `AsObject` |
| `modelTypeId` | `undefined` \| `string` |
| `modelVersion` | `undefined` \| `AsObject` |
| `modifiedAt` | `undefined` \| `AsObject` |
| `name` | `undefined` \| `string` |
| `notes` | `undefined` \| `string` |
| `outputInfo` | `undefined` \| `AsObject` |
| `presets` | `undefined` \| `AsObject` |
| `replicaCount` | `undefined` \| `number` |
| `source` | `undefined` \| `Source` |
| `starCount` | `undefined` \| `number` |
| `task` | `undefined` \| `string` |
| `toolkitsList` | `undefined` \| `string`[] |
| `useCasesList` | `undefined` \| `string`[] |
| `userId` | `undefined` \| `string` |
| `versionCount` | `undefined` \| `number` |
| `visibility` | `undefined` \| `AsObject` |
| `workflowRecommended` | `undefined` \| `AsObject` |

**Defined in**

[src/client/app.ts:79](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L79)



### InputBulkUpload

Ƭ **InputBulkUpload**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `[captureRejectionSymbol]` | `undefined` \| \<K\>(`error`: `Error`, `event`: `string` \| `symbol`, ...`args`: `AnyRest`) => `void` |
| `addListener` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `emit` | \<K\>(`eventName`: `string` \| `symbol`, ...`args`: `AnyRest`) => `boolean` & \<K\>(`event`: `K`, `payload`: `UploadEvents`[`K`]) => `boolean` |
| `eventNames` | () => (`string` \| `symbol`)[] |
| `getMaxListeners` | () => `number` |
| `listenerCount` | \<K\>(`eventName`: `string` \| `symbol`, `listener?`: `Function`) => `number` |
| `listeners` | \<K\>(`eventName`: `string` \| `symbol`) => `Function`[] |
| `off` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `on` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` & \<K\>(`event`: `K`, `listener`: (`payload`: `UploadEvents`[`K`]) => `void`) => `void` |
| `once` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `prependListener` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `prependOnceListener` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `rawListeners` | \<K\>(`eventName`: `string` \| `symbol`) => `Function`[] |
| `removeAllListeners` | (`eventName?`: `string` \| `symbol`) => `this` |
| `removeListener` | \<K\>(`eventName`: `string` \| `symbol`, `listener`: (...`args`: `any`[]) => `void`) => `this` |
| `setMaxListeners` | (`n`: `number`) => `this` |

**Defined in**

[src/client/input.ts:80](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/input.ts#L80)



### ListAppsRequestParams

Ƭ **ListAppsRequestParams**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `additionalFieldsList` | `undefined` \| `string`[] |
| `featuredOnly` | `undefined` \| `boolean` |
| `id` | `undefined` \| `string` |
| `name` | `undefined` \| `string` |
| `page` | `undefined` \| `number` |
| `query` | `undefined` \| `string` |
| `search` | `undefined` \| `string` |
| `sortAscending` | `undefined` \| `boolean` |
| `sortByCreatedAt` | `undefined` \| `boolean` |
| `sortById` | `undefined` \| `boolean` |
| `sortByModifiedAt` | `undefined` \| `boolean` |
| `sortByName` | `undefined` \| `boolean` |
| `sortByStarCount` | `undefined` \| `boolean` |
| `starredOnly` | `undefined` \| `boolean` |
| `templateOnly` | `undefined` \| `boolean` |

**Defined in**

[src/client/user.ts:22](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L22)



### ListDatasetsParam

Ƭ **ListDatasetsParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `additionalFieldsList` | `undefined` \| `string`[] |
| `bookmark` | `undefined` \| `boolean` |
| `id` | `undefined` \| `string` |
| `page` | `undefined` \| `number` |
| `search` | `undefined` \| `string` |
| `sortAscending` | `undefined` \| `boolean` |
| `sortByCreatedAt` | `undefined` \| `boolean` |
| `sortById` | `undefined` \| `boolean` |
| `sortByModifiedAt` | `undefined` \| `boolean` |
| `sortByStarCount` | `undefined` \| `boolean` |
| `starredOnly` | `undefined` \| `boolean` |

**Defined in**

[src/client/app.ts:65](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L65)



### ListInstalledModuleVersionsParam

Ƭ **ListInstalledModuleVersionsParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `page` | `undefined` \| `number` |

**Defined in**

[src/client/app.ts:73](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L73)



### ListModelsParam

Ƭ **ListModelsParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `additionalFieldsList` | `undefined` \| `string`[] |
| `bookmark` | `undefined` \| `boolean` |
| `creator` | `undefined` \| `string` |
| `dontFetchFromMain` | `undefined` \| `boolean` |
| `featuredOnly` | `undefined` \| `boolean` |
| `filterByUserId` | `undefined` \| `boolean` |
| `inputFieldsList` | `undefined` \| `string`[] |
| `languagesList` | `undefined` \| `string`[] |
| `license` | `undefined` \| `string` |
| `licenseType` | `undefined` \| `LicenseType` |
| `minReplicas` | `undefined` \| `number` |
| `modelTypeId` | `undefined` \| `string` |
| `modelVersionIdsList` | `undefined` \| `string`[] |
| `name` | `undefined` \| `string` |
| `outputFieldsList` | `undefined` \| `string`[] |
| `page` | `undefined` \| `number` |
| `query` | `undefined` \| `string` |
| `search` | `undefined` \| `string` |
| `showReplicas` | `undefined` \| `boolean` |
| `sortAscending` | `undefined` \| `boolean` |
| `sortByCreatedAt` | `undefined` \| `boolean` |
| `sortByModifiedAt` | `undefined` \| `boolean` |
| `sortByName` | `undefined` \| `boolean` |
| `sortByNumInputs` | `undefined` \| `boolean` |
| `sortByStarCount` | `undefined` \| `boolean` |
| `source` | `undefined` \| `number` |
| `starredOnly` | `undefined` \| `boolean` |
| `toolkitsList` | `undefined` \| `string`[] |
| `trainedOnly` | `undefined` \| `boolean` |
| `useCasesList` | `undefined` \| `string`[] |

**Defined in**

[src/client/app.ts:67](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L67)



### ListModulesParam

Ƭ **ListModulesParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `additionalFieldsList` | `undefined` \| `string`[] |
| `bookmark` | `undefined` \| `boolean` |
| `filterByUserId` | `undefined` \| `boolean` |
| `name` | `undefined` \| `string` |
| `page` | `undefined` \| `number` |
| `search` | `undefined` \| `string` |
| `sortAscending` | `undefined` \| `boolean` |
| `sortByCreatedAt` | `undefined` \| `boolean` |
| `sortById` | `undefined` \| `boolean` |
| `sortByModifiedAt` | `undefined` \| `boolean` |
| `sortByStarCount` | `undefined` \| `boolean` |
| `starredOnly` | `undefined` \| `boolean` |

**Defined in**

[src/client/app.ts:71](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L71)



### ListRunnersRequestParams

Ƭ **ListRunnersRequestParams**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `computeClusterId` | `undefined` \| `string` |
| `minReplicas` | `undefined` \| `number` |
| `modelVersionIdsList` | `undefined` \| `string`[] |
| `nodepoolId` | `undefined` \| `string` |
| `page` | `undefined` \| `number` |

**Defined in**

[src/client/user.ts:24](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L24)



### ListWorkflowsParam

Ƭ **ListWorkflowsParam**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `additionalFieldsList` | `undefined` \| `string`[] |
| `bookmark` | `undefined` \| `boolean` |
| `featuredOnly` | `undefined` \| `boolean` |
| `id` | `undefined` \| `string` |
| `page` | `undefined` \| `number` |
| `query` | `undefined` \| `string` |
| `search` | `undefined` \| `string` |
| `searchTerm` | `undefined` \| `string` |
| `sortAscending` | `undefined` \| `boolean` |
| `sortByCreatedAt` | `undefined` \| `boolean` |
| `sortById` | `undefined` \| `boolean` |
| `sortByModifiedAt` | `undefined` \| `boolean` |
| `sortByStarCount` | `undefined` \| `boolean` |
| `starredOnly` | `undefined` \| `boolean` |

**Defined in**

[src/client/app.ts:69](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/app.ts#L69)


### UserConfig

Ƭ **UserConfig**: `Object`

**Type declaration**

| Name | Type |
| :------ | :------ |
| `appId` | `string` |
| `base` | `undefined` \| `string` |
| `pat` | `string` |
| `rootCertificatesPath` | `undefined` \| `string` |
| `token` | `undefined` \| `string` |
| `ui` | `undefined` \| `string` |
| `userId` | `string` |

**Defined in**

[src/client/user.ts:21](https://github.com/Clarifai/clarifai-nodejs/blob/435d969/src/client/user.ts#L21)
