import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  ListAccountsCommandOutput as ListAccountsResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-organizations";

declare interface AwsLiteOrganizations {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/organizations/latest/APIReference/API_ListAccounts Organizations: ListAccounts}
   * - aws-lite docs: {@link https://github.com/architect/aws-lite/blob/main/plugins/organizations/readme.md#ListAccounts Organizations: ListAccounts}
   */
  ListAccounts: (input: { MaxResults?: number, NextToken?: string, paginate?: boolean }) => Promise<ListAccountsResponse>
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
