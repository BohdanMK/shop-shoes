<script setup>
    import { ref, watch } from 'vue';
    import { useAuthInfo } from '@/store/auth.js';
    import useAuthValidations from '@/validations/authValidations';
    import HeaderBlockLogo from '@/ui/header/HeaderBlockLogo.vue';

    let loginInfo = useAuthInfo();

    const { data, v } = useAuthValidations();



    watch(() => loginInfo.error, (newError, oldError) => {
        if (newError) {
            setTimeout(() => {
                loginInfo.error = null;
            }, 2000);
        }
    });

    watch(() => loginInfo.successMessage, (newError, oldError) => {
        if (newError) {
            setTimeout(() => {
                loginInfo.successMessage = null;
            }, 2000);
        }
    });



</script>



<template>
    <div class="container">
        <div class="w-full max-w-md bg-white py-4 px-8 sm:py-8 sm:px-14 rounded-lg mx-auto mt-20">
            <div class="relative">
                <TransitionGroup>
                    <div v-if="loginInfo.error"
                        class="w-full p-4 mb-4 text-sm text-red-800 text-center rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute -top-14"
                    >
                        Невірний email...
                    </div>

                </TransitionGroup>
                <TransitionGroup>
                    <div v-if="loginInfo.successMessage"
                        class="w-full p-4 mb-4 text-sm text-green-800 text-center rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 absolute -top-14"
                    >
                        {{ loginInfo.successMessage }}
                    </div>
                </TransitionGroup>
                <form action="" class="w-full  mx-auto sm:mt-6 xl:mt-10" >
                    <div>
                        <HeaderBlockLogo
                                title="REACT SNEAKERS"
                                subTitle="Магазин лучших кроссовок"
                                image="/src/assets/images/logo.png"

                            />
                        <h5 class="mb-6 text-2xl sm:text-3xl text-center ">Відновити пароль</h5>
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

                    <ButtonItem
                                @click="loginInfo.rememberPass(v.emailField.$model)"
                                btnStyle="w-full mt-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                label="Нагадати"
                    />
                </form>
                <div class="my-auto text-center text-rose-900 font-semibold mb-5">
                    Вже маєш пароль: <router-link class="text-blue-950 cursor-pointer" to="/login">Увійти</router-link>
                </div>
                <div class="my-auto text-center text-rose-900 font-semibold ">
                    <router-link class="text-blue-950 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" to="/home">На головну</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .has-error input[type="email"] {
        border: 1px solid red!important;
    }

    .v-enter-active,
    .v-leave-active {
    transition: opacity 0.5s ease;
    }

    .v-enter-from,
    .v-leave-to {
    opacity: 0;
    }
</style>