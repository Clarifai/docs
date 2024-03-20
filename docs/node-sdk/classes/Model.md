[clarifai-nodejs](../README.md) / [Exports](../modules.md) / Model

# Class: Model

## Hierarchy

- `Lister`

  ↳ **`Model`**

## Table of contents

### Constructors

- [constructor](Model.md#constructor)

### Properties

- [STUB](Model.md#stub)
- [appId](Model.md#appid)
- [authHelper](Model.md#authhelper)
- [base](Model.md#base)
- [defaultPageSize](Model.md#defaultpagesize)
- [id](Model.md#id)
- [metadata](Model.md#metadata)
- [modelInfo](Model.md#modelinfo)
- [modelVersion](Model.md#modelversion)
- [pat](Model.md#pat)
- [token](Model.md#token)
- [trainingParams](Model.md#trainingparams)
- [ui](Model.md#ui)
- [userAppId](Model.md#userappid)
- [userId](Model.md#userid)

### Methods

- [convertStringToTimestamp](Model.md#convertstringtotimestamp)
- [createVersion](Model.md#createversion)
- [deleteVersion](Model.md#deleteversion)
- [getParamInfo](Model.md#getparaminfo)
- [getParams](Model.md#getparams)
- [grpcRequest](Model.md#grpcrequest)
- [listPagesData](Model.md#listpagesdata)
- [listPagesGenerator](Model.md#listpagesgenerator)
- [listTrainingTemplates](Model.md#listtrainingtemplates)
- [listVersions](Model.md#listversions)
- [loadInfo](Model.md#loadinfo)
- [overrideModelVersion](Model.md#overridemodelversion)
- [predict](Model.md#predict)
- [predictByBytes](Model.md#predictbybytes)
- [predictByFilepath](Model.md#predictbyfilepath)
- [predictByUrl](Model.md#predictbyurl)
- [updateParams](Model.md#updateparams)

## Constructors

### constructor

• **new Model**(`«destructured»`): [`Model`](Model.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | \{ `authConfig?`: `AuthConfig` ; `modelId?`: `undefined` ; `modelVersion?`: \{ `id`: `string`  } ; `url`: `ClarifaiUrl`  } \| \{ `authConfig?`: `AuthConfig` ; `modelId`: `string` ; `modelVersion?`: \{ `id`: `string`  } ; `url?`: `undefined`  } |

#### Returns

[`Model`](Model.md)

#### Overrides

Lister.constructor

#### Defined in

[client/model.ts:57](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L57)

## Properties

### STUB

• `Protected` **STUB**: `V2Stub`

#### Inherited from

Lister.STUB

#### Defined in

[client/base.ts:26](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L26)

___

### appId

• `Private` **appId**: `string`

#### Defined in

[client/model.ts:47](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L47)

___

### authHelper

• `Protected` **authHelper**: `ClarifaiAuthHelper`

#### Inherited from

Lister.authHelper

#### Defined in

[client/base.ts:25](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L25)

___

### base

• `Protected` **base**: `string`

#### Inherited from

Lister.base

#### Defined in

[client/base.ts:30](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L30)

___

### defaultPageSize

• **defaultPageSize**: `number`

#### Inherited from

Lister.defaultPageSize

#### Defined in

[client/lister.ts:9](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/lister.ts#L9)

___

### id

• `Private` **id**: `string`

#### Defined in

[client/model.ts:52](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L52)

___

### metadata

• `Protected` **metadata**: [`string`, `string`][]

#### Inherited from

Lister.metadata

#### Defined in

[client/base.ts:27](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L27)

___

### modelInfo

• `Private` **modelInfo**: `Model`

#### Defined in

[client/model.ts:54](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L54)

___

### modelVersion

• `Private` **modelVersion**: `undefined` \| \{ `id`: `string`  }

#### Defined in

[client/model.ts:53](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L53)

___

### pat

• `Protected` **pat**: `string`

#### Inherited from

Lister.pat

#### Defined in

[client/base.ts:28](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L28)

___

### token

• `Private` **token**: `undefined` \| `string`

#### Defined in

[client/model.ts:49](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L49)

___

### trainingParams

• `Private` **trainingParams**: `Record`\<`string`, `unknown`\>

#### Defined in

[client/model.ts:55](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L55)

___

### ui

• `Private` **ui**: `undefined` \| `string`

#### Defined in

[client/model.ts:51](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L51)

___

### userAppId

• `Protected` **userAppId**: `UserAppIDSet`

#### Inherited from

Lister.userAppId

#### Defined in

[client/base.ts:29](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L29)

___

### userId

• `Private` **userId**: `string`

#### Defined in

[client/model.ts:46](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L46)

## Methods

### convertStringToTimestamp

▸ **convertStringToTimestamp**(`dateStr`): `Timestamp`

Converts a string to a Timestamp object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dateStr` | `string` | The string to convert. |

#### Returns

`Timestamp`

A Timestamp object representing the given date string.

#### Inherited from

Lister.convertStringToTimestamp

#### Defined in

[client/base.ts:95](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L95)

___

### createVersion

▸ **createVersion**(`args`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Partial`\<`AsObject`\> |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/model.ts:357](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L357)

___

### deleteVersion

▸ **deleteVersion**(`versionId`): `Promise`\<`void`\>

Deletes a model version for the Model.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `versionId` | `string` | The version ID to delete. |

#### Returns

`Promise`\<`void`\>

**`Example`**

```ts
const model = new Model({ modelId: 'model_id', userId: 'user_id', appId: 'app_id' });
model.deleteVersion('version_id');
```

#### Defined in

[client/model.ts:337](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L337)

___

### getParamInfo

▸ **getParamInfo**(`param`): `Promise`\<`Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `string` |

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Defined in

[client/model.ts:273](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L273)

___

### getParams

▸ **getParams**(`template?`, `saveTo?`): `Promise`\<`Record`\<`string`, `any`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `template` | ``null`` \| `string` | `null` |
| `saveTo` | `string` | `"params.yaml"` |

#### Returns

`Promise`\<`Record`\<`string`, `any`\>\>

#### Defined in

[client/model.ts:180](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L180)

___

### grpcRequest

▸ **grpcRequest**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`): `Promise`\<`TResponse`\>

Makes a gRPC request to the API.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> |
| `requestData` | `TRequest` |

#### Returns

`Promise`\<`TResponse`\>

A Promise resolving to the result of the gRPC method call.

#### Inherited from

Lister.grpcRequest

#### Defined in

[client/base.ts:72](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/base.ts#L72)

___

### listPagesData

▸ **listPagesData**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`, `pageNo?`, `perPage?`): `Promise`\<`TResponse`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> | `undefined` |
| `requestData` | `TRequest` | `undefined` |
| `pageNo` | `number` | `1` |
| `perPage` | `number` | `undefined` |

#### Returns

`Promise`\<`TResponse`\>

#### Inherited from

Lister.listPagesData

#### Defined in

[client/lister.ts:86](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/lister.ts#L86)

___

### listPagesGenerator

▸ **listPagesGenerator**\<`TRequest`, `TResponseObject`, `TResponse`\>(`endpoint`, `requestData`, `pageNo?`, `perPage?`): `AsyncGenerator`\<`TResponse`, `void`, `unknown`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TRequest` | extends `Message` |
| `TResponseObject` | extends `Object` |
| `TResponse` | extends `Object` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `endpoint` | (`request`: `TRequest`, `metadata`: `Metadata`, `options`: `Partial`\<`CallOptions`\>) => `Promise`\<`TResponse`\> | `undefined` |
| `requestData` | `TRequest` | `undefined` |
| `pageNo` | `number` | `1` |
| `perPage` | `number` | `undefined` |

#### Returns

`AsyncGenerator`\<`TResponse`, `void`, `unknown`\>

#### Inherited from

Lister.listPagesGenerator

#### Defined in

[client/lister.ts:22](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/lister.ts#L22)

___

### listTrainingTemplates

▸ **listTrainingTemplates**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

#### Defined in

[client/model.ts:147](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L147)

___

### listVersions

▸ **listVersions**(`«destructured»`): `AsyncGenerator`\<`AsObject`, `void`, `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`, `void`, `void`\>

#### Defined in

[client/model.ts:388](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L388)

___

### loadInfo

▸ **loadInfo**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/model.ts:114](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L114)

___

### overrideModelVersion

▸ **overrideModelVersion**(`«destructured»`): `void`

Overrides the model version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `outputConfig?` | `OutputConfig` |

#### Returns

`void`

#### Defined in

[client/model.ts:604](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L604)

___

### predict

▸ **predict**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputs` | `Input`[] |
| › `outputConfig?` | `OutputConfig` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/model.ts:416](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L416)

___

### predictByBytes

▸ **predictByBytes**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputBytes` | `Buffer` |
| › `inputType` | ``"text"`` \| ``"image"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/model.ts:545](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L545)

___

### predictByFilepath

▸ **predictByFilepath**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filepath` | `string` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputType` | ``"text"`` \| ``"image"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/model.ts:520](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L520)

___

### predictByUrl

▸ **predictByUrl**(`«destructured»`): `Promise`\<`AsObject`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `inferenceParams?` | `Record`\<`string`, `JavaScriptValue`\> |
| › `inputType` | ``"text"`` \| ``"image"`` \| ``"video"`` \| ``"audio"`` |
| › `outputConfig?` | `OutputConfig` |
| › `url` | `string` |

#### Returns

`Promise`\<`AsObject`\>

#### Defined in

[client/model.ts:487](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L487)

___

### updateParams

▸ **updateParams**(`modelParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelParams` | `Record`\<`string`, `unknown`\> |

#### Returns

`void`

#### Defined in

[client/model.ts:247](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/model.ts#L247)
