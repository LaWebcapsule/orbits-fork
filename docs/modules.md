[@wbce/orbits](README.md) / Exports

# @wbce/orbits

## Table of contents

### Enumerations

- [ActionState](enums/ActionState.md)

### Classes

- [Action](classes/Action.md)
- [ActionApp](classes/ActionApp.md)
- [ActionCron](classes/ActionCron.md)
- [CoreActionApp](classes/CoreActionApp.md)
- [Executor](classes/Executor.md)
- [RejectAction](classes/RejectAction.md)
- [ResolveAction](classes/ResolveAction.md)
- [RevertAction](classes/RevertAction.md)
- [RevertWorkflow](classes/RevertWorkflow.md)
- [RollBackAction](classes/RollBackAction.md)
- [Workflow](classes/Workflow.md)

### Interfaces

- [ActionAppConfig](interfaces/ActionAppConfig.md)
- [ActionSchemaInterface](interfaces/ActionSchemaInterface.md)
- [Step](interfaces/Step.md)

### Variables

- [actionSchema](modules.md#actionschema)

### Functions

- [bootstrapApp](modules.md#bootstrapapp)

## Variables

### actionSchema

• `Const` **actionSchema**: `Schema`<`any`, `Model`<`any`, `any`, `any`, `any`, `any`\>, {}, {}, {}, {}, `ResolveSchemaOptions`<{ `minimize`: ``false`` = false; `timestamps`: ``true`` = true }\>, { `createdAt`: `NativeDate` ; `updatedAt`: `NativeDate`  } & { `actionRef`: `string` ; `argument`: `any` ; `bag`: `any` ; `cronActivity`: { pending: boolean; frequence?: number; lastActivity?: Date; nextActivity?: Date; } ; `delays`: { 1?: number; 2?: number; } ; `filter`: `any` ; `locked`: `boolean` ; `lockedAt`: `Date` ; `nExecutions`: { 4: number; 5: number; } ; `nTimes`: `number` ; `repeat`: { 4: number; 5: number; } ; `result`: `any` ; `state`: `number` ; `stateUpdatedAt`: `Date` ; `workflowId`: `string` ; `workflowStep`: `number`  }\>

#### Defined in

[src/models/action.ts:59](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/models/action.ts#L59)

## Functions

### bootstrapApp

▸ **bootstrapApp**(`opts`): (`classTargetConstructor`: `any`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ActionAppConfig`](interfaces/ActionAppConfig.md) |

#### Returns

`fn`

▸ (`classTargetConstructor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `classTargetConstructor` | `any` |

##### Returns

`void`

#### Defined in

[src/app/action-app.ts:107](https://gitlab.com/webcapsule/actions/-/blob/5d56f22/src/core/actions/src/app/action-app.ts#L107)
