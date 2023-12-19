<script setup>
    import { defineProps,provide,defineEmits,toRefs} from 'vue';
    
   
    // 监听
  const props = defineProps({
    value:{
        type:Array,
        default:()=>[]
    }
  })
  const checkedCities = toRefs(props).value;
  const emit = defineEmits(['update:value'])
  provide('checked-cities',checkedCities);
  const updateCheckValue = (payload) =>{
    const result = [...props.value];
    const index = result.indexOf(payload);
    index>-1?result.splice(index,1):result.push(payload);
    emit('update:value',result);
  }
  provide('checked-cities',updateCheckValue);
   
</script>
<template>
    <div class="co-checkbox_group">
        <slot/>
    </div>
</template>
<style lang="less" scoped>
   
</style>
