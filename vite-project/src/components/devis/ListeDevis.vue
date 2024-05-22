<!-- devis.vue -->
<template>
    <div>
        <br/>
     <div class="flex justify-end">
      <button @click="openModal" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Ajouter Devis</button>
    </div>
      <!-- Modal -->
      <div >
      <div v-if="modalOpen"  class=" container mx-auto p-4 shadow-lg p-10 rounded">
        <!-- Contenu de la modal -->
        <div class="relative bg-white rounded-lg shadow ...">
          <!-- En-tête de la modal -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
            <h3 class="text-xl font-semibold text-gray-900 ...">Nouveau Devis</h3>
            <button @click="closeModal" type="button" ><i class="fa-solid fa-xmark"></i></button>
          </div>
          <!-- Corps de la modal -->
          <div class="flex justify-end">

<button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
 <i class="pi pi-trash"></i>
</button>
<button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-blue border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
 <i class="pi pi-save"></i> Enregistrer à 04:14
</button>
<button type="button" class="px-4 py-2 text-sm font-medium  bg-blue-800 text-gray-900 bg-blue border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
  Finaliser <i class="pi pi-send"></i>
</button>

</div>
<div>  
  
</div>
       


      <!-- INFORMATIONS -->
      <div id="pdf">
      <div class="bg-white rounded shadow p-6 mb-8 " >
        <h2 class="text-xl font-semibold mb-6">INFORMATIONS</h2>

        <!-- Form -->
        <form  @submit.prevent="saveDataDevis"  >
          <div class="grid grid-cols-2 gap-5">
             <div class="w-1/2">
              <div>
           
              <label class="block text-sm font-medium text-gray-700 mb-2">Importez votre logo</label>
              <input type="file" accept="image/*" class="form-input w-full border border-gray-300 rounded-md px-3 py-2">
            </div>
             
            
            <div >
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
                <input type="text" v-model="devis.nom_entreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Nom de l'entreprise">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Numéro</label>
                <input type="text" v-model="devis.num" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Numéro">
              </div>
              <div class="grid grid-cols-2 gap-5">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
                <input type="text" v-model="devis.code_postal" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Code postal">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ville</label>
                <input type="text" v-model="devis.ville" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Ville">
              </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                <input type="email" v-model="devis.email" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="E-mail">
              </div>
              <div> 
                <label class="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
                <input type="tel" v-model="devis.num_tel" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Numéro de téléphone">
              </div>
              

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">SIRET Numéro</label>
                <input type="text" v-model="devis.num_siret" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="SIRET Numéro">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">N°TVA</label>
                <input type="text" v-model="devis.num_tva" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="N°TVA">
            </div>
          </div>




            <br/>
            <br/>
            <div class="grid grid-cols-2 gap-5">   
                   
<div class="   col-span-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  
  <div class="p-5">
      
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Client</p>
<select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>selectionnée un client</option>

</select>
<div>
  <div class="flex justify-end">  
<button  @click="openModal1" class="bg-blue-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"><i class="pi pi-plus"></i></button>
  </div>  <!-- Modal -->

   <div >
      <div v-if="modalOpen1"  class=" container mx-auto p-4 shadow-lg p-10 rounded">
        <!-- Contenu de la modal -->
        <div class="relative bg-white rounded-lg shadow ...">
          <!-- En-tête de la modal -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
            <h3 class="text-xl font-semibold text-gray-900 ...">Nouveau Client</h3>
            <button @click="closeModal1" type="button" ><i class="fa-solid fa-xmark"></i></button>
          </div>
          <!-- Corps de la modal -->
          <div class="flex justify-end">
  <div class="container mx-auto p-4 shadow-lg p-10 rounded">
    <div class="flex justify-center items-center h-screen">
    <form @submit.prevent="saveData2">
      <div class="mb-8">
        <ul class="flex border-b">
          <li  @click="activeTab1 = '1'"
              :class="[activeTab1 === '1' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="-mb-px mr-1">
            <a  class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-500 font-semibold" href="#">Particulier</a>
          </li>
          <li @click="activeTab1 = '2'"
              :class="[activeTab1 === '2' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
              class="mr-1">
            <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Professionnel</a>
          </li>
        </ul>
        <div class="py-4"> 
          <div v-if="activeTab1 === '1'" class="block">
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
          <div v-if="activeTab1 === '2'" class="">
            <!-- Contenu pour le formulaire professionnel -->
            <div class="mb-4">
              <label for="societe" class="block text-gray-700 text-sm font-bold mb-2">Nom de la société</label>
              <input type="text" id="societe" v-model="clients.nom_societe" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

      </div>
   
    
      
    </form>
  </div>
    </div>
    </div>
    </div>
    </div>
  </div>
