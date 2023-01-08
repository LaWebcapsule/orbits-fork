[@wbce/orbits](../README.md) / [Exports](../modules.md) / RevertAction

# Class: RevertAction<ActionToRevert\>

Action is the class to structure actions
Extends this class to build new actions behaviours.
You can read more here :

## Type parameters

| Name | Type |
| :------ | :------ |
| `ActionToRevert` | extends [`Action`](Action.md) |

## Hierarchy

- [`Transaction`](Transaction.md)

  ↳ **`RevertAction`**

## Table of contents

### Constructors

- [constructor](RevertAction.md#constructor)

### Properties

- [IArgument](RevertAction.md#iargument)
- [IBag](RevertAction.md#ibag)
- [IResult](RevertAction.md#iresult)
- [RollBackAction](RevertAction.md#rollbackaction)
- [RollBackTransaction](RevertAction.md#rollbacktransaction)
- [app](RevertAction.md#app)
- [cronDefaultSettings](RevertAction.md#crondefaultsettings)
- [dBSession](RevertAction.md#dbsession)
- [dbDoc](RevertAction.md#dbdoc)
- [defaultDelay](RevertAction.md#defaultdelay)
- [defaultDelays](RevertAction.md#defaultdelays)
- [docsToSaveAtStepStart](RevertAction.md#docstosaveatstepstart)
- [executor](RevertAction.md#executor)
- [isInitialised](RevertAction.md#isinitialised)
- [oldAction](RevertAction.md#oldaction)
- [steps](RevertAction.md#steps)
- [permanentRef](RevertAction.md#permanentref)

### Accessors

- [\_id](RevertAction.md#_id)
- [argument](RevertAction.md#argument)
- [bag](RevertAction.md#bag)
- [cronActivity](RevertAction.md#cronactivity)
- [isRollBackPossible](RevertAction.md#isrollbackpossible)
- [repeat](RevertAction.md#repeat)
- [result](RevertAction.md#result)

### Methods

- [\_resume](RevertAction.md#_resume)
- [activityLogs](RevertAction.md#activitylogs)
- [catch](RevertAction.md#catch)
- [changeState](RevertAction.md#changestate)
- [checkPoint](RevertAction.md#checkpoint)
- [createRollBackTransaction](RevertAction.md#createrollbacktransaction)
- [declareActionEnd](RevertAction.md#declareactionend)
- [declareActionStart](RevertAction.md#declareactionstart)
- [define](RevertAction.md#define)
- [endStep](RevertAction.md#endstep)
- [finally](RevertAction.md#finally)
- [getLogs](RevertAction.md#getlogs)
- [getNextStep](RevertAction.md#getnextstep)
- [goTo](RevertAction.md#goto)
- [goToStep](RevertAction.md#gotostep)
- [init](RevertAction.md#init)
- [initialisation](RevertAction.md#initialisation)
- [internalLog](RevertAction.md#internallog)
- [internalLogError](RevertAction.md#internallogerror)
- [isActionActive](RevertAction.md#isactionactive)
- [main](RevertAction.md#main)
- [next](RevertAction.md#next)
- [onErrorGoTo](RevertAction.md#onerrorgoto)
- [onStateNotification](RevertAction.md#onstatenotification)
- [onSuccessGoTo](RevertAction.md#onsuccessgoto)
- [registerDocToSaveAtStepStart](RevertAction.md#registerdoctosaveatstepstart)
- [resume](RevertAction.md#resume)
- [resyncWithDb](RevertAction.md#resyncwithdb)
- [rollBack](RevertAction.md#rollback)
- [rollBackWatcher](RevertAction.md#rollbackwatcher)
- [rollback](RevertAction.md#rollback-1)
- [save](RevertAction.md#save)
- [setArgument](RevertAction.md#setargument)
- [setFilter](RevertAction.md#setfilter)
- [setRepeat](RevertAction.md#setrepeat)
- [setResult](RevertAction.md#setresult)
- [startStep](RevertAction.md#startstep)
- [watcher](RevertAction.md#watcher)
- [constructFromDb](RevertAction.md#constructfromdb)
- [reject](RevertAction.md#reject)
- [resolve](RevertAction.md#resolve)

## Constructors

### constructor

• **new RevertAction**<`ActionToRevert`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ActionToRevert` | extends [`Action`](Action.md)<`ActionToRevert`\> |

#### Inherited from

[Transaction](Transaction.md).[constructor](Transaction.md#constructor)

#### Defined in

[src/transaction-manager.ts:46](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L46)

## Properties

### IArgument

• **IArgument**: `Object`

Interface of the argument of the action

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actionId` | `string` |

#### Overrides

[Transaction](Transaction.md).[IArgument](Transaction.md#iargument)

#### Defined in

[src/transaction-manager.ts:462](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L462)

___

### IBag

• **IBag**: `Object`

Interface of the bag of the action

#### Type declaration

| Name | Type |
| :------ | :------ |
| `actions` | { `[key: string]`: { `result`: `any` ; `state`: [`ActionState`](../enums/ActionState.md)  };  } |
| `currentStepIndex?` | `number` |
| `isRollBackPossible` | `boolean` |
| `nTimesCurrentStep` | `number` |
| `oldResult` | `any` |
| `stepsHistory` | `number`[] |

#### Inherited from

[Transaction](Transaction.md).[IBag](Transaction.md#ibag)

#### Defined in

[src/transaction-manager.ts:32](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L32)

___

### IResult

• **IResult**: `Object`

Interface of the result of the action

#### Inherited from

[Transaction](Transaction.md).[IResult](Transaction.md#iresult)

#### Defined in

[src/action-manager.ts:89](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L89)

___

### RollBackAction

• **RollBackAction**: typeof [`Action`](Action.md) = `RollBackAction`

The action that rollback this action.

#### Inherited from

[Transaction](Transaction.md).[RollBackAction](Transaction.md#rollbackaction)

#### Defined in

[src/action-manager.ts:666](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L666)

___

### RollBackTransaction

• **RollBackTransaction**: typeof [`RevertTransaction`](RevertTransaction.md) = `RevertTransaction`

#### Inherited from

[Transaction](Transaction.md).[RollBackTransaction](Transaction.md#rollbacktransaction)

#### Defined in

[src/transaction-manager.ts:386](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L386)

___

### app

• **app**: [`ActionApp`](ActionApp.md)

#### Inherited from

[Transaction](Transaction.md).[app](Transaction.md#app)

#### Defined in

[src/action-manager.ts:32](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L32)

___

### cronDefaultSettings

• **cronDefaultSettings**: `Object`

Configure the frequence in which a cron will cause the

**`Link`**

Action.resume method.
You can also dinamically modify the dbDoc.cronActivity property to modify the call to a cron.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `activityFrequence` | `number` |

#### Inherited from

[Transaction](Transaction.md).[cronDefaultSettings](Transaction.md#crondefaultsettings)

#### Defined in

[src/action-manager.ts:66](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L66)

___

### dBSession

• `Optional` **dBSession**: `ClientSession`

#### Inherited from

[Transaction](Transaction.md).[dBSession](Transaction.md#dbsession)

#### Defined in

[src/transaction-manager.ts:26](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L26)

___

### dbDoc

• **dbDoc**: [`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<{ `actionId`: `string`  }, { `actions`: { `[key: string]`: { `result`: `any` ; `state`: [`ActionState`](../enums/ActionState.md)  };  } ; `currentStepIndex?`: `number` ; `isRollBackPossible`: `boolean` ; `nTimesCurrentStep`: `number` ; `oldResult`: `any` ; `stepsHistory`: `number`[]  }, {}\>

The database document of this action.

#### Inherited from

[Transaction](Transaction.md).[dbDoc](Transaction.md#dbdoc)

#### Defined in

[src/action-manager.ts:96](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L96)

___

### defaultDelay

• **defaultDelay**: `number` = `Infinity`

Shorcut to

**`Link`**

Action.defaultDelays[ActionState.IN_PROGRESS]

#### Inherited from

[Transaction](Transaction.md).[defaultDelay](Transaction.md#defaultdelay)

#### Defined in

[src/transaction-manager.ts:23](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L23)

___

### defaultDelays

• **defaultDelays**: `Object`

For the state ActionState.EXECUTING_MAIN and ActionState.IN_PROGRESS,
this object configure the time after which, if no change happened, an action is considered in error. 
For example, an action can only be in the ActionState.IN_PROGRESS state for as long as 
defaultDelays[ActionState.IN_PROGRESS] time.

**`Default Value`**

You should modify this if your actions have longer timeouts.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `1` | `number` |
| `2` | `number` |

#### Inherited from

[Transaction](Transaction.md).[defaultDelays](Transaction.md#defaultdelays)

#### Defined in

[src/action-manager.ts:54](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L54)

___

### docsToSaveAtStepStart

• **docsToSaveAtStepStart**: `Document`<`any`, `any`, `any`\>[] = `[]`

#### Inherited from

[Transaction](Transaction.md).[docsToSaveAtStepStart](Transaction.md#docstosaveatstepstart)

#### Defined in

[src/transaction-manager.ts:28](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L28)

___

### executor

• `Optional` **executor**: [`Executor`](Executor.md)

Specify an executor in which all actions of this class will run.

#### Inherited from

[Transaction](Transaction.md).[executor](Transaction.md#executor)

#### Defined in

[src/action-manager.ts:30](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L30)

___

### isInitialised

• **isInitialised**: `boolean` = `false`

#### Inherited from

[Transaction](Transaction.md).[isInitialised](Transaction.md#isinitialised)

#### Defined in

[src/action-manager.ts:347](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L347)

___

### oldAction

• **oldAction**: `ActionToRevert`

#### Defined in

[src/transaction-manager.ts:466](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L466)

___

### steps

• **steps**: [`Step`](../interfaces/Step.md)[] = `[]`

#### Inherited from

[Transaction](Transaction.md).[steps](Transaction.md#steps)

#### Defined in

[src/transaction-manager.ts:30](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L30)

___

### permanentRef

▪ `Static` **permanentRef**: `string`

The id of the action we store in database.
This should be a permanent id that designates your instance.
See :

#### Inherited from

[Transaction](Transaction.md).[permanentRef](Transaction.md#permanentref)

#### Defined in

[src/action-manager.ts:25](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L25)

## Accessors

### \_id

• `get` **_id**(): `this`[``"dbDoc"``][``"_id"``]

#### Returns

`this`[``"dbDoc"``][``"_id"``]

#### Inherited from

Transaction.\_id

#### Defined in

[src/action-manager.ts:143](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L143)

___

### argument

• `get` **argument**(): `this`[``"dbDoc"``][``"argument"``]

#### Returns

`this`[``"dbDoc"``][``"argument"``]

#### Inherited from

Transaction.argument

#### Defined in

[src/action-manager.ts:107](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L107)

• `set` **argument**(`argument`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `argument` | `this`[``"dbDoc"``][``"argument"``] |

#### Returns

`void`

#### Inherited from

Transaction.argument

#### Defined in

[src/action-manager.ts:111](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L111)

___

### bag

• `get` **bag**(): `this`[``"dbDoc"``][``"bag"``]

#### Returns

`this`[``"dbDoc"``][``"bag"``]

#### Inherited from

Transaction.bag

#### Defined in

[src/action-manager.ts:98](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L98)

• `set` **bag**(`bag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bag` | `this`[``"dbDoc"``][``"bag"``] |

#### Returns

`void`

#### Inherited from

Transaction.bag

#### Defined in

[src/action-manager.ts:102](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L102)

___

### cronActivity

• `get` **cronActivity**(): `this`[``"dbDoc"``][``"cronActivity"``]

#### Returns

`this`[``"dbDoc"``][``"cronActivity"``]

#### Inherited from

Transaction.cronActivity

#### Defined in

[src/action-manager.ts:134](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L134)

• `set` **cronActivity**(`cronActivity`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cronActivity` | `this`[``"dbDoc"``][``"cronActivity"``] |

#### Returns

`void`

#### Inherited from

Transaction.cronActivity

#### Defined in

[src/action-manager.ts:138](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L138)

___

### isRollBackPossible

• `get` **isRollBackPossible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Transaction.isRollBackPossible

#### Defined in

[src/transaction-manager.ts:372](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L372)

___

### repeat

• `get` **repeat**(): `this`[``"dbDoc"``][``"repeat"``]

#### Returns

`this`[``"dbDoc"``][``"repeat"``]

#### Inherited from

Transaction.repeat

#### Defined in

[src/action-manager.ts:125](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L125)

• `set` **repeat**(`repeat`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `repeat` | `this`[``"dbDoc"``][``"repeat"``] |

#### Returns

`void`

#### Inherited from

Transaction.repeat

#### Defined in

[src/action-manager.ts:129](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L129)

___

### result

• `get` **result**(): `this`[``"dbDoc"``][``"result"``]

#### Returns

`this`[``"dbDoc"``][``"result"``]

#### Inherited from

Transaction.result

#### Defined in

[src/action-manager.ts:116](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L116)

• `set` **result**(`result`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `this`[``"dbDoc"``][``"result"``] |

#### Returns

`void`

#### Inherited from

Transaction.result

#### Defined in

[src/action-manager.ts:120](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L120)

## Methods

### \_resume

▸ **_resume**(): `any`

The function resumes the action by calling the appropriate function depending on the current
state of the action. It doesn't take into account the executor.

#### Returns

`any`

A promise. You can not rely on this to know when an action is finished.

#### Inherited from

[Transaction](Transaction.md).[_resume](Transaction.md#_resume)

#### Defined in

[src/action-manager.ts:438](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L438)

___

### activityLogs

▸ **activityLogs**(`options`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `any` |

#### Returns

`string`[]

#### Inherited from

[Transaction](Transaction.md).[activityLogs](Transaction.md#activitylogs)

#### Defined in

[src/action-manager.ts:562](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L562)

___

### catch

▸ **catch**(`cb`, `opts?`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (...`args`: `any`[]) => `void` \| [`Action`](Action.md) \| [`Action`](Action.md)[] \| `Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\> |
| `opts?` | `Object` |
| `opts.retry` | `number` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[catch](Transaction.md#catch)

#### Defined in

[src/transaction-manager.ts:60](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L60)

___

### changeState

▸ **changeState**(`actionState`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `actionState` | [`ActionState`](../enums/ActionState.md) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Transaction](Transaction.md).[changeState](Transaction.md#changestate)

#### Defined in

[src/action-manager.ts:479](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L479)

___

### checkPoint

▸ **checkPoint**(`name`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[checkPoint](Transaction.md#checkpoint)

#### Defined in

[src/transaction-manager.ts:124](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L124)

___

### createRollBackTransaction

▸ **createRollBackTransaction**(): [`Transaction`](Transaction.md)

#### Returns

[`Transaction`](Transaction.md)

The transaction that wait for the end of this action if needed and then rollback this action.

#### Inherited from

[Transaction](Transaction.md).[createRollBackTransaction](Transaction.md#createrollbacktransaction)

#### Defined in

[src/action-manager.ts:674](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L674)

___

### declareActionEnd

▸ **declareActionEnd**(`dbDoc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbDoc` | [`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<`any`, `any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[declareActionEnd](Transaction.md#declareactionend)

#### Defined in

[src/transaction-manager.ts:175](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L175)

___

### declareActionStart

▸ **declareActionStart**(`dbDoc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dbDoc` | [`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<`any`, `any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[declareActionStart](Transaction.md#declareactionstart)

#### Defined in

[src/transaction-manager.ts:162](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L162)

___

### define

▸ **define**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Overrides

[Transaction](Transaction.md).[define](Transaction.md#define)

#### Defined in

[src/transaction-manager.ts:478](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L478)

___

### endStep

▸ **endStep**(): `Promise`<`ActionState`\>

#### Returns

`Promise`<`ActionState`\>

#### Inherited from

[Transaction](Transaction.md).[endStep](Transaction.md#endstep)

#### Defined in

[src/transaction-manager.ts:288](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L288)

___

### finally

▸ **finally**(`cb`, `opts?`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (...`args`: `any`[]) => `void` \| [`Action`](Action.md) \| [`Action`](Action.md)[] \| `Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\> |
| `opts?` | `Object` |
| `opts.retry` | `number` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[finally](Transaction.md#finally)

#### Defined in

[src/transaction-manager.ts:69](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L69)

___

### getLogs

▸ **getLogs**(`options?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.endTime?` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

[Transaction](Transaction.md).[getLogs](Transaction.md#getlogs)

#### Defined in

[src/action-manager.ts:566](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L566)

___

### getNextStep

▸ **getNextStep**(): `Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\>

#### Returns

`Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\>

#### Inherited from

[Transaction](Transaction.md).[getNextStep](Transaction.md#getnextstep)

#### Defined in

[src/transaction-manager.ts:186](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L186)

___

### goTo

▸ **goTo**(`name`, `onState`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `onState` | [`ActionState`](../enums/ActionState.md) |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[goTo](Transaction.md#goto)

#### Defined in

[src/transaction-manager.ts:140](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L140)

___

### goToStep

▸ **goToStep**(`name`): [`ResolveAction`](ResolveAction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`ResolveAction`](ResolveAction.md)

#### Inherited from

[Transaction](Transaction.md).[goToStep](Transaction.md#gotostep)

#### Defined in

[src/transaction-manager.ts:132](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L132)

___

### init

▸ **init**(): `Promise`<`any`\>

Initialize the action from the action stored in the database.

**`Example`**

```ts
In order to not store secrets in the database, you can set a vault id in the argument and retrieve the secret at the initialization of the action
```

**`Example`**

```ts
You cannot store class object on the database. If your action use complex object, they can be initialized here
```

#### Returns

`Promise`<`any`\>

#### Overrides

[Transaction](Transaction.md).[init](Transaction.md#init)

#### Defined in

[src/transaction-manager.ts:468](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L468)

___

### initialisation

▸ **initialisation**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[Transaction](Transaction.md).[initialisation](Transaction.md#initialisation)

#### Defined in

[src/transaction-manager.ts:306](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L306)

___

### internalLog

▸ **internalLog**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[internalLog](Transaction.md#internallog)

#### Defined in

[src/action-manager.ts:607](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L607)

___

### internalLogError

▸ **internalLogError**(`err`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[internalLogError](Transaction.md#internallogerror)

#### Defined in

[src/action-manager.ts:616](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L616)

___

### isActionActive

▸ **isActionActive**(`action`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

`boolean`

#### Inherited from

[Transaction](Transaction.md).[isActionActive](Transaction.md#isactionactive)

#### Defined in

[src/transaction-manager.ts:158](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L158)

___

### main

▸ **main**(): `Promise`<`unknown`\>

This method should launched the main action processus 
It is called only one time.
It returns a state value.

#### Returns

`Promise`<`unknown`\>

#### Inherited from

[Transaction](Transaction.md).[main](Transaction.md#main)

#### Defined in

[src/transaction-manager.ts:319](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L319)

___

### next

▸ **next**(`cb`, `opts?`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (...`args`: `any`[]) => `void` \| [`Action`](Action.md) \| [`Action`](Action.md)[] \| `Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\> |
| `opts?` | `Object` |
| `opts.retry` | `number` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[next](Transaction.md#next)

#### Defined in

[src/transaction-manager.ts:51](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L51)

___

### onErrorGoTo

▸ **onErrorGoTo**(`name`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[onErrorGoTo](Transaction.md#onerrorgoto)

#### Defined in

[src/transaction-manager.ts:153](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L153)

___

### onStateNotification

▸ **onStateNotification**(`actionState?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `actionState` | [`ActionState`](../enums/ActionState.md) | `ActionState.UNKNOW` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[Transaction](Transaction.md).[onStateNotification](Transaction.md#onstatenotification)

#### Defined in

[src/action-manager.ts:488](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L488)

___

### onSuccessGoTo

▸ **onSuccessGoTo**(`name`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[onSuccessGoTo](Transaction.md#onsuccessgoto)

#### Defined in

[src/transaction-manager.ts:148](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L148)

___

### registerDocToSaveAtStepStart

▸ **registerDocToSaveAtStepStart**(`doc`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `doc` | `Document`<`any`, `any`, `any`\> |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[registerDocToSaveAtStepStart](Transaction.md#registerdoctosaveatstepstart)

#### Defined in

[src/transaction-manager.ts:302](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L302)

___

### resume

▸ **resume**(): `Promise`<`unknown`\>

The function resumes the action by calling the appropriate executor if needed and then by calling the appropriate function depending on the current
state of the action

#### Returns

`Promise`<`unknown`\>

A promise. You can not rely on this to know when an action is finished.

#### Inherited from

[Transaction](Transaction.md).[resume](Transaction.md#resume)

#### Defined in

[src/action-manager.ts:415](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L415)

___

### resyncWithDb

▸ **resyncWithDb**(): `Promise`<`void`\>

This function will update the current instance of the model with the latest data from the
database

#### Returns

`Promise`<`void`\>

A promise that resolves when the last document version has be loaded

#### Inherited from

[Transaction](Transaction.md).[resyncWithDb](Transaction.md#resyncwithdb)

#### Defined in

[src/action-manager.ts:213](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L213)

___

### rollBack

▸ **rollBack**(): `Promise`<[`ActionState`](../enums/ActionState.md)\>

Shortcut to configure a rollback. Will be encapsulated in a larger action

#### Returns

`Promise`<[`ActionState`](../enums/ActionState.md)\>

#### Inherited from

[Transaction](Transaction.md).[rollBack](Transaction.md#rollback)

#### Defined in

[src/action-manager.ts:644](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L644)

___

### rollBackWatcher

▸ **rollBackWatcher**(): `Promise`<[`UNKNOW`](../enums/ActionState.md#unknow) \| [`SUCCESS`](../enums/ActionState.md#success)\>

Shortcut to configure the watcher of the rollback Action

#### Returns

`Promise`<[`UNKNOW`](../enums/ActionState.md#unknow) \| [`SUCCESS`](../enums/ActionState.md#success)\>

#### Inherited from

[Transaction](Transaction.md).[rollBackWatcher](Transaction.md#rollbackwatcher)

#### Defined in

[src/action-manager.ts:652](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L652)

___

### rollback

▸ **rollback**(`cb`, `opts?`): [`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (...`args`: `any`[]) => `void` \| [`Action`](Action.md) \| [`Action`](Action.md)[] \| `Promise`<`void` \| [`Action`](Action.md) \| [`Action`](Action.md)[]\> |
| `opts?` | `Object` |
| `opts.retry` | `number` |

#### Returns

[`RevertAction`](RevertAction.md)<`ActionToRevert`\>

#### Inherited from

[Transaction](Transaction.md).[rollback](Transaction.md#rollback-1)

#### Defined in

[src/transaction-manager.ts:115](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L115)

___

### save

▸ **save**(): `Promise`<[`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<{ `actionId`: `string`  }, { `actions`: { `[key: string]`: { `result`: `any` ; `state`: [`ActionState`](../enums/ActionState.md)  };  } ; `currentStepIndex?`: `number` ; `isRollBackPossible`: `boolean` ; `nTimesCurrentStep`: `number` ; `oldResult`: `any` ; `stepsHistory`: `number`[]  }, {}\>\>

#### Returns

`Promise`<[`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<{ `actionId`: `string`  }, { `actions`: { `[key: string]`: { `result`: `any` ; `state`: [`ActionState`](../enums/ActionState.md)  };  } ; `currentStepIndex?`: `number` ; `isRollBackPossible`: `boolean` ; `nTimesCurrentStep`: `number` ; `oldResult`: `any` ; `stepsHistory`: `number`[]  }, {}\>\>

#### Inherited from

[Transaction](Transaction.md).[save](Transaction.md#save)

#### Defined in

[src/action-manager.ts:147](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L147)

___

### setArgument

▸ **setArgument**(`args`): `void`

It takes an object of type `IArgument` and sets the `argument` 
that will be stored in the database.
Once set, the argument of an action should not be modified.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | `Object` | The arguments that you want to set. |
| `args.actionId` | `string` | - |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[setArgument](Transaction.md#setargument)

#### Defined in

[src/action-manager.ts:296](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L296)

___

### setFilter

▸ **setFilter**(`filter`): `void`

To make filtering easier, you can pass filter to an action.
This filters are stored on the database with the `filter` property and allow you to search for 
an action or a group of actions

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | `Object` |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[setFilter](Transaction.md#setfilter)

#### Defined in

[src/action-manager.ts:320](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L320)

___

### setRepeat

▸ **setRepeat**(`opts`): `void`

Configure the number of times an action is repeated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.4?` | `number` |
| `opts.5?` | `number` |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[setRepeat](Transaction.md#setrepeat)

#### Defined in

[src/action-manager.ts:306](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L306)

___

### setResult

▸ **setResult**(`result`): `void`

Set the result of the action.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `Object` |

#### Returns

`void`

#### Inherited from

[Transaction](Transaction.md).[setResult](Transaction.md#setresult)

#### Defined in

[src/action-manager.ts:330](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L330)

___

### startStep

▸ **startStep**(): `Promise`<`unknown`\>

#### Returns

`Promise`<`unknown`\>

#### Inherited from

[Transaction](Transaction.md).[startStep](Transaction.md#startstep)

#### Defined in

[src/transaction-manager.ts:228](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L228)

___

### watcher

▸ **watcher**(): `Promise`<`ActionState`\>

This method should calculate the current state of the action.
It is called :
- potentially many times, when the action is in IN_PROGRESS state
- once time, if the action is in EXECUTING_MAIN state and the executing_main delay has expired

#### Returns

`Promise`<`ActionState`\>

#### Inherited from

[Transaction](Transaction.md).[watcher](Transaction.md#watcher)

#### Defined in

[src/transaction-manager.ts:334](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/transaction-manager.ts#L334)

___

### constructFromDb

▸ `Static` **constructFromDb**(`actionDb`): [`Action`](Action.md)

Permit to construct an action from a document stored in the database.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `actionDb` | [`ActionSchemaInterface`](../interfaces/ActionSchemaInterface.md)<`any`, `any`, `any`\> | a document coming from the database |

#### Returns

[`Action`](Action.md)

an action for which dbDoc property is equal to actionDb

#### Inherited from

[Transaction](Transaction.md).[constructFromDb](Transaction.md#constructfromdb)

#### Defined in

[src/action-manager.ts:200](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L200)

___

### reject

▸ `Static` **reject**(`result?`): [`RejectAction`](RejectAction.md)

`static reject(result?){`

The above function is a static function that returns a new RejectAction object. The function
takes an optional parameter called result

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result?` | `any` | The result of the action. |

#### Returns

[`RejectAction`](RejectAction.md)

A new instance of the RejectAction class.

#### Inherited from

[Transaction](Transaction.md).[reject](Transaction.md#reject)

#### Defined in

[src/action-manager.ts:244](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L244)

___

### resolve

▸ `Static` **resolve**(`result?`): [`ResolveAction`](ResolveAction.md)

It returns a new ResolveAction object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result?` | `any` | The result of the action. |

#### Returns

[`ResolveAction`](ResolveAction.md)

A new instance of the ResolveAction class.

#### Inherited from

[Transaction](Transaction.md).[resolve](Transaction.md#resolve)

#### Defined in

[src/action-manager.ts:230](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/action-manager.ts#L230)