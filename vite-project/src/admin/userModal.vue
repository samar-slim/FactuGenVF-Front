<template>
    <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded shadow-lg w-full max-w-3xl">
        <h2 class="text-2xl mb-4">Edit User</h2>
        <form @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label for="lastName" class="block text-gray-700">Last Name:</label>
              <input
                id="lastName"
                type="text"
                v-model="user.nom"
                class="editable-input w-full"
                @focus="editFields.lastName = true"
                @blur="editFields.lastName = false"
                ref="newName"
              >
            </div>
            <div>
              <label for="firstName" class="block text-gray-700">First Name:</label>
              <input
                id="firstName"
                type="text"
                v-model="user.prenom"
                class="editable-input w-full"
                @focus="editFields.firstName = true"
                @blur="editFields.firstName = false"
                ref="newLastName"
              >
            </div>
            <div>
              <label for="registrationDate" class="block text-gray-700">Registration Date:</label>
              <input
                id="registrationDate"
                type="date"
                v-model="editedUser.registrationDate"
                class="editable-input w-full"
                @focus="editFields.registrationDate = true"
                @blur="editFields.registrationDate = false"
              >
            </div>
            <div>
              <label for="type" class="block text-gray-700">Type:</label>
              <input
                id="type"
                type="text"
                v-model="user.type"
                class="editable-input w-full"
                @focus="editFields.type = true"
                @blur="editFields.type = false"
                ref="newType"
              >
            </div>
            <div>
              <label for="email" class="block text-gray-700">Email:</label>
              <input
                id="email"
                type="email"
                v-model="user.email"
                class="editable-input w-full"
                @focus="editFields.email = true"
                @blur="editFields.email = false"
                ref="newEmail"
              >
            </div>
            <div>
              <label for="phoneNumber" class="block text-gray-700">Phone Number:</label>
              <input
                id="phoneNumber"
                type="text"
                v-model="user.telephone"
                class="editable-input w-full"
                @focus="editFields.phoneNumber = true"
                @blur="editFields.phoneNumber = false"
                ref="newNumber"
              >
            </div>
          </div>
          <div class="flex justify-end">
            <button type="button" @click="closeModal" class="mr-2 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
      },
      user: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        editedUser: {},
        editFields: {
          lastName: false,
          firstName: false,
          registrationDate: false,
          type: false,
          email: false,
          phoneNumber: false,
        },
      };
    },
    methods: {
      async updateUserBackend() {
      try {
        const response = await axios.put(`http://localhost:8080/api/Users/${this.user.id}`, this.editedUser);
        console.log("User updated successfully", response.data);
        // Optionally, emit an event to notify the parent component about the update
        this.$emit('user-updated', response.data);
      } catch (error) {
        console.error("Failed to update user", error);
        // Handle error appropriately, e.g., show an error message to the user
      }
    },
      submitForm() {
      // Access input fields using their refs and update editedUser object
      this.editedUser.nom = this.$refs.newName.value;
      this.editedUser.prenom = this.$refs.newLastName.value;
      this.editedUser.type = this.$refs.newType.value;
      this.editedUser.email = this.$refs.newEmail.value;
      this.editedUser.telephone = this.$refs.newNumber.value;
      console.log(this.editedUser)
      // Emit the updated user data to the parent component
      this.$emit('update-user', this.editedUser);
      this.updateUserBackend();
      // Close the modal
      this.closeModal();
    },
      closeModal() {
        this.$emit('close');
      },
    },
    mounted(){
      const inputElement = this.$refs.newName;
    console.log(inputElement);
    },
    watch: {
      user(newUser) {
        this.editedUser = { ...newUser };
        this.editFields = {
          lastName: false,
          firstName: false,
          registrationDate: false,
          type: false,
          email: false,
          phoneNumber: false,
        };
        
      },
    },
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
  