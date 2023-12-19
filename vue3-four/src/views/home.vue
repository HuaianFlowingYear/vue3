<script setup>
    // 只要能够调用到路由实例的push方法，就可以使用页面路由
    // 路由实例的来源我不关心
    import { useRouter } from 'vue-router';
    const router = useRouter();
    import $router from '../router';
    console.log($router === router);
    // 路由传递参数的方式
    // paraams
    // query
    // 声明式导航
    // 编程式导航

   
</script>
<template>
    <div class="w">
        daaaaaf
        <!-- 声明式导航 -->
        <router-link to="/pinia">to pinia</router-link>
        <RouterLink :to="{path:'/pinia'}">to pinia</RouterLink>
        <RouterLink :to="{name: 'pinia'}">to pinia</RouterLink>
        <button @click="router.push('/pinia')">to pinia</button>
    </div>
</template>
<style lang="less" scoped>
   
</style>