<template>
  <div id="app">
    <Form />
    <Tree />
  </div>
</template>

<script>
import Form from './views/Form'
import Tree from './views/Tree'
export default {
  name: 'app',
  components: {
    Form,
    Tree
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
