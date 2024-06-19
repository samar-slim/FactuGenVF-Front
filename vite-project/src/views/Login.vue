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
            const user = localStorage.getItem('user');
            let role = '';
            if (storedState) {
              try {
                const state = JSON.parse(storedState);
                role = state.profile.type;

              } catch (e) {
                console.error("Failed to parse stored state:", e);
              }
            }
            if ( role === 'admin') {
              console.log(' role is admin');
              this.$router.push('/admin/Dashboard');
            } else if (role === 'user') {
              console.log(' role is user');
              this.$router.push('/user/Dashboard');
            } else if( role === 'client' || role === 'Client') {
              console.log(' role is client');
              this.$router.push('/client/home');
            } else {
              console.log(' role is unknown');
              this.$router.push('/login');
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
