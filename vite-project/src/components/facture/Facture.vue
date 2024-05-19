<template>
  <div>
    <button @click="toggleSidebar" class=" bg-teal-400  border border-white rounded-full h-auto  w-auto">Change Facutre </button>

    <Sidebar 
      :isOpen="isSidebarOpen" 
      :selectedTemplate="selectedTemplate" 
      :backgroundColor="backgroundColor" 
      :headerColor="headerColor" 
      :textColor="textColor"
      @update:selectedTemplate="selectedTemplate = $event"
      @update:backgroundColor="backgroundColor = $event"
      @update:headerColor="headerColor = $event"
      @update:textColor="textColor = $event"
      @toggle-sidebar="toggleSidebar"
    />

    <div class="invoice-container">
      <component 
        :is="selectedTemplate" 
        :background-color="backgroundColor" 
        :header-color="headerColor" 
        :text-color="textColor" 
      />
    </div>
  </div>
</template>

<script>
import Sidebar from './FactureSidebar.vue';
import Template1 from './Template1.vue';
import Template2 from './Template2.vue';
import Template3 from './Template3.vue';

export default {
  components: {
    Sidebar,
    template1: Template1,
    template2: Template2,
    template3: Template3
  },
  data() {
    return {
      isSidebarOpen: false,
      selectedTemplate: 'template1',
      backgroundColor: '#f8f8f8',
      headerColor: '#374151',
      textColor: '#374151'
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
/* Add any styles specific to the main component here */
.invoice-container {
  margin-left: 20px;
  padding: 20px;
}
</style>

