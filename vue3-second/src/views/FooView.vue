<script setup>
    import { reactive ,ref,toRefs,computed} from 'vue'
    // reactive 不推荐使用解构赋值（类似解构赋值），解构（类似解构赋值）操作会失去响应式
    const user = reactive({
        name: '张三',
        age: 18
    });
    // 使用toRefs 解构赋值（类解构赋值），使用toRefs 操作会保留响应式
    let {name,age} = toRefs(user);
    //计算属性
    const a = ref(123);
    const b = ref(234);
    const sum = computed({
        get(){
            return a.value + b.value;
        },
        // 一旦计算属性提供给setter表示具备被赋值的能力
        // 赋值的数据就成为set函数的参数 ，自行分配
        set(value){
            a.value = b.value = value/2;
        }
    })
    // 如果计算属性只提供getter，那么可以使用语法糖(函数)
    const sum1 = computed(()=>a.value + b.value);
    // 或者
    const sum2 = computed(()=>{
        return a.value + b.value;
    })
</script>
<template>
    <div class="w">
        <h1>name:{{ name }}</h1>
        <h1 @click="age++">age:{{age}}</h1>
        <h1 @click="sum=111">{{ sum }}</h1>
        <h1>{{ sum1 }}</h1>
        <h1>{{ sum2 }}</h1>
    </div>
</template>
