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


## Usage

### Configuration

The following options may be passed when instantiating the `aws-lite` client:

- **`accessKeyId` (string)**
  - AWS access key; if not provided, defaults to `AWS_ACCESS_KEY_ID` or `AWS_ACCESS_KEY` env vars, and then to a `~/.aws/credentials` file, if present
  - Manually specify a credentials file location with the `AWS_SHARED_CREDENTIALS_FILE` env var
  - If no access key is found, `aws-lite` will throw
- **`secretAccessKey` (string)**
  - AWS secret key; if not provided, defaults to `AWS_SECRET_ACCESS_KEY` or `AWS_SECRET_KEY` env vars, and then to a `~/.aws/credentials` file, if present
  - Manually specify a credentials file location with the `AWS_SHARED_CREDENTIALS_FILE` env var
  - If no secret key is found, `aws-lite` will throw
- **`sessionToken` (string)**
  - AWS session token; if not provided, defaults to `AWS_SESSION_TOKEN` env var, and then to a `~/.aws/credentials` file, if present
  - Manually specify a credentials file location with the `AWS_SHARED_CREDENTIALS_FILE` env var
- **`region` (string)**
  - AWS service region (e.g. `us-west-1`); if not provided, defaults to `AWS_REGION`, `AWS_DEFAULT_REGION`, or `AMAZON_REGION` env vars
  - By default, a `~/.aws/config` (or custom) file will only be loaded by making the `AWS_SDK_LOAD_CONFIG` env var true
  - Manually specify a config file location with the `AWS_CONFIG_FILE` (and `AWS_SDK_LOAD_CONFIG`) env var
  - If no region is found, `aws-lite` will throw
  - Region setting can be overridden per-request
- **`profile` (string)**
  - AWS config + credentials profile; if not provided, defaults to `AWS_PROFILE` env var, and then to the `default` profile, if present
- **`autoloadPlugins` (boolean) [default = true]**
  - Automatically load installed `@aws-lite/*` + `aws-lite-plugin-*` plugins
- **`keepAlive` (boolean) [default = true]**
  - Disable Node.js's connection keep-alive, helpful for local testing
- **`protocol` (string) [default = `https`]**
  - Set the connection protocol to `http`, helpful for local testing
- **`host` (string)**
  - Set a custom host name to use, helpful for local testing
- **`port` (number)**
  - Set a custom port number to use, helpful for local testing
- **`plugins` (array)**
  - Define `aws-lite` plugins to load; can be module names (e.g. `@aws-lite/dynamodb`) or file paths on the local machine
  - By default, all installed official plugins (prefixed with `@aws-lite/`) and unofficial plugins (prefixed with `aws-lite-plugin-`) will be loaded
  - Specifying plugins will disable auto-loading plugins

#### **Example**

```js
import awsLite from '@aws-lite/client'

// Minimal: load everything from env vars
aws = await awsLite()

// Maximal: specify everything yourself
aws = await awsLite({
  accessKeyId: '$accessKey',
  secretAccessKey: '$secretKey',
  sessionToken: '$sessionToken',
  region: 'us-west-1',
  profile: 'work',
  autoloadPlugins: false, // Not necessary if manually specifying plugins
  keepAlive: false,
  protocol: 'http',
  host: 'localhost',
  port: 12345,
  plugins: [ '@aws-lite/dynamodb', '/a/custom/local/plugin/path' ],
})
```


### Client requests

The following parameters may be passed with individual client requests; only `service` is required:

- **`awsjson` (boolean or array)**
  - Enables AWS-flavored JSON encoding; if boolean, your entire body will be encoded; if an array, the key names specified in the array will be encoded, leaving other keys in normal JSON
  - Do not use this option if you intend to pass your own pre-serialized AWS-flavored JSON in the `payload`
- **`endpoint` (string) [default = `/`]**
  - API endpoint your request will be made to
- **`headers` (object)**
  - Header names + values to be added to your request
  - By default, all headers are included in [authentication via AWS signature v4](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html)
- **`payload` (object or string)**
  - Aliases: `body`, `data`, `json`
  - As a convenience, any passed objects are automatically JSON-encoded (with the appropriate `content-type` header set, if not already present); strings pass through
  -
- **`query` (object)**
  - Serialize the passed object and append it to your `endpoint` as a query string in your request
- **`service` (string) [required]**
  - AWS service code, usually just the lowercase form of the service name (e.g. `DynamoDB` = `dynamodb`); [full list can be found here](src/services.js)

> Additionally, the following [configuration options](#configuration-options) can be specified in each request, overriding those specified by the instantiated client: [`region`](#configuration-options), [`protocol`](#configuration-options), [`host`](#configuration-options), and [`port`](#configuration-options)


#### **Example**

```js
import awsLite from '@aws-lite/client'
const aws = await awsLite()

// Make a plain JSON request
await awsLite({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/$function-name/invocations',
  query: { Qualifier: '1' }, // Invoke's version / alias '1'
  payload: { ok: true }, // Object will be automatically JSON-encoded
})

// Make an AWS-flavored JSON request
await awsLite({
  service: 'dynamodb',
  headers: { 'X-Amz-Target': `DynamoDB_20120810.GetItem` },
  awsjson: [ 'Key' ], // Ensures only payload.key will become AWS-flavored JSON
  payload: {
    TableName: '$table-name',
    Key: { myHashKey: 'Gaal', mySortKey: 'Dornick' }
  },
})
```


## Plugins

(Coming soon!)


### Official `@aws-lite/*` plugins

<!-- ! Do not remove plugins_start / plugins_end ! -->
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
