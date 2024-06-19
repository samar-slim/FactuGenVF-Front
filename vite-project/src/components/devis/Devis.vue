<!-- devis.vue -->
<template>
  <div class="" >
    <div  class="flex-1 bg-gray-50">
    <div class="container mx-auto py-8 px-2" >
      <h1 class="text-2xl font-semibold mb-8" >Nouvelle Devis</h1>
      <div class="flex justify-end">

<button @click="resetInputs" type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
 <i class="pi pi-trash"></i>
</button>
<button type="submit" @click="saveDataDevis" class="px-4 py-2 text-sm font-medium text-gray-900 bg-blue border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
<i class="pi pi-save"></i> Enregistrer à 04:14
</button>






<div>
  <div>
  <button @click="openModalFinaliser" class="px-4 py-2 text-sm font-medium bg-blue-800 text-gray-900 bg-blue border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
    Finaliser <i class="fa-solid fa-check"></i>
  </button>
</div>

<!-- Message d'erreur -->
<div v-if="showErrorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4" role="alert">
  <strong>Attention !</strong> Veuillez remplir tous les champs obligatoires du devis avant de finaliser.
</div>
<div v-if="modalOpenFinaliser" class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
  <div class="max-w-md bg-white p-8 rounded shadow-lg">
    <div class="flex items-center justify-between border-b pb-4">
      <h3 class="text-lg font-semibold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Le devis est bien finalisé</h3>
      <button @click="closeModalFinaliser" type="button" class="text-gray-600 hover:text-gray-900">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <div class="grid grid-cols-2 gap-4 mt-4">
      <!-- Carré 1 : Envoyer par mail -->
      <div class="border p-4 flex items-center justify-center flex-col">
        <button class="font-semibold hover:text-blue-700">Envoyer par mail</button>
        <i class="pi pi-send text-xl mt-2"></i>
        <!-- Ajoutez ici votre logique pour l'envoi par mail -->
      </div>
      <!-- Carré 2 : Partager le lien -->
      <div class="border p-4 flex items-center justify-center flex-col">
        <button  @click="saveDataDevis" class="font-semibold hover:text-blue-700">Enregistrer</button>
        <i class="fa-solid fa-share-from-square text-xl mt-2"></i>
        <!-- Ajoutez ici votre logique pour partager le lien -->
      </div>
    </div>
  

  <!-- Rectangle : Télécharger PDF -->
  <div class="border p-4 mt-4 text-center">
    <button type="button" class="font-semibold hover:text-blue-700" @click="exportToPDF(devis._id)">Télécharger PDF</button>
    <i class="fa-solid fa-download text-xl"></i>
  </div>
</div>
  <ShowDevis v-if="showModal"
    :id="currentDevisId"
    :modalTitle="Devis"
    :buttonText="'Générer Facture'"
    :closeButtonText="'Fermer'"
    @close="showModal = false" />
</div>
</div>
</div>
     
     


    <!-- INFORMATIONS -->
    <div id="pdf">
    <div class="bg-white rounded shadow p-6 mb-8 " >
      <h2 class="text-xl font-semibold mb-6">INFORMATIONS</h2>

      <form @submit.prevent="saveDataDevis">
  <div class="grid grid-cols-2 gap-5">
    <div class="w-1/2">
      <div @click="openModalE" class="form-input w-full border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between">
        <span v-if="!user.logo">Sélectionner une entreprise</span>
        <img v-else :src="user.logo" alt="Logo de l'entreprise" class="h-8">
      </div>
      <div v-if="showModalEntreprise" class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
        <div class="modal-content bg-white rounded-lg shadow-lg p-6 w-1/2">
          <h3 class="text-xl font-semibold mb-4">Sélectionnez une entreprise</h3>
          <select v-model="selectedEntrepriseId" @change="handleEntrepriseSelection" class="form-select w-full border border-gray-300 rounded-md px-3 py-2 mb-4">
            <option value="">Sélectionnez une entreprise</option>
            <option v-for="user in users" :value="user._id" :key="user._id">
              {{ user?.nomEntreprise }}
            </option>
          </select>
          <button @click="closeModalE" class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Fermer</button>
        </div>
      </div>
      <div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Nom de l'entreprise</label>
          <input type="text" v-model="user.nomEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Nom de l'entreprise" readonly>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Numéro</label>
          <input type="text" v-model="user.telEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Numéro" readonly>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Code postal</label>
            <input type="text" v-model="user.paysEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Code postal" readonly>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Ville</label>
            <input type="text" v-model="user.adrEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Ville" readonly>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
          <input type="email" v-model="user.emailEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="E-mail" readonly>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Numéro de téléphone</label>
          <input type="tel" v-model="user.telEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Numéro de téléphone" readonly>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">SIRET Numéro</label>
          <input type="text" v-model="user.siretEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="SIRET Numéro" readonly>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">N°TVA</label>
          <input type="text" v-model="user.tvaEntreprise" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="N°TVA" readonly>
        </div>
             <div class="grid grid-cols-2 gap-5">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Interlocuteur</label>
              <input type="text" v-model="devis.inter" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Interlocuteur">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Délégataire</label>
              <input type="text" v-model="devis.deleg" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Délégataire">
            </div>
          </div>
        </div>
        
        </div>
       
        <!-- Right Side -->
        <div class="mb-9">
            <p class="text-gray-700">Information général de Devis</p>
            <div  class="border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Titre</label>
            <input type="text" v-model="devis.titre" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Titre">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Numéro</label>
            <input type="text" v-model="devis.numDevis" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Numéro">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date d'émission</label>
            <input type="text" v-model="devis.date_emission" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Date d'émission">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Date d'expiration</label>
            <input type="text" v-model="devis.date_expiration" class="form-input w-full border border-gray-300 rounded-md px-3 py-2" placeholder="Date d'expiration">
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea v-model="devis.description" class="form-textarea w-full border border-gray-300 rounded-md px-3 py-2" rows="3" placeholder="Description"></textarea>
          </div>
        </div>


          <br/>
          <br/>
          <div class="grid grid-cols-2 gap-5">   
                 
<div class="col-span-2 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

<div class="p-5">
    
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> Client</p>
    <select v-model="selectedClientId" @change="handleClientSelection" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option selected>Selectionner un client</option>
