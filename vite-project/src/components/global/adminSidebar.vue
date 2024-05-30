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
             <router-link to="/admin/adminDashboard" class="flex items-center space-x-2 p-2  text-gray-900 rounded-lg dark:text-white font-bold dark:hover:bg-gray-700 group">
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
                <router-link to="/listeUsers" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                 <span class="pi pi-user text-orange-500" v-tooltip.right="'Users'"></span>
                <span v-show="dataOpenSideBar">Utilisateurs</span>
               </router-link>
         </div>

        <!-- thémes -->
        <div class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">""
  <div class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
    <span class="pi pi-list text-blue-600" v-tooltip.right="'Thèmes'"></span>
    <span v-show="dataOpenSideBar">Thèmes</span>
  </div>
  <div class="list-none p-0 m-0 overflow-hidden">
    <div class="duration-700 flex items-center">
      <li>
        <router-link to="/templates" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
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
           <router-link to="/backup" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
         <span class="pi pi-save text-pink-500" v-tooltip.right="'Backup'"></span>
         <span v-show="dataOpenSideBar">Backup</span>
         </router-link>
        </div>

        <!-- reclamation -->
        <div @click="toggleSubMenu('reclamation')"
            :class="{'text-blue-500': openSubMenu === 'reclamation'}"
            class="py-3 font-bold rounded-md cursor-pointer text-black-300 hover:text-white">
           <router-link to="/ListeReclamation" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
           <span class="pi pi-comment text-purple-500" v-tooltip.right="'Reclamation'"></span>
         <span v-show="dataOpenSideBar">Reclamations</span>
         </router-link>
        </div>
        <!-- settings -->
           <div>
            <div
              @click="toggleSubMenu('admin')"
              :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'admin'}"
              class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white"
            >
              <div class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white font-bold dark:hover:bg-gray-700 group">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="35" height="26" viewBox="-100 -50 300 350" xml:space="preserve">
                  <defs>
                  </defs>
                  <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >               
                  <path fill="#1F8ED9" d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z"/>
                  <path fill="#1F8ED9" d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z"/>
                  <path fill="#1F8ED9" d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z"/>
                  <path fill="#1F8ED9" d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z"/>
                  <path fill="#1F8ED9" d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z"/>
                  <path fill="#1F8ED9" d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z"/>
                  </g>
                </svg>
                <span v-show="dataOpenSideBar" >Admin Section</span>
              </div>
            </div>
            <!-- Sub-items for Admin Section -->
            <div v-if="openSubMenu === 'admin'" class="pl-6">
              <router-link to="/admin/listeUsers" class="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">User Section</router-link>
              <router-link to="/admin/listeReclamations" class="block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Reclamation</router-link>
            </div>
          </div> 
           <div 
             @click="toggleSubMenu('new')"
             :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'new'}"
              class="   py-3 rounded-md cursor-pointer  text-black-300 hover:text-white">
             <router-link to="/new" class="flex items-center space-x-2 p-2 text-gray-900  font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="25" viewBox="0 0 256 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 70.216 43 H 47 V 19.784 c 0 -1.104 -0.896 -2 -2 -2 s -2 0.896 -2 2 V 43 H 19.784 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 H 43 v 23.216 c 0 1.104 0.896 2 2 2 s 2 -0.896 2 -2 V 47 h 23.216 c 1.104 0 2 -0.896 2 -2 S 71.32 43 70.216 43 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 45 0 C 20.187 0 0 20.187 0 45 c 0 24.813 20.187 45 45 45 c 24.813 0 45 -20.187 45 -45 C 90 20.187 69.813 0 45 0 z M 45 86 C 22.393 86 4 67.607 4 45 S 22.393 4 45 4 s 41 18.393 41 41 S 67.607 86 45 86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(35,57,243); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
    <span v-show="dataOpenSideBar">New</span></router-link>
           </div>
           <div
                 v-if="openSubMenu === 'new'"
                 class="list-none p-0 m-0 overflow-hidden"
               >
               
                 <div
         
         class=" duration-700  flex items-center "
         
       >
       <li>
                          <a 
                               @click="openDevisInterface()" >
                             
         <router-link to="/admin/devis" class="flex  items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                              
                                  
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="35" height="26" viewBox="-100 -50 300 350" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 88.424 67.636 L 66.267 29.259 l -7.164 -11.777 l -4.721 -8.176 c -2.1 -3.638 -5.862 -5.81 -10.062 -5.81 c -4.202 0 -7.963 2.172 -10.064 5.81 L 12.099 47.683 L 6.296 59.254 l -4.72 8.176 c -2.101 3.638 -2.101 7.981 -0.001 11.619 c 2.101 3.639 5.863 5.811 10.064 5.811 h 44.314 l 12.967 0.207 l 9.441 -0.001 c 4.201 0 7.963 -2.171 10.063 -5.809 C 90.525 75.618 90.525 71.274 88.424 67.636 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(84,211,226); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 52.885 84.86 H 11.639 c -4.201 0 -7.963 -2.172 -10.064 -5.811 c -2.1 -3.638 -2.1 -7.981 0.001 -11.619 l 4.72 -8.176 L 5.05 58.534 l 9.273 -5.353 l 0.001 10.708 l -1.603 -0.925 l -4.72 8.176 c -1.095 1.895 -0.365 3.569 0 4.2 c 0.364 0.632 1.449 2.101 3.638 2.101 h 41.247 L 52.885 84.86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 13.633 45.026 l 20.623 -35.72 c 2.101 -3.638 5.862 -5.811 10.064 -5.81 c 4.201 0 7.962 2.172 10.062 5.81 l 4.721 8.176 l 1.246 -0.719 l 0 10.707 l -9.274 -5.353 l 1.603 -0.925 l -4.721 -8.176 c -1.094 -1.896 -2.908 -2.101 -3.637 -2.101 c -0.73 0 -2.544 0.204 -3.639 2.1 L 20.057 48.736 L 13.633 45.026 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 67.801 31.916 l 20.623 35.72 c 2.101 3.638 2.101 7.982 0 11.621 c -2.1 3.638 -5.862 5.809 -10.063 5.809 l -9.441 0.001 l 0 1.438 l -9.273 -5.354 l 9.273 -5.355 l 0 1.851 l 9.441 0 c 2.189 0 3.273 -1.468 3.638 -2.1 c 0.365 -0.632 1.095 -2.305 0 -4.201 L 61.376 35.624 L 67.801 31.916 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 56.084 72.94 H 33.916 V 40.039 c 0 -1.903 1.543 -3.446 3.446 -3.446 h 15.276 c 1.903 0 3.446 1.543 3.446 3.446 V 72.94 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(219,235,252); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 47.855 40.379 h -5.709 c -1.163 0 -2.238 -0.619 -2.822 -1.625 l -1.253 -2.16 H 51.93 l -1.253 2.16 C 50.092 39.76 49.017 40.379 47.855 40.379 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(183,194,206); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 45.924 71.633 h -1.848 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 1.848 c 0.553 0 1 0.447 1 1 S 46.477 71.633 45.924 71.633 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(183,194,206); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
                                   <span class="font-medium text-gray-900">  Devis</span>
                              
                             </router-link>
                           </a>
                           </li>
                           </div>
                  <div
        
                           class=" duration-700 flex items-center "
         
                                      >
                                      <li>
                               
                                   <a  
                                   @click="openFactureInterface()"
                                  >
                                  <router-link to="/admin/facture" class="flex items-center  text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="45" height="18" viewBox="0 5 28 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 77.474 17.28 L 61.526 1.332 C 60.668 0.473 59.525 0 58.311 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 v 80.904 c 0 2.508 2.04 4.548 4.548 4.548 h 58.516 c 2.508 0 4.549 -2.04 4.549 -4.548 V 20.496 C 78.807 19.281 78.333 18.138 77.474 17.28 z M 61.073 5.121 l 12.611 12.612 H 62.35 c -0.704 0 -1.276 -0.573 -1.276 -1.277 V 5.121 z M 74.258 87 H 15.742 c -0.854 0 -1.548 -0.694 -1.548 -1.548 V 4.548 C 14.194 3.694 14.888 3 15.742 3 h 42.332 v 13.456 c 0 2.358 1.918 4.277 4.276 4.277 h 13.457 v 64.719 C 75.807 86.306 75.112 87 74.258 87 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 33.319 H 41.808 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 33.319 68.193 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 34.456 33.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 12.649 c 0.829 0 1.5 0.671 1.5 1.5 S 35.285 33.319 34.456 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <linearGradient id="SVGID_2" gradientUnits="userSpaceOnUse" x1="20" y1="19.2332" x2="42.2984" y2="19.2332">
   <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity: 1"/>
   <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity: 1"/>
   </linearGradient>
   <line x1="-10.246" y1="0" x2="10.246" y2="0" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_2); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
     <path d="M 42.298 20.733 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 20.492 c 0.829 0 1.5 0.671 1.5 1.5 S 43.127 20.733 42.298 20.733 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 44.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 44.319 68.193 44.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 48.191 55.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.672 1.5 1.5 S 49.02 55.319 48.191 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 55.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 55.319 68.193 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 66.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 66.319 68.193 66.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 77.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 77.319 68.193 77.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg> <span class="font-medium text-black">Facture</span>
                                   
                                 </router-link>
                               </a> 
                               </li>
                           </div>
                           <div class=" duration-700 flex items-center ">
             
             <li>
               <a
                   @click="openClientInterface()"
                  
                  >
               <router-link to="/admin/client" class="flex items-center p-2 space-x-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                
                 
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="20" viewBox="-10 0 100 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
   <span class="font-medium text-gray-900 ">  Client</span>
           
             </router-link>
           </a>
             </li>
            
           </div> 
         </div>
       <div 
               @click="toggleSubMenu('liste')"
               :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'liste'}"
               class="py-3 rounded-md cursor-pointer  text-black-300 hover:text-white">
                                      
          <router-link to="/admin/liste" class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group"> 
                <span class="pi pi-list text-blue-600" v-tooltip.newright="'liste'"></span> <span  v-show="dataOpenSideBar" > Archive </span>
           </router-link>
       </div>             
         
          
         
        
             
             <div
                     v-show="openSubMenu === 'liste'"
                     class="list-none p-0 m-0 overflow-hidden"
                   >
                   <div
         
         class=" duration-700  flex items-center "
         
       >
                   <li>
                                   <a   @click="openListeDevisInterface()" >
                                    
                                     <router-link to="/admin/Listedevis" class="flex  items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                              
                                  
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="35" height="26" viewBox="-100 -50 300 350" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 88.424 67.636 L 66.267 29.259 l -7.164 -11.777 l -4.721 -8.176 c -2.1 -3.638 -5.862 -5.81 -10.062 -5.81 c -4.202 0 -7.963 2.172 -10.064 5.81 L 12.099 47.683 L 6.296 59.254 l -4.72 8.176 c -2.101 3.638 -2.101 7.981 -0.001 11.619 c 2.101 3.639 5.863 5.811 10.064 5.811 h 44.314 l 12.967 0.207 l 9.441 -0.001 c 4.201 0 7.963 -2.171 10.063 -5.809 C 90.525 75.618 90.525 71.274 88.424 67.636 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(84,211,226); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 52.885 84.86 H 11.639 c -4.201 0 -7.963 -2.172 -10.064 -5.811 c -2.1 -3.638 -2.1 -7.981 0.001 -11.619 l 4.72 -8.176 L 5.05 58.534 l 9.273 -5.353 l 0.001 10.708 l -1.603 -0.925 l -4.72 8.176 c -1.095 1.895 -0.365 3.569 0 4.2 c 0.364 0.632 1.449 2.101 3.638 2.101 h 41.247 L 52.885 84.86 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 13.633 45.026 l 20.623 -35.72 c 2.101 -3.638 5.862 -5.811 10.064 -5.81 c 4.201 0 7.962 2.172 10.062 5.81 l 4.721 8.176 l 1.246 -0.719 l 0 10.707 l -9.274 -5.353 l 1.603 -0.925 l -4.721 -8.176 c -1.094 -1.896 -2.908 -2.101 -3.637 -2.101 c -0.73 0 -2.544 0.204 -3.639 2.1 L 20.057 48.736 L 13.633 45.026 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 67.801 31.916 l 20.623 35.72 c 2.101 3.638 2.101 7.982 0 11.621 c -2.1 3.638 -5.862 5.809 -10.063 5.809 l -9.441 0.001 l 0 1.438 l -9.273 -5.354 l 9.273 -5.355 l 0 1.851 l 9.441 0 c 2.189 0 3.273 -1.468 3.638 -2.1 c 0.365 -0.632 1.095 -2.305 0 -4.201 L 61.376 35.624 L 67.801 31.916 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(34,53,162); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 56.084 72.94 H 33.916 V 40.039 c 0 -1.903 1.543 -3.446 3.446 -3.446 h 15.276 c 1.903 0 3.446 1.543 3.446 3.446 V 72.94 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(219,235,252); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 47.855 40.379 h -5.709 c -1.163 0 -2.238 -0.619 -2.822 -1.625 l -1.253 -2.16 H 51.93 l -1.253 2.16 C 50.092 39.76 49.017 40.379 47.855 40.379 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(183,194,206); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 45.924 71.633 h -1.848 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 1.848 c 0.553 0 1 0.447 1 1 S 46.477 71.633 45.924 71.633 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(183,194,206); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
                                   <span class="font-medium text-gray-900">  Devis</span>
                              
                             </router-link>
                           </a>
                           </li>
                           </div>
                          
                         <div class=" duration-700 flex items-center ">
                               <li>
                                 <a  
                                   @click="openListeFactureInterface()"
                                  >
                                 <router-link to="/admin/ListeFacture" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
                                 
                                   <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="18" viewBox="0 5 28 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 77.474 17.28 L 61.526 1.332 C 60.668 0.473 59.525 0 58.311 0 H 15.742 c -2.508 0 -4.548 2.04 -4.548 4.548 v 80.904 c 0 2.508 2.04 4.548 4.548 4.548 h 58.516 c 2.508 0 4.549 -2.04 4.549 -4.548 V 20.496 C 78.807 19.281 78.333 18.138 77.474 17.28 z M 61.073 5.121 l 12.611 12.612 H 62.35 c -0.704 0 -1.276 -0.573 -1.276 -1.277 V 5.121 z M 74.258 87 H 15.742 c -0.854 0 -1.548 -0.694 -1.548 -1.548 V 4.548 C 14.194 3.694 14.888 3 15.742 3 h 42.332 v 13.456 c 0 2.358 1.918 4.277 4.276 4.277 h 13.457 v 64.719 C 75.807 86.306 75.112 87 74.258 87 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 33.319 H 41.808 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 33.319 68.193 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 34.456 33.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 12.649 c 0.829 0 1.5 0.671 1.5 1.5 S 35.285 33.319 34.456 33.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <linearGradient id="SVGID_2" gradientUnits="userSpaceOnUse" x1="20" y1="19.2332" x2="42.2984" y2="19.2332">
   <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity: 1"/>
   <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity: 1"/>
   </linearGradient>
   <line x1="-10.246" y1="0" x2="10.246" y2="0" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: url(#SVGID_2); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) "/>
     <path d="M 42.298 20.733 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 20.492 c 0.829 0 1.5 0.671 1.5 1.5 S 43.127 20.733 42.298 20.733 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 44.319 H 21.807 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.671 1.5 1.5 S 69.021 44.319 68.193 44.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 48.191 55.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 26.385 c 0.828 0 1.5 0.672 1.5 1.5 S 49.02 55.319 48.191 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 55.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 55.319 68.193 55.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 66.319 H 21.807 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 46.387 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 66.319 68.193 66.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 68.193 77.319 H 55.544 c -0.828 0 -1.5 -0.672 -1.5 -1.5 s 0.672 -1.5 1.5 -1.5 h 12.649 c 0.828 0 1.5 0.672 1.5 1.5 S 69.021 77.319 68.193 77.319 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(29,146,211); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg> <span class="font-medium text-black">Facture</span>
                                   
                                 </router-link>
                               </a> 
                               </li>
                               </div>
                               <div class=" duration-700 flex items-center ">
                                 <li>      
              <a
                   @click="openListeClientInterface()"
                   
                  >             
               <router-link to="/admin/ListeClient" class="flex items-center space-x-2  p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="20" viewBox="-10 0 100 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
     <path d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
     <path d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   </g>
   </svg>
                 
                  <span class="font-medium text-black "> 
                   Client</span>
           
             </router-link>
           </a>
             </li>
             </div>
           </div>
           <div 
           :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Suivie'}"
           class=" font-bold py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
             <router-link to="/admin/suivie" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group"><span class="pi pi-chart-line text-red-500 " v-tooltip.right="'Suivie'"></span> <span v-show="dataOpenSideBar">Suivie</span></router-link>
           </div>
           <div
           @click="toggleSubMenu('calendrier') "
           :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'calendrier'}"
           class="  py-3 font-bold rounded-md cursor-pointer text-black-300 hover:text-white">
             <router-link to="/admin/calendrier" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white  dark:hover:bg-gray-700 group">
               <span class="pi pi-calendar" v-tooltip.right="'calendrier'"></span> <span v-show="dataOpenSideBar">Calandrier</span></router-link>
           </div>
           <div>
             
               <div
               @click="toggleSubMenu('setting') "
               :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'setting'}"
                                   class="py-3 font-bold rounded-md cursor-pointer text-black-300 hover:text-white">
                                   <router-link to="/admin/setting" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group">
                                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="28" height="24" viewBox="30 0 256 256" xml:space="preserve">
   
   <defs>
   </defs>
   <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
   <path d="M 45 49.519 L 45 49.519 c -7.68 0 -13.964 -6.284 -13.964 -13.964 v -5.008 c 0 -7.68 6.284 -13.964 13.964 -13.964 h 0 c 7.68 0 13.964 6.284 13.964 13.964 v 5.008 C 58.964 43.236 52.68 49.519 45 49.519 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 52.863 51.438 c -2.362 1.223 -5.032 1.927 -7.863 1.927 s -5.501 -0.704 -7.863 -1.927 C 26.58 53.014 18.414 62.175 18.414 73.152 v 14.444 c 0 1.322 1.082 2.403 2.403 2.403 h 48.364 c 1.322 0 2.403 -1.082 2.403 -2.403 V 73.152 C 71.586 62.175 63.42 53.014 52.863 51.438 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 71.277 34.854 c -2.362 1.223 -5.032 1.927 -7.863 1.927 c -0.004 0 -0.007 0 -0.011 0 c -0.294 4.412 -2.134 8.401 -4.995 11.43 c 10.355 3.681 17.678 13.649 17.678 24.941 v 0.263 h 11.511 c 1.322 0 2.404 -1.082 2.404 -2.404 V 56.568 C 90 45.59 81.834 36.429 71.277 34.854 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 63.414 0 c -7.242 0 -13.237 5.589 -13.898 12.667 c 8 2.023 13.947 9.261 13.947 17.881 v 2.385 c 7.657 -0.027 13.914 -6.298 13.914 -13.961 v -5.008 C 77.378 6.284 71.094 0 63.414 0 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 13.915 73.152 c 0 -11.292 7.322 -21.261 17.677 -24.941 c -2.861 -3.029 -4.702 -7.019 -4.995 -11.43 c -0.004 0 -0.007 0 -0.011 0 c -2.831 0 -5.5 -0.704 -7.863 -1.927 C 8.166 36.429 0 45.59 0 56.568 v 14.444 c 0 1.322 1.082 2.404 2.404 2.404 h 11.511 V 73.152 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
   <path d="M 26.536 32.932 v -2.385 c 0 -8.62 5.946 -15.858 13.947 -17.881 C 39.823 5.589 33.828 0 26.586 0 c -7.68 0 -13.964 6.284 -13.964 13.964 v 5.008 C 12.622 26.635 18.879 32.905 26.536 32.932 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(25,88,143); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
 </g>
   </svg><span v-show="dataOpenSideBar">Setting  </span> 
                                 </router-link>
                     </div>
         
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