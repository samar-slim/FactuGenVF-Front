<script setup>
    import { ref } from 'vue';

    let mobileNav = ref(false);

    let toggleMobileNav = () => {
        mobileNav.value = !mobileNav.value
    }
</script>

<template>
    <!-- Navbar Start -->
    
        <header class="flex justify-between py-12 items-center">
            <div>
                FactuGen
             </div>
            
            <nav class="flex justify-end flex-col md:flex-row">
                <!-- Menu Toggler -->
                <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>

                <!-- Desktop Menu -->
                <ul class="space-x-10 font-theme-heading font-medium items-center hidden md:flex  flex-col space-y-7 md:space-y-0 md:flex-row">
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#home" v-smooth-scroll>Home</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200" ><a href="#1" v-smooth-scroll>Services</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="#Prices" v-smooth-scroll>Tarifs</a></li>
                    <li class="uppercase hover:text-theme-secondary transition duration-200"><a href="/contact_us" v-smooth-scroll>Contactez Nous!</a></li>

                    <li class="uppercase by-theme-primary px-6 py-2 rounded-full shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200">
                        <a href="/Login
                        " v-smooth-scroll>Signin</a>
                    </li>
                    <li class="uppercase bg-theme-grayish-blue px-6 py-2 text-white rounded-full  shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200">
                        <a href="/SignUp" v-smooth-scroll>Sign Up</a>
                    </li>
                </ul>
            </nav>
        </header>

        
  
    <!-- Navbar End -->
</template>