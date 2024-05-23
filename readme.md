<a href="https://aws-lite.org">
  <img src=https://aws-lite.org/_public/img/aws-lite-7af26ade9a.svg alt="aws-lite">
</a>

> [`aws-lite`][1] is simple, extremely fast, extensible Node.js client for interacting with AWS services.
>
> (It's got good error reporting, too.)
>
> You can think of it as a community-driven alternative to AWS's JavaScript SDK.

<p>
  <a href="https://github.com/architect/aws-lite/actions/workflows/build.yml?query=workflow:%22Node+CI%22">
    <img src=https://github.com/architect/aws-lite/workflows/Node%20CI/badge.svg alt="GitHub CI status">
  </a>
  <a href="https://github.com/architect/aws-lite/actions/workflows/build.yml?query=workflow:%22Node+CI%22">
    <img src="https://img.shields.io/badge/Code_coverage-100%25-green">
  </a>
  <a href="https://badge.fury.io/js/%40aws-lite%2Fclient">
    <img alt="npm version" src="https://badge.fury.io/js/%40aws-lite%2Fclient.svg">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg" alt="Apache-2.0 License">
  </a>
  <a href="https://discord.com/invite/y5A2eTsCRX">
    <img src="https://img.shields.io/discord/880272256100601927.svg?label=Join%20our%20Discord&logo=discord&logoColor=ffffff&color=5865F2&labelColor=grey">
  </a>
</p>

- [Who made this?](#who-made-this)
- [So, what is `aws-lite`?](#so-what-is-aws-lite)
- [Why not use `aws-sdk` / `@aws-sdk/*`?](#why-not-use-aws-sdk--aws-sdk)
- [Features](#features)
- [Install `aws-lite`](#install-aws-lite)
- [Example](#example)
- [Learn more](#learn-more)
  - [Client configuration](#client-configuration)
  - [Requests / responses](#requests--responses)
  - [Using TypeScript](#using-typescript)
  - [Plugin API](#plugin-api)
  - [Performance](#performance)
  - [Contributing](#contributing)
- [List of official `@aws-lite/*` plugins](#list-of-official-aws-lite-plugins)

---

## Who made this?

[`aws-lite`][1] is developed and maintained by the folks at [OpenJS Foundation Architect](https://arc.codes). We <3 AWS!


## So, what is `aws-lite`?

[`aws-lite`][1] is a simple, extremely fast, extensible Node.js client for interacting with AWS services.

(It's got good error reporting, too.)

You can think of it as a community-driven alternative to AWS's JavaScript SDK.


## Why not use `aws-sdk` / `@aws-sdk/*`?

Amazon has historically done a great job of maintaining its SDKs. However, AWS has deprecated its widely-adopted v2 SDK; its v3 SDK relies on generated code, resulting in large dependencies, poor performance, awkward semantics, difficult to understand documentation, and errors without usable stack traces.

We rely on and believe in AWS, so we built [`aws-lite`][1] to provide a simpler, faster, more stable position from which to work with AWS services in Node.js.


## Features

- [2-5x faster than AWS SDK v3](https://aws-lite.org/performance)
- Simple semantics & straightforward promise-based interface
- Human-readable documentation
- Customizable
- Errors with stack traces and line numbers
- Built-in pagination
- Secured with AWS Signature v4
- Interacts with any AWS service without needing any plugins
- Automatically parses / serializes JSON, AWS-flavored JSON, and XML request / response payloads
- Easily integrates with local testing suites and AWS service mocks
- Use existing service plugins, or [develop your own](https://aws-lite.org/api)
- Debug mode for inspecting raw requests and responses
- Just two dependencies



## Install `aws-lite`

Install the client:

```shell
npm i @aws-lite/client
```

You can use the client as-is to quickly interact with AWS service APIs, or extend it with specific service plugins like so:

```shell
npm i @aws-lite/dynamodb
```

Generally, types are available as optional `@aws-lite/*-types` packages, and can be added like so:

```shell
npm i -D @aws-lite/dynamodb-types
```

[Learn more about `aws-lite` types.](https://aws-lite.org/configuration#types)


## Example

Now start making calls to AWS:

```javascript
// Instantiate a client with the DynamoDB plugin
import awsLite from '@aws-lite/client'
const aws = await awsLite({ region: 'us-west-1', plugins: [ import('@aws-lite/dynamodb') ] })

// Easily interact with the AWS services your application relies on
await aws.DynamoDB.PutItem({
  TableName: '$table-name',
  Item: {
    // AWS-lite automatically de/serializes DynamoDB JSON
    pk: '$item-key',
    data: {
      ok: true,
      hi: 'friends'
    }
  }
})

await aws.DynamoDB.GetItem({
  TableName: '$table-name',
  Key: { pk: '$item-key' }
})
// {
//   Item: {
//     pk: '$item-key',
//     data: data: {
//       ok: true,
//       hi: 'friends'
//     }
//   }
// }

// Use the lower-level client to fire a GET request by specifying a `service` and `endpoint`
await aws({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/$function-name/configuration',
})
// {
//   FunctionName: '$function-name',
//   Runtime: 'nodejs20.x',
//   ...
// }

// POST JSON by adding a `payload` property
await aws({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/$function-name/invocations',
  payload: { ok: true },
})
```


## Learn more

### [Client configuration](https://aws-lite.org/configuration)

Credential and general configuration options for [`aws-lite`](https://aws-lite.org/configuration)


### [Requests / responses](https://aws-lite.org/request-response)

Using [`aws-lite`](https://aws-lite.org/request-response) to make requests and receiving responses


### [Using TypeScript](https://aws-lite.org/using-typeScript)

Guide and examples for using TypeScript with `aws-lite`


### [Plugin API](https://aws-lite.org/plugin-api)

Docs and examples for the `aws-lite` plugin API


### [Performance](https://aws-lite.org/performance)

Open, reproducible, real-world metrics for the performance of `aws-lite` and other AWS SDKs


### [Contributing](https://aws-lite.org/contributing)

Open source contributor guidelines, methodology, and instructions


## List of official `@aws-lite/*` plugins

<!-- ! Do not remove plugins_start / plugins_end ! -->
<!-- plugins_start -->
- [ACM](https://www.npmjs.com/package/@aws-lite/acm)
- [API Gateway V2](https://www.npmjs.com/package/@aws-lite/apigatewayv2)
- [API Gateway WebSocket Management API](https://www.npmjs.com/package/@aws-lite/apigatewaymanagementapi)
- [CloudFormation](https://www.npmjs.com/package/@aws-lite/cloudformation)
- [CloudFront](https://www.npmjs.com/package/@aws-lite/cloudfront)
- [CloudWatch Logs](https://www.npmjs.com/package/@aws-lite/cloudwatch-logs)
- [DynamoDB](https://www.npmjs.com/package/@aws-lite/dynamodb)
- [IAM](https://www.npmjs.com/package/@aws-lite/iam)
- [Lambda](https://www.npmjs.com/package/@aws-lite/lambda)
- [Organizations](https://www.npmjs.com/package/@aws-lite/organizations)
- [RDS Data Service](https://www.npmjs.com/package/@aws-lite/rds-data)
- [Route 53](https://www.npmjs.com/package/@aws-lite/route53)
- [S3](https://www.npmjs.com/package/@aws-lite/s3)
- [SNS](https://www.npmjs.com/package/@aws-lite/sns)
- [SQS](https://www.npmjs.com/package/@aws-lite/sqs)
- [SSM](https://www.npmjs.com/package/@aws-lite/ssm)
- [STS](https://www.npmjs.com/package/@aws-lite/sts)
<!-- plugins_end -->

[1]: https://aws-lite.org