<!-- Parcourir les données des clients récupérées et créer une option pour chaque client -->
<option v-for="client in client" :value="client._id" :key="client._id" >{{ client.name }} {{ client.prenom }}</option>
</select>

<div >
<div class="flex justify-end ">  
<button  @click="openModalC" class="border p-2 space-x-4 bg-gray-200"><i class="pi pi-plus"></i></button>
</div>  <!-- Modal -->


    <div v-if="modalOpenC" class="fixed inset-0  items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
      <!-- Contenu de la modal -->
      <div class="relative bg-white rounded-lg shadow ">
        <!-- En-tête de la modal -->
        <div class="flex items-center  justify-between p-2 md:p-9 border-b rounded-t ">
          <h3 class="text-xl  font-semibold text-gray-900 ...">Nouveau Client</h3>
          <button @click="closeModalC" type="button" ><i class="fa-solid fa-xmark"></i></button>
        </div>
        <!-- Corps de la modal -->
        <div class="flex justify-end">
<div class="container mx-auto p-4 shadow-lg p-10 rounded">
  <div class="flex justify-center items-center h-screen">
  <form @submit.prevent="saveData2">
    <div class="mb-8">
      <ul class="flex border-b">
        <li  @click="activeTab1 = '1'"
            :class="[activeTab1 === '1' ? 'border-blue-500 text-blue-600 border-l border-t border-r ' : '    text-gray-500 hover:text-gray-700']"
            class="-mb-px mr-1">
          <a  class="bg-white inline-block rounded-t py-2 px-4 text-blue-500 font-semibold" href="#">Particulier</a>
        </li>
        <li @click="activeTab1 = '2'"
            :class="[activeTab1 === '2' ? 'border-blue-600 text-blue-900 border-l border-t border-r ' : 'border-transparent   text-gray-500 hover:text-gray-700']"
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
            <input type="text" id="téléphone" v-model="clients.telephone" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
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
      
        
      </form>
      
    </div>
    <content >
    <div id="content" class="flex justify-start  space-x-2 p-2 w-[1600px] p-6 mb-8 xl:p-20 print:p-2">
     
               
  <!-- Modèle à afficher -->
  <div v-if="isOpen && !isOpenn"  class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
    <!-- Contenu du modèle -->
    <div  class="container mx-auto p-4 shadow-lg p-10 rounded bg-white">
        <!-- En-tête de la modal -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
          <h3 class="text-xl font-semibold text-gray-900 ">Nouveau Article</h3>
          <button @click="closeChoisir" type="button" ><i class="fa-solid fa-xmark"></i></button>
        
        </div>
    <div class="modal-content">
      <form >
    <div class="mb-8">
      <ul class="flex border-b">
<li @click="activeTab = 'produit'; fetchData('produit')"
    :class="[activeTab === 'produit' ? 'border-b-2 border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
    class="-mb-px mr-1 relative">
  <a class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="#">Produit</a>
  <div v-if="activeTab === 'produit'" class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
</li>
<li @click="activeTab = 'traveaux'; fetchData('traveaux')"
    :class="[activeTab === 'traveaux' ? 'border-b-2 border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
    class="mr-1 relative">
  <a class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="#">Travaux</a>
  <div v-if="activeTab === 'traveaux'" class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
</li>
<li @click="activeTab = 'mainoeuvre'; fetchData('mainoeuvre')"
    :class="[activeTab === 'mainoeuvre' ? 'border-b-2 border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700']"
    class="mr-1 relative">
  <a class="bg-white inline-block py-2 px-4 text-blue-500 font-semibold" href="#">MainOeuvre</a>
  <div v-if="activeTab === 'mainoeuvre'" class="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
</li>
</ul>
<div class="py-4">
<div>
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sélectionnez une option</label>
  <select @change.prevent="handleShowProduct" v-model="selectedArticleId" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option disabled selected>Choisir une action</option>
    <option disabled>Actions disponibles</option>
    <option class="hover:bg-red-700 text-gray-900 font-bold py-2 px-4 rounded" v-for="item in filteredData" :key="item._id" :value="item._id">{{ item.nom_article }}</option>
  </select>
  <button class="border p-2 space-x-4 bg-gray-200" @click="openChoisir1">Nouvel Article</button>
</div>
</div>
<div class="flex items-center p-4 md:p-5 border-t ...">
<button @click.prevent="closeChoisir" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Confirmer({{tableOfSelectedOptions.length}})</button>
</div>
    </div>
    
  </form>

     

      </div>
    </div>
  </div>
     
      <div v-if="isOpenn"   class="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800 backdrop-blur-xs">
    
    <div class="relative bg-white rounded-lg shadow ...">
        
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ...">
          <h3 class="text-xl font-semibold text-gray-900 ">Nouveau Article</h3>
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

  <table class="w-full ml-0 text-left table-auto print:text-sm" id="table-items">
  <thead>
      <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black">
          <th class="px-4 py-2 border tabular-nums slashed-zero ml-0">Ref</th>
          <th class="px-4 py-2 border tabular-nums slashed-zero">Description</th>
          <th class="px-4 py-2 border tabular-nums slashed-zero">Qté</th>
          <th class="px-4 py-2 border tabular-nums slashed-zero">unité</th>
          <th class="px-4 py-2 border tabular-nums slashed-zero">P.U HT</th>
          <th class="px-4 py-2 border tabular-nums slashed-zero">Total(ht)</th>
      </tr>
  </thead>
            <tbody>
              <tr class="bg-white justify-center">
                <td id="invoice-button-cell" colspan="7" class="px-2 py-2 border text-black-900 justify-end bg-white-900">
  <!-- Icône ou bouton pour créer une facture -->
  <div class="px-80 py-1  ml-40 justify-end  hover:text-white">
      <img  v-if="showImage"  src="" class="w-[180px]  justify-end">
  </div>
