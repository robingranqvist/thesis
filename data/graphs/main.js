/**
 * Data sets for left graphs (seconds)
 * 0: First Contentful Paint
 * 1: Time To Interactive
 * 2: Speed Index
 * 3: Largest Contentful Paint
 * 4: Total Blocking Time
 */
const webflowStaticDesktopLeft = [0.61, 0.61, 0.65, 1.18, 0];
const wordpressStaticDesktopLeft = [0.43, 0.43, 0.76, 0.43, 0];

const webflowStaticMobileLeft = [2.12, 4.63, 2.48, 4.27, 0.19];
const wordpressStaticMobileLeft = [1.52, 5.93, 2.75, 1.52, 0.15];

const webflowLiveDesktopLeft = [0.62, 0.62, 0.67, 1.04, 0];
const wordpressLiveDesktopLeft = [0.44, 0.44, 0.75, 0.44, 0];

const webflowLiveMobileLeft = [1.89, 4.93, 2.43, 4.02, 0.19];
const wordpressLiveMobileLeft = [1.45, 5.11, 1.82, 1.47, 0.08];

/**
 * Data sets for right graphs (CLS Score)
 * 0: Cumulative Layout Shift
 */
const webflowStaticDesktopRight = [0.038];
const wordpressStaticDesktopRight = [0.086];

const webflowStaticMobileRight = [0.004];
const wordpressStaticMobileRight = [0.009];

const webflowLiveDesktopRight = [0.038];
const wordpressLiveDesktopRight = [0.077];

const webflowLiveMobileRight = [0];
const wordpressLiveMobileRight = [0.008];

/**
 * Global options
 */
const colorBlue = "#217FFC";
const colorYellow = "#FFA23B";
const categoriesChart1 = ["FCP", "TTI", "SI", "LCP", "TBT"];
const categoriesChart2 = ["CLS"];
const chartOptions = {
  type: "bar",
  offsetY: 0,
  height: "auto",
};

/**
 * Static Desktop
 */
