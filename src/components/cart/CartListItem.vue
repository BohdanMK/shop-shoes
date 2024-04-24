<script setup>
    import icons from '@/icons.js';
    import ButtonComon from '@/ui/button/ButtonComon.vue';
    import { useCartInfo } from '@/store/cartList.js';
    import { useWishListInfo } from '@/store/wishList.js';

    const props = defineProps({
        id: {
            type: [Number, String],
            required: false
        },
        name: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        option: {
            type: String,
            required: false
        },
        price: {
            type: [Number, String],
            required: false
        },
        quantity: {
            type: Number,
            required: false
        },
        cartKey: {
            type: Number,
            required: false
        },
        wishList: {
            type: Boolean,
            default: false
        }

    });

    const cartInfo = useCartInfo();
    const wishListInfo = useWishListInfo();



</script>


<template>
    <div class="flex flex-auto border p-5 gap-2 rounded-2xl">
        <img class="max-w-16 max-h-16" :src="image" alt="">
        <div>
            <router-link :to="`/product/${id}`">
                {{ name }}
            </router-link>
            <div v-show="wishListInfo.isInWishList(id)">
            Товар в списку бажань
            </div>
            <div v-show="!wishListInfo.isInWishList(id)">
            Товар не в списку бажань
            </div>

            <span v-if="!wishList" class="block">Розмір: {{ option }}</span>
            <span v-if="!wishList">Кількість: {{ quantity }} </span>
            <div class="flex gap-2" v-if="!wishList">
                <ButtonComon
                    @click="cartInfo.minusQuantity(cartKey)"
                   
                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</ButtonComon>
                <ButtonComon
                    @click="cartInfo.updateQuantity(cartKey)"

                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >+</ButtonComon>
            </div>
            <span class="block font-bold ">
                <span>{{ price }}</span>
                <span>грн.</span>
            </span>

        </div>
        <ButtonComon
            v-if="!wishList"
            @click="cartInfo.removeCartItem(cartKey)" class="flex justify-center items-center bg-transparent w-8 h-6 rounded"
            :iconSvg="icons.closeCart"
        />
        <ButtonComon
            v-else
            @click="wishListInfo.removeWishListItem(id)" class="flex justify-center items-center bg-transparent w-8 h-6 rounded"
            :iconSvg="icons.closeCart"
        />

    </div>
</template>