import test from 'node:test'
import { querystringifyParams } from '../src/lib.mjs'

const params = {
  StackName: 'a_stack_name',
  Capabilities: [ 'CAPABILITY_IAM', 'CAPABILITY_NAMED_IAM', 'CAPABILITY_AUTO_EXPAND' ],
  ClientRequestToken: 'a_client_request_token',
  DisableRollback: true,
  EnableTerminationProtection: false,
  NotificationARNs: [ 'ARN1', 'ARN2', 'ARN3' ],
  OnFailure: 'DELETE',
  Parameters: [
    {
      ParameterKey: 'A_KEY_1',
      ParameterValue: 'A_VAL_1',
      ResolvedValue: 'RESOLVED_VAL_1',
      UsePreviousValue: true,
    },
    {
      ParameterKey: 'A_KEY_2',
      ParameterValue: 'A_VAL_2',
      ResolvedValue: 'RESOLVED_VAL_2',
      UsePreviousValue: false,
    },
  ],
  ResourceTypes: [
    'some_resource_type',
  ],
  RoleARN: 'arn::whatever',
  RollbackConfiguration: {
    MonitoringTimeInMinutes: 1,
    RollbackTriggers: [
      {
        Arn: 'arn::rollback',
        Type: 'rollback_type',
      },
    ],
  },
  StackPolicyBody: JSON.stringify({ ok: true }),
  StackPolicyURL: 'stack_policy_url',
  Tags: [
    {
      Key: 'TAG_KEY_1',
      Value: 'TAG_VAL_1',
    },
    {
      Key: 'TAG_KEY_2',
      Value: 'TAG_VAL_2',
    },
  ],
  TemplateBody: JSON.stringify({ template: true }),
  TemplateURL: 's3://bucket/template',
  TimeoutInMinutes: 1,
}

const expecting = {
  'Capabilities.member.1':                                'CAPABILITY_IAM',
  'Capabilities.member.2':                                'CAPABILITY_NAMED_IAM',
  'Capabilities.member.3':                                'CAPABILITY_AUTO_EXPAND',
  'ClientRequestToken':                                   'a_client_request_token',
  'DisableRollback':                                      true,
  'EnableTerminationProtection':                          false,
  'NotificationARNs.member.1':                            'ARN1',
  'NotificationARNs.member.2':                            'ARN2',
  'NotificationARNs.member.3':                            'ARN3',
  'OnFailure':                                            'DELETE',
  'Parameters.member.1.ParameterKey':                     'A_KEY_1',
  'Parameters.member.1.ParameterValue':                   'A_VAL_1',
  'Parameters.member.1.ResolvedValue':                    'RESOLVED_VAL_1',
  'Parameters.member.1.UsePreviousValue':                 true,
  'Parameters.member.2.ParameterKey':                     'A_KEY_2',
  'Parameters.member.2.ParameterValue':                   'A_VAL_2',
  'Parameters.member.2.ResolvedValue':                    'RESOLVED_VAL_2',
  'Parameters.member.2.UsePreviousValue':                 false,
  'ResourceTypes.member.1':                               'some_resource_type',
  'RoleARN':                                              'arn::whatever',
  'RollbackConfiguration.MonitoringTimeInMinutes':        1,
  'RollbackConfiguration.RollbackTriggers.member.1.Arn':  'arn::rollback',
  'RollbackConfiguration.RollbackTriggers.member.1.Type': 'rollback_type',
  'StackName':                                            'a_stack_name',
  'StackPolicyBody':                                      JSON.stringify({ ok: true }),
  'StackPolicyURL':                                       'stack_policy_url',
  'Tags.member.1.Key':                                    'TAG_KEY_1',
  'Tags.member.1.Value':                                  'TAG_VAL_1',
  'Tags.member.2.Key':                                    'TAG_KEY_2',
  'Tags.member.2.Value':                                  'TAG_VAL_2',
  'TemplateBody':                                         JSON.stringify({ template: true }),
  'TemplateURL':                                          's3://bucket/template',
  'TimeoutInMinutes':                                     1,
}

test('Convert data into query params object', t => {
  const result = querystringifyParams(params)
  t.assert.deepStrictEqual(result, expecting, 'Converted data into CloudFormation query params object')
})
