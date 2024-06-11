<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
      <h1 class="text-3xl font-semibold text-center mb-8 text-blue-500">Votre Entreprise</h1>
      <<form @submit.prevent="signUp" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
            <input type="text" id="name" v-model="name" placeholder="Enter your name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
         
        </div>
        <div>
          <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="telephone" class="block text-gray-700 font-semibold mb-2">Telephone</label>
            <input type="tel" id="telephone" v-model="telephone" placeholder="Enter your telephone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label for="pays" class="block text-gray-700 font-semibold mb-2">Country</label>
            <input type="text" id="pays" v-model="pays" placeholder="Enter your country" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label for="ville" class="block text-gray-700 font-semibold mb-2">City</label>
            <input type="text" id="ville" v-model="ville" placeholder="Enter your city" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
          <div>
            <label for="adresse" class="block text-gray-700 font-semibold mb-2">Address</label>
            <input type="text" id="adresse" v-model="adresse" placeholder="Enter your address" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          </div>
        </div>
        <div>
          <label for="contact" class="block text-gray-700 font-semibold mb-2">Contact</label>
          <input type="text" id="contact" v-model="contact" placeholder="Enter your contact" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-semibold mb-2">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          <p v-if="password && !isPasswordValid" class="text-red-500 text-sm">Password must be at least 8 characters long and include both letters and numbers.</p>
        </div>
        <div>
          <label for="confirmPassword" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" placeholder="Confirm your password" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500">
          <p v-if="confirmPassword && confirmPassword !== password" class="text-red-500 text-sm">Passwords do not match.</p>
        </div>
        
        <button type="submit" class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:bg-grey-600" :disabled="!isFormValid">Continuer</button>
      </form>

    </div>
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
    computed: {
      ...mapGetters(['getToken'])
    },
    data() {
      return {
        name: '',
        surname: '',
        email: '',
        telephone: '',
        pays: '',
        ville: '',
        adresse: '',
        contact: '',
        password: '',
        confirmPassword: '',
      };
    },
    computed: {
      isPasswordValid() {
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordPattern.test(this.password);
      },
      isFormValid() {
        return this.name && this.surname && this.email && this.telephone && this.password && this.confirmPassword === this.password && this.isPasswordValid;
      }
    },
    methods: {
      signUp() {
        if (this.password !== this.confirmPassword) {
          alert('Passwords do not match!');
          return;
        }
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
      
      // Assuming the response contains the token
      const token = response.data.token;
  
      // Store the token in localStorage (or Vuex store)
      localStorage.setItem('authToken', token);
  
      // Set the token in the axios headers for future requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
      // Optionally, store user data in Vuex store or component state
      this.$store.commit('setUser', response.data.user); // Assuming you have a Vuex mutation to set user
  
      // Redirect to a protected route or home page
      this.$router.push('/user/Dashboard');
    })
    .catch(error => {
      console.error('Sign up error:', error.response.data);
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
