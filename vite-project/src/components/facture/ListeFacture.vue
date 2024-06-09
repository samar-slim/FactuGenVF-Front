<template>
    <div>
      
  
  <div class=" px-2 py-4 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="bg-gray-100 p-1 mb-8 rounded shadow">
        <div class="bg-white p-2 rounded shadow">
          <div class="flex justify-between items-center mb-4">
            <div class=" text-2xl px-2 font-bold">
              <h3>Liste des Factures</h3>
            </div>
            <button class="font-bold border bg-blue-800 text-white px-1 py-1 rounded-lg">
              <i class="fa-solid fa-plus" style="color: #ffffff;"></i> Nouveau Facture
            </button>
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
            <th scope="col" class="px-6 py-3">facture N°</th>
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
          <tr v-for="facture in facture" :key="facture._id" class="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative group hover:bg-gray-200 dark:hover:bg-gray-700">
  
    <td class="w-4 p-6">
    
    </td>
    <td  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      #{{ facture.numfacture }}
    </td>
    <td  class="px-6 py-4">{{ facture.facture?.nom_entreprise }}</td>
    <td  class="px-6 py-4">{{ facture.facture?.ville }}</td>
    <td  class="px-6 py-4">{{ facture.facture?.date_emission }}</td>
    <td @click="onShow(facture._id)" class="px-6 py-4">{{ facture.facture?.email }}</td>
    <td   class="px-6 py-4">{{ facture.produitsSelectionnes?.total }}</td>
    
    <td @click="cancelFacture(facture._id)" :class="{'text-red-400': facture.facture.status === 'annulé', 'text-blue-500': facture.facture.status === 'cours'}" class="font-bold px-6 py-4">
      <button class="border border-gray-400 rounded px-2 bg-gray-100">{{ facture.facture.status }}</button>
  </td>
  
    <td class="px-6 py-4 flex items-center justify-end space-x-4">
      
      <a href="#" @click.prevent="editfacture(facture._id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-pen"></i></a>
          <a href="#" @click.prevent="deletefacture(facture._id)" class="font-medium text-red-600 dark:text-red-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-trash"></i></a>
        </td>
  </tr>
  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline delete-icon absolute top-0 right-full opacity-0 group-hover:opacity-100 transform translate-y-1/2 -translate-x-4">Delete</a>
        </tbody>
      </table>
      <ShowFacture
        v-if="showModal"
        :id="currentFactureId"
        :modalTitle="'Facture'"
        
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
  
  import ShowFacture from './ShowFacture.vue';
  
  export default {
    name: 'ListeFacture',
    components: {
      ShowFacture,
    },
    data() {
      return {
        facture: [],
        avoirs: [],
        paginatedfacture: '',
        showModal: false,
        currentFactureId: null,
      };
    },
    methods: {
      editFacture(id) {
          console.log("Éditer le devis avec l'ID :", id);
          this.currentFactureId = id;
          console.log('currr', this.currentFactureId);
          this.showModal = true;
        },
      async loadAvoirs() {
        try {
          const response = await axios.get('http://localhost:8080/api/avoirs');
          this.avoirs = response.data;
        } catch (error) {
          console.error('Erreur lors du chargement des avoirs:', error);
        }
      },
      async createFactureFromDevis() {
        try {
          
          const devisInfo = sessionStorage.getItem('devisInfo');
          const devis = JSON.parse(devisInfo);
  
          
          const factureData = {
            nom_entreprise: devis.nom_entreprise,
            num: devis.num,
            code_postal: devis.code_postal,
            ville: devis.ville,
            email: devis.email,
            num_tel: devis.num_tel,
            num_siret: devis.num_siret,
            num_tva: devis.num_tva,
            inter: devis.inter,
            deleg: devis.deleg,
            titre: devis.titre,
            numfacture: devis.numDevis, // Utiliser le numéro de devis comme numéro de facture (vous pouvez ajuster cela selon vos besoins)
            remarque: devis.remarque,
            remise: devis.remise,
            condition: devis.condition,
            paiement: devis.paiement,
            clientId: devis.clientId,
            produitId: devis.produitId,
            totalHT: devis.totalHT,
            totalTTC: devis.totalTTC,
            imageUrl: devis.imageUrl,
            date_expiration: devis.date_expiration,
            date_emission: devis.date_emission,
            // Vous pouvez ajouter d'autres champs ici si nécessaire
          };
  
          // Créer une nouvelle facture avec les informations du devis
          await axios.post('http://localhost:8080/api/facture/add', {
            facture: factureData,
            produitsSelectionnes: devis.produitsSelectionnes,
          });
  
          console.log('Facture créée à partir du devis avec succès.');
        } catch (error) {
          console.error("Erreur lors de la création de la facture à partir du devis:", error);
        }
      },
      async onShow(id) {
        this.currentFactureId = id;
          console.log('currr', this.currentFactureId);
          this.showModal = true;
        },
      async cancelFacture(id) {
        try {
          const response = await axios.put(`http://localhost:8080/api/facture/cancel/${id}`);
          console.log("Facture annulée avec succès:", response.data);
  
          // Recharger les listes des factures et des avoirs
          await this.loadAvoirs();
          await this.FactureLoad();
          this.$router.push('/Avoir');
         
        } catch (error) {
          console.error("Erreur lors de l'annulation de la facture:", error);
          alert("Une erreur est survenue lors de l'annulation du devis. Veuillez réessayer.");
        }
      },
      async  redirectToListeAvoir  () {
        try {
          await router.push('/Avoir');
        } catch (error) {
          console.error("Erreur lors de la redirection vers ListeFacture :", error);
        }
      },
  
      deletefacture(id) {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette facture ?")) {
          axios.delete(`http://localhost:8080/api/facture/${id}`)
            .then(response => {
              console.log("Facture supprimée avec succès :", response.data);
              this.FactureLoad();
            })
            .catch(error => {
              console.error("Erreur lors de la suppression de la facture :", error);
              alert("Une erreur est survenue lors de la suppression de la facture.");
            });
        }
      },
      async FactureLoad() {
        try {
          const response = await axios.get('http://localhost:8080/api/facture');
          this.facture = response.data;
        } catch (error) {
          console.error('Erreur lors du chargement des factures:', error);
        }
      }
    },
    mounted() {
      const showModal = sessionStorage.getItem('showFactureModal');
        const factureId = sessionStorage.getItem('currentFactureId');
        if (showModal === 'true' && factureId) {
          showFactureModal.value = true;
          currentFactureId.value = factureId;
        }
      
      this.FactureLoad();
      this.loadAvoirs();
      this.createFactureFromDevis();
  
      const keepModalOpen = sessionStorage.getItem('keepModalOpen');
      if (keepModalOpen === 'true') {
        this.showModal = true;
        this.currentFactureId = sessionStorage.getItem('currentFactureId');
        sessionStorage.removeItem('keepModalOpen');
        sessionStorage.removeItem('currentFactureId');
      }
    }
  };
  </script>