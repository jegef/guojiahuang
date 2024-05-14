import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import $ from 'jquery';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import store from './store/index';
// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
const app=createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// import ShowLove from './ShowLove';
app.directive('focus',{
    mounted(el){
        el.focus()
    }
})
app.use(router).use($).use(ElementPlus).use(store).mount('#app')
