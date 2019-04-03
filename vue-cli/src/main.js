// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import { store } from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false
    /* eslint-disable no-new */
Vue.use(ElementUI)
new Vue({
    el: '#app',
    store: store,
    router: router,
    template: '<App/>',
    components: { App },
    strict: false
})