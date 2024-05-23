import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "@aws-sdk/client-iam";

declare interface AwsLiteIAM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START

  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    IAM: AwsLiteIAM;
  }
}

export type {
  AwsLiteIAM,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START

  // $EXPORT_END
}
