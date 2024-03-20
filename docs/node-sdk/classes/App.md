[clarifai-nodejs](../README.md) / [Exports](../modules.md) / App

# Class: App

App is a class that provides access to Clarifai API endpoints related to App information.

## Hierarchy

- `Lister`

  ↳ **`App`**

## Table of contents

### Constructors

- [constructor](App.md#constructor)

### Properties

- [appInfo](App.md#appinfo)

### Methods

- [createDataset](App.md#createdataset)
- [createModel](App.md#createmodel)
- [createModule](App.md#createmodule)
- [createWorkflow](App.md#createworkflow)
- [dataset](App.md#dataset)
- [deleteDataset](App.md#deletedataset)
- [deleteModel](App.md#deletemodel)
- [deleteModule](App.md#deletemodule)
- [deleteWorkflow](App.md#deleteworkflow)
- [listConcepts](App.md#listconcepts)
- [listDataSets](App.md#listdatasets)
- [listInstalledModuleVersions](App.md#listinstalledmoduleversions)
- [listModels](App.md#listmodels)
- [listModules](App.md#listmodules)
- [listTrainableModelTypes](App.md#listtrainablemodeltypes)
- [listWorkflows](App.md#listworkflows)
- [model](App.md#model)
- [workflow](App.md#workflow)

## Constructors

### constructor

• **new App**(`config`): [`App`](App.md)

Initializes an App object.

### Example
```

import { App } from "../../src/client/app";

export const app = new App({
  authConfig: {
    pat: process.env.CLARIFAI_PAT!,
    userId: process.env.CLARIFAI_USER_ID!,
    appId: process.env.CLARIFAI_APP_ID!,
  },
});

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`AppConfig`](../modules.md#appconfig) | The configuration object for the App. |

#### Returns

[`App`](App.md)

#### Overrides

Lister.constructor

#### Defined in

[client/app.ts:90](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L90)

## Properties

### appInfo

• `Private` **appInfo**: `App`

#### Defined in

[client/app.ts:81](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L81)

## Methods

### createDataset

▸ **createDataset**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `datasetId` | `string` |
| › `params?` | [`CreateDatasetParam`](../modules.md#createdatasetparam) |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/app.ts:366](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L366)

___

### createModel

▸ **createModel**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modelId` | `string` |
| › `params?` | [`CreateModelParam`](../modules.md#createmodelparam) |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/app.ts:399](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L399)

___

### createModule

▸ **createModule**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `moduleId` | `string` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/app.ts:429](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L429)

___

### createWorkflow

▸ **createWorkflow**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `configFilePath` | `string` | `undefined` |
| › `display?` | `boolean` | `true` |
| › `generateNewId?` | `boolean` | `false` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/app.ts:455](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L455)

___

### dataset

▸ **dataset**(`«destructured»`): `Promise`\<`undefined` \| `AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `datasetId` | `string` |

#### Returns

`Promise`\<`undefined` \| `AsObject`\>

#### Defined in

[client/app.ts:644](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L644)

___

### deleteDataset

▸ **deleteDataset**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `datasetId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/app.ts:664](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L664)

___

### deleteModel

▸ **deleteModel**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modelId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/app.ts:680](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L680)

___

### deleteModule

▸ **deleteModule**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/app.ts:712](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L712)

___

### deleteWorkflow

▸ **deleteWorkflow**(`«destructured»`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `workflowId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/app.ts:696](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L696)

___

### listConcepts

▸ **listConcepts**(`«destructured»`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Defined in

[client/app.ts:338](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L338)

___

### listDataSets

▸ **listDataSets**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the datasets for the app.

### Example
```

import { app } from "./index";

app
  .listDataSets()
  .next()
  .then((list) => {
    const datasets = list.value;
    console.log(datasets);
  });

```

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListDatasetsParam`](../modules.md#listdatasetsparam) |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**`Yields`**

Dataset - Dataset objects for the datasets in the app.

**`Remarks`**

Defaults to 16 per page if pageNo is specified and perPage is not specified.
If both pageNo and perPage are undefined, then lists all the resources.

#### Defined in

[client/app.ts:124](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L124)

___

### listInstalledModuleVersions

▸ **listInstalledModuleVersions**(`«destructured»`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | [`ListInstalledModuleVersionsParam`](../modules.md#listinstalledmoduleversionsparam) |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Defined in

[client/app.ts:303](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L303)

___

### listModels

▸ **listModels**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the available models for the user.

### Example
```

import { app } from "./index";

app
  .listModels()
  .next()
  .then((list) => {
    const models = list.value;
    console.log(models);
  });

```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `onlyInApp?` | `boolean` | `true` |
| › `pageNo?` | `number` | `undefined` |
| › `params?` | [`ListModelsParam`](../modules.md#listmodelsparam) | `{}` |
| › `perPage?` | `number` | `undefined` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Defined in

[client/app.ts:166](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L166)

___

### listModules

▸ **listModules**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `onlyInApp?` | `boolean` |
| › `pageNo?` | `number` |
| › `params?` | [`ListModulesParam`](../modules.md#listmodulesparam) |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

#### Defined in

[client/app.ts:265](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L265)

___

### listTrainableModelTypes

▸ **listTrainableModelTypes**(): `string`[]

#### Returns

`string`[]

#### Defined in

[client/app.ts:362](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L362)

___

### listWorkflows

▸ **listWorkflows**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the available workflows for the user.

### Example
```

import { app } from "./index";

app
  .listWorkflows()
  .next()
  .then((list) => {
    const workflows = list.value;
    console.log(workflows);
  });

```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `{}` |
| › `onlyInApp?` | `boolean` | `true` |
| › `pageNo?` | `number` | `undefined` |
| › `params?` | [`ListWorkflowsParam`](../modules.md#listworkflowsparam) | `{}` |
| › `perPage?` | `number` | `undefined` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**`Yields`**

Workflow - Workflow objects for the workflows in the app.

**`Remarks`**

Defaults to 16 per page if page_no is specified and per_page is not specified.
If both page_no and per_page are undefined, then lists all the resources.

#### Defined in

[client/app.ts:226](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L226)

___

### model

▸ **model**(`«destructured»`): `Promise`\<`undefined` \| `AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modelId` | `string` |
| › `modelVersionId` | `string` |

#### Returns

`Promise`\<`undefined` \| `AsObject`\>

#### Defined in

[client/app.ts:599](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L599)

___

### workflow

▸ **workflow**(`«destructured»`): `Promise`\<`undefined` \| `AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `workflowId` | `string` |

#### Returns

`Promise`\<`undefined` \| `AsObject`\>

#### Defined in

[client/app.ts:624](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/app.ts#L624)
