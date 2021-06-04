import { createApp } from 'vue';
import App from './App.vue';
import '@/styles/index.scss';
import router from './router';
import store from './store';
import './plugins/element.js';
import { initApp } from '@/scripts';
import SvgIcon from '@/components/SvgIcon';
import installElementPlus from './plugins/element';

const app = createApp(App);
initApp(app);
app.component('svg-icon', SvgIcon);
app.use(router);
app.use(store);
installElementPlus(app);
app.mount('#app');
