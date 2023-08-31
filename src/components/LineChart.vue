<template>
  <div id="chart" class="chart-container">
    <div class="chart-column bar-chart">
      <div class="toolbar">
        <button
          @click="changeInterval('daily')"
          :class="{ active: selectedInterval === 'daily' }"
        >
          Daily
        </button>
        <button
          @click="changeInterval('weekly')"
          :class="{ active: selectedInterval === 'weekly' }"
        >
          Weekly
        </button>
        <button
          @click="changeInterval('yearly')"
          :class="{ active: selectedInterval === 'yearly' }"
        >
          Yearly
        </button>
      </div>
      <apexchart
        type="area"
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
      selectedInterval: "yearly",
      series: [
        {
          data: [
            1000, 2500, 300, 1500, 800, 500, 2300, 4000, 3000, 4000, 2000, 3000,
          ],
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 620,
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: 5,
          curve: "smooth",
          colors: ["#4A62E0"],
        },
        markers: {
          size: 0,
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
                style: {
                  fontSize: "18.99px",
                  fontWeight: "500",
                  fontFamily: "Outfit",
                  color: "#0E1630",
                  paddingTop: "-7px",
                },
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            borderRadius: 12,
            horizontal: true,
            barHeight: "50%",
          },
        },
        fill: {
          type: "gradient",
          colors: ["#4A62E0"],
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.5,
          },
        },
        dataLabels: {
          enabled: false,
          position: "top",
          offsetX: 0,
          offsetY: -10,
        },
        legend: {
          show: false,
        },
        yaxis: {
          labels: {
            formatter: function (number) {
              const units = ["", "k", "M", "B", "T"];
              const delimiter = 1000;

              let unitIndex = 0;
              while (number >= delimiter && unitIndex < units.length - 1) {
                number /= delimiter;
                unitIndex++;
              }

              return number + units[unitIndex];
            },
          },
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex }) {
            const dataValue = series[seriesIndex][dataPointIndex];

            return `
    <div class="tooltip-container">
      <div class="custom-tooltip">
        <div class="tooltip-content">
          <div class="tooltip-more-info">More Info</div>
          <div class="tooltip-data tooltip-centered">${dataValue}</div>
        </div>
      </div>
    </div>
  `;
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
        },
        title: {
          text: "Commit Evolution Form Last Month",
          style: {
            fontSize: "30px",
            fontWeight: "500",
            fontFamily: "Outline",
            color: "#0E1630",
          },
        },
        xaxis: {
          tooltip: {
            enabled: false,
          },
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        toolbar: {
          show: false,
        },
      },
    };
  },
  methods: {
    changeInterval(interval) {
      this.selectedInterval = interval;
      // Handle the interval change here
      console.log("Selected interval:", interval);
      // You can trigger chart data update based on the selected interval
    },
  },
};
</script>
<style lang="css">
.tooltip-centered {
  text-align: center;
}
</style>
