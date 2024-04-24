<script setup>
    const props = defineProps({
        link: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        }

    })
</script>

<template>
    <li class="transform motion-safe:hover:scale-110 transition">
        <a  :href="link">
            <svg fill="#000000" width="32px" height="32px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" v-html="icon">

            </svg>
        </a>
    </li>
</template>