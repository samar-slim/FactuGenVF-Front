<template>
    <div>
      <br />
      <div class="flex justify-end">
        <button @click="openModal" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Ajouter Client</button>
      </div>
      <!-- Modal -->
      <div v-if="modalOpen" class="container mx-auto p-4 shadow-lg rounded">
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal Header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 class="text-xl font-semibold text-gray-900">{{ editingClientId ? "Modifier Client" : "Nouveau Client" }}</h3>
            <button @click="closeModal" type="button"><i class="fa-solid fa-xmark"></i></button>
          </div>
          <!-- Modal Body -->
          <div class="container mx-auto p-4 shadow-lg rounded">
            <form @submit.prevent="saveData">
              <div class="mb-8">
                <ul class="flex border-b">
                  <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']" class="-mb-px mr-1">
                    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 font-semibold" href="#">Particulier</a>
                  </li>
                  <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']" class="mr-1">
                    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Professionnel</a>
                  </li>
                </ul>
                <div class="py-4">
                  <div v-if="activeTab === '1'" class="block">
                    <!-- Form for Particulier -->
                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                      <div class="mb-4">
                        <label for="civilite" class="block text-gray-700 text-sm font-bold mb-2">Civilité</label>
                        <input type="text" id="civilite" v-model="clientForm.civilite" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
                      <div class="mb-4">
                        <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
                        <input type="text" id="name" v-model="clientForm.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
                      <div class="mb-4">
                        <label for="prenom" class="block text-gray-700 text-sm font-bold mb-2">Prenom</label>
                        <input type="text" id="prenom" v-model="clientForm.prenom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                      <div class="mb-4">
                        <label for="adresse" class="block text-gray-700 text-sm font-bold mb-2">Adresse</label>
                        <input type="text" id="adresse" v-model="clientForm.adresse" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
                      <div class="mb-4">
                        <label for="suite_adresse" class="block text-gray-700 text-sm font-bold mb-2">Suite Adresse</label>
                        <input type="text" id="suite_adresse" v-model="clientForm.suite_adresse" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      </div>
                    </div>
                    <div class="mb-4">
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                      <input type="text" id="email" v-model="clientForm.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="telephone" class="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
                      <input type="text" id="telephone" v-model="clientForm.telephone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="pays" class="block text-gray-700 text-sm font-bold mb-2">Pays</label>
                      <input type="text" id="pays" v-model="clientForm.pays" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                  </div>
                  <div v-if="activeTab === '2'" class="">
                    <!-- Form for Professionnel -->
                    <div class="mb-4">
                      <label for="nom_societe" class="block text-gray-700 text-sm font-bold mb-2">Nom de la société</label>
                      <input type="text" id="nom_societe" v-model="clientForm.nom_societe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="siret" class="block text-gray-700 text-sm font-bold mb-2">SIRET</label>
                      <input type="text" id="siret" v-model="clientForm.siret" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="contact" class="block text-gray-700 text-sm font-bold mb-2">Contact</label>
                      <input type="text" id="contact" v-model="clientForm.contact" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                    <div class="mb-4">
                      <label for="tva" class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
                      <input type="text" id="tva" v-model="clientForm.tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    </div>
                  </div>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enregistrer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <br />
        <div class="flex justify-end mb-4"></div>
        <br />
        <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <!-- Search Bar -->
          <div class="relative justify-end">
            <label for="table-search" class="sr-only">Search</label>
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" />
          </div>
          <!-- Items per Page Selector -->
          <div class="flex space-x-4 rtl:space-x-reverse items-center justify-between">
            <select v-model="itemsPerPage" class="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
          </div>
        </div>
        <div v-if="selectedClient.length > 0" class="flex space-x-2 justify-between mb-1">
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
        <!-- Table -->
        <table class="w-full border px-8 text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
              <div class="flex items-center">
                <input id="checkbox-all" type="checkbox" @change="toggleSelectAll" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-all" class="sr-only">checkbox</label>
              </div>
            </th>
              <th scope="col" class="px-6 py-3">Nom</th>
              <th scope="col" class="px-6 py-3">Prénom</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Téléphone</th>
              <th scope="col" class="px-6 py-3">Adresse</th>
              <th scope="col" class="px-6 py-3">Ville</th>
              <th scope="col" class="px-6 py-3">Code Postal</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="client in paginatedClients" :key="client._id" class="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative group hover:bg-gray-200 dark:hover:bg-gray-700">
              <td class="w-4 p-4">
                  <div class="flex items-center">
        <input v-model="selectedClient" :value="client._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        <label for="checkbox-table-1" class="sr-only">checkbox</label>
      </div>
                  </td>
              <td class="px-6 py-4">{{ client.nom }}</td>
              <td class="px-6 py-4">{{ client.prenom }}</td>
              <td class="px-6 py-4">{{ client.email }}</td>
              <td class="px-6 py-4">{{ client?.telephone }}</td>
              <td class="px-6 py-4">{{ client?.adresse }}</td>
              <td class="px-6 py-4">{{ client?.ville }}</td>
              <td class="px-6 py-4">{{ client?.codePostal }}</td>
              <td class="px-6 py-4 flex items-center justify-end space-x-4">
      <a href="#" @click.prevent="editClient(client._id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-pen"></i></a>
          <a href="#" @click.prevent="deleteClient(client._id)" class="font-medium text-red-600 dark:text-red-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-trash"></i></a>
        </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div class="pagination-container">
        <Pagination :current-page="currentPage" :total-items="totalItems" :items-per-page="itemsPerPage" @page-changed="changePage" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import Pagination from "../global/Pagination.vue";
  export default {
      components: {
      Pagination,
    },
    data() {
      return {
        activeTabClient: 'particulier',
          editingClientId : null,
          selectedClient: [],
        modalOpen: false,
        activeTab: "1",
        clientForm: {
          civilite: "",
          name: "",
          prenom: "",
          adresse: "",
          suite_adresse: "",
          email: "",
          telephone: "",
          pays: "",
          nom_societe: "",
          siret: "",
          contact: "",
          tva: "",
        },
        itemsPerPage: 10,
        currentPage: 1,
        clients: [],
        totalItems: 0,
      };
      
    },
   
      computed: {
      paginatedClients() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        return this.clients.slice(start, start + this.itemsPerPage);
      },
  },
    created() {
      this.loadClients();
    },
    methods: {
      editClient(clientID) {
    // Faites une requête pour obtenir les détails du client à éditer
    axios.get(`http://localhost:8080/api/client/${clientID}`)
      .then(response => {
        // Remplissez le formulaire avec les détails du client récupérés
        this.clientForm = response.data;
        // Définissez l'ID du client en cours d'édition
        this.editingClientId = clientID;
        // Ouvrez le modal pour modifier le client
        this.openModal();
      })
      .catch(error => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue lors de la récupération des détails du client. Veuillez réessayer.");
      });
  },
      clientLoad() {
           axios.get("http://localhost:8080/api/client/")
             .then(({data}) => {
              console.log(data);
              this.result = data;
             
         });
  
         },
      sendSelected() {
        console.log('Envoyer les devis sélectionnés:', this.selectedClient);
      },
      editSelected() {
        console.log('Éditer les devis sélectionnés:', this.selectedClient);
      },
      deleteSelected() {
      
      if (confirm("Êtes-vous sûr de vouloir supprimer les clients sélectionnés ?")) {
        const deleteRequests = this.selectedClient.map(id =>
          axios.delete(`http://localhost:8080/api/client/${id}`)
        );
        Promise.all(deleteRequests)
          .then(() => {
            this.loadClients(); 
            this.selectedClient = []; 
          })
          .catch(error => {
            console.error('Erreur lors de la suppression des clients', error);
          });
      }
    },
      toggleSelectAll(event) {
        if (event.target.checked) {
          this.selectedClient = this.client.map(devis => devis._id);
        } else {
          this.selectedClient = [];
        }
      },
      openModal() {
          
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
      },
     saveData() {
      
          if (this.editingClientId) {
        axios
          .put(`http://localhost:8080/api/client/${this.editingClientId}`, this.clientForm)
          .then((response) => {
            this.loadClients();
            this.closeModal();
          })
          .catch((error) => {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de la mise à jour du client. Veuillez réessayer.");
          });
      
      } else {
        axios
          .post("http://localhost:8080/api/client/add", this.clientForm)
          .then((response) => {
            this.loadClients();
            this.closeModal();
          })
          .catch((error) => {
            console.error("Error:", error);
            alert("Une erreur est survenue lors de l'ajout du client. Veuillez réessayer.");
          });
      }
    },
    updateClient() {
      if (this.editingClientId) {
        axios
          .put(`http://localhost:8080/api/client/${this.editingClientId}`, this.clientForm)
          .then((response) => {
            this.loadClients();
            this.closeModal();
          })
          .catch((error) => {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de la mise à jour du client. Veuillez réessayer.");
          });
      }
    },
      deleteClient(clientID) {
        axios
          .delete(`http://localhost:8080/api/client/${clientID}`)
          .then(() => {
            this.loadClients();
          })
          .catch((error) => {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de la suppression du client. Veuillez réessayer.");
          });
      },
      changePage(page) {
        this.currentPage = page;
      },
      loadClients() {
        axios.get("http://localhost:8080/api/client/").then(({ data }) => {
          this.clients = data;
          this.totalItems = data.length;
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  </style>
  