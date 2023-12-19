<script setup>
    import { ref,onMounted } from 'vue';
    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    // 监听
  
   
</script>
<template>
    <div class="w">AAA
        <router-link to="/a1">to a1</router-link><br>
        <router-link to="/a2">to a2</router-link>
        <router-view></router-view>
    </div>
</template>
<style lang="less" scoped>
   
</style>