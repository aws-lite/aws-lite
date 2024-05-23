/**
 * `@aws-lite/*` plugins:
 * - service [required]: the official service name, usually corresponding to the API subdomain; also maps to the package name and plugin folder; for types, this should generally match the AWS SDK v3 package names; example: `cloudformation`, see also: `src/lib/services.js`
 * - property [optional]: service property name to be used in code; an unenumerable lowcase alias will be available in the client
 * - display: the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * - maintainers: array of GitHub handles of the individual(s) or org(s) responsible for maintaining the plugin
 * - types: set to `false` to temporarily disable generating type definitions
 */
const maintainers = [ '@architect' ]
const plugins = [
  { service: 'acm', property: 'ACM', display: 'ACM', maintainers },
  {
    // Technically the service here is `execute-api`, but that's not really recognized
    service: 'apigatewaymanagementapi', property: 'ApiGatewayManagementApi',
    display: 'API Gateway WebSocket Management API', maintainers,
  },
  { service: 'apigatewayv2', property: 'APIGatewayV2', display: 'API Gateway V2', maintainers },
  { service: 'cloudformation', property: 'CloudFormation', display: 'CloudFormation', maintainers },
  { service: 'cloudfront', property: 'CloudFront', display: 'CloudFront', maintainers },
  { service: 'cloudwatch-logs', property: 'CloudWatchLogs', display: 'CloudWatch Logs', maintainers },
  { service: 'dynamodb', property: 'DynamoDB', display: 'DynamoDB', maintainers },
  { service: 'iam', property: 'IAM', display: 'IAM', maintainers },
  { service: 'lambda', property: 'Lambda', display: 'Lambda', maintainers },
  { service: 'organizations', property: 'Organizations', display: 'Organizations', maintainers },
  {
    service: 'rds-data', property: 'RDSData',
    display: 'RDS Data Service', maintainers: [ '@andybee' ],
  },
  { service: 'route53', property: 'Route53', display: 'Route 53', maintainers },
  { service: 's3', property: 'S3', display: 'S3', maintainers },
  { service: 'sns', property: 'SNS', display: 'SNS', maintainers },
  { service: 'sqs', property: 'SQS', display: 'SQS', maintainers },
  { service: 'ssm', property: 'SSM', display: 'SSM', maintainers },
  { service: 'sts', property: 'STS', display: 'STS', maintainers },
]
export default plugins.sort((a, b) => a.display > b.display ? 1 : -1)
