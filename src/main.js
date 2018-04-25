import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/index.css'
fastclick.attach(document.body)
Vue.config.productionTip = true

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})