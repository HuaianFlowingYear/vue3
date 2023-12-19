<script setup>
    import { defineProps,inject,computed} from 'vue';
    const props = defineProps({
        label:{
            type:String,
            required:true,
        },
        value:{
            type:Boolean,
        },
    })
    const checkedCities = inject("checked-cities");
    const updateCheckedValue = inject("updateCheckedValue");
    const isChecked = computed(() =>{
      return checkedCities.value.includes(props.label);
     });
    //  const emit = defineEmits(["update: value " ]);
</script>
<template>
  <label class="co-checkbox" @click="updateCheckedValue(props.label)">
    <span :class=" ['co-checkbox_pointer', {'is-checked':isChecked }]"></span>
    <span :class=" ['co-checkbox__label', {'is-checked':isChecked}]">
      {{ props.label }}
    </span>
  </label>
   <!-- <label @click="emit('update:value',!props.value)" class="co-checkbox">
     <span :class="['co-checkbox__pointer',{'is-checked':value}]"></span>
     <span :class="co-checkbox__label">{{ props.label}}</span>
   </label> -->

</template>
<style lang="less" scoped>
  .co-checkbox {
    &__pointer {
      width: 14px;
      height: 14px;
      background: #fff;
      border: 1px solid rgb(220, 223, 230);
      border-radius: 2px;
      display: inline-block;

      &.is-checked {
        background-color: #409eff;
        border: 1px solid #409eff;
      }
    }

    &__label {
      font-size: 14px;
      color: #606266;

      &.is-checked {
        color: #409eff;
      }
    }
  }
</style>