<template>
    <div class="wrapper">
        <h1>{{ name }}</h1>
        <h2 @click="age++">{{ age }}</h2>
        <h2 @click="sum=123">{{ sum }}</h2>
        <h2>{{ sum1 }}</h2>
    </div>
</template>

<script setup>
import {ref,reactive,toRefs,computed } from 'vue'
// 解构操作会失去响应式
const user =reactive({
    name:'tiantain',
    age:18
})
let {name,age} = toRefs(user)

const a = ref(3)
const b = ref(4)
// 计算属性(getter,setter)
const sum = computed({
    get(){
        return a.value+b.value
    },
    // 一旦计算属性提供setter表示具备被赋值的能力
    // 赋值的数据就成为setter函数的参数，自行分配
    set(value){
        a.value=b.value = value/2
    }
});
// 如果计算属性只提供getter那么可以使用语法糖(函数)
const sum1=computed(()=>{
    return a.value+b.value
})
</script>


<style scoped  lang="less">

</style>