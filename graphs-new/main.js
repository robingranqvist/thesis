/**
 * Data sets for graphs
 * 0: First Contentful Paint
 * 1: Time To Interactive
 * 2: Speed Index
 * 3: Largest Contentful Paint
 * 4: Total Blocking Time
 *
 * 5: Cumulative Layout Shift
 */

// Static Desktop
const webflowStaticDesktopALL = [0.61, 0.61, 1.43, 1.35, 0];
const webflowStaticDesktopCLS = [0.121];

const wordpressStaticDesktopALL = [0.54, 0.56, 1.01, 1.17, 0.0001];
const wordpressStaticDesktopCLS = [0.3];

// Static Mobile
const webflowStaticMobileALL = [2.07, 5.41, 3.45, 5.3, 0.36];
const webflowStaticMobileCLS = [0.009];

const wordpressStaticMobileALL = [1.64, 6.4, 4.38, 3.07, 0.15];
const wordpressStaticMobileCLS = [0.23];

// Deployed Desktop
const webflowDeployedDesktopALL = [0.56, 0.57, 1.52, 1.26, 0.0003];
const webflowDeployedDesktopCLS = [0.12];

const wordpressDeployedDesktopALL = [0.51, 0.53, 0.94, 1.81, 0.0002];
const wordpressDeployedDesktopCLS = [0.31];

// Deployed Mobile
const webflowDeployedMobileALL = [2.16, 5.45, 3.31, 4.92, 0.29];
const webflowDeployedMobileCLS = [0.002];

const wordpressDeployedMobileALL = [1.45, 6.34, 2.78, 2.37, 0.11];
const wordpressDeployedMobileCLS = [0.17];

/**
 * Global options
 */
const webflowDesktopColor = "#3792DF";
const webflowMobileColor = "#0C63AC";
const wordpressDesktopColor = "#3ACD78";
const wordpressMobileColor = "#179D50";

const categoriesChartALL = ["FCP", "TTI", "SI", "LCP", "TBT"];
const categoriesChartCLS = ["CLS"];
const chartOptions = {
  type: "bar",
  offsetY: 0,
  height: "auto",
};
const plotOptions = {
  bar: {
    horizontal: true,
    dataLabels: {
      position: "top",
    },
  },
};
const dataLabels = {
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
};
const dataLabelsCLS = {
  enabled: true,
  offsetX: -26,
  style: {
    fontSize: "20px",
    colors: ["#fff"],
    fontWeight: "bold",
  },
  formatter: function (val) {
    return val + "CLS";
  },
};
const strokeOptions = {
  show: true,
  width: 1,
  colors: ["#fff"],
};
const toolTopOptions = {
  shared: true,
  intersect: false,
};

