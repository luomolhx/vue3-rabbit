<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSticky from './components/LayoutSticky.vue'

// 触发获取导航信息的action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())
</script>

<template>
  <LayoutSticky />
  <LayoutNav />
  <LayoutHeader />
  <!-- 添加key 破坏vue复用机制 强制销毁重建 :key="$route.fullPath"-->
  <RouterView />
  <LayoutFooter />
</template>

<style></style>
