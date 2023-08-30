export default {
  series: [31205, 13, 9784, 31205, 31205],
  labels: [
    "Bot - 31205",
    "Leak - 13",
    "Paste - 9784",
    "Bucket - 31205",
    "Domain - 31205",
  ],
  chart: {
    type: "donut",
    width: 700,
  },
  stroke: {
    width: 0,
  },
  colors: ["#385EE5", "#CFD5F5", "#F15314", "#FFBA82", "#F4C304"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  legend: {
    position: "right",
  },
};
