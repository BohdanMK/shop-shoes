<script setup>
    import { watch } from 'vue';
    import { useAuthInfo } from '@/store/auth.js';
    import HeaderBlockLogo from '@/ui/header/HeaderBlockLogo.vue';
    import useAuthValidations from '@/validations/authValidations';
    import TipsElement from '@/components/tips/TipsElement.vue';

    let loginInfo = useAuthInfo();

    const { data, v } = useAuthValidations();

    function login() {
        let email = data.value.emailField;
        let password = data.value.passField;
        loginInfo.loginUser(email, password);
        loginInfo.onAuthStateChanged();
    }

    watch(() => loginInfo.error, (newError, oldError) => {
        if (newError) {
            setTimeout(() => {
                loginInfo.error = null;
            }, 2000);
        }
    });


</script>



<template>
    <div class="container">
        <div class="w-full max-w-md bg-white py-4 px-8 sm:py-8 sm:px-14 rounded-lg mx-auto mt-20">

            <div
                v-if="!loginInfo.user?.email"
                class="relative"
            >
                <TransitionGroup>
                    <div v-if="loginInfo.error"
                        class="w-full p-4 mb-4 text-sm text-red-800 text-center rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute -top-14"
                    >
                        В одному із полів помилка...
                    </div>
                </TransitionGroup>
                <form
                    @submit.prevent="login"
                    action=""
                    class="w-full  mx-auto sm:mt-6 xl:mt-10"
                >
                    <div>
                        <HeaderBlockLogo
                        title="REACT SNEAKERS"
                        subTitle="Магазин лучших кроссовок"
                        image="/src/assets/images/logo.png"

                    />
                        <div class="flex gap-2 justify-center items-center">
                            <TipsElement label="Привіт, даний функціонал в тестовому режимі, тому перевірка на дійсний email відключена. "/>
                            <h5 class="text-2xl sm:text-3xl text-center ">Увійти</h5>
                        </div>
                    </div>

                    <input-group
                        boxClass="mb-5"
                            v-model:value="v.emailField.$model"
                            label="Ваш email"
                            type="email"
                            placeholder="Ваше email"
                            name="email"
                            :error="v.emailField.$errors"
                    />
                    {{ emailField }}
                    <input-group
                            v-model:value="v.passField.$model"
                            label="Ваш пароль"
                            type="password"
                            placeholder="Ваше пароль"
                            name="password"
                            :error="v.passField.$errors"
                    />
                    {{ passField }}
                    <ButtonItem
                                type="submit"
                                btnStyle="w-full mt-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                label="Увійти"
                    />
                </form>
                <div class="my-auto text-center text-rose-900 font-semibold">
                    Вже маєш пароль: <router-link class="text-blue-950 cursor-pointer" to="/register">Зареєструватися</router-link>
                </div>
                <div class="my-auto text-center text-rose-900 font-semibold mb-5">
                    Забув пароль: <router-link class="text-blue-950 cursor-pointer" to="/remember">Нагадати</router-link>
                </div>
                <div class="my-auto text-center text-rose-900 font-semibold ">
                    <router-link class="text-blue-950 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to="/home">На головну</router-link>
                </div>
            </div>
            <div v-else >
                <h3>Вітаю, шановий користувач</h3>
                <h4>{{ loginInfo.user?.email }}</h4>
                <div class="flex">
                    <router-link
                        class="w-full mt-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        to="/"
                    >До покупок</router-link>
                    <ButtonItem
                                @click="loginInfo.signOutUser()"
                                type="submit"
                                btnStyle="w-full mt-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                label="Вийти"
                    />
                </div>
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
</style>