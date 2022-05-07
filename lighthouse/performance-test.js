/**
 * Script for automating
 * Lighthouse through its CLI
 * Robin Granqvist 2022
 */
const execSync = require("child_process").execSync;
let currentRun = 0;
let breakpoint;

/**
 * Options for the autoamted performance tests.
 * @param {string} url // the testing url
 * @param {string} runs // how many runs
 * @param {string} breakpoint // desktop or mobile
 * @param {string} builder // webflow or wordpress
 * @param {string} throttling // simulate for default
 * @param {string} output // json or html
 * @param {string} deploymentType // static or deployed
 */
const options = {
  url: "http://13.53.139.156/",
  runs: 150,
  breakpoint: "desktop",
  builder: "wordpress",
  throttling: "simulate",
  output: "json",
  deploymentType: "deployed",
};

// Mobile as default, does not allow for preset flag
if (options.breakpoint === "desktop") breakpoint = "--preset=desktop";

while (currentRun < options.runs) {
  try {
    execSync(
      `lighthouse ${options.url} --quiet ${breakpoint} --only-categories=performance --throttling-method=${options.throttling} --output=${options.output} --output-path=./data/${options.builder}/${options.deploymentType}/${options.breakpoint}/lighthouse-results-${options.builder}-${currentRun}.${options.output}`
    );
  } catch (err) {
    console.error(err);
    break;
  }

  console.log(`Performance test ${currentRun} on ${options.url} finished!`);
  currentRun++;
}

console.log(`Performance tests on ${options.url} all done!`);
