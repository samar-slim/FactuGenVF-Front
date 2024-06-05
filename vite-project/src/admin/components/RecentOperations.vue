<template>
    <div>
      <h3 class="text-xl font-semibold">Opérations récentes</h3>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse">
    <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="selectAll($event)">
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" class="px-6 py-3">Opération récente</th>
        <th scope="col" class="px-6 py-3">Date</th>
        <th scope="col" class="px-6 py-3">Par</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="operation in operations" :key="operation.id" class="hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input :id="'checkbox-' + operation.id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="selectedoperations" :value="operation.id">
            <label :for="'checkbox-' + operation.id" v-if="selectedoperations.includes(operation.id)" class="sr-only">checkbox</label>
          </div>
        </td>
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer" @click="showOperationDetails(operation)">{{ operation.prenom }} {{ operation.nom }}</td>
        <td class="px-6 py-4 cursor-pointer" @click="showOperationDetails(operation)">{{ operation.date }}</td>
        <td class="px-6 py-4 cursor-pointer" @click="showOperationDetails(operation)">{{ operation.personne }}</td>
      </tr>
    </tbody>
  </table>
    </div>
  </template>
  
  <script>
  export default {
  name: 'RecentOperations',
  props: {
    operations: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedoperations: [], // Ajoutez ici la logique pour gérer les opérations sélectionnées
      operations:[
  {
    "nom": "Importation facture A5234563",
    "date": "February 29, 2012",
    "personne": "Arlene McCoy"
  },
  {
    "nom": "Digitalisation facture A4987835",
    "date": "December 29, 2012",
    "personne": "Esther Howard"
  },
  {
    "nom": "Génération devis A654789",
    "date": "August 2, 2013",
    "personne": "Cody Fisher"
  },
  {
    "nom": "Digitalisation devis A5469873",
    "date": "September 9, 2013",
    "personne": "Ronald Richards"
  },
  {
    "nom": "Envoi devis A5469873",
    "date": "May 20, 2016",
    "personne": "Albert Flores"
  },
  {
    "nom": "Confirmation facture A524563",
    "date": "May 31, 2016",
    "personne": "Marvin McKinney"
  },
  {
    "nom": "Génération facture A5456087",
    "date": "September 24, 2017",
    "personne": "Darlene Robertson"
  },
  {
    "nom": "Exportation facture A3457895",
    "date": "January 07, 2018",
    "personne": "Jenny Wilson"
  }
]
    }
  },
  methods: {
    showOperationDetails(operation) {
      // Mettez ici la logique pour afficher les détails de l'opération
      console.log(operation);
    }
  }
}

  </script>