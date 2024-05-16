import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "@aws-sdk/client-acm";

declare interface AwsLiteACM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START

  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    ACM: AwsLiteACM;
  }
}

export type {
  AwsLiteACM,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START

  // $EXPORT_END
}
