# `@aws-lite/ses`

> Official `aws-lite` plugin for SES

> Maintained by: [@architect](https://github.com/architect)


## Install

```sh
npm i @aws-lite/ses
```

Optionally install types:

```sh
npm i -D @aws-lite/ses-types
```


## Reference

[Reference documentation with examples at aws-lite.org](https://aws-lite.org/services/ses)


## Methods

<!-- ! Do not remove METHOD_DOCS_START / METHOD_DOCS_END ! -->
<!-- METHOD_DOCS_START -->
### `SendEmail`

[Canonical AWS API doc](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)

Properties:
- **`Source` (string) [required]**
  - Email address that is sending the email; must be a verified SES identity
- **`Destination` (object) [required]**
  - Destination for the email, composed of `ToAddresses`, `CcAddresses`, and `BccAddresses` arrays
  - [More details (AWS)](https://docs.aws.amazon.com/ses/latest/APIReference/API_Destination.html)
- **`Message` (object) [required]**
  - Message to be sent, composed of a `Subject` and `Body` (with `Text` and/or `Html` parts)
  - [More details (AWS)](https://docs.aws.amazon.com/ses/latest/APIReference/API_Message.html)
- **`ConfigurationSetName` (string)**
  - Name of the configuration set to use when sending the email
- **`ReplyToAddresses` (array)**
  - Array of reply-to email addresses
- **`ReturnPath` (string)**
  - Email address to which bounces and complaints are forwarded when feedback forwarding is enabled
- **`ReturnPathArn` (string)**
  - ARN of the identity associated with the sending authorization policy permitting use of the `ReturnPath` address
- **`SourceArn` (string)**
  - ARN of the identity associated with the sending authorization policy permitting use of the `Source` address
- **`Tags` (array)**
  - Array of `{ Name, Value }` message tags to apply to the email
  - [More details (AWS)](https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html)


### `SendRawEmail`

[Canonical AWS API doc](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendRawEmail.html)

Properties:
- **`RawMessage` (object) [required]**
  - Raw email message, as `{ Data }` where `Data` is the entire base64-encoded MIME message
  - [More details (AWS)](https://docs.aws.amazon.com/ses/latest/APIReference/API_RawMessage.html)
- **`ConfigurationSetName` (string)**
  - Name of the configuration set to use when sending the email
- **`Destinations` (array)**
  - Array of destination email addresses (To:, CC:, and BCC:)
- **`FromArn` (string)**
  - ARN of the identity associated with the sending authorization policy permitting the specified `From` address
- **`ReturnPathArn` (string)**
  - ARN of the identity associated with the sending authorization policy permitting use of the `ReturnPath` address
- **`Source` (string)**
  - Identity email address sending the email; if omitted, a `From` address must be present in the raw message
- **`SourceArn` (string)**
  - ARN of the identity associated with the sending authorization policy permitting use of the `Source` address
- **`Tags` (array)**
  - Array of `{ Name, Value }` message tags to apply to the email
  - [More details (AWS)](https://docs.aws.amazon.com/ses/latest/APIReference/API_MessageTag.html)


### Methods yet to be implemented

> Please help out by [opening a PR](https://github.com/aws-lite/aws-lite#authoring-aws-lite-plugins)!

- [`CloneReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CloneReceiptRuleSet.html)
- [`CreateConfigurationSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSet.html)
- [`CreateConfigurationSetEventDestination`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetEventDestination.html)
- [`CreateConfigurationSetTrackingOptions`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateConfigurationSetTrackingOptions.html)
- [`CreateCustomVerificationEmailTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateCustomVerificationEmailTemplate.html)
- [`CreateReceiptFilter`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptFilter.html)
- [`CreateReceiptRule`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRule.html)
- [`CreateReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateReceiptRuleSet.html)
- [`CreateTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_CreateTemplate.html)
- [`DeleteConfigurationSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSet.html)
- [`DeleteConfigurationSetEventDestination`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetEventDestination.html)
- [`DeleteConfigurationSetTrackingOptions`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteConfigurationSetTrackingOptions.html)
- [`DeleteCustomVerificationEmailTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteCustomVerificationEmailTemplate.html)
- [`DeleteIdentity`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentity.html)
- [`DeleteIdentityPolicy`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteIdentityPolicy.html)
- [`DeleteReceiptFilter`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptFilter.html)
- [`DeleteReceiptRule`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRule.html)
- [`DeleteReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteReceiptRuleSet.html)
- [`DeleteTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteTemplate.html)
- [`DeleteVerifiedEmailAddress`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DeleteVerifiedEmailAddress.html)
- [`DescribeActiveReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeActiveReceiptRuleSet.html)
- [`DescribeConfigurationSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeConfigurationSet.html)
- [`DescribeReceiptRule`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRule.html)
- [`DescribeReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_DescribeReceiptRuleSet.html)
- [`GetAccountSendingEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetAccountSendingEnabled.html)
- [`GetCustomVerificationEmailTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetCustomVerificationEmailTemplate.html)
- [`GetIdentityDkimAttributes`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityDkimAttributes.html)
- [`GetIdentityMailFromDomainAttributes`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityMailFromDomainAttributes.html)
- [`GetIdentityNotificationAttributes`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityNotificationAttributes.html)
- [`GetIdentityPolicies`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityPolicies.html)
- [`GetIdentityVerificationAttributes`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetIdentityVerificationAttributes.html)
- [`GetSendQuota`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendQuota.html)
- [`GetSendStatistics`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetSendStatistics.html)
- [`GetTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_GetTemplate.html)
- [`ListConfigurationSets`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListConfigurationSets.html)
- [`ListCustomVerificationEmailTemplates`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListCustomVerificationEmailTemplates.html)
- [`ListIdentities`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentities.html)
- [`ListIdentityPolicies`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListIdentityPolicies.html)
- [`ListReceiptFilters`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptFilters.html)
- [`ListReceiptRuleSets`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListReceiptRuleSets.html)
- [`ListTemplates`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListTemplates.html)
- [`ListVerifiedEmailAddresses`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ListVerifiedEmailAddresses.html)
- [`PutConfigurationSetDeliveryOptions`](https://docs.aws.amazon.com/ses/latest/APIReference/API_PutConfigurationSetDeliveryOptions.html)
- [`PutIdentityPolicy`](https://docs.aws.amazon.com/ses/latest/APIReference/API_PutIdentityPolicy.html)
- [`ReorderReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_ReorderReceiptRuleSet.html)
- [`SendBounce`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBounce.html)
- [`SendBulkTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html)
- [`SendCustomVerificationEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendCustomVerificationEmail.html)
- [`SendTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html)
- [`SetActiveReceiptRuleSet`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetActiveReceiptRuleSet.html)
- [`SetIdentityDkimEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityDkimEnabled.html)
- [`SetIdentityFeedbackForwardingEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityFeedbackForwardingEnabled.html)
- [`SetIdentityHeadersInNotificationsEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityHeadersInNotificationsEnabled.html)
- [`SetIdentityMailFromDomain`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityMailFromDomain.html)
- [`SetIdentityNotificationTopic`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetIdentityNotificationTopic.html)
- [`SetReceiptRulePosition`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SetReceiptRulePosition.html)
- [`TestRenderTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_TestRenderTemplate.html)
- [`UpdateAccountSendingEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateAccountSendingEnabled.html)
- [`UpdateConfigurationSetEventDestination`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetEventDestination.html)
- [`UpdateConfigurationSetReputationMetricsEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetReputationMetricsEnabled.html)
- [`UpdateConfigurationSetSendingEnabled`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetSendingEnabled.html)
- [`UpdateConfigurationSetTrackingOptions`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateConfigurationSetTrackingOptions.html)
- [`UpdateCustomVerificationEmailTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateCustomVerificationEmailTemplate.html)
- [`UpdateReceiptRule`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateReceiptRule.html)
- [`UpdateTemplate`](https://docs.aws.amazon.com/ses/latest/APIReference/API_UpdateTemplate.html)
- [`VerifyDomainDkim`](https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainDkim.html)
- [`VerifyDomainIdentity`](https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyDomainIdentity.html)
- [`VerifyEmailAddress`](https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailAddress.html)
- [`VerifyEmailIdentity`](https://docs.aws.amazon.com/ses/latest/APIReference/API_VerifyEmailIdentity.html)
<!-- METHOD_DOCS_END -->


## Learn more

- [More information about the `aws-lite` plugin API](https://aws-lite.org/plugin-api)
- [Learn about contributing to this and other `aws-lite` plugins](https://aws-lite.org/contributing)
