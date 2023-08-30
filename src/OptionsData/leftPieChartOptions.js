export default {
  series: [31205, 13, 9784, 31205, 31205],
  labels: ["Bot", "Leak", "Paste", "Bucket", "Domain"],
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          width: 375,
        },
      },
    },
  ],
  chart: {
    type: "donut",
    width: 700,
  },
  stroke: {
    width: 0,
  },
  colors: ["#385EE5", "#CFD5F5", "#F15314", "#FF842A", "#F4C304"],
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
