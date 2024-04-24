<script setup>
    import { watch } from 'vue';
    import { useAuthInfo } from '@/store/auth.js';
    import HeaderBlockLogo from '@/ui/header/HeaderBlockLogo.vue';
    import useAuthValidations from '@/validations/authValidations';
    import TipsElement from '@/components/tips/TipsElement.vue';


    const registerInfo = useAuthInfo();
    const { data, v } = useAuthValidations();

    console.log(v);

    const submit = async() => {
        let email = data.value.emailField;
        let password = data.value.passField;
        await registerInfo.register(email, password);
    }

    watch(() => registerInfo.error, (newError, oldError) => {
        if (newError) {
            setTimeout(() => {
                registerInfo.error = null;
            }, 2000);
        }
    });

</script>



<template>
    <div class="container">
        <div
            class="w-full max-w-md bg-white py-4 px-8 sm:py-8 sm:px-14 rounded-lg mx-auto mt-20 "
            v-if="!registerInfo.successMessage"
        >
            <div class="relative">
                <TransitionGroup>
                    <div v-if="registerInfo.error"
                        class="w-full p-4 mb-4 text-sm text-red-800 text-center rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute -top-14"
                    >
                        Email вже використовувався раніше...
                    </div>
                </TransitionGroup>
                <form @submit.prevent="submit" action="" class="w-full mx-auto sm:mt-6 xl:mt-10"
                :class="{ 'has-error': registerInfo.error }"
                >
                    <div>
                        <HeaderBlockLogo
                                title="REACT SNEAKERS"
                                subTitle="Магазин лучших кроссовок"
                                image="/src/assets/images/logo.png"

                        />
                        <div class="flex gap-2 justify-center items-center mt-2 mb-2">
                            <TipsElement
                                label="Привіт, даний функціонал в тестовому режимі, тому перевірка на дійсний email відключена. "
                            />
                            <h5 class="text-2xl sm:text-3xl text-center ">Зареєструватися</h5>
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
                                label="Зареєструватися"
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
        <div v-else class="w-full max-w-md bg-white py-4 px-8 sm:py-8 sm:px-14 rounded-lg mx-auto mt-20 text-center">
            <div class="flex items-center p-4 mb-4 text-sm rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 font-medium text-lime-900">Вітаю, з упішною реєстрацією! {{ registerInfo.successMessage }}</div>
            <router-link
            class="text-blue-950 cursor-pointer text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            to="/login"
            >Увійти</router-link>
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