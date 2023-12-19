<script setup>
    import { ref,onMounted,defineOptions} from 'vue';
    defineOptions({name:'co-card'});
    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    // 监听
  
   
</script>
<template>
    <div class="w">
        asd:{{count}}
        <solt name="header"></solt>
        <solt></solt>
        <solt name="footer"></solt>
    </div>
</template>
<style lang="less" scoped>
   
</style>