</td> 
      </tr>
              <tr v-for="singleSelect in tableOfSelectedOptions" :key="singleSelect._id" class="px-8 py-2 border text-black-900 bg-white-500">
  <td class="px-5 py-2  border tabular-nums slashed-zero">{{ singleSelect.reference }}</td>
  <td class="px-5 py-2  border tabular-nums slashed-zero">{{ singleSelect.description }}</td>
  <td class="px-5 py-2 border tabular-nums slashed-zero">
      <!-- Utilisation de v-model pour lie la quantité à un champ d'entrée -->
      <input type="number" v-model="singleSelect.quantity" @change="updateQuantity(singleSelect)" class="bg-white-500 text-black font-bold py-2 px-4 border text-center border-gray-300 rounded-md">
  </td>
  <td class="px-5 py-2  border tabular-nums slashed-zero">{{ singleSelect.prix_unitaire }}</td>
  <td class="px-5 py-2 border tabular-nums slashed-zero">{{ singleSelect.prix }}</td>
  <td class="px-5 py-2 border tabular-nums slashed-zero">{{ singleSelect.total }}</td>
  <div class="px-5 py-2  tabular-nums slashed-zero">
    <button @click="removeItem(index)" class="px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white"><i class="fa-solid fa-trash-can"></i></button>
  </div>
</tr>
<tr>
<button @click="openChoisir"  class="py-2 bg-blue-900 h-[60px] w-[200px] hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded "><span class="space-x-2 px-2 item-center"><i class="pi pi-plus text-xl"></i></span>Nouveau</button>
</tr>

            </tbody>
          </table>  
        
    </div>
</content>
<br/>
<br/>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 ">
  
  <div class="col-span-1">
      <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Remarque</label>
          <input type="text" v-model="devis.remarque" class="w-full form-input border border-gray-300 rounded-md px-1/2 py-2">
      </div>
      <div class="mt-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">Condition de Règlement</label>
      <textarea class="w-full form-textarea border border-gray-300 rounded-md px-1/2 py-2" v-model="devis.condition" rows="3"></textarea>
    </div>
    <div class="mt-4">
      <label class="block text-sm font-medium text-gray-700 mb-2">Mode de Paiement</label>
      <select v-model="devis.paiement" class="w-full form-select border border-gray-300 rounded-md px-1/2 py-2">
        <option value="">Sélectionner un mode de paiement</option>
        <option value="carte">Carte de crédit</option>
        <option value="paypal">PayPal</option>
        <option value="virement">Virement bancaire</option>
      </select>
    </div>
  </div>
  
  <div class="col-span-1 p-14" v-if="!isOpen && !modalOpenC" >
      <div class="relative  shadow-md sm:rounded-lg">
          <table class="w-full text-left table-auto print:text-sm" id="table-items">
              
              <thead>
                  <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black">
                      <th class="invisible"></th>
                      <th class="invisible"></th>
                      <th class="px-4 py-2 text-right border"><span class="flag-icon flag-icon-hu print:hidden"></span>Total HT</th>
                     
                      <th class="px-4 py-2 text-right border text-right text-black border  bg-white tabular-nums slashed-zero">{{ totalHT}}$</th>
                  </tr>
                  
                 
             
              </thead>
              <!-- Corps du tableau -->
              <tbody>
                <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black">
                      <td class="invisible"></td>
                      <td class="invisible"></td>
                      <td class="px-4 py-2 text-right border">
<span class="flag-icon flag-icon-hu print:hidden"></span>Remise 
</td>
<td class="px-4 py-2 text-right border text-center text-black border bg-white tabular-nums slashed-zero">
<div class="flex items-center">
  <div class="relative">
    <input v-model="devis.remise" type="number" class="space-x-2 px-3 py-4 border border-gray-300 rounded-md bg-white text-sm" placeholder="Montant de la remise">
    <button @click="toggleDropdown" class="space-x-2  px-3 py-2 border p-2 border-gray-300 rounded-md bg-white text-sm">
      {{ selectedOption }}
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <div v-show="dropdownOpen" @click="toggleDropdown" class="fixed inset-0 h-full w-full z-10"></div>
    
    <div v-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
      <button @click="selectOption('$')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"> ($)</button>
      <button @click="selectOption('%')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"> (%)</button>
    </div>
  </div>
  
</div>
</td>


                  </tr>
                 
                   <tr class="text-white bg-blue-900 print:bg-gray-300 print:text-black" >
                <td class="invisible"></td>
                <td class="invisible"></td>
                <td class="px-4 py-2 font-extrabold text-right border"> Total TTC </td>
                <td class="px-4 py-2 text-right text-black border  bg-white tabular-nums slashed-zero" > {{ totalTTC}} $</td>
              </tr>
                  <!-- Autres lignes du tableau -->
                  <!-- ... -->
              </tbody>
          </table>
      </div>
  </div>
</div>

    </div>


      
    </div>
   
  </div>
  <div class=" fixed relative bg-gray-50 dark:bg-slate-900  flex"  v-if="!isOpen && !modalOpenC && !modalOpenFinaliser" >
    <div class="flex-grow flex justify-end">
     
      <nav class="z-20 flex flex-col gap-4 border-r border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 fixed top-2/4 -translate-y-2/4 right-6 h-[400px] w-[100px] rounded-lg border">
        <router-link to="/user/Digitalisation">
        <a
      
      class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600 dark:bg-sky-900 dark:text-sky-50"
  >
      <!-- HeroIcon - User -->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
