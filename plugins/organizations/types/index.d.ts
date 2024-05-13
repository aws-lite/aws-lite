import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START

  // $IMPORTS_END
} from "@aws-sdk/client-organizations";

declare interface AwsLiteOrganizations {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START

  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    Organizations: AwsLiteOrganizations;
  }
}

export type {
  AwsLiteOrganizations,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START

  // $EXPORT_END
}
