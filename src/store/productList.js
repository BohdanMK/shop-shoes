import { ref, computed } from 'vue';
import axios from 'axios';
import {defineStore} from 'pinia';




export const useProductList = defineStore("productList", ()=> {
    const productList = ref([]);
    const searchValue = ref([]);
    const limitToShow = ref(4);
    const statusShowMoreBtn = ref(true);


    const LINK = "https://shoes-shop-40b9a-default-rtdb.firebaseio.com/products.json"
    const getProductList = async() => {
        try {
            const response = await axios.get(LINK);
            productList.value = response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };



    const getProductInfo = (id) => {

        return productList.value.find(product => product.product_id == id);
        // return productList.value;
    };

    const updateLimitToShow = () => {
        limitToShow.value += 4;
    };

    const categoryList = computed(() => {
        const categories = [];
        productList.value.forEach(product => {
            if (product.category_for && !categories.some(cat => cat.name === product.category_for)) {
                categories.push({
                    name: product.category_for,
                    id: product.category_id
                });
            }
        });
        return categories;
    });

    const searchList = computed(() => {
        if (!searchValue.value) {
            return productList.value; // Повертаємо весь список, якщо пошукове значення порожнє
        }
        const result = productList.value.filter(product => product.product_name.includes(searchValue.value));
        return result;
    });




    return {
        productList,
        getProductList,
        getProductInfo,
        categoryList,
        searchList,
        searchValue,
        updateLimitToShow,
        limitToShow,
        statusShowMoreBtn

    };
});