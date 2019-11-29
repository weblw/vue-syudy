<template>
  <li>
    <div @click="toggle">
      {{model.title}}
      <span v-if="isFolder">[{{open?'-':'+'}}]</span>
    </div>
    <ul  v-show="open" v-if="isFloder">
      <item class="item" v-for="model in model.children" 
        :model='model' :key="model.title">
      </item>
    </ul>
  </li>
</template>
<script>
export default {
  name:"Item",
  props:{
    model:{
      type:Object,
      required:true
    }
  },
  data(){
    return {
      open:false
    }
  },
  computed:{
    isFloder(){
      return this.model.children && this.model.children.length
    }
  },
  methods:{
    toggle(){
      if(this.isFloder){
        this.open=!this.open
      }
    }
  }
}
</script>