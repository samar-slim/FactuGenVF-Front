<template>
    <div @click.stop id="customization-popup" class=" popup-container fixed right-0 top-0 h-screen w-64 bg-white z-50 shadow overflow-y-auto px-4 py-2 ">
      <div class="flex justify-between items-center pb-2 border-b border-gray-200">
        <h3 class="text-lg font-medium">Apparence du document</h3>
        <button @click="$emit('close')">
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
     
  <div class="mb-4 flex items-center space-x-2">
  <label for="theme" class="text-sm font-medium mr-2">Thème</label>
  <div v-for="theme in themes" :key="theme.id">
    <button 
      :class="{ 'bg-blue-500 text-white': theme.id === selectedTheme, 'bg-gray-200 text-gray-700': theme.id !== selectedTheme }"
      @click="setSelectedTheme(theme.id)"
    >
      {{ theme.name }}
    </button>
  </div>
</div>
      <!-- couleurs -->
      <div class="flex items-center space-x-2">
  <label for="color-input" class="text-sm font-medium">Couleur:</label>
  <input type="color" id="color-input" class="w-8 h-8 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500">
  <div class="w-10 h-8 bg-gray-200 rounded-full" id="color-preview"></div>
    </div>
     
      
      <div class="mb-4">
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
      };
    },
    methods: {
      setSelectedTheme(themeId) {
    this.selectedTheme = themeId;
  }
    },
   
  };
  </script>
  
  <style scoped>
 


  </style>
  