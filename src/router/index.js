import { createRouter, createWebHistory } from 'vue-router';




const router = createRouter({
    history: createWebHistory(),
    routes: [


        {
            name: 'start',
            path: '/',
            component: () => import('@/views/StartPage.vue')
        },
        {
            name: 'Home',
            path: '/Home',
            meta: {layout: 'main'},
            component: () => import('@/views/HomePage.vue')
        },
        {
            name: 'register',
            path: '/register',
            meta: {layout: 'empty'},
            component: () => import('@/views/RegisterPage.vue')
        },
        {
            name: 'login',
            path: '/login',
            meta: {layout: 'empty'},
            component: () => import('@/views/LoginPage.vue')
        },
        {
            name: 'remember',
            path: '/remember',
            meta: {layout: 'empty'},
            component: () => import('@/views/RememberPage.vue')
        },
        {
            name: 'category',
            path: '/category/:id',
            meta: {layout: 'main'},
            component: () => import('@/views/CategoryPage.vue')
        },
        {
            name: 'product',
            path: '/product/:id',
            meta: {layout: 'main'},
            component: () => import('@/views/ProductPage.vue')
        },
        {
            name: 'checkout',
            path: '/checkout',
            meta: {layout: 'main'},
            component: () => import('@/views/CheckOutPage.vue')
        },
        {
            name: 'user-page',
            path: '/user/page',
            meta: {layout: 'main'},
            component: () => import('@/views/UserPage.vue')
        },
        {
            name: 'confirm',
            path: '/confirm',
            meta: {layout: 'main'},
            component: () => import('@/views/ConfirmPage.vue')
        },
        {
            name: 'thanks',
            path: '/thanks',
            meta: {layout: 'main'},
            component: () => import('@/views/ThankPage.vue')
        }

    ]
});

export default router;
