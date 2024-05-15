<script setup>
import succes from '../../data/succes';
</script>

<template>
    <!-- Notre succes -->
    <div id="succes-section" class="container mx-auto px-5 md:w-4/5">
        <section class="py-16 pt-18">
            <div class="w-4/5 md:w-3/5 mx-auto">
                <h2 class="text-3xl md:text-4xl font-theme-heading font-medium text-center"><span style="font-wight:400; font-size: 50xpl=;">Notre succès</span></h2>
                <p class="text-theme-grayish-blue text-center text-lg font-theme-content mt-7"><span style="font-size: 18xpl=;">Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </span></p>
            </div>
            <div class="flex flex-wrap">
            <!-- You can adjust the class names and styles as needed -->
                <div v-for="(succe ,index) in succes" :key="index" class="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-1">
                    <div class="text-4xl font-bold mb-4"><span style="font-family: 'Buenos Aires Trial', sans-serif; font-style: normal; font-weight: 100; font-size: 57px; line-height: 100%; background: linear-gradient(90deg, #136CB5 0%, #49BBBD 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-fill-color: transparent;">{{succe.number}}</span></div>
                <div class="text-lg">{{succe.text}}</div>
            </div>
            </div>
        </section>
    </div>
    <!-- Download Section End -->
</template>

/* Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. */

width: 750px;
height: 58px;

font-family: 'Buenos Aires Trial';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 160%;
/* or 29px */
text-align: center;

/* Half dark text color */
color: rgba(1, 5, 20, 0.8);


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
/* Notre succès */

position: absolute;
width: 321px;
height: 62px;
left: 777px;
top: 1218px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 130%;
/* or 62px */
text-align: center;

color: #000000;

