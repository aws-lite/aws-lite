/**
 * `@aws-lite/*` plugins:
 * - service: the official service name, usually corresponding to the API subdomain; also maps to the package name and plugin folder; for types, this should generally match the AWS SDK v3 package names; example: `cloudformation`, see also: `src/services.js`
 * - property: service property name to be used in code; an unenumerable lowcase alias will be available in the client
 * - display: the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * - maintainers: array of GitHub handles of the individual(s) or org(s) responsible for maintaining the plugin
 * - types: set to `false` to temporarily disable generating type definitions
 */
const plugins = [
  {
    service: 'dynamodb', property: 'DynamoDB',
    display: 'DynamoDB', maintainers: [ '@architect' ]
  },
  {
    service: 'rds-data', property: 'RDSData',
    display: 'RDS Data Service', maintainers: [ '@andybee' ]
  },
  { service: 's3', property: 'S3', display: 'S3', maintainers: [ '@architect' ] },
  { service: 'sns', property: 'SNS', display: 'SNS', maintainers: [ '@architect' ] },
  { service: 'sqs', property: 'SQS', display: 'SQS', maintainers: [ '@architect' ] },
  { service: 'ssm', property: 'SSM', display: 'SSM', maintainers: [ '@architect' ] },
]
export default plugins.sort((a, b) => a.display > b.display ? 1 : -1)
