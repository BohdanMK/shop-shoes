<script setup>
    import ContactBlockSocialItem from '@/components/contact/ContactBlockSocialItem.vue';

    const props = defineProps({
        socialInfo: {
            type: Array,
            required: true
        },
        contactInfo: {
            type: Array,
            required: true
        }
    });
</script>


<template>
     <div>
        <ul class="contact-list mb-2">
            <li
                v-for="(item, index) in contactInfo"
                :key="index"
                class="transform motion-safe:hover:scale-105 transition text-xs font-medium text-neutral-400"
            >
                <a
                    v-if="item.type === 'tel'"
                    :href="'tel:' + item.value"
                >
                    {{ item.value }}
                </a>
                <a
                    v-else-if="item.type === 'email'"
                    :href="'mailto:' + item.value"
                >
                    {{ item.value }}
                </a>
                <a
                    v-else-if="item.type === 'address'"
                    :href="'https://' + item.link"
                >
                    {{ item.value }}
                </a>
            </li>


        </ul>
        <ul class="flex gap-1.5 social-list">
            <ContactBlockSocialItem
                v-for="(item, index) in socialInfo"
                :key="index"
                :name="item.name"
                :link="item.link"
                :icon="item.icon"
            />
        </ul>
    </div>
</template>

<style scoped>


    @media (max-width: 568px) {
        .contact-list {
            text-align: center;
        }

        .social-list {
            justify-content: center;
        }
    }
</style>