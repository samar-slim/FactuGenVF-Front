<template>
    <div>
      <canvas ref="pieChart"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto'
  
  export default {
    name: 'PieChart',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.renderChart(this.data, this.$refs.pieChart)
    },
    watch: {
      data: {
        handler(newData) {
          this.renderChart(newData, this.$refs.pieChart)
        },
        deep: true
      }
    },
    methods: {
      renderChart(data, canvas) {
        const ctx = canvas.getContext('2d')
        new Chart(ctx, {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false
          }
        })
      }
    }
  }
  </script>