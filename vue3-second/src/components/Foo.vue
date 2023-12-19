<script setup>
    // vue2 写组件的配置对象
    // 只要和定义在使用的相关的都用define开头，直接使用用use开头
    import { ref,onMounted,defineOptions,defineProps,useAttrs,useCssModule,defineEmits} from 'vue';
    // 通过defineOptions模块函数 可以传入组件的name 来定义组件名称
    // ref:1、定义响应式数据 2、获取dom节点、组件实例
    defineOptions({name:"Foo"});
    // 通过参数可以对props属性进行定义和约束，可以通过其返回值获取外界传递进来的props数据
   const props = defineProps({
        a:{
            type:String,
            required:true,
            default:'123'
        },
        b:{
            type:Number,
            required:true,
            default:124
        }

    })
    console.log(props);
    // attrs属性的使用
    const attr = useAttrs();
    // css模块的使用
    console.log('attrs',attr.c);
    const $style = useCssModule();
    console.log('style',$style.a);
    // 通过参数自定义事件 通过返回值触发
    const emit = defineEmits(["abc"]);

    const count = ref(0);
    onMounted( () => {
        console.log(count.value);
    });
    const ele = ref(null);
    console.log(ele.value);
    onMounted(()=>{
        console.log(ele.value);
    })
   
    // 结论：
    // 1、凡是需要提前在组件内部定义的操作需要引入的模块一定一defineXXX开头 参数作为约束限制对象或数组 (参考vue2) 返回值起到取值的作用
    // 2、凡是不需要提前在组件内部定义的可以直接使用，模块一定以use开头，一般没参数，返回值起到取值作用
</script>
<template>
    <div class="w" ref="ele">{{count}}</div>
    <div class="w" ref="ele">a:{{a}}</div>
    <button @click="emit('abc')">触发abc自定义事件</button>
</template>
<style lang="less" scoped>
   
</style>
<style module>
    .a{
        background-color: red;
    }
</style>