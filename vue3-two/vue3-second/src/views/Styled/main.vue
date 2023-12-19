<template>
    <div></div>
</template>

<script>
    export default {
        // 定义组件名称
        name: "Styled",
        // 定义响应式数据
        data() {
            return {
                
            }
        },
        // 声明自定义事件
        emits: [],
        // 定义组件方法
        methods: {
            
        },
        // 定义计算属性
        computed: {
            
        },
        // 定义组件属性
        watch: {
            a(newVal, oldVal){
                console.log("Watch:",newVal, oldVal)
            } 
        },
        // 生命周期钩子函数
        created() {
            console.log('Foo created')
        },
        mounted() {
            console.log('Foo mounted')
        },
        updated() {
            console.log('Foo updated')
        },
    }
</script>