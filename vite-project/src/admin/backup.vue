<template>
  <div id="app">
    <h1></h1>
    <BackupStatus :backupData="backupData" />
    <StorageMethod :storageData="storageData" />
    <RecentOperations :operations="recentOperations" class="mt-1" />
    <BackupScheduling @scheduleBackup="scheduleBackup" />
  </div>
</template>

<script>
import BackupStatus from './components/BackupStatus.vue'
import StorageMethod from './components/StorageMethod.vue'
import RecentOperations from './components/RecentOperations.vue'
import BackupScheduling from  './components/BackupScheduling.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    BackupStatus,
    RecentOperations,
    BackupScheduling
  },
  data() {
    return {
      backupData: {
        freeSpace: 60,
        backup: 30,
        other: 10
      },
      storageData: {
        compression: 82.5,
        deduplication: 37.5
      },
      recentOperations: [
        { operation: 'Importation facture A5234563', date: 'February 29, 2012', user: 'Arlene McCoy' },
        { operation: 'Digitalisation facture A4987835', date: 'December 29, 2012', user: 'Esther Howard' },
        { operation: 'Génération devis A654789', date: 'August 2, 2013', user: 'Cody Fisher' },
        { operation: 'Digitalisation devis A5469873', date: 'September 9, 2013', user: 'Ronald Richards' },
        { operation: 'Envoi devis A5469873', date: 'May 20, 2016', user: 'Albert Flores' },
        { operation: 'Confirmation facture A524563', date: 'May 31, 2016', user: 'Marvin McKinney' },
        { operation: 'Génération facture A5456087', date: 'September 24, 2017', user: 'Darlene Robertson' },
        { operation: 'Exportation facture A3457895', date: 'January 07, 2018', user: 'Jenny Wilson' }
      ]
    }
  },
  methods: {
    async scheduleBackup(options) {
      // Handle backup scheduling logic
      console.log('Scheduling backup with options:', options)

      let storageData = localStorage.getItem('store');
      let authToken = '';
      if (storageData) {
        try {
          let state = JSON.parse(storageData);
          authToken = state.token;
        } catch (e) {
          console.error("Failed to parse stored state", e);
        }
      } else if (!authToken) {
         const token = localStorage.getItem('token')
         if (token ) {

          authToken = token
        }
      } else {
        console.error("Failed to retrieve token from localStorage");
      }

      await axios.post('http://localhost:8080/api/backup/all', options, {
        headers : {
          'Authorization': `Bearer ${authToken}`
        }
      }).then((response) => {
        console.log("Backup scheduled successfully");
      }).catch((error) => {
        console.error("Failed to schedule backup:", error);
      })
    }
  }
}
</script>