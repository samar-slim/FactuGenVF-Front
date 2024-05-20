<template>
    <div class="max-w-3xl mx-auto">
      <div class="flex justify-end mt-4">
      <button  @click="openCustomizationPopup" type="button" class=" rounded-md bg-blue-500 py-1 px-2 text-center text-white hover:bg-blue-700 mr-20"> Personnaliser</button>
      <customization-popup :themes="themes" :primaryColor="primaryColor" @updateColor="updateColor" @saveCustomization="saveCustomization" @close="closeCustomizationPopup" v-if="showCustomizationPopup "></customization-popup>
    </div>
     <div :class="['text-lg', 'py-4', fontClass, colorClass]" >
       <div class="px-14 py-6">
         <table class="w-full border-collapse border-spacing-0">
           <tbody>
             <tr>
               <td class="w-full align-top">
                 <div>
                   <img src="https://raw.githubusercontent.com/templid/email-templates/main/templid-dynamic-templates/invoice-02/brand-sample.png" class="h-12" />
                 </div>
               </td>
 
               <td class="align-top">
                 <div class="text-sm">
                   <table class="border-collapse border-spacing-0">
                     <tbody>
                       <tr>
                         <td class="border-r pr-4">
                           <div>
                             <p class="whitespace-nowrap text-slate-400 text-right">Date</p>
                             <span class="whitespace-nowrap font-bold text-main text-right">{{form?.date_emission}}</span>
                           </div>
                         </td>
                         <td class="pl-4">
                           <div>
                             <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                             <span class="whitespace-nowrap font-bold text-main text-right">{{ form?.titre}}</span>
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
                   <p>Number:<span> </span></p>
                   <p>VAT: 23456789</p>
                   <p>6622 Abshire Mills</p>
                   <p>Port Orlofurt, 05820</p>
                   <p>United States</p>
                 </div>
               </td>
               <td class="w-1/2 align-top text-right">
                 <div class="text-sm text-neutral-600">
                   <p class="font-bold">Customer Company</p>
                   <p v-if="clientInfo">Numéro Client: {{ clientInfo?.numero }}</p>
    <span>Nom:{{ clientInfo?.civilite }} {{ clientInfo?.name }}</span>
    <p v-if="clientInfo">Prénom: {{ clientInfo?.prenom }}</p>
    <p v-if="clientInfo">mail: {{ clientInfo?.email }}</p>


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
               <td class="border-b-2 border-main pb-3 pl-3 font-bold text-main">#</td>
               <td class="border-b-2 border-main pb-3 pl-2 font-bold text-main">Product details</td>
               <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Price</td>
               <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">Qty.</td>
               <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main">VAT</td>
               <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main">Subtotal</td>
               <td class="border-b-2 border-main pb-3 pl-2 pr-3 text-right font-bold text-main">Subtotal + VAT</td>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td class="border-b py-3 pl-3">1.</td>
               <td class="border-b py-3 pl-2">Montly accountinc services</td>
               <td class="border-b py-3 pl-2 text-right">$150.00</td>
               <td class="border-b py-3 pl-2 text-center">1</td>
               <td class="border-b py-3 pl-2 text-center">20%</td>
               <td class="border-b py-3 pl-2 text-right">$150.00</td>
               <td class="border-b py-3 pl-2 pr-3 text-right">$180.00</td>
             </tr>
             <tr>
               <td class="border-b py-3 pl-3">2.</td>
               <td class="border-b py-3 pl-2">Taxation consulting (hour)</td>
               <td class="border-b py-3 pl-2 text-right">$60.00</td>
               <td class="border-b py-3 pl-2 text-center">2</td>
               <td class="border-b py-3 pl-2 text-center">20%</td>
               <td class="border-b py-3 pl-2 text-right">$120.00</td>
               <td class="border-b py-3 pl-2 pr-3 text-right">$144.00</td>
             </tr>
             <tr>
               <td class="border-b py-3 pl-3">3.</td>
               <td class="border-b py-3 pl-2">Bookkeeping services</td>
               <td class="border-b py-3 pl-2 text-right">$50.00</td>
               <td class="border-b py-3 pl-2 text-center">1</td>
               <td class="border-b py-3 pl-2 text-center">20%</td>
               <td class="border-b py-3 pl-2 text-right">$50.00</td>
               <td class="border-b py-3 pl-2 pr-3 text-right">$60.00</td>
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
                                 <div class="whitespace-nowrap font-bold text-main">$320.00</div>
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
         <p>Banks of Banks</p>
         <p>Bank/Sort Code: 1234567</p>
         <p>Account Number: 123456678</p>
         <p>Payment Reference: BRA-00335</p>
       </div>
 
       <div class="px-14 py-10 text-sm text-neutral-700">
         <p class="text-main font-bold">Notes</p>
         <p class="italic">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries
           for previewing layouts and visual mockups.</p>
         </div>
 
         <footer class="fixed bottom-0 left-0 bg-slate-100 w-full text-neutral-600 text-center text-xs py-3">
           Supplier Company
           <span class="text-slate-300 px-2">|</span>
           info@company.com
           <span class="text-slate-300 px-2">|</span>
           +1-202-555-0106
         </footer>
       </div>
     </div>
 </template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import customizationPopup from '../customizationPopup.vue';

export default {
  
  components: {
    customizationPopup,
  },
  setup(props) {
    const showCustomizationPopup = ref(false);
    const form = ref(null);
    const clientInfo = ref(null);

    const openCustomizationPopup = () => {
      showCustomizationPopup.value = true;
    };

    const closeCustomizationPopup = () => {
      showCustomizationPopup.value = false;
      console.log('Close event received');
    };
    
    
    /* const updateColor = ({ type, color }) => {
      // Update the selected color in the invoice component
      if (type === 'primary') {
        // Update the primary color
        console.log('Selected primary color:', color);
      }
    };

    const saveCustomization = ({ selectedTheme, selectedFont, primaryColor, textColor, tableStyle }) => {
      // Apply the selected customization options to the invoice component
      this.selectedTheme = selectedTheme;
      this.selectedFont = selectedFont;
      this.primaryColor = primaryColor;
      this.textColor = textColor;
      this.tableStyle = tableStyle;
    };
 */

    const getDevisById = async (id) => {
      try {
        const response = await axios.get('http://localhost:6666/api/devis/showDevis/${id}');
        form.value = response.data;
        await getClientInfo(form.value.clientId);
      } catch (error) {
        console.error("Erreur lors de la récupération du devis:", error);
      }
    };

    const getClientInfo = async (clientId) => {
      try {
        const response = await axios.get('http://localhost:6666/api/client/${clientId}');
        clientInfo.value = response.data;
        console.log('Num Tel :: ', clientInfo.value.téléphone);
      } catch (error) {
        console.error("Erreur lors de la récupération des informations du client:", error);
      }
    };

    onMounted(() => {
      const id = props.id;
      getDevisById(id);
    });

    return {
      showCustomizationPopup,
      openCustomizationPopup,
      closeCustomizationPopup,
      form,
      clientInfo,
      fontClass: 'font-sans',
      colorClass: 'text-black'
    };
  }
};
</script>