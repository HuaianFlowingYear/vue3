<template>
    <div class="wrapper">
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

<script setup>
import { ref,computed } from 'vue'
const list = ref(["1","2","3","4","5"])
const checkedItem = ref(["1"])

const allChecked = computed({
    get(){
        return list.value.length==checkedItem.value.length
    },
    set(value){
        // if (value) {
            checkedItem.value =value? list.value:[];
        // }else{
        //     checkedItem.value = []
        // }
    }
})


</script>


<style scoped  lang="less">

</style>