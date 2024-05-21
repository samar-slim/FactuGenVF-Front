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
                v-model="editedUser.lastName"
                class="editable-input w-full"
                @focus="editFields.lastName = true"
                @blur="editFields.lastName = false"
              >
            </div>
            <div>
              <label for="firstName" class="block text-gray-700">First Name:</label>
              <input
                id="firstName"
                type="text"
                v-model="editedUser.firstName"
                class="editable-input w-full"
                @focus="editFields.firstName = true"
                @blur="editFields.firstName = false"
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
                v-model="editedUser.type"
                class="editable-input w-full"
                @focus="editFields.type = true"
                @blur="editFields.type = false"
              >
            </div>
            <div>
              <label for="email" class="block text-gray-700">Email:</label>
              <input
                id="email"
                type="email"
                v-model="editedUser.email"
                class="editable-input w-full"
                @focus="editFields.email = true"
                @blur="editFields.email = false"
              >
            </div>
            <div>
              <label for="phoneNumber" class="block text-gray-700">Phone Number:</label>
              <input
                id="phoneNumber"
                type="text"
                v-model="editedUser.phoneNumber"
                class="editable-input w-full"
                @focus="editFields.phoneNumber = true"
                @blur="editFields.phoneNumber = false"
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
        editedUser: { ...this.user },
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
      submitForm() {
        this.$emit('update-user', this.editedUser);
        this.closeModal();
      },
      closeModal() {
        this.$emit('close');
      },
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
  