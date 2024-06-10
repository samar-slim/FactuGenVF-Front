<!-- devis.vue -->
<template>
  <div class="px-2">
    <div class="bg-gray-100 py-2 pw-2 p-1 mb-8 rounded shadow">
    <div class="bg-white py-2 rounded shadow">
      <div class="flex justify-between items-center mb-4">
        <div class=" text-2xl px-2 font-bold">
          <h3>Liste Devis</h3>
        </div>
        <div class="flex justify-end">
    <button @click="redirigerVersDevis" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"><i class="pi pi-plus"></i> Ajouter Devis</button>
  </div>
      </div>
    </div>
  </div>
 
   
    <br/>  <br/>  <br/>
    <div class="flex px-8 flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
     
   

      
     
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
<input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche avec Nom ,Ville ..." @click="handleSearchClick">
</div>                                                                                                                                                                    
   </div>
   <div v-if="selectedDevis.length > 0" class="flex space-x-2 justify-between mb-1">
    <div>
      <button @click="deleteSelected" class="inline-flex items-center text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
        Supprimer
      </button>
      <button @click="sendSelected" class="inline-flex items-center text-black bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-green-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-green-800 dark:border-green-600 dark:hover:bg-green-700 dark:hover:border-green-600 dark:focus:ring-green-700">
        Envoyer
      </button>
      <button @click="editSelected" class="inline-flex items-center text-black bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800">
        Éditer
      </button>
    </div>
  </div>
   
  <table class="w-full text-sm px-4 py-8 border text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="p-4">
          <div class="flex items-center">
            <input id="checkbox-all" type="checkbox" @change="toggleSelectAll" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
            <label for="checkbox-all" class="sr-only">checkbox</label>
          </div>
        </th>
        <th scope="col" class="px-6 py-3">Devis N°</th>
        <th scope="col" class="px-6 py-3">Client</th>
        <th scope="col" class="px-6 py-3">Entreprise</th>
        <th scope="col" class="px-6 py-3">Date</th>
        <th scope="col" class="px-6 py-3">Signature</th>
        <th scope="col" class="px-6 py-3">Total TTC</th>
        <th scope="col" class="px-6 py-3">Mail</th>
        <th scope="col" class="px-6 py-3">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="devis in paginatedDevis" :key="devis._id" class="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative group hover:bg-gray-200 dark:hover:bg-gray-700">

<td class="w-4 p-6">
  <div class="flex items-center">
    <input v-model="selectedDevis" :value="devis._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
    <label for="checkbox-table-1" class="sr-only">checkbox</label>
  </div>
</td> 
<td @click="onShow(devis._id)" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
  #{{ devis.numDevis }}
</td>
<td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.nom_entreprise }}</td>
<td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.ville }}</td>
<td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.date_emission }}</td>
<td @click="onShow(devis._id)" class="px-6 py-4"></td>
<td @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.titre }}</td>
<td  @click="onShow(devis._id)" class="px-6 py-4">{{ devis.devis?.email }}</td>
<td class="px-6 py-4 flex items-center justify-end space-x-4">
  <a href="#" @click.prevent="editDevis(devis._id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-pen"></i></a>
      <a href="#" @click.prevent="deleteDevis(devis._id)" class="font-medium text-red-600 dark:text-red-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-trash"></i></a>
    </td>
</tr>
<a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline delete-icon absolute top-0 right-full opacity-0 group-hover:opacity-100 transform translate-y-1/2 -translate-x-4">Delete</a>
    </tbody>
  </table>
  <ShowDevis
    v-if="showModal"
    :id="currentDevisId"
    :modalTitle="'Devis'"
    :buttonText="'Générer Facture'"
    :closeButtonText="'Fermer'"
    @close="showModal = false"
  />
 

  <nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span class="font-semibold text-gray-900 dark:text-white">{{ startItem }}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{ endItem }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span></span>
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <button @click="prevPage" :disabled="currentPage === 1" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><i class="pi pi-chevron-left"></i></button>
      </li>
      <li v-for="page in totalPages" :key="page">
        <button @click="goToPage(page)" :class="{'text-blue-600 bg-blue-50 border-blue-300': currentPage === page, 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700': currentPage !== page}" class="px-3 py-2 leading-tight">{{ page }}</button>
      </li>
      <li>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> <i class="pi pi-chevron-right"></i></button>
      </li>
    </ul>
  </nav>

  </div>

  



</template>

<script>
import axios from 'axios';
import ShowDevis from './ShowDevis.vue';