</div>


</div> 
</div>
</div>
<br/>



          
      </div>
          </div>
          
        </form>
        
      </div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-blue-700 white:text-white">
          <tr>
              <th scope="col" class="px-1 py-3">
                
              </th>
              <th scope="col" class="px-5 py-3">
                Ref
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
              <th scope="col" class="px-6 py-3">
                  Qté
              </th>
              <th scope="col" class="px-6 py-3">
                  Unité(u)
              </th>
              <th scope="col" class="px-6 py-3">
                  P.U HT
              </th>
              <th scope="col" class="px-6 py-3">
                  Total(ht)
              </th>
              <th scope="col" class="px-6 py-3">
                  Remise
              </th>
              <th scope="col" class="px-6 py-3">
                   Avec Remise
              </th>
              <th scope="col" class="px-6 py-3">
                  TVA
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <div> 
              <td class=" justify-center ">  

  <button @click="openChoisir"  class="bg-blue-800 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"><i class="pi pi-plus"></i></button>
                </td>

              
    <!-- Modèle à afficher -->
    <div v-if="isOpen" class="  container mx-auto p-4 shadow-lg p-10 rounded">
      <!-- Contenu du modèle -->
      <div class="relative bg-white rounded-lg shadow ...">
          <!-- En-tête de la modal -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
            <h3 class="text-xl font-semibold text-gray-900 ">Nouveau Produit</h3>
            <button @click="closeChoisir" type="button" ><i class="fa-solid fa-xmark"></i></button>
          
          </div>
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
        
        <!-- Bouton pour fermer le modèle -->
        </div>
      </div>
    </div>
  </div>
              <td class="px-1 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-1 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <input type="text" id="description" class="bg-gray-300  border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-5 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 
              </td>
              <td class="px-6 py-4">
                  <div class="flex items-center">
                      <button class="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span class="sr-only">Quantity button</span>
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                          </svg>
                      </button>
                      <div>
                          <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
                      </div>
                      <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span class="sr-only">Quantity button</span>
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                          </svg>
                      </button>
                  </div>
              </td>
              <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
              <td class="px-6 py-4">
                  <input type="text" id="description" class="bg-gray-300 w- border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-50 py-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" /> 

              </td>
          </tr>
          
      </tbody>
     
  </table>
  <br/>
  <div class="justify-center">
  <button class="inline-flex items-center justify-center h-10 w-900 p-5 ms-3 text-sm font-medium text-gray-900 bg-white border border-gray-300  focus:outline-none hover:bg-blue-800 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button"> <i class="pi pi-plus">  </i>  Ajouter ligne</button>
</div>
  <br/>
</div>
<br/>
<br/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div>
<label class=" block text-sm font-medium text-gray-700 mb-2">Remarque</label>
<input type="text" class=" w-2 form-input w-full border border-gray-300 rounded-md px-1/2 py-2" >
              </div>
              <div class=" w-2/5 col-span-3 md:col-span">
              <label class="block text-sm font-medium text-gray-700 mb-2">Condition Reglements</label>
              <textarea class="form-textarea w-full border border-gray-300 rounded-md px-1/2 py-2" rows="3" ></textarea>
            </div>
            <div >
              <label class="block text-sm font-medium text-gray-700 mb-2">Moyens de paiment</label>
              <select class="form-textarea w-full border border-gray-300 rounded-md px-1/2 py-2" rows="3" ></select>
            </div>
            <br/>
            <div class=" col-span-1">
                          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3 bg-blue-800 dark:bg-white-800 whitespace-nowrap ">
                  Total HT
              </th>
              <th  class="px-6 py-3">
                  0.00 £
              </th>
              
          </tr>
      </thead>
      <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class=" bg-gray-500 px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Remise par ligne
              </th>
              <td class="px-6 py-4">
                  0.00 £
              </td>
              
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class=" bg-gray-500 px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                 Total avec remise
              </th>
              <td class="px-6 py-4">
                  0.00 £
              </td>
              
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
              <th scope="row" class="bg-gray-500  px-6 py-4 font-medium text-white whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  Total TTC 
              </th>
              <td class="px-6 py-4">
                  0.00 £
              </td>
             
          </tr>
          
          
      </tbody>
  </table>
