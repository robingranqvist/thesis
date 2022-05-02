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
const categoriesChart1 = [
  "First Contentful Paint",
  "Time To Interactive",
  "Speed Index",
  "Largest Contentful Paint",
  "Total Blocking Time",
];
const categoriesChart2 = ["Cumulative Layout Shift"];
const chartOptions = {
  type: "bar",
  height: "500px",
  offsetY: 0,
};
const barOptions = {
  horizontal: false,
  columnWidth: "80%",
  endingShape: "rounded",
};
const barOptions2 = {
  horizontal: false,
  columnWidth: "25%",
  endingShape: "rounded",
};

/**
 * Static Desktop
 */
let staticDesktopLeft = {
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions,
  },
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
  xaxis: {
    categories: categoriesChart1,
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    max: 1.18,
  },
};

let staticDesktopRight = {
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " CLS";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions2,
  },
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
  xaxis: {
    categories: categoriesChart2,
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    max: 0.086,
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
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions,
  },
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
  xaxis: {
    categories: categoriesChart1,
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    max: 5.93,
  },
};

let staticMobileRight = {
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " CLS";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions2,
  },
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
  xaxis: {
    categories: categoriesChart2,
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    max: 0.009,
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
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions,
  },
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
  xaxis: {
    categories: categoriesChart1,
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    max: 1.04,
  },
};

let liveDesktopRight = {
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " CLS";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions2,
  },
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
  xaxis: {
    categories: categoriesChart2,
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    max: 0.077,
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
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "s";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions,
  },
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
  xaxis: {
    categories: categoriesChart1,
  },
  yaxis: {
    title: {
      text: "Time (seconds)",
    },
    min: 0,
    max: 5.11,
  },
};

let liveMobileRight = {
  chart: chartOptions,
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + " CLS";
    },
  },
  colors: [colorBlue, colorYellow],
  plotOptions: {
    bar: barOptions2,
  },
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
  xaxis: {
    categories: categoriesChart2,
  },
  yaxis: {
    title: {
      text: "CLS Score",
    },
    min: 0,
    max: 0.008,
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
