<template>
  <!-- component -->
  <div class=" min-h-screen bg-cover bg-center" >
    <div class="backdrop-blur-sm min-h-screen flex items-center justify-center">
     <!--  <img src="c:/Users/hp/Downloads/49 Best Side Hustle Ideas that Can Make $100k+ Per Month.jpeg" alt="Image" class="h-[900px] w-[2000px] blur(5px)" /> -->
    </div>
    <div class="flex justify-between items-center absolute bottom-0 left-1/2 transform -translate-x-1/4 w-[10000px] max-w-2xl p-1 space-x-4">
      <button @click="navigateToListeDevis" class="bg-blue-400 font-bold bg-opacity-60 hover:bg-opacity-80 text-black  py-60 px-20 w-full max-w-xs rounded backdrop-blur-sm">
        Générer facture par un devis
      </button>
      <button @click="navigateToNewFacture" class="bg-blue-400 font-bold bg-opacity-60 hover:bg-opacity-80 text-black py-60 px-20 w-full max-w-xs rounded backdrop-blur-sm">
        Générer manuellement
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToListeDevis() {
      this.$router.push('/ListeDevis');
    },
    navigateToNewFacture() {
      this.$router.push('/newFacture');
    },
  }
}
</script>

<style scoped>

</style>
