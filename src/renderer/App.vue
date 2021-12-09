<template>
  <n-layout has-sider>
    <LeftSider />
    <n-layout-content>
      <CenterClock />
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent } from 'naive-ui'
import LeftSider from '@/blocks/leftSider/index.vue';
import CenterClock from '@/blocks/centerClock/index.vue';

</script>

<style lang="less" scoped>
</style>
