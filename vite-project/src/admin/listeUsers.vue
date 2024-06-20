<template>
  <div class="relative overflow-x-auto m-4">
    <div class="text-3xl text-blue-500 mb-10">Liste d'utilisateurs</div>
    <br />
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
      <!-- Action buttons -->
      <div class="flex space-x-2 justify-start">
        <button @click="disableUser" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          Désactiver
        </button>
        <button @click="activateSelectedUsers" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          Activer
        </button>
        <button @click="deleteSelectedUsers" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
          Supprimer
        </button>
      </div>

      <!-- Search bar -->
      <div class="relative justify-end">
        <label for="table-search" class="sr-only">Search</label>
        <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="text" id="table-search-users" v-model="searchQuery" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher ..." />
      </div>
    </div>

    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @change="selectAll($event)">
              <label for="checkbox-all" class="sr-only">checkbox</label>
            </div>
          </th>
          <th scope="col" class="px-6 py-3">Last Name</th>
          <th scope="col" class="px-6 py-3">First Name</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone Number</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in paginatedUsers" :key="user._id" class="hover:bg-gray-50 dark:hover:bg-gray-600">
          <td>
            <div class="flex items-center">
              <input
                :id="'checkbox-' + user._id"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                v-model="selectedUsers"
                :value="user._id"
              />
              <label :for="'checkbox-' + user._id" class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer" @click="showUserDetails(user)">{{ user.prenom }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.nom }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.type }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.email }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.telephone }}</td>
          <td class="px-6 py-4">
            <button @click="showUserDetails(user)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
          </td>
        </tr>
      </tbody>
      <tfoot class="text-xs text-white uppercase bg-blue-800 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" colspan="8">
            <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                Showing <span class="font-semibold text-gray-900 dark:text-white">{{ startItem }}-{{ endItem }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ totalUsers }}</span>
              </span>
              <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                <li>
                  <a href="#" @click.prevent="changePage(currentPage - 1)" :class="['flex items-center justify-center px-3 h-8 leading-tight', { 'text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': true, 'pointer-events-none opacity-50': currentPage === 1 }]">
                    <i class="pi pi-chevron-left"></i>
                  </a>
                </li>
                <li v-for="page in totalPages" :key="page">
                  <a href="#" @click.prevent="changePage(page)" :class="['flex items-center justify-center px-3 h-8 leading-tight', { 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white': currentPage === page, 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': currentPage !== page }]">
                    {{ page }}
                  </a>
                </li>
                <li>
                  <a href="#" @click.prevent="changePage(currentPage + 1)" :class="['flex items-center justify-center px-3 h-8 leading-tight', { 'text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white': true, 'pointer-events-none opacity-50': currentPage === totalPages }]">
                <i class="pi pi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </th>
    </tr>
  </tfoot>
  <UserModal :isVisible="isModalVisible" :user="selectedUser" @close="isModalVisible = false" @update-user="updateUser" />
</table>
</div>
</template>

<script>
import axios from 'axios';
import UserModal from './userModal.vue';

export default {
  data() {
    return {
      users: [],
      isModalVisible: false,
      selectedUser: {},
      selectedUsers: [],
      selectedUsersMap: new Map(),
      currentPage: 1,
      usersPerPage: 10,
      searchQuery: '',
      selectedUserId: null,
    };
  },
  async created() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user =>
      user.nom.toLowerCase().startsWith(query) ||
      user.prenom.toLowerCase().startsWith(query)
      );
    },
    totalUsers() {
      return this.filteredUsers.length;
    },
    totalPages() {
      return Math.ceil(this.totalUsers / this.usersPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.filteredUsers.slice(start, end);
    },
    startItem() {
      return (this.currentPage - 1) * this.usersPerPage + 1;
    },
    endItem() {
      return Math.min(this.currentPage * this.usersPerPage, this.totalUsers);
    },
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const authToken = this.getAuthToken();
        const response = await axios.get('http://localhost:8080/api/Users/', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        this.users = response.data;
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    },
    async deleteSelectedUsers() {
      try {
        const authToken = this.getAuthToken();
        await axios.delete('http://localhost:8080/api/user/', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          },
          data: {
            users: this.selectedUsers
          }
        });
        this.users = this.users.filter(user => !this.selectedUsers.includes(user._id));
        console.log('Users deleted successfully');
        this.selectedUsers = [];
      } catch (error) {
        console.error('Failed to delete users:', error);
      }
    },
    async disableUser() {
      try {
        const authToken = this.getAuthToken();
        await axios.post('http://localhost:8080/api/account/disable', {
          users: this.selectedUsers
        }, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        this.users = this.users.filter(user => !this.selectedUsers.includes(user._id));
        console.log('Users disabled successfully');
      } catch (error) {
        console.error('Failed to disable users:', error);
      }
    },
    async activateSelectedUsers() {
      try {
        const authToken = this.getAuthToken();
        await axios.post('http://localhost:8080/api/account/activate', {
          users: this.selectedUsers
        }, {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        this.users = this.users.filter(user => !this.selectedUsers.includes(user._id));
        console.log('Users activated successfully');
      } catch (error) {
        console.error('Failed to activate users:', error);
      }
    },
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    selectAll(event) {
      if (event.target.checked) {
        this.selectedUsers = this.filteredUsers.map(user => user._id);
      } else {
        this.selectedUsers = [];
      }
    },
    getAuthToken() {
      let storedState = localStorage.getItem('store');
      if (storedState) {
        try {
          let state = JSON.parse(storedState);
          return state.token;
        } catch (e) {
          console.error("Failed to parse stored state", e);
        }
      }
      return '';
    },
    showUserDetails(user) {
      this.selectedUser = user;
      this.isModalVisible = true;
      console.log(user);
    },
  },
  components: {
    UserModal,
  },
};
</script>
