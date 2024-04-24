<script setup>
    import { ref } from 'vue';
    import icons from '@/icons.js';
    import { useWishListInfo } from '@/store/wishList.js';

    import ProductOptionPoupUp from '@/components/popup/ProductOptionPoupUp.vue';
    import ButtonItemWish from '../../ui/button/ButtonItemWish.vue';
    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';

    const props = defineProps({
        id: {
            type: [Number, String],
            default: true
        } ,
        thumb: {
            type: String,
            default: false
        },
        price: {
            type: String,
            default: false
        },
        name: {
            type: String,
            default: false
        },
        currency: {
            type: String,
            default: false
        },
        options: {
            type: Array,
            default: false
        },
        currency: {
            type: String,
            required: false
        },
        manufacturer: {
            type: String,
            required: false
        },
        item: {
            type: Object,
            default: false
        }

    });
    const statusModal = ref(false);
    const toggleStatusModal = (() => {
        statusModal.value = !statusModal.value
    });

    const selectedOptions = ref('');

    const addProduct = () => {
        console.log('Відбувся клік');
    }

    const wishList = useWishListInfo();

    const icon = icons.cart;

</script>


<template>
    <div
        class="product max-w-full sm:max-w-80 px-8 py-2 border border-gray-100 rounded-3xl transform motion-safe:hover:scale-105 shadow-md transition hover:shadow-lg"
    >
        <div class="product__head">

            <ButtonItemWish
                v-if="!wishList.isInWishList(id)"
                @click="wishList.addProductToWishList(id, item)"

            />
            <ButtonItemWish
                v-else
                fill="green"
                stroke="green"
            />
            <router-link :to="`/product/${id}`">

                <img class="m-auto sm:m-0" :src="thumb" alt="goods">
            </router-link>
        </div>
        <div class="product__body mb-2">
            <a href="/" class="text-sm uppercase">
                <h4> {{ name }}</h4>
            </a>
            <a href="/">
                <h6 class="text-xs font-medium cursor-pointer">
                    {{ manufacturer}}
                </h6>
            </a>
        </div>
        <div class="product__footer flex justify-between">
            <div class="">
                <span class="block uppercase text-stone-300 text-sm">Ціна:</span>
                <span class="font-bold">
                    <span>{{ price }}</span>
                    <span>{{ currency }}</span>
                </span>
            </div>
            <ButtonItemIcon :icon="icon"
                @click="toggleStatusModal()"
                :item="item"
                label="В кошик"
                btnStyle="border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400"
            />
        </div>
    </div>
    <ProductOptionPoupUp
        v-if="statusModal"
        :id="id"
        :item="item"
        :isOpen="statusModal"
        @backgroundClick="toggleStatusModal"
        @click="toggleStatusModal"
        @sendOptions="addProduct"
        :options="options"
    />
</template>