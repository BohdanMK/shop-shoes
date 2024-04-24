<script setup>
    import { useOrderInfo } from '@/store/orderinfo.js';
    import ButtonComon from '@/ui/button/ButtonComon.vue';

    const orderInfo = useOrderInfo();
    const orderDataFromLocalStorage = JSON.parse(localStorage.getItem('orderData')) || {};




</script>


<template>
    <div>
        <h3 class="mb-3 text-3xl text-center font-semibold">Ваше замовлення</h3>
        <div >
            <div class="flex justify-center flex-col items-center">
                <div class="mb-5">
                    <h4 class="mb-3 text-xl font-semibold text-center">Товари в замовленні </h4>
                    <ul class="flex-auto flex flex-col gap-y-5 max-h-[626px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"

                        >
                        <li
                        v-for="(item, index) in orderDataFromLocalStorage.productList"
                        :key="index"
                        class="flex items-start gap-10"
                        >
                        <img :src="item.product_thumb" class="max-w-36" alt="item">

                        <div class="h-full flex flex-col ">
                            <h4 class=" text-lg font-medium hover:scale-x-105 ease-in duration-300">
                                {{ item.product_name }}
                            </h4>
                            <span class="block font-semibold text-sm text-lime-800">Розмір: {{ item.cart_option }}</span>
                            <div class="flex gap-2">
                                <span class="block mt-1 mr-1">{{ item.cart_quantity }} шт </span>
                            </div>
                            <span class="mt-auto text-lg font-medium">{{ item.product_price *  item.cart_quantity }} {{  item.product_cur_symbol }}</span>
                        </div>
                        </li>
                    </ul>
                </div>
                <div class="mb-5">
                    <h4 class="mb-3 text-xl font-semibold text-center">Інформація про клієнта</h4>
                    <ul class="text-center">
                        <li v-for="(item, index) in orderDataFromLocalStorage.userInfo" :key="index" class="mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            {{ item }}
                        </li>
                    </ul>

                </div>

            </div>
            <div class="text-center">
                <ButtonComon
                link="/thanks"
                class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    label="Підтвердити замовлення "
                />
            </div>

        </div>
    </div>

</template>

<style scoped>

</style>