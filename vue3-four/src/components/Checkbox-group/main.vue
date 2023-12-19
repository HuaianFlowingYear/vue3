<template>
    <div class="co-checkbox-group">
        <slot />
    </div>
</template>

<script setup>
import { defineProps,defineEmits,provide,toRef } from 'vue'
const porps=defineProps({
    value: {
      type: Array,
      default: () => [],
    },
})

// const checkedCitise = computed(()=>props.value)
const emit = defineEmits(["update:value"])
provide("checked-cities",toRef(porps,"value"))
const updateCheckedValue=(payload)=>{
    const result = [...porps.value];
    const index = result.indexOf(payload)
    index>-1?result.splice(index,1):result.push(payload)
    emit("update:value",result)
}
provide("updateCheckedValue",updateCheckedValue)


</script>


<style scoped  lang="less">

</style>