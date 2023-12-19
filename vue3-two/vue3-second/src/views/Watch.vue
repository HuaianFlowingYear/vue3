<template>
    <div class="wrapper">
        <button @click="count++">count:{{ count }}</button>
        <button @click="key++">{{ key }}</button>
        <button>停止监听</button>
    </div>
</template>

<script setup>
import { ref, watch,watchEffect } from 'vue'
const count = ref(0)
const index = ref(1)
const key = ref(123)

watch(key,()=>console.log('发生了变化'))
// watch(监听数据,数据变化需要触发的回调函数)
// 侦听单个响应数据
watch(count,()=>console.log('发生了变化'))
watch(
    ()=>count.value,
    ()=>console.log(`watcheff,${count.value}发生了变化`)
)

watch([count,index],()=>console.log('发生了变化'))
// 函数体中使用的响应式数据发生变化 自动执行
watchEffect(()=>console.log(`watcheff,${count.value}发生了变化`))
// watch和watchEffect的区别
// 不同点
// 1.watchEffect 默认执行第一次
// 2.watch需要手动在第一个参数中指定侦听的响应式数据，watchEffect是自动侦听

// 相同点
// 1.都可以取消
// 2.watchEffect 功能都可以用watch实现 watchEffect
</script>


<style scoped  lang="less">

</style>