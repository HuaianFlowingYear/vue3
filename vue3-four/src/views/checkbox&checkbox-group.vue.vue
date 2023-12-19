<script setup>
    import { ref,computed } from 'vue'
    const cyties = ["beijing","shanghai","shenzhen","guangzhou"]
    const checkedCity= ref(["beijing"])
    const list = ref(["1","2","3","4","5"])
    const checkedItem = ref(["1"])
    const allChecked = computed({
        get(){
            return list.value.length==checkedItem.value.length
        },
        set(value){
            checkedItem.value =value? list.value:[];
        }
    })
</script>
<template>
    <co-checkbox-group v-model:value="checkedCity">
        <co-checkbox v-for="city in cyties" :label="city" :key="city"></co-checkbox>
    </co-checkbox-group>
    <br>
    <div>
        <h1>全选/全不选</h1>
        <co-checkbox-group v-model:value="checkedItem">
            <div v-for="item in list" :key="item">
                <co-checkbox :label="item"></co-checkbox>
            </div>
        </co-checkbox-group>
        <div>
            <span v-if="allChecked">全选</span>
            <span v-else>全不选</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
   
</style>