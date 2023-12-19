<script setup>
    import { ref,onMounted } from 'vue';
    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    // 监听
  
   
</script>
<template>
    <div class="w">BBB
        <router-link to="/b1">to b1</router-link><br>
        <router-link to="/b2">to b2</router-link>
        <router-view></router-view>
        <RouterView></RouterView>
    </div>
</template>
<style lang="less" scoped>
   
</style>