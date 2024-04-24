import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCartInfo = defineStore("cartInfo", () => {

    const cartList = ref(JSON.parse(localStorage.getItem('cartList')) || []);

    const visiblePopUp = ref(false);
    const visibleError = ref(false);

    const removeCartItem = (key) => {
        cartList.value = cartList.value.filter(item => item.cart_key !== key);

        localStorage.setItem('cartList', JSON.stringify(cartList.value));
    };

    const addProductToCart = (id, item, option) => {
        console.log(option);
        item = {...item, cart_key: ''};
        item = {...item, cart_option: ''};
        item = {...item, cart_key: ''};

        if(option) {
            const sortedCart = [...cartList.value].filter(item => item.product_id === id);
            console.log(sortedCart);
            const existingProductOption = sortedCart.some(product => product.cart_option === option);
            toggleSuccessPop(visiblePopUp);
            if (existingProductOption) {
                // Товар з таким product_id та опцією вже є в кошику
                const existingProduct = sortedCart.find(product => product.cart_option === option);
                const originalProductIndex = cartList.value.findIndex(product => product.cart_key === existingProduct.cart_key);

                if (originalProductIndex !== -1) {
                    // Збільшуємо кількість товару в оригінальному масиві
                    cartList.value[originalProductIndex].cart_quantity += 1;
                }
            } else {

                // Товар не знайдено в кошику
                item.cart_option = option;
                item.cart_quantity = 1;
                item.cart_key = parseInt(Math.floor(Math.random() * 10000) + 1, 10);
                cartList.value.push(item);

            }

            localStorage.setItem('cartList', JSON.stringify(cartList.value));
        } else {
            toggleSuccessPop(visibleError);
        }



    };

    const updateQuantity = (key) => {
        console.log(key);
        const product = cartList.value.find(item => item.cart_key === key);
        product.cart_quantity += 1;
        console.log(product);

        // Оновити локальне сховище
        localStorage.setItem('cartList', JSON.stringify(cartList.value));
    };

    const minusQuantity = (key) => {
        console.log(key);
        const product = cartList.value.find(item => item.cart_key === key);
        if (product.cart_quantity > 1) {
            product.cart_quantity -= 1;
        } else {
            removeCartItem(key);
        }

        console.log(product);

        // Оновити локальне сховище
        localStorage.setItem('cartList', JSON.stringify(cartList.value));
    };



    const getTotalValue = computed(() => {
        const totalSum = cartList.value.reduce((sum, item) => sum + parseFloat(item.product_price * item.cart_quantity), 0);
        return totalSum;
    });

    const getTotalQuantity = computed(() => {
        const totalSum = cartList.value.reduce((sum, item) => sum + parseFloat(item.cart_quantity), 0);
        return totalSum;
    });



    const toggleSuccessPop = (varible) => {

        varible.value = true;
        console.log(varible.value);
        setTimeout(() => {
            varible.value = false;
            console.log(varible.value);
        }, 2000);
    };



    return {
        cartList,
        removeCartItem,
        updateQuantity,
        minusQuantity,
        getTotalValue,
        addProductToCart,
        getTotalQuantity,
        visiblePopUp,
        visibleError
    };

});
