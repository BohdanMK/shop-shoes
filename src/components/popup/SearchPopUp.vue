<script setup>
    import { ref, watch } from 'vue';
    import icons from '@/icons.js';
    import { useProductList } from '@/store/productList';

    import SearchElement from '@/ui/search/SearchElement.vue';
    import SearchProductItem from '@/components/search/SearchProductItem.vue';
    import ButtonComon from '@/ui/button/ButtonComon.vue';

    const productListGlobal = useProductList();

    const productList = ref([
        {
            product_id: '41',
            product_name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            category_id: 4,
            category_name: 'Nike',
            product_thumb: '/src/assets/images/product.png',
            product_price: '1440',
            product_cur_symbol: 'грн'
        },
        {
            product_id: '141',
            product_name: 'Мужские Кроссовки Nike Air Max 270',
            category_id: 4,
            category_name: 'Nike',
            product_thumb: '/src/assets/images/image_5.png',
            product_price: '1140',
            product_cur_symbol: 'грн'


        },
        {
            product_id: '41',
            product_name: 'Мужские Кроссовки Nike Blazer Mid Suede',
            category_id: 4,
            category_name: 'Nike',
            product_thumb: '/src/assets/images/image_6.png',
            product_price: '1340',
            product_cur_symbol: 'грн'


        },
        {
            product_id: '41',
            product_name: 'Кроссовки Puma X Aka Boku Future Rider',
            category_id: 5,
            category_name: 'Puma',
            product_thumb: '/src/assets/images/image_8.png',
            product_price: '1240',
            product_cur_symbol: 'грн'


        },{
            product_id: '41',
            product_name: 'Мужские Кроссовки Under Armour Curry 8',
            category_id: 6,
            category_name: 'Under',
            product_thumb: '/src/assets/images/image_9.png',
            product_price: '1040',
            product_cur_symbol: 'грн'


        }
    ]);

    const props = defineProps({
        closeModalSearchFunc: {
            type: Function,
            required: false
        },
        openModalSearch: {
            type: Boolean,
            required: true
        },
        openModalSearch: {
            type: Boolean,
            required: false
        }
    });

    const searchValue = ref('');
    const searchList = ref([]);

    watch(searchValue, (newValue, oldValue) => {
        searchList.value = productListGlobal.productList.filter(product => {
            return product.product_name.toLowerCase().includes(newValue.toLowerCase());
        });
    });
</script>


<template>
        <div
            @click="props.closeModalSearchFunc()"
            :class="['embet fixed top-0 left-o h-full w-full bg-black opacity-70 z-20 opacity-0 invisible', { 'is-open': props.openModalSearch }]"
        >

        </div>
            <div :class="['fixed top-0  z-40 search__pop-up w-full pointer-events-none', { 'is-open': props.openModalSearch }]">
            <div class="w-full relative pointer-events-auto">
                <SearchElement
                    :icon="icons.search"
                    labelClass="flex gap-3 bg-white w-full block px-8 py-4 lg:pl-28"
                    inputClass="outline-none text-gray-400 font-normal w-full pr-28 "
                    groupClass="w-full"
                    v-model:value="searchValue"
                />
                <ButtonComon
                    @click="props.closeModalSearchFunc()"
                    class="flex justify-center items-center bg-transparent w-8 h-6 rounded absolute right-4 lg:right-24 top-4 transform motion-safe:hover:scale-110 transition" :iconSvg="icons.close"
                />

            </div>

            <div
                v-if="searchList.length > 0"
                class="mx-auto max-w-screen-md bg-white py-10 px-5 mt-4 rounded-2xl shadow-lg max-h-96 overflow-y-auto pointer-events-auto"
            >
                <ul>
                    <SearchProductItem :productList="searchList"/>
                </ul>
            </div>
        </div>


</template>

<style scoped>
    .search__pop-up {
        opacity: 0;
        visibility: hidden;
        transition: all .2s linear;
    }

    .search__pop-up.is-open {
        transition: all .2s linear;
        opacity: 1;
        visibility: visible;
    }

    .embet {


        transition: all .2s linear;
    }
    .embet.is-open {
        opacity: .7;
        visibility: visible;
        transition: all .2s linear;
    }
</style>