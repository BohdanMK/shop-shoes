<script setup>
    import { computed, watchEffect } from 'vue';
    import { useProductList } from '@/store/productList';
    import ProductItem from '@/components/product/ProductItem.vue';



    let productList = useProductList();
    const statusViewMoreBtn = computed(() => {
        return productList.searchList.length > productList.limitToShow ? productList.statusShowMoreBtn = true : productList.statusShowMoreBtn = false;
    });
    const displayedProducts = computed(() => productList.searchList.slice(0, productList.limitToShow));

    watchEffect(() => {
        statusViewMoreBtn
    })

</script>


<template>
    <div class="hidden"> {{ statusViewMoreBtn }}</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12 gap-y-3.5 gap-x-3.5">
        <ProductItem
            v-for="(item, index) in displayedProducts"
                :key="index"
                :item="item"
                :id="item.product_id"
                :thumb="item.product_thumb"
                :name="item.product_name"
                :price="item.product_price"
                :options="item.options"
                :currency="item.product_cur_symbol"
                :manufacturer="item.category_name"
        />


    </div>
</template>