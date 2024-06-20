<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="bg-gray-100 p-2 mb-8 rounded shadow">
        <div class="bg-white p-2 rounded shadow">
          <div class="flex justify-between items-center mb-4">
            <div class="font-bold">
              <h3>Liste des Traveaux</h3>
            </div>
            <button @click="openModal" class="font-bold border bg-blue-800 text-white px-1 py-1 rounded-lg">
              <i class="fa-solid fa-plus" style="color: #ffffff;"></i> Nouveau 
            </button>
            <div v-if="isOpenn"   class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
    
    <div class="relative bg-white rounded-lg shadow ...">
        
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
          <h3 class="text-xl font-semibold text-gray-900 ">{{ editingProduitId ? 'Modifier Article' : 'Nouveau Article' }}</h3>
          <button @click="closeChoisir1" type="button" ><i class="fa-solid fa-xmark"></i></button>
        
        </div>
        <div class="modal-content">
<form @submit.prevent="saveData">
  <div class="mb-8">
    <ul class="flex border-b">
      <li
        @click="setActiveTab('produit')"
        :class="getTabClass('produit')"
        class="mr-1 relative"
      >
        <a
          class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold"
          href="#"
          >Produit</a
        >
        <div
          v-if="activeTab === 'produit'"
          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
        ></div>
      </li>
      <li
        @click="setActiveTab('traveaux')"
        :class="getTabClass('traveaux')"
        class="mr-1 relative"
      >
        <a
          class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold"
          href="#"
          >Travaux</a
        >
        <div
          v-if="activeTab === 'traveaux'"
          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
        ></div>
      </li>
      <li
        @click="setActiveTab('mainoeuvre')"
        :class="getTabClass('mainoeuvre')"
        class="mr-1 relative"
      >
        <a
          class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold"
          href="#"
          >MainOeuvre</a
        >
        <div
          v-if="activeTab === 'mainoeuvre'"
          class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
        ></div>
      </li>
    </ul>
    <div class="py-4">
      <div v-if="activeTab === 'produit'" class="block">
       
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="mb-4">
            <label for="nom_article" class="block text-gray-700 text-sm font-bold mb-2">Nom Produit</label>
            <input type="text" v-model="produits.nom_article" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>  
          <div>
         
         <label class="block text-sm font-medium text-gray-700 mb-2">Importez votre logo</label>
         <input type="file" accept="image/*" @change="handleImageProduitUpload" class="form-input w-full border border-gray-300 rounded-md px-3 py-2">
       </div >
         
          <div class="mb-4">
            <label for="reference" class="block text-gray-700 text-sm font-bold mb-2">Reference</label>
            <input type="text" v-model="produits.reference"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="p-5">
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Catégorie</p>
<select v-model="selectedCategorieId" @change="handleCategorieSelection" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option class="bg-blue-700 border hover hover-red" value="nouvelle">Nouveau Categorie</option>
  <option selected value="">Selectionner une catégorie</option>
  <option class="text-gray-900" v-for="categorie in categories" :value="categorie._id" :key="categorie._id">{{ categorie.categorie_nom }}</option>
  
