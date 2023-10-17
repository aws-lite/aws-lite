<h1><code>aws-lite</code></h1>

> [`aws-lite`](https://www.npmjs.com/package/@aws-lite/client) is a simple, extremely fast, extensible AWS client for Node.js.
>
> (It's got good error reporting, too.)

- [Who made this?](#who-made-this)
- [Why not use `aws-sdk` / `@aws-sdk/*`?](#why-not-use-aws-sdk--aws-sdk)
- [Install](#install)
- [Quickstart](#quickstart)
- [Usage](#usage)
  - [Configuration](#configuration)
    - [Credentials + region](#credentials--region)
    - [General config](#general-config)
  - [Client requests](#client-requests)
  - [Client responses](#client-responses)
- [Plugins](#plugins)
  - [Plugin API](#plugin-api)
    - [`validate`](#validate)
    - [`request()`](#request)
    - [`response()`](#response)
    - [`error()`](#error)
    - [Plugin utils](#plugin-utils)
  - [List of official `@aws-lite/*` plugins](#list-of-official-aws-lite-plugins)
- [Contributing](#contributing)
  - [Setup](#setup)
  - [Authoring `@aws-lite/*` plugins](#authoring-aws-lite-plugins)
  - [Testing](#testing)
    - [Methodology](#methodology)
    - [Live AWS tests](#live-aws-tests)
  - [Releasing `@aws-lite/*` plugins](#releasing-aws-lite-plugins)

---

## Who made this?

[`aws-lite`](https://www.npmjs.com/package/@aws-lite/client) is developed and maintained by the folks at [OpenJS Foundation Architect](https://arc.codes). We <3 AWS!


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
npm i @aws-lite/dynamodb
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

#### Credentials + region

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


#### General config

- **`autoloadPlugins` (boolean) [default = true]**
  - Automatically load installed `@aws-lite/*` + `aws-lite-plugin-*` plugins
- **`debug` (boolean) [default = false]**
  - Enable debug logging to console
- **`endpointPrefix` (string)**
  - Add prefix to endpoint requests, helpful for local testing
- **`host` (string)**
  - Set a custom host name to use, helpful for local testing
- **`keepAlive` (boolean) [default = true]**
  - Disable Node.js's connection keep-alive, helpful for local testing
- **`plugins` (array)**
  - Define `aws-lite` plugins to load; can be module names (e.g. `@aws-lite/dynamodb`) or file paths on the local machine (e.g. `/path/to/my/plugin.mjs`)
  - By default, all installed [official plugins (prefixed with `@aws-lite/`)](#list-of-official-aws-lite-plugins) and unofficial plugins (prefixed with `aws-lite-plugin-`) will be loaded
  - Specifying plugins will disable auto-loading plugins
- **`port` (number)**
  - Set a custom port number to use, helpful for local testing
- **`protocol` (string) [default = `https`]**
  - Set the connection protocol to `http`, helpful for local testing
- **`responseContentType` (string)**
  - Set an overriding Content-Type header for all responses, helpful for local testing 

An example:

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
  debug: true,
  endpointPrefix: '/test/path/',
  host: 'localhost',
  keepAlive: false,
  plugins: [ '@aws-lite/dynamodb', '/a/custom/local/plugin/path' ],
  port: 12345,
  protocol: 'http',
  responseContentType: 'application/json',
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
  - If your request includes a `payload` that cannot be automatically JSON-encoded and you do not specify a `content-type` header, the default `application/octet-stream` will be used
- **`payload` (object, buffer, readable stream, string)**
  - Aliases: `body`, `data`, `json`
  - Payload to be used as the HTTP request body; as a convenience, any passed objects are automatically JSON-encoded (with the appropriate `content-type` header set, if not already present); buffers, streams, and strings simply pass through as-is
  - Readable streams are currently experimental
    - Passing a Node.js readable stream initiates an HTTP data stream to the API endpoint instead of writing a normal HTTP body
    - Streams are not automatically signed like normal HTTP bodies, and may [require their own signing procedures, as in S3](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-streaming.html)
- **`paginate` (boolean) [experimental]**
  - Enables (or disables) automatic result pagination; if pagination is enabled by default (see `paginator.default`), pass `false` to disable automatic pagination
- **`paginator` (object) [experimental]**
  - Enable automatic pagination for service API via the following properties:
    - **`type` (string) [default = `payload`]** - `payload` (default) passes the cursor via body payload, `query` passes the cursor via query string parameter
    - **`cursor` (string) [required]** - pagination token from the prior response payload to be passed with the current request; example: in S3 this is the query string parameter `continuation token`
    - **`token` (string) [required]** - pagination token returned in each response payload to be passed with the next request as `cursor`; example: in S3, this would be `NextContinuationToken`
    - **`accumulator` (string) [required]** - Response payload array property name to aggregate into final result set; example: in S3, this would be `Contents`
    - **`default` (string)** - set value to `enabled` to enable pagination for all applicable requests by default; individual requests can opt out of pagination by setting `paginate` to `false`
- **`query` (object)**
  - Serialize the passed object and append it to your `endpoint` as a query string in your request
- **`service` (string) [required]**
  - AWS service code, usually just the lowercase form of the service name (e.g. `DynamoDB` = `dynamodb`); [full list can be found here](src/services.js)

> Additionally, the following [configuration options](#configuration-options) can be specified in each request, overriding those specified by the instantiated client: [`region`](#configuration-options), [`protocol`](#configuration-options), [`host`](#configuration-options), and [`port`](#configuration-options)


An example:

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
  awsjson: [ 'Key' ], // Ensures only payload.Key will become AWS-flavored JSON
  payload: {
    TableName: '$table-name',
    Key: { myHashKey: 'Gaal', mySortKey: 'Dornick' }
  },
})

// Paginate results
await awsLite({
  service: 'dynamodb',
  headers: { 'X-Amz-Target': `DynamoDB_20120810.Scan` },
  paginator: {
    cursor: 'ExclusiveStartKey',
    token: 'LastEvaluatedKey',
    accumulator: 'Items',
    enabled: 'default',
  },
  payload: {
    TableName: '$table-name',
  },
})
```


### Client responses

The following properties are returned with each non-error client response:

- **`statusCode` (number)**
  - HTTP status code of the response
- **`headers` (object)**
  - Response header names + values
- **`payload` (object, string, null)**
  - Response payload; as a convenience, JSON-encoded responses are automatically parsed; XML-encoded responses are returned as plain strings
  - Responses without an HTTP body return a `null` payload

An example:

```js
import awsLite from '@aws-lite/client'
const aws = await awsLite()

await awsLite({
  service: 'lambda',
  endpoint: '/2015-03-31/functions/$function-name/configuration',
})
// {
//   statusCode: 200,
//   headers: {
//     'content-type': 'application/json',
//     'x-amzn-requestid': 'ba3a55d2-16c2-4c2b-afe1-cf0c5523040b',
//     ...
//   },
//   payload: {
//     FunctionName: '$function-name',
//     FunctionArn: 'arn:aws:lambda:us-west-1:1234567890:function:$function-name',
//     Role: 'arn:aws:iam::1234567890:role/$function-name-role',
//     Runtime: 'nodejs18.x',
//     ...
//   }
// }
```


## Plugins

Out of the box, [`@aws-lite/client`](https://www.npmjs.com/package/@aws-lite/client) is a full-featured AWS API client that you can use to interact with any AWS service that makes use of [authentication via AWS signature v4](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) (which should be just about all of them).

`@aws-lite/client` can be extended with plugins to more easily interact with AWS services, or provide custom behavior or semantics. As such, plugins enable you to have significantly more control over the entire API request/response lifecycle.

A bit more about how plugins work:

- Plugins can be authored in ESM or CJS
- Plugins can be dependencies downloaded from npm, or also live locally in your codebase
- In conjunction with the open source community, `aws-lite` publishes service plugins under the `@aws-lite/$service` namespace that [conform to `aws-lite` standards](#authoring-aws-lite-plugins)
- `@aws-lite/*` plugins, and packages published to npm with the `aws-lite-plugin-*` prefix, are automatically loaded by the `@aws-lite/client` upon instantiation
  - This behavior can be overridden with the [`autoloadPlugins` parameter](#Configuration)

Thus, to make use of the `@aws-lite/dynamodb` plugin, this is what your code would look like:

```sh
npm i @aws-lite/client @aws-lite/dynamodb
```

```js
import awsLite from '@aws-lite/client'
const aws = await awsLite() // @aws-lite/dynamodb is now loaded
aws.dynamodb.PutItem({ TableName: 'my-table', Key: { id: 'hello' } })
```


### Plugin API

The `aws-lite` plugin API is lightweight and simple to learn. It makes use of four optional lifecycle hooks:

- [`validate`](#validate) [optional] - an object of property names and types used to validate inputs pre-request
- [`request()`](#request) [optional] - an async function that enables mutation of inputs to the final service API request
- [`response()`](#response) [optional] - an async function that enables mutation of service API responses before they are returned
- [`error()`](#error) [optional] - an async function that enables mutation of service API errors before they are returned

The above four lifecycle hooks must be exported as an object named `methods`, along with a valid AWS service code property named `service`, like so:

```js
// A simple plugin for validating `TableName` input on dynamodb.PutItem() calls
export default {
  service: 'dynamodb',
  awsDoc: 'https://docs.aws.../API_PutItem.html',
  readme: 'https://github...#PutItem',
  methods: {
    PutItem: {
      validate: {
        TableName: { type: 'string', required: true }
      }
    }
  }
}
// Using the above plugin
aws.dynamodb.PutItem({ TableName: 12345 }) // Throws validation error
```

Additionally, two optional (but highly recommended) metadata properties that will be included in any method errors:
- `awsDoc` (string) [optional] - intended to be a link to the AWS API doc pertaining to this method; should usually start with `https://docs.aws.amazon.com/...`
- `readme` (string) [optional] - a link to a relevant section in your plugin's readme or docs

Example plugins can be found below, in [`plugins/` dir (containing `@aws-lite/*` plugins)](https://github.com/architect/aws-lite/tree/main/plugins), and in [tests](https://github.com/architect/aws-lite/tree/main/test/mock/plugins).


#### `validate`

The `validate` lifecycle hook is an optional object containing (case-sensitive) input property names, with a corresponding object that denotes their `type` and whether `required`.

Types are as follows: `array` `boolean` `number` `object` `string`. An example `validate` plugin:

```js
// Validate inputs for a single DynamoDB method (`CreateTable`)
export default {
  service: 'dynamodb',
  methods: {
    CreateTable: {
      validate: {
        TableName:                  { type: 'string', required: true },
        AttributeDefinitions:       { type: 'array', required: true },
        KeySchema:                  { type: 'array', required: true },
        BillingMode:                { type: 'string' },
        DeletionProtectionEnabled:  { type: 'boolean' },
        GlobalSecondaryIndexes:     { type: 'array' },
        LocalSecondaryIndexes:      { type: 'array' },
        ProvisionedThroughput:      { type: 'object' },
        SSESpecification:           { type: 'object' },
        StreamSpecification:        { type: 'object' },
        TableClass:                 { type: 'string' },
        Tags:                       { type: 'array' },
      }
    }
  }
}
```


#### `request()`

The `request()` lifecycle hook is an optional async function that enables that enables mutation of inputs to the final service API request.

`request()` is executed with two positional arguments:

- **`params` (object)**
  - The method's input parameters
- **`utils` (object)**
  - [Plugin helper utilities](#plugin-utils)

The `request()` method may return nothing, or a [valid client request](#client-requests). An example:

```js
// Automatically serialize input to AWS-flavored JSON
export default {
  service: 'dynamodb',
  methods: {
    PutItem: {
      validate: { Item: { type: 'object', required: true } },
      request: async (params, utils) => {
        params.Item = utils.awsjsonMarshall(params.Item)
        return {
          headers: { 'X-Amz-Target': `DynamoDB_20120810.PutItem` }
          payload: params
        }
      }
    }
  }
}
```


#### `response()`

The `response()` lifecycle hook is an async function that enables mutation of service API responses before they are returned.

`response()` is executed with two positional arguments:

- **`response` (object)**
  - An object containing three properties from the API response:
    - **`statusCode` (number)**
      - HTTP response status code
    - **`headers` (object)**
      - HTTP response headers
    - **`payload` (object or string)**
      - Raw non-error response from AWS service API request; if the entire payload is JSON or AWS-flavored JSON, `aws-lite` will attempt to parse it prior to executing `response()`. Responses that are primarily JSON, but with nested AWS-flavored JSON, will be parsed only as JSON and may require additional deserialization with the `awsjsonUnmarshall` utility or `awsjson` property
- **`utils` (object)**
  - [Plugin helper utilities](#plugin-utils)

The `response()` method may return: nothing (which will pass through the `response` object as-is) or any data (most commonly an object or string, or mutated version of the `response` object).

Should you return an object, you may also include an `awsjson` property (that behaves the same as in [client requests](#client-requests)). The `awsjson` property is considered reserved, and will be stripped from any returned data.

An example:

```js
// Automatically deserialize AWS-flavored JSON
export default {
  service: 'dynamodb',
  methods: {
    GetItem: {
      // Assume successful responses always have an AWS-flavored JSON `Item` property
      response: async (response, utils) => {
        response.awsjson = [ 'Item' ]
        return response // Returns the response (`statusCode`, `headers`, `payload`), with `payload.Item` unformatted from AWS-flavored JSON, and the `awsjson` property removed
      }
    }
  }
}
```


#### `error()`

The `error()` lifecycle hook is an async function that enables mutation of service API errors before they are returned.

`error()` is executed with two positional arguments:

- **`error` (object)**
  - The object containing the following properties:
    - **`error` (object or string)**: the raw error from the service API; if the entire error payload is JSON, `aws-lite` will attempt to parse it into the `error` property
    - **`metadata` (object)** - `aws-lite` error metadata; to improve the quality of the errors presented by `aws-lite`, please only append to this object
    - **`statusCode` (number or undefined)** - resulting status code of the API response; if an HTTP connection error occurred, no `statusCode` will be present
- **`utils` (object)**
  - [Plugin helper utilities](#plugin-utils)

The `error()` method may return nothing, a new or mutated version of the error payload it was passed, a string, an object, or a JS error. An example:

```js
// Improve clarity of error output
export default {
  service: 'lambda',
  methods: {
    GetFunctionConfiguration: {
      error: async (err, utils) => {
        if (err.statusCode === 400 &&
            err?.error?.message?.match(/validation/)) {
          // Append a property to be clearly displayed along with the other error data
          err.metadata.type = 'Validation error'
        }
        return err
      }
    }
  }
}
```


#### Plugin utils

[`request()`](#request), [`response()`](#response), and [`error()`](#error) are all passed a second argument of helper utilities and data pertaining to the client:

- **`awsjsonMarshall` (function)**
  - Utility for marshalling data to the format underlying AWS-flavored JSON serialization; accepts a plain object, returns a marshalled object
- **`awsjsonUnmarshall` (function)**
  - Utility for unmarshalling data from the format underlying AWS-flavored JSON serialization; accepts a marshalled object, returns a plain object
- **`config` (object)**
  - The current [client configuration](#configuration); any configured credentials are found in the `credentials` object
- **`credentials` (object)**
  - `accessKeyId`, `secretAccessKey`, and `sessionToken` being used in this request
  - Note: `secretAccessKey` and `sessionToken` are present in this object, but non-enumerable
- **`region` (string)**
  - Canonical service region being used in this request; this value may differ from the region set in the `config` object if overridden per-request

An example of plugin utils:

```js
async function request (params, utils) {
  let awsStyle = utils.awsjsonMarshall({ ok: true, hi: 'there' })
  console.log(marshalled) // { ok: { BOOL: true }, hi: { S: 'there' } }

  let plain = utils.awsjsonUnmarshall({ ok: { BOOL: true }, hi: { S: 'there' } })
  console.log(unmarshalled) // { ok: true, hi: 'there' }

  console.log(config) // { profile: 'my-profile', autoloadPlugins: true, ... }

  console.log(credentials) // { accessKeyId: 'abc123...' } secrets are non-enumerable

  console.log(region) // 'us-west-1'
}
```


### List of official `@aws-lite/*` plugins

<!-- ! Do not remove plugins_start / plugins_end ! -->
<!-- plugins_start -->
- [API Gateway WebSocket Management API](https://www.npmjs.com/package/@aws-lite/apigatewaymanagementapi)
- [DynamoDB](https://www.npmjs.com/package/@aws-lite/dynamodb)
- [RDS Data Service](https://www.npmjs.com/package/@aws-lite/rds-data)
- [S3](https://www.npmjs.com/package/@aws-lite/s3)
- [SNS](https://www.npmjs.com/package/@aws-lite/sns)
- [SQS](https://www.npmjs.com/package/@aws-lite/sqs)
- [SSM](https://www.npmjs.com/package/@aws-lite/ssm)
<!-- plugins_end -->


## Contributing

AWS has (as of this writing) nearly 300 service APIs – `aws-lite` would love your help in authoring and maintaining official (and unofficial) plugins!


### Setup

- Pull down this repo
- Install dependencies and run the normal test suite: `npm it`
- To create an `@aws-lite/*` plugin:
  - Add your plugin to the [`plugins` file](https://github.com/architect/aws-lite/blob/main/plugins.mjs)
  - Run `npm run gen`
- Create a PR that adheres to our [testing methodology](#testing)

> It is advisable you have AWS credentials on your local development machine for manual verification of any client or service plugin changes


### Authoring `@aws-lite/*` plugins

Similar to the [Definitely Typed (`@types`)](https://github.com/DefinitelyTyped/DefinitelyTyped) model, `aws-lite` releases packages maintained by third parties under the `@aws-lite/*` namespace.

Plugins released within the `@aws-lite/*` namespace are expected to conform to the following standards:

- `@aws-lite/*` plugins should read more or less like the others, and broadly adhere to the following style:
  - Plugins should be authored in ESM, be functional (read: no classes), and avoid globals / closures, etc. wherever possible
  - Plugins should be authored in JavaScript; those that require transpilation (e.g. TypeScript) will not be accepted
- Plugins should cover all documented methods for a given service, and include links for each method within the plugin
- Each plugin is singular for a given service
  - Example: we will not ship `@aws-lite/lambda`, `@aws-lite/lambda-1`, `@aws-lite/lambda-new`, etc.
  - With permission of the current maintainer(s), you may become a maintainer of an existing plugin
- To maintain the speed, security, and lightweight size of the `aws-lite` project, plugins should ideally have zero external dependencies
  - If external dependencies are absolutely necessary, they should be justifiable; expect their inclusion to be heavily audited
- Ideally (but not necessarily), each plugin should include its own tests
  - Tests should follow the project's testing methodology, utilizing `tape` as the runner and `tap-arc` as the output parser
  - Tests should not rely on interfacing with live AWS services
- Wherever possible, plugin maintainers should attempt to employ manual verification of their plugins during development
- By opting to author a plugin, you are opting to provide reasonably prompt bug fixes, updates, etc. for the community
  - If you are not willing to make that kind of commitment but still want to publish your plugins publicly, please feel free to do so outside this repo with an `aws-lite-plugin-` package prefix


### Testing

#### Methodology

Due to the mission-critical nature of this project, we strive for 100% test coverage on the core client. (We also acknowledge that 100% coverage does not mean 0 bugs, so meaningful and thorough tests are much appreciated.)

Due to the nature of interacting with AWS services, manual validation is not only often necessary, but in many cases it's required. (For example: running automated test suites on EKS may be slow, onerous, and financially expensive.)


#### Live AWS tests

One should expect that running the live AWS client test suite (`npm run test:live`) will result in a limited number of free tier resources to be created in the account corresponding to your supplied (or default) AWS credentials. These resources should never exceed the free tier under normal circumstances.


### Releasing `@aws-lite/*` plugins

To release an update to a `@aws-lite/*` plugin, use the `npm run plugin` script with similar syntax to the `npm version` command, like so:

- Commit all your changes and start in a clean state
- Release a plugin (and its types): `npm run plugin [major|minor|patch] $plugin`
  - Example: `npm run plugin minor dynamodb`
- Patch a plugin's types only: `npm run plugin patch $plugin-types`
  - Example: `npm run plugin patch dynamodb-types`
  - Note: type changes can only be issued as patches
- Push the commit
