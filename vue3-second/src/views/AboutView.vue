<template>
  <h6>单独使用</h6>
  <!-- <div>
    <co-checkbox label="选项1" v-model:value="ck1"></co-checkbox>
    <co-checkbox label="选项2" v-model:value="ck2"></co-checkbox>
    <co-checkbox label="选项3" v-model:value="ck3"></co-checkbox>
  </div> -->
 <h6>分组使用</h6>
 <div>
  <co-checkbox_group v-model:value="checkedCity">
    <co-checkbox v-for="city in citys" :key="city" :label="city"/>
   
  </co-checkbox_group>
 </div>
</template>
<script setup>
  import {ref} from 'vue'
  // const ck1 = ref(false);
  // const ck2 = ref(true);
  // const ck3 = ref(true);
  const citys = ['北京', '上海','广州', '深圳'];
  const checkedCity = ref(['北京']);
</script>
