<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: String,
  size: Boolean,
  checked: Boolean,
  disabled: Boolean
});

const handleChange = () => {
  emit('update:checked', !props.checked);
};
 
const emit = defineEmits(['update:checked']);
</script>
<!-- asads -->
<template>
  <label>
    <input type="checkbox" :checked="props.checked" @click="handleChange">
    <span :class="['checkbox',`checkbox-${size}`,{disabled:'disabled'==disabled}]">{{ props.label }}</span>
  </label>
  
</template>

<style lang="less" scoped>
  @size:{
    large:20px;
    small:12px;
  }

  .checkbox {
    each(@size,{
        &-@{key}{
            font-size: @value;
        }
    })
  }
  input:checked + .checkbox {
    color: #409eff;
  } 

  .disabled{
    background-color: #409eff * #444;
    border-color: #409eff * #444;
    cursor: not-allowed;
  }
  
  
  
</style>
