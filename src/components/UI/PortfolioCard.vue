<template>
    <div class="card">
        <div class="mb-4" style="height: 250px; width: 100%; overflow: hidden;">
            <img :src="project.img" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <div class="px-4 mb-4">
            <h1 class="text-xl font-semibold mb-2">
                {{ project.title }}
            </h1>
            <p class="mb-2"> {{ project.text }} </p>
            <button class="outline-none border-b-2 flex gap-2 items-center font-semibold text-sm">
                <a :href=project.link>View In Dribbble </a>
                <LinkIcon>
                </LinkIcon>
            </button>
        </div>
    </div>

</template>

<script setup>
import LinkIcon from '../icons/LinkIcon.vue'

const props = defineProps({
    project: {
        type: Object,
        required: true
    },

});
</script>

<style scoped>
.card {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    overflow: hidden;
    width: 32%;
    border-radius: 12px 12px 0 0;
}

.card img {
    border-radius: 12px;
}
</style>