<script setup>
    import { ref,onMounted,defineOptions } from 'vue';
    defineOptions({name:"co_card"});
    const count = ref(0);
    onMounted(() => {
        console.log(count.value);
    });
    // 监听
</script>
<template>
    
        <div>
            <slot name="header"></slot>
            <slot></slot>
            <slot name="footer"></slot>
            {{count }}
        </div>
</template>
<style lang="less" scoped>
   
</style>