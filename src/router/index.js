import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      component:()=>import("@/views/Main")
    },
  {
    path:"/phone",
    component:()=>import("@/views/phone/Phone")
  },
  {
    path:"/history",
    component:()=>import("@/views/history/History")
  },
  {
    path:"/news",
    component:()=>import("@/views/news/News")
  },
  {
    path:"/xingzuo",
    component:()=>import("@/views/xingzuo/XingZuo")
  },
  {
    path:"/ip",
    component:()=>import("@/views/ip/Ip")
  },
  {
    path:"/word",
    component:()=>import("@/views/word/Word")
  },
  {
    path:"/weather",
    component:()=>import("@/views/weather/Weather")
  },
  {
    path:"/joke",
    component:()=>import("@/views/joke/Joke")
  },
  {
    path:"/money",
    component:()=>import("@/views/money/Money")
  },
  {
    path:"/star",
    component:()=>import("@/views/star/Star")
  },
  {
    path:"/gold",
    component:()=>import("@/views/gold/Gold")
  },
  {
    path:"/shengxiao",
    component:()=>import("@/views/shengxiao/ShengXiao")
  },
  {
    path:"/car",
    component:()=>import("@/views/car/Car")
  },
  {
    path:"/date",
    component:()=>import("@/views/date/Date")
  }
]

const router = new VueRouter({
  routes
})

export default router
