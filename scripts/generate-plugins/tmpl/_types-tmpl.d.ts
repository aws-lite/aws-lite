import "@aws-lite/client";
import {
  // $IMPORTS_START
  // $IMPORTS_END
} from "@aws-sdk/client-$NAME";

declare interface AwsLite$SERVICE {
  // $METHODS_START
  // $METHODS_END
}

declare global {
  interface AwsLiteClient {
    $NAME: AwsLite$SERVICE;
  }
}
