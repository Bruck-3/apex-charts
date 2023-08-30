<template>
  <div id="chart" class="chart-container">
    <div class="chart-column">
      <select name="date" id="date" value="Mounth">
        <option value="Per Day">Day</option>
        <option value="Mounth">Mounth</option>
        <option value="Per Day">Year</option>
      </select>
      <apexchart
        type="bar"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>
  </div>
</template>

<script>
import ApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: ApexCharts,
  },
  methods: {
    customTooltip() {
      return `
        <div class="custom-tooltip">
          <div class="tooltip-content">Event Description</div>
        </div>
      `;
    },
  },
  data() {
    return {
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
        x: {
          showCrosshairs: false,
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
  },
};
</script>

<style lang="css">
.custom-tooltip {
  position: relative;
  display: inline-block;
  background-color: #2a3154;
}
.tooltip-content {
  margin: 5px 15px 5px 15px;
  color: #fff;
  font-family: Outfit;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}
.apexcharts-tooltip.apexcharts-theme-light {
  border: none !important;
}
.apexcharts-bar-area:hover {
  fill: #2a3154 !important;
}
</style>
