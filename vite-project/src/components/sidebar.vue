<template>
	<div id="app">

<div class="fixed inset-0 flex z-40 ">
  
  <div
    class="bg-white shadow px-2 py-4"
    :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
  >
    
    <button
      @click.prevent="toggle()"
      class="w-8 h-30 p-1 my-auto rounded text-black bg-white-300 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300 "
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
    </svg>

    </button>
   
  <div class="menu-man text-left px-2 whitespace-nowrap ">
    <div class="profile flex justify-center items-center text-center p-5 ">
    
    <div
      ref="content"
      class="transition-all duration-700   h-[50px]  flex justify-center"
      :class="{ 'max-w-lg': open, 'max-w-0': !open }"
    >
    <div class="menu-man text-left px-2 whitespace-nowrap ">
    <div class="   py-3 rounded-sm cursor-pointer text-black-700  hover:bg-lightBlue-100 hover:text-white transition-colors">
      <router-link to="/" class="px-2 flex space-x-2 text-black"><span class="pi pi-microsoft " v-tooltip.newright="'Dashboard'"></span> <span v-show="open">Dashboard</span></router-link>
    </div>
    <div
    @click="toggleSubMenu('new')"
    class="   py-3 rounded-md cursor-pointer  hover:bg-lightBlue-100  text-black-700 hover:text-white transition-colors">
      <router-link to="/" class="px-2 flex space-x-2">
        <span class="pi pi-plus mr-2" v-tooltip.newright="'New'"></span>
        
        
        <span v-show="open">New <i class="pi pi-chevron-down"></i></span>  </router-link>
    </div>
    <div
              v-if="openSubMenu === 'new'"
              class="list-none p-0 m-0 overflow-hidden"
            >
            
              <div
      
      class=" duration-700  flex items-center justify-center"
      
    >
    <li>
                            <a  class="flex items-center cursor-pointer p-3 rounded-md text-black hover:bg-lightBlue-100 hover:text-white duration-200 transition-colors">
                                <i class="pi pi-file" style="color: #ffc107;"></i>

                                <span class="font-medium text-black">  Devis</span>
                            </a>
                        </li>
                        </div>
               <div
     
                        class=" duration-700 flex items-center justify-center"
      
                                   >
                        <li>
                            <a  class="flex items-center cursor-pointer p-3 rounded-md text-black hover:bg-lightBlue-100 hover:text-white duration-200 transition-colors">
    <i class="pi pi-money-bill text-green-500"></i>



                                <span class="font-medium ">   Facture</span>
                            </a>
                        </li>
                        </div>
   <div
      ref="content"
      class="transition-all duration-700 bg-lightBlue-200 overflow-hidden flex items-center justify-center"
      :class="[open ? 'max-w-lg' : 'max-w-0']"
    >
      <div class="bg-white shadow px-2 py-4">
        <ul class="list-none px-4 m-0">
          <!-- Éléments de la barre latérale -->
          <!-- Exemple d'un client -->
          <li>
            <router-link to="/client" class="px-2 flex space-x-2">
            <a
            
              @click="openClientInterface()"
              class="flex items-center cursor-pointer p-3 rounded-md text-black hover:bg-lightBlue-100 hover:text-white duration-200 transition-colors"
            >
            <i class="pi pi-user" style="color: #007bff;"></i>
              <span class="font-medium ">Client</span>
          </a>
          </router-link>
          </li>
          <!-- Autres éléments de la barre latérale -->
        </ul>
      </div>
      </div>
          </div>
          
                                <div 
                                @click="toggleSubMenu('liste')"
                                class="flex items-center cursor-pointer p-3 rounded-md text-black hover:bg-lightBlue-100 hover:text-white duration-200 transition-colors">
                                   
                                <router-link to="/liste" class="px-2 flex space-x-2"> 
                                  <span class="pi-list" v-tooltip.newright="'liste'"></span> 
                                  <span  v-show="open" class="font-medium text-black">Listes   <i class="pi pi-chevron-down"></i></span>
                                  
                                  </router-link>
                                </div>
                                <ul
                  v-show="openSubMenu === 'liste'"
                  class="list-none p-0 m-0 overflow-hidden"
                >
                <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hhover:bg-lightBlue-100  duration-200 transition-colors">
                                    <i class="pi pi-file" style="color: #ffc107;"></i>

                                    <span class="font-medium text-black">  Devis</span>
                                </a>
                            </li>
                            <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-lightBlue-100  duration-200 transition-colors">
        <i class="pi pi-money-bill text-green-500"></i>



                                    <span class="font-medium text-black">   Facture</span>
                                </a>
                            </li>
                            <li>
                              <router-link to="/listeClient" class="px-2 flex space-x-2">
                                <a
                                @click="openListeClientInterface()"
                                class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-lightBlue-100 duration-200 transition-colors">
                                    <i class="pi pi-user" style="color: #007bff;"></i>

                                    <span class="font-medium text-black">   Client</span>
                              </a>
                              </router-link>
                            </li>
                            </ul>
                           
    <div class="py-3 rounded-md cursor-pointer  hover:bg-lightBlue-100 text-black--300 hover:text-white transition-colors">
      <router-link to="/suivie" class="px-2 flex space-x-2"><span class="pi pi-chart-line mr-2" ></span> <span v-show="open">Suivie</span></router-link>
    </div>
    
    <div class="  py-3 rounded-md cursor-pointer text-black--300 hover:bg-lightBlue-100  hover:text-white transition-colors">
      <router-link to="/setting" class="px-2 flex space-x-2"><span class="pi pi-slack" ></span> <span v-show="open">Settings</span></router-link>
    </div>
  
  </div>
 </div>
      <slot></slot>
  
  </div>

  <transition name="fade">
    <!-- Dimmer -->
    <div
      v-if="dimmer && open"
      @click="toggle()"
      class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10 cursor-pointer "
    />
  </transition>
</div>
    </div>
  </div>
</div>
  
  </template>

<script>

export default {
  name: "sidebar",
 
 
  data() {
    return {
      open: false,
      dimmer: true,
      right: false,
      openSubMenu: null // Ajout de la propriété pour suivre l'état du sous-menu ouvert
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    toggleSubMenu(subMenu) {
      if (this.openSubMenu === subMenu) {
        this.openSubMenu = null; // Ferme le sous-menu s'il est déjà ouvert
      } else {
        this.openSubMenu = subMenu; // Ouvre le sous-menu s'il est fermé
      }
    },
    openClientInterface() {
  this.$emit('showClientInterface');
},
openListeClientInterface() {
  this.$emit('showListeClientInterface');
}


   
    
    

}
};
</script>

