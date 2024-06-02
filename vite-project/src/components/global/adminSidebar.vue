<template>
  <div class="h-screen border border-gray-300 bg-white" id="side-bar" :class="dataOpenSideBar ? 'side-bar-visible' : 'side-bar-close'">
     <div class="bg-white z-30 h-16 flex justify-center items-center">
       <div class="text-xl font-bold text-center flex items-center justify-center text-black h-full" v-show="dataOpenSideBar">FactuGen</div>
     </div>
     <div 
     class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-darck">
    
    <div class="menu-man text-left px-2 whitespace-nowrap ">
           <!-- dashboard -->
       <div 
         @click="toggleSubMenu('dashbord')"
         :class="{'bg-gray-100  border-solid border-1 shadow-md': openSubMenu === 'dashboard'}"
         class="  py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
           <router-link to="/admin/dashboard" class="flex items-center space-x-2 p-2  text-gray-900 rounded-lg dark:text-white font-bold dark:hover:bg-gray-700 group">
             <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 256 256" xml:space="preserve">
 
 <defs>
 </defs>
 <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
   <path d="M 42 48 V 0.111 C 18.547 1.656 0 21.156 0 45 c 0 24.853 20.147 45 45 45 c 23.844 0 43.344 -18.548 44.889 -42 H 42 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,171,224); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 89.889 42 C 88.409 19.54 70.46 1.591 48 0.111 V 42 H 89.889 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(114,213,74); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
 </g>
 </svg> <span v-show="dataOpenSideBar">Dashboard</span></router-link>
       </div>
        <!-- Users -->
       <div class="font-bold py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
              <router-link to="/admin/listeUsers" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
               <span class="pi pi-user text-orange-500" v-tooltip.right="'Users'"></span>
              <span v-show="dataOpenSideBar">Utilisateurs</span>
             </router-link>
       </div>

      <!-- thémes -->
      <div class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
<div class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
  <span class="pi pi-list text-blue-600" v-tooltip.right="'Thèmes'"></span>
  <span v-show="dataOpenSideBar">Thèmes</span>
</div>
<div class="list-none p-0 m-0 overflow-hidden">
  <div class="duration-700 flex items-center">
    <li>
      <router-link to="/admin/templates" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30" height="18" viewBox="0 5 28 256" xml:space="preserve">
          <defs></defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M 77.474 17.28 L 61.526 1.332 C 60.668 0.473 59.525 0 58.311 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 v 80.904 c 0 2.508 2.04 4.548 4.548 4.548 h 58.516 c 2.508 0 4.549 -2.04 4.549 -4.548 V 20.496 C 78.807 19.281 78.333 18.138 77.474 17.28 z M 61.073 5.121 l 12.611 12.612 H 62.35 c -0.704 0 -1.276 -0.573 -1.276 -1.277 V 5.121 z M 74.258 87 H 15.742 c -0.854 0 -1.548 -0.694 -1.548 -1.548 V 4.548 C 14.194 3.694 14.888 3 15.742 3 h 42.332 v 13.456 c 0 2.358 1.918 4.277 4.276 4.277 h 13.457 v 64.719 C 75.807 86.306 75.112 87 74.258 87 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 68.193 33.319 H 41.808 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 33.319 68.193 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 34.456 33.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 12.649 c 0.829 0 1.5 0.671 1.5 1.5 S 35.285 33.319 34.456 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <linearGradient id="SVGID_2" gradientUnits="userSpaceOnUse" x1="20" y1="19.2332" x2="42.2984" y2="19.2332">
              <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity: 1" />
              <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity: 1" />
            </linearGradient>
            <line x1="-10.246" y1="0" x2="10.246" y2="0" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_2); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" />
            <path d="M 42.298 20.733 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 20.492 c 0.829 0 1.5 0.671 1.5 1.5 S 43.127 20.733 42.298 20.733 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 68.193 44.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 44.319 68.193 44.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 48.191 55.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.672 1.5 1.5 S 49.02 55.319 48.191 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 68.193 55.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 55.319 68.193 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 68.193 66.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 66.319 68.193 66.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
            <path d="M 68.193 77.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 77.319 68.193 77.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform="matrix(1 0 0 1 0 0)" stroke-linecap="round" />
          </g>
        </svg>
        <span class="font-medium text-black">Facture et devis</span>
      </router-link>
    </li>
  </div>
</div>
      </div>

     <!-- backup -->
      <div @click="toggleSubMenu('backup')"
          :class="{'text-blue-500': openSubMenu === 'backup'}"
          class="py-3 font-bold rounded-md cursor-pointer text-black-300 hover:text-white">
         <router-link to="/admin/backup" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
       <span class="pi pi-save text-pink-500" v-tooltip.right="'Backup'"></span>
       <span v-show="dataOpenSideBar">Backup</span>
       </router-link>
      </div>

      <!-- reclamation -->
      <div @click="toggleSubMenu('reclamation')"
          :class="{'text-blue-500': openSubMenu === 'reclamation'}"
          class="py-3 font-bold rounded-md cursor-pointer text-black-300 hover:text-white">
         <router-link to="/admin/ListeReclamation" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
         <span class="pi pi-comment text-purple-500" v-tooltip.right="'Reclamation'"></span>
       <span v-show="dataOpenSideBar">Reclamations</span>
       </router-link>
      </div>
   
       </div>
      
       <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
         <div class="   py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
           <a href="https://website-nuxt-front.vercel.app/" target="_blank" class="px-2 flex space-x-2"><span class="pi pi-question" v-tooltip.right="'About Me'"></span> <span v-show="dataOpenSideBar">About Me</span></a>
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script>
 export default {
   name:"adminSidebar",
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
         this.openSubMenu = null; 
       } else {
         this.openSubMenu = subMenu; 
       }
     },
     openClientInterface() {
   this.$emit('showClientInterface');
 },
 openListeClientInterface() {
   this.$emit('showListeClientInterface');
 }
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