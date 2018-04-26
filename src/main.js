import fastclick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import {Swipe, SwipeItem} from 'vant'
import 'styles/index.css'
import 'styles/iconfont.css'
fastclick.attach(document.body)
Vue.config.productionTip = true
Vue.use(Swipe).use(SwipeItem)
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})