<script setup>
    import { ref } from 'vue';
    import icons from '@/icons.js';

    import HeaderBlockLogo from '@/ui/header/HeaderBlockLogo.vue';
    import ContactBlock from '@/components/contact/ContactBlock.vue';
    const contactInfo = ref([
        {
            type: 'email',
            value: 'top@mail.com'
        },
        {
            type: 'tel',
            value: '+380441200031'
        },
        {
            type: 'address',
            value: 'Місто: Мрій вулиця: Чудова 25',
            link: 'google.com'
        }

    ]);

    const socialInfo = ref([
        {
            name: 'facebook',
            icon: icons.facebook,
            link: 'https://facebook.com/'
        },
        {
            name: 'instagram',
            icon: icons.intagram,
            link: 'https://instagram.com/'
        },
        {
            name: 'instagram',
            icon: icons.youtube,
            link: 'https://www.youtube.com/'
        }
    ]);



</script>

<template>
    <footer class="footer mt-8 border-t pt-5 border-gray-300">
        <div class="footer__content flex justify-between items-center">
            <HeaderBlockLogo
                    title="REACT SNEAKERS"
                    subTitle="Магазин лучших кроссовок"
                    image="/src/assets/images/logo.png"

                />
            <div class="-ml-28 lg:block hidden">
                <a class="text-neutral-400" href="">Privacy Policy@</a>
            </div>

            <ContactBlock
            :socialInfo="socialInfo"
            :contactInfo="contactInfo"
            />

        </div>
    </footer>
</template>

<style scoped>
    @media (max-width: 568px) {
        .footer__content {
            flex-direction: column;
        }
    }

</style>