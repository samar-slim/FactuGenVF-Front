<template>
  <div>
    <div class="flex-1 bg-gray-50">
      <div class="container mx-auto py-8 px-4">
        <h1 class="text-2xl font-semibold mb-8">Nouvelle Reclamation</h1>
        <div class="flex justify-end primaryColor">
          <button
            type="button"
            class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="clearForm"
          >
            <i class="pi pi-trash"></i>
          </button>

          <button
            type="button"
            class="px-4 py-2 text-sm font-medium bg-blue-800 text-gray-900 bg-blue border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            @click="submitForm"
          >
            Envoyer <i class="pi pi-send"></i>
          </button>
        </div>

        <div class="container mx-auto py-8 px-4">
          <div class="border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Titre</label>
              <input
                type="text"
                class="form-input w-full border border-gray-300 rounded-md px-3 py-2"
                placeholder="Titre"
                v-model="form.title"
              />
            </div>
            <div class="col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                class="form-textarea w-full border border-gray-300 rounded-md px-3 py-2"
                rows="3"
                placeholder="Description"
                v-model="form.discription"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters} from 'vuex'; 


export default {
  computed:{
    ...mapGetters(['getToken','getUser'])
  },
  data() {
    return {
      form: {
        title: '',
        discription: ''
      }
    };
  },
  methods: {
    submitForm() {
      const authToken = this.getToken; // Adjust this line based on where you store your token
      this.form.user = this.getUser; 
      axios.post("http://localhost:8080/api/reclamation/add", this.form, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
      .then(response => {
        const { data } = response;
        console.log(data.status);
        try {
          if (data.status === 201) {
            alert("Bug reported successfully.");
            this.clearForm();
            window.location.reload();
          } else {
            alert("Bug report submission failed.");
          }
        } catch (err) {
          console.log(err);
          alert("Error, please try again.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("An error occurred while reporting the bug. Please try again.");
      });
    },
    clearForm() {
      this.form.title = '';
      this.form.description = '';
    }
  }
};
</script>

<style scoped>
.flex-1 {
  flex: 1;
}
.primaryColor {
  color: blue;
}
</style>


