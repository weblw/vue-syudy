// 全局路由守卫
router.beforeEach((to,from,next)=>{
  // 要访问/about且未登录需要去登陆
  if(to.meta.auth && !window.isLogin){
    if(window.confirm('请登录')){
      window.isLogin=true
      next() // 登陆成功，继续
    }else{
      next('/') // 放弃登录，去首页
    }
  }else{
    next() // 不需要登录
  }
})
// 路由独享守卫
beforeEnter(to,from,next){
  // 路由内部自己知道需要认证
  if(!window.isLogin){
    // ... 
  }else{
    next()
  }
}
// 组件内的守卫
export default{
  beforeRouterEnter(to,from,next){
    // this不可用
  },
  beforeRouterUpdate(to,from,next){},
  beforeRouterLeave(to,from,next){}
}
// 动态路由
// 异步获取路由
api.getRoutes().then(routes=>{
  const routeConfig=routes.map(route=>mapComponent(route))
  router.addRoutes(routeConfig)
})
// 映射关系
const comMap={
  'Home':()=>import('./view/Home.vue')
}
// 递归组件
function mapComponent(route){
  route.component=comMap[route.component]
  if(route.children){
    route.children=route.children.map(child=>mapComponent(child))
  }
  return route
}
// 面包屑
watch:{
  $route(){
    console.log(this.$route.matched)
    this.crumbData=this.$route.matched.map(m=>m.name)
  }
}