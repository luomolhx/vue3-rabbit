// import './assets/main.css'
// 引入初始化的样式文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 测试接口函数
// import { getCategory } from '@/apis/testAPI'
// getCategory().then((res) => {
//   console.log(res)
// })

import { useIntersectionObserver } from '@vueuse/core'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义全局指令
app.directive('img-lazy', {
  mounted(el, binding) {
    // el: 指令绑定的那个元素
    // binding: binding.value 指令等于号后面绑定的表达式的值 图片url
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      console.log(isIntersecting)
      if (isIntersecting) {
        // 进入视窗区域
        el.src = binding.value
      }
    })
  }
})
