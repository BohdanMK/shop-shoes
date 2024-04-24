<script setup>
    import { onMounted, onBeforeMount } from 'vue';
    import ButtonComon from '@/ui/button/ButtonComon.vue';

    const clearDataInLocalStorage = () => {
        localStorage.removeItem('orderData');
        localStorage.removeItem('cartList');
    }

    onBeforeMount(() => {
        clearDataInLocalStorage(); // Видалення даних перед отриманням
        const orderData = JSON.parse(localStorage.getItem('orderData')) || {};
    });

</script>


<template>
    <Transition>
        <div class="thnks-popup w-full max-w-sm shadow text-center px-7 py-3 rounded-3xl bg-white m-auto static inset-x-2/4 top-40 z-20">
            <img class="m-auto mb-5" src="/src/assets/thnks.png" alt="thnks">
            <h5 class="mb-3 text-3xl text-center font-semibold">Дякую, за замовлення:)</h5>
            <ButtonComon
                @click="clearDataInLocalStorage()"
                class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                label="До покупок"
                link="/home"
            />
        </div>
    </Transition>

</template>
<style scoped>
    /* .thnks-popup {
        display: none;
    } */

    .thnks-popup.is-open {
        display: block;
    }

    .embet {
        transition: all .2s linear;
    }
    .embet.is-open {
    opacity: .7;
    visibility: visible;
    transition: all .2s linear;
    }

    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }


</style>