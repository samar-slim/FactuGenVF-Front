<template>
  <div class="mt-12">
    
      <Popup @close="closePopup" :isVisible="showPopup" :user="selectedUser"    />


    <modal v-if="showModal" @close="closeModal"></modal>
    
    <!-- Statistiques des cartes -->
    <!-- cards -->
    <div class="w-full px-6 py-6 mx-auto">
      <!-- row 1 -->
      <div>
    <!-- Total Devis -->
    <div class="rounded-xl bg-clip-border bg-white text-gray-700 shadow-lg p-6 space-y-4">
      <div class="flex items-center space-x-4 mt-3 mb-3">
        <div class="p-4 bg-yellow-100 rounded-xl h-16 w-16 flex items-center justify-center">
          <div class="h-7 w-7 text-yellow-600 stroke-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 19V8l7 4-7 4zm0 0V5l7 4-7 4zm7-9v14m-7-4V5m0 0V3" />
            </svg>
          </div>
        </div>
        <div>
          <div class="text-gray-700 text-sm ml-2">Total Devis</div>
          <div class="text-gray-900 text-2xl font-semibold ml-2">{{ devisCount }}</div>
        </div>
      </div>
    </div>

    <!-- Total Factures -->
    <div class="rounded-xl bg-clip-border bg-white text-gray-700 shadow-lg p-6 space-y-4">
      <div class="flex items-center space-x-4 mt-3 mb-3">
        <div class="p-4 bg-purple-100 rounded-xl h-16 w-16 flex items-center justify-center">
          <div class="h-7 w-7 text-purple-600 stroke-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 7.009h18m-14 5h14m-14 5h14M6 7v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z" />
            </svg>
          </div>
        </div>
        <div>
          <div class="text-gray-700 text-sm ml-2">Total Factures</div>
          <div class="text-gray-900 text-2xl font-semibold ml-2">{{ factureCount }}</div>
        </div>
      </div>
    </div>

    <!-- Total Clients -->
    <div class="rounded-xl bg-clip-border bg-white text-gray-700 shadow-lg p-6 space-y-4">
      <div class="flex items-center space-x-4 mt-3 mb-3">
        <div class="p-4 bg-green-100 rounded-xl h-16 w-16 flex items-center justify-center">
          <div class="h-7 w-7 text-green-600 stroke-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M12 14s-8-4.5-8-8V3h16v3c0 3.5-8 8-8 8z" />
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M17.5 9c1.38 0 2.5-1.12 2.5-2.5S18.88 4 17.5 4 15 5.12 15 6.5s1.12 2.5 2.5 2.5z" />
            </svg>
          </div>
        </div>
        <div>
          <div class="text-gray-700 text-sm ml-2">Total Clients</div>
          <div class="text-gray-900 text-2xl font-semibold ml-2">{{ clientCount }}</div>
        </div>
      </div>
    </div>

    <!-- Total Avoirs -->
    <div class="rounded-xl bg-clip-border bg-white text-gray-700 shadow-lg p-6 space-y-4">
      <div class="flex items-center space-x-4 mt-3 mb-3">
        <div class="p-4 bg-red-100 rounded-xl h-16 w-16 flex items-center justify-center">
          <div class="h-7 w-7 text-red-600 stroke-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        <div>
          <div class="text-gray-700 text-sm ml-2">Total Avoirs</div>
          <div class="text-gray-900 text-2xl font-semibold ml-2">{{ avoirCount }}</div>
        </div>
      </div>
    </div>
  </div>

      <!-- cards row 2 -->
      <div class="flex flex-wrap mt-6 -mx-3">
        <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
          <div class="border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border">
            <div class="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid p-6 pt-4 pb-0">
              

<div class="flex justify-between mb-4">
  <div>
    <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">$12,423</h5>
    <p class="text-base font-normal text-gray-500 dark:text-gray-400">Sales this week</p>
  </div>
  <div
    class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
    23%
    <svg class="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
    </svg>
  </div>
</div>
<div id="data-labels-chart"></div>
<div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
  <div class="flex justify-between items-center pt-5">
    <!-- Button -->
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="lastDaysdropdown"
      data-dropdown-placement="bottom"
      class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
      type="button">
      Last 7 days
      <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    <!-- Dropdown menu -->
    <div id="lastDaysdropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
          </li>
          <li>
            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
          </li>
        </ul>
    </div>
    <a
      href="#"
      class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
      Sales Report
      <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
    </a>
  </div>
