<script setup>

    const emit = defineEmits('update:value');

    const props = defineProps({

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
        }

    });

    const updateText = (e) => {
        emit('update:value', e.target.value);
    }

</script>


<template>

    <div class="form-group">
        <label :for="name" v-if="label"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >{{ label }}</label>
        <textarea
            :name="name"
            :placeholder="placeholder"
            :type="type"
            @input="updateText"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        > </textarea>

    </div>

</template>