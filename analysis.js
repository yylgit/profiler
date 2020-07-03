const v8Analytics = require('v8-analytics');
const fs = require('fs');
const json = JSON.parse(fs.readFileSync('./snapshot3.heapsnapshot'));
debugger
const result = v8Analytics.memAnalytics(json);
console.log(result);
debugger