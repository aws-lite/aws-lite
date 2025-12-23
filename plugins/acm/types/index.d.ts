import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  DeleteCertificateCommandOutput as DeleteCertificateResponse,
  DescribeCertificateCommandOutput as DescribeCertificateResponse,
  ListCertificatesCommandOutput as ListCertificatesResponse,
  RequestCertificateCommandOutput as RequestCertificateResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-acm";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteACM {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/acm/latest/APIReference/API_DeleteCertificate.html ACM: DeleteCertificate}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/acm/readme.md#DeleteCertificate ACM: DeleteCertificate}
   */
  DeleteCertificate: (input: AwsLiteMethodOptions & { CertificateArn: string }) => Promise<DeleteCertificateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/acm/latest/APIReference/API_DescribeCertificate.html ACM: DescribeCertificate}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/acm/readme.md#DescribeCertificate ACM: DescribeCertificate}
   */
  DescribeCertificate: (input: AwsLiteMethodOptions & { CertificateArn: string }) => Promise<DescribeCertificateResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/acm/latest/APIReference/API_ListCertificates.html ACM: ListCertificates}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/acm/readme.md#ListCertificates ACM: ListCertificates}
   */
  ListCertificates: (input: AwsLiteMethodOptions & { CertificateStatuses?: any[], Includes?: Record<string, any>, MaxItems?: number, NextToken?: string, SortBy?: string, SortOrder?: string, paginate?: boolean | string }) => Promise<ListCertificatesResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/acm/latest/APIReference/API_RequestCertificate.html ACM: RequestCertificate}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/acm/readme.md#RequestCertificate ACM: RequestCertificate}
   */
  RequestCertificate: (input: AwsLiteMethodOptions & { DomainName: string, CertificateAuthorityArn?: string, DomainValidationOptions?: any[], IdempotencyToken?: string, KeyAlgorithm?: string, Options?: Record<string, any>, SubjectAlternativeNames?: any[], Tags?: any[], ValidationMethod?: string }) => Promise<RequestCertificateResponse>
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
  DeleteCertificateResponse,
  DescribeCertificateResponse,
  ListCertificatesResponse,
  RequestCertificateResponse,
  // $EXPORT_END
}
