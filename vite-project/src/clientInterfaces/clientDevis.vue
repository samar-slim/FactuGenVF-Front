<template>
    <div>
      
  
  <div class=" px-2 py-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="bg-gray-100 p-1 mb-8 rounded shadow">
        <div class="bg-white p-2 rounded shadow">
          <div class="flex justify-between items-center mb-4">
            <div class=" text-2xl px-2 font-bold">
              <h3>Liste ffffffDevis</h3>
            </div>
           
          </div>
        </div>
      </div>
  
          
          
  
          <br/>
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
         
       
  
          
         
          <!-- Bouton d'action à gauche -->
          <div class="justify-start">
              <span> Entreprise
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-50 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span class="sr-only">Action button</span>
              Entreprise
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
          </span>
            <span>Date
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-300 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span class="sr-only">Action </span>
              le 12/03/2022<i class="pi pi-calendar-minus"> </i>
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
          </span>
           
          <span>Signature
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span class="sr-only">Action button</span>
              Signature
              <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
          </span>
            <!-- Dropdown menu -->
            <div id="dropdownAction" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          </div>
         
          <!-- Barre de recherche à droite -->
          <div class="relative justify-end">
            <label for="table-search" class="sr-only">Search</label>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche avec Nom ,Ville ...">
          </div>
          
        </div>
        
        <div>
      <table class="border  w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input id="checkbox-all" type="checkbox" @change="toggleSelectAll" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" class="px-6 py-3">devis N°</th>
            <th scope="col" class="px-6 py-3">Client</th>
            <th scope="col" class="px-6 py-3">Entreprise</th>
            <th scope="col" class="px-6 py-3">Date</th>
            
            <th scope="col" class="px-6 py-3">Mail</th>
            <th scope="col" class="px-6 py-3">Total TTC</th>
            
            <th scope="col" class="px-6 py-3">Status</th>
            <th scope="col" class="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="devis in devis" :key="devis._id" class="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative group hover:bg-gray-200 dark:hover:bg-gray-700">
  
    <td class="w-4 p-6">
    
    </td>
    <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      #{{ devis.devis?.numdevis }}
    </td>
    <td  @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.nom_entreprise }}</td>
    <td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.ville }}</td>
    <td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.date_emission }}</td>
    <td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.email }}</td>
    <td   class="px-6 py-4">{{ devis.produitsSelectionnes?.total }}</td>
    
    <td @click="canceldevis(devis._id)" :class="{'text-red-400': devis.devis.status === 'signé', 'text-blue-500': devis.devis.status === 'non signé'}" class="font-bold px-6 py-4">
      <button class="border border-gray-400 rounded px-2 bg-gray-100">{{ devis.devis.status }}</button>
  </td>
  
    <td class="px-6 py-4 flex items-center justify-end space-x-4">
      
      <a href="#"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-pen"></i></a>
          <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-trash"></i></a>
        </td>
  </tr>
  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline delete-icon absolute top-0 right-full opacity-0 group-hover:opacity-100 transform translate-y-1/2 -translate-x-4">Delete</a>
        </tbody>
      </table>
      <ShowDevisClient  v-if="showModal"
       :id="currentDevisId"
        :closeButtonText="'Fermer'"
        @close="showModal = false"
      />
      
  </div>
  </div>
  <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
          <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <i class="pi pi-chevron-left"></i> </a>
              </li>
              <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
              </li>
              <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
              <li>
                  <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
              </li>
              <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                  <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              <li>
          <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <i class="pi pi-chevron-right"></i> </a>
              </li>
          </ul>
      </nav>
  
    </div>
  </template>
 
<script>
import axios from 'axios';
import { onMounted } from 'vue';
import ShowDevisClient from './showDevisClient.vue';

export default {
  components: { ShowDevisClient },
  data() {
    return {
     
      devis: [],
      showModal: false,
      currentDevisId: null,
      clients: [], // Tableau pour stocker les clients
      defaultClientId: null, // Initialisé avec null
    };
  },
  methods: {
   
    async loadDevisByClientId(clientId) {
  try {
    const response = await axios.get(`http://localhost:8080/api/devis?clientId=${clientId}`);
    // Vérifier le format de la réponse avant d'assigner les données
    if (Array.isArray(response.data)) {
      // Filtrer les devis pour ne garder que ceux avec le clientId donné
      this.devis = response.data.filter(devis => devis.devis.clientId === clientId);
      console.log('deviss',this.devis);
    } else {
      console.error('Le format de la réponse de l\'API est inattendu');
    }
  } catch (error) {
    console.error('Erreur lors du chargement des devis:', error);
  }
},
    async loadClients() {
      try {
        const response = await axios.get('http://localhost:8080/api/client');
        this.clients = response.data;
        // Définir le defaultClientId avec le premier client du tableau
        if (this.clients.length > 0) {
          this.defaultClientId = this.clients[0]._id;
          // Charger les devis pour le premier client
          this.loadDevisByClientId(this.defaultClientId);
        }
      } catch (error) {
        console.error('Erreur lors du chargement des clients:', error);
      }
    },
    onShow(id) {
      this.currentDevisId = id;
      console.log('currr', this.currentDevisId);
      this.showModal = true;
      console.log('ccc',this.showModal)
    },
    cancelDevis(id) {
      // Logic for cancelling devis
    },
    editDevis(id) {
      // Logic for editing devis
    },
    deleteDevis(id) {
      // Logic for deleting devis
    },
    toggleSelectAll(event) {
      // Logic for toggling select all
    },
  },
  mounted() {
    axios.get("http://localhost:8080/api/devis/")
    .then(({ data }) => {
      this.devis = data;
      this.fetchUserInfos();
      this.fetchClientInfos();
      console.log(data);
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des devis :", error);
    });

    this.loadClients();
  },
};
</script>