</div>


            </div>
            <div class="flex-auto p-4">
              <div>
                <canvas id="chart-line" height="300"></canvas>
              </div>
            </div>
          </div>
        </div>

        <div class="w-full max-w-full px-3 lg:w-5/12 lg:flex-none">
          <div slider class="relative w-full h-full overflow-hidden rounded-2xl">
            <!-- slide 1 -->
          
            <!-- slide 2 -->
            

            <!-- slide 3 -->
           
          <div class="relative flex flex-col h-full min-w-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="p-4 pb-0 mb-0 bg-white border-b-0 border-b-solid rounded-t-2xl border-b-transparent">
              <div class="flex flex-wrap -mx-3">
                <div class="flex items-center flex-none w-1/2 max-w-full px-3">
                  <h6 class="mb-0">Factures</h6>
                </div>
                <div class="flex-none w-1/2 max-w-full px-3 text-right">
                  <button class="inline-block px-8 py-2 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg shadow-none cursor-pointer leading-pro ease-soft-in text-xs bg-150 active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 border-fuchsia-500 text-fuchsia-500 hover:opacity-75">View All</button>
                </div>
              </div>
            </div>
            <div class="flex-auto p-4 pb-0">
              <ul class="flex flex-col pl-0 mb-0 rounded-lg">
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-t-inherit text-inherit rounded-xl">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2020</h6>
                    <span class="leading-tight text-xs">#MS-415646</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    $180
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">February, 10, 2021</h6>
                    <span class="leading-tight text-xs">#RV-126749</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    $250
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">April, 05, 2020</h6>
                    <span class="leading-tight text-xs">#FB-212562</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    $560
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 mb-2 bg-white border-0 rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">June, 25, 2019</h6>
                    <span class="leading-tight text-xs">#QW-103578</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    $120
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                  </div>
                </li>
                <li class="relative flex justify-between px-4 py-2 pl-0 bg-white border-0 rounded-b-inherit rounded-xl text-inherit">
                  <div class="flex flex-col">
                    <h6 class="mb-1 font-semibold leading-normal text-sm text-slate-700">March, 01, 2019</h6>
                    <span class="leading-tight text-xs">#AR-803481</span>
                  </div>
                  <div class="flex items-center leading-normal text-sm">
                    $300
                    <button class="inline-block px-0 py-3 mb-0 ml-6 font-bold leading-normal text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer ease-soft-in bg-150 text-sm active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25 text-slate-700"><i class="mr-1 fas fa-file-pdf text-lg"></i> PDF</button>
                  </div>
                </li>
              </ul>
            </div>
         
        </div>

            <!-- Control buttons -->
            <button btn-next class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-right active:scale-110 top-6 right-4"></button>
            <button btn-prev class="absolute z-10 w-10 h-10 p-2 text-lg text-white border-none opacity-50 cursor-pointer hover:opacity-100 far fa-chevron-left active:scale-110 top-6 right-16"></button>
          </div>
        </div>
      

      <!-- cards row 3 -->

    
 
<div class="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">



</div>
    </div>

    </div>
    
     

  </div>
  </template>
  <script>
import axios from 'axios';

export default {
  data() {
    return {
      devisCount: 0,
      factureCount: 0,
      clientCount: 0,
      avoirCount: 0,
    };
  },
  mounted() {
    this.fetchDevisCount();
    this.fetchFactureCount();
    this.fetchClientCount();
    this.fetchAvoirCount();
  },
  methods: {
    async fetchDevisCount() {
    try {
      const response = await axios.get('/api/devis/count'); // Assurez-vous que l'URL correspond à votre route backend
      console.log('Réponse du backend :', response.data);

      // Vérifiez si response.data.count est défini avant d'accéder à la propriété
      if (response.data && response.data.count !== undefined) {
        this.devisCount = response.data.count;
      } else {
        console.error('Réponse invalide du backend :', response.data);
        // Gérer le cas où response.data.count est indéfini ou incorrect
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du nombre de devis :', error);
      // Gérer l'erreur ici, par exemple afficher un message d'erreur à l'utilisateur
    }
  },
    async fetchFactureCount() {
      try {
        const response = await axios.get('http://localhost:8080/api/facture/count');
        this.factureCount = response.data.count;
      } catch (error) {
        console.error('Error fetching facture count:', error);
      }
    },
    async fetchClientCount() {
      try {
        const response = await axios.get('http://localhost:8080/api/client/count');
        this.clientCount = response.data.count;
      } catch (error) {
        console.error('Error fetching client count:', error);
      }
    },
    async fetchAvoirCount() {
      try {
        const response = await axios.get('http://localhost:8080/api/avoir/count');
        this.avoirCount = response.data.count;
      } catch (error) {
        console.error('Error fetching avoir count:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>