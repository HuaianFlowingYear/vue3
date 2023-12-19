## vue3中的 style 模块做了哪些更新？
1、可以使用 v-bind 指令绑定变量作为css属性、绑定内容可以作为简单的js计算 (需要使用引号包裹)
2、使组件scoped 样式表中的某个样式影响全卷 `:global(.样式名){}`
3、使用:slotted(.child) {} 给slot 元素赋予样式
4、使用<style module></style> 创建模块化样式
5、一个vue组件中可以存在若干个style标签，并且可以给每个style标签设置scoped属性


##vue3 中的 script 模块做了哪些更新？
1、生命周期名称的变化如下
```
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
```
2、声明周期的使用变化 
>所有周期中 除了 setup 可以直接使用之外，其他都需要先导入再使用（模块化语法） 
>因为setup 是所有vue模块的入口!
>setup 保持原来的配置方式，其他有变化
>setup 函数中不能使用this，因为this指向vue实例，setup函数中this指向undefined
>setup 函数中不能使用data、computed、methods等，因为这些配置项在vue实例中，setup函数中没有v


3、<scrpt setup> 语法糖
> 如果script标签添加了setup属性 表示该setup标签所围成的区域就是setup函数的函数图部分 （这是setup的语法糖）
> <script setup>通过这个语法糖定义的数据、变量、函数可以直接使用，不用返回
> <script setup> 中导入的组件可以直接在模版中使用，不需要注册