<script setup>
    import { ref } from 'vue';

    import TheNav from '@/components/TheNav.vue';
    import HeaderBlockLogo from '@/ui/header/HeaderBlockLogo.vue';
    import HeaderListButton from '@/components/header/HeaderListButton.vue';


    const navLinks = ref([
        {
            id: 1,
            name: 'Nike',
            icon: '/shoes-shop/src/assets/images/brands/icons8-nike.svg',
            link: 'https://www.nike.com/',
        },
        {
            id: 2,
            name: 'Adidas',
            icon: '/shoes-shop/src/assets/images/brands/adidas.svg',
            link: 'https://www.adidas.com/',
        },
        {
            id: 3,
            name: 'Puma',
            icon: '/shoes-shop/src/assets/images/brands/puma.png',
            link: 'https://www.puma.com/',
        },
        {
            id: 4,
            name: 'Reebok',
            icon: '/shoes-shop/src/assets/images/brands/reebok-48.png',
            link: 'https://www.reebok.com/',
        },
        {
            id: 5,
            name: 'New Balance',
            icon: '/shoes-shop/src/assets/images/brands/icons8.png',
            link: 'https://www.newbalance.com/',
        },
        {
            id: 6,
            name: 'Vans',
            icon: '/shoes-shop/src/assets/images/brands/vans.png',
            link: 'https://www.vans.com/',
        },
    ]);



    const props = defineProps({
        openModalBlock: {
            type: Function,
            required: false
        },
        openModalSearchFunc: {
            type: Function,
            required: false
        },
        openModalWisthFun: {
            type: Function,
            required: false
        },
        openModalCatalogFun: {
            type: Function,
            required: false
        }
    })
    const handleButtonClickFromChild = (value) => {
        console.log(value);
        if(value === 'cart') {
            console.log(value);
            props.openModalBlock();
        }

        if(value === 'search') {
            props.openModalSearchFunc();
        }

        if(value === 'wish') {
            console.log('оПЕН ВІШ ЛІСТ')
            props.openModalWisthFun();
        }
    };


</script>

<template>
    <header class="border-b border-gray-300 pb-5 mb-8">
            <div class="flex justify-between mb-5 lg:flex-row flex-col">
                <div class="flex justify-between lg:flex-row flex-row-reverse">
                <ButtonItem

                    icon="fa-solid fa-bars"
                    @click="openModalCatalogFun()"
                />
                <HeaderBlockLogo
                    title="REACT SNEAKERS"
                    subTitle="Магазин лучших кроссовок"
                    image="/shoes-shop/src/assets/images/logo.png"

                />
            </div>
            <HeaderListButton               @buttonClick="handleButtonClickFromChild" />
        </div>

        <div>
            <TheNav :navLinks="navLinks"/>
        </div>
    </header>
</template>