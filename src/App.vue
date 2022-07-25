<template>
<div>
  <AppMenu />
  <router-view></router-view>
  </div>
</template>

<script>
import AppMenu from './components/AppMenu.vue'
//import CalenderPage from './components/CalenderPage.vue'

export default {
  name: 'App',
  components: {
   AppMenu,
   //CalenderPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
