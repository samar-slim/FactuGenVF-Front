<template>
  <div class="relative overflow-x-auto  m-4">
    <div class="text-3xl text-blue-500 mb-10">Liste d'utilisateurs</div>
    <br />
   <!--  <div class="flex items-center justify-end mb-4">
      <label for="usersPerPage" class="mr-2">Users per page:</label>
      <select id="usersPerPage" v-model="usersPerPage" @change="changeUsersPerPage" class="border border-gray-300 rounded-md px-2 py-1">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
 -->
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
  <!-- Action buttons -->
  <span class="sr-only">Action buttons</span>
  <div class="flex space-x-2 justify-start">
    <button @click="disableUser" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
      Désactiver
    </button>
   <!--  <button class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
      Promote
    </button> -->
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
        <input type="text" id="table-search-users" v-model="searchQuery" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rechercher ..." @input="filterUsers" />
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
          <th scope="col" class="px-6 py-3">Registration Date</th>
          <th scope="col" class="px-6 py-3">Type</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone Number</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filteredUsers" :key="user.email" class="hover:bg-gray-50 dark:hover:bg-gray-600">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input  :id="'checkbox-' + user.id" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" v-model="selectedUsers" :value="user.id">
              <label :for="'checkbox-' + user.id" v-if="selectedUsers.includes(user.id)" class="sr-only">checkbox</label>
            </div>
          </td>
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer" @click="showUserDetails(user)">{{ user.prenom }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.nom }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.registrationDate }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.type }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.email }}</td>
          <td class="px-6 py-4 cursor-pointer" @click="showUserDetails(user)">{{ user.telephone }}</td>
          <td class="px-6 py-4">
            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
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

    </table>

    <!-- User Modal -->
    <UserModal :isVisible="isModalVisible" :user="selectedUser" @close="isModalVisible = false" @update-user="updateUser" />
  </div>
</template>

<script>
import axios from 'axios';
import UserModal from './userModal.vue';

