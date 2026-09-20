import type {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  // $IMPORTS_END
} from "./aws-sdk.js";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLite$PROPERTY {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    $PROPERTY: AwsLite$PROPERTY;
  }
}

export type {
  AwsLite$PROPERTY,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  // $EXPORT_END
}

declare const plugin: {
  name: "$PACKAGE_NAME";
  service: string;
  property: string;
  methods: Record<string, any>;
  [key: string]: any;
};

export default plugin;
