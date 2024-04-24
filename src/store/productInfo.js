import { ref } from 'vue';
import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductInfo = defineStore("productInfo", () => {
    const productInfo = ref([]);

    const BASE_URL = "https://shoes-shop-40b9a-default-rtdb.firebaseio.com/products.json";
    const getProductInfo = async (id) => {
        const LINK = `${BASE_URL}?orderBy="product_id"&equalTo="${id}"`;

        try {
            const response = await axios.get(LINK);
            const firstObjectKey = Object.keys(response.data)[0];
            const innerObject = response.data[firstObjectKey];

            productInfo.value = innerObject;
            console.log(productInfo.value);
        } catch (error) {
            console.error('Error fetching product info:', error);
        }
    };

    return {
        productInfo,
        getProductInfo
    };
});
