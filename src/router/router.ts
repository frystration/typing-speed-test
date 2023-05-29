import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import NotFound from "../views/NotFound.vue";
import {Language} from "../types";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/test",
        redirect: `/test/${Language.RU}`
    },
    {
        path: "/test/:lang(en|ru|test)",
        component: Test
    },
    {
        path: "/test/:invalidLang(.*)", // Добавленный маршрут для недопустимых значений :lang
        redirect: `/test/${Language.RU}`
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
