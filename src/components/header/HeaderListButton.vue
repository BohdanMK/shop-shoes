<script setup>
    import { ref, defineEmits } from 'vue';

    import icons from '@/icons.js';
    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';
    import { useCartInfo } from '@/store/cartList';
    import { useAuthInfo } from '@/store/auth.js';
    import { useWishListInfo } from '@/store/wishList.js';


    const cartInfo = useCartInfo();
    const loginInfo = useAuthInfo();
    const wishListInfo = useWishListInfo();

    const listButtons = ref([
        {
            id: 1,
            name: '',
            icon: icons.cart,
            value: 'cart'
        },
        {
            id: 2,
            name: 'Пошук',
            icon: icons.search,
            value: 'search'
        },
        {
            id: 3,
            name: 'Закладки',
            icon: icons.wish,
            value: 'wish'
        },
        {
            id: 4,
            name: 'Профіль',
            icon: icons.user,
            value: 'account'
        },

    ]);

    const emits = defineEmits(['value']);

    const handleButtonClick = (value) => {

        emits('buttonClick', value);
    };


</script>

<template>
    <ul class="header-btns__list flex items-center justify-center">

        <li
            v-for="item in listButtons"
            :key="item.id"
        >
            <ButtonItemIcon v-if="item.value === 'cart'"
                :value="item.value"
                :label="cartInfo.getTotalValue"
                :icon="item.icon"
                :index_quantity="cartInfo.getTotalQuantity"

                @click="handleButtonClick(item.value)"
            />

            <ButtonItemIcon v-else-if="item.value === 'wish'"
                :value="item.value"
                :label="item.name"
                :icon="item.icon"
                :index_quantity="wishListInfo.getTotalQuantity"

                @click="handleButtonClick(item.value)"
            />
            <ButtonItemIcon
                v-else-if="item.value === 'account' && loginInfo.user"
                :user_status="loginInfo.user"
                is_link="/user/page"
                :value="item.value"
                :label="item.name"
                :icon="item.icon"

                @click="handleButtonClick(item.value)"
            />
            <ButtonItemIcon
                v-else-if="item.value === 'account' && !loginInfo.user"
                is_link="/login"
                :value="item.value"
                :label="item.name"
                :icon="item.icon"

                @click="handleButtonClick(item.value)"
            />
            <ButtonItemIcon v-else
                :value="item.value"
                :label="item.name"
                :icon="item.icon"

                @click="handleButtonClick(item.value)"
            />
        </li>
    </ul>
</template>

<style scoped>
    @media(max-width: 568px) {
        .header-btns__list {
            flex-wrap: wrap;
        }
    }
</style>