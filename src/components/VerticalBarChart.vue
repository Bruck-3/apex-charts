<template>
  <div id="chart" class="chart-container">
    <div class="chart-column">
      <div class="select-mobile">
        <select name="date" id="date" v-model="selectedOption">
          <option value="Day">Day</option>
          <option value="Mounth">Mounth</option>
          <option value="Year">Year</option>
        </select>
      </div>

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
  data() {
    return {
      selectedOption: "Day",
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
          height: 680,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                width: "100%",
                height: 500,
              },
              title: {
                text: "Events Volumes",
                style: {
                  fontSize: "18.99px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  color: "#0E1630",
                  paddingTop: "-7px",
                },
              },
              plotOptions: {
                bar: {
                  borderRadius: 12,
                  borderRadiusApplication: "end",
                  columnWidth: 10,
                  distributed: true,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
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
          custom: () => {
            return `
              <div class="custom-tooltip">
                <div class="tooltip-content">Event Description</div>
              </div>
            `;
          },
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
  // props: ["chartOptions"],
  // computed: {
  //   options() {
  //     return {
  //       ...this.chartOptions,
  //     };
  //   },
  // },
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
