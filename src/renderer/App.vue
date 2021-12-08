<template>
  <n-layout has-sider>
    <n-layout-sider
      :native-scrollbar="false"
      :collapsed-width="0"
      collapse-mode="transform"
      trigger-style="top: 240px;"
      collapsed-trigger-style="top: 240px; right: -20px;"
      bordered
      show-trigger="arrow-circle"
    >
      时钟列表
    </n-layout-sider>
    <n-layout-content>
      当前进度
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutSider, NLayoutContent } from 'naive-ui'
</script>

<style>

</style>
