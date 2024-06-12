<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
      <button @click="close" class="absolute top-4 right-4 text-red-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
      <h1 class="text-2xl font-semibold mb-8">{{ modalTitle }} N°: {{ formDevis?.numDevis }}</h1>
      <div>
      <div id="pdf">
        <div class="bg-white rounded shadow p-6 mb-8">
          <table class="w-full border-collapse border-spacing-0">
            <tbody>
              <tr>
                <td class="w-full align-top">
                  <div>
                    <img class="w-30 h-20" :src="formDevis?.imageUrl" />
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
    <input type="text" v-model="formDevis.date_emission" />
  </div>
  <div v-else class="whitespace-nowrap font-bold text-main text-right">
    {{ formDevis?.date_emission }}
  </div>
</div>
                            <div>
  <p class="whitespace-nowrap text-slate-400 text-right">Date d'expiration</p>
  <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
    <input type="text" v-model="formDevis.date_expiration" />
  </div>
  <div v-else class="whitespace-nowrap font-bold text-main text-right">
    {{ formDevis?.date_expiration }}
  </div>
</div>
                          </td>
                          <td class="pl-4">
  <div>
    <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
    <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
      <input type="text" v-model="formDevis.numDevis" />
    </div>
    <div v-else class="whitespace-nowrap font-bold text-main text-right">
      {{ formDevis?.numDevis }}
    </div>
  </div>
  <div>
    <p class="whitespace-nowrap text-slate-400 text-right">Invoice Titre</p>
    <div v-if="isEditing" class="whitespace-nowrap font-bold text-main text-right">
      <input type="text" v-model="formDevis.titre" />
    </div>
    <div v-else class="whitespace-nowrap font-bold text-main text-right">
      {{ formDevis?.titre }}
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

        <div class="bg-slate-100 px-14 py-6 text-sm">
          <table class="w-full border-collapse border-spacing-0">
            <tbody>
              <tr>
                <td class="w-1/2 align-top">
                  <div class="text-sm text-neutral-600">
                    <p class="font-bold">Supplier Company INC</p>
                    <p>Number: <span>{{ formDevis?.num }}</span></p>
                    <p>SIRET Numéro: <span>{{ formDevis?.num_siret }}</span></p>
                    <p>Inter: <span>{{ formDevis?.inter }}</span></p>
                    <p>deleg: <span>{{ formDevis?.deleg }}</span></p>
                    <p>email: <span>{{ formDevis?.email }}</span></p>
                  </div>
                </td>
                <td class="w-1/2 align-top text-right">
                  <div class="text-sm text-neutral-600">
                    <p class="font-bold">Customer Company</p>
                    <p>Numéro Client: {{ clientInfo?.numero }}</p>
                    <span>Nom: {{ formDevis?.clientInfo?.civilite }} {{ clientInfo?.name }}</span>
                    <p>Prénom: {{ clientInfo?.prenom }}</p>
                    <p>mail: {{ clientInfo?.email }}</p>
                    <p>Téléphone: {{ clientInfo?.téléphone }}</p>
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
                <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Unité</td>
                <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">P.U HT</td>
                <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Total (HT)</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(produit, index) in formProduit" :key="index">
                <td class="border-b py-3 pl-3">#{{ produit?.reference }}</td>
                <td class="border-b py-3 pl-2">{{ produit?.description }}</td>
                <td class="border-b py-3 pl-2 text-right">
                  <div >
                    <input type="number" v-model="produit.quantity" />
                  </div>
                  <div >{{ produit.quantity }}</div>
                </td>
                <td class="border-b py-3 pl-2 text-center">
                  <div >
                    <input type="text" v-model="produit.prix_unitaire" />
                  </div>
                  <div >{{ produit.prix_unitaire }}</div>
                </td>
                <td class="border-b py-3 pl-2 text-center">
                  <div>
                    <input type="text" v-model="produit.prix" />
                  </div>
                  <div >{{ produit.prix }}</div>
                </td>
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
                                  <div class="whitespace-nowrap font-bold text-main"></div>
                                </td>
                              </tr>
                              <tr>
                                <td class="p-3">
                                  <div class="whitespace-nowrap text-slate-400">VAT total:</div>
                                </td>
                                <td class="p-3 text-right">
                                  <div class="whitespace-nowrap font-bold text-main">$64.00</div>
                                </td>
                              </tr>
                              <tr>
                                <td class="bg-main p-3">
                                  <div class="whitespace-nowrap font-bold text-white">Total:</div>
                                </td>
                                <td class="bg-main p-3 text-right">
                                  <div class="whitespace-nowrap font-bold text-white">$384.00</div>
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
          <p>{{ formDevis?.condition }}</p>
        </div>

        <div class="px-14 py-10 text-sm text-neutral-700">
          <p class="text-main font-bold">Notes</p>
          <p class="italic">{{ formDevis?.remarque }}</p>
         
        
        </div>
        
        <footer class="bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
          Supplier Company
          <span class="text-slate-300 px-2">|</span>
          info@company.com
          <span class="text-slate-300 px-2">|</span>
          +1-202-555-0106
        </footer>
      </div>
    </div>
      <div class="mt-4">
        <button @click="toggleEditMode" class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          {{ isEditing ? 'Save' : 'Edit' }}
        </button>
        <button @click="generateDocument('facture')" class="mr-2 px-16 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          {{ buttonText }}
        </button>
        <button @click="exportToPDF" class="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          <i class="fa-solid fa-download"></i>
        </button>
        <button @click="close" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { ref, onMounted, watch } from 'vue';
import html2pdf from 'html2pdf.js/dist/html2pdf';
import { useRouter } from 'vue-router';