// STATIC DESKTOP ALL
const staticDesktopALL = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticDesktopALL,
    },
    {
      name: "Wordpress",
      data: wordpressStaticDesktopALL,
    },
  ],
  colors: [webflowDesktopColor, wordpressDesktopColor],
  xaxis: {
    max: 1.43,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticDesktopALL = new ApexCharts(
  document.querySelector("#chart-static-desktop-all"),
  staticDesktopALL
);

chartStaticDesktopALL.render();

// STATIC DESKTOP CLS
const staticDesktopCLS = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticDesktopCLS,
    },
    {
      name: "Wordpress",
      data: wordpressStaticDesktopCLS,
    },
  ],
  colors: [webflowDesktopColor, wordpressDesktopColor],
  xaxis: {
    max: 0.3,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticDesktopCLS = new ApexCharts(
  document.querySelector("#chart-static-desktop-cls"),
  staticDesktopCLS
);

chartStaticDesktopCLS.render();

// STATIC MOBILE ALL
const staticMobileALL = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticMobileALL,
    },
    {
      name: "Wordpress",
      data: wordpressStaticMobileALL,
    },
  ],
  colors: [webflowMobileColor, wordpressMobileColor],
  xaxis: {
    max: 6.4,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticMobileALL = new ApexCharts(
  document.querySelector("#chart-static-mobile-all"),
  staticMobileALL
);

chartStaticMobileALL.render();

// STATIC MOBILE CLS
const staticMobileCLS = {
  series: [
    {
      name: "Webflow",
      data: webflowStaticMobileCLS,
    },
    {
      name: "Wordpress",
      data: wordpressStaticMobileCLS,
    },
  ],
  colors: [webflowMobileColor, wordpressMobileColor],
  xaxis: {
    max: 0.23,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticMobileCLS = new ApexCharts(
  document.querySelector("#chart-static-mobile-cls"),
  staticMobileCLS
);

chartStaticMobileCLS.render();

// DEPLOYED DESKTOP ALL
const deployedDesktopALL = {
  series: [
    {
      name: "Webflow",
      data: webflowDeployedDesktopALL,
    },
    {
      name: "Wordpress",
      data: wordpressDeployedDesktopALL,
    },
  ],
  colors: [webflowDesktopColor, wordpressDesktopColor],
  xaxis: {
    max: 1.81,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedDesktopALL = new ApexCharts(
  document.querySelector("#chart-deployed-desktop-all"),
  deployedDesktopALL
);

chartDeployedDesktopALL.render();

// DEPLOYED DESKTOP CLS
const deployedDesktopCLS = {
  series: [
    {
      name: "Webflow",
      data: webflowDeployedDesktopCLS,
    },
    {
      name: "Wordpress",
      data: wordpressDeployedDesktopCLS,
    },
  ],
  colors: [webflowDesktopColor, wordpressDesktopColor],
  xaxis: {
    max: 0.31,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedDesktopCLS = new ApexCharts(
  document.querySelector("#chart-deployed-desktop-cls"),
  deployedDesktopCLS
);

chartDeployedDesktopCLS.render();

// DEPLOYED MOBILE ALL
const deployedMobileALL = {
  series: [
    {
      name: "Webflow",
      data: webflowDeployedMobileALL,
    },
    {
      name: "Wordpress",
      data: wordpressDeployedMobileALL,
    },
  ],
  colors: [webflowMobileColor, wordpressMobileColor],
  xaxis: {
    max: 6.34,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedMobileALL = new ApexCharts(
  document.querySelector("#chart-deployed-mobile-all"),
  deployedMobileALL
);

chartDeployedMobileALL.render();

// DEPLOYED MOBILE CLS
const deployedMobileCLS = {
  series: [
    {
      name: "Webflow",
      data: webflowDeployedMobileCLS,
    },
    {
      name: "Wordpress",
      data: wordpressDeployedMobileCLS,
    },
  ],
  colors: [webflowMobileColor, wordpressMobileColor],
  xaxis: {
    max: 0.17,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedMobileCLS = new ApexCharts(
  document.querySelector("#chart-deployed-mobile-cls"),
  deployedMobileCLS
);

chartDeployedMobileCLS.render();

// STATIC ALL
const staticALL = {
  series: [
    {
      name: "Webflow Desktop",
      data: webflowStaticDesktopALL,
    },
    {
      name: "Webflow Mobile",
      data: webflowStaticMobileALL,
    },
    {
      name: "Wordpress Desktop",
      data: wordpressStaticDesktopALL,
    },
    {
      name: "Wordpress Mobile",
      data: wordpressStaticMobileALL,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 6.4,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticALL = new ApexCharts(
  document.querySelector("#chart-static-all"),
  staticALL
);

chartStaticALL.render();

// STATIC ALL CLS
const staticCLS = {
  series: [
    {
      name: "Webflow Desktop",
      data: webflowStaticDesktopCLS,
    },
    {
      name: "Webflow Mobile",
      data: webflowStaticMobileCLS,
    },
    {
      name: "Wordpress Desktop",
      data: wordpressStaticDesktopCLS,
    },
    {
      name: "Wordpress Mobile",
      data: wordpressStaticMobileCLS,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 0.3,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartStaticCLS = new ApexCharts(
  document.querySelector("#chart-static-cls"),
  staticCLS
);

chartStaticCLS.render();

// DEPLOYED ALL
const deployedALL = {
  series: [
    {
      name: "Webflow Desktop",
      data: webflowDeployedDesktopALL,
    },
    {
      name: "Webflow Mobile",
      data: webflowDeployedMobileALL,
    },
    {
      name: "Wordpress Desktop",
      data: wordpressDeployedDesktopALL,
    },
    {
      name: "Wordpress Mobile",
      data: wordpressDeployedMobileALL,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 6.34,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedALL = new ApexCharts(
  document.querySelector("#chart-deployed-all"),
  deployedALL
);

chartDeployedALL.render();

// STATIC ALL CLS
const deployedCLS = {
  series: [
    {
      name: "Webflow Desktop",
      data: webflowDeployedDesktopCLS,
    },
    {
      name: "Webflow Mobile",
      data: webflowDeployedMobileCLS,
    },
    {
      name: "Wordpress Desktop",
      data: wordpressDeployedDesktopCLS,
    },
    {
      name: "Wordpress Mobile",
      data: wordpressDeployedMobileCLS,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 0.31,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartDeployedCLS = new ApexCharts(
  document.querySelector("#chart-deployed-cls"),
  deployedCLS
);

chartDeployedCLS.render();

// ALL TOTAL
const allTotal = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopALL,
    },
    {
      name: "Webflow Deployed Desktop",
      data: webflowDeployedDesktopALL,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopALL,
    },
    {
      name: "Wordpress Deployed Desktop",
      data: wordpressDeployedDesktopALL,
    },
    {
      name: "Webflow Static Mobile",
      data: webflowStaticMobileALL,
    },
    {
      name: "Webflow Deployed Mobile",
      data: webflowDeployedMobileALL,
    },
    {
      name: "Wordpress Static Mobile",
      data: wordpressStaticMobileALL,
    },
    {
      name: "Wordpress Deployed Mobile",
      data: wordpressDeployedMobileALL,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 6.4,
    categories: categoriesChartALL,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabels,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartAllTotal = new ApexCharts(
  document.querySelector("#chart-all"),
  allTotal
);

chartAllTotal.render();

// ALL CLS
const allCLS = {
  series: [
    {
      name: "Webflow Static Desktop",
      data: webflowStaticDesktopCLS,
    },
    {
      name: "Webflow Deployed Desktop",
      data: webflowDeployedDesktopCLS,
    },
    {
      name: "Wordpress Static Desktop",
      data: wordpressStaticDesktopCLS,
    },
    {
      name: "Wordpress Deployed Desktop",
      data: wordpressDeployedDesktopCLS,
    },
    {
      name: "Webflow Static Mobile",
      data: webflowStaticMobileCLS,
    },
    {
      name: "Webflow Deployed Mobile",
      data: webflowDeployedMobileCLS,
    },
    {
      name: "Wordpress Static Mobile",
      data: wordpressStaticMobileCLS,
    },
    {
      name: "Wordpress Deployed Mobile",
      data: wordpressDeployedMobileCLS,
    },
  ],
  colors: [
    webflowDesktopColor,
    webflowMobileColor,
    wordpressDesktopColor,
    wordpressMobileColor,
  ],
  xaxis: {
    max: 0.31,
    categories: categoriesChartCLS,
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
    labels: {
      style: {
        fontSize: "20px",
      },
    },
  },
  chart: chartOptions,
  plotOptions: plotOptions,
  dataLabels: dataLabelsCLS,
  stroke: strokeOptions,
  tooltip: toolTopOptions,
};

var chartAllCLS = new ApexCharts(document.querySelector("#chart-cls"), allCLS);

chartAllCLS.render();
