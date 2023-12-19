<template>
  <!-- 模板代码... -->
  <div @click="changeA">{{ data.a }}</div>   
  <div @click="changeB">{{ b }} 相当与b.value  这个解析的时候会自动帮忙加value 但是js中不行，得自己加</div> 
  <Foo a="1" :b="2" c="3" @abc="changeB"/>
  <br><br>
  <!-- <div>
    <Checkbox label="option 1" v-model="checked1" size="large"/>
    <Checkbox label="option 2" v-model="checked2" size="large"/>
  </div>
  <div>
    <Checkbox label="option 3" v-model="checked3"/>
    <Checkbox label="option 4" v-model="checked4"/>
  </div>
  <div>
    <Checkbox label="option 5" size="small" v-model="checked5"/>
    <Checkbox label="option 6" size="small" v-model="checked6"/>
  </div>
  <div>
    <Checkbox label="option 5" size="small" disabled v-model="checked7"/>
    <Checkbox label="option 6" size="small" disabled v-model="checked8"/>
  </div> -->
  <co-card>
    <template #header>
      <div>
        sdaa
      </div>
    </template>
  </co-card>
 
</template>

<script setup>
// setup
// ①如果script标签添加了setup属性 表示该setup标签所围成的区域就是setup函数的函数图部分 （这是setup的语法糖）
// ②<script setup>通过这个语法糖定义的数据、变量、函数可以直接使用，不用返回
// ③<script setup> 中导入的组件可以直接在模版中使用，不需要注册
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,//ref 不挑参数
  reactive
} from 'vue'
import Foo from '../components/Foo.vue'
// import co_card from '../components/Card'
// import Checkbox from '../components/Checkbox.vue';


// const checked1 = ref(true)
// const checked2 = ref(false)
// const checked3 = ref(false)
// const checked4 = ref(false)
// const checked5 = ref(false)
// const checked6 = ref(false)
// const checked7 = ref(false)
// const checked8 = ref(false)

    // ref是将 reactive 进行了二次封装 但是在vue里写的时候也必须加上.value
    // const $ref = (source) =>{
    //   return reactive({value:source});
    // }
    console.log("steup代替了beforecreate created ");
    // reactive 参数必须是对象 
    // 使用reactive创建的响应式数据在setup中返回的时候不能解构、取值，否则失去响应式
    onBeforeMount(()=>{console.log('挂载前');});
    onMounted(()=>{console.log('挂载后');});
    onBeforeUpdate(()=>{console.log('更新前');});
    onUpdated(()=>{console.log('更新后');});
    onBeforeUnmount(()=>{console.log('卸载前');});
    onUnmounted(()=>{console.log('卸载后');});
    // 响应式数据 vue 的核心
    // let a = 1;
    const  data = reactive({a:1})
    const changeA =()=>{
      data.a++;
    
    };
    const changeB =()=>{
      b.value--;
    };
    const b = ref(2);
  
    
  

/**
 * vue2的生命周期钩子=>vue3的生命周期钩子
 * beforeCreate => setup
 * created => setup
 * beforeMount => onBeforeMount
 * mounted => onMounted
 * beforeUpdate => onBeforeUpdate
 * updated => onUpdated
 * beforeDestroy => onBeforeUnmount
 * destroyed => onUnmounted
 * activated => onActivated
 * deactivated => onDeactivated
 * 
 */
</script>

<style scoped>
/* 样式... */
</style>

