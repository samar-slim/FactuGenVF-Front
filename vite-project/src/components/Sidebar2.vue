<template>
	<div id="app">

		<div class="fixed inset-0 flex z-40">
			
			<div
				class="bg-white shadow px-2 py-4"
				:class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
			>
				
				<button
					@click.prevent="toggle()"
					class="w-8 h-30 p-1 my-auto rounded text-black bg-white-300 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
				>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z" clipRule="evenodd" />
        </svg>

				</button>

				
				<div
					ref="content"
					class="transition-all duration-700 bg-lightBlue-200 overflow-hidden flex items-center justify-center"
					:class="[open ? 'max-w-lg' : 'max-w-0']"
				>
					
                <div class="bg-white shadow px-2 py-4">
            <ul class="list-none px-4 m-0">
               <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span class="ms-3">Dashboard</span>
            </a>
         </li>
              <li>
                <div
                 
                  @click="toggleSubMenu('new')"
                  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-lightBlue-100 white:hover:bg-white-700 duration-200 transition-colors">

                  <i class="pi pi-plus mr-2"></i>
                            <span class="font-medium  text-black">New</span>
                            <i class="pi pi-chevron-down"></i>
                        </div>
                        <div
                  v-if="openSubMenu === 'new'"
                  class="list-none p-0 m-0 overflow-hidden"
                >
                
                            <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-file" style="color: #ffc107;"></i>

                                    <span class="font-medium text-black">  Devis</span>
                                </a>
                            </li>
                            <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
        <i class="pi pi-money-bill text-green-500"></i>



                                    <span class="font-medium text-">   Facture</span>
                                </a>
                            </li>
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
                <a
                
                  @click="openClientInterface()"
                  class="flex items-center cursor-pointer p-3 rounded-md text-black hover:bg-lightBlue-100 hover:text-white duration-200 transition-colors"
                >
                  <i class="pi pi-user mr-2"></i>
                  <span class="font-medium">Client</span>
              </a>
              </li>
              <!-- Autres éléments de la barre latérale -->
            </ul>
          </div>
          <!-- Emplacement pour d'autres contenus de la barre latérale -->
         
        </div>
                            
                          </div>
                            </li>

                            <li>
                                <a  
                      class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-lightBlue-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-chart-line mr-2"></i>
                                    <span class="font-medium text-blacke">Suivie</span>
                                    
                                </a>
                               
                            </li>
                            <li>
                                <div 
                                @click="toggleSubMenu('liste')"
                                class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-users mr-2"></i>
                                    <span class="font-medium text-black">Listes</span>
                                    <i class="pi pi-chevron-down"></i>
                                </div>
                                <ul
                  v-show="openSubMenu === 'liste'"
                  class="list-none p-0 m-0 overflow-hidden"
                >
                <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-file" style="color: #ffc107;"></i>

                                    <span class="font-medium text-black">  Devis</span>
                                </a>
                            </li>
                            <li>
                                <a  class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
        <i class="pi pi-money-bill text-green-500"></i>



                                    <span class="font-medium text-black">   Facture</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-user" style="color: #007bff;"></i>

                                    <span class="font-medium text-black">   Client</span>
                                </a>
                            </li>



                </ul>
                            </li>
                           
                            <li>
                                <a class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-white-100 white:hover:bg-white-700 duration-200 transition-colors">
                                    <i class="pi pi-calendar mr-2"></i>
                                    <span class="font-medium text-black">Calendar</span>
                                </a>
                            </li>
                           
                        </ul>
                    
               
            </div>
					<slot></slot>
				</div>
			</div>

			<transition name="fade">
				<!-- Dimmer -->
				<div
					v-if="dimmer && open"
					@click="toggle()"
					class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
				/>
			</transition>
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
}

   
    
    

}
};
</script>

<style>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

html {
	background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>

<div 
@click="toggleSubMenu('liste')"
class=" py-3 rounded-md cursor-pointer  hover:bg-lightBlue-100  text-black-700 hover:text-white transition-colors">
   
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
<a class="flex items-center cursor-pointer p-3 rounded-md text-white-700 white:text-white-0/80 hover:bg-lightBlue-100 duration-200 transition-colors">
    <i class="pi pi-user" style="color: #007bff;"></i>

    <span class="font-medium text-black">   Client</span>
</a>
</li>
</ul>

<div class="py-3 rounded-md cursor-pointer  hover:bg-lightBlue-100 text-black--300 hover:text-white transition-colors">
<router-link to="/suivie" class="px-2 flex space-x-2"><span class="pi pi-chart-line mr-2" ></span> <span v-show="open">Suivie</span></router-link>
</div>

<div class="  py-3 rounded-md cursor-pointer text-black--300 hover:bg-lightBlue-100  hover:text-white transition-colors">
<router-link to="/setting" class="px-2 flex space-x-2"><span class="pi pi-slack" ></span> <span v-show="open">Setting</span></router-link>
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


<template>
  <div id="app" >
    <app-header />
    <Sidebar @showClientInterface="openClientInterface" @showListeClientInterface="openListeClientInterface"
     />
    <Client v-if="showClient"/>