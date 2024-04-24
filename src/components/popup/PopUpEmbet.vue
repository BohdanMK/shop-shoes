<script setup>
     import { inject } from 'vue';

    // Inject openModal з провайдера
    const { openModal } = inject('cartActions');

</script>


<template>
    <div :class="['embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible', { 'is-open': openModal }]">
        {{ openModal }}
    </div>
</template>

<style scoped>
    .embet {
     

        transition: all .2s linear;
    }
    .embet.is-open {
        opacity: .7;
        visibility: visible;
        transition: all .2s linear;
    }
</style>