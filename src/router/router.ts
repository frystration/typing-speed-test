import {createRouter, createWebHistory} from "vue-router";
// @ts-ignore
import Home from '@/views/Home.vue'
// @ts-ignore
import NotFound from "@/views/NotFound.vue";
// @ts-ignore
import Test from "@/views/Test.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/test",
        redirect: "/test/ru"
    },
    {
        path: "/test/:lang(\\bru|en|test\\b)",
        component: Test
    },
    {
        path: "/test/:invalidLang(.*)", // Добавленный маршрут для недопустимых значений :lang
        redirect: "/test/ru"
    },
    {
        path: "/404",
        component: NotFound
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
