<template>
    <div class="rounded-xl p-4 bg-sky-100 w-fit card">
        <div class="rounded-lg bg-white w-fit p-2 mb-2">
            <slot name="logo"></slot>
        </div>
        <div class="text-xl font-bold mb-2">
            <slot name="title"></slot>
        </div>
        <div>
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.card {
    min-width: 300px
}
</style>
