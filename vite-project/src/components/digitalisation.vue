<template>
  <div>
    <input type="file" @change="handleFileChange" accept="image/*" />
    <div v-if="extractedText">Texte extrait : {{ extractedText }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      extractedText: '',
    };
  },
  methods: {
    async handleFileChange(event) {
      const file = event.target.files[0];
      await this.extractTextFromImage(file);
    },
    async handleFileChange(event) {
      const file = event.target.files[0];
      await this.extractTextFromImage(file);
    },
    async extractTextFromImage(file) {
      try {
        const formData = new FormData();
        formData.append('file', file); // Assurez-vous que le champ est nommé 'file'

        const response = await axios.post('http://localhost:8080/api/extract-text', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.extractedText = response.data.text;
      } catch (err) {
        console.error(err);
        this.extractedText = "Une erreur est survenue lors de l'extraction du texte";
      }
    }
  }
};
</script>