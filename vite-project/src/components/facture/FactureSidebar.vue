<template>
  <div class="sidebar" :class="{ 'sidebar-open': isOpen }">
    <button class="close-btn" @click="toggleSidebar">X</button>
    <div class="sidebar-content">
      <h3>Template Options</h3>
      
      <div class="template-options">
        <span class="tax-box cursor-pointer mt-4 shadow-md shadow-green-400" :class="{ light: selectedTemplate === 'template1' }" @click="updateTemplate('template1')">
          Template 1
        </span>
        <span class="tax-box cursor-pointer mt-4 shadow-md shadow-green-400" :class="{ light: selectedTemplate === 'template2' }" @click="updateTemplate('template2')">
          Template 2
        </span>
        <span class="tax-box cursor-pointer mt-4 shadow-md shadow-green-400" :class="{ light: selectedTemplate === 'template3' }" @click="updateTemplate('template3')">
          Template 3
        </span>
      </div>

      <h3>Color Options</h3>
      
      <div>
        <h4>Header Color:</h4>
        <ul class="color-list">
          <li v-for="color in headerColors" :key="color" :style="{ backgroundColor: color }" @click="updateHeaderColor(color)">
            <span v-if="headerColor === color" class="checkmark">✔</span>
          </li>
        </ul>
      </div>
      <div>
        <h4>Text Color:</h4>
        <ul class="color-list">
          <li v-for="color in textColors" :key="color" :style="{ backgroundColor: color }" @click="updateTextColor(color)">
            <span v-if="textColor === color" class="checkmark">✔</span>
          </li>
        </ul>
      </div>

      <h3>Upload Logo</h3>
      <div>
        <input type="file" @change="uploadLogo" />
      </div>

      <button class="save-btn" @click="saveChanges">Save Changes</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    selectedTemplate: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true
    },
    headerColor: {
      type: String,
      required: true
    },
    textColor: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      headerColors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700','#FFFFFF','#000000'],
      textColors: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFD700','#FFFFFF','#000000'],
    };
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    updateTemplate(template) {
      this.$emit('update:selectedTemplate', template);
    },
    updateBackgroundColor(color) {
      this.$emit('update:backgroundColor', color);
    },
    updateHeaderColor(color) {
      this.$emit('update:headerColor', color);
    },
    updateTextColor(color) {
      this.$emit('update:textColor', color);
    },
    uploadLogo(event) {
      const file = event.target.files[0];
      this.$emit('upload-logo', file);
    },
    
    async saveChanges() {
      // Step 1: Retrieve data from localStorage and parse it
      const data = localStorage.getItem('facture');
      if (!data) {
        console.error('No data found in localStorage for "facture".');
        return;
      }

      let parsedData;
      try {
        parsedData = JSON.parse(data);
      } catch (error) {
        console.error('Failed to parse JSON data from localStorage:', error);
        return;
      }

      console.log(' ---- invoice', parsedData);

      // Step 2: Pass the parsed data to the transformation function
      const Facture = this.transformInvoiceToSchemaFormat(parsedData);

      // Uncomment the axios call if needed
      await axios.post('http://localhost:8080/api/facture', Facture , {
         headers: {
           'Authorization': `Bearer ${localStorage.getItem('token')}`
         }
       });

      this.$emit('save-changes');
  },
  
  transformInvoiceToSchemaFormat(invoice) {
    // Step 3: Validate the invoice object
    if (!invoice || !invoice.supplier || !invoice.items) {
      console.error('Invalid invoice data:', invoice);
      return null;
    }

    console.log(invoice.supplier.companyName);

    // Step 4: Transform the invoice object to the desired format
    return {
      facture: {
        nom_entreprise: invoice.supplier.companyName || "",
        num: invoice.supplier.number || "",
        code_postal: invoice.supplier.postalCode || "",
        ville: invoice.supplier.city || "",
        email: "", // Assuming email is not available in the provided object
        num_tel: "", // Assuming phone number is not available in the provided object
        num_siret: "", // Assuming SIRET number is not available in the provided object
        num_tva: invoice.supplier.vat || "",
        inter: "", // Assuming inter is not available in the provided object
        deleg: "", // Assuming deleg is not available in the provided object
        titre: "", // Assuming titre is not available in the provided object
        numfacture: invoice.invoiceNumber || "",
        remarque: invoice.notes || "",
        remise: "", // Assuming remise is not available in the provided object
        condition: "", // Assuming condition is not available in the provided object
        paiement: invoice.paymentDetails.reference || "",
        clientId: null, // Assuming clientId is not available in the provided object
        produitId: null, // Assuming produitId is not available in the provided object
        totalHT: invoice.netTotal.toString() || "",
        totalTTC: invoice.total.toString() || "",
        imageUrl: invoice.logoUrl || "",
        date_expiration: "", // Assuming date_expiration is not available in the provided object
        date_emission: invoice.date || "",
        status: "cours",
        produitsSelectionnes: invoice.items.map(item => ({
          total: item.total.toString() || "",
          nom_article: item.description || "",
          description: item.description || "",
          prix: item.price.toString() || "",
          prix_unitaire: item.price.toString() || "",
          reference: "", // Assuming reference is not available in the provided object
          tva: item.vat.toString() || "",
          quantity: item.quantity.toString() || "",
        }))
      }
    };
  }
 

}}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: #f8f8f8;
  box-shadow: -2px 0 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  transform: translateX(100%);
  padding: 20px;
}
.sidebar-open {
  transform: translateX(0);
}
.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.sidebar-content {
  margin-top: 20px;
}
.template-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.tax-box {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}
.tax-box.light {
  background-color: #007BFF;
  color: white;
}
.cursor-pointer {
  cursor: pointer;
}
.mt-4 {
  margin-top: 1rem;
}
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.shadow-green-400 {
  box-shadow: 0 4px 6px rgba(34, 197, 94, 0.4);
}
.color-list {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}
.color-list li {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.checkmark {
  color: white;
  font-weight: bold;
}
.save-btn {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
