<template>
  <div>
    <!-- Template content goes here -->
    <div class="px-14 py-6" :style="{ backgroundColor: backgroundColor, color: textColor }">
      <table class="w-full border-collapse border-spacing-0">
        <tbody>
          <tr>
            <td class="w-full align-top">
              <div>
                <img :src="facture.logoUrl" class="h-12" @click="editField('logoUrl')" />
                <input v-if="isEditingField('logoUrl')" v-model="editableData.logoUrl" @blur="saveField('logoUrl')" @keyup.enter="saveField('logoUrl')" />
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
                          <p class="whitespace-nowrap font-bold text-main text-right" :style="{ color: headerColor }" @click="editField('date')">{{ facture.date }}</p>
                          <input v-if="isEditingField('date')" v-model="editableData.date" @blur="saveField('date')" class=" border-color-black"  @keyup.enter="saveField('date')"/>
                        </div>
                      </td>
                      <td class="pl-4">
                        <div>
                          <p class="whitespace-nowrap text-slate-400 text-right">Invoice #</p>
                          <p class="whitespace-nowrap font-bold text-main text-right" :style="{ color: headerColor }" @click="editField('invoiceNumber')">{{ facture.invoiceNumber }}</p>
                          <input v-if="isEditingField('invoiceNumber')" v-model="editableData.invoiceNumber" @blur="saveField('invoiceNumber')" @kehyup.enter="saveField('invoiceNumber')"/>
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

    <div class="bg-slate-100 px-14 py-6 text-sm" :style="{ backgroundColor: backgroundColor, color: textColor }">
      <table class="w-full border-collapse border-spacing-0">
        <tbody>
          <tr>
            <td class="w-1/2 align-top">
              <div class="text-sm text-neutral-600">
                <p class="font-bold" :style="{ color: headerColor }" @click="editField('supplier.companyName')">{{ facture.supplier.companyName }}</p>
                <input v-if="isEditingField('supplier.companyName')" v-model="editableData.supplier.companyName" @blur="saveField('supplier.companyName')" @keyup.enter="saveField('supplier.companyName')"/>
                <p @click="editField('supplier.number')">Number: {{ facture.supplier.number }}</p>
                <input v-if="isEditingField('supplier.number')" v-model="editableData.supplier.number" @blur="saveField('supplier.number')" @keyup.enter="saveField('supplier.number')" />
                <p @click="editField('supplier.vat')" >VAT: {{ facture.supplier.vat }}</p>
                <input v-if="isEditingField('supplier.vat')" v-model="editableData.supplier.vat" @blur="saveField('supplier.vat')" @keyup.enter="saveField('supplier.vat')"/>
                <p @click="editField('supplier.address')">{{ facture.supplier.address }}</p>
                <input v-if="isEditingField('supplier.address')" v-model="editableData.supplier.address" @blur="saveField('supplier.address')" @keyup.enter="saveField('supplier.address')"/>
                <p @click="editField('supplier.city')">{{ facture.supplier.city }}, {{ facture.supplier.postalCode }}</p>
                <input v-if="isEditingField('supplier.city')" v-model="editableData.supplier.city" @blur="saveField('supplier.city')" @keyup.enter="saveField('supplier.city')"/>
                <p @click="editField('supplier.country')">{{ facture.supplier.country }}</p>
                <input v-if="isEditingField('supplier.country')" v-model="editableData.supplier.country" @blur="saveField('supplier.country')" @keyup.enter="saveField('supplier.country')" />
              </div>
            </td>
            <td class="w-1/2 align-top text-right">
              <div class="text-sm text-neutral-600">
                <p class="font-bold" :style="{ color: headerColor }" @click="editField('customer.companyName')">{{ facture.customer.companyName }}</p>
                <input v-if="isEditingField('customer.companyName')" v-model="editableData.customer.companyName" @blur="saveField('customer.companyName')" @keyup.enter="saveField('customer.companyName')" />
                <p @click="editField('customer.number')">Number: {{ facture.customer.number }}</p>
                <input v-if="isEditingField('customer.number')" v-model="editableData.customer.number" @blur="saveField('customer.number')" @keyup.enter="saveField('customer.number')" />
                <p @click="editField('customer.vat')">VAT: {{ facture.customer.vat }}</p>
                <input v-if="isEditingField('customer.vat')" v-model="editableData.customer.vat" @blur="saveField('customer.vat')"  @keyup.enter="saveField('customer.vat')"/>
                <p @click="editField('customer.address')">{{ facture.customer.address }}</p>
                <input v-if="isEditingField('customer.address')" v-model="editableData.customer.address" @blur="saveField('customer.address')" @keyup.enter="saveField('customer.address')" />
                <p @click="editField('customer.city')">{{ facture.customer.city }}, {{ facture.customer.postalCode }}</p>
                <input v-if="isEditingField('customer.city')" v-model="editableData.customer.city" @blur="saveField('customer.city')" @keyup.enter="saveField('customer.city')"  />
                <p @click="editField('customer.country')">{{ facture.customer.country }}</p>
                <input v-if="isEditingField('customer.country')" v-model="editableData.customer.country" @blur="saveField('customer.country')" @keyup.enter="saveField('customer.country')" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="px-14 py-10 text-sm text-neutral-700" :style="{ color: textColor }">
      <table class="w-full border-collapse border-spacing-0">
        <thead>
          <tr>
            <td class="border-b-2 border-main pb-3 pl-3 font-bold text-main" :style="{ color: headerColor }">#</td>
            <td class="border-b-2 border-main pb-3 pl-2 font-bold text-main" :style="{ color: headerColor }">Product details</td>
            <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main" :style="{ color: headerColor }">Price</td>
            <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main" :style="{ color: headerColor }">Qty.</td>
            <td class="border-b-2 border-main pb-3 pl-2 text-center font-bold text-main" :style="{ color: headerColor }">VAT</td>
            <td class="border-b-2 border-main pb-3 pl-2 text-right font-bold text-main" :style="{ color: headerColor }">Subtotal</td>
            <td class="border-b-2 border-main pb-3 pl-2 pr-3 text-right font-bold text-main" :style="{ color: headerColor }">Subtotal + VAT</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in facture.items" :key="index">
            <td class="border-b py-3 pl-3">{{ index + 1 }}.</td>
            <td class="border-b py-3 pl-2" @click="editField(`items[${index}].description`)">{{ item.description }} <input v-if="isEditingField(`items[${index}].description`)" v-model="editableData.items[index].description" @blur="saveField(`items[${index}].description`)" @keyup.enter="saveField(`items[${index}].description`)"/> </td>
            <td class="border-b py-3 pl-2 text-right" @click="editField(`items[${index}].price`)">{{ item.price | currency }} <input v-if="isEditingField(`items[${index}].price`)" v-model="editableData.items[index].price" @blur="saveField(`items[${index}].price`)" @keyup.enter="saveField(`items[${index}].price`)" /></td>
            <td class="border-b py-3 pl-2 text-center" @click="editField(`items[${index}].quantity`)">{{ item.quantity }} <input v-if="isEditingField(`items[${index}].quantity`)" v-model="editableData.items[index].quantity" @blur="saveField(`items[${index}].quantity`)"  @keyup.enter="saveField(`items[${index}].quantity`)" /></td>
            <td class="border-b py-3 pl-2 text-center" @click="editField(`items[${index}].vat`)">{{ item.vat }}% <input v-if="isEditingField(`items[${index}].vat`)" v-model="editableData.items[index].vat" @blur="saveField(`items[${index}].vat`)" @keyup.enter="saveField(`items[${index}].vat`)" /></td>
            <td class="border-b py-3 pl-2 text-right">{{ item.subtotal | currency }}</td>
            <td class="border-b py-3 pl-2 pr-3 text-right">{{ item.total | currency }}</td>
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
                              <div class="whitespace-nowrap font-bold text-main" :style="{ color: headerColor }">{{ facture.netTotal | currency }}</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="p-3">
                              <div class="whitespace-nowrap text-slate-400">VAT total:</div>
                            </td>
                            <td class="p-3 text-right">
                              <div class="whitespace-nowrap font-bold text-main" :style="{ color: headerColor }">{{ facture.vatTotal | currency }}</div>
                            </td>
                          </tr>
                          <tr>
                            <td class="bg-main p-3" :style="{ backgroundColor: headerColor, color: '#fff' }">
                              <div class="whitespace-nowrap font-bold text-white">Total:</div>
                            </td>
                            <td class="bg-main p-3 text-right" :style="{ backgroundColor: headerColor, color: '#fff' }">
                              <div class="whitespace-nowrap font-bold text-white">{{ facture.total | currency }}</div>
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

    <div class="px-14 text-sm text-neutral-700" :style="{ color: textColor }">
      <p class="text-main font-bold" :style="{ color: headerColor }">PAYMENT DETAILS</p>
      <p @click="editField('paymentDetails.bankName')">{{ facture.paymentDetails.bankName }}</p>
      <input v-if="isEditingField('paymentDetails.bankName')" v-model="editableData.paymentDetails.bankName" @blur="saveField('paymentDetails.bankName')" @keyup.enter="saveField('paymentDetails.bankName')" />
      <p @click="editField('paymentDetails.sortCode')">Bank/Sort Code: {{ facture.paymentDetails.sortCode }}</p>
      <input v-if="isEditingField('paymentDetails.sortCode')" v-model="editableData.paymentDetails.sortCode" @blur="saveField('paymentDetails.sortCode')" @keyup.enter="saveField('paymentDetails.sortCode')"/>
      <p @click="editField('paymentDetails.accountNumber')">Account Number: {{ facture.paymentDetails.accountNumber }}</p>
      <input v-if="isEditingField('paymentDetails.accountNumber')" v-model="editableData.paymentDetails.accountNumber" @blur="saveField('paymentDetails.accountNumber')" @keyup.enter="saveField('paymentDetails.accountNumber')" />
      <p @click="editField('paymentDetails.reference')">Payment Reference: {{ facture.paymentDetails.reference }}</p>
      <input v-if="isEditingField('paymentDetails.reference')" v-model="editableData.paymentDetails.reference" @blur="saveField('paymentDetails.reference')" @keyup.enter="saveField('paymentDetails.reference')" />
    </div>

    <div class="px-14 py-10 text-sm text-neutral-700" :style="{ color: textColor }">
      <p class="text-main font-bold" :style="{ color: headerColor }">Notes</p>
      <p class="italic" @click="editField('notes')">{{ facture.notes }}</p>
      <textarea v-if="isEditingField('notes')" v-model="editableData.notes" @blur="saveField('notes')"><input v-if="isEditingField('notes')" v-model="editableData.notes" @blur="saveField('notes')" @keydown.enter="saveField('notes')" /></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InvoiceTemplate',
  props: {
    initialFacture: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      facture: { ...this.initialFacture},
      editableData: {},
      editingField: null,
      backgroundColor: "#FFFFFF",
      textColor: "#000000",
      headerColor: "#333333"
    };
  },
  watch: {
    initialFacture: {
      handler(newVal) {
        console.log('newVal', {...newVal})
        console.log('this.facture', this.facture)
        console.log('this.initialFacture', this.initialFacture)
        this.facture = { ...newVal };
        console.log('this.facture', this.facture)
      },
      immediate : true,
      deep: true
    }
  },
  methods: {
    editField(field) {
      this.editingField = field;
      this.editableData = { ...this.facture };
    },
    saveField(field) {
      this.editingField = null; 
      const keys = field.split('.');
      let data = this.facture;
      let editableData = this.editableData;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          data[key] = editableData[key];
        } else {
          data = data[key];
          editableData = editableData[key];
        }
      });

      //this.editingField = null;
    },
    isEditingField(field) {
      return this.editingField === field;
    }
  },
  filters: {
    currency(value) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    }
  }

};
</script>

<style scoped>
/* Add your styles here */
</style>
