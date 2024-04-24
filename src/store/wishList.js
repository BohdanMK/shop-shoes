import { ref, computed } from 'vue';
import { defineStore } from 'pinia';


export const useWishListInfo = defineStore("wishListInfo", () => {
    const wishList = ref(JSON.parse(localStorage.getItem('wishList')) || []);

    const removeWishListItem = (id) => {
        // Видаляємо товар із масиву за ключем
        wishList.value = wishList.value.filter(item => item.product_id !== id);

        // Оновлюємо localStorage
        localStorage.setItem('wishList', JSON.stringify(wishList.value));
    };

    const addProductToWishList = (id, item) => {

        const existingProduct = wishList.value.find(product => product.product_id === id);
        console.log(existingProduct);


        if (existingProduct) {

        } else {
            wishList.value.push(item);

        }
        console.log(wishList);
        localStorage.setItem('wishList', JSON.stringify(wishList.value));


    };

    const isInWishList = computed(() => {
        return (productId) => {
            return wishList.value.length > 0 ? wishList.value.some(product => product.product_id === productId) : false;
        };
    });

    const getTotalQuantity = computed(() => {
        return wishList.value.length;
    });


    return {
        wishList,
        addProductToWishList,
        removeWishListItem,
        isInWishList,
        getTotalQuantity
    }
});