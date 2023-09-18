# `aws-lite`

> `aws-lite` is a simple, extremely fast, extensible AWS client for Node.js.
>
> (It's got good error reporting, too.)


## Who made this?

`aws-lite` is developed and maintained by the folks at [OpenJS Foundation Architect](https://arc.codes). We <3 AWS!


## Why not use `aws-sdk` / `@aws-sdk/*`?

Amazon has historically done a great job of maintaining its SDKs. However, its JavaScript SDKs are huge, with lots of generated code. This results in things like very slow instantiation (example: [>400ms to load a single AWS client in SDK v3, and >500ms in v2](https://aws.amazon.com/blogs/developer/reduce-lambda-cold-start-times-migrate-to-aws-sdk-for-javascript-v3/)), and reporting errors without usable stack traces.

We built `aws-lite` to provide a simpler, faster, more stable position from which to work with AWS services in Node.js.


## Install

Install the client:

```sh
npm i @aws-lite/client
```

You can use the client as-is to quickly interact with AWS service APIs, or extend it with specific service plugins like so:

```sh
npm i @aws-lite/plugin-dynamodb
```


## Quickstart

```js
/**
 * Instantiate a client
 * This is a synchronous operation that will attempt to load your AWS credentials, local configuration, region settings, etc.
 */
import awsLite from '@aws-lite/client'
const config = { region: 'us-west-1' } // Optional
const aws = await awsLite(config)

/**
 * Reads
 * Fire a GET request by specifying an AWS service name and endpoint
 */
await aws({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/my-lambda-name/configuration',
})
// {
//   FunctionName: 'my-lambda-name',
//   Runtime: 'nodejs18.x',
//   ...
// }

/**
 * Writes
 * POST JSON to an endpoint by adding a payload property
 */
await aws({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/my-lambda-name/invocations',
  payload: { ok: true },
})
// ... whatever your Lambda returned
```


## Options

### Configuration options

(Coming soon!)


### Client options

(Coming soon!)


## Plugins

(Coming soon!)


### Official `@aws-lite/*` plugins

<!-- plugins_start -->
<!-- plugins_end -->


## Contributing

AWS has (as of this writing) nearly 300 service APIs – `aws-lite` would love your help in authoring and maintaining official (and unofficial) plugins!


### Setup

- Pull down this repo
- Install dependencies and run the normal test suite: `npm it`
- Create a PR that adheres to our [testing methodology](#testing)

> It is advisable you have AWS credentials on your local development machine for manual verification of any client or service plugin changes


### Testing

#### Methodology

Due to the mission-critical nature of this project, we strive for 100% test coverage on the core client. (We also acknowledge that 100% coverage does not mean 0 bugs, so meaningful and thorough tests are much appreciated.)

Due to the nature of interacting with AWS services, manual validation is not only often necessary, but in many cases it's required. (For example: running automated test suites on EKS may be onerous and financially expensive.)


#### Live AWS tests

One should expect that running the live AWS client test suite (`npm run test:live`) will result in a limited number of free tier resources to be created in the account corresponding to your supplied (or default) AWS credentials. These resources should never exceed the free tier under normal circumstances.
