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
  </div>
</template>

<script>
import DonutChart from "./components/DonutChart.vue";
import leftPieChartOptions from "./OptionsData/leftPieChartOptions.js";
import rightPieChartOptions from "./OptionsData/rightPieChartOptions.js";
export default {
  components: {
    DonutChart,
  },
  methods: {},
  data() {
    return {
      leftPieChartOptions: leftPieChartOptions,
      rightPieChartOptions: rightPieChartOptions,
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
  margin-top: 93px;
  margin-bottom: 213px;
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
</style>
