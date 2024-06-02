<template>
  <div id="app">
    <h1>Backup</h1>
    <BackupStatus :backupData="backupData" />
    <StorageMethod :storageData="storageData" />
    <RecentOperations :operations="recentOperations" />
    <BackupScheduling @scheduleBackup="scheduleBackup" />
  </div>
</template>

<script>
import BackupStatus from './components/BackupStatus.vue'
import StorageMethod from './components/StorageMethod.vue'
import RecentOperations from './components/RecentOperations.vue'
import BackupScheduling from  './components/BackupScheduling.vue'

export default {
  name: 'App',
  components: {
    BackupStatus,
    StorageMethod,
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
    scheduleBackup(options) {
      // Handle backup scheduling logic
      console.log('Scheduling backup with options:', options)
    }
  }
}
</script>