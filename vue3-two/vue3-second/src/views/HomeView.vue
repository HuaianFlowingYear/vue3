<template>
    <div @click="changeA">{{ data.a }}</div>
    <div @click="changeB">{{ b }}</div>
    <!-- <Foo a="1" :b="2" c="3"></Foo> -->
    <div class="butn">
    <co-button></co-button>
    <co-button type="primary"></co-button>
    <co-button type="success"></co-button>
    <co-button type="info"></co-button>
    <co-button type="warning"></co-button>
    <co-button type="danger"></co-button>
</div>
  
<div class="butn">
    <co-button plain></co-button>
    <co-button type="primary" plain></co-button>
    <co-button type="success" plain></co-button>
    <co-button type="info" plain></co-button>
    <co-button type="warning" plain></co-button>
    <co-button type="danger" plain></co-button>
</div>

<div class="butn">
    <co-button round></co-button>
    <co-button type="primary" round></co-button>
    <co-button type="success" round></co-button>
    <co-button type="info" round></co-button>
    <co-button type="warning" round></co-button>
    <co-button type="danger" round></co-button>
</div>

<div class="butn">
    <co-button circle></co-button>
    <co-button type="primary" circle></co-button>
    <co-button type="success" circle></co-button>
    <co-button type="info" circle></co-button>
    <co-button type="warning" circle></co-button>
    <co-button type="danger" circle></co-button>
</div>

<div class="butn">
    <co-button disabled></co-button>
    <co-button type="primary" disabled></co-button>
    <co-button type="success" disabled></co-button>
    <co-button type="info" disabled></co-button>
    <co-button type="warning" disabled></co-button>
    <co-button type="danger" disabled></co-button>
</div>





    <div>
      <!-- <co-checkbox></co-checkbox> -->
    </div>

</template>

<script setup>
// 如果script标签添加了setup属性 表示该script标签所围成的区域就是setup函数的函数体部分
// <script setup>定义的数据、变量、函数可以不用返回直接使用
// <script setup>中导入的组件可以在模版中直接使用不需要注册
import { 
  // onBeforeMount,
  // onMounted,
  // onBeforeUpdate,
  // onUpdated,
  // onBeforeUnmount,
  // onUnmounted,
  ref,
  reactive, } from 'vue'
  // import Foo from './Foo';
        // 生命周期钩子函数
  // onBeforeMount(()=>{
  //   console.log("挂载前");
  // });
  // onMounted(()=>{
  //   console.log("挂载后");
  // });
  // onBeforeUpdate(()=>{
  //   console.log("更新前");
  // });
  // onUpdated(()=>{
  //   console.log("更新后");
  // });
  // onBeforeUnmount(()=>{
  //   console.log("销毁前");
  // });
  // onUnmounted(()=>{
  //   console.log("销毁后");
  // });
// reactive参数必须是对象
// 使用reactive创建的响应式数据在setup中返回时不能解构、取值，否则会失去响应
// const chicks =ref(false)





let data = reactive({a:1})
const changeA =()=>{
  data.a++
}

const b = ref(2)

const changeB = ()=>{
  b.value++
}

        

</script>


<style scoped  lang="less">
.inps {
  width: 180px;
  margin-top: 5px;
  display: flex;
}



</style>
