import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  PostToConnectionCommandOutput as PostToConnectionResponse,
  DeleteConnectionCommandOutput as DeleteConnectionResponse,
  GetConnectionCommandOutput as GetConnectionResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-apigatewaymanagementapi";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteApiGatewayManagementApi {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html API Gateway WebSocket Management API: PostToConnection}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/apigatewaymanagementapi/readme.md#PostToConnection API Gateway WebSocket Management API: PostToConnection}
   */
  PostToConnection: (input: AwsLiteMethodOptions & { ConnectionId: string, ApiUrl?: string, ApiId?: string, Stage?: string, Data?: string | Record<string, any> }) => Promise<PostToConnectionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html API Gateway WebSocket Management API: DeleteConnection}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/apigatewaymanagementapi/readme.md#DeleteConnection API Gateway WebSocket Management API: DeleteConnection}
   */
  DeleteConnection: (input: AwsLiteMethodOptions & { ConnectionId: string, ApiUrl?: string, ApiId?: string, Stage?: string }) => Promise<DeleteConnectionResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html API Gateway WebSocket Management API: GetConnection}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/apigatewaymanagementapi/readme.md#GetConnection API Gateway WebSocket Management API: GetConnection}
   */
  GetConnection: (input: AwsLiteMethodOptions & { ConnectionId: string, ApiUrl?: string, ApiId?: string, Stage?: string }) => Promise<GetConnectionResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    ApiGatewayManagementApi: AwsLiteApiGatewayManagementApi;
  }
}

export type {
  AwsLiteApiGatewayManagementApi,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  PostToConnectionResponse,
  DeleteConnectionResponse,
  GetConnectionResponse,
  // $EXPORT_END
}
