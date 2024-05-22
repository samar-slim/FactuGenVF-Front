import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import ForgetPassword from '../views/ForgetPassword.vue';
import ResetPrassword from '../views/ResetPassword.vue';
import Client from '../components/client/Client.vue';
import ListeClient from '../components/client/ListeClient.vue';
import master from '../components/pages/layout/master.vue'
import ListeFacture from '../components/facture/ListeFacture.vue'
import Facture from '../components/facture/Facture.vue'
import Devis from '../components/devis/Devis.vue'
import Reclamation from '../components/reclamation/Reclamation.vue';
import Setting from '../components/profil/Setting.vue'
import Dashbord from '../components/dashbord/Dashbord.vue'
import Calendrier from '../components/Calendrier.vue'
import NewDevis from '../components/devis/NewDevis.vue'
import ListeDevis from '../components/devis/ListeDevis.vue'
import Produit  from '../components/produit/Produit.vue'
import digitalisation from '../components/digitalisation.vue'
import showDevis from '../components/devis/ShowDevis.vue'
import listeUsers from '../admin/listeUsers.vue'
import listeReclamation from '../admin/listeReclamation.vue';
import backup from '../admin/backup.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/Dashbord',
      name: 'master',
      component: Dashbord
    },
    {
      path: '/ListeDevis',
      name: 'ListeDevis',
      component: ListeDevis
    },
    {
      path: '/ListeReclamation',
      name: 'ListeReclamation',
      component: listeReclamation
    },{
      path: '/backup',
      name: 'backup',
      component: backup
    },
   /*  {
      path: '/show/:id',
      name: 'ShowDevis',
      component: ShowDevis,
      props: true
    }, */
    
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
      path: '/Reclamation',
      name: 'Reclamation',
      component: Reclamation
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
    }
    
   
  ]
});

export default router;




