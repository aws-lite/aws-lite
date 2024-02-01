import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "@aws-sdk/client-apigateway";

declare interface AwsLiteAPIGateway {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START

  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    APIGateway: AwsLiteAPIGateway;
  }
}

export type {
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START

  // $EXPORT_END
}
