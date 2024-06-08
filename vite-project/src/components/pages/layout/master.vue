<template>
  <div class="w-full h-full flex">
    <Sidebar :dataOpenSideBar="openSidebar" 
    :showClientInterface="openClientInterface" 
    :showListeClientInterface="openListeClientInterface" 
    :showListeFactureInterface="openListeFactureInterface"
    :showLFactureInterface="openFactureInterface"
    :showDevisInterface="openDevisInterface"
    :showArticleInterface=" openInterfaceArticle"

    />
    
    <Facture v-if="showFacture"/>
    <Client v-if="showClient"/>
    <ListeClient  v-if="showListeClient" />
    <ListeFacture v-if="showListeFacture" />
    <Devis v-if="showDevis"/>
    
    <div class="w-full h-full">
      <AppHeader :dataOpenSideBar="openSidebar" :clickHambuger="toggleSidebar" />
      <div class="w-full h-[calc(100vh-50px)]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

import AppHeader from './../../global/AppHeader.vue'
import Sidebar from './../../global/Sidebar.vue'
import Client from '../../client/Client.vue'
import ListeClient from '../../client/ListeClient.vue'
import ListeFacture from '../../facture/ListeFacture.vue'
import Facture from '../../facture/Facture.vue'
import Devis from '../../devis/Devis.vue'
export default {
  components: { AppHeader, Sidebar ,Client,ListeClient , ListeFacture ,Devis,Facture},
  data() {
    return {
      openSidebar: true,
      showClient: false,
    showListeClient : false,
    showListeFacture : false,
    showFacture : false,
    showDevis : false,
    showArticleInterface : false,
    }
  },
  methods: {
    toggleSidebar() {
      this.openSidebar = !this.openSidebar
    }
    ,openClientInterface() {
    this.showClient = true;
  },
  openListeClientInterface() {
    this.showListeClient = true;
},
openListeFactureInterface() {
    this.showListeFacture = true;
},
openFactureInterface() {
    this.showFacture = true;
},
openDevisInterface() {
    this.Devis = true;
},
openInterfaceArticle () {
    this.showArticleInterface = true;
},

 

},
  

}
</script>

<style>

</style>


