<template>
  <!-- 模板代码... -->
  <div>
    <button @click="index++">{{ index }}</button>
    <button @click="a.b.c.d.e.f++">{{ a.b.c.d.e.f }}</button>
  </div>   
</template>

<script>
export default {
  name: '',
  data() {
    return {
      // 数据...
      index:0,
      a:{
        b:123,
        c:{
            x:111,
            d:{
                e:{
                    f:888,
                }
            }
        }
      }
    }
  },
  computed: {
    // 计算属性...
  },
  methods: {
    // 方法...
  },
  created() {
    // 生命周期钩子...
  },
  watch:{
    // 函数语法：
    // index(){},
    // "a.b":function() {},
    // ["a.b"](){}

    // 对象语法：
    index:{
        handler(){
            console.log('index发生了变化');
        },
        immediate:true,

    },
    a:{
        handler(){
            console.log('a发生了变化');
        },
        deep:true,
    }
  }
}
</script>

<style scoped>
/* 样式... */
</style>

