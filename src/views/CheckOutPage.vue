<script setup>
    import { ref, watch } from 'vue';
    import router from '@/router/index.js';
    import ButtonComon from '@/ui/button/ButtonComon.vue';
    import { useOrderInfo } from '@/store/orderInfo.js';
    import { useCartInfo } from '@/store/cartList.js';
    import { useAuthInfo } from '@/store/auth.js';
    import useCheckOutValidations from '@/validations/checkOutValidations';

    const loginInfo = useAuthInfo();
    const orderInfo = useOrderInfo();
    const commentField = ref('');

    const defaultAddress = ref('м.Київ, вулиця Стандартна 24');

    const { data, v, validateDataFields }  = useCheckOutValidations();

    const props = defineProps({
        closeModal: {
        type: Function,
        required: false
        },
        openModal: {
        type: Boolean,
        required: true
        }
    });

    const deliveryType = ref([
        {id: 1,  value: 'ukrpochta', name: 'Укрпочта'},
        {id: 2, value: 'novapochta', name: 'Нова Почта'},
        {id: 3, value: 'selfpickup', name: 'Самовивіз'},
    ]);

    const cartInfo = useCartInfo();

    const confirmOrder = ()=> {
        const resultValidations = validateDataFields();
        console.log(resultValidations);
        if(!resultValidations) {
            orderInfo.orderData.userInfo = data.value;
            orderInfo.orderData.productList = cartInfo.cartList;
            orderInfo.saveOrderData();
            router.push('/confirm');
        } else {

        }
    };

    watch(() => data.value.selectedDelivery, (newValue) => {
        console.log('123123');
        if (newValue === 'selfpickup') {
            data.value.addressOfDelivery = defaultAddress.value;
        }
    });
</script>

