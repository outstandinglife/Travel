<template>
    <div>
        <button @click='getTest'>get接口测试</button> <button @click='postTest'>post接口测试</button>
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
                weekendList: [],
                user: {
                    phone: 18810329065,
                    passowrd: 66666,
                    username: 'lipenghui'
                },
                goods: {
                    goodsId: "9f0fc88cbd5948a4a18d575f15710e62",
                    image: "http://baixing.kuaihejiu.com/homeFloor/20171202/20171202201017_3360.jpg",
                    goodsPrice: 99999
                }
            }
        },
        created () {

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
            },
            Goods () {
                return axios.get('http://jspang.com/DemoApi/oftenGoods.php');
            },
            Smlie () {
                return axios.get('https://www.easy-mock.com/mock/5ae3caf8a223347f3605652d/SmlieVue/index');
            },
            getTest () {
                const url = 'http://jspang.com/DemoApi/oftenGoods.php';
                this.http(url, 'get', this.goods)
                    .then((res) => {
                        console.log(res.data);
                    })
            },
            postTest () {
                const url = 'https://www.easy-mock.com/mock/5ae3caf8a223347f3605652d/SmlieVue/post';
                this.http(url, 'post', this.user)
                    .then((res) => {
                        console.log(res.data);
                    })
            },
            http (url, type, data) {
                var option = {
                    url: url,
                    method: type,
                    transformRequest: [
                        function (data) {
                            let result = '';
                            for(let value in data) {
                                result += encodeURIComponent(value) + '=' + encodeURIComponent(data[value]) + '&';
                            }
                            if (result) {
                                result = result.substring(0, result.length - 1);
                            }
                            return result;
                        }
                    ],
                    paramsSerializer: (params) => {
                        let result = '';
                        for(let value in params) {
                            result += encodeURIComponent(value) + '=' + encodeURIComponent(data[value]) + '&';
                        }
                        if (result) {
                            result = result.substring(0, result.length - 1);
                        }
                        return result;
                    }
                }
                type === 'get' ? option.params = data : option.data = data;
                return new Promise((resolve, reject) => {
                    axios.request((option))
                        .then((res) => {
                            resolve(res);
                        })
                        .catch((err) => {
                            reject(err)
                        })
                });
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