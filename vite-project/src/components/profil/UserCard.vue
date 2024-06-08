<template>
  <div>
    <form @submit.prevent="handleSubmit" ref="form" id="login">
      <!-- Profile Section -->
      <div class="bg-white dark:bg-gray-800">
        <!-- Profile Image -->
        <div class="container mx-auto bg-white dark:bg-gray-800 rounded">
          <!-- Profile Header -->
          <div class="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">
            <div class="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p class="text-lg text-gray-800 dark:text-gray-100 font-bold">Profile</p>
              <div class="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                  <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <!-- Profile Picture and Cover Photo -->
          <div class="mx-auto">
            <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div class="rounded relative mt-8 h-48">
                <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form1.jpg" alt="" class="w-full h-full object-cover rounded absolute shadow" />
                <div class="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded"></div>
                <div class="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 cursor-pointer">
                  <p class="text-xs text-gray-100">Change Cover Photo</p>
                  <div class="ml-2 text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                  </div>
                </div>
                <div class="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img src="https://cdn.tuk.dev/assets/webapp/forms/form_layouts/form2.jpg" alt="" class="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0" />
                  <div class="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0"></div>
                  <div class="cursor-pointer flex flex-col justify-center items-center z-10 text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                    <p class="text-xs">Edit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Personal and Contact Information -->
          <div class="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
            <div class="flex flex-col md:flex-row justify-between mt-8 px-8">
              <!-- Personal Information -->
              <div class="w-full xl:w-5/12 mx-auto md:mx-0 xl:mx-2">
                <div class="pb-8">
                  <h2 class="text-lg text-gray-800 dark:text-gray-100 font-bold mb-4">Personal Information</h2>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-6">
                      <label for="firstName" class="text-sm block font-bold text-gray-600 dark:text-gray-400">First Name</label>
                      <input type="text" name="firstName" id="firstName" class="w-full border bg-gray-100 rounded px-3 py-2 outline-none focus:bg-white" />
                    </div>
                    <div class="w-full px-3 mb-6">
                      <label for="lastName" class="text-sm block font-bold text-gray-600 dark:text-gray-400">Last Name</label>
                      <input type="text" name="lastName" id="lastName" class="w-full border bg-gray-100 rounded px-3 py-2 outline-none focus:bg-white" />
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-6">
                      <label for="email" class="text-sm block font-bold text-gray-600 dark:text-gray-400">Email Address</label>
                      <input type="email" name="email" id="email" class="w-full border bg-gray-100 rounded px-3 py-2 outline-none focus:bg-white" />
                    </div>
                  </div>
                </div>
              </div>
              <!-- Contact Information -->
              <div class="w-full xl:w-5/12 mx-auto md:mx-0 xl:mx-2">
                <div class="pb-8">
                  <h2 class="text-lg text-gray-800 dark:text-gray-100 font-bold mb-4">Contact Information</h2>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-6">
                      <label for="phone" class="text-sm block font-bold text-gray-600 dark:text-gray-400">Phone Number</label>
                      <input type="text" name="phone" id="phone" class="w-full border bg-gray-100 rounded px-3 py-2 outline-none focus:bg-white" />
                    </div>
                  </div>
                  <div class="flex -mx-3">
                    <div class="w-full px-3 mb-6">
                      <label for="address" class="text-sm block font-bold text-gray-600 dark:text-gray-400">Address</label>
                      <input type="text" name="address" id="address" class="w-full border bg-gray-100 rounded px-3 py-2 outline-none focus:bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Submit Button -->
          <div class="flex justify-center mb-6">
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none">Save Changes</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      // Handle form submission here
      let formData = new FormData(this.$refs.form);
      // You can now access form data using formData object
      console.log("Form submitted", formData);
    }
  }
};
</script>

<style scoped>
/* Your component-specific styles go here */
</style>
