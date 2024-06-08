<template>
     <div class="modal-content">
        <form  @submit.prevent="saveData">
      <div class="mb-8">
        <ul class="flex border-b">
          <li @click="activeTab = '1'"
              :class="[activeTab === '1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="-mb-px mr-1">
            <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 font-semibold" href="#">Produit</a>
          </li>
          <li @click="activeTab = '2'"
              :class="[activeTab === '2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="mr-1">
            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Traveaux</a>
          </li>
          <li @click="activeTab = '3'"
              :class="[activeTab === '3' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="mr-1">
            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">MainOeuvre</a>
          </li>
        </ul>
        <div class="py-4"> 
          <div v-if="activeTab === '1'" class="block">
            <!-- Contenu pour le formulaire particulier -->
            <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="mb-4">
              <label for="article" class="block text-gray-700 text-sm font-bold mb-2">Nom article</label>
              <input type="text" v-model="produits.nom_article" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
           
            <div class="mb-4">
              <label for="reference" class="block text-gray-700 text-sm font-bold mb-2">Reference</label>
              <input type="text" v-model="produits.reference"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label for="categorie" class="block text-gray-700 text-sm font-bold mb-2">Categorie</label>
              <input type="text" v-model="produits.categorie"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="mb-4">
              <label  for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <input type="text" v-model="produits.description"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
              <label for="type_unite"  class="block text-gray-700 text-sm font-bold mb-2">Type Unité*</label>
              <input type="text" v-model="produits.type_unité"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <!-- Ajoutez d'autres champs pour le formulaire particulier ici -->
          </div>
          <div v-if="activeTab === '2'" class="">
            <!-- Contenu pour le formulaire professionnel -->
            <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div class="mb-4">
              <label   class="block text-gray-700 text-sm font-bold mb-2">Nom article</label>
              <input type="text" id="nom_article" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
           
            <div class="mb-4">
              <label  class="block text-gray-700 text-sm font-bold mb-2">Reference</label>
              <input type="text" id="reference"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Ctegorie</label>
              <input type="text" id="categorie"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
              <input type="text" id="categorie"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label  class="block text-gray-700 text-sm font-bold mb-2">Prix ACHAT HT</label>
              <input type="text" id="prix"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
            <div class="mb-4">
              <label  class="block text-gray-700 text-sm font-bold mb-2">prix unitaire*</label>
              <input type="text" id="prix_unitaire" v-model="prix_unitaire" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">TVA</label>
              <input type="text" id="tva" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
            <div class="mb-4">
              <label  class="block text-gray-700 text-sm font-bold mb-2">Type Unité*</label>
              <input type="text" id="type_unité"  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </div>
          </div>
          </div>
          <div class="flex items-center p-4 md:p-5 border-t ...">
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Enregistrer</button>
            <button @click="declineTerms" type="button" class="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Annuler</button>
          </div>
      </div>
      
    </form>
    <div class="flex justify-end">
        <button @click="closeModal" class="mr-2 px-4 py-2 bg-gray-300 rounded">Annuler</button>
        <button @click="saveProduit" class="px-4 py-2 bg-blue-600 text-white rounded">Enregistrer</button>
      </div>
        
        <!-- Bouton pour fermer le modèle -->
        </div>
</template>

<script>
export default {
  props: ['produitId'],
    components :{name: 'Produit'},
    
    data(){
    return {
    
      produit: null,

        produits : { 
          nom_article :'',
        reference :'',
        categorie :'',
        description :'',
        prix :'',
        prix_unitaire:'',
        tva :'' ,
        type_unité :'',

        },

        }
    },closeModal() {
      this.$emit('close');
    }

}
</script>

<style>

</style>