export default {
  props: ['id', 'modalTitle', 'buttonText', 'closeButtonText'],
  setup(props, { emit }) {
    const formDevis = ref(null);
    const formProduit = ref(null);
    const clientInfo = ref(null);
    const produitInfo = ref(null);
    const modalTitle = ref(props.modalTitle);
    const router = useRouter();
    const isOpen = ref(true);
    const isEditing = ref(false);

    const exportToPDF = () => {
      html2pdf(document.getElementById("pdf"), {
        margin: 1,
        filename: "devis.pdf",
      });
    };
    const generateDocument = async (type) => {
      if (type === 'devis') {
        modalTitle.value = 'Devis';
        sessionStorage.setItem('keepModalOpen', 'true');
        sessionStorage.setItem('currentDevisId', props.id);
        console.log('Redirection vers Listedevis avec modal ouvert');
        await redirectToListeDevis();
      } else if (type === 'facture') {
        modalTitle.value = 'Facture';
        sessionStorage.setItem('keepModalOpen', 'true');
        sessionStorage.setItem('currentDevisId', props.id);
        console.log('Redirection vers ListeFacture avec modal ouvert');
        await createAndRedirectToFacture();
      }
    };
    const createAndRedirectToFacture = async () => {
      try {
        const devisInfo = await axios.get(`http://localhost:8080/api/devis/showDevis/${props.id}`);
        const factdata = {
          nom_entreprise: devisInfo.data.devis.nom_entreprise,
          num: devisInfo.data.devis.num,
          code_postal: devisInfo.data.devis.code_postal,
          ville: devisInfo.data.devis.ville,
          email: devisInfo.data.devis.email,
          num_tel: devisInfo.data.devis.num_tel,
          num_siret: devisInfo.data.devis.num_siret,
          num_tva: devisInfo.data.devis.num_tva,
          inter: devisInfo.data.devis.inter,
          deleg: devisInfo.data.devis.deleg,
          titre: devisInfo.data.devis.titre,
          numfacture: devisInfo.data.devis.numDevis,
          remarque: devisInfo.data.devis.remarque,
          remise: devisInfo.data.devis.remise,
          condition: devisInfo.data.devis.condition,
          paiement: devisInfo.data.devis.paiement,
          clientId: devisInfo.data.devis.clientId,
          produitId: devisInfo.data.devis.produitId,
          totalHT: devisInfo.data.devis.totalHT,
          totalTTC: devisInfo.data.devis.totalTTC,
          imageUrl: devisInfo.data.devis.imageUrl,
          date_expiration: devisInfo.data.devis.date_expiration,
          date_emission: devisInfo.data.devis.date_emission,
        };

        const response = await axios.post('http://localhost:8080/api/facture/add', {
          facture: factdata,
          produitsSelectionnes: devisInfo.data.produitsSelectionnes,
        });

        console.log("Facture créée avec succès:", response.data);
        const fact = response.data.facture._id;
        sessionStorage.setItem('currentFactureId', fact);
        // Stocker l'ID de la nouvelle facture dans session storage pour ouvrir le modal
        await redirectToListeFacture(fact);
      } catch (error) {
        console.error("Erreur lors de la création de la facture à partir du devis:", error);
      }
    };


    const saveDataDevis = async () => {
      try {
        await axios.put(`http://localhost:8080/api/devis/${props.id}`, formDevis.value);
        emit('close');
      } catch (error) {
        console.error("Erreur lors de la mise à jour du devis:", error);
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

   

    const redirectToListeDevis = async () => {
      try {
        await router.push('/user/Listedevis');
      } catch (error) {
        console.error("Erreur lors de la redirection vers ListeFacture :", error);
      }
    };
    const redirectToListeFacture = async (fact) => {
      try {
        await router.push('/user/ListeFacture');
      } catch (error) {
        console.error("Erreur lors de la redirection vers ListeFacture :", error);
      }
    };

    const getDevisById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/devis/showDevis/${id}`);
    formDevis.value = response.data.devis;
    formProduit.value = response.data.produitsSelectionnes;

    for (const produit of formProduit.value) {
      console.log("Nom de l'article :", produit.nom_article);
      console.log("Référence :", produit.reference);
      console.log("Prix unitaire :", produit.prix_unitaire);
      console.log("Quantité :", produit.quantity);
    }

    await getClientInfo(formDevis.value.clientId);
  } catch (error) {
    console.error("Erreur lors de la récupération du devis:", error);
  }
};
const toggleEditMode = async () => {
    if (isEditing.value) {
      await saveChanges(); // Sauvegarde des données lorsque l'édition est désactivée
    }
    isEditing.value = !isEditing.value; // Inversion de la valeur
  };
 
  const saveChanges = async () => {
  try {
    await axios.put(`http://localhost:8080/api/devis/${props.id}`, formDevis.value);
    // Mettre à jour les données du produit
    for (const produit of formProduit.value) {
      await axios.put(`http://localhost:8080/api/produits/${produit.id}`, produit);
    }
    emit('close');
  } catch (error) {
    console.error("Erreur lors de la mise à jour du devis et des produits:", error);
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
      getDevisById(props.id);
    });

    watch(formDevis, (newValue) => {
      if (newValue) {
        const produitId = newValue.produitId;
        getProduitInfo(produitId);
      }
    });
 
    return {
      formDevis,
      formProduit,
      clientInfo,
      produitInfo,
      modalTitle,
      exportToPDF,
      close,
      saveDataDevis,
      generateDocument,
      isOpen,
      isEditing,
      saveChanges,
      toggleEditMode
    };
  },
};
</script>
