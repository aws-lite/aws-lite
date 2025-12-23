import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  ListAccountsCommandOutput as ListAccountsResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-organizations";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteOrganizations {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts.html Organizations: ListAccounts}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/organizations/readme.md#ListAccounts Organizations: ListAccounts}
   */
  ListAccounts: (input: AwsLiteMethodOptions & { MaxResults?: number, NextToken?: string, paginate?: boolean | string }) => Promise<ListAccountsResponse>
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
  ListAccountsResponse,
  // $EXPORT_END
}
