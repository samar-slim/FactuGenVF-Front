
import { createApp } from 'vue'; // Importez la fonction createApp depuis Vue
import App from './App.vue'; // Importez votre composant racine App.vue
import router from './router/router'; // Importez votre routeur (si applicable)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importez les styles FontAwesome
import 'primeicons/primeicons.css'; // Importez les styles PrimeIcons
import Avatar from 'primevue/avatar'; // Importez le composant Avatar de PrimeVue
import 'tailwindcss/tailwind.css'; // Importez les styles TailwindCSS
import 'primevue/resources/themes/aura-light-green/theme.css'
import VTooltip from 'v-tooltip';
import Vueform from '@vueform/vueform'
import axios from "axios";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import vueformConfig from './../vueform.config'
const app = createApp(App); // Créez une instance de votre application

// Enregistrez le composant Avatar globalement pour l'utiliser dans toute l'application
app.component('Avatar', Avatar);
app.config.globalProperties.$http = axios; 

app.use(router);
app.use(VTooltip); // Enregistrez la bibliothèque des tooltips
app.use(Vueform, vueformConfig)

// Montez votre application sur l'élément avec l'id "app" dans votre index.html
app.mount('#app');
