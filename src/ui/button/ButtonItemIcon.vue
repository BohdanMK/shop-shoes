<script setup>
    const props = defineProps({
        label: {
            type: [Number, String],
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        iconStyle: {
            type: String,
            required: false
        },
        btnStyle: {
            type: String,
            required: false
        },
        value: {
            type: String,
            required: false
        },
        is_link: {
            type: String,
            required: false
        },
        user_status: {
            type: [String, Object],
            required: false
        },
        index_quantity: {
            type: [Number, String, Object],
            required: false
        }
    });


</script>


<template>

    <button v-if="!is_link" :class="{
    'with-attr': index_quantity,
    [btnStyle || 'border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition']: true
  }" :data-count="index_quantity">
        <svg v-if="icon" :class="$attrs.class || 'w-6 h-6'" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          v-html="icon"
          >
        </svg>

        <span v-if="label">{{ label }}</span>
        <span v-if="value === 'cart'"><span>грн</span> </span>

    </button>
    <router-link :to="is_link" v-else :class="btnStyle || 'border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition'">
        <svg v-if="icon" :class="$attrs.class || 'w-6 h-6'" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          v-html="icon"
          >
        </svg>

        <span v-if="label && user_status">user</span>
        <span v-if="label && !user_status">{{ label }}</span>
        <span v-if="value === 'cart'"><span>грн</span> </span>

    </router-link>
</template>


<style scoped>
    .with-attr {
        position: relative;
    }

    .with-attr::before {
        content: attr(data-count);
        position: absolute;
        top: -5px;
        right: -5px;
        border-radius: 10px;
        background: rgb(77, 224, 64);
        color: aliceblue;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>