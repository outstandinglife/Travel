<template>
    <div class='wrapper'>
        <van-swipe :autoplay='autoplay' :loop='loop'>
            <van-swipe-item v-for='(item, index) in swipeList' :key='item.id'>
                <img class='swiper-img' :src='item.imgUrl' />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        props: {
            autoplay: {
                type: Number,
                default: 4000
            },
            loop: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                swipeList: [
                    {id: '0001', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/8e/2920cc7128b12002.jpg_640x170_abfeddc6.jpg'},
                    {id: '0002', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1710/94/e41712475cc4e702.jpg_640x170_f5dd3e83.jpg'}
                ]
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .wrapper >>> .van-swipe__indicator--active
        background #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        background #eee
        padding-bottom 26.56%
        .swiper-img
            width 100%
</style>