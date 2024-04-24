<script setup>
    const props = defineProps({
        label: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        iconSvg: {
            type: String,
            required: false
        },
        btnStyle: {
            type: String,
            required: false
        },
        type: {
            type: String,
            required: false,
            default: 'button'
        }
    });


</script>


<template>
    <button
        :class="btnStyle || 'border-gray-800 rounded-2xl p-2 flex gap-2 items-center transform motion-safe:hover:scale-110 transition'"
        :type="type"
    >
        <font-awesome-icon
            v-if="icon"
            :icon="icon"
            style="width: 50px; height: 40px;"
        />
        <svg v-if="iconSvg" :class="$attrs.class || 'w-6 h-6'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
          v-html="iconSvg"
          >

        </svg>

        <span v-if="label">{{ label }}</span>
    </button>
</template>