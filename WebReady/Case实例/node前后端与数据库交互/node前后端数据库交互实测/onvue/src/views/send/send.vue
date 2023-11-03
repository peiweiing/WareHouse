<template>
    <div>
        <!-- <div>向后台发送数据：</div> -->
        <div>
            <input v-model="formdata.name" type="text" placeholder="请输入用户名">
            <input v-model="formdata.phone" type="text" placeholder="请收入手机号">
            <button @click="onset">提交</button>
        </div>
        <form action="" @submit="submitForm">
            <input v-model="formdata.name" type="text" placeholder="请输入用户名">
            <input v-model="formdata.phone" type="text" placeholder="请收入手机号">
            <button type="submit">提交</button>
        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                formdata:{
                    name:'',
                    phone:'',
                },
                // formData:{},
            }
        },
        methods:{
            onset() {
                const formdata = this.formdata
                console.log(formdata);
                // 在这里进行表单数据验证，确保数据的合法性
                this.$axios.get("http://127.0.0.1:3000/index", {
                params: {
                    formdata
                    // username: "张三", password: "123",
                }
                }).then(res => {
                    //请求成功执行
                    console.log("res数据发送成功",res);
                }).catch(error => {
                    //请求失败执行
                    console.log("error",error);
                })
            },
            submitForm() {
                const formdata = this.formdata
                console.log(formdata);
                // 在这里进行表单数据验证，确保数据的合法性
                this.$axios.get("http://127.0.0.1:3000/index", {
                params: {
                    formdata
                    // username: "张三", password: "123",
                }
                }).then(res => {
                    //请求成功执行
                    console.log("res数据发送成功",res);
                }).catch(error => {
                    //请求失败执行
                    console.log("error",error);
                })
            }
        },
    }
</script>
<style>
</style>