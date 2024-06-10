<template>
  <div class="p-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
    <div class="mb-4">
      <input type="file" @change="uploadImage" ref="uploader" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
    </div>
    <div class="mb-4">
      <button @click="downloadPDF" :disabled="!pdf" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        Download PDF
      </button>
    </div>
    <div>
      <textarea readonly rows="8" cols="80" class="w-full p-2 border border-gray-300 rounded">{{ ocrText }}</textarea>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pdf: null,
      ocrText: 'Upload an image file',
    };
  },
  methods: {
    async uploadImage(event) {
      const files = event.target.files;
      if (!files.length) return;
      console.log("files", files);
      const formData = new FormData();
      formData.append('image', files[0]);

      console.log("form data", formData);


      try {
        const response = await axios.post('http://localhost:8080/api/ai/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.ocrText = response.data.text;
        // Assume the backend generates the PDF and returns a URL
        this.data = response.data;
        console.log("data", this.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    },
    downloadPDF() {
      const link = document.createElement('a');
      link.href = this.pdf;
      link.download = 'tesseract-ocr-result.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>

