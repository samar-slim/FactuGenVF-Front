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
import adminDashboard from '../admin/dashboard.vue';
import CategorieListe  from '../components/Article/CategorieListe.vue';
import listeUsers from '../admin/listeUsers.vue';
import listeReclamation from '../admin/listeReclamation.vue';
import backup from '../admin/backup.vue';
import showDevis from '../components/devis/ShowDevis.vue';
import profilesettings from '../components/profil/Setting.vue';
import AIPage from '../components/global/AIPage.vue';
import PerFacture from '../components/facture/perFacture.vue';
import ClientDevis from '../clientInterfaces/clientDevis.vue';
import ClientFacture from '../clientInterfaces/clientFacture.vue';
import ClientShowDevis from '../clientInterfaces/showDevis.vue';
import ClientShowFacture from '../clientInterfaces/ShowFactureClient.vue';
import HomeClient from '../clientInterfaces/HomeClient.vue';
import EntrepiseInfo from '../views/EntrepriseInfo.vue'
import { authGuardAdmin, authGuardUser, authGuard, checkAuth } from './auth.js';
import NotFound from '../components/notFound.vue'


const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {  
      path: '/client', 
      beforeEnter: [authGuard],
      children:[
        { path: 'home', component: HomeClient },
        { path: 'ClientDevis', component: ClientDevis },
        { path: 'ClientFacture', component: ClientFacture },
        { path: 'ClientShowDevis', component: ClientShowDevis },
        { path: 'ClientShowFacture', component: ClientShowFacture },
      ]
     },
    {path: '/admin',

      beforeEnter: [authGuardAdmin],

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

      beforeEnter: [authGuardUser],

      children:[
        { path: 'dashboard', component: Dashbord },
        { path: 'NewDevis', component: NewDevis },
        { path: 'produit', component: Produit},
        { path: 'calendrier', component: Calendrier},
        { path: 'client', component: Client },
        { path: 'setting', component: Setting},
        { path: 'ListeFacture' ,  component: ListeFacture},
        { path: 'Digitalisation',  component: digitalisation},
        { path: 'showDevis/:id',   component: showDevis},       
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
        { path: 'CategorieListe', component: CategorieListe },
        { path: 'showFacture/:id', component: ShowFacture },
        { path: 'suivie', component: Suivie },
        { path: 'personnaliseFacture', component: PerFacture, props: {Facture: true }},
        { path: 'Entreprise', component: EntrepiseInfo},

      ]

    },

    {
      path: '/',
      name: 'Home',
      component: Home
    },

    
    {
      path: '/produitArt',
      name: 'Produit',
      component:ProduitArt
    },
   
    {
      path: '/',
      name: 'home',
      component: Home
    } ,
    {
      path: '/login',
      name: 'login',
      beforeEnter: [checkAuth],
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
      path: '/adminDashboard',
      name: 'adminDashboard',
      component: adminDashboard,
    },
    {
      path: '/resetPassword/:token',
      name: 'resetPassword',
      component: resetPassword,
    },
    {
      path: "/:catchAll(.*)",
      name : 'Not-Found',
      component : NotFound
    }
   
  ]
});

export default router;

