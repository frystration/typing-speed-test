import { createApp } from 'vue'
import router from './router'
// @ts-ignore
import App from "./App.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App)
    .use(router)
    .mount('#app')
