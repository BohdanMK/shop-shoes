<script setup>

    const props = defineProps({
        label: {
            type: String,
            required: false
        }
    })


</script>

<template>
    <div class="relative">
        <span class="tips-icon cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="26px" height="26px">
                <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"/>
            </svg>
        </span>
        <div class="tips-message w-60 absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700 opacity-0 invisible">
            
            {{ label }}
        </div>
    </div>

</template>

<style scoped>
    .tips-icon {
        transition: all .2s linear;
    }

    .tips-message {
        transition: all .3s linear;
    }

    .tips-icon:hover + .tips-message {
        transition: all .3s linear;
        visibility: visible;
        opacity: 1;
    }
</style>