<path d="M 67.245 21.439 c -1.104 0 -2 -0.896 -2 -2 V 2.136 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 17.303 C 69.245 20.543 68.35 21.439 67.245 21.439 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 2 71.518 c -1.104 0 -2 -0.896 -2 -2 V 2.136 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 67.382 C 4 70.622 3.104 71.518 2 71.518 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 77.622 89.864 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 c 3.931 0 7.237 -2.721 8.137 -6.377 H 67.245 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 88 c 1.104 0 2 0.896 2 2 C 90 84.312 84.447 89.864 77.622 89.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 67.245 79.487 c -1.104 0 -2 -0.896 -2 -2 V 53.169 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 24.318 C 69.245 78.592 68.35 79.487 67.245 79.487 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 12.377 89.864 C 5.553 89.864 0 84.312 0 77.487 v -7.97 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 7.97 c 0 4.619 3.758 8.377 8.377 8.377 c 1.104 0 2 0.896 2 2 S 13.482 89.864 12.377 89.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 77.622 89.864 H 12.377 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 65.245 c 1.104 0 2 0.896 2 2 S 78.727 89.864 77.622 89.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 12.377 89.864 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 c 4.619 0 8.377 -3.758 8.377 -8.377 c 0 -1.104 0.896 -2 2 -2 h 44.49 c 1.104 0 2 0.896 2 2 s -0.896 2 -2 2 H 24.593 C 23.635 85.364 18.521 89.864 12.377 89.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 41.739 52.07 H 15.876 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 25.863 c 1.104 0 2 0.896 2 2 S 42.844 52.07 41.739 52.07 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 71.038 40.392 c -1.073 0 -1.949 -0.845 -1.998 -1.906 c -1.061 -0.049 -1.906 -0.925 -1.906 -1.998 c 0 -1.104 0.896 -2 2 -2 c 2.153 0 3.904 1.751 3.904 3.904 C 73.038 39.496 72.143 40.392 71.038 40.392 z M 69.134 38.487 h 0.01 H 69.134 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 67.245 31.748 c -1.104 0 -2 -0.896 -2 -2 V 27.39 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 2.358 C 69.245 30.852 68.35 31.748 67.245 31.748 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 69.134 38.487 h -3.778 c -2.153 0 -3.904 -1.751 -3.904 -3.904 v -2.931 c 0 -2.153 1.751 -3.904 3.904 -3.904 h 3.778 c 2.153 0 3.904 1.751 3.904 3.904 c 0 1.104 -0.896 2 -2 2 c -1.072 0 -1.948 -0.844 -1.998 -1.904 h -3.589 v 2.74 h 3.683 c 1.104 0 2 0.896 2 2 S 70.238 38.487 69.134 38.487 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 67.245 47.586 c -1.104 0 -2 -0.896 -2 -2 v -2.358 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 2.358 C 69.245 46.69 68.35 47.586 67.245 47.586 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 69.134 45.228 h -3.778 c -2.153 0 -3.904 -1.751 -3.904 -3.904 c 0 -1.104 0.896 -2 2 -2 c 1.072 0 1.948 0.844 1.998 1.904 h 3.589 v -2.836 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 v 2.932 C 73.038 43.476 71.287 45.228 69.134 45.228 z M 65.451 41.323 h 0.01 H 65.451 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 54.271 64.202 H 15.876 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 38.395 c 1.104 0 2 0.896 2 2 S 55.375 64.202 54.271 64.202 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 59.09 11.045 c -0.46 0 -0.92 -0.158 -1.293 -0.474 l -6.863 -5.814 l -6.862 5.814 c -0.746 0.632 -1.84 0.632 -2.586 0 l -6.863 -5.814 l -6.863 5.814 c -0.746 0.632 -1.84 0.632 -2.586 0 l -6.863 -5.814 l -6.862 5.814 c -0.746 0.632 -1.84 0.632 -2.586 0 L 0.707 3.662 C -0.136 2.948 -0.24 1.686 0.474 0.843 C 1.188 -0.001 2.45 -0.104 3.293 0.61 l 6.863 5.814 l 6.862 -5.814 c 0.746 -0.632 1.84 -0.632 2.586 0 l 6.863 5.814 L 33.33 0.61 c 0.746 -0.632 1.84 -0.632 2.586 0 l 6.863 5.814 l 6.862 -5.814 c 0.746 -0.632 1.84 -0.632 2.586 0 l 6.863 5.814 l 6.862 -5.814 c 0.843 -0.713 2.104 -0.61 2.819 0.233 c 0.714 0.843 0.609 2.105 -0.233 2.819 l -8.155 6.909 C 60.01 10.887 59.55 11.045 59.09 11.045 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 67.245 55.169 c -10.402 0 -18.865 -8.463 -18.865 -18.865 s 8.463 -18.865 18.865 -18.865 c 10.401 0 18.864 8.463 18.864 18.865 S 77.646 55.169 67.245 55.169 z M 67.245 21.439 c -8.196 0 -14.865 6.668 -14.865 14.865 s 6.669 14.865 14.865 14.865 S 82.109 44.5 82.109 36.304 C 82.109 28.107 75.441 21.439 67.245 21.439 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 34.69 39.939 H 15.876 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 H 34.69 c 1.104 0 2 0.896 2 2 S 35.794 39.939 34.69 39.939 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 41.739 27.808 H 15.876 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 25.863 c 1.104 0 2 0.896 2 2 S 42.844 27.808 41.739 27.808 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>

      <small class="text-center text-xs font"> Digitaliser</small>
  </a>
