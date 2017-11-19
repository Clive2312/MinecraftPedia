import Vue from 'vue'
import container from '@/components/container'

describe('container', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(container)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container a').textContent)
    .toEqual('Wiki')
  })
})
