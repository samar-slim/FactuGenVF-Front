import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Le proxy redirigera vers l'API Node.js
  headers: {
    'Content-Type': 'application/json'
  }
});

const invoiceService = {
  extractText(file) {
    return apiClient.post('http://localhost:8080/api/extract-text', file, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },

  processText(text) {
    return apiClient.post('/process-text', { text });
  },

  generateInvoice(data) {
    return apiClient.post('/generate-invoice', data);
  }
};

export default invoiceService;
