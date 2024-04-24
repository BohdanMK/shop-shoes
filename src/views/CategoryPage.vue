<script setup>
    import { ref, watch, onMounted, onBeforeMount, computed } from 'vue';
    import icons from '@/icons.js';
    import { useRoute } from 'vue-router';
    import { useProductList } from '@/store/productList.js'
    import ButtonComon from '@/ui/button/ButtonComon.vue';
    import TitleElement from '@/ui/title/TitleElement.vue';
    import SearchElement from '@/ui/search/SearchElement.vue';
    import ProductItem from '@/components/product/ProductItem.vue';
    import LoadMoreBlock from '@/components/LoadMoreBlock.vue';



    const title = ref('Ваша категорія');

    const categoryId = ref('');
    const productList = useProductList();
    const route = useRoute();
    const categoryList = ref([]);
    const manufacturerList = ref([]);
    const categoryName = ref('');
    const selectedSort = ref('');
    const searchSort = ref('');
    const limitToShow = ref(5);
    const selectedManufacturer = ref('');


    const sortOptions = ref([
        {value: 'Price', name: 'Price'},
        {value: 'A-z', name: 'A-Z'},
        {value: 'Z-a', name: 'Z-A'},
    ]);



    const openDropDown = ref(false);
    const dropDownLabel = ref('Sort by:');

    function toggleDropDown() {
        openDropDown.value = !openDropDown.value;
    }

    const updateLabel = (value) => {
        dropDownLabel.value = value;
        toggleDropDown();
    }

    const filterProductsByCategory = () => {
        categoryList.value = [];

        // Перевірка, чи productList.productList не є порожнім
        if (productList.productList && productList.productList.length > 0) {
            productList.productList.forEach(product => {

                if (product.category_id == categoryId.value) {
                    categoryList.value.push(product);

                }
            });

            // Збереження categoryList в локальному сховищі
            localStorage.setItem('categoryList', JSON.stringify(categoryList.value));
        } else {
            // Якщо productList.productList порожній, перевіряємо, чи є дані в локальному сховищі
            const storedCategoryList = localStorage.getItem('categoryList');
            if (storedCategoryList) {
                categoryList.value = JSON.parse(storedCategoryList);
            }
        }
    };

    const getCategoryName = (id) => {
        categoryName.value = '';

        categoryList.value.forEach(cat => {
            console.log(cat.category_id);
            if (cat.category_id === parseInt(id) || cat.category_id === parseInt(id.value)) {

                if(cat.category_for) {
                    categoryName.value = cat.category_for;
                }

            }
        });
        console.log(categoryName.value);
    };


    const getAllManufacturer = () => {
        manufacturerList.value = [];
        categoryList.value.forEach(product => {
            if (product.category_name && !manufacturerList.value.some(cat => cat.name === product.category_name)) {
                manufacturerList.value.push({
                    name: product.category_name
                });
            }
        });
    };

    const filterByManufacturerName = (nameManufacturer) => {
        filterProductsByCategory();
        selectedManufacturer.value = nameManufacturer;
        const filterList = categoryList.value.filter(product => product.category_name === nameManufacturer);
        console.log(filterList);

        if (filterList.length > 0) {
            categoryList.value.splice(0, categoryList.value.length, ...filterList); // Заміна вмісту categoryList на вміст filterList
        } else {
            // Якщо filterList порожній, то заміна не потрібна, тому немає необхідності виконувати додаткові дії
            filterProductsByCategory();
        }


    };

    const updateSelectedSort = (value, name) => {

        selectedSort.value = value;
        openDropDown.value = false;
        console.log(selectedSort.value);
    };

    const searchProduct = computed(() => {
        const searchSort = searchSort.value.trim().toLowerCase();
        console.log(categoryList.value);
        return categoryList.value.filter(product => product.product_name.includes(searchSort));
    });

    const visibleElement = (() => {
        limitToShow.value += 5;
        console.log(limitToShow.value);
    });



    onMounted(() => {
        categoryId.value = route.params.id;
        filterProductsByCategory();
        getAllManufacturer();
        getCategoryName(categoryId);
    });

    watch(
        () => route.params.id,
        (newId, oldId) => {
            categoryId.value = newId;
            filterProductsByCategory();
            getAllManufacturer();
            getCategoryName(categoryId.value);
        },
        { deep: true }
    );


    watch(() => selectedSort.value, (newValue, oldValue) => {
        let sortedList = [...categoryList.value]; // Створюємо копію масиву для сортування

        switch(newValue) {
            case 'Price':
                sortedList.sort((a, b) => a.product_price - b.product_price);
                break;
            case 'A-z':
                sortedList.sort((a, b) => a.product_name.localeCompare(b.product_name));
                break;
            case 'Z-a':
                sortedList.sort((a, b) => b.product_name.localeCompare(a.product_name));
                break;
        }
        console.log(sortedList);
        categoryList.value = sortedList; // Присвоюємо відсортований масив до categoryList.value
        console.log(categoryList.value);
    });

    watch(() => searchSort.value,
        (newValue, oldValue) => {
            const searchInput = newValue.trim().toLowerCase();
            if (searchInput === '') {
                filterProductsByCategory();
            } else {
                const filteredProducts = categoryList.value.filter(product => product.product_name.includes(searchInput));
                // Робите тут щось з filteredProducts, наприклад, зберігаєте його у computed властивості або виконуєте інші дії
                categoryList.value = filteredProducts;
            }
        }
    );


