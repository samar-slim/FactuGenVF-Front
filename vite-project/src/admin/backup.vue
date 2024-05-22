<template>
    <div class="backup-page">
      <h1>Backup Data</h1>
      <button @click="triggerBackup" class="btn btn-primary">Backup Now</button>
      <p v-if="backupStatus">{{ backupStatus }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        backupStatus: '',
      };
    },
    methods: {
      async triggerBackup() {
        try {
          const response = await axios.get('http://localhost:8080/api/backup');
          this.backupStatus = response.data.message;
        } catch (error) {
          console.error('Error during backup:', error);
          this.backupStatus = 'Backup failed. Please try again.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .backup-page {
    padding: 20px;
  }
  .btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  