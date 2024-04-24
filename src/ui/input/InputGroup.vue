<script setup>

const emit = defineEmits(['update:value']);


    const props = defineProps({
        error: {
            type: Array,
            requered: false
        },
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: false
        },
        name: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: 'text'
        },
        boxClass: {
            type: [String, Boolean],
            default: false
        }

    });

    const updateValue = (e) => {
        emit('update:value', e.target.value);
    }

</script>


<template>

    <div class="form-group" :class="boxClass">
        <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white relative"
        :for="name" v-if="label">{{ label }}</label>
        <input
            :name="name"
            :placeholder="placeholder"
            :type="type"
            @input="updateValue"
            :value="value"

            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >

        <TransitionGroup>
            <div
                v-for="element in error"
                :key="element.$uid"
                class="text-red-700 text-xs absolute"
            > {{ element.$message }} </div>
        </TransitionGroup>
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
</style>