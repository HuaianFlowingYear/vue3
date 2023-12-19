<script setup>
    import { ref,onMounted,defineOptions } from 'vue';
    defineOptions({name:"co-menu"})
    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    // 监听
  
   
</script>
<template>
    <div class="w">Menu_commputer</div>
</template>
<style lang="less" scoped>
   
</style>