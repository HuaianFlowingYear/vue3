<template>
  <!-- 模板代码... -->
  <div>
    <div :class="$style.a">A</div>
  </div>   
</template>

<script>
export default {
  name: '',
  data() {
    return {
      // 数据...
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
  }
}
</script>

<style scoped lang="less">
/* 样式... */
</style>
<style module>
/*this.$style.a   被绑定在this.$style*/
    .a{
        width: 50px;
        height: 50px;
        background-color: teal;
        border-radius: 50%;
        color: red;
    }
    .b{
        color:aqua;
    }
</style>

