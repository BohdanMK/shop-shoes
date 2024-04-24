<script setup>

  import { useRoute } from 'vue-router';
  import { computed, onBeforeMount } from 'vue';
  import { useProductList } from '@/store/productList';




  const route = useRoute();

  const layout = computed(() => {
    return (route.meta.layout || 'empty') + '-layout';
  })

  const productListStore = useProductList();


    onBeforeMount(() => {
        productListStore.getProductList();

    });



</script>

<template>

  <component :is="layout">
    <router-view/>
  </component>
</template>

