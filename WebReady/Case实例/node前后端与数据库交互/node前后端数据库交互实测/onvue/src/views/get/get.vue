<template>
    <div>
        <!-- <div>获取信息：</div> -->
        <ul class="">
            <li>获取浏览器信息</li>
            <li>获取手机版本</li>
            <li>获取联系人</li>
            <li>获取位置</li>
            <li>获取IP地址</li>
            <li>获取当前时间</li>
        </ul>
    </div>
</template>
<script>
export default {
    
    data() {
        return {
            deviceType: '',
            datatime: '',
            dataip: '',
        }
    },
    methods: {
        // 判断使用设备
        istype() {
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.indexOf("iphone") != -1 || userAgent.indexOf("ipod") != -1 || userAgent.indexOf("ipad") != -1) {
                this.deviceType = "ios";
            }
            else if (userAgent.indexOf("android") != -1) {
                this.deviceType = "android";
            }
            else {
                this.deviceType = "other";
            }
            console.log("当前设备类型为：" + this.deviceType);

        },
        // axios请求获取访问者的IP地址
        async  isip() {
            let the = this;
            await this.$axios({
                url: 'https://api.ipify.org?format=json',
                method: 'get',dataType:'json',
            }).then(function (response) {
                the.dataip = response.data.ip
                console.log("IP地址：",response);
            }).catch(function (error) {
                console.log(error);
            });
        },
        // 发送请求保存数据
        getdata() {
            let datas = { type: this.deviceType, ip: this.dataip, time: this.datatime };
            this.$axios.get("http://localhost:3000/info", {
                params: {
                    // username: "张三", password: "123",
                    datas
                }
            }).then(res => {
                //请求成功执行
                console.log("res数据发送成功",res);
            }).catch(error => {
                //请求失败执行
                console.log("error",error);
            })
        },
        //按照顺序调用多个方法
        // runFunAll(){
        //     Promise.all([
        //         this.istype(),
        //         this.isip(),
        //     ]).then(res => {
        //         //需要执行的代码
        //         this.getdata()
        //         console.log("按顺序从上到下执行方法结束后再执行此处");
        //     })
        // }
        
    },
    beforeMount() {
        // console.log("模板渲染前执行");
        this.datatime = new Date().toLocaleString();
        console.log("当前时间：",this.datatime)

    },
    async mounted() {
        // console.log("模板渲染后执行");
        // this.runFunAll();
        await this.isip();
        await this.istype();
        this.getdata();
        
    },
}
</script>
<style></style>