<template>
    <div class="checkout">
        <div class="container">
            <div class="checkout__wrapper flex gap-x-11 lg:flex-row flex-col" v-if="cartInfo.cartList.length > 0">
                <div class="checkout__list lg:w-6/12 w-full" >
                    <ul class="flex-auto flex flex-col gap-y-5 max-h-[626px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"

                    >
                        <li
                            v-for="(item, index) in cartInfo.cartList"
                            :key="index"
                            class="flex items-start gap-10 flex-col 2xl:flex-row xl:flex-row lg:flex-col"
                        >
                            <router-link :to="{ name: 'product', params: { id: item.product_id } }" class="max-w-36">
                                <img :src="item.product_thumb" alt="item">
                            </router-link>

                            <div class="h-full flex flex-col ">
                                <router-link :to="{ name: 'product', params: { id: item.product_id } }" class="max-w-96 text-xl font-medium hover:scale-x-105 ease-in duration-300">
                                    {{ item.product_name }}
                                </router-link>
                                <span class="block font-semibold text-lg text-lime-800">Розмір: {{ item.cart_option }}</span>
                                <div class="flex gap-2">
                                <ButtonComon
                                    @click="cartInfo.minusQuantity(item.cart_key)"
                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">-</ButtonComon>
                                <span class="block mt-1 mr-1">{{ item.cart_quantity }}  </span>
                                <ButtonComon
                                    @click="cartInfo.updateQuantity(item.cart_key)"
                                    class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                                >+</ButtonComon>
                            </div>
                                <span class="mt-auto text-xl lg:text-2xl font-medium">{{ item.product_price *  item.cart_quantity }} {{  item.product_cur_symbol }}</span>
                            </div>
                        </li>
                    </ul>

                </div>
                <div class="checkout__form lg:w-6/12 w-full  flex flex-col gap-y-5">
                    <h3 class="text-2xl lg:text-3xl text-center font-medium">Оформити замовлення</h3>
                    <!--name-->
                    <input-group
                        :value="v.nameField.$model !== null ? v.nameField.$model : loginInfo.user && (v.nameField.$model = loginInfo.user.providerData[0].displayName)"
                        v-model:value="v.nameField.$model"
                        label="Як до Вас звертатися"
                        type="text"
                        placeholder="Ваше імя"
                        name="name"
                        :error="v.nameField.$errors"
                    />
                    <!--soname-->
                    <input-group

                        label="Як Ваше прізвище"
                        type="text"
                        placeholder="Ваше прізвище"
                        name="soname"
                        v-model:value="v.soNameField.$model"
                        :error="v.soNameField.$errors"
                    />

                    <input-group
                        label="Ваш телефон"
                        type="tel"
                        placeholder="Ваш телефон"
                        name="phone"
                        v-model:value="v.telephoneField.$model"
                        :error="v.telephoneField.$errors"
                    />
                    <input-group
                        :value="v.emailField.$model !== null ? v.emailField.$model : loginInfo.user && (v.emailField.$model = loginInfo.user.email)"
                        label="Ваш email"
                        type="email"
                        placeholder="Ваш email"
                        name="phone"
                        v-model:value="v.emailField.$model"
                        :error="v.emailField.$errors"
                    />
                    <div class="delivery-type relative">
                        <ul class="delivery-type__list flex gap-4">
                            <li v-for="(item, index) in deliveryType" :key="index">
                                <radio-group
                                :value="item.value"
                                :label="item.name"
                                name="delivery"
                                v-model:checkedValue="v.selectedDelivery.$model"
                                :error="v.selectedDelivery.$errors"
                                />
                            </li>
                        </ul>
                        <div v-if="v.selectedDelivery.$errors.length > 0">
                            <TransitionGroup>
                                <div
                                    v-for="element in v.selectedDelivery.$errors"
                                    :key="element.$uid"
                                    class="text-red-700 text-xs absolute"
                                > {{ element.$message }} </div>
                            </TransitionGroup>
                        </div>
                    </div>
                    <input-group
                        v-if="v.selectedDelivery.$model !== 'selfpickup'"
                        label="Ваш адрес доставки"
                        type="tel"
                        placeholder="Ваш адерес(Місто , №відділення)"
                        name="phone"
                        v-model:value="v.addressOfDelivery.$model"
                        :error="v.addressOfDelivery.$errors"
                    />
                    <input-group
                        v-if="v.selectedDelivery.$model === 'selfpickup'"
                        boxClass="not-active"
                        label="Наша адреса"
                        type="tel"
                        placeholder="Наша адреса"
                        name="phone"
                        :value="defaultAddress"
                    />
                    <text-area-group
                        label="Ваш комент"
                        name="comment"
                        placeholder="Ваш комент"
                        v-model:value="data.commentField"
                    ></text-area-group>

                    <ButtonItem
                        @click="confirmOrder()"
                        btnStyle="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        label="Замовити"
                    />
                </div>
            </div>
            <div v-else class="flex justify-center mt-24">
                        <svg fill="#000000" height="240px" width="240px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 231.523 231.523" xml:space="preserve">
                                    <g>
                                        <path d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231
                                            l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z"/>
                                        <path d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468
                                            c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468
                                            C147.235,148.377,150.23,152.062,154.351,152.488z"/>
                                        <path d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221
                                            c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523
                                            c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215
                                            C104.494,212.835,100.808,216.523,96.278,216.523z"/>
                                        <path d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221
                                            c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523
                                            c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215
                                            C181.937,212.835,178.251,216.523,173.719,216.523z"/>
                                        <path d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876
                                            c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046
                                            c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z
                                            M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z"/>
                                        <path d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607
                                            L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z"/>
                                        <path d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606
                                            c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607
                                            C155.338,54.314,157.256,55.045,159.174,55.045z"/>
                                        <path d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502
                                            c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z"/>
                                    </g>
                                    </svg>

                    </div>
        </div>
    </div>
</template>

<style scoped>
    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }

    .not-active {
        pointer-events: none;
    }

    @media (max-width: 568px) {
        .delivery-type__list {
            flex-wrap: wrap;
        }
    }
</style>