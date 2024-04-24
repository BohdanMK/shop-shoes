<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: false
        },
        iconSvg: {
            type: String,
            required: false
        },
        link: {
            type: String,
            required: false
        }
    })
</script>


<template>
    <router-link :to="link" v-if="link" :class="$attrs.class || 'banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150'" type="button">
        <span v-if="label">
        {{ label }}
        </span>
        <svg v-if="iconSvg" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        v-html="iconSvg"
        >
        </svg>
    </router-link>
    <button v-else :class="$attrs.class || 'banner__btn text-lg text-white font-bold py-2.5 px-8 bg-green-400 rounded-3xl hover:bg-green-500 transition ease-in-out delay-150'" type="button">
        <span v-if="label">
        {{ label }}
        </span>
        <slot></slot>
        <svg v-if="iconSvg" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
        v-html="iconSvg"
        >
        </svg>
    </button>
</template>