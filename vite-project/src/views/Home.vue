<template>
    <div class="Home">
        <Hero />
        <Succe />
        <Solutions />
        <What />
        <Features />
        <Price />
        <FAQ />

        

    </div>
    <Footer />
</template>
<script>
import Footer from "../components/layouts/Footer.vue";
import FAQ from "../components/sections/FaqSection.vue";
import Succe from "../components/sections/SuccesSection.vue";
import What from "../components/sections/WhatIsSection.vue";
import Solutions from "../components/sections/SolutionsSection.vue";
import Hero from "../components/sections/HeroSection.vue";
import Features from "../components/sections/FeaturesSection.vue";
import Price from "../components/sections/PriceSection.vue";
export default {
    components:{ Footer, FAQ, Succe, What, Features,Solutions, Hero, Price},
   name :"Home",
   };
</script>
