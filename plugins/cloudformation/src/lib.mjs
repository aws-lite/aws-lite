const isString = i => typeof i === 'string'
const isBool = i => typeof i === 'boolean'
const isNum = i => Number.isInteger(i)
const isLiteral = i => isString(i) || isBool(i) || isNum(i)
const isArr = i => Array.isArray(i)
const isObj = i => typeof i === 'object' && Object.keys(i).length

// Notes on all response array properties
// Seems everything is serialized as a 'member' property, can probably turn this into a set to reduce clutter
const arrayProperties = {
  // BatchDescribeTypeConfigurations
  Errors: 'member',
  TypeConfigurations: 'member',
  UnprocessedTypeConfigurations: 'member',
  // DescribeAccountLimits
  AccountLimits: 'member',
  // DescribeChangeSet
  Parameters: 'member',
  Changes: 'member',
  Scope: 'member',
  Details: 'member',
  // DescribeChangeSetHooks
  Hooks: 'member',
  // DescribeGeneratedTemplate
  Resources: 'member',
  ResourceIdentifier: 'entry',
  Properties: 'member',
  Warnings: 'member',
  // DescribeResourceScan
  // ResourceTypes: 'member',
  // DescribeStackEvents
  StackEvents: 'member',
  // DescribeStackResourceDrifts
  StackResourceDrifts: 'member',
  PropertyDifferences: 'member',
  // DescribeStackResources
  StackResources: 'member',
  // DescribeStacks
  Stacks: 'member',
  Outputs: 'member',
  // DescribeStackSet
  Capabilities: 'member',
  // Parameters: 'member',
  Tags: 'member',
  // DetectStackResourceDrift
  // PropertyDifferences: 'member',
  // GetTemplate
  StagesAvailable: 'member',
  // GetTemplateSummary
  // Parameters: 'member',
  AllowedValues: 'member',
  // Capabilities: 'member',
  ResourceTypes: 'member',
  DeclaredTransforms: 'member',
  ResourceIdentifierSummaries: 'member',
  LogicalResourceIds: 'member',
  ResourceIdentifiers: 'member',
  // Warnings: 'member',
  UnrecognizedResourceTypes: 'member',
  // ListChangeSets
  Summaries: 'member',
  // ListExports
  Exports: 'member',
  // ListGeneratedTemplates
  // TODO
  // ListImports
  Imports: 'member',
  // ListResourceScanRelatedResources
  // TODO
  // ListResourceScanResources
  // TODO
  // ListResourceScans
  // TODO
  // ListStackInstanceResourceDrifts
  // TODO
  // ListStackInstances
  // Summaries: 'member',
  // ListStackResources
  StackResourceSummaries: 'member',
  // ListStacks
  StackSummaries: 'member',
  // ResourceTypes: 'member',
  // ListStackSetAutoDeploymentTargets
  // Summaries: 'member',
  // ListStackSetOperationResults
  // Summaries: 'member',
  // ListStackSetOperations
  // Summaries: 'member',
  // ListStackSets
  // Summaries: 'member',
  // ListTypeRegistrations
  RegistrationTokenList: 'member',
  // ListTypes
  TypeSummaries: 'member',
  // ListTypeVersions
  TypeVersionSummaries: 'member',
  // ValidateTemplate
  // Parameters: 'member',
  // Capabilities: 'member',
  // DeclaredTransforms: 'member',
}

function querystringifyParams (obj) {
  const raw = {}

  function walk (item, propName) {
    if (isLiteral(item)) {
      raw[propName] = item
    }
    else if (isArr(item)) {
      item.forEach((item, index) => {
        walk(item, `${propName}.member.${index += 1}`)
      })
    }
    else if (isObj(item)) {
      Object.entries(item).forEach(([ key, value ]) => {
        walk(value, `${propName}.${key}`)
      })
    }
  }

  Object.entries(obj).forEach(([ key, value ]) => walk(value, key))

  const query = Object.fromEntries(
    Object.entries(raw)
      .filter(([ , v ]) => typeof v !== 'undefined')
      .sort(([ kA ], [ kB ]) => kA > kB ? 1 : -1),
  )

  return query
}

function deSerializeObject (obj, maxDepth = 0, arrayProps = arrayProperties) {
  if (maxDepth < 0) return obj
  if (typeof obj === 'object') {
    Object.entries(obj).forEach(([ key, value ]) => {
      const arrKey = arrayProps[key]
      if (arrKey) {
        let temp = []
        if (value[arrKey]) temp = Array.isArray(value[arrKey]) ? value[arrKey] : [ value[arrKey] ]

        if (maxDepth > 0) temp = temp.map(i => deSerializeObject(i, maxDepth - 1))
        obj[key] = temp
        // console.log(value)
      }
      else if (maxDepth > 0) deSerializeObject(value, maxDepth - 1)
    })
  }
  return obj
}

export {
  querystringifyParams,
  deSerializeObject,
}
