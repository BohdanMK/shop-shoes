<script setup>
    import CartListItem from '@/components/cart/CartListItem.vue';

    const props = defineProps({
        products: {
            type: Array,
            required: false
        },
        wishList: {
            type: [Boolean, String],
            default: false
        }
    });
</script>


<template>
    <ul class="flex-auto flex flex-col gap-y-5 max-h-[626px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <li
            v-for="(item, index) in products"
            :key="index"
        >
            <CartListItem

                :id="item.product_id"
                :image="item.product_thumb"
                :price="item.product_price"
                :option="item.cart_option"
                :name="item.product_name"
                :cartKey="item.cart_key"
                :quantity="item.cart_quantity"
                :wishList="wishList"
            />
        </li>
    </ul>

</template>