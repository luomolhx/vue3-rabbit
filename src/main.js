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

// 引入懒加载插件并注册
import { lazyPlugin } from './directives'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)

app.mount('#app')
