## vue3中的 style 模块做了哪些更新？
1、可以使用 v-bind 指令绑定变量作为css属性、绑定内容可以作为简单的js计算 (需要使用引号包裹)
2、使组件scoped 样式表中的某个样式影响全卷 `:global(.样式名){}`
3、使用:slotted(.child) {} 给slot 元素赋予样式
4、使用<style module></style> 创建模块化样式
5、一个vue组件中可以存在若干个style标签，并且可以给每个style标签设置scoped属性




##vue3中
1、生命周期的变化
```
/**
 * beforeCreate=>setup
 * created=>setup
 * beforeMount=onBeforeMount
 * mounted
 * beforeUpdate =>onBeforeUpdate
 * updated
 * beforeDestroy =>onBeforeUnmount
 * destroyed
 */

2、生命周期函数的使用变化
所有生命周期函数中除了setup可以直接使用外，其他都要先导入再使用
setup