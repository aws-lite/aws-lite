# `@aws-lite/apigatewaymanagementapi`

> Official `aws-lite` plugin for API Gateway WebSocket Management API

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/apigatewaymanagementapi
```

Optionally install types:

```sh
npm i -D @aws-lite/apigatewaymanagementapi-types
```


## Docs

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `PostToConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID
- **`Data` (string, object)**
  - Data to send to WebSocket client


### `DeleteConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID


### `GetConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID
<!-- METHOD_DOCS_END -->


## Learn more

Please see the [main `aws-lite` readme](https://github.com/architect/aws-lite) for more information about `aws-lite` plugins.