</script>


<template>
    <div class="main flex-auto">
        <div class="flex justify-between items-center">
            <TitleElement class="font-bold text-4xl mb-8" :label="categoryName"/>

        </div>

        <div class="flex justify-between items-start mb-8 lg:flex-row flex-col gap-5">

            <ul class="flex gap-2.5 flex-wrap justify-start">
                <li class="flex justify-center w-full flex border border-gray-300 border-solid rounded-lg   transform motion-safe:hover:hover:bg-gray-300 transition max-w-36 text-center"
                :class="{ 'active-category': 'default' === selectedManufacturer || '' === selectedManufacturer }"
                >
                    <button

                    type="button"
                    class="w-full py-2 px-3 text-gray-400 text-center hover:text-white"
                    @click="filterByManufacturerName('default')"
                    >Всі</button>
                </li>
                <li
                class="flex justify-center w-full flex border border-gray-300 border-solid rounded-lg   transform motion-safe:hover:hover:bg-gray-300 transition max-w-36 text-center"
                :class="{ 'active-category': name.name === selectedManufacturer }"
                v-for="(name, index) in manufacturerList" :key="index"
                >
                <button
                    type="button"
                    class="w-full py-2 px-3 text-gray-400 text-center hover:text-white"
                    @click="filterByManufacturerName(name.name)"
                >{{ name.name }}</button>
                </li>
            </ul>
            <div class="catalog-search-item lg:w-auto w-full flex lg:flex-col justify-between items-center gap-3.5  flex-row ">
                <SearchElement
                    :icon="icons.search"
                    v-model:value="searchSort"
                />
                {{ searchSort }}
                <div class="dropdown w-full relative max-w-72">
                    <ButtonComon
                    @click="toggleDropDown()"
                    class="pl-3 w-full flex border border-gray-300 border-solid rounded-lg py-2 px-1 text-gray-400 justify-between"

                    :iconSvg="icons.arrow"
                    > Sort by: {{ selectedSort }} <span></span></ButtonComon>

                    <ul
                    v-show="openDropDown"
                    class=" px-3 w-full border border-gray-300 border-solid rounded-lg py-2 px-1 text-gray-400 absolute z-20 bg-white">

                        <li
                            v-for="(item, index) in sortOptions"
                            :key="index"
                            class="block w-full cursor-pointer border-b hover:text-gray-700">
                            <button type="button" class="w-full text-left"
                            @click="updateSelectedSort(item.value)"
                            >Sort by: {{ item.name }}</button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

        <div class="grid lg:grid-cols-3 xl:grid-cols-4 mb-12 gap-y-3.5 gap-x-3.5 sm:grid-cols-2">
            <ProductItem
                v-for="(item, index) in categoryList"
                :key="index"
                :item="item"
                :id="item.product_id"
                :thumb="item.product_thumb"
                :name="item.product_name"
                :price="item.product_price"
                :options="item.options"
                :currency="item.product_cur_symbol"
                :manufacturer="item.category_name"
            />
        </div>
        <!-- <LoadMoreBlock @response="visibleElement()"/> -->
    </div>

</template>

<style scoped>
    .active-category {
        background-color: rgb(209 213 219 / var(--tw-bg-opacity));
    }

    .active-category > button {
        color: white;
    }



    @media (max-width: 568px) {
        .catalog-search-item {
            flex-direction: column;
        }

        .catalog-search-item > div {
            width: 100%;
            max-width: 100%;
        }
    }

</style>