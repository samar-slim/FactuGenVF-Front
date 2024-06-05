<template>
    <div>
      <h3 class="text-xl font-semibold">Planifier votre backup</h3>
      <div>
    <h4>Paramètres backup</h4>
    <div class="flex flex-col space-y-2">
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input type="radio" v-model="scheduleOptions.period" value="day" class="form-radio mr-2" />
        Chaque jour
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input type="radio" v-model="scheduleOptions.period" value="week" class="form-radio mr-2" />
        Chaque semaine
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input type="radio" v-model="scheduleOptions.period" value="month" class="form-radio mr-2" />
        Chaque mois
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input type="radio" v-model="scheduleOptions.period" value="3months" class="form-radio mr-2" />
        Chaque trois mois
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input type="radio" v-model="scheduleOptions.period" value="other" class="form-radio mr-2" />
        autre...
      </label>
    </div>
    <div v-if="scheduleOptions.period === 'other'" class="mt-4">
      <input
        type="text"
        v-model="scheduleOptions.otherPeriod"
        placeholder="Choisir un temps"
        class="rounded border border-gray-300 px-4 py-2 w-30" 
      />
    </div>
  </div>
  <div>
    <h4>Où faire le backup</h4>
    <div class="flex flex-col space-y-2">
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input
          type="radio"
          v-model="scheduleOptions.destination"
          value="google"
          class="form-radio mr-2"
        />
        Google cloud
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input
          type="radio"
          v-model="scheduleOptions.destination"
          value="azure"
          class="form-radio mr-2"
        />
        Microsoft azure
      </label>
      <label class="inline-flex items-center rounded border border-gray-300 px-4 py-2">
        <input
          type="radio"
          v-model="scheduleOptions.destination"
          value="other"
          class="form-radio mr-2"
        />
        autre...
      </label>
    </div>
    <div v-if="scheduleOptions.destination === 'other'" class="mt-4">
      <input
        type="text"
        v-model="scheduleOptions.otherDestination"
        placeholder="Choisir un temps"
        class="rounded border border-gray-300 px-4 py-2 w-48" 
      />
    </div>
  </div>
  <button 
      @click="scheduleBackup" 
      class="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 flex flex-center mt-4"
    >
      commencer backup maintenant
    </button>
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