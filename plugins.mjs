/**
 * `@aws-lite/*` plugins:
 * - name: the official service name; example: `cloudformation`, see also: `src/services.js`
 * - service: the commonly recognized, more formal version (including casing); example: `CloudFormation`
 * - maintainers: array of GitHub handles of the individual(s) or org(s) responsible for maintaining the plugin
 * - types: set to `false` to disable generating type definitions
 */
const plugins = [
  { name: 'dynamodb',   service: 'DynamoDB',          maintainers: [ '@architect' ] },
  { name: 'rds-data',   service: 'RDS Data Service',  maintainers: [ '@andybee' ] },
  { name: 's3',         service: 'S3',                maintainers: [ '@architect' ] },
  { name: 'sns',        service: 'SNS',               maintainers: [ '@architect' ] },
  { name: 'sqs',        service: 'SQS',               maintainers: [ '@architect' ] },
  { name: 'ssm',        service: 'SSM',               maintainers: [ '@architect' ] },
]
export default plugins.sort((a, b) => a.name > b.name ? 1 : -1)
