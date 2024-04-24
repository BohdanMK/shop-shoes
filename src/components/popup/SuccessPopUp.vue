<script setup>
    import { useCartInfo } from '@/store/cartList.js'

    const cartListInfo = useCartInfo();
</script>

<template>
    <Transition>
        <div class="p-4 w-full max-w-md max-h-full top-6 inset-x-2/4 -translate-x-2/4 fixed z-50" ref="successPopUp" v-show="cartListInfo.visiblePopUp">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="p-4 md:p-5 text-center flex items-center gap-2 border-current shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"/></svg>
                    <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Товар успішно доданий в кошик:)</h3>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>