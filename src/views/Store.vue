<template>
  <div>
    <div>冲啊，手榴弹扔了{{$store.state.count}}</div>
    <p>{{$store.getters.score}}</p>
    <button @click="add">扔一个</button>
    <button @click="addSync">蓄力扔两个</button>
  </div>
</template>
<script>
export default {
  methods:{
    add(){
      this.$store.commit('increment')
    },
    addSync(){
      this.$store.dispatch('incrementAsync')
    }
  }
}
</script>