export default {
  components: {
    ShowDevis,
  },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
      selectedDevis: [],
      showMenu: null,
      showModal: false,
      currentDevisId: null,
      showFactureList: false,
      factureData: null,
      searchQuery: '',
      searchResults: [],
      activeTab1: '1',
      modalOpen1: false,
      produits: {
        nom_article: '',
        reference: '',
        categorie: '',
        description: '',
        prix: '',
        prix_unitaire: '',
        tva: '',
        type_unité: '',
      },
      devis: [],
      clients: {
        civilite: '',
        name: '',
        prenom: '',
        adresse: '',
        suite_adresse: '',
        email: '',
        téléphone: '',
        contact: '',
        pays: '',
        nom_societe: '',
        siret: '',
        tva: '',
      },
      isOpen: false,
      modalOpen: false,
      activeDropdown: null,
     
    };
  },
  computed: {
    paginatedDevis() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.devis.slice(start, end);
    },
    totalItems() {
      return this.devis.length;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    startItem() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    endItem() {
      return Math.min(this.startItem + this.itemsPerPage - 1, this.totalItems);
    },
  },
  methods: {
    generateFacture(factureData) {
      this.factureData = factureData;
      this.showFactureList = true;
    },
    editDevis(id) {
      console.log("Éditer le devis avec l'ID :", id);
      this.currentDevisId = id;
      console.log('currr', this.currentDevisId);
      this.showModal = true;
    },
    deleteDevis(id) {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce devis ?")) {
        axios.delete(`http://localhost:8080/api/devis/${id}`)
          .then(response => {
            console.log("Devis supprimé avec succès :", response.data);
            this.devisLoad();
          })
          .catch(error => {
            console.error("Erreur lors de la suppression du devis :", error);
            alert("Une erreur est survenue lors de la suppression du devis.");
          });
      }
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    sendSelected() {
      console.log('Envoyer les devis sélectionnés:', this.selectedDevis);
    },
    editSelected() {
      console.log('Éditer les devis sélectionnés:', this.selectedDevis);
    },
    deleteSelected() {
      const deleteRequests = this.selectedDevis.map(id => axios.delete(`http://localhost:8080/api/devis/${id}`));
      Promise.all(deleteRequests)
        .then(() => {
          this.devisLoad();
          this.selectedDevis = [];
        })
        .catch(error => {
          console.error('Erreur lors de la suppression des produits', error);
        });
    },
    toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedDevis = this.devis.map(devis => devis._id);
      } else {
        this.selectedDevis = [];
      }
    },
    toggleMenu(id) {
      this.showMenu = this.showMenu === id ? null : id;
    },
    option1(id) {
      console.log("Option 1 pour l'élément avec l'ID:", id);
    },
    option2(id) {
      console.log("Option 2 pour l'élément avec l'ID:", id);
    },
    option3(id) {
      console.log("Option 2 pour l'élément avec l'ID:", id);
    },
    onShow(id) {
      this.currentDevisId = id;
      console.log('currr', this.currentDevisId);
      this.showModal = true;
    },
    redirigerVersDevis() {
      this.$router.push(`/devis`);
    },
    saveDataDevis() {
      this.devis.clientId = this.selectedClientId;
      this.devis.produitId = this.selectedArticleId;
      console.log(this.devis);

      axios.post("http://localhost:8080/api/devis/add", this.devis)
        .then(async (response) => {
          const { data } = response;
          console.log({data});
          devis.value = response.data.devis;
          console.log(devis.value);
          this.devisLoad();
          this.devis = {};
          console.log(this.selectedClientId);
        })
        .catch(error => {
          console.error("Erreur lors de l'enregistrement du devis :", error);
          alert("Erreur lors de l'enregistrement du devis, veuillez réessayer.");
        });
    },
    devisLoad() {
      axios.get('http://localhost:8080/api/devis')
        .then(response => {
          this.devis = response.data;
        })
        .catch(error => {
          console.error('Erreur lors du chargement des devis', error);
        });
    },
    openModal() {
      this.modalOpen = true;
    },
    openModal1() {
      this.modalOpen1 = true;
    },
    toggleDropdown(dropdownId) {
      this.activeDropdown = this.activeDropdown === dropdownId ? null : dropdownId;
    },
    closeModal() {
      this.modalOpen = false;
    },
    closeModal1() {
      this.modalOpen1 = false;
    },
    acceptTerms() {
      // Action lorsque les termes sont acceptés
    },
    declineTerms() {
      // Action lorsque les termes sont refusés
    },
    openChoisir() {
      this.isOpen = true;
    },
    closeChoisir() {
      this.isOpen = false;
    },
    saveData() {
      console.log(this.produits);

      axios.post("http://localhost:8080/api/produits/add", this.produits)
        .then(response => {
          const { data } = response;
          console.log(data.status);
          try {
            if (data.status === 201) {
              alert("add successfully");
              this.clientLoad();
              this.produits = {};
              window.location.reload();
            } else {
              alert("add successfully");
            }
          } catch (err) {
            console.log(err);
            alert("error,please try again");
          }
        })
        .catch(error => {
          console.error("Error:", error);
          alert("Une erreur est survenue lors de l'ajout du client. Veuillez réessayer.");
        });
    },
  },
  mounted() {
    axios.get("http://localhost:8080/api/devis/")
      .then(({ data }) => {
        this.devis = data;
        console.log(data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des devis :", error);
      });

    const keepModalOpen = sessionStorage.getItem('keepModalOpen');
    if (keepModalOpen === 'true') {
      this.showModal = true;
      this.currentDevisId = sessionStorage.getItem('currentDevisId');
      sessionStorage.removeItem('keepModalOpen');
      sessionStorage.removeItem('currentDevisId');
    }
  }
};
</script>