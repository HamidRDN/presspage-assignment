import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@pages/home-page.vue'),
        },
        {
            path: '/users',
            component: () => import('@pages/users-page.vue'),
        },
        { path: '/:pathMatch(.*)', component: () => import('@pages/404-page.vue') },
    ],
});

export default router;
