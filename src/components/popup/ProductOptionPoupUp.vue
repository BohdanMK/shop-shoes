<script setup>
import { ref } from 'vue';
import icons from '@/icons.js';
import { useCartInfo } from '@/store/cartList.js';
import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';

const emit = defineEmits(['click']);
const selectedOption = ref('');

const clickOnButton = () => {
  emit('click');
};


const props = defineProps({
    id: {
        type: Number,
        required: false
    },
    options: {
        type: Array,
        default: false
    },
    isOpen: {
        type: Boolean,
        required: false
    },
    item: {
        type: Object,
        default: false
    },

});

const cartList = useCartInfo();
</script>

<template>

        <div
            @click="clickOnButton()"
            class="embet fixed top-0 left-0 h-full w-full bg-black opacity-70 z-20"
        > </div>
        <div class="w-full max-w-sm fixed  top-36 inset-x-1/2 z-30 bg-white py-8 px-4 -translate-x-2/4 rounded-2xl">
            <div class="relative ">
            <ButtonItemIcon
                @click="clickOnButton()"
                :btnStyle="'border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition absolute -top-5 right-0'"
                :icon="icons.close"
            />
            <ul class="product__options flex justify-center gap-3 mb-5" v-for="(option, index) in options" :key="index">
                    <li v-for="(value, index) in option.product_option_value" :key="index">
                        <div class="form__group relative w-8 h-8 flex justify-center items-center ">

                            <input
                                v-model="selectedOption"
                                class="form__input-radio absolute opacity-0 cursor-pointer"
                                type="radio"
                                name="options"
                                :value="value.name"
                            >
                            <label class="block w-full border w-full text-xl text-center rounded-md cursor-pointer" for="options">
                                {{ value.name }}
                            </label>
                        </div>
                    </li>
            </ul>
            <ButtonItemIcon
                @click="cartList.addProductToCart(id, item, selectedOption)"
                :icon="icon"
                label="В кошик" btnStyle="mx-auto border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition border border-gray-400 text-gray-400"/>
            </div>
        </div>

</template>


<style scoped>
    .form__input-radio:checked + label {
        background: #000;
        color: aliceblue;
    }

    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

</style>