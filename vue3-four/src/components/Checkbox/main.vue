<template>
    <label class="co-checkbox" @click="updateCheckedValue(props.label)">
        <span :class="['co-checkbox__pointer',{'is-checked':isChecked}]"></span>
        <span :class="['co-checkbox__lable',{'is-checked':isChecked}]">{{ props.label }}</span>
    </label>
</template>
<!-- {{ disabled }} -->
<script setup>
import { 
    defineProps,
    computed,
    inject,
 } from 'vue'
 

// defineOptions({name:'Checkbox'})
const props=defineProps({
    label:{
        type:String,
        requied:true
    },
    value: {
      type: Boolean,
    },
})

const checkedCitise= inject ("checked-cities");
const updateCheckedValue = inject("updateCheckedValue")

const isChecked = computed(()=>{
    return checkedCitise.value.includes(props.label)
})
// const emit = defineEmits(["updata:value"])
</script>

<style scoped  lang="less">
    .co-checkbox{
        &__pointer{
            display: inline-block;
            width: 14px;
            height: 14px;
            background-color: #fff;
            border: 1px solid rgb(220, 223, 230);
            border-radius: 2px;
            &.is-checked{
                background-color: #409eff;
                border: 1px solid #409eff;
            }

            &__lable{
                font-size: 14px;
                color: #606266;
                &.is-checked{
                    color: #409eff;
                }
            }
        }
    }
</style>