<script setup>
    // import { ref } from 'vue';
    // const count = ref(0);
    import { ref } from 'vue'
//   import { ElMessageBox } from 'element-plus'
  
 
  const direction = ref('rtl')
   
</script>
<template>
    <div class="w">
        <div>
            <h1>基础用法</h1>
            <div>
                <el-radio-group v-model="direction">
                    <el-radio label="ltr">left to right</el-radio>
                    <el-radio label="rtl">right to left</el-radio>
                    <el-radio label="ttb">top to bottom</el-radio>
                    <el-radio label="btt">bottom to top</el-radio>
                  </el-radio-group>
                <el-button type="primary" style="margin-left: 16px" >
                  open
                </el-button>
                <el-button type="primary" style="margin-left: 16px" >
                  with footer
                </el-button>
            </div>
            <co-drawer></co-drawer>
        </div>
        <br>
        <div>
            <h1>不添加Title</h1>
            <co-drawer></co-drawer>
        </div>
        <br>
        <div>
            <h1>自定义内容</h1>
            <co-drawer></co-drawer>
        </div>
        <br>
        <div>
            <h1>自定义头部</h1>
            <co-drawer></co-drawer>
        </div>
        <br>
        <div>
            <h1>嵌套抽屉</h1>
            <co-drawer></co-drawer>
        </div>
       
    </div>
</template>
<style lang="less" scoped>
   
</style>