<template>
      <div class="bg-white p-8 w-full max-w-3xl">
        <h1 class="text-3xl font-semibold  mb-8 text-blue-500">Votre Entreprise</h1>
        <form @submit.prevent="addEntreprise" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="imageUpload" class="block text-gray-700">Votre logo</label>
              <input
                id="imageUpload"
                type="file"
                accept="image/*" 
                @change="handleImageUpload"
                class="w-full"
              >
              <!-- Display the uploaded image -->
              <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="mt-4 w-full max-w-sm">
            </div>
            <div>
              <label for="name" class="block text-gray-700 font-semibold mb-2">Nom</label>
              <input type="text" id="name" v-model="name" placeholder="Enter your name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="email" class="block text-gray-700 font-semibold mb-2">Email entreprise</label>
              <input type="email" id="email" v-model="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
            <div>
              <label for="telephone" class="block text-gray-700 font-semibold mb-2">Telephone</label>
              <input type="tel" id="telephone" v-model="telephone" placeholder="Enter your telephone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="adresse" class="block text-gray-700 font-semibold mb-2">Adresse entreprise</label>
              <input type="text" id="adresse" v-model="adresse" placeholder="Enter your address" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
            <div>
              <label for="pays" class="block text-gray-700 font-semibold mb-2">Pays</label>
              <input type="text" id="pays" v-model="pays" placeholder="Enter your country" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label for="siret" class="block text-gray-700 font-semibold mb-2">SIRET</label>
              <input type="text" id="siret" v-model="siret" placeholder="Enter SIRET" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
            <div>
              <label for="tvaEntreprise" class="block text-gray-700 font-semibold mb-2">TVA</label>
              <input type="text" id="tvaEntreprise" v-model="tvaEntreprise" placeholder="Enter your TVA" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
            </div>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:bg-grey-600" :disabled="!isFormValid">update entrprise</button>
        </form>
      </div>
    
  </template>
  
  
  <script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      name: '',
      email: '',
      telephone: '',
      pays: '',
      adresse: '',
      siret: '',
      tvaEntreprise: '',
      imageUrl: null, // for image preview
    };
  },
  computed: {
    ...mapGetters(['getToken']),
    isFormValid() {
      return this.name && this.email && this.telephone && this.adresse && this.pays && this.siret && this.tvaEntreprise;
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageUrl = URL.createObjectURL(file);
      }
    },
    addEntreprise() {
      let storedState = localStorage.getItem('user');
      let userId = '';
      if (storedState) {
        try {
          let state = JSON.parse(storedState);
          userId = state._id;
        } catch (e) {
          console.error("Failed to parse stored state", e);
        }
      }

      const entrepriseData = {
        nomEntreprise: this.name,
        emailEntreprise: this.email,
        telEntreprise: this.telephone,
        adrEntreprise: this.adresse,
        paysEntreprise: this.pays,
        siretEntreprise: this.siret,
        tvaEntreprise: this.tvaEntreprise,
      };

      axios.put(`http://localhost:8080/api/users/${userId}`, entrepriseData)
        .then(response => {
          console.log('Update successful:', response.data);
          this.$emit('close'); // Close the modal after successful update
        })
        .catch(error => {
          console.error('Update error:', error.response.data);
          // Optionally, display an error message to the user
        });
    }
  }
};
</script>

  
  <style scoped>
  .editable-input {
    border: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease;
  }
  
  .editable-input:focus {
    border-bottom: 1px solid #000;
    outline: none;
  }
  
  .grid {
    display: grid;
  }
  
  @media (min-width: 768px) {
    .grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  </style>
  