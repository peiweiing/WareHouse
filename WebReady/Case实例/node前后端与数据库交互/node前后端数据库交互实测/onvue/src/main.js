import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "/node_modules/axios"

const app = createApp(App);

app.use(store).use(router).mount('#app');
// app.prototype.axios = axios
app.provide('$axios', axios);

/* 挂载全局对象 */
app.config.globalProperties.$axios = axios;