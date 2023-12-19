<script setup>
   import { ref } from 'vue'
   const currentDate = ref(new Date())
</script>
<template>
    <co-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>Card name</span>
                <co-button class="button" text>Operation button</co-button>
            </div>
        </template>
        <div class="wen">
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </div>
       
        <template #footer>
         <p class="foot">
          Footer content
         </p>  
        </template>
    </co-card>
    <br>
    <co-card class="box-card">
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </co-card>
    <br>
    <div style="display: flex;">
        <co-card v-for="(o) in 2" :key="o" class="boc_card">
            <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            />
            <div style="padding: 14px">
                <span>Yummy hamburger</span>
                <div class="bottom">
                    <time class="time">{{ currentDate }}</time>
                    <co-button text class="button">Operating</co-button>
                </div>
            </div>
        </co-card>
    </div>
    <br>
    <div style="margin-top: 20px; display: flex;">
        <co-card shadow="always">Always</co-card>
        <co-card shadow="hover">Hover</co-card>
        <co-card shadow="never">Never</co-card>
    </div>
</template>
<style lang="less" scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin: 15px 0;
  }  
  .text {
    color: #606266;
    display: flex;
    font-size: 14px;
  }
  
  .button{
    border: none;
    background-color: none;
  }
  .button:hover{
    background-color: #ccc;
    border-radius: 8px;
  }
  .item {
    margin-bottom: 18px;
  }
  
  .box-card {
    margin-top: 10px;
    border-radius: 10px;
    background: #ffffff;
    width: 480px;
    box-shadow: 0 0  12px rgba(0, 0, 0, .2);
  }
  
  .boc_card {
    padding: 0;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: 10px;
    width: 222px;
    background: #ffffff;
    box-shadow: 0 0  12px rgba(0, 0, 0, .12);
  }
  .wen{
    border-bottom: 1px solid #ccc;
  }
  
  .time {
    font-size: 12px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .image {
    width: 100%;
    display: block;
  }
  
</style>