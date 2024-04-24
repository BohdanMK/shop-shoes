<script setup>
    import { ref } from 'vue';
    import icons from '@/icons.js';
    import ButtonItemIcon from '@/ui/button/ButtonItemIcon.vue';
    import { useProductList } from '@/store/productList.js';



    const props = defineProps({
        catalogList: {
            type: Array,
            required: false
        },
        closeModalCatalogFun: {
            type: Function,
            required: false
        },
        openModalCatalog: {
            type: Boolean,
            required: true
        }
    });


    const productInfoList = useProductList();


    function toggleActive(item) {
        item.active_cat = !item.active_cat;
        console.log(item.active_cat);
    }


</script>


<template>

    <div
            @click="props.closeModalCatalogFun()"
            :class="['embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible', { 'is-open': props.openModalCatalog }]"
    >
    </div>
    <div :class="['catalog-pop-up bg-white w-96 h-full fixed left-0 top-0 z-20 p-8 flex flex-col', { 'is-open': props.openModalCatalog }]">
        <div >
            <div class="catalog-pop-up__head flex justify-between items-center mb-5">
                <h4 class="text-2xl font-bold">Каталог</h4>
                <ButtonItemIcon
                @click="props.closeModalCatalogFun()"
                :icon="icons.close"
                />
            </div>
        </div>
        <div>
            <ul>
                <li v-for="(category, index) in productInfoList.categoryList" :key="index" class="mt-1.5">

                    <router-link
                    :to="`/category/${category.id}`"
                    class=" text-lg font-medium flex items-center justify-between w-full pr-3 py-2.5 pl-3.5 rounded-xl cursor-pointer hover:bg-slate-200 group-hover/item:visible ... transition-all"

                    >
                        <span class="capitalize">
                            {{ category.name }}
                        </span>

                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

    .catalog-pop-up {
        transform: translateX(-100%);
        transition: all .2s linear;
    }

    .catalog-pop-up.is-open {
        transform: translateX(0);
        transition: all .2s linear;
    }

    .embet {


    transition: all .2s linear;
    }
    .embet.is-open {
    opacity: .7;
    visibility: visible;
    transition: all .2s linear;
    }

    .cutegory-list__subcategory {
        opacity: 1;
        height: auto;
        overflow: hidden;
        transition: opacity 0.3s ease, height 0s ease 0.3s;
    }

    .cutegory-list__subcategory.is-open {
        opacity: 1;
        height: auto; /* Встановлення висоти для відображення елемента */
        transition: opacity 0.3s ease, height 0.3s ease;
    }

    .cutegory-list__arrow {
        transform: rotate(-90deg);
        transition: all .3s ease;
    }

    .cutegory-list__arrow.is-open {
        transform: rotate(0deg);
        transition: all .3s ease;
    }

    .router-link-active {
        --tw-bg-opacity: 1;
        background-color: rgb(226 232 240 / var(--tw-bg-opacity));
    }



</style>