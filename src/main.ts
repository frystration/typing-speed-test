import { createApp } from 'vue'
import router from '@/router/router.ts'
// @ts-ignore
import App from "@/App.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from "@/store";


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
