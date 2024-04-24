<script setup>
    import { ref } from 'vue';
    import icons from '@/icons.js';
    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';
    import { useWishListInfo } from '@/store/wishList.js';



    const props = defineProps({
        productList: {
            type: Array,
            required: false
        }

    });

    const wishListInfo = useWishListInfo();

</script>


<template>
    <li
        class="mb-4 sm:mb-0"
        v-for="(item, index) in productList"
        :key="index"
    >
        <div class="flex gap-x-8 items-center flex-col sm:flex-row">
            <a href="">
                <img class="max-w-32 max-h-32" :src="item.product_thumb" alt="">
            </a>
            <div class="flex-auto">
                <router-link :to="`/product/${item.product_id}`">
                    {{ item.product_name }}
                </router-link>

                <span class="block font-bold text-center sm:text-left">
                    <span>{{ item.product_price }}</span>
                    <span>грн.</span>
                </span>

            </div>
            <!-- {{ !wishListInfo.isInWishList(id) }} -->
            <ButtonItemIcon :icon="icons.wish"
                v-if="!wishListInfo.isInWishList(item.product_id)"
                @click="wishListInfo.addProductToWishList(item.product_id, item)"
                label="В список" btnStyle="max-h-16 border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400 text-nowrap"
            />
            <ButtonItemIcon
                v-else
                :icon="icons.wishActive" btnStyle="border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition text-gray-400"
            />
        </div>
    </li>
</template>