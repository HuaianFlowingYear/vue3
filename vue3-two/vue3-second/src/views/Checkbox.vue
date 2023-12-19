<template>
    <div :class="['checkes', `${porps.size}`,{'checktur':chese,'is-disabled':disabled}]" @click="chese=!chese">
        <input type="checkbox" v-model="chese">{{ label }}{{ attr.ischec }}
    </div>
</template>
<!-- {{ disabled }} -->
<script setup>
import { 
    ref,
    // onMounted,
    defineOptions,
    defineProps,
    useAttrs,
    // defineEmits
 } from 'vue'

//  const checkTypes = [
//   "large",
//   "default",
//   "small",
// ];


defineOptions({name:'Checkbox'})
const porps=defineProps({
    label:{
        type:String,
        requied:true
    },
    size: {
      type: String,
      default: () => "default",
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
})
// console.log(porps.size);
const attr = useAttrs()
// console.log(attr);
// const emit = defineEmits(["checks"])
const chese =ref(false)


// const count =ref(0)
// onMounted(()=>{
//     console.log(count.value);
// })
</script>


<style scoped  lang="less">
    .checktur{
        color: #409eff;
    }

    .checkes {
        width: 80px;
        height: 32px;
        margin-top: 10px;
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        
    }
    .large {
        font-size: 14px;
        height: 40px;
    }

    .large>input{
        width: 18px;
        height: 18px;
    }

    .default {
        font-size: 12px;
        height: 32px;
    }

    .small {
        font-size: 10px;
        height: 24px;
    }

    .small>input{
        width: 12px;
        height: 12px;
    }

    .checkes.is-disabled{
        color: #999;
        pointer-events: none;
        cursor: no-drop;
    }
    


</style>