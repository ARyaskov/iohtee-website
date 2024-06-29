---
version: 2.0.0
name: iohtee
title: IohTee v2.0.0
---

# IohTee API

IohTee is a library for ETH (and ERC20 soon) micropayments. The library could be freely embedded into your software both in browser and server environments.

The library implements unidirectional payment channel pattern. It works like a bar tab. A sender opens a channel and deposits the funds there. Over time she sends promised payments to a receiver. A promised payment is a signed data structure that the receiver could redeem at the smart contract.

## Initialization

Work with IohTee starts with constructor.

```typescript
import { IohTee } from '@riaskov/iohtee'

const iohtee = new IohTee({
  networkId: 80002,
  account: '0xde4B50c65f36b8Ef0c8398Ac924f5cDe83F54a38',
  httpRpcUrl: 'https://rpc-amoy.polygon.technology',
  mnemonic: 'tool school decrease elegant fix awful eyebrow immense noble erase dish labor',
  hdPath: `m/44'/60'/0'/0/0`,
  options: {
    databaseUrl: `sqlite://${path.resolve(__dirname, '../data.db')}`,
  },
})
```

Arguments:

| Argument          | Type            | Description |
|-------------------|-----------------|-------------|
| `networkId`       | `number`        |             |
| `account`         | `0x${string}`   |             |
| `httpRpcUrl`      | `string`        |             |
| `mnemonic`        | `string`        |             |
| `hdPath`          | `string`        |             |
| `options?`        | `IohTeeOptions` |             |

`IohTeeOptions` is an object with the following fields:

| Field                     | Type           | Description                                                                                                                                      |
| ------------------------- |----------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| `databaseUrl`             | `string`       | URL to connect to database. For example, `postgresql://localhost:5432/database`. Supported database protocols are `nedb`, `sqlite`, `postgresql`. |
| `minimumChannelAmount`    | `bigint`       | Minumum amount of funds to be initially deposited to a channel, in [Wei](https://gwei.io).                                                       |
| `minimumSettlementPeriod` | `number`       | If settlement period for a proposed channel is less than `minimumSettlementPeriod`, that channel is refused.                                     |
| `settlementPeriod`        | `number`       | Period of dispute resolution, in blocks.                                                                                                         |
| `closeOnInvalidPayment`   | `boolean`      | If set to `true`, a receiver reacts on invalid payment with closing a corresponding channel.                                                     |
| `migrate`                 | `silent/raise` | The library stores some data in a database, and uses migrations for updates to schema and/or data. If set to `raise`, the library throws an exception when migration is required. `silent` runs the migration automatically. Default is `silent`. |

## Send Payments

The functions related to payments operate on ancillary interfaces for parameters and outputs.

`BuyOptions`:

```typescript
import { BuyOptions } from '@riaskov/iohtee'
```

| Field           | Type          | Description                                            |
|-----------------|---------------|--------------------------------------------------------|
| `receiver`      | `0x${string}` | Ethereum address of the receiver.                      |
| `price`         | `bigint`      | Payment value, in [Wei](https://gwei.io).              |
| `gateway`       | `string`      | [OPTIONAL] Endpoint for offchain payment to send.      |
| `meta`          | `string`      | [OPTIONAL] free-form data to accompany the payment.    |
| `purchaseMeta`  | `string`      | [OPTIONAL]                                             |
| `tokenContract` | `0x${string}` | [OPTIONAL]                                             |

`Payment`:

```typescript
import { Payment } from '@riaskov/iohtee'
```

| Field              | Type          | Description                                                                                                         |
|--------------------|---------------|---------------------------------------------------------------------------------------------------------------------|
| `channelId`        | `0x${string}` | Identifier of the channel, as hex string.                                                                           |
| `sender`           | `0x${string}` | Ethereum address of the sender, as hex string.                                                                      |
| `receiver`         | `0x${string}` | Ethereum address of the receiver, as hex string.                                                                    |
| `price`            | `bigint`      | Amount of the payment.                                                                                              |
| `value`            | `bigint`      | Total amount to be paid. Remember, single payment in Unidirectional channel represents the total redeemable amount. |
| `channelValue`     | `bigint`      |                                                                                                                     |
| `signature`        | `0x${string}` | Signature of the payment by the sender.                                                                             |
| `meta`             | `string`      | Optional free-form data to accompany the payment.                                                                   |
| `token`            | `string`      | [OPTIONAL] Unique identifier of the payment.                                                                        |
| `createdAt`        | `number`      | [OPTIONAL] When the payment was created, as unix timestamp.                                                         |
| `tokenContract`    | `string`      | Token contract address.                                                                                             |



`BuyResult`:

```typescript
import { BuyResult } from '@riaskov/iohtee'
```

| Field       | Type     | Description                               |
| ----------- | -------- | ----------------------------------------- |
| `channelId` | `string` | Identifier of the channel, as hex string. |
| `token`     | `string` | Token to be vaidated against a gateway.   |

`NextPaymentResult`:

```typescript
import { NextPaymentResult } from '@riaskov/iohtee'
```

| Field     | Type                | Description        |
| --------- |---------------------| ------------------ |
| `payment` | `SerializedPayment` | Serialised Payment |

```typescript
export interface SerializedPayment {
  channelId: `0x${string}`
  value: string
  sender: `0x${string}`
  receiver: `0x${string}`
  price: string
  channelValue: string
  v: number
  r: string
  s: string
  token?: string
  meta: string
  createdAt?: number
  tokenContract?: `0x${string}`
}
```

### Raw Payment

```typescript
iohtee.payment(options: BuyOptions): Promise<NextPaymentResult>
```

Returns the payment to be sent over the wire. Stores the payment in a local database.

### Buy

```typescript
iohtee.buy(options: BuyOptions): Promise<BuyResult>
```

[Prepares](#raw-payment) a payment, and sends it to a gateway. Gateway then responds back with a token. 
It is up to a user to send the token to the content server, or receiver.
The receiver then calls the gateway to verify if the token is valid or not.
The scenario is revealed fully in [client example](https://github.com/ARyaskov/IohTee/blob/main/packages/examples/src/client.ts).

### Find channel by id

```typescript
iohtee.paymentById(token): Promise<Payment | null>
```

Returns a `Payment` with the specified `token` identifier.


## Receive Payments

### Accept Payment

```typescript
iohtee.acceptPayment(req): Promise<AcceptPaymentResponse>
```

Accept serialised payment, and issue a token.

`req` structure:

| Field          | Type                       | Description                                          |
| -------------- | -------------------------- | ---------------------------------------------------- |
| `payment`      | JSON-serialised `Payment`  | Payment that is sent over the wire.                  |
| `purchaseMeta` | `object & {type: string} ` | JSON-serialised object that accompanies the payment. |

Structure of `AcceptPaymentResponse`:

| Field   | Type     | Description                                                                |
| ------- | -------- |----------------------------------------------------------------------------|
| `token` | `string` | Unique identifier of the payment, that can be checked against the Gateway. |

[//]: # (### Accept Token)

[//]: # ()
[//]: # (```typescript)

[//]: # (iohtee.acceptToken&#40;req&#41;: Promise<AcceptTokenResponse>)

[//]: # (```)

[//]: # ()
[//]: # (Accept and verify the token that was issued in response to payment being sent.)

[//]: # ()
[//]: # (Structure of `req` argument:)

[//]: # ()
[//]: # (| Field   | Type     | Description                                                                |)

[//]: # (| ------- | -------- |----------------------------------------------------------------------------|)

[//]: # (| `token` | `string` | Unique identifier of the payment, that can be checked against the Gateway. |)

[//]: # ()
[//]: # (Structure of `AcceptTokenResponse`:)

[//]: # ()
[//]: # (| Field    | Type      | Description                                                  |)

[//]: # (| -------- | --------- | ------------------------------------------------------------ |)

[//]: # (| `status` | `boolean` | `true` means the token is ok, `false` is for invalid token, i.e. for invalid payment. |)

## Channels

Here come functions related to channels. Basic `PaymentChannel` structure is described below:


| Field              | Type          | Description                                                                     |
|--------------------|---------------|---------------------------------------------------------------------------------|
| `sender`           | `0x${string}` | Ethereum address of the channel sender party.                                   |
| `receiver`         | `0x${string}` | Ethereum address of the channel receiver party.                                 |
| `channelId`        | `0x${string}` | Identifier of the channel, as hex string.                                       |
| `value`            | `bigint`      | Amount of funds deposited to the channel by the sender.                         |
| `spent`            | `bigint`      | Amount of funds spent on the channel, that is redeemable by the receiver.       |
| `state`            | `number`      | State of the channel: `0` - open, `1` - settling, `2` - closed or non-existing. |
| `tokenContract`    | `0x${string}` | Token contract address.                                                         |
| `settlementPeriod` | `bigint`      |                                                                                 |
| `settlingUntil`    | `bigint`      |                                                                                 |

### Open

Opens a channel. It is a lower level function. In many cases you would not ever need to invoke the function. `buy` or `payment` both open a channel for you, if it is not present yet.

```typescript
iohtee.open(receiver, value, channelId?, tokenContract?): Promise<PaymentChannel>
```

Parameters:

| Argument         | Type            | Description                                    |
| ------------     |-----------------|------------------------------------------------|
| `receiver`       | `0x${string}`   | Ethereum address of the channel receiver.      |
| `value`          | `bigint`        | Amount of initial deposit to the channel.      |
| `channelId?`     | `0x${string}`   | [OPTIONAL] Proposed identifier of the channel. |
| `tokenContract?` | `0x${string}`   | [OPTIONAL] Token contract address.             |

### Deposit

Deposit more funds to the channel. One might use it after the channel is depleted, that is the funds are fully moved to the receiver side. 
It returns result of transaction execution ([viem's TransactionReceipt](https://viem.sh/docs/actions/public/getTransactionReceipt.html)).

```typescript
iohtee.deposit(channelId, value): Promise<TransactionReceipt>
```

Parameters:

| Argument    | Type          | Description                |
| ----------- |---------------| -------------------------- |
| `channelId` | `0x${string}` | Identifier of the channel. |
| `value`     | `bigint`      | Deposit amount, in wei.    |


### Close

Share the money between sender and receiver according to payments made.

For example a channel was opened with 10 Ether. 
Sender makes 6 purchases, 1 Ether each. Total value transferred is 6 Ether.
If a party closes the channel, the money deposited to the channel are split.
The receiver gets 6 Ether. 4 unspent Ethers return to the sender.
A channel can be closed in two ways, according to what party initiates that.
The method nicely abstracts over that, so you do not need to know what is really going on under the hood.
It returns result of transaction execution ([viem's TransactionReceipt](https://viem.sh/docs/actions/public/getTransactionReceipt.html)).
For more details on how payment channels work refer to a [website](https://iohtee.toivo.tech).

```typescript
iohtee.close(channelId): Promise<TransactionReceipt>
```

Parameters:

| Argument    | Type           | Description                         |
| ----------- |----------------| ----------------------------------- |
| `channelId` | `0x${string}`  | Identifier of the channel to close. |



### List all channels

```typescript
iohtee.channels(): Promise<Array<PaymentChannel>>
```



### List open channels

```typescript
iohtee.openChannels(): Promise<Array<PaymentChannel>>
```



### List settling channels

```typescript
iohtee.settlingChannels(): Promise<Array<PaymentChannel>>
```



### Find channel by id

```typescript
iohtee.channelById(channelId): Promise<Array<PaymentChannel>>
```

Parameters:

| Argument    | Type           | Description                         |
| ----------- |----------------| ----------------------------------- |
| `channelId` | `0x${string}`  | Identifier of the channel to close. |

## Teardown

As IohTee uses a database inside, it might be necessary to tear down a connection to the database. 
We recommend invoking `iohtee.shutdown()` after work is done.

Interface:

```typescript
iohtee.shutdown(): Promise<void>
```