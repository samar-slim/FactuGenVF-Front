<template>
  <div id="app" >

  <master />
      
  <Header></Header>
  </div>
</template>

<script >
import master from './components/pages/layout/master.vue';
import Header from './components/layouts/Footer.vue'

export default {
  name: 'App ',

  components: {
   master,
   
   
  },}
</script>

<style>
/* Styles spécifiques à App.vue */
</style>
