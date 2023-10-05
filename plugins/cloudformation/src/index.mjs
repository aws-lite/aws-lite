const service = 'cloudformation'
const required = true

/**
 * CloudFormation plugin maintained by: @architect
 */
export default {
  service,
  methods: {
    //
    // UpdateStack
    // https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_UpdateStack.html
    //
    // DescribeStacks
    // https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStacks.html
    //
    // DescribeStackEvents
    // https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_DescribeStackEvents.html
    //
    CreateStack: {
      awsDoc: 'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html',
      validate: {
        StackName: {
          type: 'string', 
          required, 
          comment: "A region unique name associated with the stack."
        },
        TemplateBody: { 
          type: 'string', 
          required
        },
        Capabilities: {
          type: 'array', 
          comment:'https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/API_CreateStack.html' 
        },
      },

      async request ({ StackName, TemplateBody,  Capabilities=['CAPABILITY_IAM', 'CAPABILITY_AUTO_EXPAND']}) {
        return {
          query: {
            StackName, TemplateBody, Capabilities
          }
        }
      },

      async response (raw) {
        return { raw }
      },

      async error (err) {
        if (err.statusCode === 400 &&
            err?.error?.message?.match(/validation error/)) {
          err.metadata.type = 'Validation error'
        }
        return err
      }
    }
  }
}
