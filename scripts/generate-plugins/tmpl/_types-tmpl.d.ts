import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  // $IMPORTS_END
} from "@aws-sdk/client-$NAME";

declare interface AwsLite$SERVICE {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    $NAME_PROP: AwsLite$SERVICE;
  }
}
