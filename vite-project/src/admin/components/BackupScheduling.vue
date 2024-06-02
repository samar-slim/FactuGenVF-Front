<template>
    <div>
      <h3>Planifier votre backup</h3>
      <div>
        <h4>Paramètres backup</h4>
        <div>
          <label>
            <input type="radio" v-model="scheduleOptions.period" value="day" />
            Chaque jour
          </label>
          <label>
            <input type="radio" v-model="scheduleOptions.period" value="week" />
            Chaque semaine
          </label>
          <label>
            <input type="radio" v-model="scheduleOptions.period" value="month" />
            Chaque mois
          </label>
          <label>
            <input type="radio" v-model="scheduleOptions.period" value="3months" />
            Chaque trois mois
          </label>
          <label>
            <input type="radio" v-model="scheduleOptions.period" value="other" />
            autre...
          </label>
        </div>
        <div v-if="scheduleOptions.period === 'other'">
          <input
            type="text"
            v-model="scheduleOptions.otherPeriod"
            placeholder="Choisir un temps"
          />
        </div>
      </div>
      <div>
        <h4>Où faire le backup</h4>
        <div>
          <label>
            <input
              type="radio"
              v-model="scheduleOptions.destination"
              value="google"
            />
            Google cloud
          </label>
          <label>
            <input
              type="radio"
              v-model="scheduleOptions.destination"
              value="azure"
            />
            Microsoft azure
          </label>
          <label>
            <input
              type="radio"
              v-model="scheduleOptions.destination"
              value="other"
            />
            autre...
          </label>
        </div>
        <div v-if="scheduleOptions.destination === 'other'">
          <input
            type="text"
            v-model="scheduleOptions.otherDestination"
            placeholder="pr6ci9#2"
          />
        </div>
      </div>
      <button @click="scheduleBackup">commencer backup maintenant</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BackupScheduling',
    data() {
      return {
        scheduleOptions: {
          period: 'day',
          otherPeriod: '',
          destination: 'google',
          otherDestination: ''
        }
      }
    },
    methods: {
      scheduleBackup() {
        this.$emit('scheduleBackup', this.scheduleOptions)
      }
    }
  }
  </script>