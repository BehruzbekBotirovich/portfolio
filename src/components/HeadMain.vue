<template>
    <div class="main-container p-6 bg-white">
        <nav class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <img class="rounded-full" src="../assets/images/logo.webp" width="40" height="40">
                <div class="font-bold text-2xl">Behruz</div>
            </div>
            <ul class="flex gap-8">
                <li class="cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-lg"  @click.prevent="scrollTo('about')">About</li>
                <li class="cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-lg"  @click.prevent="scrollTo('portfolio')">Postfolio</li>
                <li class="cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-lg"  @click.prevent="scrollTo('contact')">Contact</li>
                <li class="cursor-pointer hover:bg-gray-200 px-4 py-1 rounded-lg"  @click.prevent="scrollTo('Testimal')">Testimonials</li>
            </ul>
            <div>
                <button class="py-3 px-5 border-2 border-blue-800  font-semibold rounded text-blue-800">Contact
                    Me</button>
            </div>
        </nav>
    </div>


    <div class=" py-10 bg-blue-100 ">
        <div class="flex main-container  items-center">
            <!-- title -->
            <div data-aos="fade-right" data-aos-duration="500" data-aos-delay="200" class=" w-1/2">
                <h1 class="text-semibold mb-4 ">Hey , I am Behruz</h1>
                <p class="text-4xl font-bold mb-4 leading-snug ">Creating Engaging Web Experiences,
                    <span class="text-indigo-600 font-bold">Junior Frontend Developer</span>
                </p>

                <p class="mb-4 ">Hello! I'm Behruz, a passionate junior frontend developer. I specialize in creating
                    engaging web
                    experiences and designing innovative products. With a keen eye for detail and a love for coding.
                    Welcome to my portfolio, where creativity meets technology.

                </p>
            </div>
            <!-- img -->
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
                <img class="" src="../assets/images/MyImg.png" alt="" width="600">
            </div>
        </div>

    </div>

</template>

<script setup>
const scrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<style scoped></style>