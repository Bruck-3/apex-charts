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
      selectedInterval: "daily",
      series: [
        {
          data: [1000, 2500, 300, 1500, 800, 500, 2300, 4000],
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
            borderRadius: 10,
            horizontal: true,
            barHeight: "50%",
          },
        },
        fill: {
          type: "solid",
          colors: ["#375EE4"],
          opacity: 1,
        },
        dataLabels: {
          enabled: false,
          position: "top",
          offsetX: 0,
          offsetY: -10,
          formatter: function (val, opts) {
            const data =
              opts.w.config.series[opts.seriesIndex].data[opts.dataPointIndex];
            return `${val} (${data.additionalValue})`;
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          custom: ({ seriesIndex, series, dataPointIndex }) => {
            const dataValue = series[seriesIndex][dataPointIndex];
            return `
            <div class="tooltip-container">
              <div class="custom-tooltip">
                <div class="tooltip-content">
                  ${dataValue}</div>
              </div>
            </div>
            `;
          },
          onDatasetHover: {
            highlightDataSeries: false,
          },
        },
        title: {
          text: "New Events Collected",
          style: {
            fontSize: "30px",
            fontWeight: "500",
            fontFamily: "Outline",
            color: "#0E1630",
            marginBottom: "60px",
          },
        },
        xaxis: {
          categories: [
            "19 Jul 23",
            "20 Jul 23",
            "21 Jul 23",
            "22 Jul 23",
            "23 Jul 23",
            "24 Jul 23",
            "25 Jul 23",
            "26 Jul 23",
          ],
        },
        highlight: {
          // Enable highlighting on hover
          enable: false,
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
<style lang="css"></style>
