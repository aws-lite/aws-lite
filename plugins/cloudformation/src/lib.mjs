const isString = i => typeof i === 'string'
const isBool = i => typeof i === 'boolean'
const isNum = i => Number.isInteger(i)
const isLiteral = i => isString(i) || isBool(i) || isNum(i)
const isArr = i => Array.isArray(i)
const isObj = i => typeof i === 'object' && Object.keys(i).length

// Annoyingly one array serializes to `entry` instead of `member`
// TODO: maybe find another way to handle this since most arrays are `member`
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
  ResourceTypeSummaries: 'member',
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
  RelatedResources: 'member',
  // ListResourceScanResources
  // TODO
  // ListResourceScans
  ResourceScanSummaries: 'member',
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

// Resource objects have a nested array `ResourceIdentifier` that serializes differently than everything else in cloudformation for some reason...
function querystringifyResources (resourcesArrayObject) {
  let result = {}
  let i = 1
  let baseKey = Object.keys(resourcesArrayObject)[0]
  resourcesArrayObject[baseKey].forEach(resource => {
    Object.entries(resource).forEach(([ resourceKey, resourceValue ]) => {
      if (resourceKey === 'ResourceIdentifier') {
        let j = 1
        Object.entries(resourceValue).forEach(([ idKey, idValue ]) => {
          result[`${baseKey}.member.${i}.ResourceIdentifier.entry.${j}.key`] = idKey
          result[`${baseKey}.member.${i}.ResourceIdentifier.entry.${j}.value`] = idValue
          j++
        })
      }
      else {
        result[`${baseKey}.member.${i}.${resourceKey}`] = resourceValue
      }
    })
    i++
  })
  return result
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
      }
      else if (maxDepth > 0) deSerializeObject(value, maxDepth - 1)
    })
  }
  return obj
}

function deSerializeResources (resources) {
  let result = {}
  result = resources.map(i => {
    const resource = { ...i }
    resource.ResourceIdentifier = {}
    i.ResourceIdentifier.forEach(({ key, value }) => {
      resource.ResourceIdentifier[key] = value
    })
    return resource
  })
  return result
}

export {
  querystringifyParams,
  querystringifyResources,
  deSerializeObject,
  deSerializeResources,
}
