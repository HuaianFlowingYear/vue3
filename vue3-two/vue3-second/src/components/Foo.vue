<template>
    <div class="wrapper" ref="ele">{{ count }}</div>
    <div>a:{{ a }}</div>
    <!-- <button @click="emits('abc')"></button> -->
</template>

<script setup>
import { ref,
    onMounted,
    defineOptions,
    defineProps,
    useAttrs,
    useCssModule,
    // defineEmits
 } from 'vue'
// defineOptions模块数据可以传入组件的name来定义组件的name
// ref:1、定义响应式数据 2、 获取dome节点、组件实例
defineOptions({name:'Foo'})
//通过参数可以对props属性进行定义和约束，可以通过其返回值获取外界传递进来的props数据
defineProps({
    a:{
        type:String,
        requied:true
    },
    b:{
        type:Number,
        requied:true
    }
})
const attr = useAttrs()
console.log(attr.c);

const $style = useCssModule();
 console.log($style.a);
// 通过参数定义自定义事件通过返回值触发
// const 
const count =ref(0)

onMounted(()=>{
    console.log(count.value);
})
const ele = ref(null)
onMounted(()=>{
    console.log(ele.value);
})



// 结论凡是需要提前在组件内部定义的操作需要引入的模块一定要以definxx开头 参数作为约束限制对象或者数据资源回值起到取值作用
</script>


<style scoped  lang="less">

</style>


<style module>
    /* .a{

    } */
</style>
