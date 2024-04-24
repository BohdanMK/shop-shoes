<script setup>
    import { ref, onMounted, watch } from 'vue';
    import icons from '@/icons.js';
    import CartList from '@/components/cart/CartList.vue';
    import { useCartInfo } from '@/store/cartList.js';
    import { useWishListInfo } from '@/store/wishList.js';
    import { useAuthInfo } from '@/store/auth.js';
    import userValidations from '@/validations/userValidations';
    import ButtonComon from '@/ui/button/ButtonComon.vue';
    import AuthInfoActionPopUp from '@/components/popup/AuthInfoActionPopUp.vue';


    const loginInfo = useAuthInfo();
    const { data, v } = userValidations();

    const statusNameFiled = ref(false);
    const statusEmailFiled = ref(false);
    const statusPassFiled = ref(false);

    const nameFieldBtn = ref(statusNameFiled.value ? 'Зберегти' : 'Редагувати');
    const emailFieldBtn = ref(statusEmailFiled.value ? 'Зберегти' : 'Редагувати');
    const passwordFieldBtn = ref(statusPassFiled.value ? 'Зберегти' : 'Змінити');


    const userEmail = loginInfo.user && loginInfo.user.email ? loginInfo.user.email : '';

    const tabs = [
        { name: 'Info', label: 'Про користувача' },
        { name: 'CartList', label: 'В корзині' },
        { name: 'WishList', label: 'В списку побажань' },
    ];
    const selectedTab = ref('Info');

    const changeTab = (tabName) => {
        console.log(tabName);
        selectedTab.value = tabName;
    };

    const cartInfo = useCartInfo();
    const wishListInfo = useWishListInfo();

    const updateName = async (newName) => {
       if(statusNameFiled.value) {
        await loginInfo.updateUserName(newName);
       }

    };

    const updateEmail =  async (newEmail) => {
        if(statusEmailFiled.value) {
            await loginInfo.changeEmail(newEmail);
        }

    }

    // update password

    const updatePassword =  async (newPassword) => {
        await loginInfo.changePassword(newPassword);

    }

    const toggleStatusField = () => {
        statusNameFiled.value = !statusNameFiled.value;
    }

    const toggleEmailStatusField = () => {
        statusEmailFiled.value = !statusEmailFiled.value;
    }

    const togglePassStatusField = () => {
        statusPassFiled.value = !statusPassFiled.value;
    }

    watch(() => data.value.userName , (newError, oldError) => {
        statusNameFiled.value = true;

    });

    watch(statusNameFiled, (newValue) => {
        nameFieldBtn.value = newValue ? 'Зберегти' : 'Редагувати';
    });
    // email
    watch(() => data.value.userEmailNew , (newError, oldError) => {
        statusEmailFiled.value = true;

    });

    watch(statusEmailFiled, (newValue) => {
        emailFieldBtn.value = newValue ? 'Зберегти' : 'Редагувати';
    });

    // password
    watch(() => data.value.passwordConfirm , (newError, oldError) => {
        statusPassFiled.value = true;

    });

    watch(statusPassFiled, (newValue) => {
        passwordFieldBtn.value = newValue ? 'Зберегти' : 'Змінити';
    });




</script>


