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