</router-link>

  <a
      href="#personnaliser"
      class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
  >
      <!-- HeroIcon - Chart Bar -->
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
<path d="M 15.77 15.77 C -3.126 34.666 -5.356 63.072 10.789 79.217 c 8.938 8.938 21.632 12.239 34.391 10.202 c 6.433 -1.027 10.16 -7.606 8.136 -13.798 c -2.193 -6.711 -1.029 -13.843 3.716 -18.589 s 11.878 -5.91 18.589 -3.716 c 6.192 2.023 12.771 -1.703 13.798 -8.136 c 2.038 -12.759 -1.264 -25.453 -10.202 -34.391 C 63.072 -5.356 34.666 -3.126 15.77 15.77 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(39,123,201); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<circle cx="21.448" cy="40.708" r="7.168" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,224,125); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<circle cx="40.708" cy="21.448" r="7.168" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(126,178,249); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<circle cx="65.548" cy="24.988" r="7.168" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(226,128,134); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<circle cx="24.988" cy="65.548" r="7.168" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(149,214,164); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<path d="M 39.88 41.784 c 6.069 0.029 13.488 1.33 20.603 8.035 c 4.015 3.784 4.386 9.037 1.152 12.467 c -3.233 3.431 -8.498 3.372 -12.514 -0.412 C 42.006 55.169 40.268 47.84 39.88 41.784 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(242,242,242); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 61.635 62.286 c -1.306 1.385 -2.945 2.191 -4.697 2.423 l 24.658 23.238 c 2.004 1.888 5.159 1.795 7.047 -0.209 s 1.795 -5.159 -0.209 -7.047 L 63.776 57.453 C 63.648 59.216 62.94 60.9 61.635 62.286 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(204,153,106); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>

      <small class="text-center text-xs font-medium"> Personnalisé </small>
  </a>

  <a
      href="#settings"
      class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-slate-800"
  >
  <!-- HeroIcon - Cog-6-tooth -->
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
<path d="M 48.465 74.879 h -6.931 c -3.05 0 -5.531 -2.481 -5.531 -5.531 c 0 -1.327 -0.735 -2.528 -1.918 -3.136 c -0.679 -0.349 -1.354 -0.738 -2.005 -1.157 c -1.116 -0.718 -2.52 -0.753 -3.667 -0.09 c -2.643 1.525 -6.033 0.617 -7.557 -2.025 l -3.465 -6.002 c -0.738 -1.28 -0.935 -2.769 -0.553 -4.197 c 0.382 -1.427 1.297 -2.62 2.577 -3.359 c 1.148 -0.663 1.821 -1.898 1.757 -3.221 c -0.037 -0.772 -0.037 -1.551 0 -2.315 c 0.065 -1.329 -0.608 -2.566 -1.755 -3.228 c -0.007 -0.004 -0.015 -0.009 -0.022 -0.014 c -1.269 -0.739 -2.176 -1.926 -2.557 -3.346 c -0.383 -1.427 -0.186 -2.917 0.552 -4.197 l 3.465 -6.002 c 0.739 -1.279 1.932 -2.194 3.359 -2.577 c 1.428 -0.383 2.917 -0.187 4.197 0.553 c 1.147 0.661 2.579 0.611 3.737 -0.129 c 0.303 -0.194 0.611 -0.382 0.925 -0.563 c 0.313 -0.181 0.63 -0.354 0.949 -0.519 c 1.222 -0.632 1.981 -1.848 1.981 -3.172 c 0 -3.049 2.481 -5.531 5.531 -5.531 h 6.931 c 3.05 0 5.531 2.481 5.531 5.531 c 0 1.328 0.735 2.529 1.918 3.137 c 0.688 0.354 1.363 0.743 2.005 1.158 c 1.113 0.717 2.52 0.752 3.667 0.089 c 0.011 -0.006 0.021 -0.012 0.031 -0.018 c 1.272 -0.725 2.752 -0.915 4.167 -0.536 c 1.427 0.383 2.62 1.298 3.359 2.577 l 3.465 6.002 c 0.739 1.28 0.935 2.77 0.553 4.197 c -0.383 1.427 -1.297 2.62 -2.577 3.359 c -1.149 0.663 -1.822 1.897 -1.757 3.222 c 0.037 0.759 0.037 1.537 0 2.313 c -0.065 1.33 0.607 2.567 1.755 3.23 c 2.643 1.527 3.551 4.916 2.027 7.557 l -3.465 6.003 c -1.524 2.64 -4.913 3.547 -7.556 2.025 c -1.145 -0.662 -2.578 -0.613 -3.738 0.129 c -0.301 0.193 -0.609 0.381 -0.922 0.562 c -0.316 0.182 -0.633 0.354 -0.95 0.519 c -1.224 0.632 -1.983 1.847 -1.983 3.172 C 53.996 72.397 51.515 74.879 48.465 74.879 z M 30.174 62.49 c 1.039 0 2.076 0.296 2.989 0.883 c 0.595 0.384 1.213 0.74 1.836 1.059 c 1.853 0.953 3.004 2.835 3.004 4.913 c 0 1.948 1.584 3.534 3.532 3.534 h 6.931 c 1.947 0 3.532 -1.584 3.532 -3.532 c 0 -2.075 1.173 -3.971 3.062 -4.947 c 0.29 -0.15 0.581 -0.309 0.87 -0.475 c 0.283 -0.164 0.566 -0.336 0.842 -0.513 c 1.792 -1.147 4.02 -1.213 5.816 -0.178 c 1.684 0.972 3.851 0.394 4.824 -1.292 l 3.465 -6.003 c 0.471 -0.817 0.597 -1.769 0.353 -2.68 c -0.245 -0.912 -0.829 -1.673 -1.646 -2.145 c -1.802 -1.041 -2.856 -2.979 -2.755 -5.06 c 0.034 -0.711 0.034 -1.424 0 -2.119 c -0.101 -2.076 0.955 -4.011 2.753 -5.049 c 0.819 -0.473 1.404 -1.234 1.648 -2.146 c 0.244 -0.911 0.118 -1.863 -0.353 -2.68 l -3.465 -6.002 c -0.471 -0.817 -1.233 -1.401 -2.145 -1.645 c -0.913 -0.245 -1.864 -0.119 -2.68 0.353 c -0.011 0.006 -0.021 0.012 -0.031 0.017 c -1.795 1.021 -3.983 0.962 -5.719 -0.157 c -0.589 -0.379 -1.206 -0.736 -1.836 -1.06 c -1.853 -0.952 -3.004 -2.834 -3.004 -4.913 c 0 -1.95 -1.584 -3.534 -3.532 -3.534 h -6.931 c -1.947 0 -3.532 1.585 -3.532 3.532 c 0 2.075 -1.173 3.971 -3.062 4.948 c -0.291 0.151 -0.58 0.308 -0.867 0.474 c -0.288 0.166 -0.57 0.338 -0.846 0.514 c -1.79 1.147 -4.019 1.215 -5.816 0.178 l 0 0 c -0.817 -0.471 -1.768 -0.597 -2.68 -0.353 c -0.911 0.244 -1.673 0.828 -2.145 1.645 l -3.465 6.002 c -0.471 0.817 -0.597 1.769 -0.353 2.68 c 0.244 0.911 0.829 1.673 1.646 2.144 c 0.007 0.004 0.015 0.009 0.022 0.014 c 1.787 1.042 2.833 2.972 2.732 5.045 c -0.035 0.7 -0.035 1.414 0 2.121 c 0.101 2.075 -0.955 4.01 -2.753 5.049 c -1.687 0.974 -2.268 3.138 -1.293 4.825 l 3.465 6.002 c 0.973 1.687 3.137 2.266 4.825 1.293 C 28.272 62.737 29.224 62.49 30.174 62.49 z M 45.022 58.838 c -1.202 0 -2.411 -0.158 -3.603 -0.477 c -3.569 -0.956 -6.552 -3.245 -8.4 -6.445 l 0 0 c -1.847 -3.2 -2.338 -6.927 -1.382 -10.496 c 0.956 -3.569 3.245 -6.552 6.445 -8.4 c 3.199 -1.848 6.928 -2.338 10.497 -1.382 c 3.569 0.956 6.551 3.245 8.399 6.445 c 1.847 3.2 2.338 6.927 1.381 10.497 c -0.956 3.569 -3.245 6.551 -6.445 8.399 C 49.785 58.21 47.419 58.838 45.022 58.838 z M 44.981 33.161 c -2.051 0 -4.074 0.537 -5.898 1.591 c -2.738 1.58 -4.695 4.132 -5.514 7.185 c -0.818 3.053 -0.398 6.242 1.183 8.979 l 0 0 c 1.58 2.737 4.132 4.695 7.185 5.513 c 3.053 0.818 6.242 0.399 8.979 -1.182 c 2.737 -1.58 4.695 -4.132 5.513 -7.185 c 0.818 -3.053 0.398 -6.243 -1.182 -8.98 c -1.58 -2.738 -4.132 -4.695 -7.185 -5.514 C 47.043 33.297 46.008 33.161 44.981 33.161 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 8.054 69.864 c -0.328 0 -0.65 -0.161 -0.841 -0.458 c -9.189 -14.251 -9.634 -32.22 -1.162 -46.894 C 12.057 12.109 21.756 4.667 33.36 1.558 c 11.604 -3.109 23.725 -1.513 34.128 4.493 c 0.478 0.276 0.642 0.887 0.366 1.366 c -0.276 0.478 -0.889 0.641 -1.366 0.366 c -9.94 -5.739 -21.521 -7.264 -32.611 -4.294 C 22.789 6.46 13.522 13.571 7.782 23.512 c -8.096 14.022 -7.67 31.193 1.11 44.81 c 0.299 0.464 0.165 1.083 -0.298 1.382 C 8.427 69.812 8.239 69.864 8.054 69.864 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 44.927 89.994 c -7.794 0 -15.484 -2.043 -22.414 -6.044 c -0.478 -0.276 -0.642 -0.887 -0.366 -1.366 s 0.885 -0.643 1.366 -0.366 c 9.941 5.741 21.523 7.264 32.61 4.294 c 11.088 -2.971 20.355 -10.083 26.095 -20.024 c 7.321 -12.68 7.706 -28.043 1.03 -41.095 c -0.251 -0.492 -0.057 -1.094 0.435 -1.345 c 0.49 -0.252 1.093 -0.058 1.345 0.434 c 6.986 13.659 6.582 29.736 -1.079 43.005 C 77.943 77.891 68.244 85.334 56.64 88.443 C 52.766 89.48 48.833 89.994 44.927 89.994 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 71.545 15.829 c -1.087 0 -2.16 -0.285 -3.127 -0.843 c -1.452 -0.838 -2.489 -2.191 -2.924 -3.809 c -0.433 -1.619 -0.211 -3.31 0.627 -4.761 c 1.73 -2.996 5.575 -4.024 8.571 -2.296 c 1.452 0.838 2.489 2.191 2.923 3.81 c 0.433 1.618 0.211 3.309 -0.627 4.76 c -0.839 1.451 -2.191 2.489 -3.809 2.923 C 72.638 15.758 72.09 15.829 71.545 15.829 z M 71.563 5.28 c -1.479 0 -2.919 0.767 -3.709 2.136 c -0.571 0.989 -0.722 2.141 -0.427 3.243 c 0.295 1.103 1.003 2.025 1.991 2.595 c 2.042 1.178 4.659 0.476 5.839 -1.564 c 0.571 -0.989 0.722 -2.141 0.428 -3.243 c -0.296 -1.103 -1.003 -2.025 -1.991 -2.595 C 73.021 5.464 72.287 5.28 71.563 5.28 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 71.545 15.829 c -1.087 0 -2.16 -0.285 -3.127 -0.843 c -1.452 -0.838 -2.489 -2.191 -2.924 -3.809 c -0.433 -1.619 -0.211 -3.31 0.627 -4.761 c 1.73 -2.996 5.575 -4.024 8.571 -2.296 c 1.452 0.838 2.489 2.191 2.923 3.81 c 0.433 1.618 0.211 3.309 -0.627 4.76 c -0.839 1.451 -2.191 2.489 -3.809 2.923 C 72.638 15.758 72.09 15.829 71.545 15.829 z M 71.563 5.28 c -1.479 0 -2.919 0.767 -3.709 2.136 c -0.571 0.989 -0.722 2.141 -0.427 3.243 c 0.295 1.103 1.003 2.025 1.991 2.595 c 2.042 1.178 4.659 0.476 5.839 -1.564 c 0.571 -0.989 0.722 -2.141 0.428 -3.243 c -0.296 -1.103 -1.003 -2.025 -1.991 -2.595 C 73.021 5.464 72.287 5.28 71.563 5.28 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
<path d="M 18.434 86.723 c -1.087 0 -2.16 -0.285 -3.126 -0.842 c -1.451 -0.839 -2.489 -2.192 -2.923 -3.81 c -0.433 -1.618 -0.211 -3.309 0.627 -4.761 c 0.838 -1.452 2.191 -2.489 3.81 -2.923 c 1.619 -0.431 3.309 -0.211 4.76 0.627 c 2.996 1.73 4.026 5.574 2.297 8.57 c -0.838 1.452 -2.191 2.489 -3.81 2.924 C 19.528 86.651 18.98 86.723 18.434 86.723 z M 18.452 76.173 c -1.478 0 -2.918 0.766 -3.708 2.136 c -1.179 2.041 -0.477 4.661 1.564 5.839 c 0.989 0.572 2.141 0.725 3.243 0.427 c 1.103 -0.295 2.025 -1.003 2.596 -1.991 c 1.178 -2.041 0.476 -4.66 -1.565 -5.839 C 19.911 76.358 19.176 76.173 18.452 76.173 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(11,50,94); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>

      <small class="text-center text-xs font-medium"> option </small>
  </a>

  <hr class="dark:border-gray-700/60" />

  <a
      href="/"
      class="flex h-16 w-16 flex-col items-center justify-center gap-1 text-fuchsia-900 dark:text-gray-400"
  >
  <!-- HeroIcon - Home Modern -->
      <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
      >
      <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
      />
      </svg>

      <small className="text-xs font-medium">Home</small>
  </a>
  </nav>
