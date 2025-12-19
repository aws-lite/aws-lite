import {
  /* ! Do not remove IMPORTS_START / IMPORTS_END ! */
  // $IMPORTS_START
  AssumeRoleCommandOutput as AssumeRoleResponse,
  AssumeRoleWithSAMLCommandOutput as AssumeRoleWithSAMLResponse,
  AssumeRoleWithWebIdentityCommandOutput as AssumeRoleWithWebIdentityResponse,
  DecodeAuthorizationMessageCommandOutput as DecodeAuthorizationMessageResponse,
  GetAccessKeyInfoCommandOutput as GetAccessKeyInfoResponse,
  GetCallerIdentityCommandOutput as GetCallerIdentityResponse,
  GetFederationTokenCommandOutput as GetFederationTokenResponse,
  GetSessionTokenCommandOutput as GetSessionTokenResponse,
  // $IMPORTS_END
} from "@aws-sdk/client-sts";

import type { AwsLiteMethodOptions } from "@aws-lite/client";

declare interface AwsLiteSTS {
  /* ! Do not remove METHODS_START / METHODS_END ! */
  // $METHODS_START
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html STS: AssumeRole}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#AssumeRole STS: AssumeRole}
   */
  AssumeRole: (input: AwsLiteMethodOptions & { RoleArn: string, RoleSessionName: string, DurationSeconds?: number, ExternalId?: string, Policy?: string, PolicyArns?: any[], ProvidedContexts?: any[], SerialNumber?: string, SourceIdentity?: string, Tags?: any[], TokenCode?: string, TransitiveTagKeys?: any[] }) => Promise<AssumeRoleResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithSAML.html STS: AssumeRoleWithSAML}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#AssumeRoleWithSAML STS: AssumeRoleWithSAML}
   */
  AssumeRoleWithSAML: (input: AwsLiteMethodOptions & { RoleArn: string, PrincipalArn: string, SAMLAssertion: string, DurationSeconds?: number, Policy?: string, PolicyArns?: any[] }) => Promise<AssumeRoleWithSAMLResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRoleWithWebIdentity.html STS: AssumeRoleWithWebIdentity}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#AssumeRoleWithWebIdentity STS: AssumeRoleWithWebIdentity}
   */
  AssumeRoleWithWebIdentity: (input: AwsLiteMethodOptions & { RoleArn: string, RoleSessionName: string, WebIdentityToken: string, DurationSeconds?: number, ProviderId?: string, Policy?: string, PolicyArns?: any[] }) => Promise<AssumeRoleWithWebIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_DecodeAuthorizationMessage.html STS: DecodeAuthorizationMessage}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#DecodeAuthorizationMessage STS: DecodeAuthorizationMessage}
   */
  DecodeAuthorizationMessage: (input: AwsLiteMethodOptions & { EncodedMessage: string }) => Promise<DecodeAuthorizationMessageResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_GetAccessKeyInfo.html STS: GetAccessKeyInfo}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#GetAccessKeyInfo STS: GetAccessKeyInfo}
   */
  GetAccessKeyInfo: (input: AwsLiteMethodOptions & { AccessKeyId: string }) => Promise<GetAccessKeyInfoResponse>
  /** @description aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#GetCallerIdentity STS: GetCallerIdentity} */
  GetCallerIdentity: (input?: AwsLiteMethodOptions) => Promise<GetCallerIdentityResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_GetFederationToken.html STS: GetFederationToken}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#GetFederationToken STS: GetFederationToken}
   */
  GetFederationToken: (input: AwsLiteMethodOptions & { Name: string, DurationSeconds?: number, Policy?: string, PolicyArns?: any[], Tags?: any[] }) => Promise<GetFederationTokenResponse>
  /**
   * @description
   * - AWS docs: {@link https://docs.aws.amazon.com/STS/latest/APIReference/API_GetSessionToken.html STS: GetSessionToken}
   * - aws-lite docs: {@link https://github.com/aws-lite/aws-lite/blob/main/plugins/sts/readme.md#GetSessionToken STS: GetSessionToken}
   */
  GetSessionToken: (input: AwsLiteMethodOptions & { DurationSeconds?: number, SerialNumber?: string, TokenCode?: string }) => Promise<GetSessionTokenResponse>
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
  AssumeRoleResponse,
  AssumeRoleWithSAMLResponse,
  AssumeRoleWithWebIdentityResponse,
  DecodeAuthorizationMessageResponse,
  GetAccessKeyInfoResponse,
  GetCallerIdentityResponse,
  GetFederationTokenResponse,
  GetSessionTokenResponse,
  // $EXPORT_END
}
