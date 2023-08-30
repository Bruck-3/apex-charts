export default {
  series: [
    {
      name: "Event Description",
      data: [
        {
          x: "2023/07/19",
          y: 6000,
        },
        {
          x: "2023/07/20",
          y: 3500,
        },
        {
          x: "2023/07/21",
          y: 5000,
        },
        {
          x: "2023/07/22",
          y: 3000,
        },
        {
          x: "2023/07/23",
          y: 5500,
        },
        {
          x: "2023/07/24",
          y: 2000,
        },
        {
          x: "2023/07/25",
          y: 3900,
        },
        {
          x: "2020/10/06",
          y: 3900,
        },
      ],
    },
  ],
  chartOptions: {
    chart: {
      type: "bar",
      height: 580,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    fill: {
      type: "solid",
      colors: ["#375EE4"],
      opacity: 1,
    },
    title: {
      text: "Events Volumes",
      style: {
        fontSize: "28.99px",
        fontWeight: "500",
        fontFamily: "Outfit",
        color: "#0E1630",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 12,
        borderRadiusApplication: "end",
        columnWidth: 55,
        distributed: true,
      },
    },
    tooltip: {
      custom: this.customTooltip,
      fixed: {
        enabled: false,
        position: "topRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
  },
};
