<script setup>
    import { useCartInfo } from '@/store/cartList.js'

    const cartListInfo = useCartInfo();
</script>

<template>
    <Transition>
        <div class="p-4 w-full max-w-md max-h-full top-6 inset-x-2/4 -translate-x-2/4 fixed z-50" v-show="cartListInfo.visibleError">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 border-current shadow-md">
                <div class="p-4 md:p-5 text-center flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#f44336" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"/>
                        <path fill="#fff" d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"/><path fill="#fff" d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"/>
                    </svg>
                    <h3 class="text-lg font-normal text-red-400 dark:text-red-400">Виберіть опцію розміру!</h3>
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