<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <button @click="close" class="absolute border-2xl top-4 right-4 text-red-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <h1 class="text-2xl font-semibold mb-8">Facture N°: {{ formFacture?.numDevis }}</h1>
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
                                <span class="whitespace-nowrap font-bold text-main text-right">{{formFacture?.date_emission}}</span>
                              </div>
                              <div>
                                <p class="whitespace-nowrap text-slate-400 text-right">Date d'expiration</p>
                                <span class="whitespace-nowrap font-bold text-main text-right">{{formFacture?.date_expiration}}</span>
                              </div>
                            </td>
                            <td class="pl-4">
                              <div>
                                <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                                <span class="whitespace-nowrap font-bold text-main text-right">{{ formFacture?.numDevis}}</span>
                              </div>
                              <div>
                                <p class="whitespace-nowrap text-slate-400 text-right">Invoice Titre</p>
                                <span class="whitespace-nowrap font-bold text-main text-right">{{ formFacture?.titre}}</span>
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
                      <p>Number:<span>{{formFacture?.num }}</span></p>
                      <p>SIRET Numéro: <span>{{formFacture?.num_siret }}</span></p>
                      <p>Inter:<span>{{formFacture?.inter}}</span></p>
                      <p>deleg  :<span>{{formFacture?.deleg}}</span></p>
                      <p>email  :<span>{{formFacture?.email}}</span></p>
                    </div>
                  </td>
                  <td class="w-1/2 align-top text-right">
                    <div class="text-sm text-neutral-600">
                      <p class="font-bold">Customer Company</p>
                      <p>Numéro Client: {{ clientInfo?.numero }}</p>
                      <span>Nom:{{ formFacture?.clientInfo?.civilite }} {{ clientInfo?.name }}</span>
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
                                <tr>
                                    <td class="bg-main p-3">
                                    <div class="whitespace-nowrap font-bold text-white">Signature</div>
                                  </td>
                                  <td class="w-full align-top">
                                    <div>
                      <template v-if="formFacture?.signatureUrl">
                        <img class="w-40 h-30" :src="`/uploads/${formFacture.signatureUrl.split('/').pop()}?${Date.now()}`" />
                      </template>
                      <template v-else>
                        <span>N'est pas signé</span>
                      </template>
                    </div>
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
        <button @click="SignerFacture" type="submit" class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          Signer Facture
        </button>
        <button @click="envoyerFacture" type="submit" class="mr-2 px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          Envoyer <i class="pi pi-send"></i>
        </button>
        <button @click="exportToPDF" class="mr-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800">
          <i class="fa-solid fa-download"></i>
        </button>
        <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" v-if="isSignatureModalOpen">
      <div class="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <button @click="closeSignatureModal" class="absolute top-4 right-4 text-red-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
          <i class="fa-regular fa-circle-xmark"></i>
        </button>
        <h1 class="text-2xl font-semibold mb-4 mt-2">Signature</h1> <!-- Added mt-2 for top margin -->
        <div>
          <canvas ref="signaturePad" class="border-2 border-gray-300 w-full h-64"></canvas>
          <div class="mt-4"> <!-- Added margin top for the buttons -->
            <button @click="clearSignature" class="mr-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800">Effacer</button>
            <button @click="saveSignature" class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800">Enregistrer</button>
          </div>
    </div>
  </div>
</div>

    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, onMounted, watch, nextTick } from 'vue';
  import html2pdf from 'html2pdf.js/dist/html2pdf';
  import SignaturePad from 'signature_pad';
  
  export default {
    props: ['id', 'modalTitle', 'buttonText', 'closeButtonText'],
    setup(props, { emit }) {
      const formFacture = ref(null);
      const formProduit = ref(null);
      const clientInfo = ref(null);
      const produitInfo = ref(null);
      const signaturePad = ref(null);
      const isSignatureModalOpen = ref(false);
  
      const isOpen = ref(true);
  
      const exportToPDF = () => {
        html2pdf(document.getElementById("pdf"), {
          margin: 1,
          filename: "devis.pdf",
        });
      };
  
      const clearSignature = () => {
        signaturePad.value.clear();
      };
  
      const updateFactureWithSignature = async (factureId, signatureUrl) => {
  try {
    const response = await axios.put(`http://localhost:8080/api/factures/${factureId}`, {
      signatureUrl: signatureUrl
       
    });
    console.log('Facture updated successfully:', response.data);
  } catch (error) {
    console.error('Error updating facture:', error);
  }
};

const saveSignature = async () => {
  if (signaturePad.value) {
    const dataURL = signaturePad.value.toDataURL();
    const blob = dataURLToBlob(dataURL);
    const file = new File([blob], 'signature.png', { type: 'image/png' });

    const formData = new FormData();
    formData.append('signature', file);
    formData.append('factureId', props.id);

    try {
      const response = await axios.post('http://localhost:8080/api/save-signature', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        params: { factureId: props.id }
      });

      console.log('Signature URL saved successfully:', response.data);
      formFacture.value.signatureUrl = response.data.signatureUrl;
      // Mettre à jour la facture avec l'URL de la signature
      await updateFactureWithSignature(props.id, response.data.signatureUrl);
 
      closeSignatureModal();
      await getFactureById(props.id);
    } catch (error) {
      console.error('Error saving signature:', error);
    }
  } else {
    console.log('No signature data provided.');
  }
};
const dataURLToBlob = (dataURL) => {
  const parts = dataURL.split(';base64,');
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
};

// Exemple d'utilisation de la fonction


  
      const SignerFacture = () => {
        isSignatureModalOpen.value = true;
        nextTick(() => {
          const canvas = document.querySelector('canvas');
          signaturePad.value = new SignaturePad(canvas);
        });
      };
  
      const envoyerFacture = async () => {
        try {
          const response = await axios.post('http://localhost:8080/api/send-facture', {
            factureId: formFacture.value._id,
            recipientEmail: clientInfo.value.email
          });
          console.log('Réponse de l\'envoi de la facture:', response.data);
        } catch (error) {
          console.error('Erreur lors de l\'envoi de la facture:', error);
        }
      }
  
      const getProduitInfo = async (produitId) => {
        try {
          const response = await axios.get(`http://localhost:8080/api/produits/${produitId}`);
          produitInfo.value = response.data;
          console.log('Informations du produit:', response.data);
        } catch (error) {
          console.error("Erreur lors de la récupération des informations du produit:", error);
        }
      };
  
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
          console.log('rrr', formFacture.value);
  
          for (const produit of formProduit.value) {
            console.log("Nom de l'article :", produit.nom_article);
            console.log("Référence :", produit.reference);
            console.log("Prix unitaire :", produit.prix_unitaire);
            console.log("Quantité :", produit.quantity);
          }
  console.log('fff client',formFacture.value.clientId)
          await getClientInfo(formFacture.value.clientId);
        } catch (error) {
          console.error("Erreur lors de la récupération du devis:", error);
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
  
      const closeSignatureModal = () => {
        isSignatureModalOpen.value = false;
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
        clientInfo,
        produitInfo,
        exportToPDF,
        close,
        clearSignature,
        saveSignature,
        SignerFacture,
        isOpen,
        isSignatureModalOpen,
        closeSignatureModal,
        FactureLoad,
        envoyerFacture
      };
    },
  };
  </script>