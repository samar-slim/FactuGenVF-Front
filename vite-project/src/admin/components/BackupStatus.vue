<template>
    <div>
      <h3>Backup arrivé à tous</h3>
      <pie-chart :data="chartData"></pie-chart>
    </div>
  </template>
  
  <script>
  import PieChart from './PieChart.vue'
  
  export default {
    name: 'BackupStatus',
    components: {
      PieChart
    },
    props: {
      backupData: {
        type: Object,
        required: true
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
              backgroundColor: ['#00c853', '#ff5252', '#9e9e9e']
            }
          ]
        }
      }
    }
  }
  </script>