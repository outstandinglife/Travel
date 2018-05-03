import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home/Home')
const City = () => import('@/components/pages/City/City')
Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/city', name: 'city', component: City}
    ]
})