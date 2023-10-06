import {
  // $IMPORTS_START
  // $IMPORTS_END
} from "@aws-sdk/client-$NAME";

declare interface AwsLite$SERVICE {
  // $METHODS_START
  // $METHODS_END
}

declare module "@aws-lite/client" {
  interface AwsLiteClient {
    $NAME: AwsLite$SERVICE;
  }
}
