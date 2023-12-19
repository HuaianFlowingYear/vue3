<script setup>
    import { ref ,computed} from 'vue';
    const list = ref(["1","2","3","4","5"]);
    const checkedItems = ref(["1"]);
    const allChecked = computed({
        get(){
            return list.value.length == checkedItems.value.length;
        },
        set(value){
            // if(value){
            //     checkedItems.value = list.value;
            // }else{
            //     checkedItems.value = [];
            // }
            checkedItems.value = value ? list.value : [];
        }
    })
   
  
   
</script>
<template>
    <div class="w">
        <co-checkbox-group v-model:value="checkedItems">
            <div>
                <co-checkbox v-for="item in list" :label="item" :key="item"></co-checkbox>
            </div>
        </co-checkbox-group>
        <hr>
        <div @click="allChecked = !allChecked">
            <span v-if="allChecked">全选</span>
            <span>全不选</span>
        </div>
    </div>
</template>
<style lang="less" scoped>
   
</style>