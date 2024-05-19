<script setup>
import { ref } from "vue";
import Swal from "sweetalert2";

let email = ref("");
let emailError = ref(false);
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

let handleSubmit = () => {
    if (!email.value || !emailRegex.test(email.value)) {
        emailError.value = true;
    } else {
        console.log(emailRegex.test(email.value));
        Swal.fire({
            icon: "success",
            title: "Thank You",
            text: `${email.value} subscribed to our newsletter!`,
        });
    }
};
</script>

<template>
    <!-- Footer Start -->
    <footer class="footer bg-theme-dark-blue py-10">
        <div class="container mx-auto px-5">
            <div class="grid md:grid-cols-2">
                <div class="flex flex-col md:flex-row md:space-x-12 items-center">
                    <div class="mb-10 md:mb-0">
                       <img src="/images/log_1.png" alt="Logo" class="logo"/>
                    </div>
                    <ul class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading">
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#features" v-smooth-scroll>About</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#faq" v-smooth-scroll>Privacy</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#download-section" v-smooth-scroll>Licensing</a>
                        </li>
                        <li class="uppercase text-white hover:text-theme-secondary transition duration-200">
                            <a href="#download-section" v-smooth-scroll>Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="md:place-self-end place-self-center mt-10 md:mt-0">
                    
                </div>
            </div>

            <form @submit.prevent="handleSubmit()" class="footer-form">
                <div class="flex flex-col lg:flex-row justify-end items-end m-auto">
                    <div class="relative w-full lg:w-1/4 font-theme-content">
                        <input v-model="email" @input="emailError = false" class="w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300" type="text" name="newsletter_email" placeholder="Enter your email address" />
                        <div v-show="emailError">
                            <div class="absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded-full ">Whoops, make sure it's an email</div>
                        </div>
                    </div>

                    <Button type="submit" btn-type="secondary" class="mt-3 lg:mt-0 rounded bg-blue-500 text-white]">Subscribe</Button>
                </div>
            </form>
        </div>
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a  class="hover:underline">FactuGen™</a>. All Rights Reserved.</span>
    </footer>
    <!-- Footer End -->
</template>
<style scoped>
    .footer {
        height: 300px; /* Adjust the height as needed */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .footer-form {
        width: 100%;
    }

    .logo {
        max-width: 100px; /* Set maximum width for the logo */
    }


    @media (min-width: 768px) {
        .footer {
            height: auto; /* Reset height for larger screens */
        }
    }
</style>