<template>
    <div class="p-6 bg-gray-100 min-h-screen">
      <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-gray-200">
          <h1 class="text-2xl font-bold text-gray-800">Support</h1>
         
        </div>
  
        <div class="p-6">
          <div v-if="filteredFaqs.length">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <div v-for="faq in filteredFaqs" :key="faq.id" class="mb-4">
              <div class="bg-white shadow-md rounded-lg p-4">
                <h3 class="font-semibold text-lg text-gray-900">{{ faq.question }}</h3>
                <p class="text-gray-700 mt-2">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
          <div v-else>
            <p class="text-gray-600">No FAQs match your search. Please try a different query.</p>
          </div>
          
          <div class="mt-8">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Need More Help?</h2>
            <div class="bg-white shadow-md rounded-lg p-4">
              <p class="text-gray-700">If you need further assistance, please contact our support team or visit our community forum.</p>
              <div class="mt-4 flex space-x-4">
                <a :href="reclamationUrl" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Contact Support</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  export default {
    
    data() {
      return {
        searchQuery: '',
        faqs: [
          { id: 1, question: 'How do I create an invoice?', answer: 'To create an invoice, navigate to the "Invoices" section and click "Create Invoice". Fill in the details and save.' },
          { id: 2, question: 'How can I generate a quote?', answer: 'Go to the "Quotes" section, click "Create Quote", and enter the necessary details. Save to generate your quote.' },
          { id: 3, question: 'Can I customize invoice templates?', answer: 'Yes, you can customize invoice templates in the "Settings" section under "Invoice Templates".' },
          { id: 4, question: 'How do I send an invoice to a client?', answer: 'After creating an invoice, you can send it directly to the client via email from the invoice details page.' },
          { id: 5, question: 'What payment methods do you support?', answer: 'We support credit card payments, PayPal, and bank transfers. You can set up payment methods in the "Settings" section.' },
        ],
      };
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
      filteredFaqs() {
        return this.faqs.filter(faq => faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()));
      },
      reclamationUrl() {
        const storedState = localStorage.getItem('store');
        const state = JSON.parse(storedState);
        return state.profile.type === 'client' || 'Client' ? '/client/reclamation' : '/user/reclamation';
    },
    },
  };
  </script>
  
  <style scoped>
  /* Additional styles can be added here */
  </style>
  