<template>
    <div>
      <h3 class="text-3xl font-semibold  mb-8 text-blue-500">Public profile</h3>
      <div class="flex items-center mb-4">
        <img
          :src="profilePicture"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full object-cover mr-4"
        />
        <input type="file" @change="onFileChange" class="hidden" ref="fileInput"/>
        <button
          @click="triggerFileInput"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Change picture
        </button>
      </div>
      <form @submit.prevent="submitForm" class="grid grid-cols-2 gap-4">
        <div class="mb-4">
          <label for="firstName" class="block font-bold mb-1">First Name</label>
          <input
            type="text"
            id="firstName"
            v-model="firstName"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="lastName" class="block font-bold mb-1">Last Name</label>
          <input
            type="text"
            id="lastName"
            v-model="lastName"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block font-bold mb-1">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="telephone" class="block font-bold mb-1">Telephone</label>
          <input
            type="tel"
            id="telephone"
            v-model="telephone"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="pays" class="block font-bold mb-1">Country</label>
          <input
            type="text"
            id="pays"
            v-model="pays"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4">
          <label for="ville" class="block font-bold mb-1">City</label>
          <input
            type="text"
            id="ville"
            v-model="ville"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4 col-span-2">
          <label for="adresse" class="block font-bold mb-1">Address</label>
          <input
            type="text"
            id="adresse"
            v-model="adresse"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="mb-4 col-span-2">
          <label for="contact" class="block font-bold mb-1">Contact</label>
          <input
            type="text"
            id="contact"
            v-model="contact"
            class="border border-gray-400 rounded px-2 py-1 w-full"
          />
        </div>
        <div class="col-span-2">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Confirm Changes
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        pays: '',
        ville: '',
        adresse: '',
        contact: '',
        profilePicture: '',
        authToken: '',
        userId: ''
      };
    },
    mounted() {
      this.fetchProfileData();
    },
    methods: {
      async fetchProfileData() {
        let storedState = localStorage.getItem('store');
        if (storedState) {
          try {
            let state = JSON.parse(storedState);
            this.authToken = state.token;
            this.userId = state.profile.userId;
          } catch (e) {
            console.error("Failed to parse stored state", e);
          }
        }
        try {
          const response = await axios.get(`http://localhost:8080/api/Users/${this.userId}`, {
            headers: {
              'Authorization': `Bearer ${this.authToken}`
            }
          });
          const data = response.data;
          this.firstName = data.prenom;
          this.lastName = data.nom;
          this.email = data.email;
          this.telephone = data.telephone;
          this.pays = data.pays;
          this.ville = data.ville;
          this.adresse = data.adresse;
          this.contact = data.contact;
          this.profilePicture = data.profilePicture;
          console.log(data);
        } catch (error) {
          console.error('Failed to fetch profile data:', error);
        }
      },
      async submitForm() {
        const updatedProfile = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          telephone: this.telephone,
          pays: this.pays,
          ville: this.ville,
          adresse: this.adresse,
          contact: this.contact
        };
  
        try {
          await axios.put(`http://localhost:8080/api/Users/${this.userId}`, updatedProfile, {
            headers: {
              'Authorization': `Bearer ${this.authToken}`
            }
          });
          alert('Profile updated successfully');
        } catch (error) {
          console.error('Failed to update profile:', error);
          alert('Failed to update profile');
        }
      },
      triggerFileInput() {
        this.$refs.fileInput.click();
      },
      async onFileChange(event) {
        const file = event.target.files[0];
        if (file) {
          const formData = new FormData();
          formData.append('profilePicture', file);
  
          try {
            const response = await axios.post('/api/profile/picture', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            this.profilePicture = response.data.profilePicture;
            alert('Profile picture updated successfully');
          } catch (error) {
            console.error('Failed to update profile picture:', error);
            alert('Failed to update profile picture');
          }
        }
      }
    }
  };
  </script>
  
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  