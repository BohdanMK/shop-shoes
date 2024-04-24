<script setup>
    import { provide, ref } from 'vue';


    import TheHeader from '@/components/TheHeader.vue';
    import TheFooter from '@/components/TheFooter.vue';
    import CartPopUp from '@/components/popup/CartPopUp.vue';
    import SearchPopUp from '@/components/popup/SearchPopUp.vue';
    import WishListPopUp from '@/components/popup/WishListPopUp.vue';
    import CategoryPopUp from '@/components/popup/CategoryPopUp.vue';
import SuccessPopUp from '../components/popup/SuccessPopUp.vue';
import ErrorPopUp from '../components/popup/ErrorPopUp.vue';


    const openModal = ref(false);
    const openModalSearch = ref(false);
    const openModalWisth = ref(false);
    const openModalCatalog = ref(false);




    function openModalBlock() {
        console.log(openModal.value);
        openModal.value = true;
    };

    const closeModal = () => {
        console.log(openModal.value);
        openModal.value = false;
    };

    function openModalSearchFunc() {
        openModalSearch.value = true;
    };

    function closeModalSearchFunc() {
        openModalSearch.value = false;
    };

    function openModalWisthFun() {
        openModalWisth.value = true;
    };

    function closeModalWisthFun() {
        openModalWisth.value = false;
    };

    function openModalCatalogFun() {
        openModalCatalog.value = true;

    };

    function closeModalCatalogFun() {
        openModalCatalog.value = false;
    };



    provide('cartActions', {
        closeModal,
        openModalBlock,
        openModal
    });

</script>

<template>
    <div class="main-layout w-screen min-h-screen h-full">
        <div class="main-layout__block  pt-20">

            <ContainerBlock>
                <TheHeader
                    :openModalBlock="openModalBlock"
                    :openModalSearchFunc="openModalSearchFunc"
                    :openModalWisthFun="openModalWisthFun"
                    :openModalCatalogFun="openModalCatalogFun"
                />
                <SuccessPopUp/>
                <ErrorPopUp/>
                <router-view/>
                <TheFooter/>

            </ContainerBlock>

            <CartPopUp
                :openModal="openModal"
                :closeModal="closeModal"

            />
            <SearchPopUp
                :openModalSearch="openModalSearch"
                :closeModalSearchFunc="closeModalSearchFunc"
            />

            <WishListPopUp

                :openModalWisth="openModalWisth"
                :closeModalWisthFun="closeModalWisthFun"
            />

            <CategoryPopUp
                :openModalCatalog="openModalCatalog"
                :closeModalCatalogFun="closeModalCatalogFun"
            />

        </div>

    </div>
</template>


<style scoped>
    .main-layout {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: #E7F6FF;
    }
</style>