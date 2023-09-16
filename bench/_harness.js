/* eslint-disable */
let report = { times: {}, memory: {} };
/* $script1 */
report.memory.start = process.memoryUsage.rss();
report.times.start = Date.now();
/* $script2 */
report.times.end = Date.now();
report.times.result = report.times.end - report.times.start;
report.memory.end = process.memoryUsage.rss();
report.memory.result = report.memory.end - report.memory.start;
console.log(JSON.stringify(report, null, 2));
