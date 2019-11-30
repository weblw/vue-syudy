<template>
  <div id="app">
    <!-- <Form />
    <Tree />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/user">User</router-link> 
    </div>
    <router-view></router-view> -->
    <Store />
  </div>
</template>

<script>
import Form from './views/Form'
import Tree from './views/Tree'
import Store from './views/Store'
export default {
  name: 'app',
  components: {
    Form,
    Tree,
    Store
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
