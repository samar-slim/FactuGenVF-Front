<template>
  <div class="h-screen border border-gray-300 bg-white" id="side-bar" :class="dataOpenSideBar ? 'side-bar-visible' : 'side-bar-close'">
    <div class="bg-white z-30 h-16 flex justify-center items-center">
      <div class="text-xl font-bold text-center flex items-center justify-center text-black h-full" v-show="dataOpenSideBar">FactuGen</div>
    </div>
    <div class="flex flex-col justify-between h-[calc(100vh-3rem)] bg-darck">
      <div class="menu-man text-left px-2 whitespace-nowrap ">
        <div 
          @click="toggleSubMenu('dashbord')"
          :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'dashbord'}"
          class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
          <router-link to="/client/home" class="flex items-center space-x-2 p-2 text-gray-900 rounded-lg dark:text-white font-bold dark:hover:bg-gray-700 group">
            <!-- Dashboard Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 256 256">
              <g style="stroke: none; stroke-width: 0; fill: none; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M 42 48 V 0.111 C 18.547 1.656 0 21.156 0 45 c 0 24.853 20.147 45 45 45 c 23.844 0 43.344 -18.548 44.889 -42 H 42 z" style="fill: rgb(0,171,224); opacity: 1;" transform=" matrix(1 0 0 1 0 0)" stroke-linecap="round" />
                <path d="M 89.889 42 C 88.409 19.54 70.46 1.591 48 0.111 V 42 H 89.889 z" style="fill: rgb(114,213,74); opacity: 1;" transform=" matrix(1 0 0 1 0 0)" stroke-linecap="round" />
              </g>
            </svg>
            <span v-show="dataOpenSideBar">Dashboard</span>
          </router-link>
        </div>

        <div 
          @click="toggleSubMenu('Facture')"
          :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Facture'}"
          class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
          <router-link to="/client/clientFacture" class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
            <!-- Invoice Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21,8H13V6h8M19,12H13v2h6M17,16H13v2h4M15,20H13v2h2M11,6V2H6a2,2 0 0,0-2,2V22a2,2 0 0,0 2,2H19a2,2 0 0,0 2-2V9A2,2 0 0,0 21,7H11M11,13a1.5,1.5 0 0,1-3,0A1.5,1.5 0 0,1 11,11.5A1.5,1.5 0 0,1 14,13A1.5,1.5 0 0,1 11,14.5A1.5,1.5 0 0,1 11,13z" style="fill: pink;" />
            </svg>
            <span v-show="dataOpenSideBar">Factures</span>
          </router-link>
        </div>

        <div 
          @click="toggleSubMenu('Devis')"
          :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Devis'}"
          class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
          <router-link to="/client/clientDevis" class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
            <!-- Quote Icon -->
           <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M21,7H3a2,2 0 0,0-2,2V22a2,2 0 0,0 2,2H21a2,2 0 0,0 2-2V9A2,2 0 0,0 21,7H11M11,13a1.5,1.5 0 0,1-3,0A1.5,1.5 0 0,1 11,11.5A1.5,1.5 0 0,1 14,13A1.5,1.5 0 0,1 11,14.5A1.5,1.5 0 0,1 11,13z" style="fill: green;" />
            </svg>
            <span v-show="dataOpenSideBar">Devis</span>
          </router-link>
        </div>
        <div 
          @click="toggleSubMenu('Settings')"
          :class="{'bg-gray-100 border-solid border-1 shadow-md': openSubMenu === 'Settings'}"
          class="py-3 rounded-md cursor-pointer text-black-300 hover:text-white">
          <router-link to="/client/setting" class="flex items-center space-x-2 p-2 text-gray-900 font-bold rounded-lg dark:text-white dark:hover:bg-gray-700 group">
            <!-- Settings Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12,8A4,4 0 1,1 8,12A4,4 0 0,1 12,8M4,8V10H2V14H4V16A2,2 0 0,0 6,18H8V20H10V22H14V20H16A2,2 0 0,0 18,18V16H20V14H22V10H20V8A2,2 0 0,0 18,6H16V4H14V2H10V4H8A2,2 0 0,0 6,6V8H4Z" style="fill: blue;" />
            </svg>
            <span v-show="dataOpenSideBar">Settings</span>
          </router-link>
        </div>
      </div>

      <div class="menu-man text-left px-2 justify-self-end whitespace-nowrap">
        <div class="py-3 rounded-md cursor-pointer text-gray-300 hover:text-white">
          <a href="https://website-nuxt-front.vercel.app/" target="_blank" class="px-2 flex space-x-2">
            <span class="pi pi-question" v-tooltip.right="'About Me'"></span>
            <span v-show="dataOpenSideBar">About Me</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Sidebar",
  data() {
    return {
      openSubMenu: null,
    };
  },
  props: {
    dataOpenSideBar: Boolean,
  },
  computed: {
    ...mapGetters(['isClient']),
    dashboardRoute() {
      return this.isClient ? '/ClientDashboard' : '/dashboard';
    },
  },
  methods: {
    toggleSubMenu(subMenu) {
      if (this.openSubMenu === subMenu) {
        this.openSubMenu = null; // Close the submenu if it's already open
      } else {
        this.openSubMenu = subMenu; // Open the submenu if it's closed
      }
    },
  },
};
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
