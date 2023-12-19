<script setup>
    import { ref,onMounted } from 'vue';
    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    // 监听
  
   
</script>
<template>
    <div class="w">大菠萝</div>
</template>
<style lang="less" scoped>
   
</style>