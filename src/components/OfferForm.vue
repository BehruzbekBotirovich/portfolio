<template>
    <div class="main-container flex justify-center" id="contact">
        <div class="w-2/3 mb-6">
            <h3 class="text-center">Get in touch</h3>
            <h1 class=" text-center text-4xl font-bold mb-4 leading-snug mb-4">Contact Me </h1>
            <p class="mb-6">I'd love to hear from you! Whether you have a question, a project idea, or just want to
                connect, feel
                free to drop me a message. I'll do my best to get back to you as soon as possible.</p>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Flex container for Name and Email inputs -->
                <div class="flex gap-4">
                    <div class="flex-1">
                        <label for="name" class="block   font-semibold ">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name"
                            class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:shadow-lg        focus:outline-indigo-500"
                            required />
                    </div>
                    <div class="flex-1">
                        <label for="email" class="block   font-semibold ">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email"
                            class="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm  focus:shadow-lg    focus:outline-indigo-500"
                            required />
                    </div>
                </div>
                <!-- Textarea for message -->
                <div>
                    <label for="message" class="block font-semibold ">Message</label>
                    <textarea id="message" name="message" placeholder="Type your message"
                        class="mt-1 block p-3 w-full border border-gray-300 rounded-md shadow-sm focus:shadow-lg focus:outline-indigo-500"
                        rows="4" required></textarea>
                </div>
                <div class="text-center ">
                    <button type="submit"
                        class="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Send
                    </button>
                </div>

            </form>
        </div>

    </div>

</template>

<script setup>
const handleSubmit = () => {
    // Handle form submission logic here
    alert('Form submitted!');
}
</script>

<style scoped></style>