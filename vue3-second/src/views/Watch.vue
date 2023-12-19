<script setup>

    // eslint-disable-next-line no-unused-vars
    import {ref,watch,watchEffect} from 'vue';
    const count = ref(0);
    const count2 = ref(0);   
    const key = ref(123)
    const stpWatch= watch(key,()=>console.log(`key的值是${key.value}`),{
        immediate:true,
        deep:true
    })   
    // const stpWatch= watchEffect(key,()=>console.log(`key的值是${key.value}`)) 
    // watch(监听的数据,数据变化需要触发的回调函数)
    // 侦听单一响应式数据
    watch(count,()=>console.log('[watch]count发生了变化'))

    // 侦听多个响应式数据
    watch([count,count2],()=>console.log('[watch]count和count2发生了变化'))
    // watchEffect  自动检测依赖
    // 函数体找中响应式数据发生变化 自动执行  
    watchEffect(()=>console.log(`[watchEffect]${count.value}发生了变化`))
    // 区别
    // 不同点
    // 1、watchEffect 默认执行第一次
    // 2、watch 需要手动在第一个参数中指定依赖侦听的响应式数据，watchEffect是自动侦听
    // 相同点：
    // 1、都可以取消侦听
    // 2、watchEffect功能都可以使用watch实现 watchEffect方便快捷
   
</script>
<template>
    <div class="w">
        <button @click="count++">count:{{count}}</button>
        <button @click="key++">key:{{key }}</button>
        <button @click="stpWatch">点击停止监听key</button>
    </div>
</template>
<style lang="less" scoped>
   
</style>