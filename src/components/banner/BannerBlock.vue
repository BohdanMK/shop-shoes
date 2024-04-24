<script setup>
    import { ref } from 'vue';

    import BannerBlockSlider from '../swiper/BannerBlockSlider.vue';

    const slides = ref([
        {
            id: 1,
            label: 'Just do it! Buy now',
            product_id: '414',
            background: '/shoes-shop/src/assets/images/banner-1.jpg',
        },
        {
            id: 2,
            label: 'Stan Smith, Forever!',
            product_id: '141',
            background: '/shoes-shop/src/assets/images/banner-2.jpg',
        },
    ]);

</script>


<template>
    <BannerBlockSlider  :slides="slides"/>
</template>