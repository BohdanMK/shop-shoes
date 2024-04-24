import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useOrderInfo = defineStore("orderInfo", () => {
    const orderData = reactive({
        userInfo: {},
        productList: {}
    });


    const saveOrderData = () => {

        localStorage.setItem('orderData', JSON.stringify(orderData));
    };

    return {
        orderData,
        saveOrderData
    }

});