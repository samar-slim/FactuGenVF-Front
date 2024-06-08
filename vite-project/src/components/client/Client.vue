<template>
  <div>
        <br/>
     <div class="flex justify-end">
      <button @click="openModal" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Ajouter Client</button>
    </div>
      <!-- Modal -->
      <div class="">
      <div v-if="modalOpen"  class=" container mx-auto p-4  p-10 rounded fixed inset-2 backdrop-blur-lg z-10">
        <!-- Contenu de la modal -->
        <div class="relative bg-white rounded-lg shadow ...">
          <!-- En-tête de la modal -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
            <h3 class="text-xl font-semibold text-gray-900 ...">Nouveau Client</h3>
            <button @click="closeModal" type="button" ><i class="fa-solid fa-xmark"></i></button>
          </div>
          <!-- Corps de la modal -->
          <div class="flex justify-end">
            <div class="container mx-auto p-4 shadow-lg p-10 rounded">
              <div class="flex justify-center items-center h-screen">
                <form @submit.prevent="saveData">
                  <div class="mb-8">
                    <ul class="flex border-b">
                      <li
                        @click="setActiveTabClient('particulier')"
                        :class="getTabClassClient('particulier')"
          class="mr-1 relative"
                      >
                        <a
                          class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 font-semibold"
                          href="#"
                          >Particulier</a
                        >
                        <div
                          v-if="activeTabClient === 'particulier'"
                          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
                        ></div>
                      </li>
                      <li
                        @click="setActiveTabClient('professionnel')"
                        :class="getTabClassClient('professionnel')"
          class="mr-1 relative"
                      >
                        <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#"
                          >Professionnel</a
                        >
                        <div
                          v-if="activeTabClient === 'professionnel'"
                          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
                        ></div>
                      </li>
                    </ul>
                    <div class="py-4">
                      <div v-if="activeTabClient === 'particulier'" class="block">
            <!-- Contenu pour le formulaire particulier -->
            <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="mb-4">
              <label for="civilité" class="block text-gray-700 text-sm font-bold mb-2">Civilité</label>
              <input type="text" id="civilité" v-model="clients.civilite" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
           
            <div class="mb-4">
              <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
              <input type="text" id="name" v-model="clients.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="prenom" class="block text-gray-700 text-sm font-bold mb-2">Prenom</label>
              <input type="text" id="prenom" v-model="clients.prenom" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="mb-4">
              <label for="adresse" class="block text-gray-700 text-sm font-bold mb-2">Adresse</label>
              <input type="text" id="adresse" v-model="clients.adresse" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="suite_adresse" class="block text-gray-700 text-sm font-bold mb-2">Suite Adresse</label>
              <input type="text" id="suite_adresse" v-model="clients.suite_adresse" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 text-sm font-bold mb-2">email</label>
              <input type="text" id="email" v-model="clients.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="téléphone" class="block text-gray-700 text-sm font-bold mb-2">Téléphone</label>
              <input type="text" id="téléphone" v-model="clients.téléphone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="pays" class="block text-gray-700 text-sm font-bold mb-2">Pays</label>
              <input type="text" id="pays" v-model="clients.pays" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <!-- Ajoutez d'autres champs pour le formulaire particulier ici -->
          </div>
          <div v-if="activeTabClient === 'professionnel'" class="">
            <!-- Contenu pour le formulaire professionnel -->
            <div class="mb-4">
              <label for="nom_societe" class="block text-gray-700 text-sm font-bold mb-2">Nom de la société</label>
              <input type="text" id="nom_societe" v-model="clients.nom_societe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="siret" class="block text-gray-700 text-sm font-bold mb-2">SIRET</label>
              <input type="text" id="siret" v-model="clients.siret" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="contact" class="block text-gray-700 text-sm font-bold mb-2">Contact</label>
              <input type="text" id="conatct" v-model="clients.contact" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="tva" class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
              <input type="text" id="tva" v-model="clients.tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
           
           
          </div>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enregistrer</button>

      </div>
   
    
      
    </form>
  </div>
    </div>
    </div>
    </div>
    </div>
  </div>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <br/>
        <div class="flex justify-end mb-4">
     
    </div>
        
        

        <br/>
      <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
       
     

        
       
        <!-- Bouton d'action à gauche -->
        <div class="justify-start">
          <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
            <span class="sr-only">Action button</span>
            Action
            <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
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
      
        
    
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
          <tr v-for="clients in paginatedClients" :key="clients._id" class="odd:bg-white cursor-pointer odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 relative group hover:bg-gray-200 dark:hover:bg-gray-700">
            <td class="w-4 p-4">
                <div class="flex items-center">
      <input v-model="selectedClient" :value="clients._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      <label for="checkbox-table-1" class="sr-only">checkbox</label>
    </div>
                </td>
            <td class="px-6 py-4">{{ clients.nom }}</td>
            <td class="px-6 py-4">{{ clients.prenom }}</td>
            <td class="px-6 py-4">{{ clients.email }}</td>
            <td class="px-6 py-4">{{ clients.telephone }}</td>
            <td class="px-6 py-4">{{ clients.adresse }}</td>
            <td class="px-6 py-4">{{ clients.ville }}</td>
            <td class="px-6 py-4">{{ clients.codePostal }}</td>
            <td class="px-6 py-4 flex items-center justify-end space-x-4">
    <a href="#" @click.prevent="editClient(clients._id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-pen"></i></a>
        <a href="#" @click.prevent="deleteClient(clients._id)" class="font-medium text-red-600 dark:text-red-500 hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"><i class="fa-solid fa-trash"></i></a>
      </td>
            </tr>

        </tbody>
        </table>
        </div>
        <div class="pagination-container">
      <Pagination :current-page="currentPage" :total-items="totalItems" :items-per-page="itemsPerPage" @page-changed="changePage" />
    </div>
 
