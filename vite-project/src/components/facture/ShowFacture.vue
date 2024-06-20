<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div class="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
    <button @click="close" class="absolute border-2xl top-4 right-4 text-red-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
      <i class="fa-regular fa-circle-xmark"></i>
    </button>
    <h1 class="text-2xl font-semibold mb-8">{{ modalTitle }} N°: {{ formFacture?.numFacture }}</h1>
      <div>
      <div id="pdf">
        <div class="bg-white rounded shadow p-6 mb-8">
          <table class="w-full border-collapse border-spacing-0">
            <tbody>
              <tr>
                <td class="w-full align-top">
                  <div>
                    <img class="w-30 h-20" :src="formFacture?.imageUrl" />
                  </div>
                </td>
                <td class="align-top">
                  <div class="text-sm">
                    <table class="border-collapse border-spacing-0">
                      <tbody>
                        <tr>
                          <td class="border-r pr-4">
                           
                            <div>
  <p class="whitespace-nowrap text-slate-400 text-right">Date d'émission</p>
  <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
    <input type="text" v-model="formFacture.date_emission" />
  </div>
  <div v-else class="whitespace-nowrap font-bold text-main text-right">
    {{ formFacture?.date_emission }}
  </div>
</div>
                            <div>
  <p class="whitespace-nowrap text-slate-400 text-right">Date d'expiration</p>
  <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
    <input type="text" v-model="formFacture.date_expiration" />
  </div>
  <div v-else class="whitespace-nowrap font-bold text-main text-right">
    {{ formFacture?.date_expiration }}
  </div>
</div>
                          </td>
                          <td class="pl-4">
  <div>
    <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
    <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
      <input type="text" v-model="formFacture.numFacture" />
    </div>
    <div v-else class="whitespace-nowrap font-bold text-main text-right">
      {{ formFacture?.numFacture }}
    </div>
  </div>
  <div>
    <p class="whitespace-nowrap text-slate-400 text-right">Invoice Titre</p>
    <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
      <input type="text" v-model="formFacture.titre" />
    </div>
    <div v-else class="whitespace-nowrap font-bold text-main text-right">
      {{ formFacture?.titre }}
    </div>
  </div>
</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>

     <div class="bg-slate-100 px-14 py-6 text-sm">
       <table class="w-full border-collapse border-spacing-0">
         <tbody>
          <tr>
                  <td class="w-1/2 align-top">
                    <div class="text-sm text-neutral-600">
                      <p class="font-bold">Supplier Company INC</p>
                      <p>Number: <span>{{ formUser?.telEntreprise }}</span></p>
                      <p>SIRET Numéro: <span>{{  formUser?.siretEntreprise }}</span></p>
                      <p>Inter: <span>{{ formFacture?.inter }}</span></p>
                      <p>deleg: <span>{{ formFacture?.deleg }}</span></p>
                      <p>email: <span>{{formUser?.emailEntreprise }}</span></p>
                    </div>
                  </td>
             <td class="w-1/2 align-top text-right">
               <div class="text-sm text-neutral-600">
                 <p class="font-bold">Customer Company</p>
                 <p >Numéro Client: {{ clientInfo?.numero }}</p>
  <span>Nom:{{ clientInfo?.civilite }} {{ clientInfo?.name }}</span>
  <p >Prénom: {{ clientInfo?.prenom }}</p>
  <p >mail: {{ clientInfo?.email }}</p>
  <p >Téléphone: {{ clientInfo?.téléphone }}</p>



               </div>
             </td>
           </tr>
         </tbody>
       </table>
     </div>

     <div class="px-14 py-10 text-sm text-neutral-700">
       <table class="w-full border-collapse border-spacing-0">
         <thead>
           <tr>
             <td class="border-b-2 border-main pb-3 pl-3 font-bold text-main">Ref</td>
             <td class="border-b-2 border-main pb-3 pl-2 font-bold text-main">Description</td>
             <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Qté</td>
             <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">unité</td>
             <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">P.U HT</td>
             <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Total(ht)</td>
             
           </tr>
         </thead>
         <tbody>
          <tr v-for="(produit, index) in formProduit" :key="index">
      <td class="border-b py-3 pl-3">#{{ produit?.reference }}</td>
      <td class="border-b py-3 pl-2">{{ produit?.description }}</td>
      <td class="border-b py-3 pl-2 text-right">{{ produit.quantity }}</td>
      <td class="border-b py-3 pl-2 text-center">{{ produit.prix_unitaire }}</td>
      <td class="border-b py-3 pl-2 text-center">{{ produit.prix }}</td>
      <td class="border-b py-3 pl-2 text-right">{{ produit.total }}</td>
    </tr>
           <tr>
             <td colspan="7">
               <table class="w-full border-collapse border-spacing-0">
                 <tbody>
                   <tr>
                     <td class="w-full"></td>
                     <td>
                       <table class="w-full border-collapse border-spacing-0">
                         <tbody>
                           <tr>
                             <td class="border-b p-3">
                               <div class="whitespace-nowrap text-slate-400">Net total:</div>
                             </td>
                             <td class="border-b p-3 text-right">
                               <div class="whitespace-nowrap font-bold text-main"> {{formFacture?.totalTTC}}</div>
                             </td>
                           </tr>
                           <tr>
                             <td class="p-3">
                               <div class="whitespace-nowrap text-slate-400">VAT total:</div>
                             </td>
                             <td class="p-3 text-right">
                               <div class="whitespace-nowrap font-bold text-main">{{formFacture?.totalHT}}</div>
                             </td>
                           </tr>
                           <tr>
                             <td class="bg-main p-3">
                               <div class="whitespace-nowrap font-bold text-white">Total:</div>
                             </td>
                             <td class="bg-main p-3 text-right">
                               <div class="whitespace-nowrap font-bold text-white">{{formFacture?.totalTTC}}</div>
                             </td>
                           </tr>
                         </tbody>
                       </table>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </td>
           </tr>
         </tbody>
       </table>
     </div>

     <div class="px-14 text-sm text-neutral-700">
       <p class="text-main font-bold">PAYMENT DETAILS</p>
      <p>{{ formFacture?.condition}}</p>
     </div>

     <div class="px-14 py-10 text-sm text-neutral-700">
       <p class="text-main font-bold">Notes</p>
       <p class="italic">{{formFacture?.remarque}}</p>
       </div>

       <footer class="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
         Supplier Company
         <span class="text-slate-300 px-2">|</span>
         info@company.com
         <span class="text-slate-300 px-2">|</span>
         +1-202-555-0106 
       </footer>
     </div>
     <button @click="toggleEditMode" class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
     <button @click="cancelFacture(formFacture._id) " type="button" class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
 Annuler
