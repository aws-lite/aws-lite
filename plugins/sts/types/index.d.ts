import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  GetCallerIdentityCommandOutput as GetCallerIdentityResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-sts";

declare interface AwsLiteSTS {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /** @description aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/sts/readme.md#GetCallerIdentity STS: GetCallerIdentity} */
  GetCallerIdentity: () => Promise<GetCallerIdentityResponse>
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    STS: AwsLiteSTS;
  }
}

export type {
  AwsLiteSTS,
  /* ! Do not remove EXPORT_START / EXPORT_END ! */
  // $EXPORT_START
  GetCallerIdentityResponse,
  // $EXPORT_END
}
