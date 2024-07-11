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
  components: {
    Sidebar,
    template1: Template1,
    template2: Template2,
    template3: Template3,
  },
  data() {
    return {
      isSidebarOpen: false,
      selectedTemplate: 'template1',
      backgroundColor: '#f8f8f8',
      headerColor: '#374151',
      textColor: '#374151',
      Facture: 
      {
    "logoUrl": "",
    "date": "",
    "invoiceNumber": "1024",
    "supplier": {
        "companyName": "",
        "number": "",
        "vat": "",
        "address": "",
        "city": "",
        "postalCode": "",
        "country": ""
    },
    "customer": {
        "companyName": "Really Great Company",
        "number": "",
        "vat": "",
        "address": "123 Anywhere St.",
        "city": "Any City",
        "postalCode": "",
        "country": ""
    },
    "items": [
        {
            "description": "Content Plan",
            "price": 50,
            "quantity": 4,
            "vat": 0,
            "subtotal": 200,
            "total": 200
        },
        {
            "description": "Copy Writing",
            "price": 50,
            "quantity": 2,
            "vat": 0,
            "subtotal": 100,
            "total": 100
        },
        {
            "description": "Website Design",
            "price": 50,
            "quantity": 5,
            "vat": 0,
            "subtotal": 250,
            "total": 250
        },
        {
            "description": "Website Development",
            "price": 100,
            "quantity": 5,
            "vat": 0,
            "subtotal": 500,
            "total": 500
        },
        {
            "description": "SEO",
            "price": 50,
            "quantity": 1,
            "vat": 0,
            "subtotal": 50,
            "total": 50
        }
    ],
    "netTotal": 1250,
    "vatTotal": 0,
    "total": 875,
    "paymentDetails": {
        "bankName": "Really Great Bank",
        "sortCode": "000 000",
        "accountNumber": "0000 0000",
        "reference": ""
    },
    "notes": "Payment is required within 14 business days of invoice date. Please send remittance to hello@reallygreatsite.com. \nThank you for your business."
},
  };
  },
  methods:{
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    initFacture() {
      this.facture = localStorage.getItem('facture');
    },
  },
  beforeMount() {
    this.initFacture();
    console.log("this.facture : :", this.facture);
  }
  
}
</script>

<style scoped>
/* Add any styles specific to the main component here */
.invoice-container {
  margin-left: 20px;
  padding: 20px;
}
</style>

