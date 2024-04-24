<script setup>
    import { ref, watchEffect, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useProductInfo } from '@/store/productInfo';
    import { useCartInfo } from '@/store/cartList.js';
    import { useWishListInfo } from '@/store/wishList.js';

    import icons from '@/icons.js';

    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';

    const selectedOption = ref('');
    const route = useRoute();
    const productId =  ref('');



    let cartList = useCartInfo();
    const productInfoStore = useProductInfo();

    onMounted(() => {
        productId.value = route.params.id;
        productInfoStore.getProductInfo(productId.value);

    });

    watchEffect(() => {
        productId.value = route.params.id;
        productInfoStore.getProductInfo(productId.value);
    });

    const wishList = useWishListInfo();
</script>


<template>
    <div class="flex gap-6 mb-8">
        <div class="w-full max-w-lg">
            <img
                class="w-full"
                :src="productInfoStore.productInfo.product_thumb"
                alt=""
            >
        </div>
        <div class="product__info">
            <div class="mb-6">
                <h3 class="text-3xl font-medium mb-2">
                    {{ productInfoStore.productInfo.product_name }}
                </h3>
                <p class="text-xl font-semibold">
                    {{ productInfoStore.productInfo.product_price }}
                    {{ productInfoStore.productInfo.product_cur_symbol }}
                </p>
            </div>
            <ul class="product__options flex gap-3 mb-5" v-for="(option, index) in productInfoStore.productInfo.options" :key="index">
                <li v-for="(value, index) in option.product_option_value" :key="index">
                    <div class="form__group relative w-8 h-8 flex justify-center items-center ">

                        <input
                            v-model="selectedOption"
                            class="form__input-radio absolute opacity-0 cursor-pointer"
                            type="radio"
                            name="options"
                            :value="value.name"
                            :id="`size_${index}${option.id}`"
                        >
                        <label class="block w-full border w-full text-xl text-center rounded-md cursor-pointer" :for="`size_${index}${option.id}`">
                            {{ value.name }}
                        </label>
                    </div>
                </li>
            </ul>
            <div class="text-2xl font-medium mb-3">
                <span ></span>
                <span></span>
            </div>
            <div class="flex mb-5 gap-5">
                <ButtonItemIcon :icon="icons.cart"
                    label="В кошик"
                    btnStyle="border-gray-200 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400"
                    @click="cartList.addProductToCart(productInfoStore.productInfo.product_id, productInfoStore.productInfo, selectedOption)"
                />
                <ButtonItemIcon
                    v-if="!wishList.isInWishList(productInfoStore.productInfo.product_id)"
                    @click="wishList.addProductToWishList(productInfoStore.productInfo.product_id, productInfoStore.productInfo)"
                    :icon="icons.wish" btnStyle="border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"
                />
                <ButtonItemIcon
                    v-else
                    :icon="icons.wishActive" btnStyle="border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"
                />

            </div>
            <div class="text-xl">
                <p>{{ productInfoStore.productInfo.product_name }}</p>
            </div>
        </div>

    </div>


</template>

<style scoped>
    .form__input-radio:checked + label {
        background: #000;
        color: aliceblue;
    }
</style>