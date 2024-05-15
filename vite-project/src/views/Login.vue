<template>
    <div class="container mx-auto">
      <h1 class="text-3xl font-semibold text-center mt-8">Login</h1>
      <form @submit.prevent="login" class="max-w-md mx-auto mt-8">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" class="form-input w-full">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" class="form-input w-full">
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions, useStore} from 'vuex';

  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      ...mapActions(['loginUser']),
    login() {
      // Here you can perform any necessary validation before calling the login action
      console.log("email %s password %s", this.email, this.password)
      if (this.email && this.password) {
        this.loginUser({ accountIdentifier: this.email, password: this.password }) // Pass user credentials to loginUser action
          .then(() => {
            // Redirect or do something after successful login
            this.$router.push('/');
          })
          .catch(error => {
            console.error('Login failed:', error);
          });
      } else {
        console.error('Email and password are required.');
      }
    }
    }
  };
  </script>
  
  <style>
  /* Add custom styles here */
  </style>
  