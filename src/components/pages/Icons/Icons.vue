<template>
    <div class='icons'>
        <van-swipe :show-indicators='false'>
            <van-swipe-item v-for='(page, index) in pages' :key='index'>
                <div class='icon' v-for='(item, index) in page' :key='item.id'>
                    <div class='icon-img'>
                        <img class='icon-img-content' :src="item.imgUrl">
                    </div>
                    <p class='icon-dese' v-text='item.desc'></p>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                IconsList: [
                    {id: '0001', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1603/e9/23778259cbc1bef7.png', desc: '本地玩乐'},
                    {id: '0002', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1706/8e/ce4761f0e1c90302.png', desc: '骑马划船'},
                    {id: '0003', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/a8/8f424d4b200a739a.png', desc: '玉龙雪山'},
                    {id: '0004', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png', desc: '大理'},
                    {id: '0005', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/b3/0249b48a69aaf49a.png', desc: '周边游'},
                    {id: '0006', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1706/cf/8392c0a7db7b7802.png', desc: '颐和园'},
                    {id: '0007', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/72/65b06c9a1158de9a.png', desc: '古北水镇'},
                    {id: '0008', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1704/fd/7b733d3656f4d002.png', desc: '八达岭长城'},
                    {id: '0009', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/ca/3cf116008d8eff9a.png', desc: '华山'},
                    {id: '0010', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1703/5a/612ae0fee636d202.jpg', desc: '法门寺'},
                    {id: '0011', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1703/5a/612ae0fee636d202.jpg', desc: '大理古城'},
                    {id: '0012', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1704/55/a5f3d40a7a0cf602.png', desc: '洱海游船'},
                    {id: '0013', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/3b/e01519661014569a.png', desc: '遇龙河'},
                    {id: '0014', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1606/ca/3cf116008d8eff9a.png', desc: '龙脊梯田'},
                    {id: '0015', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1711/55/a5f3d40a7a0cf602.png', desc: '西湖'},
                    {id: '0016', imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1704/55/a5f3d40a7a0cf602.png', desc: '千岛湖'}
                ]
            }
        },
        computed: {
            pages () {
                const pages = [];
                this.IconsList.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if(!pages[page]) {
                        pages[page] = [];
                    }
                    pages[page].push(item);
                });
                return pages;
            }
        }
    }
</script>

<style lang='stylus' scoped>
    .icons
        border none
        height 0
        padding-bottom 50%
        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            padding-bottom 25%
            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    display block
                    height 100%
                    margin 0 auto
            .icon-dese
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                text-align center
                font-size .18rem
                color #333
                overflow hidden
                white-space nowrap
                text-voerflow ellipsis
</style>