</div>
</div>
          </div>



          <!-- Pied de la modal -->
          <div class="flex items-center p-4 md:p-5 border-t ...">
            <button  type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Enregistrer</button>
            <button @click="declineTerms" type="button" class="text-white bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Annuler</button>
          </div>
        </div>
    </div>
      </div>
      <br/>  <br/>  <br/>
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
  <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Recherche avec Nom ,Ville ..." @click="handleSearchClick">
</div>                                                                                                                                                                    
     </div>
     
     
   <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
       <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
           <tr>
               <th scope="col" class="px-6 py-3">
                   Devis N°
               </th>
               <th scope="col" class="px-6 py-3">
                   Client
               </th>
               <th scope="col" class="px-6 py-3">
                   Entreprise
               </th>
               <th scope="col" class="px-6 py-3">
                   Date
               </th>
               <th scope="col" class="px-6 py-3">
                   Signature
               </th>
               <th scope="col" class="px-6 py-3">
                  Total TTC
               </th><th scope="col" class="px-6 py-3">
                   mail
               </th>
               
               <th scope="col" class="px-6 py-3">
                   Action
               </th>
           </tr>
       </thead>
       <tbody>
           <tr  v-for="devis in result" :key="devis._id" class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
               <a href="#" @click="onShow(devis._id)" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                 
                 #{{devis.numDevis}}
               </a>
               <td class="px-6 py-4">
                  {{devis.nom_entreprise}}
               </td>
               <td class="px-6 py-4">
                   {{devis.ville}}
               </td>
               <td class="px-6 py-4">
                   {{devis.date_emission}}
               </td>
               <td class="px-6 py-4">
                   
               </td>
               <td class="px-6 py-4">
                {{devis.titre}}
               </td>
               <td class="px-6 py-4">
                   {{devis.email}}
               </td>
               <td class="px-6 py-4">
                   <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"><i class="pi pi-ellipsis-v"></i></a>
               </td>
           </tr>
           
         
           
       </tbody>
   </table>

<div>
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

      </div>


</div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapGetters } from 'vuex'; 
  export default {
    
    computed:{
    ...mapGetters(['getToken'])
  },data() {
      return {
        searchQuery: '',
    searchResults: [],
        activeTab1: '1',
        modalOpen1: false,
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
        devis: {},
        result:{} ,
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
     
    
        isOpen:false,
        modalOpen: false,
        activeDropdown: null,
        dropdownItems1: [
    { id: 1, text: 'Pièce jointe', link: '#', iconClass: 'fas fa-paperclip w-3.5 h-3.5 me-2' },
    { id: 2, text: 'Personnalisé', link: '#', iconClass: ' fas fa-cookie-bite w-3.5 h-3.5 me-2',  },
    { id: 3, text: 'Option', link: '#', iconClass: 'w-3.5 h-3.5 me-2', iconPath: 'votre_chemin_vers_icone_option' },
    // Ajoutez d'autres éléments de menu au besoin
]

      // Autres données pour d'autres menus déroulants
    };

   
    },
    methods: {
      onShow(id) {
      this.$router.push(`/show/${id}`);
    },


      created(){

 
 this.devisLoad("");
  },
 
      saveDataDevis() {
  
  this.devis.clientId = this.selectedClientId;
 this.devis.produitId =this.selectedArticleId;
  console.log(this.devis);
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
  

  axios.post("http://localhost:8080/api/devis/add", this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }, this.devis)
    .then(async (response) => {
  
      const { data } = response;
     
      console.log({data});
        devis.value = response.data.devis;
        console.log( devis.value )
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
  axios.get("http://localhost:8080/api/devis/", this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
     .then(({data}) => {
        // Accès à clientId et produitId dans chaque objet devis retourné
        data.forEach(devis => {
            const clientId = devis.nouvelledevis.clientId;
            const produitId = devis.nouvelledevis.produitId;
            console.log("Client ID:", clientId);
            console.log("Produit ID:", produitId);
        });
     })
     .catch(error => {
        console.error("Erreur lors de la récupération des devis:", error);
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
      },openChoisir() {
        this.isOpen = true; 
      },
      closeChoisir() {
        this.isOpen = false; 
      },
      saveData() {
  console.log(this.produits);
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

  axios.post("http://localhost:8080/api/produits/add", this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      }, this.produits)
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
      axios.get("http://localhost:8080/api/devis/", this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
         .then(({data}) => {
            
            this.result= data;
            console.log(data);
           
       });

    }
  };
  </script>
  
  <style>
  /* Styles pour la modal */
  </style>
  