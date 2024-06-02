<template>
    <div>
      <h3>Méthode de stockage</h3>
      <div>
        <span>Compression: {{ storageData.compression }}%</span>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: storageData.compression + '%' }"
            aria-valuenow="storageData.compression"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <div>
        <span>Duplication: {{ storageData.deduplication }}%</span>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: storageData.deduplication + '%' }"
            aria-valuenow="storageData.deduplication"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StorageMethod',
    props: {
      storageData: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .progress {
    height: 20px;
    background-color: #e0e0e0;
  }
  
  .progress-bar {
    background-color: #00c853;
    height: 20px;
  }
  </style>