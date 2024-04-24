<script setup>

    const props = defineProps({
        message: {
            type: String,
            requered: false
        },
        type: {
            type: String,
            requered: false
        },
        actionSuccess: {
            type: Boolean,
            requered: true
        },
        actionError: {
            type: Boolean,
            requered: true
        }
    });

</script>


<template>
    <Transition>
        <div
            v-show="type === 'success' && actionSuccess === true"
            class="w-full p-4 mb-4 text-sm text-green-800 text-center rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 absolute -top-7" role="alert">
             {{ message }}
        </div>
    </Transition>
    <Transition>
        <div
            v-show="type === 'error' && actionError === true"
            class="w-full p-4 mb-4 text-sm text-red-800 text-center rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 absolute -top-7" role="alert">
            {{ message }}
        </div>
    </Transition>
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