let staticDesktopLeft = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticDesktopLeft,
    },
    {
      name: "Wordpress",
      data: wordpressStaticDesktopLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 1.18,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let staticDesktopRight = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticDesktopRight,
    },
    {
      name: "Wordpress",
      data: wordpressStaticDesktopRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.086,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartStaticDesktopLeft = new ApexCharts(
  document.querySelector("#chart-static-desktop-left"),
  staticDesktopLeft
);

var chartStaticDesktopRight = new ApexCharts(
  document.querySelector("#chart-static-desktop-right"),
  staticDesktopRight
);

chartStaticDesktopLeft.render();
chartStaticDesktopRight.render();

/**
 * Static Mobile
 */
let staticMobileLeft = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticMobileLeft,
    },
    {
      name: "Wordpress",
      data: wordpressStaticMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.93,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let staticMobileRight = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticMobileRight,
    },
    {
      name: "Wordpress",
      data: wordpressStaticMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.009,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartStaticMobileLeft = new ApexCharts(
  document.querySelector("#chart-static-mobile-left"),
  staticMobileLeft
);

var chartStaticMobileRight = new ApexCharts(
  document.querySelector("#chart-static-mobile-right"),
  staticMobileRight
);

chartStaticMobileLeft.render();
chartStaticMobileRight.render();

/**
 * Live Desktop
 */
let liveDesktopLeft = {
  series: [
    {
      name: "Webflow",
      data: webflowLiveDesktopLeft,
    },
    {
      name: "Wordpress",
      data: wordpressLiveDesktopLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 1.04,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let liveDesktopRight = {
  series: [
    {
      name: "Webflow",
      data: webflowLiveDesktopRight,
    },
    {
      name: "Wordpress",
      data: wordpressLiveDesktopRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.077,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartLiveDesktopLeft = new ApexCharts(
  document.querySelector("#chart-live-desktop-left"),
  liveDesktopLeft
);

var chartliveDesktopRight = new ApexCharts(
  document.querySelector("#chart-live-desktop-right"),
  liveDesktopRight
);

chartLiveDesktopLeft.render();
chartliveDesktopRight.render();

/**
 * Live Mobile
 */
let liveMobileLeft = {
  series: [
    {
      name: "Webflow",
      data: webflowLiveMobileLeft,
    },
    {
      name: "Wordpress",
      data: wordpressLiveMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.11,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let liveMobileRight = {
  series: [
    {
      name: "Webflow",
      data: webflowLiveMobileRight,
    },
    {
      name: "Wordpress",
      data: wordpressLiveMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.008,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartLiveMobileLeft = new ApexCharts(
  document.querySelector("#chart-live-mobile-left"),
  liveMobileLeft
);

var chartLiveMobileRight = new ApexCharts(
  document.querySelector("#chart-live-mobile-right"),
  liveMobileRight
);

chartLiveMobileLeft.render();
chartLiveMobileRight.render();

/**
 * All Desktop
 */
let allDesktopLeft = {
  series: [
    {
      name: "Webflow Static",
      data: webflowStaticDesktopLeft,
    },
    {
      name: "Wordpress Static",
      data: wordpressStaticDesktopLeft,
    },
    {
      name: "Webflow Deployed",
      data: webflowLiveDesktopLeft,
    },
    {
      name: "Wordpress Deployed",
      data: wordpressLiveDesktopLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 1.18,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let allDesktopRight = {
  series: [
    {
      name: "Webflow Static",
      data: webflowStaticDesktopRight,
    },
    {
      name: "Wordpress Static",
      data: wordpressStaticDesktopRight,
    },
    {
      name: "Webflow Deployed",
      data: webflowLiveDesktopRight,
    },
    {
      name: "Wordpress Deployed",
      data: wordpressLiveDesktopRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.086,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};
var chartAllDesktopLeft = new ApexCharts(
  document.querySelector("#chart-all-desktop-left"),
  allDesktopLeft
);

var chartAllDesktopRight = new ApexCharts(
  document.querySelector("#chart-all-desktop-right"),
  allDesktopRight
);

chartAllDesktopLeft.render();
chartAllDesktopRight.render();

/**
 * All Mobile
 */
let allMobileLeft = {
  series: [
    {
      name: "Webflow Static",
      data: webflowStaticMobileLeft,
    },
    {
      name: "Webflow Deployed",
      data: webflowLiveMobileLeft,
    },
    {
      name: "Wordpress Static",
      data: wordpressStaticMobileLeft,
    },
    {
      name: "Wordpress Deployed",
      data: wordpressLiveMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.93,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let allMobileRight = {
  series: [
    {
      name: "Webflow Static",
      data: webflowStaticMobileRight,
    },
    {
      name: "Wordpress Static",
      data: wordpressStaticMobileRight,
    },
    {
      name: "Webflow Deployed",
      data: webflowLiveMobileRight,
    },
    {
      name: "Wordpress Deployed",
      data: wordpressLiveMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.009,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartAllMobileLeft = new ApexCharts(
  document.querySelector("#chart-all-mobile-left"),
  allMobileLeft
);

var chartAllMobileRight = new ApexCharts(
  document.querySelector("#chart-all-mobile-right"),
  allMobileRight
);

chartAllMobileLeft.render();
chartAllMobileRight.render();

/**
 * ALL
 */
let allLeft = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopLeft,
    },
    {
      name: "Webflow Deployed Desktop",
      data: webflowLiveDesktopLeft,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopLeft,
    },
    {
      name: "Wordpress Deployed Desktop",
      data: wordpressLiveDesktopLeft,
    },
    {
      name: "Webflow Static Mobile",
      data: webflowStaticMobileLeft,
    },
    {
      name: "Webflow Deployed Mobile",
      data: webflowLiveMobileLeft,
    },
    {
      name: "Wordpress Static Mobile",
      data: wordpressStaticMobileLeft,
    },
    {
      name: "Wordpress Deployed Mobile",
      data: wordpressLiveMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.93,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let allRight = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopRight,
    },
    {
      name: "Webflow Deployed Desktop",
      data: webflowLiveDesktopRight,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopRight,
    },
    {
      name: "Wordpress Deployed Desktop",
      data: wordpressLiveDesktopRight,
    },
    {
      name: "Webflow Static",
      data: webflowStaticMobileRight,
    },
    {
      name: "Webflow Deployed",
      data: webflowLiveMobileRight,
    },
    {
      name: "Wordpress Static",
      data: wordpressStaticMobileRight,
    },
    {
      name: "Wordpress Deployed",
      data: wordpressLiveMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.086,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartAllLeft = new ApexCharts(
  document.querySelector("#chart-all-left"),
  allLeft
);

var chartAllRight = new ApexCharts(
  document.querySelector("#chart-all-right"),
  allRight
);

chartAllLeft.render();
chartAllRight.render();

/**
 * All static
 */
let allStaticLeft = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopLeft,
    },
    {
      name: "Webflow Static Mobile",
      data: webflowStaticMobileLeft,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopLeft,
    },
    {
      name: "Wordpress Static Mobile",
      data: wordpressStaticMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.93,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let allStaticRight = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopRight,
    },
    {
      name: "Webflow Static Mobile",
      data: webflowStaticMobileRight,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopRight,
    },
    {
      name: "Wordpress Static Mobile",
      data: wordpressStaticMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.086,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartAllStaticLeft = new ApexCharts(
  document.querySelector("#chart-all-static-left"),
  allStaticLeft
);

var chartAllStaticRight = new ApexCharts(
  document.querySelector("#chart-all-static-right"),
  allStaticRight
);

chartAllStaticLeft.render();
chartAllStaticRight.render();

/**
 * All Deployed
 */
let allLiveLeft = {
  series: [
    {
      name: "Webflow Live Desktop",
      data: webflowLiveDesktopLeft,
    },
    {
      name: "Webflow Live Mobile",
      data: webflowLiveMobileLeft,
    },
    {
      name: "Wordpress Live Desktop",
      data: wordpressLiveDesktopLeft,
    },
    {
      name: "Wordpress Live Mobile",
      data: wordpressLiveMobileLeft,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -6,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 5.11,
    categories: categoriesChart1,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

let allLiveRight = {
  series: [
    {
      name: "Webflow Live Desktop",
      data: webflowLiveDesktopRight,
    },
    {
      name: "Webflow Live Mobile",
      data: webflowLiveMobileRight,
    },
    {
      name: "Wordpress Live Desktop",
      data: wordpressLiveDesktopRight,
    },
    {
      name: "Wordpress Live Mobile",
      data: wordpressLiveMobileRight,
    },
  ],
  chart: chartOptions,
  plotOptions: {
    bar: {
      horizontal: true,
      columnWidth: "10%",
      dataLabels: {
        position: "top",
      },
      barHeight: "10%",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "20px",
      colors: ["#fff"],
      fontWeight: "bold",
    },
  },
  colors: [colorBlue, colorYellow],
  stroke: {
    show: true,
    width: 1,
    colors: ["#fff"],
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  xaxis: {
    max: 0.077,
    categories: categoriesChart2,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
};

var chartAllLiveLeft = new ApexCharts(
  document.querySelector("#chart-all-live-left"),
  allLiveLeft
);

var chartAllLiveRight = new ApexCharts(
  document.querySelector("#chart-all-live-right"),
  allLiveRight
);

chartAllLiveLeft.render();
chartAllLiveRight.render();
