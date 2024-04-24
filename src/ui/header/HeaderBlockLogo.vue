<script setup>

    const props = defineProps ({
        title: {
            type: String,
            required: false
        },
        image: {
            type: String,
            required: false
        },
        subTitle: {
            type: String,
            required: false
        }
    });

</script>


<template>
    <router-link to="/home" class="header-logo flex gap-x-7 items-center">
        <img :src="image" alt="">
        <div>
            <h4 class="header-logo__title font-bold"> {{ title }}</h4>
            <span class="header-logo__subtitle">{{ subTitle }}</span>
        </div>
    </router-link >
</template>

<style scoped>
    @media (max-width: 568px) {
        .header-logo {
            display: block;

            margin-bottom: 15px;
        }

        .header-logo__title {
            font-size: 14px;
            text-align: center;
        }

        .header-logo__subtitle {
            display: none;
        }

        .header-logo img {
            max-width: 50px;
            margin: 0 auto;
            margin-bottom: 5px;
        }
    }
</style>