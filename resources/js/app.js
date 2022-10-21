require('./bootstrap');
import Vue from 'vue'

window.Vue = require('vue').default;
import router from './routes'
import MainContainer from "./pages/MainContainer";
import apiUrls from "./utils/apiUrls"
Vue.prototype.$api = apiUrls

new Vue({
    router,
    render: h => h(MainContainer)
}).$mount('#app')
