<script setup>

    const emit = defineEmits('update:value');

   const props = defineProps({
        icon: {
            type: String,
            required: false
        },
        labelClass: {
            type: String,
            required: false
        },
        inputClass: {
            type: String,
            required: false
        },
        groupClass: {
            type: String,
            required: false
        }
    });

    const updateValue = (e) => {
        emit('update:value', e.target.value);
    }


</script>


<template>
    <div class="form__group">
                <label :class="[labelClass || 'flex border border-gray-300 border-solid rounded-lg py-2 px-1']" for="">
                    <svg v-if="icon" :class="$attrs.class || 'w-6 h-6'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    v-html="icon"
                    > </svg>
                    <input
                        :class="[inputClass || 'outline-none text-gray-400 font-normal']"
                        type="text"
                        placeholder="Пошук..."
                        @input="updateValue"
                    />

                </label>
            </div>
</template>

<style scoped>
    @media (max-width: 568px) {
        .form__group {
            width: 100%;
        }
    }

</style>