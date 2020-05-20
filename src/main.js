import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import axios from 'axios'
import { 
  Button,
  Col, 
  Row,
  Icon,
  Field,
  AddressEdit,
  Collapse, 
  CollapseItem,
  DropdownMenu, 
  DropdownItem,
  Circle 
} 
from 'vant'
Vue.use(Icon);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Field);
Vue.use(AddressEdit);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Circle);

Vue.config.productionTip = false

fastClick.attach(document.body)
Vue.prototype.$http = axios.create({
  baseURL:"http://39.100.225.255:8088"
})
Vue.mixin({
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