</div>
</template>

<script>
import axios from 'axios'; 

import Pagination from "../global/Pagination.vue";
export default {
    components: {
    Pagination,
  },
  data() {
    return {
      itemsPerPage: 10,
      currentPage: 1,
      editingClientId : null,
      selectedClient: [],
      totalItems: 0,
      activeTabClient: 'particulier',
      modalOpen: false,
      activeTab: '1',
      result : {},
   clients : {
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
      clients: [],
    };
  },
  computed: { 
    paginatedClients() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.clients.slice(start, start + this.itemsPerPage);
    },
   
},
  created(){
 this.clientLoad("");
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
    });},
    getTabClassClient(tab) {
      return this.activeTabClient === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700';
    },
    async deleteClient(clientID) {
  try {
    const [facturesResponse, devisResponse] = await Promise.all([
      axios.get(`/api/facture?clientId=${clientID}`),
      axios.get(`/api/devis?clientId=${clientID}`),
    ]);

    const hasFactures = facturesResponse.data.length > 0;
    const hasDevis = devisResponse.data.length > 0;

    if (hasFactures || hasDevis) {
      // Le client a des factures ou des devis, on ne peut pas le supprimer
      alert("Ce client ne peut pas être supprimé car il a des factures ou des devis associés.");
    } else {
      // Le client n'a ni factures ni devis, on peut procéder à la suppression
      await axios.delete(`/api/clients/${clientID}`);
      this.clientLoad();
    }
  } catch (error) {
    console.error("Erreur lors de la vérification ou la suppression du client :", error);
    alert("Une erreur est survenue lors de la vérification ou la suppression du client. Veuillez réessayer.");
  }
},
  toggleSelectAll(event) {
      if (event.target.checked) {
        this.selectedClient = this.client.map(devis => devis._id);
      } else {
        this.selectedClient = [];
      }
    },
    setActiveTabClient(tab) {
      this.activeTabClient = tab;
      this.clients.type = tab;
    },
    openModal() {
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
      },
      clientLoad() {
         axios.get("http://localhost:8080/api/client/")
           .then(({data}) => {
            this.clients = data;
        this.totalItems = data.length;
           
       });

       },
       remove(clientID) {
    axios.delete(`http://localhost:8080/api/client/${clientID}`)
        .then(response => {
            console.log(response.status);
            if (response.status === 200) {
                this.clientLoad(); 
                const index = this.result.findIndex(c => c._id === clients._id);
                if (index !== -1) {
                    this.result.splice(index, 1); 
                    alert('Client supprimé avec succès');
                } else {
                    alert('Erreur lors de la suppression du client.');
                }
            } else {
                alert('Erreur lors de la suppression du client.');
            }
        })
        .catch(error => {
            console.error("Erreur:", error);
            alert("Une erreur est survenue lors de la suppression du client. Veuillez réessayer.");
        });
}, changePage(page) {
      this.currentPage = page;
    },

       edit(clients)
           {
            this.clients = clients;
           
           },
       
          saveData() {
            if (this.editingClientId) {
      axios
        .put(`http://localhost:8080/api/client/${this.editingClientId}`, this.clients)
        .then(async (response) => {
            const { data } = response;
           
           
            this.clientLoad();
            this.clients = {};
            this.modalOpen = false;
        })
        .catch((error) => {
          console.error("Erreur:", error);
          alert("Une erreur est survenue lors de la mise à jour du client. Veuillez réessayer.");
        });
    
    } else {

  axios.post("http://localhost:8080/api/client/add", this.clients)
  .then(async (response) => {
            const { data } = response;
           
           
            this.clientLoad();
            this.clients = {};
           this.closeModal;

          

           
          })       
  .catch(error => {
      console.error("Error:", error);
      alert("Une erreur est survenue lors de l'ajout du client. Veuillez réessayer.");
    });
    
  }
}
  }
  
  
  

};
</script>

<style scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>