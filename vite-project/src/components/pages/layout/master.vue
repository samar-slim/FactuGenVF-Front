
<template>
  
  <div class="w-full h-full flex">
   <!--  <Sidebar v-if="getIsLogedIn" :dataOpenSideBar="openSidebar" 
    :showClientInterface="openClientInterface" 
    :showListeClientInterface="openListeClientInterface" 
    :showListeFactureInterface="openListeFactureInterface"
    :showLFactureInterface="openFactureInterface"
    :showDevisInterface="openDevisInterface"

    /> -->
    <Sidebar  :dataOpenSideBar="openSidebar" 
    :showClientInterface="openClientInterface" 
    :showListeClientInterface="openListeClientInterface" 
    :showListeFactureInterface="openListeFactureInterface"
    :showLFactureInterface="openFactureInterface"
    :showDevisInterface="openDevisInterface"

    />
    <adminSidebar  :dataOpenSideBar="openAdminSidebar" 
    :showClientInterface="openClientInterface" 
    :showListeClientInterface="openListeClientInterface" 
    :showListeFactureInterface="openListeFactureInterface"
    :showLFactureInterface="openFactureInterface"
    :showDevisInterface="openDevisInterface"

    />
    
    
    <Facture v-if="showFacture"/>
    
    <ListeClient  v-if="showListeClient" />
    <ListeFacture v-if="showListeFacture" />
    <Devis v-if="showDevis"/>
    
    <div class="w-full h-full">
      <!-- <AppHeader v-if="getIsLogedIn" :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
      <LandingHeader v-else />
      <AppHeader :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" /> -->
      <adminHeader :dataOpenSideBar="openAdminSidebar" :clickHambuger="toggleAdminSidebar" />
      <div class="w-full h-[calc(100vh-50px)]">
     
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script >

import AppHeader from './../../global/AppHeader.vue'
import adminHeader from './../../global/adminHeader.vue'
import Sidebar from './../../global/Sidebar.vue'
import adminSidebar from './../../global/adminSidebar.vue'
import Client from '../../client/Client.vue'
import ListeClient from '../../client/ListeClient.vue'
import ListeFacture from '../../facture/ListeFacture.vue'
import Facture from '../../facture/Facture.vue'
import Devis from '../../devis/Devis.vue'
import LandingHeader from './../../global/LandingHeader.vue'
import store from '../../../store.js';
import { mapGetters} from 'vuex'; 





export default {
  components:{AppHeader, Sidebar, Client, ListeClient, ListeFacture, Facture, Devis, LandingHeader, adminSidebar, adminHeader},
  computed: {
        ...mapGetters(['getCount','getIsLogedIn'])
    },
  
  data() {
    return {
      openSidebar: false,
      openAdminSidebar: false,
      showClient: false,
      showListeClient : false,
      showListeFacture : false,
      showFacture : false,
      showDevis : false,
      clinetPage: false,
      Login :{
        isLogedIn : false ,
        token: null,
        session: null,
      }
    }
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar
    },
    toggleAdminSidebar() {
      this.openAdminSidebar = !this.openAdminSidebar
    },
  openClientInterface() {
    this.showClient = false;
  },
  openListeClientInterface() {
    this.showListeClient = false;
  },
  openListeFactureInterface() {
      this.showListeFacture = false;
  },
  openFactureInterface() {
      this.showFacture = false;
  },
  openDevisInterface() {
      this.Devis = false;
  }


 

},
  

}
</script>

<style>

</style>


