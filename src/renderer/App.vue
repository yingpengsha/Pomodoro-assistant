<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      :native-scrollbar="false"
      :collapsed-width="0"
      collapse-mode="transform"
      trigger-style="top: 240px; width: 40px; height: 40px;"
      collapsed-trigger-style="top: 240px; right: -30px; width: 40px; height: 40px;"
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
