<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/home">home</router-link>| -->
    <router-link to="/pinia">pinia</router-link>|
    <router-link to="/button">button</router-link>|
    <router-link to="/checkbox">checkbox</router-link>|
    <router-link to="/card">card</router-link>|
    <router-link to="/drawer">drawer</router-link>|
    <router-link to="/menu">menu</router-link>|
    <router-link to="/tree">tree</router-link>|
    <!-- <router-link :to="{name:'mine',params:{name:'zhangsan',id:1}}">mine</router-link>| -->
    <!-- <router-link to="/a">AAA</router-link>|
    <router-link to="/b">BBB</router-link>| -->
    

  </nav>
  
  <router-view/>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
