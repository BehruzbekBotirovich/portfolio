<template>
    <div class=" py-10">
        <div class="main-container  items-center">
            <!-- title -->
            <h1>My skills</h1>
            <h3 class="text-4xl font-bold mb-4 leading-snug mb-6">My Expertise</h3>


            <div class="flex gap-4 justify-center">
                <card data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                    <template #logo>
                        <StrategyIcon></StrategyIcon>
                    </template>
                    <template #title>
                        <p>Strategy & Direction</p>
                    </template>
                    <template #text>
                        <p>We create tailored strategies to meet your business goals by analyzing market trends and your
                            target audience.</p>
                    </template>
                </card>
                <card data-aos="fade-up" data-aos-duration="500" data-aos-delay="400">
                    <template #logo>
                        <LogoIcon></LogoIcon>
                    </template>
                    <template #title>
                        <p>Strategy & Direction</p>
                    </template>
                    <template #text>
                        <p>We create tailored strategies to meet your business goals by analyzing market trends and your
                            target audience.</p>
                    </template>
                </card>

                <card data-aos="fade-up" data-aos-duration="500" data-aos-delay="600">
                    <template #logo>
                        <UiIcon></UiIcon>
                    </template>
                    <template #title>
                        <p>Strategy & Direction</p>
                    </template>
                    <template #text>
                        <p>We create tailored strategies to meet your business goals by analyzing market trends and your
                            target audience.</p>
                    </template>
                </card>

                <card data-aos="fade-up" data-aos-duration="500" data-aos-delay="800">
                    <template #logo>
                        <CodIcon></CodIcon>
                    </template>
                    <template #title>
                        <p>Strategy & Direction</p>
                    </template>
                    <template #text>
                        <p>We create tailored strategies to meet your business goals by analyzing market trends and your
                            target audience.</p>
                    </template>
                </card>

            </div>
        </div>
    </div>
    <!-- About me -->

    <div class="py-8" id="about">
        <div class="main-container flex items-center  justify-between">

            <div class=" w-5/12" data-aos="fade-right" data-aos-duration="500" data-aos-delay="200"> <img
                    src="../assets/images/AboutMe.png" width="500"></div>
            <div class="w-6/12" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                <h1 class="text-4xl font-bold mb-4 leading-snug mb-6">About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin
                    amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
                    scelerisque
                    ac adipiscing velit non nulla in amet pellentesque.
                    Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet
                    pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import Card from './UI/Card.vue'
import StrategyIcon from './icons/StrategyIcon.vue'
import UiIcon from './icons/UiIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
import CodIcon from './icons/CodIcon.vue'

</script>

<style scoped></style>