</select>
</div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-4">
            <label  for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input type=" text" v-model="produits.description"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label for="prix" class="block text-gray-700 text-sm font-bold mb-2">Prix ACHAT HT</label>
            <input type="text" v-model="produits.prix"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
        </div>
          <div class="mb-4">
            <label for="prix_unitaire"  class="block text-gray-700 text-sm font-bold mb-2">prix unitaire*</label>
            <input type="text" id="prix_unitaire" v-model="produits.prix_unitaire" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label  for="tva" class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
            <input type="text" v-model="produits.tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label  for="type_unite"  class="block text-gray-700 text-sm font-bold mb-2">Type Unité*</label>
            <input type="text" v-model="produits.type_unité"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <!-- Ajoutez d'autres champs pour le formulaire particulier ici -->
        </div>
        <div v-else-if="activeTab === 'traveaux'" class="block">
       
       <div class="grid gap-6 mb-6 md:grid-cols-3">
        
         <div class="mb-4">
         <label for="nom_article" class="block text-gray-700 text-sm font-bold mb-2">Nom article</label>
         <input type="text" v-model="produits.nom_article" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>  
      
      
       <div class="mb-4">
         <label for="reference" class="block text-gray-700 text-sm font-bold mb-2">Reference</label>
         <input type="text" v-model="produits.reference"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
       
       </div>
       <div class="grid gap-6 mb-6 md:grid-cols-2">
       <div class="mb-4">
         <label  for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
         <input type=" text" v-model="produits.description"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
       <div class="mb-4">
         <label for="prix" class="block text-gray-700 text-sm font-bold mb-2">Prix ACHAT HT</label>
         <input type="text" v-model="produits.prix"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
     </div>
       <div class="mb-4">
         <label for="prix_unitaire"  class="block text-gray-700 text-sm font-bold mb-2">prix unitaire*</label>
         <input type="text" id="prix_unitaire" v-model="produits.prix_unitaire" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
       <div class="mb-4">
         <label  for="tva" class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
         <input type="text" v-model="produits.tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
       <div class="mb-4">
         <label  for="type_unite"  class="block text-gray-700 text-sm font-bold mb-2">Type Unité*</label>
         <input type="text" v-model="produits.type_unité"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
       </div>
       
     </div>
        <div v-else-if="activeTab === 'mainoeuvre'" class="block">
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="mb-4">
            <label for="nom_article" class="block text-gray-700 text-sm font-bold mb-2">Nom article</label>
            <input type="text" v-model="produits.nom_article" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>  
         
         
          <div class="mb-4">
            <label for="reference" class="block text-gray-700 text-sm font-bold mb-2">Reference</label>
            <input type="text" v-model="produits.reference"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div class="mb-4">
            <label  for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <input type=" text" v-model="produits.description"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label for="prix" class="block text-gray-700 text-sm font-bold mb-2">Prix ACHAT HT</label>
            <input type="text" v-model="produits.prix"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
        </div>
          <div class="mb-4">
            <label for="prix_unitaire"  class="block text-gray-700 text-sm font-bold mb-2">prix unitaire*</label>
            <input type="text" id="prix_unitaire" v-model="produits.prix_unitaire" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
          <div class="mb-4">
            <label  for="tva" class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
            <input type="text" v-model="produits.tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
          </div>
          <div class="mb-4">
            <label  for="type_unite"  class="block text-gray-700 text-sm font-bold mb-2">Type Unité*</label>
            <input type="text" v-model="produits.type_unité"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          </div>
         
        
     </div>
   </div>
 </div>
 <div class="flex items-center p-4 md:p-5 border-t ...">
   <button
     type="submit"
     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
   >
     Enregistrer
   </button>
   <button
     @click="declineTerms1"
     type="button"
     class="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
   >
     Annuler
   </button>
 </div>
</form>
<div
  v-if="modalOpenCategorie"
  class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs"
