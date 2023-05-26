import {createRouter, createWebHistory} from "vue-router";
// @ts-ignore
import Home from '@/views/Home.vue'
// @ts-ignore
import Test from "@/views/Test.vue";
// @ts-ignore
import About from "@/views/About.vue";

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/test",
        component: Test
    },
    {
        path: "/about",
        component: About
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});
export default router;
