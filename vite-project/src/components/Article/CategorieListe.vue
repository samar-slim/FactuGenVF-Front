<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="bg-gray-100 p-2 mb-8 rounded shadow">
        <div class="bg-white p-2 rounded shadow">
          <div class="flex justify-between items-center mb-4">
            <div class="font-bold">
              <h3>Liste des catégories</h3>
            </div>
            <button @click="openModal" class="font-bold border bg-blue-800 text-white px-1 py-1 rounded-lg">
              <i class="fa-solid fa-plus" style="color: #ffffff;"></i> Nouvelle Catégorie
            </button>
          </div>
          <div v-if="modalOpen" class="container mx-auto p-4 shadow-lg rounded">
            <div class="relative bg-white rounded-lg shadow">
              <!-- Modal Header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 class="text-xl font-semibold text-gray-900">{{ editingClientId ? "Modifier Client" : "Nouveau Client" }}</h3>
                <button @click="closeModal" type="button"><i class="fa-solid fa-xmark"></i></button>
              </div>
              <div class="container mx-auto p-4 shadow-lg rounded">
                <div class="p-6 space-y-6">
                  <div>
                    <label for="categorie_nom" class="block mb-2 text-sm font-medium text-gray-900">Nom de la catégorie</label>
                    <input
                      type="text"
                      id="nom_categorie"
                      v-model="categorie.nom"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Saisir le nom de la catégorie"
                    />
                  </div>
                  
                  <div>
                    <label for="libelle_categorie" class="block mb-2 text-sm font-medium text-gray-900">Libellé de la catégorie</label>
                    <input
                      type="text"
                      id="libelle_categorie"
                      v-model="categorie.libelle"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Saisir le libellé de la catégorie"
                    />
                  </div>
                </div>
              </div>
              <div class="p-4 md:p-5 border-t">
                <button
                  @click="createCategorie"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="selectedcategories.length > 0" class="flex space-x-2 justify-between mb-1">
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
  
        <table class="w-full text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all" type="checkbox" @change="toggleSelectAll" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-all" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-2 py-2 w-20">Produit</th>
              <th scope="col" class="px-2 py-2 w-24">Nom Produit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="categorie in paginatedcategories" :key="categorie._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-6">
                <div class="flex items-center">
                  <input v-model="selectedcategories" :value="categorie._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                  <label for="checkbox-table-1" class="sr-only">checkbox</label>
                </div>
              </td>
              
              <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ categorie?.nom }}
              </th>
              <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ categorie?.libelle }}
              </th>
              
              <td class="px-6 py-4">
                <a href="#" @click.prevent="editProduit(categorie._id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
  
        <Produit v-if="showModal" @close="showModal = false" :id="selectedProduitId"/>
  
        <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing <span class="font-semibold text-gray-900 dark:text-white">{{ startItem }}-{{ endItem }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span>
          </span>
          <div class="flex justify-center">
            <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button @click="prevPage" :disabled="currentPage === 1" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <i class="pi pi-chevron-left"></i>
                </button>
              </li>
              <li v-for="page in totalPages" :key="page">
                <button @click="goToPage(page)" :class="['flex items-center justify-center px-3 h-8 leading-tight', currentPage === page ? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white']">
                  {{ page }}
                </button>
              </li>
              <li>
                <button @click="nextPage" :disabled="currentPage === totalPages" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                  <i class="pi pi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import Produit from '../produit/Produit.vue';
  
  export default {
    components: { Produit },
    data() {
      return {
        categories: [],
        selectedcategories: [],
        currentPage: 1,
        itemsPerPage: 10,
        showModal: false,
        selectedProduitId: null,
        modalOpen: false,
        categorie: {
          nom: '',
          libelle: ''
        }
      };
    },
    created() {
      this.categorieLoad();
    },
    computed: {
      paginatedcategories() {
        const start = (this.currentPage - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.categories.slice(start, end);
      },
      totalItems() {
        return this.categories.length;
      },
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      startItem() {
        return (this.currentPage - 1) * this.itemsPerPage + 1;
      },
      endItem() {
        return Math.min(this.startItem + this.itemsPerPage - 1, this.totalItems);
      }
    },
    methods: {
      sendSelected() {
        console.log('Envoyer les catégories sélectionnées:', this.selectedcategories);
        // Logique pour envoyer les catégories sélectionnées
      },
      editCatgegorie(id) {
        this.selectedcategories = id;
        this.showModal = true;
      },
      deleteSelected() {
        const deleteRequests = this.selectedcategories.map(id => 
          axios.delete(`http://localhost:8080/api/categories/${id}`)
        );
        Promise.all(deleteRequests)
          .then(() => {
            this.categorieLoad();
            this.selectedcategories = [];
          })
          .catch(error => {
            console.error('Erreur lors de la suppression des catégories', error);
          });
      },
      toggleSelectAll(event) {
        if (event.target.checked) {
          this.selectedcategories = this.categories.map(categorie => categorie._id);
        } else {
          this.selectedcategories = [];
        }
      },
      createCategorie() {
        axios.post('/api/categories/add', this.categorie)
          .then(response => {
            const { data } = response;
            try {
              this.categorieLoad(); 
              this.categorie = { nom: '', libelle: '' };
              this.closeModal(); 
            } catch (err) {
              console.error('Erreur lors de la création de la catégorie :', error);
            }
          })
          .catch(error => {
            console.error('Erreur lors de la création de la catégorie :', error);
          });
      },
      categorieLoad() {
        axios.get('http://localhost:8080/api/categories')
          .then(({ data }) => {
            this.categories = data;
          })
          .catch(error => {
            console.error("Erreur lors de la récupération des données:", error);
          });
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
      openModal() {
        this.modalOpen = true;
      },
      closeModal() {
        this.modalOpen = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez ici les styles supplémentaires si nécessaire */
  </style>
  