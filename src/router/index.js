import { createRouter, createWebHistory } from 'vue-router';




const router = createRouter({
    history: createWebHistory(),
    base: '/',
    routes: [


        {
            name: 'start',
            path: '/shoes-shop',
            component: () => import('@/views/StartPage.vue')
        },
        {
            name: 'Home',
            path: '/shoes-shop/home',
            meta: {layout: 'main'},
            component: () => import('@/views/HomePage.vue')
        },
        {
            name: 'register',
            path: '/shoes-shop/register',
            meta: {layout: 'empty'},
            component: () => import('@/views/RegisterPage.vue')
        },
        {
            name: 'login',
            path: '/shoes-shop/login',
            meta: {layout: 'empty'},
            component: () => import('@/views/LoginPage.vue')
        },
        {
            name: 'remember',
            path: '/shoes-shop/remember',
            meta: {layout: 'empty'},
            component: () => import('@/views/RememberPage.vue')
        },
        {
            name: 'category',
            path: '/shoes-shop/category/:id',
            meta: {layout: 'main'},
            component: () => import('@/views/CategoryPage.vue')
        },
        {
            name: 'product',
            path: '/shoes-shop/product/:id',
            meta: {layout: 'main'},
            component: () => import('@/views/ProductPage.vue')
        },
        {
            name: 'checkout',
            path: '/shoes-shop/checkout',
            meta: {layout: 'main'},
            component: () => import('@/views/CheckOutPage.vue')
        },
        {
            name: 'user-page',
            path: '/shoes-shop/user/page',
            meta: {layout: 'main'},
            component: () => import('@/views/UserPage.vue')
        },
        {
            name: 'confirm',
            path: '/shoes-shop/confirm',
            meta: {layout: 'main'},
            component: () => import('@/views/ConfirmPage.vue')
        },
        {
            name: 'thanks',
            path: '/shoes-shop/thanks',
            meta: {layout: 'main'},
            component: () => import('@/views/ThankPage.vue')
        }

    ]
});

export default router;
