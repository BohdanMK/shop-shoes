<script setup>
    import { ref, onMounted } from 'vue';
    import icons from '@/icons.js';
    import { useProductList } from '@/store/productList';

    import TitleElement from '@/ui/title/TitleElement.vue';
    import SearchElement from '@/ui/search/SearchElement.vue';
    import ProductsList from '@/components/ProductsList.vue';
    import ButtonComon from '@/ui/button/ButtonComon.vue';


    const title = ref('Все кроссовки');

    const productListInfo = useProductList();



</script>


<template>
    <div>
        <div class="flex flex-col sm:flex-row justify-between items-center lg:mb-2 mb-4">
            <TitleElement class="font-bold  lg:text-4xl sm:text-2xl text-2xl mb-2 lg:mb-8 " :label="title"/>
            <SearchElement
            v-model:value="productListInfo.searchValue"
            :icon="icons.search"/>

        </div>
        <div v-if="productListInfo.searchList.length > 0">
            <ProductsList/>
            <ButtonComon
            label="Показати ще"
            v-show="productListInfo.statusShowMoreBtn"
            @click="productListInfo.updateLimitToShow()"
            class="w-fit block text-gray-900 cursor-pointer bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  mx-auto dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "></ButtonComon>
        </div>
        <div v-else class="w-64 h-64 mx-auto mt-24">
            <div v-if="productListInfo.searchValue.length > 0">
                <h4 class="mb-4 text-center ">Не має результатів пошуку за запитом  "{{ productListInfo.searchValue }}"</h4>

                <svg class="w-36 h-36 mx-auto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 32.001 32" style="enable-background:new 0 0 32.001 32;" xml:space="preserve">
                <g id="Layer_13">
                    <path style="fill:#95CC29;" d="M12,6c-4.418,0-8,6-8,6s3.582,6,8,6c4.418,0,8-6,8-6S16.418,6,12,6z M12,16c-2.209,0-4-1.791-4-4   s1.791-4,4-4c2.209,0,4,1.791,4,4S14.209,16,12,16z"/>
                    <circle style="fill:#95CC29;" cx="12" cy="12" r="2"/>
                    <path style="fill:#666666;" d="M12,24c2.954,0,5.654-1.072,7.744-2.841l1.691,1.691c-0.192,0.406-0.315,0.834-0.314,1.271   c-0.001,0.764,0.295,1.538,0.879,2.121L26.758,31c0.583,0.584,1.357,0.88,2.121,0.879C29.643,31.88,30.417,31.584,31,31   c0.584-0.583,0.88-1.357,0.879-2.121c0.001-0.764-0.295-1.538-0.879-2.121L26.242,22c-0.583-0.584-1.357-0.88-2.121-0.879   c-0.437-0.001-0.865,0.123-1.271,0.314l-1.692-1.692C22.928,17.654,24,14.954,24,12C23.999,5.372,18.628,0.001,12,0   C5.372,0.001,0.001,5.372,0,12C0.001,18.628,5.372,23.999,12,24z M23.414,23.414c0.198-0.197,0.448-0.292,0.707-0.293   c0.259,0.001,0.509,0.096,0.707,0.293l4.758,4.758c0.197,0.198,0.292,0.448,0.293,0.707c-0.001,0.259-0.096,0.509-0.293,0.707   c-0.198,0.197-0.448,0.292-0.707,0.293c-0.259-0.001-0.509-0.096-0.707-0.293l-4.758-4.758c-0.197-0.198-0.292-0.448-0.293-0.707   C23.122,23.862,23.217,23.612,23.414,23.414l-0.707-0.707L23.414,23.414z M4.929,4.929C6.742,3.118,9.235,2,12,2   c2.765,0,5.258,1.118,7.071,2.929C20.882,6.742,22,9.235,22,12c0,2.765-1.118,5.258-2.929,7.071C17.258,20.882,14.765,22,12,22   c-2.765,0-5.258-1.118-7.071-2.929C3.118,17.258,2,14.765,2,12C2,9.235,3.118,6.742,4.929,4.929z"/>
                    <rect x="0.001" style="fill:none;" width="32" height="32"/>
                </g>
                <g id="Layer_1">
                </g>
                </svg>
            </div>
            <div v-else>
                Загрузка...
            </div>
        </div>

    </div>
</template>