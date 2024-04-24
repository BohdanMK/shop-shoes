<script setup>

const emits = defineEmits(['update:checkedValue']);


const props = defineProps({
    value: {
        type: String,
        default: ''
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

const handleClick = (event) => {
    console.log(event.target.value);
    emits('update:checkedValue', event.target.value);
}

</script>


<template>
     <div class="form-group form-group--checkbox flex items-center relative">
        <input
            :id="value"
            :name="name"
            :placeholder="placeholder"
            type="radio"
            :value="value"
            @input="handleClick($event)"
            class="form-group__checkbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus-none outline-none"
        >
        <label :for="value" v-if="label"
            class="form-group__checkbox-label ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2.5 relative"
        >{{ label }}</label>

     </div>
</template>

<style scoped>

    .form-group.form-group--checkbox {
        padding-left: 20px;
    }

    .form-group.form-group--checkbox .form-group__checkbox {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
    }

    .form-group__checkbox-label {
        cursor: pointer;
    }

    .form-group__checkbox-label:after {
        content: "";
        width: 22px;
        height: 22px;
        display: block;

        border: 1px solid rgb(209 213 219);
        border-radius: 5px;

        position: absolute;
        top: -2px;
        left: -28px;
    }

    .form-group__checkbox-label::before {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23000000" height="14px" width="14px" viewBox="0 0 492 492"><g><g><path d="M484.128,104.478l-16.116-16.116c-5.064-5.068-11.816-7.856-19.024-7.856c-7.208,0-13.964,2.788-19.028,7.856    L203.508,314.81L62.024,173.322c-5.064-5.06-11.82-7.852-19.028-7.852c-7.204,0-13.956,2.792-19.024,7.852l-16.12,16.112    C2.784,194.51,0,201.27,0,208.47c0,7.204,2.784,13.96,7.852,19.028l159.744,159.736c0.212,0.3,0.436,0.58,0.696,0.836    l16.12,15.852c5.064,5.048,11.82,7.572,19.084,7.572h0.084c7.212,0,13.968-2.524,19.024-7.572l16.124-15.992    c0.26-0.256,0.48-0.468,0.612-0.684l244.784-244.76C494.624,132.01,494.624,114.966,484.128,104.478z"/></g></g></svg>');
        display: none;

        border-radius: 5px;

        position: absolute;
        top: 2px;
        left: -24px;
    }

    .form-group.form-group--checkbox .form-group__checkbox:checked + .form-group__checkbox-label::before {
        display: block;
    }
</style>