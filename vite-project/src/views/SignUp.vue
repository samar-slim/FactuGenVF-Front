<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold text-center mt-8">Sign Up</h1>
      <form @submit.prevent="signUp" class="max-w-md mx-auto mt-8">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
          <input type="text" id="name" v-model="name" placeholder="Enter your name" class="form-input w-full">
        </div>
        <div class="mb-4">
            <label for="surname" class="block text-gray-700 font-semibold mb-2">Surname</label>
            <input type="text" id="surname" v-model="surname" placeholder="Enter your name" class="form-input w-full">
          </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="telephone" class="block text-gray-700 font-semibold mb-2">Telephone</label>
          <input type="tel" id="telephone" v-model="telephone" placeholder="Enter your telephone" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="pays" class="block text-gray-700 font-semibold mb-2">Country</label>
          <input type="text" id="pays" v-model="pays" placeholder="Enter your country" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="ville" class="block text-gray-700 font-semibold mb-2">City</label>
          <input type="text" id="ville" v-model="ville" placeholder="Enter your city" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="adresse" class="block text-gray-700 font-semibold mb-2">Address</label>
          <input type="text" id="adresse" v-model="adresse" placeholder="Enter your address" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact</label>
          <input type="text" id="contact" v-model="contact" placeholder="Enter your contact" class="form-input w-full">
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" class="form-input w-full">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapGetters } from 'vuex/dist/vuex.cjs.js';
  
  export default {
    computed:{
    ...mapGetters(['getToken'])
  },data() {
      return {
        name: '',
        email: '',
        telephone: '',
        pays: '',
        ville: '',
        adresse: '',
        contact: '',
        password: ''
      };
    },
    methods: {
      signUp() {
        const userData = {
          user: {
            nom: this.name,
            prenom: this.surname,
            email: this.email,
            telephone: this.telephone,
            pays: this.pays,
            ville: this.ville,
            adresse: this.adresse,
            contact: this.contact,
            type: 'user'
          },
          account: {
            accountIdentifier: this.email,
            accountType: 'free',
            password: this.password
          }
        };
  
        axios.post('http://localhost:8080/api/auth/signup', userData)
          .then(response => {
            console.log('Sign up successful:', response.data);
            this.$router.push('/login')
            // Optionally, redirect to a success page or show a success message
          })
          .catch(error => {
            console.error('Sign up error:', error.response.data);
            // Optionally, display an error message to the user
          });
      }
    }
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  