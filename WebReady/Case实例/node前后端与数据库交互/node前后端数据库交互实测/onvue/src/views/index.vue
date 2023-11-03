<template>
    <div>
        <div class="and">首页</div>
        <ul class="con FX-sa">
            <li @click="onget">获取信息</li>
            <li @click="onsend">向后台发送数据</li>
            <li @click="onrequest">向后台请求数据</li>
        </ul>
        <!-- <div class="con">
            <router-link to="/get">点击获取信息</router-link>
            <router-link to="/send">向后台发送数据</router-link>
            <router-link to="/request">向后台请求数据</router-link>
        </div> -->
        <router-view></router-view>

        <div class="end">结尾</div>
    </div>
</template>
<script>
    export default{
        
        methods:{
            onget(){
                this.$router.push('/get')
            },
            onsend(){
                this.$router.push('/send')
            },
            onrequest(){
                this.$router.push('/request')
            }
        }
    }
</script>
<style lang="scss">
    .and{
        margin-bottom: 5%;
    }
    .end{
        margin-top: 5%;
    }
    .con{
        padding: 5% 20%;

    }
</style>