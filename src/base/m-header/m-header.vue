<template>
    <div class='header'>
        <div class='header-left'>
            <div class='iconfont back-icon'>&#xe600;</div>
        </div>
        <div class='header-input'>
            <span class='iconfont search-icon'>&#xe601;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to='/city' tag='div'>
            <div class='header-right'>
                城市
                <span class='iconfont arrow-icon'>&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='stylus' scoped>
    .header
        display flex
        background-color #00bcd4
        line-height .86rem
        .header-left
            width .7rem
            float left
            .back-icon
                text-align center
                font-size .4rem
                color #fff
        .header-input
            flex 1
            line-height .64rem
            height .64rem
            margin-top .12rem
            background-color #fff
            border-radius .1rem
            color #ccc
            .search-icon
                margin-left .1rem
        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            color #fff
            .arrow-icon
                margin-left -.04rem
                font-size .24rem
</style>