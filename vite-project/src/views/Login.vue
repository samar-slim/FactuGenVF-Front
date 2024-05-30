<template>
  <div class="flex h-screen">
    <!-- Left Section -->
    <div class="flex-1 flex flex-col justify-center bg-blue-500 px-10 py-20 text-white text-center">
      <h1 class="text-4xl font-bold mb-4 ">Log in to FactuGen</h1>
      <p class="text-lg mb-8">Manage your invoices and payments with ease.</p>
      <img src="../assets/invoice2.png" alt="Invoice Illustration" class="max-w-md mx-auto">
    </div>

    <!-- Right Section -->
    <div class="flex-1 flex flex-col justify-center bg-white px-10 py-20">
      <div class="max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-6 text-blue-500">Log in to your account</h2>
        <form @submit.prevent="login" class="space-y-4">
          <div>
            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div class="flex items-center flex-col justify-between">
           
            <a href="/forgetPassword" class="text-blue-500 ">Forgot password?</a>
            <p>Vous n'avez pas un compte?<a href="/SignUp" class="text-blue-500 ">s'inscrire</a></p>
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      console.log("email %s password %s", this.email, this.data);
      if (this.email && this.password) {
        try {
          const response = await axios.post('http://localhost:8080/api/auth/login', {
            email: this.email,
            password: this.password
          });

          if (response.data.token) {
            const token = response.data.token;
            localStorage.setItem('token', token);
            this.$router.push('/dashboard');
          } else {
            console.error('Token not found in response:', response.data);
          }
        } catch (error) {
          console.error('Login failed:', error.response ? error.response.data : error.message);
        }
      } else {
        console.error('Email and password are required.');
      }
    }
  }
}
</script>
<!-- <template>
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
  import { mapActions, mapGetters} from 'vuex';

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

            const storedState = localStorage.getItem('store');
            let isAdmin = false;

            if (storedState) {
              try {
                const state = JSON.parse(storedState);
                isAdmin = state.profile.role === 'admin';
              } catch (e) {
                console.error("Failed to parse stored state:", e);
              }
            }
            console.log("is admin :" , isAdmin); // Use isAdmin directly here
            if (isAdmin){
              this.$router.push('/adminDashboard');
            } else {
              this.$router.push('/Dashbord');
            }
          }
        )
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
   -->