</div>
  </div>
</div>

</template>  
<script >

import axios from 'axios';
import { useToast } from 'vue-toastification';
import ShowDevis from './ShowDevis.vue';
import { useRouter } from 'vue-router'; // Importation du hook useRouter

export default {
  
  props: ['produitId'],
  components: {
  ShowDevis
},
  
  

  data() {
    return {
      currentDevisId: null,
      showModal: false,
      showErrorMessage: false,
      formIsValid: false,
      categories: [], 
      showModalEntreprise: false,
      selectedEntrepriseId: null,
      users: [],
    user: {
        
      }, 
    categorie: {
      
      
    },
      activeTab: 'article',
      showImage: true,
      lienPartage: '',
      dropdownOpen: false,
    selectedOption: '$',
    remiseValue: 0,
    totalTTC: 0,
    totalHT: 0,
      result:{},
      activeTab1: '1',
      activeTab: '1',
       singleSelectedObject : {} , 
      tableOfSelectedOptions :[],
      resultProduit : {},
      resultDevis : {},
      showDevisModal: false,
      modalOpen2: false,
      devis : {
        handler() {
      this.validateForm();
    },
    deep: true,

      },
      produits : [],
      produit: [],
     
      client: [],
      clients : {
  civilite: '',
    name: '',
    prenom: '',
    adresse: '',
    suite_adresse: '',
    email: '',
    telephone: '',
    contact: '',
    pays: '',
    nom_societe: '',
    siret: '',
    tva: '',
    },
    produitSelectionne: null,
      selectedArticleId: null,
      selectedClientId: null,
      selectedCategorieId: null,
      isOpen:false,
      isOpenn:false,
      isOpen2:false,
      modalOpenC: false,
      modalOpenCategorie: false,
      
      modalOpenFinaliser : false,
      
     

    
  };

 
  },
  
  watch:{

  } ,   
  created(){
    this.fetchCategories();
    this.getUsers();



  },
  mounted() {
    
    this.setActiveTab('article');
      const generatePdfButton = document.getElementById('generate-pdf');
      if (generatePdfButton !== null) {
          
          generatePdfButton.addEventListener('click', this.generatePDF);
      } else {
          console.error("L'élément avec l'ID 'generate-pdf' n'a pas été trouvé dans le DOM.");
      }
  },
    methods: {
      openModalE() {
      this.showModalEntreprise = true;
      this.getUsers();
    },
    closeModalE() {
      this.showModalEntreprise = false;
    },
    async handleEntrepriseSelection() {
      try {
        const response = await axios.get(`/api/users/${this.selectedEntrepriseId}`);
        this.user = response.data;
        console.log('users',this.user)
        this.updateFormFields();
        this.closeModalE();
      } catch (error) {
        console.error(error);
      }
    },
    async getUsers() {
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    updateFormFields() {
  // Mettez à jour les champs du formulaire avec les données de l'entreprise sélectionnée
  this.devis.entrepriseId = this.user._id;
  this.devis.nomEntreprise = this.user.nomEntreprise;
  this.devis.telEntreprise = this.user.telEntreprise;
  this.devis.paysEntreprise = this.user.paysEntreprise;
  this.devis.adrEntreprise = this.user.adrEntreprise;
  this.devis.emailEntreprise = this.user.emailEntreprise;
  this.devis.siretEntreprise = this.user.siretEntreprise;
  this.devis.tvaEntreprise = this.user.tvaEntreprise;
},

validateForm() {
  const isEntrepriseSelected = this.devis.entrepriseId !== null && this.devis.entrepriseId !== '';
  const isClientSelected = this.selectedClientId !== null && this.selectedClientId !== '';
  const isArticleSelected = this.selectedArticleId !== null && this.selectedArticleId !== '';

  this.formIsValid = isEntrepriseSelected && isClientSelected && isArticleSelected;

  return this.formIsValid;
},

  fetchData(type) {
  axios.get(`http://localhost:8080/api/produits/type/${type}`)
    .then(({ data }) => {
      switch (type) {
        case 'produit':
          this.produits = data;
          this.travaux = []; // Réinitialiser le tableau des travaux
          this.mainoeuvres = []; // Réinitialiser le tableau des mainoeuvres
          break;
        case 'traveaux':
          this.travaux = data;
          this.produits = []; // Réinitialiser le tableau des produits
          this.mainoeuvres = []; // Réinitialiser le tableau des mainoeuvres
          break;
        case 'mainoeuvre':
          this.mainoeuvres = data;
          this.produits = []; // Réinitialiser le tableau des produits
          this.travaux = []; // Réinitialiser le tableau des travaux
          break;
        default:
          break;
      }
      this.filteredData = data;
      console.log('filterthom', this.filteredData);
      
      // Forcer la mise à jour de la vue
      this.$nextTick(() => {
        this.$forceUpdate();
      });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération des données :', error);
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
      handleImageProduitUpload(event) {
    const file = event.target.files[0];
    if (file) {
      // Convertir l'image en une URL de données pour l'affichage ou l'envoi au serveur
      const reader = new FileReader();
      reader.readAsDataURL(file);
      
      reader.onload = () => {
        this.produits.imageUrl = reader.result;
        console.log('urlll',this.produits.imageUrl)
      };
    }
  },
      handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      // Convertir l'image en une URL de données pour l'affichage ou l'envoi au serveur
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.devis.imageUrl = reader.result;
        console.log('urlll',this.devis.imageUrl)
      };
    }
  },


      
  onShow(id) {
      this.currentDevisId = id;
      console.log('currr', this.currentDevisId);
      this.showModal = true;
    },
      removeItem(index) {
  this.tableOfSelectedOptions.splice(index, 1);
  this.calculateTotalTTC(); 
  this.calculateTotalHT(); 
},
updateQuantity(singleSelect) {
 
  singleSelect.total = singleSelect.quantity * singleSelect.prix;
  this.calculateTotalTTC(); 
  this.calculateTotalHT(); // Mettre à jour totalHT après la mise à jour de la quantité
},
exportToPDF(devisId) {
    this.showDevisModal = true;
    
    this.$refs.showDevis.loadData(devisId);
  },

      generatePDF() {
          
          const doc = new jsPDF();

          
          doc.text('Devis', 10, 10);
          doc.text('Nom de l\'entreprise : Mon entreprise', 10, 20);
          
          doc.save('devis.pdf');
      },
     
      handleClientSelection(event) {
      
      const selectedClientId = event.target.value;

 console.log('cliennttt selectioneee 88888888888888888',selectedClientId)
      
      this.$emit('clientSelected', selectedClientId);
  },
  selectOption(option) {
    this.selectedOption = option;
   
    this.dropdownOpen = false;
    
    this.remiseValue = this.devis.remise
  
    this.calculateTotalTTC();
  },
  calculateTotalHT() {
let totalHT = 0;
for (const item of this.tableOfSelectedOptions) {
  totalHT += item.quantity * item.prix;
}
this.totalHT = totalHT; 
return totalHT;
},


calculateTotalTTC() {
const totalHT = this.calculateTotalHT(); 
let totalTTC = 0;
if (this.selectedOption === '$') {
  totalTTC = totalHT - this.remiseValue; 
} else if (this.selectedOption === '%') {
  const montantRemise = (totalHT * this.remiseValue) / 100; 
  totalTTC = totalHT - montantRemise;
}
this.totalTTC = totalTTC;
return totalTTC;
},




      editProduit(produit) {
      
      this.produitSelectionne = produit;
    },
    handleShowProduct(event){
      this.showImage = false;
       console.log(event.target.value )      
       this.produit.forEach((item)=>{
        if(item._id === event.target.value){
         const isExist =     this.tableOfSelectedOptions.some(item=> { 
          console.log('tableau',this.tableOfSelectedOptions);
                  return item._id === event.target.value;
                  
            })
            console.log(isExist,"isExist")
            if(!isExist){ 
              this.tableOfSelectedOptions.push({quantity :  0, ...item})

            }
        }
      
               })       
       },
    calculateTotal() {
    let total = 0;
    this.produit.forEach(produit => {
      total += produit.total_ht;
    });
    return total;
  },
  resetInputs() {
    this.devis = {};

  }, 

  
    openModalC() {
      this.modalOpenC = true;
      
    },
    openModalCategorie() {
      this.modalOpenCategorie = true;
      
    },
    openModalFinaliser() {
  
    this.modalOpenFinaliser = true;
    // Logique pour finaliser le devis
  
},

    toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  },
 

  closeModalCategorie() {
      this.modalOpenCategorie = false;
    },
   
    
    closeModalC() {
      this.modalOpenC = false;
    },
    closeModalFinaliser() {
      this.modalOpenFinaliser= false;
    },
    closeModal2() {
      this.modalOpen2 = false;
    },
     
    acceptTerms() {
      // Action lorsque les termes sont acceptés
    },
    declineTerms() {
      // Action lorsque les termes sont refusés
    },openChoisir() {
       this.isOpen = true; 
    },
    openChoisir1() {
      this.isOpenn = true; 
    },
    closeChoisir() { 
      this.isOpen = false; 
    },
    closeChoisir1() {
      this.isOpenn = false; 
    },
   
  handleSubmit() {
    
   
   
    this.article = {
      title: ''
    };
    
    this.showModal = false;
  },
  created(){
this.clientLoad("");
this.produitLoad("");
this.devisLoad("");
this.categorieload("");
},


  clientLoad() {
       axios.get("http://localhost:8080/api/client/")
         .then(({data}) => {
         
          this.client= data;
          this.result = data;
         
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
     devisLoad() {
       axios.get("http://localhost:8080/api/devis/")
       .then(({data}) => {
          
          this.resultDevis = data;
         
     });


     },
     saveData2() {
      const toast = useToast();

axios.post("http://localhost:8080/api/client/add", this.clients)
.then(response => {
    const { data } = response;
    
    try { 
      if (response.status === 200 || response.status === 201) {
   
    toast.success('Client enregistré et invitée avec succès.');

    
    this.clientLoad(); 
        this.clients = {};
        
        this.closeModalC();
  } 
      
        
     
    } catch (err) {
      console.log(err);
      toast.error("error,please try again");
    }
  })
  
},

  
  // Vérifiez si tous les champs requis sont remplis
  saveData() {
    const toast = useToast();
    
  // Vérifiez si tous les champs requis sont remplis
  if (!this.produits.nom_article || !this.produits.reference || !this.produits.prix_unitaire || !this.produits.type_unité) {
    toast.error("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  // Assignez l'ID de la catégorie sélectionnée à this.produits.categorieId
  this.produits.categorieId = this.selectedCategorieId;

  // Vérifiez les données avant l'envoi
  console.log("Données à envoyer :", this.produits);
  axios.post("http://localhost:8080/api/produits/add", this.produits)
    .then(response => {
      try {
        const data = response.data;
        console.log("Réponse du serveur :", data);

        this.produitLoad();
        this.produits = {};
        this.selectedArticleId = null;
        this.closeChoisir1();
      } catch (err) {
        console.log(err);
        toast.error("Une erreur s'est produite, veuillez réessayer.");
      }
    })
    .catch(error => {
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
    });
},
async saveDataDevis() {
   const toast = useToast();
   const router = useRouter(); 
  if (!this.validateForm()) {
    toast.error('Veuillez remplir tous les champs obligatoires avant de soumettre le devis.');
    return;
  }
this.devis.clientId = this.selectedClientId;

this.devis.produitId = this.selectedArticleId;
this.devis.totalHT = this.totalHT;
    this.devis.totalTTC = this.totalTTC,
this.devis.remarque = this.remarque;
this.devis.userId= this.user._id;



try {
  
  const postData = {
    devis: this.devis,
    produitsSelectionnes: this.tableOfSelectedOptions
  };
  console.log('deviss mta3iiii',this.devis)

  // Envoi des données du devis au serveur
  const responseDevis = await axios.post("http://localhost:8080/api/devis/add", postData);

  
  if (responseDevis.status === 200 || responseDevis.status === 201) {
    console.log('Devis enregistré avec succès:', responseDevis.data);
    toast.success('Devis enregistré avec succès.');

    
    this.devisLoad();
    this.devis = {};
   this.$router.push('/user/Listedevis' );
  } else {
    console.error('Erreur lors de l\'enregistrement du devis:', responseDevis.statusText);
    toast.error("Erreur lors de l'enregistrement du devis, veuillez réessayer.");
  }
} catch (error) {
  console.error('Erreur lors de l\'enregistrement du devis:', error.message);
  toast.error("Erreur lors de l'enregistrement du devis, veuillez réessayer.");

}


},



  },
  mounted() {
 
  axios.get("http://localhost:8080/api/client/")
  .then(({data}) => {
    console.log(data); // Just for debugging purposes
    this.client = data;
    
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

   

  
},


};
</script>

<style>
/* Styles pour la modal */
</style>