</button>
<button type="submit"  class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
  enovoyer  <i class="pi pi-send"></i>
</button>

<button @click="exportToPDF" class="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          <i class="fa-solid fa-download"></i>
        </button>
<button @click="close" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800">Close</button>




     </div>
     </div>
     
 


</template>
<script>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import html2pdf from 'html2pdf.js/dist/html2pdf';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

export default {
props: ['id', 'modalTitle', 'buttonText', 'closeButtonText'],
setup(props, { emit }) {
  const formFacture = ref(null);
  const formUser = ref(null);
  const formProduit = ref(null);
  const clientInfo = ref(null);
  const produitInfo = ref(null);
  const modalTitle = ref(props.modalTitle);
  const router = useRouter();
  const isOpen = ref(true);
  const isEditing = ref(false);

  const exportToPDF = () => {
      const options = {
        margin: 1,
        filename: "facture.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf().set(options).from(document.getElementById("pdf")).save();
    };

 
  const cancelFacture = async (id) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/facture/cancel/${id}`);
    console.log("Facture annulée avec succès:", response.data);

    // Recharger les listes des factures et des avoirs
    await this.loadAvoirs();
    await this.FactureLoad();
    this.$router.push('/user/Avoir');

  } catch (error) {
    console.error("Erreur lors de l'annulation de la facture:", error);
    alert("Une erreur est survenue lors de l'annulation de la facture. Veuillez réessayer.");
  }
};
const toggleEditMode = async () => {
    if (isEditing.value) {
      await saveChanges(); // Sauvegarde des données lorsque l'édition est désactivée
    }
    isEditing.value = !isEditing.value; // Inversion de la valeur
  };
  const saveChanges = async () => {
    const toast = useToast();
  try {
    // Préparer les données du devis à envoyer au backend
    const updatedFactureData = {
      facture: {
        date_emission: formFacture.value.date_emission,
        date_expiration: formFacture.value.date_expiration,
        numFacture: formFacture.value.numFacture,
        titre: formFacture.value.titre,
        // Ajouter d'autres champs du devis si nécessaire
      }
    };

    // Envoyer les données mises à jour du devis au backend
    await axios.put(`http://localhost:8080/api/facture/${props.id}`, updatedFactureData);
    toast.success('Facture mis à jour avec succès');
    // Émettre un événement pour indiquer que l'édition est terminée
    emit('close');
  } catch (error) {
    toast.error("Erreur lors de la mise à jour du Facture:", error);
    // Gérer les erreurs ici, par exemple afficher un message d'erreur à l'utilisateur
  }
};




  const getProduitInfo = async (produitId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/produits/${produitId}`);
      produitInfo.value = response.data;
      console.log('Informations du produit:', response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des informations du produit:", error);
    }
  };
  
 const loadAvoirs = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/avoirs');
    this.avoirs = response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des avoirs:', error);
  }
}

const FactureLoad = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/factures');
    this.factures = response.data;
  } catch (error) {
    console.error('Erreur lors du chargement des factures:', error);
  }
};
  const getFactureById = async (id) => {
try {
  const response = await axios.get(`http://localhost:8080/api/facture/showFacture/${id}`);
  formFacture.value = response.data.facture;
  formProduit.value = response.data.produitsSelectionnes;
  console.log('rrr',formFacture.value)

  for (const produit of formProduit.value) {
    console.log("Nom de l'article :", produit.nom_article);
    console.log("Référence :", produit.reference);
    console.log("Prix unitaire :", produit.prix_unitaire);
    console.log("Quantité :", produit.quantity);
  }

  await getClientInfo(formFacture.value.clientId);
  await getUserById(formFacture.value.userId);
} catch (error) {
  console.error("Erreur lors de la récupération du devis:", error);
}
};

const getUserById = async (userId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/users/${userId}`);
    formUser.value = response.data;
    console.log('formuser', response.data)
  } catch (error) {
    console.error("Erreur lors de la récupération du user:", error);
  }
};
 

  

  const getClientInfo = async (clientId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/client/${clientId}`);
      clientInfo.value = response.data;
      console.log('Informations du client:', response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des informations du client:", error);
    }
  };

  const close = () => {
    emit('close');
    isOpen.value = false;
  };

  onMounted(() => {
    getFactureById(props.id);
  });

  watch(formFacture, (newValue) => {
    if (newValue) {
      const produitId = newValue.produitId;
      getProduitInfo(produitId);
    }
  });

  return {
    formFacture,
    formProduit,
    formUser,
    clientInfo,
    produitInfo,
    modalTitle,
    exportToPDF,
    close,
    isEditing,
    toggleEditMode,

    isOpen,
    cancelFacture,
    loadAvoirs,
    FactureLoad
  };
},
};
</script>
