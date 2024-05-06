import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Client from '../components/client/Client.vue';
import ListeClient from '../components/client/ListeClient.vue';
import master from '../components/pages/layout/master.vue'
import ListeFacture from '../components/facture/ListeFacture.vue'
import Facture from '../components/facture/Facture.vue'
import Devis from '../components/devis/Devis.vue'
import Setting from '../components/profil/Setting.vue'
import Dashbord from '../components/dashbord/Dashbord.vue'
import Calendrier from '../components/Calendrier.vue'
import NewDevis from '../components/devis/NewDevis.vue'
import ListeDevis from '../components/devis/ListeDevis.vue'
import Produit  from '../components/produit/Produit.vue'
import digitalisation from '../components/digitalisation.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'master',
      component: Dashbord
    },
    {
      path: '/ListeDevis',
      name: 'ListeDevis',
      component: ListeDevis
    },
    
    {
      path: '/newDevis',
      name: 'NewDevis',
      component: NewDevis
    },
    {
      path: '/produit',
      name: 'Produit',
      component: Produit
    },
    {
      path: '/dashbord',
      name: 'Dashbord',
      component: Dashbord
    },
    {
      path: '/calendrier',
      name: 'Calendrier',
      component: Calendrier
    },
   
    {
      path: '/client',
      name: 'Client',
      component: Client
    },
    {
      path: '/facture',
      name: 'Facture',
      component: Facture
    },
    {
      path: '/devis',
      name: 'Devis',
      component: Devis
    },
    {
      path: '/ListeClient',
      name: 'ListeClient',
      component: ListeClient
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/ListeFacture',
      name: 'ListeFacture',
      component: ListeFacture
    },
    {
      path: '/Digitalisation',
      name: 'Digitalisation',
      component: digitalisation
    },
    
    
   
  ]
});

export default router;




