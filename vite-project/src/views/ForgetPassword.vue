<template>
  <div class="flex h-screen">
    <!-- Left Section -->
    <div class="flex-1 flex flex-col justify-center bg-blue-500 px-10 py-20 text-white text-center">
      <h1 class="text-4xl font-bold mb-4">Log in to FactuGen</h1>
      <p class="text-lg mb-8">Manage your invoices and payments with ease.</p>
      <img src="../assets/invoice2.png" alt="Invoice Illustration" class="max-w-md mx-auto">
    </div>

    <!-- Right Section -->
    <div class="flex-1 flex flex-col justify-center bg-white px-10 py-20">
      <div class="max-w-md mx-auto">
        <h1 class="text-3xl font-semibold text-center mb-8 text-blue-500">Forgot Password</h1>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Email</button>
        </form>
      </div>
    </div>
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
      ...mapActions(['ForgetPasswrod']),
    login() {
      // Here you can perform any necessary validation before calling the login action
      console.log("email %s password %s", this.email, this.password)
      if (this.email ) {
        this.ForgetPasswrod({ accountIdentifier: this.email }) // Pass user credentials to loginUser action
          .then(() => {
            // Redirect or do something after successful login
            console.log("email was sent ")
            // todo add show a message 
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