<template>

    <div class="relative">
        <AuthInfoActionPopUp
            :actionSuccess="loginInfo.visiblePopUp"
            :actionError="loginInfo.visibleError"
            :type="(loginInfo.visibleError && !loginInfo.visiblePopUp) ? 'error' : (loginInfo.visiblePopUp && !loginInfo.visibleError) ? 'success' : ''"
            :message="(loginInfo.visibleError && !loginInfo.visiblePopUp) ? 'Помилка при зберезенні' : (loginInfo.visiblePopUp && !loginInfo.visibleError) ? 'Дані успішно змінені' : ''"
        />
        <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">

            <li class="sm:me-2" v-for="(tab, index) in tabs" :key="index">
                <button
                    @click="changeTab(tab.name)"
                    :selectedTab="selectedTab"
                    :class="['inline-block', 'p-4', 'text-black-600', 'bg-gray-100', 'sm:rounded-t-lg', { 'active-tab': selectedTab === tab.name }, 'dark:bg-gray-800', 'dark:text-blue-500']"
                >{{ tab.label }}</button>
            </li>
        </ul>
        <TransitionGroup>
            <div v-if="selectedTab === 'Info'" class="mt-5">
                <div class="max-w-xl flex flex-col gap-y-3.5 ">
                    <div class="sm:flex items-end gap-3.5">
                        <input-group

                            label="Ваш ім'я"
                            type="text"
                            placeholder="Ваше ім'я"
                            name="name"
                            :value="v.userName.$model !== null ? v.userName.$model : loginInfo.user && loginInfo.user.providerData[0].displayName"
                            v-model:value="v.userName.$model"
                            :boxClass="{
                                    'active w-full': statusNameFiled,
                                    'not-active w-full': !statusNameFiled
                            }"
                            :error="v.userName.$errors"
                        />
                        <ButtonComon v-show="!v.userName.$invalid"
                                @click="updateName(v.userName.$model), toggleStatusField()"

                                :label="nameFieldBtn"
                                :class="{
                                    'active bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700': statusNameFiled,
                                    'not-active bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': !statusNameFiled
                                }"
                                class="h-fit focus:outline-none text-white  font-medium rounded-lg text-sm px-5 py-2.5 m-0 mt-2 sm:mt-0"

                        />
                    </div>
                    <div class="sm:flex items-end gap-3.5">
                        <input-group

                            label="Ваш email"
                            type="email"
                            placeholder="Ваш email"
                            name="email"
                            :value="loginInfo.user && loginInfo.user.email"
                            boxClass="not-active w-full"

                        />
                    </div>
                    <div class="flex items-end gap-3.5">
                        <input-group
                            label="Ваш новий email"
                            type="email"
                            placeholder="Ваш новий email"
                            name="email"
                            v-model:value="v.userEmailNew.$model"
                            :boxClass="{
                                'active w-full': statusEmailFiled,
                                'not-active w-full': !statusEmailFiled
                            }"
                            :error="v.userEmailNew.$errors"
                        />
                        <ButtonComon
                            v-show="!v.userEmailNew.$invalid"
                            @click="updateEmail(v.userEmailNew.$model), toggleEmailStatusField()"

                            :label="emailFieldBtn"
                            :class="{
                                'active bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700': statusEmailFiled,
                                'not-active bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': !statusEmailFiled
                            }"
                            class="h-fit focus:outline-none text-white  font-medium rounded-lg text-sm px-5 py-2.5 m-0 mt-2 sm:mt-0"
                        />
                    </div>

                    <div class="sm:flex items-end gap-3.5">
                        <input-group
                            boxClass="w-full"
                            label="Новий пароль"
                            type="password"
                            placeholder="Новий пароль"
                            name="password"
                            v-model:value="v.password.$model"
                            :error="v.password.$errors"
                        ></input-group>
                        <input-group
                            boxClass="w-full mt-2 sm:mt-0"
                            label="Підтвердить пароль"
                            type="password"
                            placeholder="Новий пароль"
                            name="password"
                            v-model:value="v.passwordConfirm.$model"
                            :error="v.passwordConfirm.$errors"
                        ></input-group>
                        <ButtonComon
                                v-show="!v.passwordConfirm.$invalid && !v.password.$invalid"
                                @click="updatePassword(v.passwordConfirm.$model), togglePassStatusField()"
                                :label="passwordFieldBtn"
                                :class="{
                                    'active bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700': statusPassFiled,
                                    'not-active bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': !statusPassFiled
                                }"
                                class="h-fit focus:outline-none text-white  font-medium rounded-lg text-sm px-5 py-2.5 m-0 mt-2 sm:mt-0"
                        />
                    </div>
                </div>
            </div>
            <div v-if="selectedTab === 'CartList'" class="mt-5">
                <CartList v-if="cartInfo.getTotalQuantity > 0" :products="cartInfo.cartList"/>
                <div v-else class="m-auto text-center">
                    <h4 class="text-sky-950 font-semibold text-xl">Корзина пуста</h4>
                    <svg class="m-auto" fill="rgb(20 83 45)" height="140px" width="140px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 231.523 231.523" xml:space="preserve" data-v-d48feb5f=""><g data-v-d48feb5f=""><path d="M107.415,145.798c0.399,3.858,3.656,6.73,7.451,6.73c0.258,0,0.518-0.013,0.78-0.04c4.12-0.426,7.115-4.111,6.689-8.231
                    l-3.459-33.468c-0.426-4.12-4.113-7.111-8.231-6.689c-4.12,0.426-7.115,4.111-6.689,8.231L107.415,145.798z" data-v-d48feb5f=""></path><path d="M154.351,152.488c0.262,0.027,0.522,0.04,0.78,0.04c3.796,0,7.052-2.872,7.451-6.73l3.458-33.468
                    c0.426-4.121-2.569-7.806-6.689-8.231c-4.123-0.421-7.806,2.57-8.232,6.689l-3.458,33.468
                    C147.235,148.377,150.23,152.062,154.351,152.488z" data-v-d48feb5f=""></path><path d="M96.278,185.088c-12.801,0-23.215,10.414-23.215,23.215c0,12.804,10.414,23.221,23.215,23.221
                    c12.801,0,23.216-10.417,23.216-23.221C119.494,195.502,109.079,185.088,96.278,185.088z M96.278,216.523
                    c-4.53,0-8.215-3.688-8.215-8.221c0-4.53,3.685-8.215,8.215-8.215c4.53,0,8.216,3.685,8.216,8.215
                    C104.494,212.835,100.808,216.523,96.278,216.523z" data-v-d48feb5f=""></path><path d="M173.719,185.088c-12.801,0-23.216,10.414-23.216,23.215c0,12.804,10.414,23.221,23.216,23.221
                    c12.802,0,23.218-10.417,23.218-23.221C196.937,195.502,186.521,185.088,173.719,185.088z M173.719,216.523
                    c-4.53,0-8.216-3.688-8.216-8.221c0-4.53,3.686-8.215,8.216-8.215c4.531,0,8.218,3.685,8.218,8.215
                    C181.937,212.835,178.251,216.523,173.719,216.523z" data-v-d48feb5f=""></path><path d="M218.58,79.08c-1.42-1.837-3.611-2.913-5.933-2.913H63.152l-6.278-24.141c-0.86-3.305-3.844-5.612-7.259-5.612H18.876
                    c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h24.94l6.227,23.946c0.031,0.134,0.066,0.267,0.104,0.398l23.157,89.046
                    c0.86,3.305,3.844,5.612,7.259,5.612h108.874c3.415,0,6.399-2.307,7.259-5.612l23.21-89.25C220.49,83.309,220,80.918,218.58,79.08z
                    M183.638,165.418H86.362l-19.309-74.25h135.895L183.638,165.418z" data-v-d48feb5f=""></path><path d="M105.556,52.851c1.464,1.463,3.383,2.195,5.302,2.195c1.92,0,3.84-0.733,5.305-2.198c2.928-2.93,2.927-7.679-0.003-10.607
                    L92.573,18.665c-2.93-2.928-7.678-2.927-10.607,0.002c-2.928,2.93-2.927,7.679,0.002,10.607L105.556,52.851z" data-v-d48feb5f=""></path><path d="M159.174,55.045c1.92,0,3.841-0.733,5.306-2.199l23.552-23.573c2.928-2.93,2.925-7.679-0.005-10.606
                    c-2.93-2.928-7.679-2.925-10.606,0.005l-23.552,23.573c-2.928,2.93-2.925,7.679,0.005,10.607
                    C155.338,54.314,157.256,55.045,159.174,55.045z" data-v-d48feb5f=""></path><path d="M135.006,48.311c0.001,0,0.001,0,0.002,0c4.141,0,7.499-3.357,7.5-7.498l0.008-33.311c0.001-4.142-3.356-7.501-7.498-7.502
                    c-0.001,0-0.001,0-0.001,0c-4.142,0-7.5,3.357-7.501,7.498l-0.008,33.311C127.507,44.951,130.864,48.31,135.006,48.311z" data-v-d48feb5f=""></path></g></svg>
                </div>

            </div>
            <div v-if="selectedTab === 'WishList'" class="mt-5">
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
            </div>
        </TransitionGroup>
    </div>

</template>

<style scoped>
    .active-tab {
        color: aliceblue;
        background: rgb(38, 49, 204);
    }
</style>