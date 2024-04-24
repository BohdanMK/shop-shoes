<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: false
        }
    });


</script>



<template>
    <h2 :class="$attrs.class ||'font-bold text-4xl'">{{ label }}</h2>
</template>