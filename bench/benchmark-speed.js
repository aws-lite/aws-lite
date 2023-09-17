#! /usr/bin/env node

let { join } = require('path')
let { execSync }  = require('child_process')
let { readFileSync } = require('fs')
let percentile = require('percentile')
let { formatSize, roundHalf } = require('./_helpers')

let benchmarkRuns = process.env.AWS_LITE_BENCHMARK_RUNS || 50
let harness = readFileSync(join(__dirname, '_harness.js')).toString()

let benchmarks = {
  'aws-lite': {
    import: {
      script2: `require('../');`,
      runs: [],
    },
    'import & instantiate': {
      script1: ``,
      script2: `let awsLite = require('../'); let client = awsLite({ region: 'us-west-1' });`,
      runs: [],
    },
  },
  'AWS SDK v2': {
    import: {
      script2: `
        process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = true;
        require('aws-sdk');
      `,
      runs: [],
    },
    'import & instantiate': {
      script2: `
        process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = true;
        let Aws = require('aws-sdk');
        let aws = new Aws.DynamoDB({ region: 'us-west-1' });
      `,
      runs: [],
    },
  },
  'AWS SDK v2 (single client)': {
    import: {
      script2: `
        process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = true;
        require('aws-sdk/clients/dynamodb');
      `,
      runs: [],
    },
    'import & instantiate': {
      script2: `
        process.env.AWS_SDK_JS_SUPPRESS_MAINTENANCE_MODE_MESSAGE = true;
        let DynamoDB = require('aws-sdk/clients/dynamodb');
        let aws = new DynamoDB({ region: 'us-west-1' });
      `,
      runs: [],
    },
  },
  'AWS SDK v3': {
    import: {
      script2: `require('@aws-sdk/client-dynamodb');`,
      runs: [],
    },
    'import & instantiate': {
      script2: `
        let DynamoDB = require('@aws-sdk/client-dynamodb');
        let cmd = new DynamoDB.GetItemCommand({ RequestItem: { 'foo': { Keys: ['bar'] } } });
      `,
      runs: [],
    },
  }
}

let benchmarksToRun = [
  // 'import', // Fine, but doesn't really tell us as much import & instantiate
  'import & instantiate',
  // TODO: round trip request to DynamoDB
]

let awsLiteAvgSpeed
let awsLiteP95Speed
let awsLiteAvgMemory
let awsLiteP95Memory
let slowerAvg = '', slowerP95 = '', largerAvg = '', largerP95 = ''

for (let running of benchmarksToRun) {
  console.log(`---------- Running ${running} benchmarks ---------- `)

  for (let name of Object.keys(benchmarks)) {
    let isAWSLite = name === 'aws-lite'
    console.log(`[${name}]`)

    console.log(`Starting ${running} benchmark`)
    let { script1 = '', script2 } = benchmarks[name][running]
    let start = Date.now()
    for (let i = 0; i < benchmarkRuns; i++) {
      let run = harness
        .replace('/* $script1 */', script1)
        .replace('/* $script2 */', script2)
        .split('\n').join(' ')
      let result = execSync(`node -e "${run}"`, { env: {} })
      benchmarks[name][running].runs.push(JSON.parse(result))
    }
    console.log(`Completed ${benchmarkRuns} runs in ${Date.now() - start} ms`)
    let times = benchmarks[name][running].runs.map(run => run.times.result)
    let avgTime = times.reduce((a, b) => a + b, 0) / times.length
    let P95Time = percentile(95, times)
    if (!isAWSLite) {
      slowerAvg = ` (~${roundHalf(avgTime / awsLiteAvgSpeed)}x slower ${running})`
      slowerP95 = ` (~${roundHalf(P95Time / awsLiteP95Speed)}x slower ${running})`
    }
    else {
      awsLiteAvgSpeed = avgTime
      awsLiteP95Speed = P95Time
    }
    console.log(`- Avg time to complete: ${avgTime} ms${slowerAvg}`)
    console.log(`- p95 time to complete: ${P95Time} ms${slowerP95}`)

    let memory = benchmarks[name][running].runs.map(run => run.memory.result)
    let avgMemory = memory.reduce((a, b) => a + b, 0) / times.length
    let P95Memory = percentile(95, memory)
    if (!isAWSLite) {
      largerAvg = ` (~${roundHalf(avgMemory / awsLiteAvgMemory)}x more memory)`
      largerP95 = ` (~${roundHalf(P95Memory / awsLiteP95Memory)}x more memory)`
    }
    else {
      awsLiteAvgMemory = avgMemory
      awsLiteP95Memory = P95Memory
    }
    console.log(`- Avg memory footprint: ${formatSize(avgMemory)}${largerAvg}`)
    console.log(`- p95 memory footprint: ${formatSize(P95Memory)}${largerP95}`)
    console.log(``)
  }
}
