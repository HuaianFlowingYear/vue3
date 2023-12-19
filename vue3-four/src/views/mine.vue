<script setup>
    import { useRoute,useRouter } from 'vue-router';
    const route = useRoute();
    const router = useRouter();
    // const { name } = route.params;
    console.log(route);
   
</script>
<template>
    <div class="w">
        <span class="bg-[red] color-[red] text-[3xl]">12</span>
        <button @click="router.push('/home?id=1234')">to home1</button>
        <button @click="router.push({path:'/home?id=1234'})">to home2</button>
        <button @click="router.push({path:'/home',query:{id:1234}})">to home3</button>
        <button @click="router.push({name:'home',query:{id:1234}})">to home4</button>
    </div>
</template>
<style lang="less" scoped>
   
</style>