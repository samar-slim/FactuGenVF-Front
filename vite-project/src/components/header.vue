<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-lightBlue-500 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between" v-show="showSide">
        <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
          <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
          Logo
          </a>
          <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none mr-auto">
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">

              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
               <span class="ml-2">Devis</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
               <span class="ml-2">Facture</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                <span class="ml-2">Client</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
               <span class="ml-2">Reclamation</span>
              </a>
            </li>
          </ul>
          <div  class="lg:flex lg:flex-grow items-center">
  <ul class="flex flex-col lg:flex-row list-none ml-auto">
    <li class="nav-item">
      <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
        
        <i class="fas fa-bell text-white text-lg mr-2" @click="toggleNotification"></i>
      </a>
    </li>
<!-- admin icons -->
<div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
    <div class="nav-item">
      <div class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff"   shape="circle"  aria-haspopup="true" aria-controls="overlay_menu" />
          <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
        
    
</div>
      </div>
      </div>
   
    
       <!-- Drop down -->
       <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
               
              </div>
          
           
          </div>
        </div>  
            
 </ul>
</div>

        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'app-header',
    methods: {
    toggleNotification() {
      // Code pour afficher ou masquer la fenêtre de notifications
      // Par exemple, changer une variable de données pour contrôler l'affichage
      this.showNotification = !this.showNotification;
    }, toggleDrop() {
            this.showDropDown = !this.showDropDown;
        },
        toggle() {
            // Ajoutez le code pour gérer le clic sur l'icône d'administrateur ici
            console.log("Toggle admin icon clicked");
            // Code pour afficher la fenêtre contextuelle avec les options "Setting" et "Login"
        }

  },
  data() {
    return {
      showNotification: false,  // Variable de données pour contrôler l'affichage de la fenêtre de notifications
      
      showDropDown: false,
      showSide: true
    
    
    };
  } 
  }
  </script>
  
  <style scoped>
  /* Vos styles CSS peuvent être ajoutés ici */
  </style>
  