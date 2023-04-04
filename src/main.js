import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import "element-plus/dist/index.css";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import api from './api'
import router from './router'
import store from './store/index'
import storage from './utils/storage'
import request from './utils/request'

// 全局挂载
app.config.globalProperties.$requese = request
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api
app.use(ElementPlus).use(router).use(store).mount('#app')

// 注册全局组件
for (const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
