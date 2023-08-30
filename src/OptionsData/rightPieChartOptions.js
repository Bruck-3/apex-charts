export default {
  series: [37900, 376966, 403951, 29981, 215],
  labels: [
    "Info - 37900",
    "Low - 376966",
    "Medium - 403951",
    "High - 29981",
    "Critical - 215",
  ],
  chart: {
    type: "donut",
    width: 700,
  },
  stroke: {
    width: 0,
  },
  colors: ["#385EE5", "#F7C100", "#FF842A", "#F55723", "#FF2701"],
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
