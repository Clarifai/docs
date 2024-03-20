[clarifai-nodejs](../README.md) / [Exports](../modules.md) / User

# Class: User

User is a class that provides access to Clarifai API endpoints related to user information.

## Hierarchy

- `Lister`

  ↳ **`User`**

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Methods

- [app](User.md#app)
- [createApp](User.md#createapp)
- [createRunner](User.md#createrunner)
- [deleteApp](User.md#deleteapp)
- [deleteRunner](User.md#deleterunner)
- [listApps](User.md#listapps)
- [listRunners](User.md#listrunners)
- [runner](User.md#runner)

## Constructors

### constructor

• **new User**(`authConfig?`): [`User`](User.md)

Initializes an User object with the specified authentication configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `authConfig?` | `AuthConfig` | An object containing the authentication configuration. Defaults to an empty object. |

#### Returns

[`User`](User.md)

#### Overrides

Lister.constructor

#### Defined in

[client/user.ts:43](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L43)

## Methods

### app

▸ **app**(`appId`): `Promise`\<`AsObject`\>

Returns an App object for the specified app ID.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `Object` | The app ID for the app to interact with. |
| `appId.appId` | `string` | - |

#### Returns

`Promise`\<`AsObject`\>

An App object for the specified app ID.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const app = await user.app({ appId: 'app_id' });
```

#### Defined in

[client/user.ts:277](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L277)

___

### createApp

▸ **createApp**(`«destructured»`): `Promise`\<`AsObject`\>

Creates an app for the user.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `appId` | `string` | `undefined` |
| › `baseWorkflow?` | `string` | `"Empty"` |

#### Returns

`Promise`\<`AsObject`\>

An App object for the specified app ID.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const app = await user.createApp({
  appId: "app_id",
  baseWorkflow: "Universal",
});
```

#### Defined in

[client/user.ts:170](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L170)

___

### createRunner

▸ **createRunner**(`«destructured»`): `Promise`\<`AsObject`\>

Creates a runner for the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `labels` | `string`[] |
| › `runnerId` | `string` |

#### Returns

`Promise`\<`AsObject`\>

A runner object for the specified Runner ID.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const runner = await user.createRunner({
  runnerId: "runner_id",
  labels: ["label to link runner"],
  description: "laptop runner",
});
```

#### Defined in

[client/user.ts:227](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L227)

___

### deleteApp

▸ **deleteApp**(`appId`): `Promise`\<`void`\>

Deletes an app for the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `appId` | `Object` | The app ID for the app to delete. |
| `appId.appId` | `string` | - |

#### Returns

`Promise`\<`void`\>

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
await user.deleteApp({ appId: 'app_id' });
```

#### Defined in

[client/user.ts:341](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L341)

___

### deleteRunner

▸ **deleteRunner**(`runnerId`): `Promise`\<`void`\>

Deletes a runner for the user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runnerId` | `Object` | The runner ID to delete. |
| `runnerId.runnerId` | `string` | - |

#### Returns

`Promise`\<`void`\>

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
await user.deleteRunner({ runnerId: 'runner_id' });
```

#### Defined in

[client/user.ts:371](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L371)

___

### listApps

▸ **listApps**(`«destructured»?`): `AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

Lists all the apps for the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | `PaginationRequestParams`\<`AsObject`\> |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`[], `void`, `unknown`\>

**`Yields`**

App objects for the user.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const appsGenerator = user.listApps({
  pageNo: 1,
  perPage: 20,
  params: {
    sortAscending: true,
  },
});
const apps = (await appsGenerator.next()).value;
```

**`Note`**

Defaults to 16 per page if pageNo is specified and perPage is not specified.
If both pageNo and perPage are None, then lists all the resources.

#### Defined in

[client/user.ts:72](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L72)

___

### listRunners

▸ **listRunners**(`«destructured»`): `AsyncGenerator`\<`AsObject`, `void`, `unknown`\>

Lists all the runners for the user.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `pageNo?` | `number` |
| › `params?` | `PaginationRequestParams`\<`AsObject`\> |
| › `perPage?` | `number` |

#### Returns

`AsyncGenerator`\<`AsObject`, `void`, `unknown`\>

**`Yields`**

Runner objects for the user.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const runnersGenerator = user.listRunners({
  pageNo: 1,
  perPage: 20,
  params: {
    sortAscending: true,
  },
});
const runners = (await runnersGenerator.next()).value;
```

**`Note`**

Defaults to 16 per page if pageNo is specified and perPage is not specified.
If both pageNo and perPage are None, then lists all the resources.

#### Defined in

[client/user.ts:127](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L127)

___

### runner

▸ **runner**(`runnerId`): `Promise`\<`AsObject`\>

Returns a Runner object if exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `runnerId` | `Object` | The runner ID to interact with. |
| `runnerId.runnerId` | `string` | - |

#### Returns

`Promise`\<`AsObject`\>

A Runner object for the existing runner ID.

**`Example`**

```typescript
import { User } from 'clarifai-nodejs';
const user = new User(authConfig);
const runner = await user.runner({ runnerId: 'runner_id' });
```

#### Defined in

[client/user.ts:307](https://github.com/Clarifai/clarifai-nodejs/blob/8f77f08/src/client/user.ts#L307)
