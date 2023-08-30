<template>
  <div id="chart" class="chart-container">
    <apexchart
      type="donut"
      :options="options"
      :series="options.series"
    ></apexchart>
  </div>
</template>

<script>
import ApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: ApexCharts,
  },
  data() {
    return {};
  },
  props: ["chartOptions"],
  computed: {
    options() {
      return {
        ...this.chartOptions,
      };
    },
  },
};
</script>

<style scoped></style>
