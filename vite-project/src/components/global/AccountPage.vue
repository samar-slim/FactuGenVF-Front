<template>
    <div class="max-w-md bg-white p-6">
      <h3 class="text-2xl font-bold mb-2">Sécurité</h3>
      <h3 class="font-semibold mb-4">Reset Password</h3>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="current-password" class="block text-gray-700 font-bold mb-2">Current Password</label>
          <input
            type="password"
            id="current-password"
            v-model="currentPassword"
            class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="new-password" class="block text-gray-700 font-bold mb-2">New Password</label>
          <input
            type="password"
            id="new-password"
            v-model="newPassword"
            class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p v-if="passwordError" class="text-red-500 text-sm mt-2">{{ passwordError }}</p>
        </div>
        <div class="mb-4">
          <label for="confirm-password" class="block text-gray-700 font-bold mb-2">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            class="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full transition-colors duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        passwordError: ''
      };
    },
    methods: {
      async submitForm() {
        this.passwordError = '';
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
        if (!passwordPattern.test(this.newPassword)) {
          this.passwordError = 'Password must be at least 8 characters long and contain at least one letter and one number.';
          return;
        }
  
        if (this.newPassword !== this.confirmPassword) {
          alert("New passwords do not match");
          return;
        }                              
  
        const payload = {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword
        };
  
        try {
          // Assuming the user ID and auth token are stored in localStorage
          const storedState = localStorage.getItem('store');
          let authToken = '';
          let userId = '';
  
          if (storedState) {
            const state = JSON.parse(storedState);
            authToken = state.token;
            userId = state.profile.accountId;
          }
  
          const response = await axios.put(`http://localhost:8080/auth/changePassword/${userId}`, payload, {
            headers: {
              'Authorization': `Bearer ${authToken}`
            }
          });
  
          alert('Password reset successfully');
        } catch (error) {
          console.error('Failed to reset password:', error);
          alert('Failed to reset password');
        }
  
        this.currentPassword = '';
        this.newPassword = '';
        this.confirmPassword = '';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles if necessary */
  </style>
  