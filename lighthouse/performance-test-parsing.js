/**
 * Script for parsing Lighthouse performance
 * analysis metrics in JSON and outputting them
 * as CSV files.
 */
const fs = require("fs");
const createCsvWriter = require("csv-writer").createObjectCsvWriter;

/**
 * Options for the test parser.
 * @param {string} breakpoint // desktop or mobile
 * @param {string} builder // webflow or wordpress
 * @param {string} deploymentType // static or deployed
 */
const options = {
  breakpoint: "desktop",
  builder: "webflow",
  deploymentType: "deployed",
};

const csvWriter = createCsvWriter({
  path: `./csv/${options.builder}-${options.deploymentType}-${options.breakpoint}.csv`,
  header: [
    { id: "FCP", title: "First Contentful Paint" },
    { id: "TTI", title: "Time To Interactive" },
    { id: "SI", title: "Speed Index" },
    { id: "LCP", title: "Largest Contentful Paint" },
    { id: "TBT", title: "Total Blocking Time" },
    { id: "CLS", title: "Cumulative Layout Shift" },
    { id: "TOTAL", title: "Total" },
  ],
});

const dir = `./data/${options.builder}/${options.deploymentType}/${options.breakpoint}`;
const fileAmount = fs.readdirSync(dir).length;
const metricScoresSummed = [];

for (let i = 0; i < fileAmount; i++) {
  try {
    let rawdata = fs.readFileSync(
      `${dir}/lighthouse-results-${options.builder}-${i}.json`
    );
    let data = JSON.parse(rawdata);
    const metricScores = {
      FCP: 0,
      SI: 0,
      LCP: 0,
      TBT: 0,
      TTI: 0,
      CLS: 0,
      TOTAL: 0,
    };

    metricScores.FCP =
      data.audits["first-contentful-paint"].numericValue.toFixed(0) / 1000;
    metricScores.TTI =
      data.audits["interactive"].numericValue.toFixed(0) / 1000;
    metricScores.SI = data.audits["speed-index"].numericValue.toFixed(0) / 1000;
    metricScores.LCP =
      data.audits["largest-contentful-paint"].numericValue.toFixed(0) / 1000;
    metricScores.TBT =
      data.audits["total-blocking-time"].numericValue.toFixed(0) / 1000;
    metricScores.CLS =
      data.audits["cumulative-layout-shift"].numericValue.toFixed(2) / 1;
    metricScores.TOTAL = data.categories.performance.score.toFixed(2);

    metricScoresSummed.push(metricScores);
  } catch (err) {
    console.error(err);
    break;
  }
}

csvWriter
  .writeRecords(metricScoresSummed)
  .then(() => console.log("The CSV file was created successfully"));
