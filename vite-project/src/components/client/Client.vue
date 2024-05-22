<template>
  <div>
        <br/>
     <div class="flex justify-end">
      <button @click="openModal" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Ajouter Client</button>
    </div>
      <!-- Modal -->
      <div >
      <div v-if="modalOpen"  class=" container mx-auto p-4 shadow-lg p-10 rounded">
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
          <li  @click="activeTab = '1'"
              :class="[activeTab === '1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="-mb-px mr-1">
            <a  class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 font-semibold" href="#">Particulier</a>
          </li>
          <li @click="activeTab = '2'"
              :class="[activeTab === '2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="mr-1">
            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Professionnel</a>
          </li>
        </ul>
        <div class="py-4"> 
          <div v-if="activeTab === '1'" class="block">
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
          <div v-if="activeTab === '2'" class="">
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
        
      </div>
      
      
        
    
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Societé
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Nom
                </th>
                <th scope="col" class="px-6 py-3">
                Telephone
                </th>
                <th scope="col" class="px-6 py-3">
                       Ville
                </th>
                <th scope="col" class="px-6 py-3">
                    mail
                </th>
                <th scope="col" class="px-6 py-3">
                    Active
                  </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
             <tr v-for="clients in result" :key="clients._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.nom_societe }}</td>
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.name }}</td>
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.téléphone }}</td>
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.pays }}</td>
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.email}}</td>
                 
                 <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{ clients.tva }}</td>
                 
                 <td>
            <button type="button"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  @click="edit(clients)">Edit</button>
            <button type="button"  class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="remove(clients._id)"><i class="fa-duotone fa-trash"></i></button>
          </td>
            </tr>

        </tbody>
        </table>
        </div>
 
</div>
</template>

<script>
import axios from 'axios'; 
import { mapGetters } from 'vuex';


export default {
  name: "client",
  components: {
    

  },
  computed:{
    ...mapGetters(['getToken'])
  },
  data() {
    return {
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
    
    };
  },
  created(){
 this.clientLoad("");
  },
  
  methods: {
    
    openModal() {
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
      },
      clientLoad() {
        const storedState = localStorage.getItem('store');
  let authToken = '';

  if (storedState) {
    try {
      const state = JSON.parse(storedState);
      authToken = state.token;
    } catch (e) {
      console.error("Failed to parse stored state:", e);
    }
  }

         axios.get("http://localhost:8080/api/clients/", this.form, {
        headers: {
          'Authorization': `Bearer ${authtoken}`
        }
      })
           .then(({data}) => {
            console.log(data);
            this.result = data;
           
       });

       },
       remove(clientID) {
        const storedState = localStorage.getItem('store');
  let authToken = '';

  if (storedState) {
    try {
      const state = JSON.parse(storedState);
      authToken = state.token;
    } catch (e) {
      console.error("Failed to parse stored state:", e);
    }
  }
    
    axios.delete(`http://localhost:8080/api/clients/${clientID}`, this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
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
},

       edit(clients)
           {
            this.clients = clients;
           
           },
       saveData() {
  console.log(this.clients);
  const storedState = localStorage.getItem('store');
  let authToken = '';

  if (storedState) {
    try {
      const state = JSON.parse(storedState);
      authToken = state.token;
    } catch (e) {
      console.error("Failed to parse stored state:", e);
    }
  }
  console.log("auth token", authToken);
  console.log(this.getToken);

  axios.post("http://localhost:8080/api/clients/add",  this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      },this.clients )
         .catch(error => {
      console.error("Error:", error);
      alert("Une erreur est survenue lors de l'ajout du client. Veuillez réessayer.");
    });
    
  },
  

  mounted() {
    
  },

  }
  

};
</script>
