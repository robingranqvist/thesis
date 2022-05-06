/**
 * Script for automating
 * Lighthouse through its CLI
 * Robin Granqvist 2022
 */

const execSync = require("child_process").execSync;
let currentRun = 0;
let preset;

/**
 * @param {string} url // the testing url
 * @param {string} runs // how many runs
 * @param {string} preset // desktop or mobile
 * @param {string} builder // webflow or wordpress
 * @param {string} throttling // simulate for default
 * @param {string} output // json or html
 * @param {string} type // static or deployed
 */
const options = {
  url: "https://robingranqvist.github.io/thesis/wordpress/source/",
  runs: 3,
  preset: "mobile",
  builder: "webflow",
  throttling: "simulate",
  output: "html",
  type: "static",
};

// Mobile as default, does not allow for preset flag
if (options.preset === "desktop") preset = "--preset=desktop";

while (currentRun < options.runs) {
  try {
    execSync(
      `lighthouse ${options.url} --quiet ${preset} --throttling-method=${options.throttling} --output=${options.output} --output-path=./results/${options.builder}/${options.type}/${options.preset}/lighthouse-results-${options.builder}-${currentRun}.html`
    );
  } catch (err) {
    console.error(err);
    break;
  }

  console.log(`Performance test ${currentRun + 1} on ${options.url} finished!`);
  currentRun++;
}

console.log(`Performance tests on ${options.url} all done!`);
