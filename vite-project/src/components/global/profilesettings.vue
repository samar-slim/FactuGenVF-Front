<template>
    <div class="flex h-screen">
      <div class="w-64 bg-gray-100 p-4">
        <h2 class="text-lg font-bold mb-4">Settings</h2>
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="block px-2 py-1 rounded hover:bg-gray-200 hover:font-semibold"
              @click.prevent="currentPage = 'profile'"
              :class="{ 'bg-gray-200 font-semibold': currentPage === 'profile' }"
              >Profile</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-2 py-1 rounded hover:bg-gray-200 hover:font-semibold"
              @click.prevent="currentPage = 'account'"
              :class="{ 'bg-gray-200 font-semibold': currentPage === 'account' }"
              >Sécurité</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-2 py-1 rounded hover:bg-gray-200 hover:font-semibold"
              @click.prevent="currentPage = 'api'"
              :class="{ 'bg-gray-200 font-semibold': currentPage === 'api' }"
              >Entreprise</a
            >
          </li>
          <li>
            <a
              href="#"
              class="block px-2 py-1 rounded hover:bg-gray-200 hover:font-semibold"
              @click.prevent="currentPage = 'webhooks'"
              :class="{ 'bg-gray-200 font-semibold': currentPage === 'webhooks' }"
              >Preferences</a
            >
          </li>
        </ul>
      </div>
      <div class="flex-1 p-4">
        <ProfilePage
          v-if="currentPage === 'profile'"
          :profilePicture="profilePicture"
          :firstName="firstName"
          :lastName="lastName"
          @changeProfilePicture="changeProfilePicture"
          @updateFirstName="firstName = $event"
          @updateLastName="lastName = $event"
        />
        <AccountPage v-else-if="currentPage === 'account'" />
        <ApiPage v-else-if="currentPage === 'api'" />
        <WebhooksPage v-else-if="currentPage === 'webhooks'" />
      </div>
    </div>
  </template>
  
  <script>
  import ProfilePage from './ProfilePage.vue'
  import AccountPage from './AccountPage.vue'
  import ApiPage from './ApiPage.vue'
  import WebhooksPage from './WebhooksPage.vue'
  
  export default {
    components: {
      ProfilePage,
      AccountPage,
      ApiPage,
      WebhooksPage
    },
    data() {
      return {
        currentPage: 'profile',
        profilePicture: 'https://via.placeholder.com/150',
        firstName: 'John',
        lastName: 'Doe'
      }
    },
    methods: {
      changeProfilePicture() {
        // Open a file dialog or handle profile picture change logic here
      }
    }
  }
  </script>