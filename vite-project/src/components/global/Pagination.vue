<template>
    <div class="pagination">
      <span class="text-right font-normal text-gray-500 dark:text-gray-400">
        Showing <span class="font-semibold text-gray-900 dark:text-white">{{ startItem }}</span> to <span class="font-semibold text-gray-900 dark:text-white">{{ endItem }}</span> of <span class="font-semibold text-gray-900 dark:text-white">{{ totalItems }}</span>
      </span>
      <button @click="previousPage" :disabled="currentPage === 1"><i class="pi pi-chevron-left"></i></button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="changePage(page)"
        :class="{'active': currentPage === page}"
      >
        {{ page }}
      </button>
      <button @click="nextPage" :disabled="currentPage === totalPages"><i class="pi pi-chevron-right"></i></button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: {
        type: Number,
        required: true,
      },
      totalItems: {
        type: Number,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        required: true,
      },
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      startItem() {
        return (this.currentPage - 1) * this.itemsPerPage + 1;
      },
      endItem() {
        return Math.min(this.startItem + this.itemsPerPage - 1, this.totalItems);
      },
    },
    methods: {
      changePage(page) {
        if (page !== this.currentPage) {
          this.$emit('page-changed', page);
        }
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.changePage(this.currentPage - 1);
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.changePage(this.currentPage + 1);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .pagination span {
    margin-right: 20px;
  }
  
  .pagination button {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }
  
  .pagination button.active {
    background: #007bff;
    color: #fff;
    border-color: #007bff;
  }
  
  .pagination button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  </style>
  