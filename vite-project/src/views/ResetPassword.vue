<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-semibold text-center mt-8">Reset Password</h1>
    <form @submit.prevent="resetPassword" class="max-w-md mx-auto mt-8">
      <div class="mb-4">
        <label for="newPassword" class="block text-gray-700 font-semibold mb-2">New Password</label>
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          placeholder="Enter your new password"
          class="form-input w-full"
        />
      </div>
      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-semibold mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          placeholder="Confirm your new password"
          class="form-input w-full"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
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
      newPassword: '',
      confirmPassword: '',
    };
  },
  methods: {
    async resetPassword() {
      if (this.newPassword && this.confirmPassword && this.newPassword === this.confirmPassword) {
        const token = this.$route.params.token; // Assuming the token is passed in the route params
        try {
          const response = await axios.post(`http://localhost:8080/api/auth/resetpassword/${token}`, {
            newPassword: this.newPassword,
            confirmPassword: this.confirmPassword,
          });
          console.log(response.data.message); // Handle the response data if needed
          // Redirect or show a success message after successful password reset
          this.$router.push({ path: '/login' });
        } catch (error) {
          console.error('Password reset failed:', error.response.data.message || error.message);
          // Optionally, show an error message to the user
        }
      } else {
        console.error('Passwords do not match or fields are empty.');
        // Optionally, show a validation error message to the user
      }
    },
  },
};
</script>

<style scoped>
/* Add any styles specific to the reset password page here */
</style>
