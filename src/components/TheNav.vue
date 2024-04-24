<script setup>
    const props = defineProps({
        navLinks: {
            type: Array,
            required: true
        }
    });
</script>


<template>
    <nav>
        <ul class="w-full md:flex hidden justify-center gap-10">
            <li

                v-for="item in navLinks"
                :key="item.id"
            >
                <a
                    :href="item.link"
                    class="flex items-center gap-5 transform motion-safe:hover:scale-110 transition xl:flex-row flex-col xl:gap-y-5 gap-y-0"
                >
                    <img :src="item.icon" />
                    <span>{{ item.name }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>