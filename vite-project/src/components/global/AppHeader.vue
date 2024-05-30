<template>
  <div class="w-full bg-blue-400 ">
    <div class="flex justify-between  items-center h-[50px]">
      <div class="p-4 cursor-pointer  hover:bg-gray-50" @click="clickHambuger">
        <i class="pi pi-bars"></i>
      </div>
     
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <ul v-show="isAdmin" class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
          <li>
            <router-link to="/admin/ListeUsers" class="block py-2 px-3 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">User Management</router-link>
          </li>
          <li>
            <router-link to="/admin/ListeReclamation" class="block py-2 px-3 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">reclamation</router-link>
          </li>
          <li>
            <router-link to="/admin/backup" class="block py-2 px-3 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">backup </router-link>
          </li>
        </ul>

      <ul v-show="!isAdmin" class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blue-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  ">
        <li>
          <router-link to="/user/devis"
           
          class="block py-2 px-3 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">Devis</router-link>
        </li>
        <li>
          <router-link to="/user/facture" class="block py-2 px-3 text-white rounded hover:bg-white-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">Facture</router-link>
        </li>
        <li>
          <router-link to="/user/client" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">Client</router-link>
        </li>
        <li>
          <router-link to="/user/reclamation" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold dark:border-gray-700">Reclamation</router-link>
        </li>
      </ul>
    </div>
      <nav>
      <div class="flex items-center">
          <div class="flex items-center ms-3">
            <div class="flex items-center md:ml-auto md:pr-4">
              <div class="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                <span class="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                  <i class="fas fa-search text-left "></i>
                </span>
                <input type="text" class="pl-8.75  text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder="        Type here..." />
              </div>
            </div>
            <div  class="lg:flex lg:flex-grow items-center">
  <ul class="flex flex-col lg:flex-row list-none ml-auto">
    <li class="nav-item">
      <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
        
        <i class="fas fa-bell text-white text-lg mr-2" @click="toggleNotification"></i>
      </a>
    </li>
<!-- admin icons -->
<div class="w-[200px] ">
            <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
    <div class="nav-item">
      <div class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
        <Avatar icon="pi pi-user" class="mr-2" style="background-color:#9c27b0; color: #ffffff"   shape="circle"  aria-haspopup="true" aria-controls="overlay_menu" />
          <div class="text-xs text-gray-500 dark:text-gray-400">Admin</div>
        
    
</div>
      </div>
      </div>
   
    
       <!-- Drop down -->
       <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1 text-left" role="none">
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
               
              </div>
          
           
          </div>
        </div>  
            
 </ul>
            </div>
          
          </div>
        
        </div>
      </nav>
    </div>
  
  </div>

</template>

<script>
import {mapActions , mapGetters} from 'vuex';
export default {
  name:"app-header",
  props: {
    dataOpenSideBar: Boolean,
    clickHambuger: Function
  },
  data() {
    return {
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-refresh',
          command: () => {
            this.$toast.add({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          }
        },
        {
          label: 'Change Password',
          icon: 'pi pi-times',
          command: () => {
            this.$toast.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          }
        },
      ],
      
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn']),
    isAdmin() {
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
      console.log("is admin :", isAdmin)
      return isAdmin;
    }
  },
  methods: {
    toggle(event) {
      this.$refs.menu.toggle(event);
    },
    ...mapActions(['logoutUser']),
    

    

    logout(){
      this.logoutUser().then(()=> {
        this.$router.push('/login');
      })
      .catch(error=> {
        console.error('Logout failed:', error );
      });
    },
    
  },
  mounted() {
    // Force update of isAdmin to trigger reactivity
    this.isAdmin = this.isAdmin;
  }

}
</script>

<style>

</style>