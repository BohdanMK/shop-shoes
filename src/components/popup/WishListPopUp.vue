<script setup>

    import icons from '@/icons.js';
    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';
    import ButtonComon from '@/ui/button/ButtonComon.vue';
    import CartList from '@/components/cart/CartList.vue';

    import { useWishListInfo } from '@/store/wishList.js';

    const props = defineProps({
        cartList: {
            type: Array,
            required: false
        },
        closeModalWisthFun: {
            type: Function,
            required: false
        },
        openModalWisth: {
            type: Boolean,
            required: true
        }
    });

    const wishListInfo = useWishListInfo();

</script>


<template>

    <div
            @click="props.closeModalWisthFun()"
            :class="['embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible', { 'is-open': props.openModalWisth }]"
     >

    </div>
    <div :class="['wish-pop-up bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col', { 'is-open': props.openModalWisth }]">
        <div class="cart__head flex justify-between items-center">
            <h4 class="text-xl font-bold">Список побажань</h4>
                <ButtonItemIcon
                @click="props.closeModalWisthFun()"
                :icon="icons.close"
                />
        </div>
        <CartList
            v-if="wishListInfo.getTotalQuantity"
            :products="wishListInfo.wishList"
            wishList="true"
        />
        <div v-else
                    class="m-auto text-center"
                >
                    <h4 class="text-sky-950 font-semibold text-xl">Список бажаних товарів пустий</h4>
                    <svg class="m-auto"  xmlns="http://www.w3.org/2000/svg" height="140px" width="140px" viewBox="0 0 64 64" stroke-width="3" stroke="rgb(20 83 45)" fill="none"><path d="M9.06,25C7.68,17.3,12.78,10.63,20.73,10c7-.55,10.47,7.93,11.17,9.55a.13.13,0,0,0,.25,0c3.25-8.91,9.17-9.29,11.25-9.5C49,9.45,56.51,13.78,55,23.87c-2.16,14-23.12,29.81-23.12,29.81S11.79,40.05,9.06,25Z"/></svg>
                </div>
        <div class="cart__footer">



            <!-- <ButtonComon
                class="banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150 w-full flex  justify-center items-center"
                label="Оформить заказ"
                :iconSvg="icons.arrow"/> -->
        </div>
    </div>
</template>


<style scoped>
    .wish-pop-up {
        transform: translateX(100%);
        transition: all .2s linear;
    }

    .wish-pop-up.is-open {
        transform: translateX(0);
        transition: all .2s linear;
    }

    .embet {


    transition: all .2s linear;
    }
    .embet.is-open {
    opacity: .7;
    visibility: visible;
    transition: all .2s linear;
    }


</style>