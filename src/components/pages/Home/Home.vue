<template>
    <div>
        <m-header></m-header>
        <swiper :swiperList='swiperList'></swiper>
        <icons :iconList='iconList'></icons>
        <recommend :recommendList='recommendList'></recommend>
        <weekend :weekendList='weekendList'></weekend>
    </div>
</template>

<script>
    import MHeader from 'base/m-header/m-header'
    import Swiper from 'base/Swiper/Swiper'
    import Icons from 'pages/Icons/Icons'
    import Recommend from 'pages/Recommend/Recommend'
    import Weekend from 'pages/Weekend/Weekend'
    import axios from 'axios'
    export default {
        data () {
            return {
                swiperList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
            }
        },
        mounted () {
            this.getHomeInfo()
        },
        methods: {
            getHomeInfo () {
                axios.get('/api/index.json')
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc (res) {
                res = res.data
                if(res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        components: {
            MHeader,
            Swiper,
            Icons,
            Recommend,
            Weekend
        }
    }
</script>

<style>
    
</style>