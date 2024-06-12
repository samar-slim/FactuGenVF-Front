import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import resetPassword from '../views/ResetPassword.vue';
import Client from '../components/client/Client.vue';
import ListeClient from '../components/client/ListeClient.vue';
import master from '../components/pages/layout/master.vue'
import ListeFacture from '../components/facture/ListeFacture.vue'
import Facture from '../components/facture/Facture.vue'
import Devis from '../components/devis/Devis.vue'
import ListeDevis from '../components/devis/ListeDevis.vue'
import Reclamation from '../components/reclamation/Reclamation.vue';
//import Setting from '../components/global/profilesettings.vue'
import Setting from '../components/profil/Setting.vue'
import Dashbord from '../components/dashbord/Dashbord.vue'
import Calendrier from '../components/Calendrier.vue'
import NewDevis from '../components/devis/NewDevis.vue'
//import ListeDevis from '../components/devis/ListeDevis.vue'
import ProduitArt  from '../components/Article/Produit.vue'
import ShowDevis from '../components/devis/ShowDevis.vue'
import UserCard from '../components/profil/UserCard.vue'
import NewFacture from '../components/facture/NewFacture.vue'
import Produit  from '../components/produit/Produit.vue'
import digitalisation from '../components/digitalisation.vue'
import GestionArticle from '../components/Article/Article.vue'
import ListeProduit from '../components/Article/ListeProduit.vue'
import Suivie from '../components/Suivie/Suivie.vue';
import MainDouvre from '../components/Article/MainDouvre.vue';
import ListeTraveau   from '../components/Article/Traveaux.vue';
import Avoir from '../components/Avoir/Avoir.vue';
import ShowFacture from '../components/facture/ShowFacture.vue'
import adminDashboard from '../admin/dashboard.vue'
import listeUsers from '../admin/listeUsers.vue';
import listeReclamation from '../admin/listeReclamation.vue';
import backup from '../admin/backup.vue';
import showDevis from '../components/devis/ShowDevis.vue';
import profilesettings from '../components/profil/Setting.vue';
import AIPage from '../components/global/AIPage.vue';
import EntrepiseInfo from '../views/EntrepriseInfo.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/admin',

      children:[
        { path: 'dashboard', component: adminDashboard },
        { path: 'listeUsers', component: listeUsers},
        { path: 'listeReclamation', component: listeReclamation},
        { path: 'backup', component: backup},
        { path: 'NewDevis', component: NewDevis },
        { path: 'ListeDevis', component: ListeDevis },
        { path: 'produit', component: Produit},
        { path: 'calendrier', component: Calendrier},
        { path: 'client', component: Client },
        { path: 'setting', component: Setting},
        { path: 'ListeFacture' ,  component: ListeFacture},
        { path: 'Digitalisation',  component: digitalisation},
        { path: 'showDevis',  component: showDevis},       
        { path: 'setting',   component: Setting},
        { path: 'facture',  component: Facture},
        { path: 'ListeClient', component:ListeClient },
        { path: 'Devis',  component: Devis}, 
        { path: 'setting',   component: Setting },
        { path: 'Avoir', component: Avoir},
        
      ]

    },
    ,
    {path: '/user',

      children:[
        { path: 'dashboard', component: Dashbord },
        { path: 'NewDevis', component: NewDevis },
        { path: 'produit', component: Produit},
        { path: 'calendrier', component: Calendrier},
        { path: 'client', component: Client },
        { path: 'setting', component: Setting},
        { path: 'ListeFacture' ,  component: ListeFacture},
        { path: 'Digitalisation',  component: digitalisation},
        { path: 'showDevis',   component: showDevis},       
        { path: 'facture',component: Facture},
        { path: 'ListeClient', component:ListeClient },
        { path: 'Devis',  component: Devis}, 
        { path: 'reclamation',  component: Reclamation},
        { path: 'Profilesettigns',  component: profilesettings},
        { path: 'newDevis', component: NewDevis },
        { path: 'Avoir', component: Avoir},
        { path: 'ListeDevis', component: ListeDevis },
        { path: 'newFacture', component: NewFacture },
        { path: 'ListeMainDouvre', component: MainDouvre },
        { path: 'ListeTraveau', component: ListeTraveau },
        { path: 'ListeProduit', component: ListeProduit },
        { path: 'ListeArticle', component: GestionArticle },
        { path: 'showFacture/:id', component: ShowFacture },
        { path: 'suivie', component: Suivie },
        { path: 'Entreprise', component: EntrepiseInfo},
      ]

    },

    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/produitArt',
      name: 'Produit',
      component:ProduitArt
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
    {
      path: '/Digitalisation',
      name: 'digitalisation',
      component: digitalisation
    },
    {
      path: '/showDevis',
      name: 'showDevis',
      component: showDevis
    },
    {
      path: '/',
      name: 'home',
      component: Home
    } ,
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/forgetpassword',
      name: 'forget',
      component: ForgetPassword,
    },
    {
      path: '/listeUsers',
      name: 'Users',
      component: listeUsers,
    },
    {
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: adminDashboard,
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword,
    },
    {
      path: '/aiPage',
      name: 'ai',
      component: AIPage,
    }
   
  ]
});

export default router;

