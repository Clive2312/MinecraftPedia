import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import display from '@/components/header'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    }
  ]
})
