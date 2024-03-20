[clarifai-nodejs](../README.md) / [Exports](../modules.md) / Input

# Class: Input

Inputs is a class that provides access to Clarifai API endpoints related to Input information.

## Hierarchy

- `Lister`

  ↳ **`Input`**

## Table of contents

### Constructors

- [constructor](Input.md#constructor)

### Methods

- [patchInputs](Input.md#patchinputs)
- [uploadAnnotations](Input.md#uploadannotations)
- [uploadFromBytes](Input.md#uploadfrombytes)
- [uploadFromFile](Input.md#uploadfromfile)
- [uploadFromUrl](Input.md#uploadfromurl)
- [uploadInputs](Input.md#uploadinputs)
- [uploadText](Input.md#uploadtext)
- [getBboxProto](Input.md#getbboxproto)
- [getImageInputsFromFolder](Input.md#getimageinputsfromfolder)
- [getInputFromBytes](Input.md#getinputfrombytes)
- [getInputFromFile](Input.md#getinputfromfile)
- [getInputFromUrl](Input.md#getinputfromurl)
- [getInputsFromCsv](Input.md#getinputsfromcsv)
- [getMaskProto](Input.md#getmaskproto)
- [getMultimodalInput](Input.md#getmultimodalinput)
- [getProto](Input.md#getproto)
- [getTextInput](Input.md#gettextinput)
- [getTextInputsFromFolder](Input.md#gettextinputsfromfolder)

## Constructors

### constructor

• **new Input**(`params`): [`Input`](Input.md)

Initializes an input object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | `Object` | The parameters for the Input object. |
| `params.authConfig?` | `AuthConfig` | - |

#### Returns

[`Input`](Input.md)

#### Overrides

Lister.constructor

#### Defined in

[client/input.ts:62](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L62)

## Methods

### patchInputs

▸ **patchInputs**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `action?` | `string` | `"merge"` |
| › `inputs` | `Input`[] | `undefined` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:924](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L924)

___

### uploadAnnotations

▸ **uploadAnnotations**(`«destructured»`): `Promise`\<`Annotation`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `batchAnnot` | `Annotation`[] | `undefined` |
| › `showLog?` | `boolean` | `true` |

#### Returns

`Promise`\<`Annotation`[]\>

#### Defined in

[client/input.ts:960](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L960)

___

### uploadFromBytes

▸ **uploadFromBytes**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

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

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:872](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L872)

___

### uploadFromFile

▸ **uploadFromFile**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

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

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:837](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L837)

___

### uploadFromUrl

▸ **uploadFromUrl**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

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

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:802](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L802)

___

### uploadInputs

▸ **uploadInputs**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `inputs` | `Input`[] | `undefined` |
| › `showLog?` | `boolean` | `true` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:761](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L761)

___

### uploadText

▸ **uploadText**(`«destructured»`): `Promise`\<`string`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `rawText` | `string` | `undefined` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/input.ts:907](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L907)

___

### getBboxProto

▸ **getBboxProto**(`«destructured»`): `Annotation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bbox` | `number`[] |
| › `inputId` | `string` |
| › `label` | `string` |

#### Returns

`Annotation`

#### Defined in

[client/input.ts:680](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L680)

___

### getImageInputsFromFolder

▸ **getImageInputsFromFolder**(`«destructured»`): `Input`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `folderPath` | `string` | `undefined` |
| › `labels?` | `boolean` | `false` |

#### Returns

`Input`[]

#### Defined in

[client/input.ts:412](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L412)

___

### getInputFromBytes

▸ **getInputFromBytes**(`«destructured»`): `Input`

Creates an input proto from bytes.

#### Parameters

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

#### Returns

`Input`

An `Input` object for the specified input ID.

**`Example`**

```typescript
import { Input } from 'clarifai-nodejs';

const image = new Uint8Array(fs.readFileSync('demo.jpg'));
const video = new Uint8Array(fs.readFileSync('demo.mp4'));
const inputProto = Inputs.getInputFromBytes({
  inputId: 'demo',
  imageBytes: image,
  videoBytes: video,
});
```

#### Defined in

[client/input.ts:203](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L203)

___

### getInputFromFile

▸ **getInputFromFile**(`«destructured»`): `Input`

Create input proto from files.

#### Parameters

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

#### Returns

`Input`

- An Input object for the specified input ID.

**`Example`**

```typescript
import { Input } from 'clarifai-nodejs';

const inputProto = Input.getInputFromFile({
  inputId: 'demo',
  imageFile: 'file_path',
});
```

#### Defined in

[client/input.ts:275](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L275)

___

### getInputFromUrl

▸ **getInputFromUrl**(`«destructured»`): `Input`

Upload input from URL.

#### Parameters

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

#### Returns

`Input`

- Job ID for the upload request.

**`Example`**

```typescript
import { Input } from 'clarifai-nodejs';

const inputJobId = Input.uploadFromUrl({
  inputId: 'demo',
  imageUrl: 'https://samples.clarifai.com/metro-north.jpg',
});
```

#### Defined in

[client/input.ts:347](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L347)

___

### getInputsFromCsv

▸ **getInputsFromCsv**(`«destructured»`): `Promise`\<`Input`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `csvPath` | `string` | `undefined` |
| › `csvType` | `string` | `"raw"` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `inputType` | `string` | `"text"` |
| › `labels` | `boolean` | `true` |

#### Returns

`Promise`\<`Input`[]\>

#### Defined in

[client/input.ts:534](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L534)

___

### getMaskProto

▸ **getMaskProto**(`inputId`, `label`, `polygons`): `Annotation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputId` | `string` |
| `label` | `string` |
| `polygons` | `number`[][][] |

#### Returns

`Annotation`

#### Defined in

[client/input.ts:721](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L721)

___

### getMultimodalInput

▸ **getMultimodalInput**(`«destructured»`): `Input`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `imageBytes?` | ``null`` \| `Uint8Array` | `null` |
| › `imageUrl?` | ``null`` \| `string` | `null` |
| › `inputId` | `string` | `undefined` |
| › `rawText?` | ``null`` \| `string` | `null` |
| › `textBytes?` | ``null`` \| `Uint8Array` | `null` |

#### Returns

`Input`

#### Defined in

[client/input.ts:489](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L489)

___

### getProto

▸ **getProto**(`«destructured»`): `Input`

Create input proto for image data type.

#### Parameters

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

#### Returns

`Input`

- An Input object for the specified input ID.

#### Defined in

[client/input.ts:80](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L80)

___

### getTextInput

▸ **getTextInput**(`«destructured»`): `Input`

Create input proto for text data type from raw text.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId?` | ``null`` \| `string` | `null` |
| › `geoInfo?` | ``null`` \| `AsObject` | `null` |
| › `inputId` | `string` | `undefined` |
| › `labels?` | ``null`` \| `string`[] | `null` |
| › `metadata?` | ``null`` \| `Record`\<`string`, `JavaScriptValue`\> | `null` |
| › `rawText` | `string` | `undefined` |

#### Returns

`Input`

- An Input object for the specified input ID.

**`Example`**

```typescript
import { Input } from 'clarifai-nodejs';

const inputProto = Input.getTextInput({
  inputId: 'demo',
  rawText: 'This is a test',
});
```

#### Defined in

[client/input.ts:463](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L463)

___

### getTextInputsFromFolder

▸ **getTextInputsFromFolder**(`«destructured»`): `Input`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `datasetId` | ``null`` \| `string` | `null` |
| › `folderPath` | `string` | `undefined` |
| › `labels` | `boolean` | `false` |

#### Returns

`Input`[]

#### Defined in

[client/input.ts:649](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/input.ts#L649)