export default {
  data() {
    return {
      users: [
        { id: '001', lastName: 'Dupont', firstName: 'Jean', registrationDate: '2023-01-15', type: 'Professionnel', email: 'jean.dupont@example.com', phoneNumber: '0123456789' },
        { id: '002', lastName: 'Martin', firstName: 'Marie', registrationDate: '2022-11-22', type: 'Entreprise', email: 'marie.martin@example.com', phoneNumber: '0987654321' },
        { id: '003', lastName: 'Durand', firstName: 'Paul', registrationDate: '2023-03-10', type: 'Particulier', email: 'paul.durand@example.com', phoneNumber: '0123987654' },
        { id: '004', lastName: 'Petit', firstName: 'Anne', registrationDate: '2021-06-08', type: 'Entreprise', email: 'anne.petit@example.com', phoneNumber: '0712345678' },
        { id: '005', lastName: 'Robert', firstName: 'Luc', registrationDate: '2020-04-18', type: 'Professionnel', email: 'luc.robert@example.com', phoneNumber: '0612345678' },
        { id: '006', lastName: 'Leroy', firstName: 'Chloe', registrationDate: '2022-09-11', type: 'Particulier', email: 'chloe.leroy@example.com', phoneNumber: '0776543210' },
        { id: '007', lastName: 'Moreau', firstName: 'Sophie', registrationDate: '2023-02-14', type: 'Entreprise', email: 'sophie.moreau@example.com', phoneNumber: '0654321876' },
        { id: '008', lastName: 'Simon', firstName: 'Pierre', registrationDate: '2021-12-21', type: 'Professionnel', email: 'pierre.simon@example.com', phoneNumber: '0678901234' },
        { id: '009', lastName: 'Laurent', firstName: 'Emma', registrationDate: '2023-04-05', type: 'Particulier', email: 'emma.laurent@example.com', phoneNumber: '0612345098' },
        { id: '010', lastName: 'Bernard', firstName: 'Julie', registrationDate: '2022-03-09', type: 'Entreprise', email: 'julie.bernard@example.com', phoneNumber: '0712345609' },
        { id: '011', lastName: 'Dupuis', firstName: 'Lucas', registrationDate: '2023-01-30', type: 'Particulier', email: 'lucas.dupuis@example.com', phoneNumber: '0612389765' },
        { id: '012', lastName: 'Roux', firstName: 'Camille', registrationDate: '2020-10-22', type: 'Professionnel', email: 'camille.roux@example.com', phoneNumber: '0687654321' },
        { id: '013', lastName: 'Fournier', firstName: 'Thomas', registrationDate: '2021-11-13', type: 'Entreprise', email: 'thomas.fournier@example.com', phoneNumber: '0654321098' },
        { id: '014', lastName: 'Girard', firstName: 'Clara', registrationDate: '2022-08-07', type: 'Particulier', email: 'clara.girard@example.com', phoneNumber: '0612309876' },
        { id: '015', lastName: 'Gauthier', firstName: 'Hugo', registrationDate: '2023-05-01', type: 'Professionnel', email: 'hugo.gauthier@example.com', phoneNumber: '0687234567' },
        { id: '016', lastName: 'Perrin', firstName: 'Léa', registrationDate: '2021-07-19', type: 'Entreprise', email: 'lea.perrin@example.com', phoneNumber: '0612345987' },
        { id: '017', lastName: 'Faure', firstName: 'Nathan', registrationDate: '2022-05-15', type: 'Particulier', email: 'nathan.faure@example.com', phoneNumber: '0698765432' },
        { id: '018', lastName: 'Dumont', firstName: 'Alice', registrationDate: '2021-01-23', type: 'Professionnel', email: 'alice.dumont@example.com', phoneNumber: '0676543210' },
        { id: '019', lastName: 'Blanc', firstName: 'Mathieu', registrationDate: '2023-03-12', type: 'Entreprise', email: 'mathieu.blanc@example.com', phoneNumber: '0654321089' },
        { id: '020', lastName: 'Moulin', firstName: 'Elise', registrationDate: '2022-06-17', type: 'Particulier', email: 'elise.moulin@example.com', phoneNumber: '0623456789' },
        { id: '021', lastName: 'Dupont', firstName: 'Paul', registrationDate: '2022-07-20', type: 'Particulier', email: 'paul.dupont@example.com', phoneNumber: '0656781234' },
    ],
    isModalVisible: false,
      selectedUser: {},
      selectedUsers: [],
      selectedUsersMap: new Map(),
      currentPage: 1,
      usersPerPage: 10,
      searchQuery: '',
    };
  },
  async created(){
    this.users = await this.getAllUsers();
  },
  computed: {
    filteredUsers() {
      if (!this.searchQuery) {
        return this.users;
      }
      const query = this.searchQuery.toLowerCase();
      return this.users.filter(user =>
        user.nom.toLowerCase().includes(query) ||
        user.prenom.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
      );
    },
    totalUsers() {
      return this.users.length;
    },
    totalPages() {
      return Math.ceil(this.totalUsers / this.usersPerPage);
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.usersPerPage;
      const end = start + this.usersPerPage;
      return this.users.slice(start, end);
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
      this.users = await this.getAllUsers();
    },
    
    async getAllUsers(){
      
      let storedState = localStorage.getItem('store');
      let authToken = '';
      if (storedState){
        try{
        let state = JSON.parse(storedState);
        authToken = state.token;
      } catch (e){
        console.error("Failed to parse stored state", e);

      }}
     let response = await axios.get('http://localhost:8080/api/Users/',{
      headers: {
        'Authorization': `Bearer ${authToken}`
      }
     });
     let users = response.data;
     console.log("users :",users);
     return users
    },
    showUserDetails(user) {
      this.selectedUser = user;
      this.isModalVisible = true;
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex((user) => user.email === updatedUser.email);
      if (index !== -1) {
        this.users.splice(index, 1, updatedUser);
      }
    },
    selectAll(event) {
      if (event.target.checked) {
        this.selectedUsers = this.users.map((user) => user.id);
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
      } else {
        return null;
      }
    },
    async deleteSelectedUsers() {
      this.users = this.users.filter((user) => !this.selectedUsers.includes(user.id));
      console.log("Selected users:", this.selectedUsers);
      await axios.delete(`http://localhost:8080/api/account`,
       {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        },
        data: {
          users: this.selectedUsers
        }
      })
      .then((response) => {
        console.log("Users deleted successfully");
        this.selectedUsers = [];
      })
      .catch((error) => {
        console.error("Failed to delete users:", error);
      })
      
      
    },

    async disableUser() {
      this.users = this.users.filter((user) => !this.selectedUsers.includes(user.id));
      console.log("Selected users:", this.selectedUsers);
      axios.post(`http://localhost:8080/api/account/disable`,
      { users : this.selectedUsers}, {
        headers: {
          'Authorization': `Bearer ${this.getAuthToken()}`
        }
      }).then((response) => {
        console.log("Users disabled successfully");
      }).catch((error) => {
        console.error("Failed to disable users:", error);
      })
    },
    async activateSelectedUsers() {
      this.users = this.users.filter((user) => !this.selectedUsers.includes(user.id));
      console.log("Selected users:", this.selectedUsers);
      await axios.post('http://localhost:8080/api/account/activate',
      { users : this.selectedUsers},
      {
      headers: {
        'Authorization': `Bearer ${this.getAuthToken()}`
      }
     }).then((response) => {
        console.log("Users activated successfully");
      }).catch((error) => {
        console.error("Failed to activate users:", error);
      })
    },
    
    changePage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    changeUsersPerPage() {
      this.currentPage = 1; // Reset to first page when changing users per page
    },
  },
  components: {
    UserModal,
  },
  name: 'ListeClient',
};
</script>