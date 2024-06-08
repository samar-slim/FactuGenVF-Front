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
import Produit  from '../components/Article/Produit.vue'
import ShowDevis from '../components/devis/ShowDevis.vue'
import UserCard from '../components/profil/UserCard.vue'
import NewFacture from '../components/facture/NewFacture.vue'
import digitalisation from '../components/digitalisation.vue'
import GestionArticle from '../components/Article/Article.vue'
import ListeProduit from '../components/Article/ListeProduit.vue'
import Suivie from '../components/Suivie/Suivie.vue';
import MainDouvre from '../components/Article/MainDouvre.vue';
import ListeTraveau   from '../components/Article/Traveaux.vue';
import Avoir from '../components/Avoir/Avoir.vue';
import ShowFacture from '../components/facture/ShowFacture.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'master',
      component: master
    },
    {
      path: '/ListeProduit',
      name: 'ListeProduit',
      component: ListeProduit
    },
    {
      path: '/profil1',
      name: 'UseCard',
      component: UserCard
    },
    {
      path: '/suivie',
      name: 'suivie',
      component: Suivie
    },
    {
      path: '/gestionArticle',
      name: 'GestionArticle',
      component: GestionArticle
    },
    {
      path: '/Digitalisation',
      name: 'digitalisation',
      component: digitalisation
    },
    {
      path: '/ListeDevis',
      name: 'ListeDevis',
      component: ListeDevis
    },
    {
      path: '/show/:id',
      name: 'ShowDevis',
      component: ShowDevis,
      props: true
    },
    {
      path: '/showfacture/:id',
      name: 'ShowFactuure',
      component: ShowFacture,
      props: true
    },
    
    {
      path: '/newDevis',
      name: 'NewDevis',
      component: NewDevis
    },
    {
      path: '/newFacture',
      name: 'NewFacture',
      component: NewFacture
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
      path: '/produit',
      name: 'Produit',
      component:Produit
    },
    {
      path: '/ListeMainDouvre',
      name: ' MainDouvre',
      component: MainDouvre
    },
    {
      path: '/ListeTraveau',
      name: ' ListeTraveau',
      component: ListeTraveau
    },
    {
      path: '/Avoir',
      name: ' Avoir',
      component: Avoir
    },
   
   
   
   
  ]
});

export default router;




