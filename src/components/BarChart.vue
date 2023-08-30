<template>
  <div id="chart" class="chart-container">
    <div class="chart-column">
      <select name="date" id="date" value="Per Mounth">
        <option value="Per Day">Per Day</option>
        <option value="Per Mounth">Per Mounth</option>
        <option value="Per Year">Per Year</option>
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
};
</script>
