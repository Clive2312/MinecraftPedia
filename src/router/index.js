import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import container from '@/components/container'

Vue.use(Router)
Vue.use(Element)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    }
  ]
})
