<template>
    <div v-if="visible" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg overflow-hidden w-1/2">
        <div class="p-4 border-b">
          <slot name="header">
            <h3 class="text-lg font-medium">Modal Title</h3>
          </slot>
        </div>
        <div class="p-4">
          <slot name="body">
            Modal Content
          </slot>
        </div>
        <div class="p-4 border-t">
          <slot name="footer">
            <button @click="close" class="px-4 py-2 bg-gray-500 text-white rounded">Close</button>
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  