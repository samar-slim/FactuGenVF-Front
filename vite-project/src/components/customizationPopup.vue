<template>
    <div @click.stop id="customization-popup" class=" popup-container fixed right-0 top-0 h-screen w-64 bg-white z-50 shadow overflow-y-auto px-4 py-2 ">
      <div class="flex justify-between items-center pb-2 border-b border-gray-200 mb-4">
        <h3 class="text-lg font-medium">Apparence du document</h3>
        <button @click="$emit('close')">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
     
  <div class="mb-6 flex items-center space-x-2">
  <label for="theme" class="text-sm font-medium mr-2">Thème:</label>
  <div v-for="theme in themes" :key="theme.id">
    <button 
      :class="{ 'bg-gray-200 text-blue-700 border border-blue-700 rounded-md py-2 px-4': theme.id === selectedTheme, 'bg-white text-gray-500 border  rounded-md py-2 px-4': theme.id !== selectedTheme }"
      @click="setSelectedTheme(theme.id)"
    >
      {{ theme.name }}
    </button>
  </div>
</div>
      <!-- couleurs -->
  
  <label for="color-input" class="text-sm font-medium ">Couleur Principale:</label>
  <div class="flex items-center space-x-2 mb-4">
  <div class="w-6 h-6 rounded-full bg-blue-500" @click="updateColor('primary', 'bg-blue-500')"></div>
  <div class="w-6 h-6 rounded-full bg-red-600" @click="updateColor('primary', '#E53935')"></div>
  <div class="w-6 h-6 rounded-full bg-orange-500" @click="updateColor('primary', '#ffa500')"></div>
  <div class="w-6 h-6 rounded-full bg-green-500" @click="updateColor('primary', '#4CAF50')"></div>
  <div class="w-6 h-6 rounded-full bg-purple-400" @click="updateColor('primary', '#AB47BC')"></div>
  <div class="w-6 h-6 rounded-full bg-yellow-300" @click="updateColor('primary', '#FFF176')"></div>
  <!-- <input type="color" id="color-input" class="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"> -->
  <!-- <div class="w-10 h-8 bg-orange rounded-full" id="color-preview"></div> -->
    </div>
     
      
      <div class="mb-8">
        <label for="font-family" class="block text-sm font-medium mb-1">Police d'écriture</label>
        <select v-model="selectedFont" id="font-family" class="w-full rounded-md border border-gray-200 py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500">
          <option>Open Sans</option>
          <option>Roboto</option>
          <option>Arial</option>
        </select>
      </div>
      <button type="button" class="w-full rounded-md bg-blue-500 py-2 px-3 text-center text-white hover:bg-blue-700">Enregistrer</button>
    </div>
  </template>
  
  <script>
  import {themes} from '../data/themes.js';
  export default {
    props: {
      themes: Array, // Array of theme objects (e.g., { id: 1, name: 'Blue', color: '#007bff' })
      primaryColor: String,
    textColor: String,
    tableStyle: String,
    },
    emits: ['update-color'],
    data() {
      return {
        selectedTheme: null,
        selectedFont: 'Open Sans',
        themes: [
        { id: 'light', name: 'Clair', colorClass: 'bg-white text-black' },
      { id: 'dark', name: 'Foncé', colorClass: 'bg-black text-white' },
    ],
      };
    },
    methods: {
      setSelectedTheme(themeId) {
    this.selectedTheme = themeId;
    console.log('Selected theme:', themeId);
  },
  
  updateColor(type, color) {
      if (type === 'primary') {
        this.primaryColor = color;
        this.$emit('update-color', { type, color });
        console.log('Selected primary color:', color);
      }
    },
  saveCustomization() {
      // Emit an event to the parent component with the selected customization options
      this.$emit('save', {
        selectedTheme: this.selectedTheme,
        selectedFont: this.selectedFont,
        primaryColor: this.primaryColor,
        textColor: this.textColor,
        tableStyle: this.tableStyle,
      });
    },


    },
   
  };
  </script>
  
  <style scoped>
 


  </style>
  