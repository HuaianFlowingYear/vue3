<template>
    <div :class="[`${shadow}`]">
        <slot name="header"></slot>
        <main>
            <slot></slot>
        </main>
        <slot name="footer"></slot>

    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'
const count =ref(0)
console.log(count);
const props=defineProps({
    shadow:{
        type:String,
        requied:true
    },
})

console.log(props);
</script>


<style scoped  lang="less">
div{
    padding: 20px;
    margin-left:10px;
    border:1px solid #ccc;
    border-radius:10px;
}

footer{
    border-top:1px solid #ccc;
    margin-top:10px;
}

.always {
    box-shadow: 0 0  12px rgba(0, 0, 0, .2);
}

.hover:hover {
    box-shadow: 0 0  12px rgba(0, 0, 0, .2);
}



</style>