<script setup>
import { onMounted, ref } from 'vue';

const targetElement = ref(null);
const emit = defineEmits(['response'])

onMounted(() => {
    console.log(targetElement.value);
    const options = {
        root: null, // Стежимо за всім документом
        rootMargin: "0px",
        threshold: 1.0,
    };

    const observerCallback = (entries, observer) => {
        if(entries[0].isIntersecting) {
            emit('response');
        }

    };

    const observer = new IntersectionObserver(observerCallback, options);
    observer.observe(targetElement.value);
});

</script>

<template>
    <div class="observer" ref="targetElement"></div>
</template>

<style scoped>
    .observer {
        width: 100%;
        height: 30px;
        background-color: aquamarine;
    }
</style>
