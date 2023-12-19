<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter();
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="router.push('/mine/zhangsna/88')">to mine</button>
    <button @click="router.push({
      name: 'mine',
      params: {
        name: 'zhangsna',
        id: 88
      }
    })">but</button>
    <button @click="router.push({
      path: '/mine/zhangsna/88',
      query: {
        name: 'lisi',
        id: 18
      }
    })">to mine</button>
  </div>
</template>
