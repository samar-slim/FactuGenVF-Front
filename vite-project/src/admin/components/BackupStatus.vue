<template>
  <div class="p-4 min-h-screen">
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h3 class="text-lg font-semibold mb-4">Backup status</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center justify-between w-full md:w-1/2 lg:w-2/3 mx-auto">
          <pie-chart :data="chartData" class="flex-shrink-0"></pie-chart>
          <button class="bg-gray-800 text-white rounded-md p-2 mb-1">
            Exporter copie de drive
          </button>
        </div>
        
        <div class="w-full lg:w-1/2 flex justify-between items-center">
          <div id="chart" class="w-full h-96 flex-shrink-0">
            <h3 class="text-lg font-semibold mb-4">Méthode de stockage</h3>
            <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
          </div>
          <div class="ml-4 ">78% saved by compression and duplication</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PieChart from './PieChart.vue'
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'BackupStatus',
  components: {
    PieChart,
    apexchart: VueApexCharts
  },
  props: {
    backupData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      series: [44, 55],
      chartOptions: {
        chart: {
          type: 'donut',
          width: '100%',  // Adjust this value to make the chart smaller
          height: 200  // Adjust the height as needed
        },
        labels: ['Comression', 'Duplication'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
              height: 150
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['Free space', 'Backup', 'Other'],
        datasets: [
          {
            data: [
              this.backupData.freeSpace,
              this.backupData.backup,
              this.backupData.other
            ],
            backgroundColor: ['#FE5E71', '#FEAE8B', '#0CE499']
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
