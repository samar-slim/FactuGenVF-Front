<template>
    <div class="h-screen border border-gray-300 bg-white" id="side-bar" :class="dataOpenSideBar ? 'side-bar-visible' : 'side-bar-close'">
       <div class="bg-white z-30 h-16 flex justify-center items-center">
         <div class="text-xl font-bold text-center flex items-center justify-center text-black h-full" v-show="dataOpenSideBar">FactuGen</div>
       </div>
       <div 
       class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-darck">
         <div class="menu-man text-left px-2 whitespace-nowrap ">
           <div 
           @click="toggleSubMenu('dashbord')"
           :class="{'bg-gray-100  border-solid border-1 shadow-md': openSubMenu === 'dashbord'}"
           class="  py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
             <router-link to="/client/dashbord" class="flex items-center space-x-2 p-2  text-gray-900 rounded-lg dark:text-white font-bold dark:hover:bg-gray-700 group">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 42 48 V 0.111 C 18.547 1.656 0 21.156 0 45 c 0 24.853 20.147 45 45 45 c 23.844 0 43.344 -18.548 44.889 -42 H 42 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,171,224); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 89.889 42 C 88.409 19.54 70.46 1.591 48 0.111 V 42 H 89.889 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(114,213,74); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg> <span v-show="dataOpenSideBar">Dashboard</span></router-link>
           </div>
          
   
           <div 
             @click="toggleSubMenu('Facture')"
             :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Facture'}"
              class="   py-3 rounded-md cursor-pointer  text-black-300 hover:text-white">
             <router-link to="/client/clientFactue" class="flex items-center space-x-2 p-2 text-gray-900  font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="25" viewBox="0 0 256 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 70.216 43 H 47 V 19.784 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 V 43 H 19.784 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 H 43 v 23.216 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 V 47 h 23.216 c 1.104 0 2 -0.896 2 -2 S 71.32 43 70.216 43 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 45 86 C 22.393 86 4 67.607 4 45 S 22.393 4 45 4 s 41 18.393 41 41 S 67.607 86 45 86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
   <span v-show="dataOpenSideBar">Devis<span class="justify-end"><i class="fa-solid fa-angle-down"></i></span></span></router-link>
           </div>
           <div 
             @click="toggleSubMenu('Devis')"
             :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Devis'}"
              class="   py-3 rounded-md cursor-pointer  text-black-300 hover:text-white">
             <router-link to="/client/clientDevis" class="flex items-center space-x-2 p-2 text-gray-900  font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="25" viewBox="0 0 256 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 70.216 43 H 47 V 19.784 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 V 43 H 19.784 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 H 43 v 23.216 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 V 47 h 23.216 c 1.104 0 2 -0.896 2 -2 S 71.32 43 70.216 43 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 45 86 C 22.393 86 4 67.607 4 45 S 22.393 4 45 4 s 41 18.393 41 41 S 67.607 86 45 86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
   <span v-show="dataOpenSideBar">Devis<span class="justify-end"><i class="fa-solid fa-angle-down"></i></span></span></router-link>
           </div>

          
      
          
         
        
             
          
          
             
            
    
       </div>
          
         </div>
        
         <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
           <div class="   py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
             <a href="https://website-nuxt-front.vercel.app/" target="_blank" class="px-2 flex space-x-2"><span class="pi pi-question" v-tooltip.right="'About Me'"></span> <span v-show="dataOpenSideBar">About Me</span></a>
           </div>
         </div>
       </div>
     
   </template>
   
   <script>
   import { mapGetters } from 'vuex';
   
   export default {
     computed: {
      ...mapGetters(['isClient']),
      dashboardRoute() {
        return this.isClient ? '/ClientDashboard' : '/dashboard' ;
      }
    },
     name:"Sidebar",
     data(){
       return {
         openSubMenu:null,
         open: false,
         right: false,
   
       }
     },
     
     props: {
       dataOpenSideBar: Boolean
     },
     methods :{
       toggleSubMenu(subMenu) {
         if (this.openSubMenu === subMenu) {
           this.openSubMenu = null; // Ferme le sous-menu s'il est déjà ouvert
         } else {
           this.openSubMenu = subMenu; // Ouvre le sous-menu s'il est fermé
         }
       },
       openInterfaceArticle () {
         this.$emit('showArticleInterface');
   
       },
       openClientInterface() {
     this.$emit('showClientInterface');
   },
   openListeClientInterface() {
     this.$emit('showListeClientInterface');
   },
     
     openListeFcatureInterface() {
     this.$emit('showListeFactureInterface');
   },
   openFactureInterface() {
     this.$emit('showFactureInterface');
   },
   openDevisInterface() {
     this.$emit('showDevisInterface');
   },
     },
   
   }
   </script>
   
   <style>
   .p-tooltip-text {
     font-size: 10px !important;
   }
   
   #side-bar {
     overflow: hidden;
     transition: 300ms;
   }
   
   .side-bar-visible {
     width: 250px !important;
   }
   
   .side-bar-close {
     width: 50px !important;
   }
   </style>