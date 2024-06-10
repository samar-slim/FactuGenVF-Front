<template>
  <div>
    <button @click="toggleSidebar" class=" bg-teal-400  border border-white rounded-full h-auto  w-auto">Change Facutre </button>

    <Sidebar 
      :isOpen="isSidebarOpen" 
      :selectedTemplate="selectedTemplate" 
      :backgroundColor="backgroundColor" 
      :headerColor="headerColor" 
      :textColor="textColor"
      @update:selectedTemplate="selectedTemplate = $event"
      @update:backgroundColor="backgroundColor = $event"
      @update:headerColor="headerColor = $event"
      @update:textColor="textColor = $event"
      @toggle-sidebar="toggleSidebar"
    />

    <div class="invoice-container">
      <component 
        :is="selectedTemplate" 
        :background-color="backgroundColor" 
        :header-color="headerColor" 
        :text-color="textColor"
        :initialFacture="Facture" 
      />
    </div>
  </div>
</template>

<script>
import Facture from './Facture.vue';
import Sidebar from './FactureSidebar.vue';
import Template1 from './Template1.vue';
import Template2 from './Template2.vue';
import Template3 from './Template3.vue';

export default {
  props: { initFacture: {type: Object, default:  {
        logoUrl: 'https://raw.githubusercontent.com/templid/email-templates/main/templid-dynamic-templates/invoice-02/brand-sample.png',
        date: 'April 26, 202222',
        invoiceNumber: 'BRA-00222222',
        supplier: {
          companyName: 'Supplier Company INC',
          number: '23456789',
          vat: '23456789',
          address: '6622 Abshire Mills',
          city: 'Port Orlofurt',
          postalCode: '05820',
          country: 'United States'
        },
        customer: {
          companyName: 'Customer Company',
          number: '123456789',
          vat: '23456789',
          address: '9552 Vandervort Spurs',
          city: 'Paradise',
          postalCode: '43325',
          country: 'United States'
        },
        items: [
          { description: "Monthly accounting services", price: 150.00, quantity: 1, vat: 20, subtotal: 150.00, total: 180.00 },
          { description: "Taxation consulting (hour)", price: 60.00, quantity: 2, vat: 20, subtotal: 120.00, total: 144.00 },
          { description: "Bookkeeping services", price: 50.00, quantity: 1, vat: 20, subtotal: 50.00, total: 60.00 }
        ],
        netTotal: 320.00,
        vatTotal: 64.00,
        total: 384.00,
        paymentDetails: {
          bankName: "Banks of Banks",
          sortCode: "1234567",
          accountNumber: "123456678",
          reference: "BRA-00335"
        },
        notes: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      }}

   },
  components: {
    Sidebar,
    template1: Template1,
    template2: Template2,
    template3: Template3
    ,},
  data() {
    return {
      isSidebarOpen: false,
      selectedTemplate: 'template1',
      backgroundColor: '#f8f8f8',
      headerColor: '#374151',
      textColor: '#374151',
      Facture: this.initFacture,

  }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  },
  
}
</script>

<style scoped>
/* Add any styles specific to the main component here */
.invoice-container {
  margin-left: 20px;
  padding: 20px;
}
</style>

