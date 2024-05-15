<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden lg:overflow-x-visible relative">
        <!-- Curved Background -->
        <div class="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-b-[100%]"></div>
        <section class="relative pb-16 pt-8 items-center">
            <!-- Content -->
            <div class="grid grid-cols-none lg:grid-cols-2">
                <div class="lg:w-5/6 order-2 lg:order-none relative z-10">
                    <h1 class="text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left">Facilitez la gestion de vos finances avec <span class="text-orange-500">FactuGen</span></h1>
                    <div class="flex justify-center lg:justify-start mt-10">
                        <LinkButton btn-type="primary" link="#download-section" class="by-theme-primary">Commencer</LinkButton>
                        <LinkButton btn-type="muted" link="#download-section" class="z-10">Voyez-le en action</LinkButton>
                    </div>
                </div>
                <!-- Image -->
                <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                    <img class="z-10 right-0 w-full" src="/images__4_-removebg-preview 1.png" />
                </div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>

<script>
import LinkButton from "../LinkButton.vue";
export default {
    components:{LinkButton}
}
</script>