>
  <div class="relative bg-white rounded-lg shadow">
    <div class="p-4 md:p-5 border-b rounded-t">
      <h3 class="text-xl font-semibold text-gray-900">Nouvelle Catégorie</h3>
      <button
        @click="closeModalCategorie"
        type="button"
        class="text-gray-400 hover:text-gray-500 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Fermer</span>
      </button>
    </div>
    <div class="p-6 space-y-6">
      <div>
        <label
          for="categorie_nom"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Nom de la catégorie</label
        >
        <input
          type="text"
          id="nom_categorie"
          v-model="categorie.categorie_nom"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Saisir le nom de la catégorie"
        />
      </div>
      <div>
        <label
          for="Libéllé"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Libellé de la catégorie</label
        >
        <input
          type="text"
          id="libelle_categorie"
          v-model="categorie.Libéllé"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Saisir le libellé de la catégorie"
        />
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

    </div>
  </div>
          </div>
        </div>
      </div>
  
      <div class="bg-white p-6 rounded">
        <div class="flex items-center">
          <!-- Champs de saisie prenant 1/3 de la largeur -->
          <div class="w-1/3 flex space-x-2">
            <input 
              type="text" 
              class="w-full p-2 bg-gray-50 border rounded" 
              placeholder="Libéllé" 
            />
            <input 
              type="text" 
              class="w-full p-2 bg-gray-50 border rounded" 
              placeholder="ref" 
            />
           
          </div>
          <!-- Champ de recherche prenant 2/3 de la largeur -->
          
        </div>
      </div>
  
      <div v-if="selectedProduits.length > 0" class="flex space-x-2 justify-between mb-1">
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
        <th scope="col" class="p-2 w-4">
          <!-- Checkbox -->
        </th>
        <th scope="col" class="px-2 py-2 w-20"> <!-- Réduit la largeur -->
          Libéllé
        </th>
        <th scope="col" class="px-2 py-2 w-24"> <!-- Réduit la largeur -->
          Description
        </th>
        <th scope="col" class="px-2 py-2 w-16"> <!-- Réduit la largeur -->
          Référence
        </th>
        <th scope="col" class="px-2 py-2 w-12"> 
          Prix Achat
        </th>
        <th scope="col" class="px-2 py-2 w-12"> 
          Prix Unit.
        </th>
        <th scope="col" class="px-2 py-2 w-8"> 
          TVA
        </th>
        <th scope="col" class="px-2 py-2 w-8"> 
          Type Unité
        </th>
        <th scope="col" class="px-2 py-2 w-12">
          Action
        </th>
      </tr>
    </thead>
        <tbody>
          <tr v-for="produit in paginatedProduits" :key="produit._id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-6">
              <div class="flex items-center">
                <input v-model="selectedProduits" :value="produit._id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox-table-1" class="sr-only">checkbox</label>
              </div>
            </td>
            <th scope="row" class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <img :src="produit?.imageUrl" alt="Product Image" class="w-16 h-16 object-cover"/>
            </th>
            <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ produit?.nom_article }}
            </th>
            <td class="px-6 py-2">
              {{ produit?.reference }}
            </td>
            <td class="px-6 py-2">
              {{ produit?.categorie }}
            </td>
            <td class="px-6 py-4">
              {{ produit?.description }}
            </td>
            <td class="px-6 py-4">
              {{ produit?.prix }}
            </td>
            <td class="px-6 py-4">
              {{ produit?.tva }}
            </td>
           
            <td class="px-6 py-4">
    <a @click.prevent="editProduit(produit._id); openModal()" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
  </td>
          </tr>
        </tbody>
      </table>
  
      <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing <span class="font-semibold text-gray-900 dark:text-white">{{ startItem }}-{{ endItem }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span>
        </span>
        <div class="flex justify-center">
        <ul class="inline-flex -space-x-px  rtl:space-x-reverse text-sm h-8">
        
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
  </template>
  
  <script>
  import axios from 'axios';
  import { useToast } from 'vue-toastification';
  
  export default {
    data() {
      return {
        categories: [],
        editingProduitId : null,
        activeTab: 'article',
        modalOpenCategorie: false,
        isOpenn:false,
        produits: [],
        selectedProduits: [],
       currentPage: 1,
    itemsPerPage: 10,
        selectedCategorieId: null,
        categorie: {
      
      
    },
      };
    },
    created() {
      this.produitLoad();
    },
    computed: {
      paginatedProduits() {
  if (!Array.isArray(this.produits)) {
    return [];
  }
  const start = Math.max(0, (this.currentPage - 1) * this.itemsPerPage);
  const end = Math.min(this.produits.length, start + this.itemsPerPage);
  return this.produits.slice(start, end);
},
      totalItems() {
        return this.produits.length;
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
      editProduit(produitId) {
  axios.get(`http://localhost:8080/api/produits/${produitId}`)
    .then(response => {
      this.produits = response.data;
      this.editingProduitId = produitId;
      this.openModal();
    })
    .catch(error => {
      console.error("Erreur:", error);
      alert("Une erreur est survenue lors de la récupération des détails du produit. Veuillez réessayer.");
    });
},
      produitLoad() {
       axios.get("http://localhost:8080/api/produits/")
       .then(({data}) => {
         
          this.resultProduit = data;
         
     });


     },
     categorieload() {
       axios.get("http://localhost:8080/api/categories/")
       .then(({data}) => {
         
          this.categories = data;
         
     });


     },
     created(){

this.produitLoad("");

this.categorieload("");
},
      setActiveTab(tab) {
    this.activeTab = tab;
    this.produits.type = tab;
  },
  async saveData() {
  const toast = useToast();
  try {
    if (this.editingProduitId) {
      // Mise à jour du produit existant
      await axios.put(`http://localhost:8080/api/produits/${this.editingProduitId}`, this.produits);
      toast.success("Le produit a été mis à jour avec succès.");
      this.produitLoad(); // Recharger les produits après l'ajout
      this.produits = {}; // Réinitialiser le formulaire
      this.isOpenn = false; // Fermer la modal
    } else {
      // Vérifiez si tous les champs requis sont remplis
      if (!this.produits.nom_article || !this.produits.reference || !this.produits.prix_unitaire || !this.produits.type_unité) {
        toast.error("Veuillez remplir tous les champs obligatoires.");
        return;
      }

      // Assignez l'ID de la catégorie sélectionnée à this.produits.categorieId
      this.produits.categorieId = this.selectedCategorieId;

      // Vérifiez les données avant l'envoi
      console.log("Données à envoyer :", this.produits);
      await axios.post("http://localhost:8080/api/produits/add", this.produits);
      
      toast.success("Le produit a été ajouté avec succès.");
      this.produitLoad();
      this.produits = {};
      this.editingProduitId = null;
      this.isOpenn = false; // Fermer la modal
    }
  } catch (error) {
    console.error("Erreur:", error);
    if (error.response) {
      console.log("Détails de l'erreur :", error.response.data);
      toast.error("Erreur lors de l'envoi des données. Veuillez vérifier les informations saisies.");
    } else if (error.request) {
      console.log(error.request);
      toast.error("Aucune réponse du serveur. Veuillez réessayer plus tard.");
    } else {
      console.log('Erreur', error.message);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  }
},

closeChoisir1() {
    this.isOpenn = false;
    this.editingProduitId = null;
    this.produits = {}; // Réinitialise l'objet produit
  },
      sendSelected() {
        console.log('Envoyer les produits sélectionnés:', this.selectedProduits);
        // Logique pour envoyer les produits sélectionnés
      },
      editSelected() {
        console.log('Éditer les produits sélectionnés:', this.selectedProduits);
        // Logique pour éditer les produits sélectionnés
      },
      deleteSelected() {
        const deleteRequests = this.selectedProduits.map(id => 
          axios.delete(`http://localhost:8080/api/produits/${id}`)
        );
        
        Promise.all(deleteRequests)
          .then(() => {
            this.produitLoad();
            this.selectedProduits = [];
          })
          .catch(error => {
            console.error('Erreur lors de la suppression des produits', error);
          });
      },
      openModal() {
        this.isOpenn = true;
      },
      toggleSelectAll(event) {
        if (event.target.checked) {
          this.selectedProduits = this.produits.map(produit => produit._id);
        } else {
          this.selectedProduits = [];
        }
      },
      produitLoad() {
    axios.get('http://localhost:8080/api/produits/type/traveaux')
      .then(({ data }) => {
        this.produits = data;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  },
  handleCategorieSelection( event) {
        const selectedCategorieId = event.target.value;
        console.log('sele',event.target.value )

  if (this.selectedCategorieId === 'nouvelle') {
    this.modalOpenCategorie = true;

  }
  
  this.$emit('categorieSelected', selectedCategorieId);
},
      fetchCategories() {
    
    axios.get('/api/categories/')
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories :', error);
      });
  },
  createCategorie() {
    
    axios.post('/api/categories/add', this.categorie)
    .then(response => {
    const { data } = response;

    
    try {
      
        
      
        this.categorieload(); 
        this.categories = {};
        
        this.closeModalCategorie(); 
        
        
     
    }
      catch (err) {
        console.error('Erreur lors de la création de la catégorie :', error);
      }})
    },
      setActiveTab(tab) {
    this.activeTab = tab;
    this.produits.type = tab;
  },
  getTabClass(tab) {
    return this.activeTab === tab ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700';
  },
  
  closeModalCategorie() {
      this.modalOpenCategorie = false;
    },
    openModalCategorie() {
      this.modalOpenCategorie = true;
      
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
      }
    },
    mounted(){
      axios.get("http://localhost:8080/api/categories/")
  .then(({data}) => {
    console.log(data); 
    this.categories = data;
     // Store the received data in the 'client' variable
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    // Handle errors if any
  });
      
  axios.get("http://localhost:8080/api/produits/")
  .then(({data}) => {
    console.log(data); 
    this.produit = data;
     // Store the received data in the 'client' variable
  })
  .catch(error => {
    console.error("Error fetching data:", error);
    // Handle errors if any
  });
    },watch: {
  produits: {
    handler(newValue) {
      console.log('produits changed:', newValue);
    },
    deep: true
  }
}

  };
  </script>
  
  <style scoped>
  /* Ajoutez ici les styles supplémentaires si nécessaire */
  </style>
  