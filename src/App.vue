<template>
  <div class="container">
    <div class="image-container">
      <img
        alt="Vue logo"
        src="./assets/FlareSystemsLogo-FC.png"
        class="centered-image"
      />
    </div>
    <div class="dual-donut-charts">
      <div class="donut-chart-container">
        <DonutChart :chartOptions="leftPieChartOptions" />
      </div>
      <div class="donut-chart-container">
        <DonutChart :chartOptions="rightPieChartOptions" />
      </div>
    </div>
    <div class="vertical-bar-chart-container">
      <VerticalBarChart :chartOptions="rightPieChartOptions"></VerticalBarChart>
    </div>
    <div class="vertical-bar-chart-container">
      <BarChart></BarChart>
    </div>
  </div>
</template>

<script>
import DonutChart from "./components/DonutChart.vue";
import VerticalBarChart from "./components/VerticalBarChart.vue";
import BarChart from "./components/BarChart.vue";
import leftPieChartOptions from "./OptionsData/leftPieChartOptions.js";
import rightPieChartOptions from "./OptionsData/rightPieChartOptions.js";
import verticalBarChartOptions from "./OptionsData/verticalBarChartOptions.js";
export default {
  components: {
    DonutChart,
    VerticalBarChart,
    BarChart,
  },
  methods: {},
  data() {
    return {
      leftPieChartOptions: leftPieChartOptions,
      rightPieChartOptions: rightPieChartOptions,
      verticalBarChartOptions: verticalBarChartOptions,
    };
  },
};
</script>

<style>
.container {
  max-width: 1200px !important;
  margin: auto;
}
.image-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 70px;
}
@media (max-width: 768px) {
  .image-container {
    margin-top: 20px;
    margin-bottom: 35px;
  }
}
.centered-image {
  max-width: 25%;
  max-height: 25%;
}

.dual-donut-charts {
  display: flex;
  justify-content: space-between;
}

.donut-chart-container {
  flex: 1;
  padding: 20px;
}
@media (max-width: 768px) {
  .dual-donut-charts {
    flex-direction: column; /* Stack charts vertically */
    align-items: center; /* Center charts horizontally */
  }

  .donut-chart-container {
    flex-basis: 100%; /* Take full width on smaller screens */
    margin-bottom: 20px; /* Add margin between charts */
    max-width: 345px;
  }
  .vertical-bar-chart-container {
    flex-basis: 100%; /* Take full width on smaller screens */
    margin-bottom: 20px; /* Add margin between charts */
    max-width: 345px;
  }
}
</style>
