# [`@aws-lite/apigatewaymanagementapi`](https://aws-lite.org/services/apigatewaymanagementapi)

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


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/apigatewaymanagementapi)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `PostToConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`
- **`Data` (string, object)**
  - Data to send to WebSocket client


### `DeleteConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`


### `GetConnection`

[Canonical AWS API doc](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html)

Properties:
- **`ConnectionId` (string) [required]**
  - WebSocket connection ID
- **`ApiUrl` (string)**
  - Full API Gateway WebSocket URL, including stage; if using this, do not use `ApiId` and `Stage`; example: `wss://abc123.execute-api.us-west-1.amazonaws.com/$default`
- **`ApiId` (string)**
  - API Gateway ID
- **`Stage` (string)**
  - API Gateway stage; example: `$default`
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
