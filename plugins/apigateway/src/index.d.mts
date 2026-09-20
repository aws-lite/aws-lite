import type {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "./aws-sdk.js";

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
  AwsLiteAPIGateway,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START

  // $EXPORT_END
}

declare const plugin: {
  name: "@aws-lite/apigateway";
  service: string;
  property: string;
  methods: Record<string, any>;
  [key: string]: any;
};

export default plugin;
