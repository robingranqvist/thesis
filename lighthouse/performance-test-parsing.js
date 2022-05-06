const fs = require("fs");

let rawdata = fs.readFileSync(
  "./data/webflow/static/mobile/lighthouse-results-webflow-0.json"
);
let data = JSON.parse(rawdata);

console.log(data.audits["first-contentful-paint"].displayValue);
console.log(data.audits["speed-index"].displayValue);
console.log(data.audits["largest-contentful-paint"].displayValue);
console.log(data.audits["total-blocking-time"].displayValue);
console.log(data.audits["interactive"].displayValue);
console.log(data.audits["cumulative-layout-shift"].displayValue);
